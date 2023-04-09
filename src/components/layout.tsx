import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}
