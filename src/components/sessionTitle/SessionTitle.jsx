import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import iconSeta from "@/public/img/setaBaixo.png";
import Link from "next/link";

const Session = ({ texto }) => {
  return (
    <header
      className={
        "h-[calc(100vh-80px)] flex flex-col gap-2 relative justify-center items-center"
      }
      data-responsividade-mode="desktop"
    >
      <div
        className={
          "w-full flex items-center justify-center p-4 relative flex-1 self-stretch  grow"
        }
      >
        <h1 className="text-cores-laranja [font-family:'Work_Sana-Light, Helvetica] font-light  text-center tracking-[3.36px] text-4xl sm:text-5xl">
          {texto[0] + " "}
          <strong className="text-[#e3e3e6] font-semibold">{texto[1]}</strong>
        </h1>
      </div>
      <Link
        href={"/"}
        className="py-4"
      >
        <Image src={iconSeta} alt="" />
      </Link>
    </header>
  );
};

Session.propTypes = {
  texto: PropTypes.array.isRequired,
  iconSeta: PropTypes.symbol,
};

export default Session;
