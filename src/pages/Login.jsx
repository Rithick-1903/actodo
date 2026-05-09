import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login(props) {
    const navigate = useNavigate()
    const [myusername, setmyusername] = useState("")
    const [myuserpass, setmyuserpass] = useState("")
    const [ruser, setruser] = useState(true)

    const myusers = props.myusers


    function handlechangeusername(event) {
        setmyusername(event.target.value)
    }

    function handlechangepass(event) {
        setmyuserpass(event.target.value)
    }

    function checkuser() {
        const user = myusers.find(
            item => item.username === myusername && item.password === myuserpass
        )

        if (user) {
            console.log("Login successful")
            setruser(true)
            navigate("/landing",{state:{user:myusername}})




        } else {
            console.log("Login failed")
            setruser(false)
        }
    }

    return (
        <div className="bg-black p-10" >
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-bold">Hey Hi</h1>
                {ruser ? <p>I help you manage Your activities after you login :)</p> : <p className="text-red-500">Please Signup</p>}


                <div className="flex flex-col gap-2 my-2 ">
                    <input onChange={handlechangeusername} className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Username"></input>
                    <input onChange={handlechangepass} className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Password"></input>
                    <button onClick={checkuser} className="bg-[#8272DA] p-1 w-24 border rounded-md">Log in</button>
                    <p>Don't have a account? <Link to={"/Signup"} className="underline">Sign Up</Link> </p>
                </div>
            </div>

        </div>
    )
}

export default Login
