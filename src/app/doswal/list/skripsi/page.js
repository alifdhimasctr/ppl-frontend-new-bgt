"use client";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";
export default function ListSkripsi() {
  return (
    <BaseLayout_doswal>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-2">
        List
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>
      <p className="mt-2 mb-5 text-black">List Skripsi Mahasiswa</p>

      <Button.Group className="mt-5 gap-2">
        <Link href="/doswal/list/pkl">
          <Button color="gray">PKL</Button>
        </Link>
        <Link href="/doswal/list/skripsi">
          <Button className="bg-[#183D3D] text-white" color="gray">
            Skripsi
          </Button>
        </Link>
      </Button.Group>
      <div className="flex w-full mt-11 text-white bg-[#183D3D] text-center drop-shadow-md rounded-md px-4 py-2">
        <span className="w-1/3">No</span>
        <span className="w-1/3">Nama</span>
        <span className="w-1/3">NIM</span>
        <span className="w-1/3">Angkatan</span>
        <span className="w-1/3">Semester</span>
        <span className="w-1/3">IPK</span>
        <span className="w-1/3">SKSK</span>
      </div>
    </BaseLayout_doswal>
  );
}
