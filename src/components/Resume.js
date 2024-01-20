import { Component } from "react";

class Resume extends Component {
    constructor(props) {
        super(props);

        const { name } = props;

        this.name = name;
    }

    render() {
        // you can destructure in render(), but in this example we do in constructor
        // const {var1, var2} = this.props;
        return <h3>{this.name}</h3>;
    }
}

export default Resume;