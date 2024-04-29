export async function http<T>(request: string): Promise<T> {
  const response = await fetch(request, {
    headers: {
      "X-API-KEY": "VZ0T0WW-FC14MEW-KWCBC7F-8A07GZM",
    },
  });
  if (!response.ok) {
    throw new Error(`error status ${response.status}`);
  }
  const data = await response.json();
  return data;
}
