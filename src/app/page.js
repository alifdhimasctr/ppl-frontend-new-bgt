import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <div className="bg-[#183D3D] w-full h-[100vh] flex align-middle" >
      <div className="kata ml-16 w-3/6 self-center align-middle text-[#f5f5f5]">
        <h1 className="font-bold text-[36px]">
          Selamat Datang di, <br></br>
          <span className="text-[#183D3D] bg-[#f5f5f5] p-1">
            Sistem Informasi Akademik
          </span>
          <span className="text-[#ffd700]"> PPL BANGKIT</span>
        </h1>
        <p className="mt-5">
          Pengelolaan Sistem Informasi Akademik Untuk Mahasiswa, Dosen Wali,
          Operator dan Departemen
        </p>
        <Link href="/login">
          <button className="bg-white px-5 py-2 text-black rounded-xl mt-11">
            Lanjutkan ke Halaman Login
          </button>
        </Link>
      </div>
      <img className="ml-11" src="vector.png" alt="" />
    </div>
  );
}
