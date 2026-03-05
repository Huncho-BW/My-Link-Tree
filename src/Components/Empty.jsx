import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RightEmpty from "./RightEmpty";
import LeftEmpty from "./LeftEmpty";
import NavBar from "./NavBar";
import RightProfile from "./RightProfile";

export default function Empty({}) {
  const location = useLocation();

  return (
    <div className="p-[24px]">
      <NavBar />
      <section className="emptySection">
        <LeftEmpty />
        {location.pathname === "/profile" ? <RightProfile /> : <RightEmpty />}
      </section>
    </div>
  );
}
