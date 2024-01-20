import { Component } from "react";

class ClassEvent extends Component {
    handleClick() {
        window.alert("class based event handling");
    }

    render() {
        return (
            <div>
                This is class based components
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ClassEvent;