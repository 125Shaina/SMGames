import React,{useState} from "react";

export default function PlayRSP()
{
    const[isDone, setIsDone] = React.useState(false)
    const[whoWon,setWhoWon] = React.useState("")
    function play(userChoice: number)
    {
        let computerChoice: number = Math.floor(Math.random() * 3)
        // r=0, p=1, s=2
        if(userChoice===0)
        {
            if(computerChoice===0)
            {
                setWhoWon("tie");
            }
            if(computerChoice===1)
            {
                setWhoWon("computer")
            }
            if(computerChoice===2)
            {
                setWhoWon("user")

            }
        }
        else if(userChoice===1)
        {
            if(computerChoice===0)
            {
                setWhoWon("user");
            }
            if(computerChoice===1)
            {
                setWhoWon("tie")
            }
            if(computerChoice===2)
            {
                setWhoWon("computer")

            }
        }
        else if(userChoice===2)
        {
            if(computerChoice===0)
            {
                setWhoWon("computer");
            }
            if(computerChoice===1)
            {
                setWhoWon("user")
            }
            if(computerChoice===2)
            {
                setWhoWon("tie")

            }
        }

        setIsDone(true)
    }
    function getResult(): String{
        if(whoWon ==="user")
        {
            return "You won";
        }
        else if (whoWon ==="computer")
        {
            return "You computer";
        }
        return "it was a tie";
    }

    return (
        <div>

            {
                isDone? (
                    <h2> result: {getResult}</h2>
                )
                    :
                    (
                        <div><img style={{height: "100px", width: "100px"}}
                                  src="https://media.istockphoto.com/id/946132558/photo/rock-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=auylx6FWZHedSbpIm5bVmR4VwRHgWeIHbxUdLt-xd14="/>
                            <h3> Rock</h3>

                            <img style={{height: "100px", width: "100px"}}
                                 src="https://spaces-cdn.clipsafari.com/5hm5iighyllbx9q6s7w0fvhkces2"/>
                            <h3> Paper</h3>

                            <img style={{height: "100px", width: "50px"}}
                                 src=" https://catheys.com/cdn/shop/files/horn-6-straight-trimmer-scissors-649989_1200x.webp?v=1724870657"/>
                            <h3> Scissors</h3></div>
                    );
            }

        </div>
    )
}
