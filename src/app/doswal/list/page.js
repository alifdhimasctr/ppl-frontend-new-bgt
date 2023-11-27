"use client";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function ListDosenWali() {
  return (
    <BaseLayout_doswal>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-2">
        List
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>
      <p className="mt-2 mb-5 text-black">List PKL & Skripsi Mahasiswa</p>

      <Button.Group className="mt-5 gap-2">
        <Link href="/doswal/list/pkl">
          <Button color="gray">
            PKL
          </Button>
        </Link>
        <Link href="/doswal/list/skripsi">
          <Button color="gray">
            Skripsi
            </Button>
        </Link>
      </Button.Group>


    </BaseLayout_doswal>
  );
}
