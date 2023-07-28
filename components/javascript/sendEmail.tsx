import axios, { AxiosResponse } from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

async function sendEmail(formData: FormData): Promise<AxiosResponse> {
  const url = "http://localhost:3456/send-email";
  try {
    const response = await axios.post(url, formData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default sendEmail;
