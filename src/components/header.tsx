"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <div className="flex justify-end h-7 w-full md:order-2">
        <Dropdown
          className="flex justify-end"
          arrowIcon={false}
          inline
          label={
            <Avatar
              className="mr-11"
              alt="User settings"
              img="/pp-kosong.jpeg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link href="/login">Log Out</Link>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
