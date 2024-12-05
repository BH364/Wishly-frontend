import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, bestseller }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="cursor-pointer" to={`/products/${id}`}>
      <div className="relative overflow-hidden">
        {bestseller && (
          <div className="absolute top-2 left-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">
            Bestseller
          </div>
        )}
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-110 transition ease-in-out w-full h-auto"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
