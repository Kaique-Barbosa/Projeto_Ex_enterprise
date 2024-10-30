"use client"



import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import imagem from '@/public/img/livroImg.jpg'

export default function cardModel5() {
  return (
    <div className="w-80 sm:w-full h-fit min-h-80  bg-slate-50 flex flex-col sm:flex-row  justify-between items-center ">
      <div className=" w-full sm:w-[35%]  h-full  bg-slate-800  ">
        <Image src={imagem} className='w-full h-full' alt='capa dos ebooks' />
      </div>
        {/* <Image src={imagem} className='w-64' alt='capa dos ebooks' /> */}

      <div className="bg-green-400 w-full  mx-2 flex flex-col gap-3 " >
        <div className="text-lg">
          <h1> TITULO</h1>
        </div>
        <div className="">
          <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className="bg-orange-600 w-fit rounded-md mt-2">
          <button className='p-1 w-full'>Download</button>
        </div>
      </div>

    </div>
  )
}
