import { CMS_URL } from "../constants/root";

export function getStrapiURL(path = '') {
  // const url = 'ec2-3-8-148-62.eu-west-2.compute.amazonaws.com';
  // const url = 'localhost:1337'
  return `${CMS_URL}${path}`;
  // return `http://localhost:1337${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getPageData(slug, preview = false) {
  // Find the pages that match this slug
  console.log(preview)
  const pagesData = await fetchAPI(
    `/pages?slug=${slug}&status=published${preview ? "&status=draft" : ''}`
  );
 
  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null;
  }
 
  // Return the first item since there should only be one result per slug
  return pagesData[0];
 }