import React, { Component } from 'react'

export default class HelloWorld extends Component {
    render() {
        const h3 = React.createElement("h3",{className:"component-type"},"Class Component with createElement"); 
        const h2 = React.createElement("h2",null,"Hello World");
        const div = React.createElement("div",null,h3,h2);
        return div;
    }
}
