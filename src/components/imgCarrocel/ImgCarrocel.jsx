import Image from "next/image";
import React from "react";

export default function ImgCarrocel({imagem1, imagem2, imagem3}) {
  return (
    <div className="carousel w-full h-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src={imagem1}
          className="w-full"
          alt="imagem tirada do local"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src={imagem2}
          className="w-full"
          alt="imagem tirada do local"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src={imagem3}
          className="w-full"
          alt="imagem tirada do local"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

    </div>
  );
}
