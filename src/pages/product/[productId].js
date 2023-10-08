import MainLayout from "@/components/Layout/MainLayout";
import { Row } from "antd";
import Image from "next/image";
import React from "react";

const ProductDetailsPage = ({ pcData }) => {
  // console.log(pcData.key_features);

  function getAllKeyValuePairs(obj) {
    const keyValuePairs = [];

    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        keyValuePairs.push({ key: key, value: obj[key] });
      }
    }

    return keyValuePairs;
  }
  const pcFeaturesInFeatures = getAllKeyValuePairs(pcData?.key_features);

  const ratings = getAllKeyValuePairs(pcData?.individual_rating);

  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 lg:pt-24 pt-4 pb-16 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={pcData?.image}
              alt="ecommerce"
              width={500}
              height={500}
            ></Image>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {pcData?.category}
              </h2>
              <h1 class="text-fuchsia-800 text-3xl title-font font-medium mb-1">
                {pcData.name}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-fuchsia-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-fuchsia-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-fuchsia-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-fuchsia-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-fuchsia-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">
                    {pcData?.average_rating}{" "}
                    <span className="text-lg">average Reviews</span>
                  </span>
                </span>
              </div>
              {ratings.slice(0, 1).map((rating, i) => (
                <div key={i} class="flex mb-4">
                  <span class="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-fuchsia-800"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-fuchsia-800"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-fuchsia-800"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-fuchsia-800"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-fuchsia-800"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="text-gray-600 ml-3">
                      {rating.key} {rating.value}
                    </span>
                  </span>
                </div>
              ))}
              <p class="leading-relaxed">{pcData?.description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="mr-3 text-lg">Status</span>
                  <p className="text-lg font-bold">{pcData?.status}</p>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${pcData?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:flex text-center justify-center items-center">
        <section class="text-gray-600 body-font overflow-hidden lg:w-1/2">
          <div class="container px-5 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <div class="flex mb-4">
                  <a class="flex-grow text-fuchsia-800 hover:text-fuchsia-600 border-b-2  py-2 text-2xl font-bold px-1">
                    Key Feature
                  </a>
                </div>
                <div>
                  {pcFeaturesInFeatures.map((feature, i) => (
                    <div key={i} class="flex border-t border-gray-200 py-2">
                      <span class="text-gray-500">{feature?.key}</span>
                      <span class="ml-auto text-gray-900">
                        {feature?.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:5000/pc");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/product/${params.productId}`);
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
