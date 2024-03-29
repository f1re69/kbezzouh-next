import React, { useEffect } from "react";
import ContactSectionForm from "../ContactSectionForm/ContactSectionForm";

interface ContactSectionProps {
  contactSectionRef: React.RefObject<HTMLElement>;
}

const ContactSectionPresentation: React.FC<ContactSectionProps> = ({
  contactSectionRef,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section id="contact" ref={contactSectionRef}>
      <div className="anchor">
        <a id="anchor-contact"></a>
        <h2 className="top-title">Vous avez un message à me transmettre ?</h2>
      </div>
      <ContactSectionForm />
    </section>
  );
};

export default ContactSectionPresentation;
