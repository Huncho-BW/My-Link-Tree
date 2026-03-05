import React, { useEffect, useState } from "react";

import mapData from "../data";
import { FaLink } from "react-icons/fa6";
export default function AddLink({ index, data, setLinks }) {
  const [plaformData, setFormData] = useState(mapData.plantforms);
  const [dropdwon, setDropdown] = useState(false);
  const [isActive, setActive] = useState("");

  const handleUpdateData = (item) => {
    setDropdown(false);
    setLinks((prev) =>
      prev.map((linkItems) =>
        linkItems.id === data.id
          ? {
              ...linkItems,
              plantform: {
                name: item.name,
                icon: item.icon,
                color: item.color,
              },
            }
          : linkItems,
      ),
    );
  };

  const handleUpdatedLink = (e) => {
    const value = e.target.value;
    setLinks((prev) =>
      prev.map((linkId) =>
        linkId.id === data.id
          ? {
              ...linkId,
              link: value,
            }
          : linkId,
      ),
    );
  };

  const handleRemove = () => {
    setLinks((prev) => prev.filter((item) => item.id !== data.id));
  };

  return (
    <div className="addLink">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[16px] font-[700]">Add Link {index + 1}</h1>
        </div>
        <div onClick={handleRemove} className="text-[16px] font-[400]">
          {" "}
          Remove
        </div>
      </div>

      <div className="mt-[12px]">
        <label htmlFor="" className="text-[12px] font-[400]">
          Platform
        </label>
        <div
          onClick={() => setDropdown(!dropdwon)}
          className="addLinkBorder relative w-[100%] cursor-pointer"
        >
          <ul className="relative ">
            <li className="w-[100%] cursor-pointer">
              <div className="flex items-center gap-[10px]  ">
                <span>{data.plantform.icon}</span>
                <span>{data.plantform.name}</span>
              </div>
            </li>
          </ul>

          {dropdwon && (
            <ul className="absolute mt-8 inset-0 z-10 dropDwon">
              {plaformData.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    handleUpdateData(item);
                    setActive(item.name);
                  }}
                  className="  w-[100%] cursor-pointer"
                >
                  <div
                    className={`flex  items-center gap-[10px] ${isActive === item.name ? " text-[#633CFF]" : ""} `}
                  >
                    <span>{item.icon}</span> <span>{item.name} </span>
                  </div>

                  <div className="boder"></div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-[12px]">
        <label htmlFor="" className="text-[12px] font-[400]">
          Link
        </label>
        <div className="addLinkBorder p-[16px]">
          <span className="text-[#737373]">
            <FaLink />
          </span>
          <input
            value={data.link}
            onChange={handleUpdatedLink}
            type="text"
            placeholder="e.g. https://www.github.com/johnappleseed"
          />
        </div>
      </div>
    </div>
  );
}
