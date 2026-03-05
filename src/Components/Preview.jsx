import React, { useState } from "react";
import handOntop from "../../public/image/handOnTopScreen.png";
import userContext from "./ContextText";
import { useContext } from "react";
import { FaLink } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function Preview() {
  const { links, profile } = useContext(userContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleShare = async () => {
    const shareDate = {
      tilte: "",
      text: "",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareDate);
        setMessage("Thanks for sharing ");
        console.log("successfully ");
        setTimeout(() => setMessage(""), 10000);
      } catch (err) {
        console.error("error while sharing ", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareDate.url);
        setMessage("The link has been copied to your clipboard!");
        setTimeout(() => setMessage(""), 10000);
      } catch (err) {
        console.error("errror while copying ", err);
      }
    }
  };
  return (
    <div>
      <div className="backGround">
        <div className="backGroundSearch">
          <div className="navBord text-[16px] font-[600] whitespace-nowrap hover:bg-[#EFEBFF]">
            <button onClick={() => navigate(-1)}>Back to Editor</button>
          </div>
          <div className=" h-[24] border-[1px] bg-[#633CFF] text-[#FFFFFF] rounded-[8px] pt-[11px] pb-[11px] pl-[27px] pr-[27px] text-[16px] font-[600] whitespace-nowrap ">
            <button className="cursor-pointer" onClick={handleShare}>
              Share Link
            </button>
          </div>
        </div>
      </div>

      <div className="layoutProfile">
        <div className="layoutTwo">
          <img src={profile.url} />
          <h1 className=" layoutTwoForH1   ">
            <span> {profile.details?.Firstname}</span>{" "}
            <span> {profile.details?.lastname}</span>
          </h1>
          <p className="text-[16px] font-[400] text-[#737373]">
            {profile.details?.email}
          </p>
        </div>
        <div className="borderTwo">
          {Array.from({ length: links.length }).map((_, i) => {
            const link = links[i];
            return (
              <a href={link.link}>
                <div
                  key={i}
                  className="borderLayout flex  items-center gap-[10px] text-[White] "
                  style={{ backgroundColor: `${link.plantform?.color}` }}
                >
                  <span> {link.plantform?.icon}</span>
                  <span>{link.plantform?.name}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      {message && (
        <div className=" absolute top-[80%] buttom-[80%] m-5 bg-[#333333] text-white px-6 py-3 rounded-lg shadow-lg flex items-center  gap-[10px]">
          <span>
            <FaLink />
          </span>{" "}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
