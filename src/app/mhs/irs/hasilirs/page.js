"use client";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";

// Sample data (replace this with your actual data)
const data = [
  {
    semester: 1,
    angkatan: "2022",
    jumlahSKs: 24,
    file: "File 1",
    action: "Download",
  },
  {
    semester: 2,
    angkatan: "2021",
    jumlahSKs: 30,
    file: "File 2",
    action: "Download",
  },
  // Add more data as needed
];

export default function HasilIrs() {
  return (
    <BaseLayout>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5">
        Hasil
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          IRS
        </span>
      </h1>

      <Button className="w-max h-8 p-1 self-end">Cetak</Button>
      <div className="flex flex-col gap-2 h-max w-full mb-2 mt-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex w-full text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
            <span className="w-1/3">Angkatan</span>
            <span className="w-1/3">Jumlah SKS</span>
            <span className="w-1/3">File</span>
            <span className="w-1/3">Action</span>
          </div>
          <div className="flex w-full text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
            <span className="w-1/3">Angkatan</span>
            <span className="w-1/3">JumlahSKS</span>
            <span className="w-1/3">File</span>
            <span className="w-1/3">Action</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {data.map((item) => (
            <div
              key={item.semester}
              className="flex w-full text-black text-center bg-white drop-shadow-md rounded-md px-4 py-2"
            >
              <span className="w-1/3">{item.angkatan}</span>
              <span className="w-1/3">{item.jumlahSKs}</span>
              <span className="w-1/3">{item.file}</span>
              <span className="w-1/3">{item.action}</span>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
