import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header=({ handleToggleDarkMode })=>{
    return(
        <div className="header">
        <h1>Add Note<i class="fa-solid fa-notes"></i></h1>
        <button onClick={()=> handleToggleDarkMode(
            (previousDarkMode)=> !previousDarkMode
            )}
            className="save">Toggle Mode</button>
        </div>
    )
};

export default Header;