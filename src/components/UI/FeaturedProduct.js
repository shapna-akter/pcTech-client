import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProduct = ({ allCategory }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20 mx-4 lg:mx-20">
      {allCategory?.map((category) => (
        <Link key={category.id} href={`/${category?.categoryName}`}>
          <div className="relative overflow-hidden rounded-md shadow-lg transition transform hover:scale-105">
            <Image
              className="w-full"
              src={category.image}
              width={100}
              height={150}
              alt={`${category.category}-image`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
              <p className="text-xl font-bold text-white text-center">
                {category?.category}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProduct;
