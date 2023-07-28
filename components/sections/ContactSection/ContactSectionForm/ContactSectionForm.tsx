import React, { useState } from "react";
import { Formik, Field, FormikHelpers } from "formik";
import { BeatLoader } from "react-spinners";
import { ContactSectionFormStyled } from "./ContactSectionFormStyled.jsx";
import sendEmail from "../../../javascript/sendEmail";
import { MdCheckCircle, MdError } from "react-icons/md";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactSectionForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [err, setErr] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    try {
      setTimeout(() => {
        handleResponseDismiss();
      }, 6000);
      setLoading(true);
      // await sendEmail(values);
      await sendEmail(values);
      // formikHelpers.resetForm();
      setLoading(false);
      setErr(false);
      setResponse("Email sent successfully!");
      formikHelpers.resetForm();
    } catch (error: unknown) {
      setLoading(false);
      setErr(true);
      setResponse("Failed to send email : " + (error as Error).message);
    }
  };

  const handleResponseDismiss = () => {
    setResponse(undefined);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <form
          onSubmit={
            formikProps.handleSubmit as FormikHelpers<FormValues>["submitForm"]
          }
        >
          <div className="" style={{ marginRight: ".5rem" }}>
            <label>Votre nom</label>
            <Field type="text" name="name" className="name" />
          </div>
          <div className="">
            <label>Votre email</label>
            <Field type="email" name="email" className="email" />
          </div>
          <label>Votre message</label>
          <Field type="text" name="message" className="message" />
          {loading ? (
            <div className="loading">
              <BeatLoader className="bet-loader" color="white" />
            </div>
          ) : (
            response && (
              <>
                {err ? (
                  <MdError color="red" size={18} />
                ) : (
                  <MdCheckCircle color="green" size={18} />
                )}
                <div
                  className="reponse"
                  style={{
                    color: err ? "red" : "green",
                    display: "inline",
                  }}
                >
                  {response}
                </div>
              </>
            )
          )}

          <input type="submit" value="Envoyer" />
        </form>
      )}
    </Formik>
  );
};

export default ContactSectionForm;
