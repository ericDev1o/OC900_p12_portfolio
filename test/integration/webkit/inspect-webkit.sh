#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="oc-webkit"
IMAGE_TAG="latest"
MAX_SIZE_MB=1000
BASE_IMAGE="mcr.microsoft.com/playwright:v1.58.2"
MAX_USER_LAYERS=7
EXPECTED_PREVIOUS_BASE_LAYERS_COUNT=4
BASE_IMAGE_LAYERS_DRIFT_TOLERANCE=5
EXPECTED_PREVIOUS_BASE_SIZE_MB=2279
BASE_IMAGE_SIZE_MB_DRIFT_TOLERANCE=500

if ! docker image inspect "$BASE_IMAGE" > /dev/null 2>&1; then
  echo "Pulling base image..."
  docker pull "$BASE_IMAGE"
fi

echo "🔍 1. inspect image"
IFS=' ' read -r BASE_IMAGE_SIZE_BYTES BASE_LAYERS_COUNT <<< "$(docker image inspect "$BASE_IMAGE" \
  --format='{{.Size}} {{len .RootFS.Layers}}')"

IFS=' ' read -r SIZE_BYTES FINAL_LAYERS_COUNT <<< "$(docker image inspect "$IMAGE_NAME:$IMAGE_TAG" \
  --format='{{.Size}} {{len .RootFS.Layers}}')"

# Base metrics
BASE_IMAGE_SIZE_MB=$((BASE_IMAGE_SIZE_BYTES / 1024 / 1024))

# Final metric
SIZE_MB=$((SIZE_BYTES / 1024 / 1024))

echo "🔍 1.1 size"
echo "🔍 1.1.1 checking base playwright docker image size drift..."

echo "# Playwright image (base) size: $BASE_IMAGE_SIZE_MB MB"
echo "# Expected previous base size: $EXPECTED_PREVIOUS_BASE_SIZE_MB MB"

if [ "$BASE_IMAGE_SIZE_MB" -gt $((EXPECTED_PREVIOUS_BASE_SIZE_MB + BASE_IMAGE_SIZE_MB_DRIFT_TOLERANCE)) ] \
  || [ "$BASE_IMAGE_SIZE_MB" -lt $((EXPECTED_PREVIOUS_BASE_SIZE_MB - BASE_IMAGE_SIZE_MB_DRIFT_TOLERANCE)) ]; then
  echo "❌ Base image size drift detected"
  exit 1
fi

DELTA_BASE_SIZE_MB=$((BASE_IMAGE_SIZE_MB - EXPECTED_PREVIOUS_BASE_SIZE_MB))
echo "Base size drift: $DELTA_BASE_SIZE_MB"

echo "✅ No playwright image size drift"
echo "🔍 1.1.2 checking image size..."

SIZE_MB=$((SIZE_BYTES / 1024 / 1024))

echo "Image size: ${SIZE_MB} MB"

if [ "$SIZE_MB" -gt "$MAX_SIZE_MB" ]; then
  echo "❌ Image too large (> ${MAX_SIZE_MB} MB)"
  exit 1
fi

echo "Max size: ${MAX_SIZE_MB} MB"

echo "✅ Size is acceptable for a scarcely ever used Minimum Viable Webkit user a11y test."
echo "🔍 1.2 layers"

echo "🔍 1.2.1 checking base image layers count drift..."

echo "# Playwright image (base) layers: $BASE_LAYERS_COUNT"
echo "# Expected previous base layers: $EXPECTED_PREVIOUS_BASE_LAYERS_COUNT"

if [ "$BASE_LAYERS_COUNT" -gt $((EXPECTED_PREVIOUS_BASE_LAYERS_COUNT + BASE_IMAGE_LAYERS_DRIFT_TOLERANCE)) ] \
  || [ "$BASE_LAYERS_COUNT" -lt $((EXPECTED_PREVIOUS_BASE_LAYERS_COUNT - BASE_IMAGE_LAYERS_DRIFT_TOLERANCE)) ]; then
  echo "❌ Base image structure drift detected"
  exit 1
fi

DELTA_BASE_LAYERS_COUNT=$((BASE_LAYERS_COUNT - EXPECTED_PREVIOUS_BASE_LAYERS_COUNT))
echo "Base layer drift: $DELTA_BASE_LAYERS_COUNT"

echo "✅ No playwright image drift"
echo "🔍 1.2.2 checking user created layers count..."

USER_LAYERS=$((FINAL_LAYERS_COUNT - BASE_LAYERS_COUNT))

echo "# Final layers: $FINAL_LAYERS_COUNT"
echo "# User created layers (delta): $USER_LAYERS"

if [ "$USER_LAYERS" -gt "$MAX_USER_LAYERS" ]; then
  echo "❌ Too many user created layers (> ${MAX_USER_LAYERS})"
  exit 1
fi

echo "Max user created layers: ${MAX_USER_LAYERS}"

echo "✅ User created layers count OK"

echo "🛡 2.2 scanning image for CVEs"

if command -v trivy &> /dev/null; then
  TRIVY_CMD="trivy"
else
  echo "⚠️ Trivy not found locally, using Docker fallback"
  TRIVY_CMD="docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy"
fi

echo "👉 Showing MEDIUM, HIGH, CRITICAL vulnerabilities:"
$TRIVY_CMD image --severity MEDIUM,HIGH,CRITICAL --scanners vuln "$IMAGE_NAME:$IMAGE_TAG"

echo "👉 Failing on HIGH and CRITICAL vulnerabilities:"
$TRIVY_CMD image --exit-code 1 --severity HIGH,CRITICAL --scanners vuln "$IMAGE_NAME:$IMAGE_TAG"

echo "✅ Scan completed"