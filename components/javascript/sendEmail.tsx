import axios, { AxiosResponse } from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
  recaptchaResponse: string;
}

async function sendEmail(formData: FormData): Promise<AxiosResponse> {
  if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
    throw new Error("BACKEND_URL is not defined");
  }

  const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/send-email";

  try {
    console.log("formData : ", formData);
    const response = await axios.post(url, formData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default sendEmail;
