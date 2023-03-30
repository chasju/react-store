import useProductStore from "../store/CourseStore";

export default function Total() {
  const { products } = useProductStore((state) => ({
    products: state.products,
  }));

  const quantity = products.length;

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>price</p>
          </div>
        );
      })}
    </div>
  );
}
