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

    const mailData = {
      from: "sumatif.com",
      to: process.env.SEND_GMAIL,
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
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });
    
    return NextResponse.json({
      status: "success",
      data: "Complete to send"
    });
  } catch (error) {
    console.log(error);

    return NextResponse.error();
  }
}

export const dynamic = "force-static";
