"use client";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function PencarianDoswal() {
  return (
    <BaseLayout_doswal>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-2">
        Pencarian
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>

      {/* Search Bar */}
      <div className="flex items-center mb-4 mt-4">
        <input
          type="text"
          placeholder="Cari Mahasiswa..."
          className="border border-gray-300 p-2 mr-2 rounded"
        />
        <button
          className="bg-[#183d3d] hover:bg-[#358585] text-white px-4 py-2 rounded"
          onClick={() => {
            // Handle search logic here
          }}
        >
          <FaSearch className="self-center" style={{ height: "20px" }} />
        </button>
      </div>

      <h1 className="text-2xl font-bold text-gray-700 mb-3 mt-4">
        Hasil
        <span className="ml-2 px-3 py-1 rounded font-bold text-gray-200 bg-[#183d3d]">
          Pencarian
        </span>
      </h1>
      {/* Table */}
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nim</th>
            <th>Angkatan</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </BaseLayout_doswal>
  );
}
