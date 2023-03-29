import React from "react";
import useProductStore from "../store/CourseStore";

const ProductList = () => {
  const { products, removeProduct } = useProductStore((state) => ({
    products: state.products,
    removeProduct: state.removeProduct,
  }));

  console.log(products);

  return (
    <div>
      <ul>
        {products.map((product, i) => {
          return (
            <React.Fragment key={i}>
              <li>
                <span>{product.title}</span>
                <span>{product.price}</span>
                <button
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
