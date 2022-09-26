const BASE_URL =
  'https://nil-pizza-api.indifferentcat.dev/api/v1';
export async function getAllOrders() {
  try {
    const response = await fetch(BASE_URL + '/orders');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createOrder(data) {
  const response = await fetch(
    BASE_URL + '/orders',
    {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: data,
    }
  );
  return response.json();
}
