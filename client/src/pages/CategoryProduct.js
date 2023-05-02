import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
const CategoryProduct = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (params?.slug) getProductsByCat();
  });
  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  //get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getTotal();
  }, []);
  return (
    <Layout>
      {/* <div className="container m-3 p-3"> */}
      <div className="mt-2">
        <h3 className="text-center">Category-{category?.name}</h3>
        <h4 className="text-center">{products?.length} results found</h4>
      </div>
      <div className="row ">
        <div>
          <h1 className="text-center ml-3">All Products</h1>
          <div className="d-flex flex-wrap m-4 p-3">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name} </h5>
                  <p className="card-text">{p.description.substring(0, 30)}</p>
                  <p className="card-text">₹ {p.price}</p>
                  <button
                    className="btn btn-primary ms-2"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button className="btn btn-secondary ms-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
        {products && products.length < total && (
          <button
            className="btn btn-warning"
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            {loading ? "Loading..." : "Loadmore"}
            {/* above statement is if else statement */}
          </button>
        )}
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default CategoryProduct;
