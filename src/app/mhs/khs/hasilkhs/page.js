// Import necessary modules and components
"use client";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";

// Sample data (replace this with your actual data)
const data = [
  {
    semester: 1,
    jumlahSKs: 24,
    sksk: 3.5,
    ips: 3.2,
    ipk: 3.4,
    action: "Download",
  },
  {
    semester: 2,
    jumlahSKs: 30,
    sksk: 3.8,
    ips: 3.5,
    ipk: 3.6,
    action: "Download",
  },
  // Add more data as needed
];

// React component for displaying KHS results
export default function HasilKhs() {
  return (
    <BaseLayout>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5">
        Hasil
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          KHS
        </span>
      </h1>

      <Button className="w-max h-8 p-1 self-end">Cetak</Button>
      <div className="flex flex-col gap-2 h-max w-full mb-2 mt-2">
        <div className="grid grid-cols-2 gap-2">
          {/* Header row */}
          <div className="flex w-full text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
            <span className="w-1/6">Semester</span>
            <span className="w-1/6">Jumlah SKS</span>
            <span className="w-1/6">SKSK</span>
            <span className="w-1/6">IPS</span>
            <span className="w-1/6">IPK</span>
            <span className="w-1/6">Action</span>
          </div>
          <div className="flex w-full text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
            <span className="w-1/6">Semester</span>
            <span className="w-1/6">Jumlah SKS</span>
            <span className="w-1/6">SKSK</span>
            <span className="w-1/6">IPS</span>
            <span className="w-1/6">IPK</span>
            <span className="w-1/6">Action</span>
          </div>
        </div>
        {/* Data rows */}
        <div className="grid grid-cols-2 gap-2">
          {data.map((item) => (
            <div
              key={item.semester}
              className="flex w-full text-black text-center bg-white drop-shadow-md rounded-md px-4 py-2"
            >
              <span className="w-1/6">{item.semester}</span>
              <span className="w-1/6">{item.jumlahSKs}</span>
              <span className="w-1/6">{item.sksk}</span>
              <span className="w-1/6">{item.ips}</span>
              <span className="w-1/6">{item.ipk}</span>
              <span className="w-1/6">{item.action}</span>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
