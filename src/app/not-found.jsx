
import Image from "next/image";
import React from "react";

export default function Page404() {
  return (
<div className="grid h-screen place-content-center bg-black px-4">
  <div className="text-center">
  
    
    <Image priority={true} src={require('@/app/assets/404Icon.jpg')} alt="Imagem de erro 404, paginá não existe" className="w-1/2 m-auto rounded-lg" />

    <p className="mt-4 text-gray-200 ">Página não encontrada</p>
  </div>
</div>
  );
}
