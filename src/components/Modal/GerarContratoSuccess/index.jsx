import React, { useRef, useImperativeHandle, forwardRef } from "react";

const GerarContratoSuccess = forwardRef(({ urlDownload }, ref) => {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialogRef.current) dialogRef.current.showModal();
    },
    close() {
      if (dialogRef.current) dialogRef.current.close();
    },
  }));

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box bg-primary">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => dialogRef.current.close()}
          >
            <span className="iconify mdi--close text-lg"></span>
          </button>
        </form>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="font-bold text-xl">Contrato gerado com succeso</h3>
          <p className="text-base">
            Seu contrato foi gerado com sucesso, clique no botão abaixo para
            fazer o download.
          </p>
        </div>
        <div className="modal-action">
          <a href={urlDownload} download className="btn btn-accent text-white">
            <span className="iconify mdi--download text-base"></span>
            Download
          </a>
        </div>
      </div>
    </dialog>
  );
});

export default GerarContratoSuccess;
