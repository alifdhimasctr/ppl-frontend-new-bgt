"use client";
import { Dropdown } from "flowbite-react";
import BaseLayout_departemen from "@/components/BaseLayout/BaseLayout_departemen";
import React from "react";

export default function RekapPkl() {
  return (
    <BaseLayout_departemen>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-11">
        Rekap Status
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>
      <Dropdown label="Pilih Angkatan" inline>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </BaseLayout_departemen>
  );
}
