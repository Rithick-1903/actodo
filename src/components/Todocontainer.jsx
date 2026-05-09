import Addtodoform from "./Addtodoform"
import Addtodolist from "./Addtodolist"
import { useState } from "react"

function Todocontainer() {

    const [myactivity, setmyactivity] = useState([
        {
            id: 1,
            activity: "Stay Healthy"
        },
        {
            id: 2,
            activity: "Don't forget to Smile :)"
        },
        {

            id: 3,
            activity: "Don't Giveup anywhere"
        }
    ])

    return (


        <>
            <div className="flex gap-5 flex-wrap">

                <Addtodoform  myactivity={myactivity} setmyactivity={setmyactivity}/>

                <Addtodolist myactivity={myactivity} setmyactivity={setmyactivity} />

            </div>
        </>
    )
}



export default Todocontainer