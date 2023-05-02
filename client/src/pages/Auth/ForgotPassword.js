import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [answer, setanswer] = useState("");

  const navigate = useNavigate();
  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, address, phone, password);
    // toast.success("Registered Successfully");
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success("Login Successfully");

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };
  return (
    <Layout title={"Forgot-Password"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setanswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your favourite Sport"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="button">
            Reset
          </button>
          {/* <div className="mb-3">
            <button
              type="submit"
              className="forgotbutton"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot-Password
            </button>
          </div> */}
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
