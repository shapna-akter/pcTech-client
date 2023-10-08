import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToBuild } from "@/redux/features/builder/builderSlice";

const Featured = ({ pcData }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 my-8 mx-4 lg:mx-0">
      {pcData.slice(0, 6).map((product, i) => (
        <Card
          className="w-full lg:w-[350px] shadow-md h-[450px] bg-gray-300 border-2"
          key={i}
          cover={
            <Image
              className="w-full lg:w-[200px]"
              src={product.image}
              width={200}
              height={250}
              alt="pc-featured"
            ></Image>
          }
        >
          <div className="h-30">
            <p className="text-sm">{product?.name}</p>
            <p className="text-sm font-normal">
              Category:{" "}
              <span className="font-semibold">{product?.category}</span>
            </p>
            <p className="text-sm font-normal">
              Price: <span className="font-semibold">{product?.price}</span>
            </p>
            <p className="text-sm font-normal">
              Status: <span className="font-semibold">{product?.status}</span>
            </p>
            <p className="text-sm font-normal">
              Rating:{" "}
              <span className="font-semibold">{product?.average_rating}</span>
            </p>
          </div>
          <div className="flex-col items-center mt-2">
            <Link className="w-full mt-2" href={`/product/${product?._id}`}>
              <Button type="primary w-full mb-0  bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md shadow-orange-300">
                Details
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Featured;
