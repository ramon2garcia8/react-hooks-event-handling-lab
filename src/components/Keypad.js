// Code Keypad Component Here

function Keypad (){
    function listenToEvent() {
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={listenToEvent} />
        </div>
    )
}

export default Keypad;