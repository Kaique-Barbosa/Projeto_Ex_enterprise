import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button} from '@chakra-ui/react'

const BotaoOnClick = ({texto, css, funcaoOnclick}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      localStorage.getItem("chakra-ui-color-mode") === "dark"
        ? setDarkMode(true)
        : setDarkMode(false);
    }, []);

    return (
            <Button
                className={`${css} w-fit font-semibold text-cores-fonte self-start px-4 py-2 rounded-3xl border border-solid border-laranja_light dark:border-laranja_dark hover:bg-laranja_light dark:bg-gray-800 hover:text-orange-500`}
                onClick={funcaoOnclick}
            >
                {texto}
            </Button>
    )
}

BotaoOnClick.propTypes = {
    texto: PropTypes.string.isRequired,
    css: PropTypes.string.isRequired,
}

export default BotaoOnClick