import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";
export default function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    comfirmPassword: "",
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
    } else if (formData.password.length < 8) {
      newError.password = "password must be at least 8";
    }

    if (formData.comfirmPassword === "") {
      newError.comfirmPassword = "please comfirm your pawword ";
    } else if (formData.comfirmPassword !== formData.password) {
      newError.comfirmPassword = "password dont match";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      navigate("/empty");
    }
  }
  return (
    <>
      <div className="createFrame">
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
        <form onSubmit={handleSubmit} className="">
          <div className="CreateBackground">
            <div>
              <h1 className="text-[32px] [@media(max-width:640px)]:text-[24px] font-[700] text-[#333333]">
                Creat Account
              </h1>
              <p className="mt-[8px] text-[16px] font-[400] text-[#888888]">
                Let’s get you started sharing your links!
              </p>
            </div>

            <div className="flex flex-col mt-[40px]">
              <label className="text-[12px] font-[400] text-[#333333]">
                Email Address
              </label>
              <div
                className={
                  error.email
                    ? "border border-[#FF3939]  inputCreateBorder"
                    : "inputCreateBorder border border-[#D1D5DB]"
                }
              >
                <span>
                  <AiOutlineMail />
                </span>{" "}
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="e.g. alex@email.com"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
                {error.email && (
                  <p className="text-[12px] font-[400] text-[#FF3939]">
                    {error.email}
                  </p>
                )}
              </div>

              <label className="mt-[24px] text-[12px] font-[400] text-[#333333]">
                Create Passwords
              </label>
              <div
                className={
                  error.password
                    ? "border border-[#FF3939]  inputCreateBorder"
                    : "inputCreateBorder border border-[#D1D5DB]"
                }
              >
                <span>
                  <CiLock />
                </span>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="At least 8 characters"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                />

                {error.password && (
                  <p className="text-[12px] font-[400] text-[#FF3939]">
                    {error.password}
                  </p>
                )}
              </div>

              <label className="mt-[24px] text-[12px] font-[400] text-[#333333]">
                Confirm Passwords
              </label>
              <div
                className={
                  error.comfirmPassword
                    ? "border border-[#FF3939]  inputCreateBorder"
                    : "inputCreateBorder border border-[#D1D5DB]"
                }
              >
                <span>
                  <CiLock />
                </span>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="At least 8 characters"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      comfirmPassword: e.target.value,
                    });
                  }}
                />
                {error.comfirmPassword && (
                  <p className="text-[12px] font-[400] text-[#FF3939]">
                    {error.comfirmPassword}
                  </p>
                )}
              </div>
              <p className="mt-[24px] text-[12px] font-[400] text-[#737373]">
                Password must contain at least 8 characters
              </p>

              <div className="CreateBorder mt-[24px] bg-[#633CFF] text-center">
                <button className="  text-[white]" type="submit">
                  Create new account
                </button>
              </div>
              <div className="flex items-center mt-[24px]  [@media(max-width:640px)]:flex-col  [@media(max-width:640px)]:justify-center ">
                <p className=" text-[16px] font-[400] text-[#888888] ">
                  Already have an account?
                </p>
                <span
                  onClick={() => navigate("/")}
                  className="text-[#633CFF] text-[16px] font-[400]  cursor-pointer"
                >
                  Login
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
