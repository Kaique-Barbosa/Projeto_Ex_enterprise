import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const CardModel2 = ({ imagemSrc, titulo, descricao }) => {
  return (
    
      <div className="w-[25rem]  rounded-lg bg-slate-500">
        <div className="flex flex-col">
          <div className="h-60">
            <Image src={imagemSrc} alt="foto" className='w-full h-full rounded-t-lg' />
          </div>
          <div className='p-4'>
            <h1 className="my-5 text-center">{titulo}</h1>
            <p className="text-balance break-words text-laranja_light dark:text-laranja_dark">{descricao}</p>
          </div>
        </div>
      </div>
  )
}

CardModel2.propTypes = {
  imagemSrc: PropTypes.string.isRequired,
  titulo: PropTypes.string,
  descricao: PropTypes.string,
}

export default CardModel2