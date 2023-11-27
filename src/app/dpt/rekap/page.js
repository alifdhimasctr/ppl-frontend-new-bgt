"use client";
import BaseLayout_departemen from "@/components/BaseLayout/BaseLayout_departemen";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function RekapDpt() {
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
          <Button color="gray">Skripsi</Button>
        </Link>
      </Button.Group>
    </BaseLayout_departemen>
  );
}
