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

const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const currentRoute = usePathname();
  return (
    <>
      <Button ref={btnRef} colorScheme="default" onClick={onOpen} padding={0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          className="fill-preto_primario dark:fill-cinza"
        >
          <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
        </svg>
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

          <DrawerBody className="bg-cinza dark:bg-preto_secondario">
            <div className=" flex items-center mt-[20%]   w-full h-[2rem]">
              <Link
                href={"/"}
                className={`p-1 w-[100%] rounded-xl ${
                  currentRoute === "/" ? "text-laranja" : "hover:text-laranja"
                }`}
              >
                HOME
              </Link>
            </div>
            <div className=" flex items-center mt-[5%]   w-full h-[2rem]">
              <Link
                href={"/imoveis"}
                className={`p-1 w-[100%] rounded-xl ${
                  currentRoute === "/imoveis" ? "text-black" : "hover:text-laranja"
                }`}
              >
                IMÓVEIS
              </Link>
            </div>
            <div className=" flex items-center mt-[5%]   w-full h-[2rem]">
              <Link
                href={"/consultoria"}
                className={`p-1 w-[100%] rounded-xl ${
                  currentRoute === "/consultoria" ? "text-laranja" : "hover:text-laranja"
                }`}
              >
                CONSULTORIA
              </Link>
            </div>
            <div className=" flex items-center mt-[5%]   w-full h-[2rem]">
              <Link
                href={"/e-commerce"}
                className={`p-1 w-[100%] rounded-xl ${
                  currentRoute === "/e-commerce" ? "text-laranja" : "hover:text-laranja"
                }`}
              >
                E-COMMERCE
              </Link>
            </div>
            <div className=" flex items-center mt-[5%]   w-full h-[2rem]">
              <Link
                href={"/ebooks"}
                className={`p-1 w-[100%] rounded-xl ${
                  currentRoute === "/ebooks" ? "text-laranja" : "hover:text-laranja"
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
