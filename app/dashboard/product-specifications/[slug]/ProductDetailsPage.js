"use client";

import { BsPatchExclamation } from "react-icons/bs";
import ProductSpecifications from "./ProductSpecifications";
import ProductTop from "./ProductTop";
import { useProduct } from "@/app/_features/products/useProduct";
import Spinner from "@/app/components/ui/Spinner";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./UpdateProduct";
import useCheckPermission from "@/app/_hooks/usePermission";
import Image from "next/image";

const ProductDetailsPage = ({ params }) => {
  const isProductUpdatePermission = useCheckPermission("product_update");
  const isProductDeletePermission = useCheckPermission("product_delete");
  const { isLoading, product, error, isError } = useProduct(params.slug);

  if (isLoading) return <Spinner />;
  if (isError && error) return;

  console.log("product", product);

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="heading-h1 my-4 mb-8">Product Specifications</h1>
        <div className="flex gap-3">
          {isProductUpdatePermission && <EditProduct product={product} />}
          {isProductDeletePermission && (
            <DeleteProduct productId={product.id} />
          )}
        </div>
      </div>
      <ProductTop product={product} />
      <div className="product__details mt-12">
        <div>
          <h2 className="heading-h1 my-3 text-2xl mt-6 text-center">
            Product Details
          </h2>
          <div className="product__introduction">
            <h2 className="bg-color-primary flex items-center justify-center gap-1 py-2 font-serif">
              <BsPatchExclamation />
              <span>Introduction</span>
            </h2>
            <p className="text-center my-3 shadow-sm pb-3">
              {product.introduction}
            </p>
          </div>
          <div className="product__features">
            <h2 className="bg-color-primary flex items-center justify-center gap-1 py-2 font-serif">
              <BsPatchExclamation />
              <span>Key Features</span>
            </h2>
            <div className="my-3 shadow-sm pb-3">
              <ul className="md:list-disc pl-1 md:pl-10">
                {product?.specification?.map((feature, i) => (
                  <li className="flex gap-2 items-center" key={i + 1}>
                    <Image
                      src={`https://electro-api.sifztech.com${feature.icon_path_value}`}
                      alt="name"
                      width={25}
                      height={25}
                    />
                    <span>{feature.value}</span>
                  </li>
                ))}
              </ul>
              {/* 
                {product.key_features.split(",").map((feature, i) => (
                  <li key={i + 1}>{feature}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
        <div className="product__specifications">
          <h2 className="bg-color-primary flex items-center justify-center gap-1 py-2 font-serif">
            <BsPatchExclamation />
            <span>Specifications</span>
          </h2>
          <ProductSpecifications specification={product?.compare} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;