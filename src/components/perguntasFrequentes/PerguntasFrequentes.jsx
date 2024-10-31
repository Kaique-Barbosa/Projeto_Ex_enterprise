import React, { useState } from "react";

const PerguntasFrequentes = ({ titulo, texto, aberto }) => {
  return (
    <div className="space-y-4 w-full">
      <details
        className="rounded-lg my-1 border-s-4 group bg-cinza p-6 dark:bg-preto_secondario dark:border-laranja-dark-normal border-laranja-light-normal [&_summary::-webkit-details-marker]:hidden"
        open={aberto}
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h5 className="font-medium">{titulo}</h5>

          <span className="shrink-0 rounded-full text-white bg-laranja-light-normal p-1.5  sm:p-3 dark:bg-laranja-dark-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45 text-inherit fill-current"
              viewBox="0 0 20 20"
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
