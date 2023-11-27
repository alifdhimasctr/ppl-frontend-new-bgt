"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { IoCreate } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

const sidebarItems = [
  {
    name: "Profile",
    icon: RiAccountCircleFill,
    link: "/opt/profile",
  },

  {
    name: "Dashboard",
    icon: MdDashboard,
    link: "/opt",
  },

  {
    name: "Buat Akun",
    icon: IoCreate,
    link: "/opt/create",
  },
];

export default function Sidebar_dpt() {
  const [isCollapsedSidebar, setIsCollapseSidebar] = useState<boolean>(false);

  const toggleSidebarCollapseHandler = () => {
    setIsCollapseSidebar((prevState) => !prevState);
  };

  return (
    <div className="sidebar_wrapper">
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
