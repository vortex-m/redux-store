import React from "react";
import Product from "../components/Product";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h2 className="text-xl font-bold">Welcome to Redux Store.</h2>
      <div>
        <Product/>
      </div>
    </div>
  );
}

export default Home;