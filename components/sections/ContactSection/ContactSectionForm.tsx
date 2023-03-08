import React from "react";
import { Formik, Field, FormikHelpers } from "formik";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactSectionForm: React.FC = () => {
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    // Envoyer les données au serveur via PHPMailer ou une autre méthode
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
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </Formik>
  );
};

export default ContactSectionForm;
