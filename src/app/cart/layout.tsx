import type { Metadata } from "next";

import "../globals.css";

import LayoutTop from "@/components/LayoutTop";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "Your Cart",
  description: "Your Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      
        <NavBar navStyle=""/>
      <LayoutTop text="YOUR CART"/>
     
        {children}
        <Footer/>
       
    </div>
  );
}
