import React, { useState } from "react";

function App() {
    let now = new Date().toLocaleTimeString("it-IT");
    const [time, setTime] = useState(now);

    function updateTime() {
        let newTime = new Date().toLocaleTimeString("it-IT");
        setTime(newTime);
    }
    setInterval(updateTime, 1000);
    return (
        <div className="container">
            <h1>{time}</h1>
        </div>
    );
}

export default App;
