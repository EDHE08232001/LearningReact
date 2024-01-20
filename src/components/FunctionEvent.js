function FunctionEvent() {
    function handleClick() {
        window.alert("a button is clicked");
    }
    return (
        <div>
            Function Component
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

export default FunctionEvent;