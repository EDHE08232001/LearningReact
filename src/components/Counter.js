import { Component } from "react";

class Counter extends Component {
    constructor() {
        super(); // call parent constructor

        // creating a state
        this.state = {
            counter: 0,
            isHovered: false
        };

        this.buttonStyles = {
            background: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            display: 'inline-block',
            margine: '5px 3px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontsize: '16px'
        };

        this.buttonHoverStyles = {
            ...this.buttonStyles,
            background: 'blue'
        };

        // one way to bind this
        // this.increment = this.increment.bind(this);
    }

    // use arrow function to bind this, or use arrow function in onClick
    increment = () => {
        // use setState method to modify this.state.counter
        this.setState({
            counter: this.state.counter + 1
        });
    }

    toggleHover = (isHovered) => {
        this.setState({
            isHovered: isHovered
        });
    };

    render() {
        const buttonStyle = this.state.isHovered ? this.buttonHoverStyles : this.buttonStyles;

        return (
            <div>
                <h3>Count Value: {this.state.counter}</h3>
                <button style={buttonStyle} onClick={this.increment} onMouseEnter={() => {this.toggleHover(true)}} onMouseLeave={() => {this.toggleHover(false)}}>
                    Click Me
                </button>
            </div>
        );
    }
}

export default Counter;