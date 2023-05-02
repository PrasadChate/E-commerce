import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  //initial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar products
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container mt-3">
        <div className="col-md-6">
          {" "}
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            // height="300px"
            // width="auto"
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product details</h1>
          <h5>Name:{product.name}</h5>
          <h5>Description:{product.description}</h5>
          <h5>Price:{product.price}</h5>
          <h5>Category:{product.category?.name}</h5>
          <button className="btn btn-secondary ms-2">Add to Cart</button>
        </div>
      </div>
      <hr />
      <div className="row container">
        <h6>similar products</h6>
        {relatedProducts.length < 1 && (
          <p className="text-center">No similar Product</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name} </h5>
                <p className="card-text">{p.description.substring(0, 30)}</p>
                <p className="card-text"> ₹ {p.price}</p>

                <button className="btn btn-secondary ms-2">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
