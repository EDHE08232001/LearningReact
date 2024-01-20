import {Component} from 'react';

class Message extends Component {
    // you don't have to explicitly write this construction
    constructor(props) {
        super(props); // call parent constructor
    }

    // render() !!!
    render() {
        return <h1>Props Message: {this.props.messageContent}</h1>; // what is returned here is jsx !!!
    }
}

export default Message;