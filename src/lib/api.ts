import { CMS_URL } from "../constants/root";

export function getStrapiURL(path = '') {
  // const url = 'ec2-3-8-148-62.eu-west-2.compute.amazonaws.com';
  // const url = 'localhost:1337'
  return `${CMS_URL}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}