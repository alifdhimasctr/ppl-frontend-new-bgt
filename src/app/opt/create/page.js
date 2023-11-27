"use client";
import BaseLayout_opt from "@/components/BaseLayout/BaseLayout_opt";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();

  const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `mahasiswa_${randomString}@example.com`;
  };

  const [cookies, setCookie] = useCookies(["token"]);
 
  const [formData, setFormData] = useState({
    NIM: "",
    nama: "",
    angkatan: "",
    iddosen: "",
    email: generateRandomEmail(),
  });

  

  const [dosenwaliList, setDosenwaliList] = useState([]);

  useEffect(() => {
    const fetchDosenwaliList = async () => {
      try {
        const response = await axios.get("http://localhost:4000/dosenwali");
        setDosenwaliList(response.data);
      } catch (error) {
        console.error("Error fetching dosenwali list:", error);
      }
    };



    fetchDosenwaliList();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Submitting form...");
      console.log("Random Email:", formData.email);

      const res = await axios.post(
        "http://localhost:4000/usersmhs",
        {
          NIM: pformData.NIM,
          nama: formData.nama,
          angkatan: parseInt(formData.angkatan),
          email: formData.email,
          iddosen: parseInt(formData.iddosen),
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      console.log("Response:", res);

      if (res) {
        router.push("/opt/create");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event, field) => {
    const { value } = event.target;
    const newValue = field === "email" ? generateRandomEmail() : value;
    setFormData({ ...formData, [field]: newValue });
  };

  return (
    <BaseLayout_opt>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5">
        Buat
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Akun
        </span>
      </h1>
      <p className="mt-3">Membuat akun mahasiswa baru</p>
      <div className="flex mt-7 flex-col w-100% h-max px-10 py-6 bg-white justify-start gap-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="NIM" className="text-black">
                NIM
              </label>
              <input
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                placeholder="Masukkan NIM"
                type="text"
                id="nim"
                value={formData.NIM}
                onChange={(event) => handleChange(event, "NIM")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="nama" className="text-black">
                Nama
              </label>
              <input
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                placeholder="Masukkan Nama"
                type="text"
                id="nama"
                value={formData.nama}
                onChange={(event) => handleChange(event, "nama")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="angkatan" className="text-black">
                Angkatan
              </label>
              <select
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                id="angkatan"
                value={formData.angkatan}
                onChange={(event) => handleChange(event, "angkatan")}
              >
                <option value="">Pilih Tahun Angkatan</option>
                {Array.from({ length: 5 }, (_, index) => 2021 + index).map(
                  (year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="iddosen" className="text-black">
                ID Dosen
              </label>
              <select
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                id="iddosen"
                value={formData.iddosen}
                onChange={(event) => {
                  formData.iddosen = event.target.value;
                  console.log(formData.iddosen);
                }}
              >
                <option value="" disabled>
                  Pilih Dosen Wali
                </option>
                <option value="1">Dosen Wali 1</option>
                {dosenwaliList.map((dosenwali) => (
                  <option key={dosenwali.id} value={dosenwali.id}>
                    {dosenwali.nama}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#183D3D] text-white w-20 h-8 text-sm rounded-md"
            >
              Buat Akun
            </button>
          </div>
        </form>
      </div>
    </BaseLayout_opt>
  );
};

export default Create;
