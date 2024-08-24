"use client";
import React from "react";
import { useRouter, usePathname, useParams } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useParams();
  return (
    <div>
      <button
        onClick={() => router.push(pathname.replace(/^\/[a-z]{2}/, `/en`))}
      >
        EN
      </button>
      <button
        onClick={() => router.push(pathname.replace(/^\/[a-z]{2}/, `/ru`))}
      >
        RU
      </button>
      <button
        onClick={() => router.push(pathname.replace(/^\/[a-z]{2}/, `/am`))}
      >
        AM
      </button>
    </div>
  );
};

export default LanguageSwitcher;
