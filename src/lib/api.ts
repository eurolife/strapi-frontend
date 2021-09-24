export function getStrapiURL(path = '') {
  const url = 'ec2-3-8-148-62.eu-west-2.compute.amazonaws.com';
  return `http://${url}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}