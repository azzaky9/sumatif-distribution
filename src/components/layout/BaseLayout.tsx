import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../sections/Footer";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
