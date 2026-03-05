import React, { useEffect, useRef, useState, useContext } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useNavigate } from "react-router-dom";
import userContext from "./ContextText";
export default function RightProfile() {
  const { profile, setprofile } = useContext(userContext);
  const inputRef = useRef(null);
  console.log("which value is the current holding", inputRef);
  const [preview, setpreview] = useState([]);
  const navigate = useNavigate();

  const handleProfile = (e) => {
    const { name, value } = e.target;
    setprofile((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        [name]: value,
      },
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const urlImage = URL.createObjectURL(file);
    setprofile((prev) => ({
      ...prev,

      ...prev.url,
      url: urlImage,
    }));

    setpreview((prev) => [...prev, urlImage]);
  };

  return (
    <div className="rightEmpty flex flex-col gap-[24px]">
      <div>
        <h1 className="text-[32px] font-[700]">Profile Details</h1>
        <p className="text-[16px] font-[400] text-[#737373}">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className="imageBorder">
        <div>
          <div className="lg:flex-[1_1_240px] md:flex-[1_1_240px] md:h-[24px] lg:h-[24px]">
            <h1 className=" text-[12px] font-[400] whitespace-nowrap">
              Profile Picture
            </h1>
          </div>

          <div className="picturePreivew">
            {profile.url ? (
              <div onClick={() => inputRef.current.click()}>
                <img src={profile.url} className="imageContainer" />
                <input
                  onChange={handleImage}
                  accept=".png,.jpg"
                  style={{ display: "none" }}
                  ref={inputRef}
                  type="file"
                />
              </div>
            ) : (
              <div
                style={{ backgroundColor: "#EFEBFF" }}
                onClick={() => inputRef.current.click()}
                className="imageContainer"
              >
                <InsertPhotoIcon
                  style={{ color: "#633CFF", width: "40px", height: "40px" }}
                />
                <input
                  onChange={handleImage}
                  accept=".png,.jpg"
                  style={{ display: "none" }}
                  ref={inputRef}
                  type="file"
                />

                <button className="text-[16px] font-[600] text-[#633CFF]">
                  + upload image{" "}
                </button>
              </div>
            )}

            <div>
              <h1 className=" whitespace-normal text-[12px] font-[400]">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="profileBorder">
        <div>
          <div className="profileLayout">
            <h1 className=" text-[12px] font-[400] whitespace-nowrap ">
              First Name
            </h1>
            <div className="profileLayoutborder">
              <input
                name="Firstname"
                onChange={handleProfile}
                value={profile.details?.Firstname}
                type="text"
                placeholder="e.g. John"
              />
            </div>
          </div>

          <div className=" profileLayout">
            <h1 className=" text-[12px] font-[400] whitespace-nowrap ">
              Last Name
            </h1>
            <div className="profileLayoutborder">
              <input
                name="lastname"
                onChange={handleProfile}
                type="text"
                value={profile.details?.lastname}
                placeholder="e.g. Appleseed"
              />
            </div>
          </div>

          <div className="profileLayout ">
            <h1 className=" text-[12px] font-[400] whitespace-nowrap ">
              Email
            </h1>
            <div className=" profileLayoutborder">
              <input
                name="email"
                onChange={handleProfile}
                type="email"
                value={profile.details?.email}
                placeholder="e.g. email@example.com"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flootBorder">
        <button className="" type="button" onClick={() => navigate("/preview")}>
          Save
        </button>
      </div>
    </div>
  );
}
