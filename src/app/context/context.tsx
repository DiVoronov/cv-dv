import React, { createContext } from "react";

export const contentLanguages = {
  navbar: {
    navCV: {
      en: "CV",
      ua: "Резюме"
    },
    navAboutApp: {
      en: "About App",
      ua: "Про Додаток"
    },
    navContacts: {
      en: "Contacts",
      ua: "Контакти"
    }
  },

};

export const LanguageContext = createContext(contentLanguages);
