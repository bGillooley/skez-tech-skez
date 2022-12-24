import { useState, useEffect } from "react";
function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.nationaltransport.ie/gtfsr/v1?format=json", {
      method: "GET",
      mode: "no-cors",
      // Request headers
      headers: {
        "Cache-Control": "no-cache",
        "x-api-key": "0e848d569e2f478da345d873053d2522",
      },
    }).then((response) => console.log(response));
  }, []);

  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
