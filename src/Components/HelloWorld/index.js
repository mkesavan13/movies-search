import React, { Component } from 'react'

export default class HelloWorld extends Component {
    render() {
        let h3 = React.createElement("h3",{className:"component-type"},"Class Component with createElement");
        let h2 = React.createElement("h2",null,"Hello World");
        let div = React.createElement("div",null,h3,h2);
        return div;
    }
}
