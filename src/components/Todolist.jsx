function Todolist(props) {

    const myactivity = props.myactivity
    const setmyactivity = props.setmyactivity

    function handledel(recevid) {

        var delid = myactivity.filter(function (item) {
            if(item.id === recevid){
                return false
            }
            else
            {
                return true
            }

        })
        setmyactivity(delid)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}. {props.item.activity}</p>
            <button className="text-red-600" onClick={() => { handledel(props.id) }}>Delete</button>
        </div>
    )
}

export default Todolist