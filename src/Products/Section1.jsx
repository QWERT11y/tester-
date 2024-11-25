import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data)
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products,
    "PRODUCTS"
  );



  return (
    <div className=" container flex flex-row justify-center items-center py-[100px]">
      <div className="flex flex-wrap gap-[40px] justify-center ">
        {products?.map((el) => {
          return (
            <div key={el.id} className="relative w-[400px] h-[340px] bg-slate-50 rounded-3xl p-[30px]">
              <div className="text-start text-black flex flex-col items-start gap-[30px]">
                <h1 className="text-[30px]">{el.name}</h1>
                <img
                  src={el.image} 
                  alt={el.title} 
                  style={{ width: "150px", height: "150px" }} 
                />
                <p className="absolute bottom-[100px]">
                  {el.price}
                </p>
                <mark>{el.category}</mark>
                <p>{el.createdAt}</p>

                <div className="flex items-center gap-4">
                  <Link to={`/cards/${el.id}`}>
                    <button className=" absolute bottom-[30px] px-4 py-1 bg-transparent border-[3px] rounded-xl border-black">
                      More
                    </button>
                  </Link>
                
                </div>
              </div>
            </div>
          )
        })}
        {/* <a href="https://storyset.com/nature">Nature illustrations by Storyset</a> */}
      </div>
    </div>
  );
};

export default Section1;
