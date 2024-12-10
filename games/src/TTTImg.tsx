import React from "react";

export default function TTTImg({player}: {playerId:0|1|-1})
{
    if(player ===-1){
    return <></>
}
    return (

        <>
            {player === 0?
                <img src = {"https://t3.ftcdn.net/jpg/05/41/84/36/360_F_541843677_fKk0sKsCrCPWjLeRhO0XfpIhjxMpzDFg.png" }/> :
                <img src = {"https://static.vecteezy.com/system/resources/thumbnails/031/130/178/small_2x/neon-letter-x-on-transparent-background-png.png"}/>}
        </>
    );
}
