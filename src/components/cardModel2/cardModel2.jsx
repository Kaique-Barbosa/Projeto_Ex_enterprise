import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const cardModel2 = (imagemSrc, titulo, descricao) => {
  return (
    <div className=" w-full flex flex-col md:flex-row p-4">
    <div className="flex flex-col mx-[1rem] flex-wrap flex-grow">
      <Image src={imagemSrc} alt="" />
      <h1 className="my-5 text-center">{titulo}</h1>
      <p className='text-laranja'>{descricao}</p>
    </div>
  </div>
  )
}

cardModel2.propTypes = {
imagemSrc: PropTypes.string.isRequired,
titulo: PropTypes.string,
descricao: PropTypes.string,
}

export default cardModel2