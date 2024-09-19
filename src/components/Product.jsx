import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(add(product));
    console.log("Product added to cart:", product);
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-[90svh] bg-white p-6">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="min-w-[20svw] rounded-lg overflow-hidden shadow-lg bg-white m-4 transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-[100px] object-contain"
              src={product.image}
              alt={product.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold max-w-[15svw] text-sm mb-2 text-gray-800">
                {product.title}
              </div>
              <span className="block text-lg font-semibold text-blue-500 mt-2">
                ${product.price}
              </span>
            </div>
            <div className="px-6 pt-4 pb-6 flex justify-between items-center">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
