
export const parseURL = rawURL => {
  const urlParts = rawURL.split("?");
  const url = urlParts[0];

  const params = {};
  const queryString = urlParts.length > 2
    ? urlParts.splice(1, urlParts.length).join("?")
    : urlParts[1];
  const urlParams = new URLSearchParams(queryString);
  for (const entry of urlParams.entries()) {
    params[entry[0]] = entry[1]
  }

  return {
    url,
    params,
  }
};
