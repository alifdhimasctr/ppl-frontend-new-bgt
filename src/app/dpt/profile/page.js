import React from "react";
import BaseLayout_departemen from "@/components/BaseLayout/BaseLayout_departemen";
import Image from "next/image";
import Link from "next/link";

export default function ProfileMahasiswa() {
  return (
    <BaseLayout_departemen>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">
        Profile{" "}
        <span className="ml-2 px-3 py-1 rounded font-bold text-gray-200 bg-gray-700">
          Departemen
        </span>
      </h1>
      <div className="flex flex-col w-full h-max px-10 py-6 bg-white justify-start gap-6">
        <p className="text-[#183D3D] text-end text-sm">
          <Link href={"/dpt/profile/edit"}>EDIT</Link>
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
                <td className="font-semibold w-40">Nama Departemen</td>
                <td className="ml-6 w-3">:</td>
                <td>Informatika</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">kode Departemen</td>
                <td className="ml-6 w-3">:</td>
                <td>123</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Ketua Departemen</td>
                <td className="ml-6 w-3">:</td>
                <td>Aris Puji Widodo</td>
              </tr>
              <br />
              <tr>
                <td className="font-semibold w-40">Telpon</td>
                <td className="ml-6 w-3">:</td>
                <td>081234567890</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Email</td>
                <td className="ml-6 w-3">:</td>
                <td>dpt@flowbite.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout_departemen>
  );
}
