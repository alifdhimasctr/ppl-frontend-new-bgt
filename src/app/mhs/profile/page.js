"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCookies } from "react-cookie";
import Image from "next/image";
import BaseLayout_mhs from "@/components/BaseLayout/BaseLayout_mhs";
import Link from "next/link";


export default function ProfileMahasiswa() {
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
    <BaseLayout_mhs>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">
        PROFIL{" "}
        <span className="ml-2 px-3 py-1 rounded font-bold text-gray-200 bg-gray-700">
          MAHASISWA
        </span>
      </h1>
      <div className="flex flex-col w-full h-max px-10 py-6 bg-white justify-start gap-6">
        <p className="text-[#183D3D] text-end text-sm">
          <Link href={"/mhs/profile/edit"}>EDIT</Link>
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
          {mahasiswaData && (
          <table className="border-none text-black">
            <tbody>
              <tr>
                <td className="font-semibold w-40">Nama Lengkap</td>
                <td className="ml-6 w-3">:</td>
                <td>{mahasiswaData.mahasiswa.nama}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">NIM</td>
                <td className="ml-6 w-3">:</td>
                <td>{mahasiswaData.mahasiswa.NIM}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Angkatan</td>
                <td className="ml-6 w-3">:</td>
                <td>{mahasiswaData.mahasiswa.angkatan}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Jalur Masuk</td>
                <td className="ml-6 w-3">:</td>
                <td>{mahasiswaData.mahasiswa.jalurmasuk}</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Dosen Wali</td>
                <td className="ml-6 w-3">:</td>
                <td>Dr. Aris Puji Widodo, S.Si, M.T</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Status</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  <span className="uppercase bg-green-400 text-white p-1 text-xs">
                    {mahasiswaData.mahasiswa.status}
                  </span>
                </td>
              </tr>
              <br />
              <tr>
                <td className="font-semibold w-40">Tempat Lahir</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  {mahasiswaData.mahasiswa.tempatlahir}
                </td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Tanggal Lahir</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  {mahasiswaData.mahasiswa.tanggallahir}
                </td>
              </tr>
              <br />
              <tr>
                <td className="font-semibold w-40">Nomor HP</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  {mahasiswaData.mahasiswa.notelepon}
                </td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Email</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  {mahasiswaData.mahasiswa.email}
                </td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Provinsi</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  {mahasiswaData.mahasiswa.provinsi}
                </td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Kota/Kabupaten</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  {mahasiswaData.mahasiswa.kota}
                </td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Alamat</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  {mahasiswaData.mahasiswa.alamat}
                </td>
              </tr>
            </tbody>
          </table>
          )}
        </div>
      </div>
    </BaseLayout_mhs>
  );
}
