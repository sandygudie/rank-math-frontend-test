import { useState } from "react";
import "./header.scss";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import IconButton from "../IconButton";
import { GoNote } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { HiUpload } from "react-icons/hi";
import { IoMdRemoveCircleOutline } from "react-icons/io";

export default function Index({ title }) {
  const [toggle, setToggle] = useState(false);

  const menuData = [
    { id: 0, name: "Edit", icon: <CiEdit /> },
    { id: 1, name: "Courier Info", icon: <GoNote /> },
    { id: 2, name: "Share", icon: <HiUpload /> },
    { id: 3, name: "Remove", icon: <IoMdRemoveCircleOutline /> },
  ];
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="header-container">
      <div className="navItems">
        <IconButton icon={<RiArrowLeftSLine size={30} />} />
        <h1 className="headerTitle">{title}</h1>
        <div>
          <IconButton
            handleClick={handleToggle}
            icon={<BiDotsVerticalRounded size={25} />}
          />
          {toggle ? (
            <div className="menuLists">
              {menuData.map((list) => {
                return (
                  <button
                    style={{
                      borderBottom:
                        list.id === menuData.length - 1
                          ? "none"
                          : "1px solid #f1f5f8",
                      color: list.id === menuData.length - 1 ? "red" : "black",
                    }}
                    className="listItems"
                    key={list.id}
                  >
                    <div className="listItems-text">
                      <span>{list.name}</span>{" "}
                      <span className="list-icon">{list.icon}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
