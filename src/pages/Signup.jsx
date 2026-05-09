import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom"


function Signup(props) {
    const Navigate = useNavigate()
    const setmyusers = props.setmyusers
    const myusers = props.myusers

    const [myusername, setmyusername] = useState("")
    const [myuserpass, setmyuserpass] = useState("")


    function handlechangeusername(event) {
        setmyusername(event.target.value)
    }

    function handlechangepass(event) {
        setmyuserpass(event.target.value)
    }

function checkuser(){
    var newuser = setmyusers([...myusers,{username:myusername, password:myuserpass}])
    Navigate("/")
}


    return (

        <div className="bg-black p-10" >
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-bold">Hey Hi</h1>
                <p>You can signup here :)</p>

                <div className="flex flex-col gap-2 my-2 ">
                    <input onChange={handlechangeusername} className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Username"></input>
                    <input onChange={handlechangepass} className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Password"></input>
                    <input className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Confrim Password"></input>
                    <button onClick={checkuser} className="bg-[#FCA201] p-1 w-24 border rounded-md">Sign up</button>
                    <p>Don't have a account? <Link to={"/"} className="underline">Login</Link> </p>
                </div>

            </div>
        </div>

    )
}

export default Signup