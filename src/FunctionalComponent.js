import { useState } from "react";

function FunctionalComponent() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            This is a demo for this.state in function: {counter}
            <div>
                <button onClick={increment}>
                    Increment
                </button>
            </div>
        </div>
    );
}

export default FunctionalComponent;