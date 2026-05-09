import { useState } from "react"
import Todolist from "./Todolist"

function Addtodolist(props) {

  const setmyactivity =props.setmyactivity
  const myactivity = props.myactivity

    return (


        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-bold ">Today's Activity</h1>
            {myactivity.length===0? <p>You haven't added anything</p>:""}
            {
                myactivity.map(function (item,index) {
                   return<Todolist id={item.id} item={item} index={index} myactivity={myactivity} setmyactivity={setmyactivity}/>
                })
            }
        </div>

    )
}
export default Addtodolist