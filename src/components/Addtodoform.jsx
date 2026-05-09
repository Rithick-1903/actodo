import { useState } from "react"

function Addtodoform(props) {

    const myactivity = props.myactivity
    const setmyactivity = props.setmyactivity

    const [newactivity, setnewactivity] = useState("")

    function handlechange(event) {
        setnewactivity(event.target.value)
    }

    function addchange() {
        setmyactivity([...myactivity, { id: myactivity.length + 1, activity: newactivity }])
    }
    return (

        <div>
            <div className="flex">
                <h1 className="font-bold text-2xl mb-5">Manage Activities</h1>
            </div>
            <input value={newactivity} onChange={handlechange} type="text" placeholder="Next Activity" className="border border-black bg-transparent p-1 "></input>
            <button onClick={addchange} className="bg-black text-white border p-1 border-black">ADD</button>
        </div>

    )
}
export default Addtodoform