"use client";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function EditProfileDepartemen() {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">
        Edit{" "}
        <span className="ml-2 px-3 py-1 rounded font-bold text-gray-200 bg-gray-700">
          Profile
        </span>
      </h1>
      <div className="flex gap-10 bg-white w-full h-max p-4 px-12 rounded-sm">
        <div className="flex flex-col w-[15rem] pt-10">
          <div className="w-[10rem] h-[10rem] bg-gray-200 rounded-full">
            <Image
              src="/pp-kosong.jpeg"
              width={100}
              height={100}
              className="w-[10rem] h-[10rem] rounded-full"
              alt="profil"
            />
          </div>
        </div>
        <div className="form mt-7 flex justify-center w-full">
          <form className="flex flex-col gap-4 w-3/4 pb-11">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nama" value="Nama Departemen" />
              </div>
              <TextInput
                id="nama"
                type="text"
                placeholder="Informatika"
                disabled
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="nim" value="Kode Departemen" />
              </div>
              <TextInput id="nim" type="text" placeholder="123" disabled />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="angkatan" value="Ketua Departemen" />
              </div>
              <TextInput
                id="angkatan"
                type="text"
                placeholder="Aris Puji Widodo"
                disabled
              />
            </div>
            <br />
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nomorhp" value="Telpon" />
              </div>
              <TextInput
                number
                id="nomorhp"
                type="text"
                placeholder="0988765432"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="E-mail" />
              </div>
              <TextInput
                number
                id="email"
                type="email"
                placeholder="dpt@flowbite.com"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Passsword Baru" />
              </div>
              <TextInput
                number
                id="password"
                type="password"
                placeholder="Masukan Password Baru"
              />
            </div>

            <Button type="submit" className="bg-[#183D3D]">
              Simpan
            </Button>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
}
