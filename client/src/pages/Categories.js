import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container text-center">
        <h1>All Categories</h1>
        <div classname="row d-flex justify-content-center">
          {categories.map((c) => (
            <div className=" card text-center m-2 p-3 " key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn fw-bold ">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
