import React, { useState } from "react";


const PerguntasFrequentes = ({ titulo, texto, aberto }) => {
  return (
    <div className="space-y-4 w-[80%] ">
      <details
        className="rounded-lg my-1 group border-s-4 border-laranja_dark bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        open={aberto}
      >
        <summary className="  flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            {titulo}
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
          {texto}
        </p>
      </details>
    </div>
  );
};

export default PerguntasFrequentes;
