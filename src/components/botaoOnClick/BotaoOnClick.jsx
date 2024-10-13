import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from '@chakra-ui/react'

const BotaoOnClick = ({texto, css, funcaoOnclick}) => {
    return (
        <>
            <Button
                className={`${css} w-fit font-semibold text-cores-fonte self-start px-4 py-2 rounded-3xl border border-solid border-laranja_light dark:border-laranja_dark hover:bg-laranja_light dark:hover:bg-laranja_dark hover:text-branco`}
                onClick={funcaoOnclick}
            >
                {texto}
            </Button>
        </>
    )
}

BotaoOnClick.propTypes = {
    texto: PropTypes.string.isRequired,
    css: PropTypes.string.isRequired,
}

export default BotaoOnClick