import React from "react";

function UserComponent({whiteCaptures, blackCaptures, currentMove}) {

    return (
        <div className="user-component" >
            User: tyler.e.spicer723 <br/>
            Game ID: 41 <br/>
            Black Captures: {blackCaptures} <br/>
            White Captures: {whiteCaptures} <br/>
            Playing: {'⚫'} <br/>
        </div>
    )

}

export default UserComponent;