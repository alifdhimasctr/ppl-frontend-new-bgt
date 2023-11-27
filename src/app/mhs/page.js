import React from "react";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";
import Image from "next/image";

export default function DashboardMahasiswa() {

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
        <h1 className="text-2xl font-semibold text-white">REFIOLA JULIETA</h1>
      </div>
      <div className="profil_dashboard-container2">
        <h1 className="text-lg text-black">NIM : 19821462187921389119</h1>
      </div>
    </BaseLayout>
  );
}
