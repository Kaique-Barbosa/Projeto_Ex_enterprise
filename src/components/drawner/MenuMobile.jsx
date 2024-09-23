"use client";
import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { MenuIcon } from "@/icons/MenuIcon/index";

const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const currentRoute = usePathname();
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="blackAlpha"
        onClick={onOpen}
        padding={0}
      >
        <MenuIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader className="bg-[--cores-laranja]">Páginas</DrawerHeader> */}

          <DrawerBody className="bg-[--cores-laranja] text-lg ">
            <div className=" flex items-center mt-[20%]   w-full h-[2rem]">
              <Link
                href={"/"}
                className={` p-1 w-[100%] rounded-xl hover:bg-slate-200   ${
                  currentRoute === "/" ? "text-black" : ""
                }`}
              >
                HOME
              </Link>
            </div>
            <div className=" flex items-center mt-[5%]   w-full h-[2rem]">
              <Link
                href={"/imoveis"}
                className={`p-1 w-[100%] rounded-xl hover:bg-slate-200   ${
                  currentRoute === "/imoveis" ? "text-black" : ""
                }`}
              >
                IMÓVEIS
              </Link>
            </div>
            <div className=" flex items-center mt-[5%]   w-full h-[2rem]">
              <Link
                href={"/consultoria"}
                className={`p-1 w-[100%] rounded-xl hover:bg-slate-200  ${
                  currentRoute === "/consultoria" ? "text-black" : ""
                }`}
              >
                CONSULTORIA
              </Link>
            </div>
            <div className=" flex items-center mt-[5%]   w-full h-[2rem]">
              <Link
                href={"/e-commerce"}
                className={`p-1 w-[100%] rounded-xl hover:bg-slate-200  ${
                  currentRoute === "/e-commerce" ? "text-black" : ""
                }`}
              >
                E-COMMERCE
              </Link>
            </div>
            <div className=" flex items-center mt-[5%]   w-full h-[2rem]">
              <Link
                href={"/ebooks"}
                className={`p-1 w-[100%] rounded-xl hover:bg-slate-200  ${
                  currentRoute === "/ebooks" ? "text-black" : ""
                }`}
              >
                E-BOOKS
              </Link>
            </div>
          </DrawerBody>

          {/* <DrawerFooter className="bg-[--cores-laranja]">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

MenuMobile.propTypes = {};

export default MenuMobile;
