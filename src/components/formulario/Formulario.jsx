import React from 'react'

const Formulario = () => {
    return (
        <section className=" my-10">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-4  ">
                    <div className=" col-span-full lg:col-span-4 lg:py-12 text-center  m-auto ">
                        <p className="max-w-xl  mx-5 flex text-2xl text-center font-bold ">
                        Qual servico quer entrar em contato?
                        </p>

                    </div>

                    <div className="rounded-lg  p-8 shadow-lg lg:col-span-4 lg:p-12">
                        <form action="#" className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                <div>
                                    <label
                                        htmlFor="Option1"
                                        className="block w-full cursor-pointer bg-white font-bold rounded-lg border border-gray-200 p-3 text-gray-600  hover:border-orange-500 has-[:checked]:border-orange-500 has-[:checked]:bg-black has-[:checked]:text-white"
                                        tabIndex="0"
                                    >
                                        <input className="sr-only bg-white"  id="Option1" type="radio" tabIndex="-1" name="option" />

                                        <span className="text-sm"> Consultoria </span>
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="Option2"
                                        className="block w-full cursor-pointer bg-white font-bold rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-orange-500 has-[:checked]:border-orange-500 has-[:checked]:bg-black has-[:checked]:text-white"
                                        tabIndex="0"
                                    >
                                        <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                                        <span className="text-sm"> Alocação de imóveis</span>
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="Option3"
                                        className="block w-full bg-white font-bold cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600  hover:border-orange-500 has-[:checked]:border-orange-500 has-[:checked]:bg-black has-[:checked]:text-white"
                                        tabIndex="0"
                                    >
                                        <input className="sr-only"  id="Option3" type="radio" tabIndex="-1" name="option" />

                                        <span className="text-sm"> E-commerce </span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="name">Nome</label>
                                <input
                                    className="w-full rounded-lg bg-white font-bold text-black border-gray-200 p-3 text-sm"
                                    placeholder="Nome"
                                    type="text"
                                    id="name"
                                    required={true}
                                   
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">E-mail</label>
                                    <input
                                        className="w-full rounded-lg bg-white font-bold text-black  border-gray-200 p-3 text-sm"
                                        placeholder="E-mail"
                                        type="email"
                                        id="email"
                                       required={true}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Telefone</label>
                                    <input
                                        className="w-full rounded-lg bg-white font-bold text-black border-gray-200 p-3 text-sm"
                                        placeholder="Telefone"
                                        type="tel"
                                        id="phone"
                                        required={true}
                                    />
                                </div>
                            </div>

                          

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>

                                <textarea
                                    className="w-full rounded-lg bg-white font-bold text-black border-gray-200 p-3 text-sm"
                                    placeholder="Mensagem"
                                    rows="8"
                                    id="message"
                                    required={true}
                                ></textarea>
                            </div>

                            <div className="mt-4 flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="w-full  rounded-lg bg-orange-500 px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Formulario