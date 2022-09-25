const BASE_URL =
  'http://pizza-env.eba-phdkicep.ap-southeast-1.elasticbeanstalk.com/api/v1';
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
      headers: { 'Content-Type': 'text/html' },
      body: data,
    }
  );
  return response.json();
}
