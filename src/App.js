import React, {Component} from "react";
import Heading from './components/heading.js'
import Formjs from './components/form.js'
import Label from   './components/label.js'
import Genesis from "./components/genesis.js";
class App extends Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <Formjs></Formjs>
                    <Heading></Heading>       
                    <Label></Label>
                    <Genesis></Genesis>
                </header>
            </div>
        )
    }
}
export default App;