import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, {method: "GET"}).then(res => res.json()).then(data => setProduct(data))
  }, [id]);

  console.log(product,
    "PRODUCT"
  );



  return (
    <div className='py-[100px]'>

      <div className="relative w-[650px] h-[510px] bg-slate-50 rounded-3xl p-[30px]">
        <div className="text-start text-black flex flex-col items-start gap-[30px]">
          <h1 className="text-[30px]">{product?.title}</h1>
          <img
            src={product?.image}
            alt={product?.title}
            className=" w-[150px] h-[150px] "
          />
          <p className="absolute bottom-[100px]">Price: ${product?.price}</p>
          <p>{product?.description}</p>
          <div className="flex items-center gap-4">
            <Link to={`/home`}>
              <button className="absolute bottom-[30px] px-4 py-1 bg-transparent border-[3px] rounded-xl border-black">
                Go Home
              </button>
            </Link>
            <Link to={`/products`}>
                    <button className=" absolute left-[130px] bottom-[30px] px-4 py-1 bg-transparent border-[3px] rounded-xl border-black">
                      More Products
                    </button>
                  </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
