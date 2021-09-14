import React from 'react'

export default class Counter extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }

    increment(){
        this.setState((prevState) => {
            return {
                ...prevState,
                counter: prevState.counter+1
            }
        })
    }

    decrement(){
        this.setState((prevState) => {
            return {
                ...prevState,
                counter: prevState.counter-1
            }
        })
    }

    reset(){
        this.setState((prevState) => {
            return {
                ...prevState,
                counter: 0
            }
        })
    }

    render() {
        console.log("Component re-rendered");
        return (
            <div className="counter-component">
                <h3 className="component-type">Pure Component</h3>
                <span>To ensure this is a pure component, please open browser console and try clicking on Increment/Decrement buttons and when you press reset when it is zero already. You may not see the console log statement</span>
                <h2>Counter: {this.state.counter}</h2>
                <button className="theme-button" onClick={this.increment.bind(this)}>Increment</button>
                <button className="theme-button" onClick={this.decrement.bind(this)}>Decrement</button>
                <button className="theme-button reset" onClick={this.reset.bind(this)}>Reset</button>
            </div>
        )
    }
}
