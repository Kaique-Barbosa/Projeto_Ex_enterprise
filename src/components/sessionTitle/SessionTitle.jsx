import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import iconSeta from "@/public/img/setaBaixo.png";
import Link from "next/link";

const Session = ({ texto }) => {
  return (
    <div
      className={
        "my-[--margim-espacamento-padrao] flex flex-col  gap-2 px-0 py-0 mx-0  relative justify-center items-center"
      }
      style={{
        width: "var(--responsividade-container-width)",
        height: "700px",
      }}
      data-responsividade-mode="desktop"
    >
      <div
        className={
          " flex flex-col items-center relative flex-1 self-stretch w-[80%] m-auto grow justify-center"
        }
      >
        <div
          className={
            "w-full flex  items-center justify-center p-4 relative flex-1 self-stretch  grow"
          }
        >
          <p className="relative flex-1 [font-family:'Work_Sana-Light, Helvetica] font-normal text-transparent text-[56px] text-center tracking-[3.36px] leading-[56px]">
            <span className="font-light text-[#eb7500] tracking-[1.88px] leading-8">
              {" "}
              {texto[0] + " "}
            </span>
            <span className="font-h1-bold font-[number:var(--h1-bold-font-weight)] text-[#f8a833] tracking-[var(--h1-bold-letter-spacing)] [font-style:var(--h1-bold-font-style)] leading-[var(--h1--bold--line--height)] text-[length:var(--h1-bold-font-size)]">
              &nbsp;
            </span>
            <span className="font-h1-bold font-[number:var(--h1-bold-font-weight)] text-[#e3e3e6] tracking-[var(--h1-bold-letter-spacing)] [font-style:var(--h1-bold-font-style)] leading-[var(--h1--bold--line--height)] text-[length:var(--h1-bold-font-size)]">
              {texto[1]}
            </span>
            <span className="font-h1-bold font-[number:var(--h1-bold-font-weight)] text-[#e3e4e6] tracking-[var(--h1-bold-letter-spacing)] [font-style:var(--h1-bold-font-style)] leading-[var(--h1--bold--line--height)] text-[length:var(--h1-bold-font-size)]">
              &nbsp;
            </span>
          </p>
        </div>
        <Link href={'/'} className="
        ">
          <Image src={iconSeta} alt=""/>
        </Link>
      </div>
    </div>
  );
};

Session.propTypes = {
  texto: PropTypes.array.isRequired,
  iconSeta: PropTypes.symbol,
};

export default Session;
