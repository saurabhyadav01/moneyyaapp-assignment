import React, { useEffect } from "react";
import { useState } from "react";
import Home from "./Home";
import Loader from "./Loader";

function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div>{loading ? <Loader /> : <Home />}</div>
    </>
  );
}

export default Landing;
