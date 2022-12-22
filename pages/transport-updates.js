import { useState, useEffect } from "react";

export default function TransportUpdate() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    fetch("https://api.nationaltransport.ie/gtfsr/v1?format=json", {
      method: "GET",
      mode: "no-cors",
      // Request headers
      headers: {
        "Cache-Control": "no-cache",
        "x-api-key": "0e848d569e2f478da345d873053d2522",
      },
    })
      .then((response) => {
        console.log(response.status);
        console.log(response.text());
      })
      .catch((err) => console.error(err));
    fetch("https://api.nationaltransport.ie/gtfsr/v1?format=json", {
      method: "GET",
      mode: "no-cors",
      // Request headers
      headers: {
        "x-api-key": "0e848d569e2f478da345d873053d2522",
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => {
        console.log(response.status);
        console.log(response.text());
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return <div>This is here</div>;
}
