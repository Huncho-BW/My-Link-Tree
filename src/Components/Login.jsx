import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormDate] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    let newError = {};

    if (formData.email === "") {
      newError.email = "cant be empty";
    }
    if (formData.password === "") {
      newError.password = "check password ";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      navigate("/empty");
    }
  }
  return (
    <>
      <div className="loginFrame">
        <div className="flex items-center gap-3">
          <span
            style={{
              color: "white",
              backgroundColor: "#633CFF",
              fontSize: "24px", // increases icon size
              borderRadius: "12px", // rounded edges
              padding: "8px",
            }}
          >
            <FaLink />
          </span>
          <h1 className="text-[#333333] font-bold text-4xl ">devlinks</h1>
        </div>
        <form onSubmit={handleSubmit} className="inputBackground">
          <div>
            <h1 className="text-[32px] text-[#333333] [@media(max-width:640px)]:text-[24px] font-[700]">
              Login
            </h1>
            <p className="mt-[8px] text-[16px]  font-[400] text-[#737373]">
              Add your details below to get back into the app
            </p>
          </div>
          <div className="flex flex-col mt-[40px]">
            <label className="text-[12px] font-[400]">Email Address</label>
            <div className="inputLoginBorder">
              <span>
                <AiOutlineMail />
              </span>{" "}
              <input
                onChange={(e) => {
                  setFormDate({ ...formData, email: e.target.value });
                }}
                type="email"
                name=""
                id=""
                placeholder="Email address"
              />
              {error.email && <p>{error.email}</p>}
            </div>

            <label className="mt-[24px] text-[12px] font-[400]">
              Passwords
            </label>
            <div className="inputLoginBorder">
              <span>
                <CiLock />
              </span>{" "}
              <input
                onChange={(e) => {
                  setFormDate({ ...formData, password: e.target.value });
                }}
                type="password"
                name=""
                id=""
                placeholder="password"
              />
              {error.password && <p>{error.password}</p>}
            </div>

            <div className="LoginBorder hover:bg-[#BEADFF] mt-[24px] bg-[#633CFF] text-center">
              <button className="  text-[white]" type="submit">
                Login
              </button>
            </div>
            <div className="flex items-center mt-[24px]  [@media(max-width:640px)]:flex-col  [@media(max-width:640px)]:justify-center ">
              <p className="">Don’t have an account?</p>
              <span
                onClick={() => navigate("/create-account")}
                className=" text-center text-[#633CFF] cursor-pointer"
              >
                Create account
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
