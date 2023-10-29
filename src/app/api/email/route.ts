import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { FormSchema } from "@/components/forms/FormBuyProduct";
import smtpTransport from "nodemailer-smtp-transport";

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

type RequestBody = {
  studentData: FormSchema[];
  picNames: string;
};

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json();


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

    await transporter.sendMail({
      from: "sumatif.com",
      to: "zakiiws22@gmail.com",
      subject: body.studentData[0].packageName,
      text: `
      ${createList(body.studentData[0])}
      ${createList(body.studentData[1])}
      ${createList(body.studentData[2])}
      ${createList(body.studentData[3])}
      ${createList(body.studentData[4])}
      ${createList(body.studentData[5])}
      ${createList(body.studentData[6])}
      ${createList(body.studentData[7])}
      ${createList(body.studentData[8])}
      ${createList(body.studentData[9])}

      Nama PIC: ${body.picNames}
    `
    });

    return NextResponse.json({ status: 200, data: "Complete to send" });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ status: 400,  message: "error occurred on the server, try again later"  })
  }
}

export const dynamic = "force-static";
