// Masalah:
// data awalnya undefined, jadi data.title akan error.

import {useEffect, useState} from "react";

function MyComponent() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  //   return <div>{data.title}</div>;
  return <div>{data ? data.title : "Loading..."}</div>; // ini yang sudah diperbaiki
}

export default MyComponent;
