import fetch from "node-fetch";

fetch("https://api.nationaltransport.ie/gtfsr/v1?format=json", {
  method: "GET",
  // Request headers
  headers: {
    "Cache-Control": "no-cache",
  },
})
  .then((response) => {
    console.log(response.status);
    console.log(response.text());
  })
  .catch((err) => console.error(err));
