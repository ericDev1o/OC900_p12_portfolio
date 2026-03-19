#!/bin/bash
set -e

trap "kill 0" EXIT

export TMPDIR=/tmp
export VITE_CACHE_DIR=/tmp/vite

rm -rf node_modules/.vite || true

Xvfb :99 -screen 0 1280x720x24 &

export DISPLAY=:99

yarn vitest run --config vitest.integration.config.ts