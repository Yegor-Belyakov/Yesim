"use client";
import "./globals.css";
import { ModalProvider } from "./context/modalContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../app/i18n";
import { LanguageProvider } from "./context/languageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <ModalProvider>{children}</ModalProvider>
          </LanguageProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
