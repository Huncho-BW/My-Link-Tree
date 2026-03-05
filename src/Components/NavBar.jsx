import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { MdOutlinePreview } from "react-icons/md";
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="empthHero">
      <div className="flex items-center gap-2  ">
        <span
          className=""
          style={{
            color: "white",
            backgroundColor: "#633CFF",
            fontSize: "18px", // increases icon size
            borderRadius: "12px", // rounded edges
            padding: "8px",
          }}
        >
          <FaLink />
        </span>
        <h1 className="text-[#333333] font-bold text-2xl iconHid ">devlinks</h1>
      </div>

      <div className="flex  ">
        <div className="flex gap-[10px] ">
          <NavLink
            to="/empty"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-[600]  navPad navLink"
                : "text-[16px] font-[600] navPad text-[#737373] hover:text-[#633CFF]"
            }
            onClick={() => navigate("/empty")}
          >
            <span>
              <FaLink />
            </span>{" "}
            <span className="hidIcon">links</span>
          </NavLink>
        </div>
        <div className="flex gap-[10px] ">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-[600]  navPad navLink"
                : "text-[16px] font-[600] navPad text-[#737373] hover:text-[#633CFF]"
            }
            onClick={() => navigate("/profile")}
          >
            <span>
              {" "}
              <AccountCircleOutlinedIcon />
            </span>{" "}
            <span className="hidIcon"> profile Details</span>
          </NavLink>
        </div>
      </div>

      <div className="navBord hover:bg-[#EFEBFF]">
        <NavLink
          to="/preview"
          className="text-[16px] font-[600]  "
          onClick={() => navigate("/preview")}
        >
          <span className="hidIcon"> preview</span>
          <span className="icon">
            <MdOutlinePreview style={{ color: "#633CFF" }} />
          </span>
        </NavLink>
      </div>
    </div>
  );
}
