

export const callApi = async ()=>{
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
  return result;
}