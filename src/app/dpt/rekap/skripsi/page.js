"use client";
import BaseLayout_departemen from "@/components/BaseLayout/BaseLayout_departemen";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

export default function RekapSkripsiDpt() {
  return (
    <BaseLayout_departemen>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-7">
        Rekap
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>

      <Button.Group className="mt-5 gap-2">
        <Link href="/dpt/rekap/pkl">
          <Button color="gray">PKL</Button>
        </Link>
        <Link href="/dpt/rekap/skripsi">
          <Button className="font-bold text-white bg-[#183d3d]" color="gray">
            Skripsi
          </Button>
        </Link>
      </Button.Group>

      <Button className="w-max h-8 p-1 self-end">Cetak</Button>
      <div className="flex flex-col gap-2 h-max w-full mb-2 mt-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex w-full text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
            <span className="w-1/3">Angkatan</span>
            <span className="w-1/3">Belum Skripsi</span>
            <span className="w-1/3">Sudah Skripsi</span>
          </div>
          <div className="flex w-full text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
            <span className="w-1/3">Angkatan</span>
            <span className="w-1/3">Belum Skripsi</span>
            <span className="w-1/3">Sudah Skripsi</span>
          </div>
        </div>
      </div>
    </BaseLayout_departemen>
  );
}
