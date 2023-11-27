"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { MdAddHomeWork } from "react-icons/md";

import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import { FaList } from "react-icons/fa";


const sidebarItems = [
  {
    name: "Profile",
    icon: RiAccountCircleFill,
    link: "/doswal/profile",
  },
  {
    name: "Dashboard",
    icon: MdDashboard,
    link: "/doswal",
  },
  {
    name: "Pencarian",
    icon: AiOutlineSearch,
    link: "/doswal/pencarian",
  },
  {
    name: "Verifikasi",
    icon: FiCheckCircle,
    link: "/doswal/verifikasi",
  },
  {
    name: "Rekap",
    icon: MdAddHomeWork,
    link: "/doswal/rekap",
  },

  {
    name: "List",
    icon: FaList,
    link: "/doswal/list",
  },
];

export default function Sidebar() {
  const [isCollapsedSidebar, setIsCollapseSidebar] = useState<boolean>(false);

  const toggleSidebarCollapseHandler = () => {
    setIsCollapseSidebar((prevState) => !prevState);
  };

  return (
    <div className="sidebar_wrapper h-full">
      <button className="btns" onClick={toggleSidebarCollapseHandler}>
        <FaArrowsLeftRight />
      </button>
      <aside className="sidebar" data-collapse={isCollapsedSidebar}>
        <div className="sidebar_top">
          <Image
            src="/undip_logo.png"
            width={80}
            height={80}
            className="sidebar_logo"
            alt="logo"
          />
          <p className="sidebar_logo-name">PPL BANGKIT</p>
        </div>
        <ul className="sidebar_list">
          {sidebarItems.map(({ name, link, icon: Icon }) => (
            <li className="sidebar_item" key={name}>
              <Link href={link} className="sidebar_link">
                <span className="sidebar_icon">
                  <Icon />
                </span>
                <span className="sidebar_name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
