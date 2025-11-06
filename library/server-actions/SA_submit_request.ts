"use server";

import { TResObject } from "@/types";
import nodemailer from "nodemailer";

export const SA_submit_request = async (
  _: TResObject,
  formData: FormData
): Promise<TResObject> => {
  const resObj: TResObject = { success: false };
  const formDataObject = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    company: String(formData.get("company")),
    discount_code: String(formData.get("discount_code")),
    def: String(formData.get("def")),
  };
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: `"OrganicAgents" <${process.env.SMTP_USER}>`,
      to: formDataObject.email,
      subject: "Запрос на покупку LLM",
      html: `
     Ваш запрос успешно зарегистрирован. После оплаты по ссылке ниже вы сможете получить свой LLM на электронную почту в течение нескольких часов. В случае неудовлетворительной работы модели вы можете подать заявку на возврат средств. https://organicagents.publicvm.com/fioytg89ivaj3
    `,
    });
    console.log(formDataObject);
    return resObj;
  } catch (error) {
    return resObj;
  }
};
