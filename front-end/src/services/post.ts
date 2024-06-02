export async function post<T>(endpoint: string, data: T) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  const response = await fetch(`http://localhost:3001/${endpoint}`, options);
  const responseData = await response.json();

  if (!response.ok) throw responseData;

  return responseData;
}
