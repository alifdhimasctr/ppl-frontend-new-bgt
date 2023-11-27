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
    nilai: 85,
    tanggalLulus: "2023-05-15",
    file: "File 1",
    action: "View",
  },
  {
    semester: 2,
    nilai: 92,
    tanggalLulus: "2023-12-20",
    file: "File 2",
    action: "Download",
  },
  // Add more data as needed
];

// React component for displaying Skripsi results
export default function HasilSkripsi() {
  return (
    <BaseLayout>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5">
        Hasil
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Skripsi
        </span>
      </h1>

      <Button className="w-max h-8 p-1 self-end">Cetak</Button>
      <div className="flex flex-col gap-2 h-max w-full mb-2 mt-2">
        <div className="grid grid-cols-2 gap-2">
          {/* Header row */}
          <div className="flex w-full text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
            <span className="w-1/6">Semester</span>
            <span className="w-1/6">Nilai</span>
            <span className="w-1/6">Tanggal Lulus</span>
            <span className="w-1/6">File</span>
            <span className="w-1/6">Action</span>
          </div>
          <div className="flex w-full text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
            <span className="w-1/6">Semester</span>
            <span className="w-1/6">Nilai</span>
            <span className="w-1/6">Tanggal Lulus</span>
            <span className="w-1/6">File</span>
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
              <span className="w-1/6">{item.nilai}</span>
              <span className="w-1/6">{item.tanggalLulus}</span>
              <span className="w-1/6">{item.file}</span>
              <span className="w-1/6">{item.action}</span>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
