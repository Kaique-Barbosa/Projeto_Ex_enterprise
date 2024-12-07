import React from "react";
import Link from "next/link";

export default function loading() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="container w-full max-w-9xl mt-28 h-96">
        <div className="w-full h-full rounded-lg animate-pulse bg-primary"></div>
      </div>

      <div className="container w-full max-w-9xl my-12 flex flex-col gap-8">
        <div className="breadcrumbs text-lg">
          <ul>
            <li>
              <Link
                href="/imoveis"
                alt="voltar para imóveis"
                className="hover:text-accent hover:underline-offset-2"
              >
                Imóveis
              </Link>
            </li>
            <li>
              <span className="bg-primary animate-pulse w-32 h-6 rounded-md"></span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mx-2">
          <div className="flex flex-col gap-12 flex-1">
            <div>
              <div className="bg-primary w-56 h-10 rounded-md"></div>
            </div>
            <div>
              <div className="bg-primary w-full h-9 rounded-md mb-4"></div>
              <div className="bg-primary w-full h-9 rounded-md mb-4"></div>
              <div className="bg-primary w-full h-9 rounded-md mb-4"></div>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-6">
              <div className="grow basis-52">
                <div className="w-full h-20 animate-pulse bg-primary rounded-md"></div>
              </div>
              <div className="grow basis-32">
                <div className="w-full h-20 animate-pulse bg-primary rounded-md"></div>
              </div>
              <div className="grow basis-32">
                <div className="w-full h-20 animate-pulse bg-primary rounded-md"></div>
              </div>
              <div className="w-full max-w-9xl flex gap-x-8 gap-y-4 flex-wrap justify-start sm:justify-between text-xl">
                <div className="w-28 h-7 animate-pulse bg-primary rounded-md"></div>
                <div className="w-32 h-7 animate-pulse bg-primary rounded-md"></div>
                <div className="w-24 h-7 animate-pulse bg-primary rounded-md"></div>
                <div className="w-36 h-7 animate-pulse bg-primary rounded-md"></div>
              </div>
            </div>
          </div>
          <aside className="w-full lg:max-w-[25rem] h-96 bg-primary rounded-lg p-4 flex flex-col gap-4 aside-imovel"></aside>
        </div>
        <div className="w-full flex flex-col gap-4 my-12">
          <div className="w-full h-8 animate-pulse bg-primary rounded-md"></div>
          <div className="w-full max-w-9xl h-60 animate-pulse bg-primary rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
