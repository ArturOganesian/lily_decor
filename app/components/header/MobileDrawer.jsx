import React from "react";
import Link from "next/link";
import Image from "next/image";
import {  Drawer } from "antd";
import {MenuOutlined}  from '@ant-design/icons'

const MobileDrawer = ({ open, showDrawer, closeDrawer, navLinks, logo }) => {
  return (
    <div className="">
      <MenuOutlined  onClick={showDrawer} className="text-xl text-black"/> 
      <Drawer
        title={
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Lily Decor"
            className="absolute top-0 right-5"
          />
        }
        placement="left"
        onClose={closeDrawer}
        open={open}
      >
        <div className="flex flex-col gap-5 font-medium text-base">
          {navLinks.map(({ title, to, key }) => (
            <Link href={to} key={key} className="text-primary_text">
              {title}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
