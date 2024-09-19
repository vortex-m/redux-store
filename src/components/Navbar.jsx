import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const items = useSelector((state) => state.carts);
  return (
    <div className="flex justify-between p-4 items-center">
      <span className="text-2xl ml-5 font-bold">Redux Store</span>
      <div className="flex justify-around items-center w-[80%]">
        <Link className="text-blue-700" to="/">
          Home
        </Link>
        <Link className="text-blue-700" to="/cart">
          Cart
        </Link>
        <span className="font-mono text-lg">cart items: {items.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
