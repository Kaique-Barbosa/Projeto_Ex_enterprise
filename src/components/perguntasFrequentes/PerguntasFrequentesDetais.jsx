import React from "react";

const PerguntasFrequentesDetais = ({ titulo, texto, aberto }) => {
  return (
    <div className="space-y-4 w-full">
      <details
        className="rounded-lg my-1 border-s-4 group bg-cinza-200 p-6 dark:bg-preto-900 border-accent [&_summary::-webkit-details-marker]:hidden"
        open={aberto}
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h5 className="font-medium">{titulo}</h5>

          <span className="shrink-0 rounded-full text-white bg-accent p-1.5 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45 text-inherit fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed">
          {texto}
        </p>
      </details>
    </div>
  );
};

export default PerguntasFrequentesDetais;
