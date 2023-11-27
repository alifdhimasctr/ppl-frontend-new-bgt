"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";

export default function ProfileDosenwali() {
  return (
    <BaseLayout_doswal>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">
        Profile{" "}
        <span className="ml-2 px-3 py-1 rounded font-bold text-gray-200 bg-gray-700">
          Dosen Wali
        </span>
      </h1>
      <div className="flex flex-col w-full h-max px-10 py-6 bg-white justify-start gap-6">
        <p className="text-[#183D3D] text-end text-sm">
          <Link href={"/doswal/profile/edit"}>EDIT</Link>
        </p>
        <div className="flex gap-10">
          <div className="w-[10rem] h-[10rem] bg-gray-200 rounded-full">
            <Image
              src="/pp-kosong.jpeg"
              width={100}
              height={100}
              className="w-[10rem] h-[10rem] rounded-full"
              alt="profil"
            />
          </div>
          <table className="border-none text-black">
            <tbody>
              <tr>
                <td className="font-semibold w-40">Nama Lengkap</td>
                <td className="ml-6 w-3">:</td>
                <td>Refiola Julieta</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">NIP</td>
                <td className="ml-6 w-3">:</td>
                <td>24060121120037</td>
              </tr>
              <br />
              <tr>
                <td className="font-semibold w-40">Tempat Lahir</td>
                <td className="ml-6 w-3">:</td>
                <td>Pekalongan</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Tanggal Lahir</td>
                <td className="ml-6 w-3">:</td>
                <td>21 Februari 2003</td>
              </tr>
              <br />
              <tr>
                <td className="font-semibold w-40">Nomor HP</td>
                <td className="ml-6 w-3">:</td>
                <td>081234567890</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Email</td>
                <td className="ml-6 w-3">:</td>
                <td>example@flowbite.com</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Alamat</td>
                <td className="ml-6 w-3">:</td>
                <td>Jalan Gondang Raya No. 342</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout_doswal>
  );
}
