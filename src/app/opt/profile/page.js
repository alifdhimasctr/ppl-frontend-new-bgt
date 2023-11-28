"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCookies } from "react-cookie";
import Image from "next/image";
import BaseLayout_opt from "@/components/BaseLayout/BaseLayout_opt";
import Link from "next/link";

export default function Profile() {
  const router = useRouter();
  const [operatorData, setOperatorData] = useState(null);
  const [cookies, setCookie] = useCookies(["token"]);
  const [role, setRole] = useCookies(["role"]);
  if(role['role'] != 'operator'){
      router.push("/login");
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/me", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setOperatorData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching operator data", error);
      });

      
  }, []);

  return (
    <BaseLayout_opt>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">
        Profile{" "}
        <span className="ml-2 px-3 py-1 rounded font-bold text-gray-200 bg-gray-700">
          Operator
        </span>
      </h1>
      <div className="flex flex-col w-full h-max px-10 py-6 bg-white justify-start gap-6">
        <p className="text-[#183D3D] text-end text-sm">
          <Link href={"/opt/profile/edit"}>EDIT</Link>
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
          {operatorData && (  
          <table className="border-none text-black">
            <tbody>
              <tr>
                <td className="font-semibold w-40">Nama Lengkap</td>
                <td className="ml-6 w-3">:</td>
                <td>{operatorData.operator.nama}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">NIP</td>
                <td className="ml-6 w-3">:</td>
                <td>{operatorData.operator.NIP}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Fakultas</td>
                <td className="ml-6 w-3">:</td>
                <td>{operatorData.operator.fakultas}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Departemen</td>
                <td className="ml-6 w-3">:</td>
                <td>{operatorData.operator.departemen}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">email</td>
                <td className="ml-6 w-3">:</td>
                <td>{operatorData.operator.email}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Nomor Telepon</td>
                <td className="ml-6 w-3">:</td>
                <td>{operatorData.operator.notelepon}</td>
              </tr>
            </tbody>
          </table>
          )}
        </div>
      </div>
    </BaseLayout_opt>
  );
}
