import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AddLink from "./addLink";
import handOntop from "../assets/Group 273.svg";
import userContext from "./ContextText";
export default function RightEmpty() {
  const { links, setLinks } = useContext(userContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // Function to add a new link
  const handleAddLink = () => {
    setLinks([
      ...links,
      {
        id: Date.now(),
        plantform: {
          name: "Select platForm",
          icon: null,
          color: "",
        },
        link: "",
        profile: {
          Firstname: "",
          lastname: "",
          url: "",
          email: "",
        },
      },
    ]);
  };

  const handleSave = () => {
    console.log(links);

    const hasEmptyLinks = links.some((item) => item.link.trim() === "");

    console.log(hasEmptyLinks);

    if (hasEmptyLinks) {
      setError("Please fill in all input");
      return;
    }
    setError("");
    navigate("/profile");
  };

  return (
    <div className="rightEmpty">
      <div className="customBorder">
        {/* Header */}
        <div>
          <h1 className="text-[32px] [@media(max-width:640px)]:text-[24px] font-[700] text-[#333333]">
            Customize your links
          </h1>
          <p className="text-[16px] font-[400] text-[#737373] lg:whitespace-nowrap">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>

        {/* Add Link Section */}
        <div className="mt-[40px] subCustomBorder">
          <div className="BorderAddLink ">
            <button
              className="cursor-pointer text-[16px] font-[600]"
              onClick={handleAddLink}
            >
              + Add New Link
            </button>
          </div>

          {/* Links Display */}
          <div className="custLinkBorder mt-[24px]">
            {links.length > 0 ? (
              <div className="scrollLink">
                {links.map((link, index) => (
                  <AddLink
                    key={link.id}
                    index={index}
                    data={link}
                    setLinks={setLinks}
                    setError={setError}
                    error={error}
                  />
                ))}
              </div>
            ) : (
              <div className="custLink">...</div>
            )}
          </div>
        </div>
      </div>

      <div className="flootBorder">
        {/* Save Button */}

        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
