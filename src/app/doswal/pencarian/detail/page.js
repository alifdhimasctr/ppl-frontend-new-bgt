"use client";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DetailPencarianDoswal() {
  const [selectedSemester, setSelectedSemester] = React.useState(null);
  const sksInIRS = {
    1: 18,
    2: 21,
  };

  const khsData = {
    1: { sks: 18, ip: 3.5 }, // Example for Semester 1
    2: { sks: 21, ip: 3.7 }, // Example for Semester 2
    // Add more entries for other semesters
  };

  // Calculate cumulative SKS and IP
  const calculateCumulative = (semester) => {
    let cumulativeSks = 0;
    let cumulativeIp = 0;

    for (let i = 1; i <= semester; i++) {
      if (khsData[i]) {
        cumulativeSks += khsData[i].sks;
        cumulativeIp += khsData[i].sks * khsData[i].ip;
      }
    }

    const ipKumulatif = cumulativeSks === 0 ? 0 : cumulativeIp / cumulativeSks;

    return { cumulativeSks, ipKumulatif };
  };

  const { cumulativeSks, ipKumulatif } = calculateCumulative(selectedSemester);
  return (
    <BaseLayout_doswal>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-5">
        Detail
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>
      <div className="flex flex-col w-full h-max px-10 py-6 bg-white justify-start gap-6 mt-7">
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
                <td className="font-semibold w-40">NIM</td>
                <td className="ml-6 w-3">:</td>
                <td>24060121120037</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Angkatan</td>
                <td className="ml-6 w-3">:</td>
                <td>2021</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Jalur Masuk</td>
                <td className="ml-6 w-3">:</td>
                <td>Orang Dalem</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Dosen Wali</td>
                <td className="ml-6 w-3">:</td>
                <td>Dosen Wali 1</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Status</td>
                <td className="ml-6 w-3">:</td>
                <td>
                  <span className="bg-green-400 text-white p-1 text-xs">
                    AKTIF
                  </span>
                </td>
              </tr>
              <br />
            </tbody>
          </table>
        </div>
      </div>
      {/* Semester Card */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-[#183D3D] mb-3">Semester</h2>
        <div className="flex gap-4">
          {Array.from({ length: 14 }, (_, index) => (
            <div
              key={index + 1}
              className={`w-12 h-12 flex items-center justify-center text-white relative bg-red-500 ${
                index < 4 ? "text-xs" : "text-sm"
              } ${selectedSemester === index + 1 ? "bg-gray-500" : ""}`}
              onClick={() => setSelectedSemester(index + 1)}
            >
              {index + 1}
              {index === 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"></span>
              )}
              {index === 1 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"></span>
              )}
              {index === 5 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"></span>
              )}
              {index === 7 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* KHS and IRS Boxes */}
      {selectedSemester && (
        <div className="mt-8 p-4 border rounded-md bg-gray-100 flex justify-between gap-4">
          {/* KHS Box */}
          <div className="flex flex-col items-center p-4 bg-blue-500 text-white rounded-md w-1/2">
            <h3 className="text-lg font-semibold mb-2">KHS</h3>
            <div className="text-lg font-semibold mb-2">
              SKS: {khsData[selectedSemester]?.sks || 0}
            </div>
            <div className="text-lg font-semibold mb-2">
              IP: {khsData[selectedSemester]?.ip || 0}
            </div>
            <div className="text-lg font-semibold mb-2">
              Kumulatif SKS: {cumulativeSks}
            </div>
            <div className="text-lg font-semibold mb-2">
              Kumulatif IP: {ipKumulatif.toFixed(2)}
            </div>
            <div className="underline cursor-pointer text-sm">
              <Link href="/doswal/pencarian/detail/khs">View Detail</Link>
            </div>
          </div>

          {/* IRS Box */}
          <div className="flex flex-col items-center p-4 bg-green-500 text-white rounded-md w-1/2">
            <h3 className="text-lg font-semibold mb-2">IRS</h3>
            <div className="text-lg font-semibold mb-2">
              Jumlah SKS: {sksInIRS[selectedSemester]}
            </div>
            <div className="underline cursor-pointer text-sm">
              <Link href="/doswal/pencarian/detail/irs">View Detail</Link>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-5">
        <h2 className="text-2xl font-semibold text-[#183D3D] mb-3">
          Keterangan
        </h2>
        <div className="flex gap-4">
          <div className="legend-item">
            <div className="w-6 h-6 bg-red-500 rounded-md"></div>
            <span className="ml-2">Belum diisikan</span>
          </div>
          <div className="legend-item">
            <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
            <span className="ml-2">Sudah diisikan</span>
          </div>
          <div className="legend-item">
            <div className="w-6 h-6 bg-yellow-500 rounded-md"></div>
            <span className="ml-2">Sudah lulus PKL</span>
          </div>
          <div className="legend-item">
            <div className="w-6 h-6 bg-green-500 rounded-md"></div>
            <span className="ml-2">Sudah lulus Skripsi</span>
          </div>
        </div>
      </div>
    </BaseLayout_doswal>
  );
}
