import React, { useRef, useState, useContext, use } from "react";
import { useNavigate } from "react-router-dom";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UserContext from "./ContextText";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import RectangleIcon from "../assets/Rectangle 15.svg";
import Subrectangle from "../assets/Subtract.svg";
export default function LeftEmpty() {
  const { links, profile } = useContext(UserContext);
  const minSlot = 4;
  const handleProfileObj = Object.values(profile.details).some(
    (item) => item.trim() !== "",
  );

  const handleProfileImage = Object.values(profile.url).some(
    (item) => item.trim() !== "",
  );

  return (
    <div className="  relative leftEmpty ">
      <div className=" absolute inset-0 flex items-center justify-center">
        <img src={RectangleIcon} alt="" srcset="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={Subrectangle} alt="" />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="absolute top-[200px] flex flex-col justify-center items-center gap-4">
          {handleProfileImage ? (
            <div>
              <img
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  border: "2px solid #EFEBFF",
                }}
                src={profile.url}
              />
            </div>
          ) : (
            <Skeleton circle width={96} height={96} />
          )}

          {handleProfileObj ? (
            <div>
              <h1 className="lg:justify-center flex  items-center">
                <span>{profile.details?.Firstname}</span>
                <span>{profile.details?.lastname}</span>
              </h1>
              <h1 className="lg:justify-center flex lg:items-center">
                <span>{profile.details?.email}</span>
              </h1>
            </div>
          ) : (
            <>
              <div className=" justify-center items-center">
                <Skeleton rectangle width={160} height={16} />
              </div>
              <div className=" flex justify-center items-cente">
                <Skeleton rectangle width={72} height={8} />
              </div>
            </>
          )}

          <div className="mt-4 flex flex-col items-center gap-4">
            {Array.from({ length: minSlot }).map((_, i) => {
              const link = links[i];
              return (
                <div
                  key={i}
                  className="w-[237px] h-[44px]   flex items-center justify-center"
                >
                  {link ? (
                    <div
                      style={{
                        backgroundColor: link.plantform?.color,
                      }}
                      className="flex rounded-lg  items-center w-full h-full"
                    >
                      <a
                        href={link.link}
                        className="flex w-full h-full items-center text-[White] pt-[15px] pb-[15px] pl-[17px] pr-[17px] justify-between   text-[White]   gap-2"
                      >
                        <div className="flex items-center gap-[10px]">
                          <span className="truncate  ">
                            {link.plantform?.icon}
                          </span>
                          <span className="truncate   ">
                            {link.plantform?.name}
                          </span>
                        </div>

                        <div>
                          <ArrowRightAltIcon />
                        </div>
                      </a>
                    </div>
                  ) : (
                    <Skeleton width={237} borderRadius={8} height={44} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
