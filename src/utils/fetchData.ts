export async function fetchData<T>(
  path: string,
  signal?: AbortSignal
): Promise<T> {
  const res = await fetch(
    `${import.meta.env.BASE_URL}${path}`,
    { signal }
  );

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`);
  }

  return res.json();
}
