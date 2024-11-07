"use client";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  DrawerHeader,
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

import logo from "@/public/img/logo.png";
import IconHome from "@/icons/IconHome/IconHome";
import IconEstate from "@/icons/IconEstate/IconEstate";
import IconConsultancy from "@/icons/IconConsultancy/IconConsultancy";
import IconEcommerce from "@/icons/IconEcommerce/IconEcommerce";
import IconEbooks from "@/icons/IconEbooks/IconEbooks";

const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const currentRoute = usePathname();
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="default"
        onClick={onOpen}
        paddingBlock={2}
        paddingInline={2}
        className="rounded-lg hover:bg-[#e3e4e63d] focus:bg-[#e3e4e63d]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          className="fill-preto-950 dark:fill-cinza-200"
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
        <DrawerContent className="bg-cinza-200 dark:bg-preto-900">
          <DrawerCloseButton />
          <DrawerHeader
            paddingTop={12}
            className="bg-cinza-200 dark:bg-preto-900 flex items-center gap-4"
          >
            <Image src={logo} alt="Logo da empresa" className="size-12"/>
            <p className="text-lg">Ex Enterprise</p>
          </DrawerHeader>
          <DrawerBody className="bg-cinza-200 dark:bg-preto-900 flex flex-col gap-4">
            <Link
              href={"/"}
              className={`p-1 flex items-center gap-2 ${
                currentRoute === "/" ? "text-laranja-light-normal dark:text-laranja-dark-normal" : "hover:text-laranja-light-normal hover:dark:text-laranja-dark-normal"
              }`}
            >
              <IconHome className="size-5 text-inherit fill-current" />
              HOME
            </Link>

            <Link
              href={"/imoveis"}
              className={`p-1 flex items-center gap-2 ${
                currentRoute === "/imoveis" ? "text-laranja-light-normal dark:text-laranja-dark-normal" : "hover:text-laranja-light-normal hover:dark:text-laranja-dark-normal"
              }`}
            >
              <IconEstate className="size-5 text-inherit fill-current" />
              IMÓVEIS
            </Link>

            <Link
              href={"/consultoria"}
              className={`p-1 flex items-center gap-2 ${
                currentRoute === "/consultoria"
                  ? "text-laranja-light-normal dark:text-laranja-dark-normal" : "hover:text-laranja-light-normal hover:dark:text-laranja-dark-normal"
              }`}
            >
              <IconConsultancy className="size-5 text-inherit fill-current" />
              CONSULTORIA
            </Link>

            <Link
              href={"/e-commerce"}
              className={`p-1 flex items-center gap-2 ${
                currentRoute === "/e-commerce"
                  ? "text-laranja-light-normal dark:text-laranja-dark-normal" : "hover:text-laranja-light-normal hover:dark:text-laranja-dark-normal"
              }`}
            >
              <IconEcommerce className="size-5 text-inherit fill-current" />
              E-COMMERCE
            </Link>

            <Link
              href={"/ebooks"}
              className={`p-1 flex items-center gap-2 ${
                currentRoute === "/ebooks"
                  ? "text-laranja-light-normal dark:text-laranja-dark-normal" : "hover:text-laranja-light-normal hover:dark:text-laranja-dark-normal"
              }`}
            >
              <IconEbooks className="size-5 text-inherit fill-current" />
              E-BOOKS
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

MenuMobile.propTypes = {};

export default MenuMobile;
