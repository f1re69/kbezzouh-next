import React, { useContext } from "react";
import RefsContext from "../../context/RefsContext";
import ContactSectionPresentation from "./ContactSectionPresentation";

const ContactSection: React.FC = () => {
  const { contactSectionRef } = useContext(RefsContext);

  return <ContactSectionPresentation contactSectionRef={contactSectionRef} />;
};

export default ContactSection;
