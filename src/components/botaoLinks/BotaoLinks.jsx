import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const BotaoLinks = ({ href, alt, texto, css }) => {
    return (
        <>
            <Link
                href={href}
                alt={alt}
                className={`${css} w-fit font-semibold text-cores-fonte self-start px-4 py-2 rounded-3xl border border-solid border-laranja_light dark:border-laranja_dark hover:bg-laranja_light dark:hover:bg-laranja_dark hover:text-branco`}
            >
                {texto}
            </Link>
        </>
    )
}

BotaoLinks.propTypes = {
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}

export default BotaoLinks