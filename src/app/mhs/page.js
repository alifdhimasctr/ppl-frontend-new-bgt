"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCookies } from "react-cookie";
import Image from "next/image";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";


export default function DashboardMahasiswa() {
  const router = useRouter();
  const [mahasiswaData, setMahasiswaData] = useState(null);
  const [cookies, setCookie] = useCookies(["token"]);
  const [role, setRole] = useCookies(["role"]);

  if(role['role'] != 'mahasiswa'){
    router.push("/login");
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/meMahasiswa", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setMahasiswaData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mahasiswa data", error);
      });

      
  }, []);
  return (
    <BaseLayout>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-7">
        Dashboard
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>
      <div className="profil_dashboard-container1">
        <Image
          src="/pp-kosong.jpeg"
          width={80}
          height={80}
          className="dashboard_profil-img"
          alt="profil"
        />
         {mahasiswaData && (
              <h1 className=" uppercase text-2xl font-semibold text-white">{mahasiswaData.mahasiswa.nama}</h1>
          )}
      </div>
      <div className="profil_dashboard-container2">
        {mahasiswaData && (
              <h1 className="text-lg text-black">NIM : {mahasiswaData.mahasiswa.NIM}</h1> 
          )}
      </div>
    </BaseLayout>
  );
}
