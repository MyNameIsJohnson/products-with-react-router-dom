import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // useParems() is used for dynamic routing and looks for anything after the colon on  path="/product-detail/:productId"
  const parems = useParams();

  console.log(parems.productId);
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{parems.productId}</p>
    </section>
  );
};

export default ProductDetail;
