import React, {Component} from "react";

class ReactLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            value : 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    componentDidMount() {
        console.log("Component is mounted");
    }
    componentDidUpdate() {
        console.log("Component is updated")
    }
    componentWillUnmount() {
        console.log("Compinent is unmounted")
    }
    increment() {
        this.setState({value :this.state.value + 1}); 
    }
    decrement() {
        this.setState({value :this.state.value - 1}); 
    }
    render () {
        return (
            <>
            {console.log("Component is rendering")}
            <div>Count is : {this.state.value}</div>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            </>
        )
    }
}
export default ReactLifecycle