"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logos/1.png";
import uniqid from "uniqid";
import MobileDrawer from "@/app/components/header/MobileDrawer";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showDrawer = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const navLinks = [
    {
      title: "Home",
      to: "/",
      key: uniqid(),
    },
    {
      title: "Products",
      to: "/products",
      key: uniqid(),
    },
    {
      title: "AboutUs",
      to: "/about",
      key: uniqid(),
    },
    {
      title: "ContactUs",
      to: "/",
      key: uniqid(),
    },
  ];
  return (
    <header className="flex justify-center py-10 w-full  h-[50px] shadow-2xl">
      <div className="flex items-center justify-between gap-2 w-full container px-3">
        <Link href="/">
          <Image
            src={logo}
            width={70}
            height={70}
            alt="Lily Decor"
            className=""
          />
        </Link>

        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-10 text-base font-medium">
            {navLinks.map(({ title, to, key }) => (
              <Link href={to} key={key} className="text-primary_text">
                {title}
              </Link>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <MobileDrawer
            open={isOpen}
            showDrawer={showDrawer}
            closeDrawer={onClose}
            navLinks={navLinks}
            logo={logo}
          />
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
