export const generalFetch = (
  method: string,
  endpoint: string,
) => {
  
  return fetch(endpoint, {
    method: method,
  })
}