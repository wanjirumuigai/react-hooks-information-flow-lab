import React from "react"

function Header({onDarkModeClick, status}) {
    //const isDarkMode = false;
    
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {status ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header