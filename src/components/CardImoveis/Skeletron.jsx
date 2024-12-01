import React from "react";

export default function CardImoveisSkeletron() {
  return (
    <div className="card-imoveis bg-cinza-200 shadow-neutro flex h-fit md:min-h-80 w-full max-w-7xl items-center justify-center rounded-lg tracking-widest leading-tighter animate-pulse">
      <div className="card-imoveis-align flex flex-col self-stretch flex-1">
        <div className="card-imoveis-image h-60 w-full rounded-t-lg bg-gray-300 animate-pulse flex items-center justify-center">
          <span
            className="iconify mdi--image-size-select-actual size-52 text-cinza-400
            animate-pulse"
          ></span>
        </div>
        <div className="flex flex-col gap-8 p-6 flex-1">
          <div className="flex flex-col gap-2">
            <h5 className="bg-gray-300 h-8 animate-pulse"></h5>
            <div className="flex gap-2 items-center">
              <span className="bg-gray-300 h-6 w-40 animate-pulse"></span>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-1 items-center">
              <span className="bg-gray-300 h-6 w-20 animate-pulse"></span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="bg-gray-300 h-6 w-20 animate-pulse"></span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="bg-gray-300 h-6 w-20 animate-pulse"></span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="bg-gray-300 h-6 w-20 animate-pulse"></span>
            </div>
          </div>
          <div className="bg-gray-300 h-8 w-40 text-white px-4 py-2 rounded-md animate-pulse">
          </div>
          <div className="w-full flex flex-col xs:flex-row justify-center items-center xs:justify-between gap-4">
            <div
              className="flex flex-col gap-2 text-center
            xs:text-start"
            >
              <span className="text-accent text-3xl font-semibold leading-7 bg-gray-300 h-8 animate-pulse"></span>
              <span className="font-medium bg-gray-300 h-6 w-32 animate-pulse"></span>
            </div>
            <div className="bg-gray-300 h-12 w-32 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
