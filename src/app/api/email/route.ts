import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { FormSchema } from "@/components/forms/FormBuyProduct";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.APP_PASS
  }
});

export async function POST(req: Request) {
  const body: FormSchema[] = await req.json();

  const createList = (dataToConvert: FormSchema) => {
    const generateString = `
      ${dataToConvert.name}
      Kelas: ${dataToConvert.kelas}
      Jurusan: ${dataToConvert.jurusan}
      Nomor Hp: ${dataToConvert.noHp}
      Email: ${dataToConvert.email}
      Nama Sekolah: ${dataToConvert.schoolName}
      Nama Orang Tua: ${dataToConvert.parentName}
      Nama Kepala Sekolah: ${dataToConvert.namaKepalaSekolah}
      Nama Paket: ${dataToConvert.packageName}
    `;

    return generateString;
  };

  const sender = await transporter.sendMail({
    from: "Admin Sumatif",
    to: "zakiiws22@gmail.com",
    subject: "Pembelian product",
    text: `
      ${createList(body[0])}
      ${createList(body[1])}
      ${createList(body[2])}
      ${createList(body[3])}
      ${createList(body[4])}
      ${createList(body[5])}
      ${createList(body[6])}
      ${createList(body[7])}
      ${createList(body[8])}
      ${createList(body[9])}

      Nama PIC: ${body[0].namePICPendaftaran}
    `
  });

  return NextResponse.json({ status: 200, data: "Complete to send" });
}

export const dynamic = "force-static";
