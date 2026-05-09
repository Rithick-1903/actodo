import Header from "../components/Header";
import Cards from "../components/Cards";
import Todocontainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom"

function Landing() {

    const data = useLocation()
    return (

        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md" >
                <Header name={data.state.user}/>

                <div className="flex justify-around gap-7 my-5 flex-wrap">
                    <Cards bgcolor={"#8272DA"} title={"Jan-3"} subtitle={"First Sight"} />
                    <Cards bgcolor={"#FD6663"} title={"03-Feb"} subtitle={"Vini Birthday"} />
                    <Cards bgcolor={"#FCA201"} title={"14-04"} subtitle={"Engaged"} />
                </div>
                <Todocontainer />
            </div>

        </div>
    )
}
export default Landing