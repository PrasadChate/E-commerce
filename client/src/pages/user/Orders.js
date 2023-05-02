import React from "react";
import Layout from "./../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"User-Orders"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>

          <div className="col-md-9">
            <h1 className="ms-3">Thanks for ordering</h1>
            <h2>Your Order Has Been Placed And</h2>
            <h2>will reach your location within 5-7 working days</h2>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
