import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AddLink from "./addLink";
import handOntop from "../../public/image/handOnTopScreen.png";
import userContext from "./ContextText";
export default function RightEmpty() {
  const { links, setLinks } = useContext(userContext);
  const navigate = useNavigate();

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

  return (
    <div className="rightEmpty">
      {/* Header */}
      <div>
        <h1 className="text-[32px] [@media(max-width:640px)]:text-[24px] font-[700] text-[#333333]">
          Customize your links
        </h1>
        <p className="text-[16px] font-[400] text-[#737373] lg:whitespace-nowrap">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      {/* Add Link Section */}
      <div className="mt-[40px]">
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
            <div className="flex overflow-y-auto flex-col gap-8">
              {links.map((link, index) => (
                <AddLink
                  key={link.id}
                  index={index}
                  data={link}
                  setLinks={setLinks}
                />
              ))}
            </div>
          ) : (
            <div className="custLink flex flex-col items-center justify-center">
              <img className="imgIcon" src={handOntop} alt="Hand Icon" />
              <div className="m-[24px] flex flex-col items-center justify-center">
                <h1 className="whitespace-nowrap [@media(max-width:640px)]:text-[24px]  font-[700] text-[32px] text-[#333333]">
                  Let’s get you started
                </h1>
                <div className="padBorder">
                  <p className="text-[#888888] pad">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="flootBorder">
        <button type="button" onClick={() => navigate("/profile")}>
          Save
        </button>
      </div>
    </div>
  );
}
