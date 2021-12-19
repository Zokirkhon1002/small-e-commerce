import React, { useEffect, useState } from "react";
import Product from "./components/Product";

export function App() {
  const [data, setData] = useState();

  useEffect(async () => {
    const data = await fetch("http://localhost:3009/product")
    .then((res) =>
      res.json()
    );
    setData(data)
  },[]);

  return (
    <div>
      {data && <Product productInfo={data}></Product>}
    </div>
  );
}
