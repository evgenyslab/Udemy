import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


/* Assignment 1:
x. Create TWO new components: UserInput and UserOutput
x. UserInput should hold an input element, UserOutput two paragraphs
x. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
x. Pass a username (of your choice) to UserOutput via props and display it there
x. Add state to the App component (=> the username) and pass the username to the UserOutput component
x. Add a method to manipulate the state (=> an event-handler method)
x. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
x. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
x. Add two-way-binding to your input (in UserInput) to also display the starting username
x. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*
* */


class App extends Component {

    state = { // can have anything in it, this is reseved obect
        username: "user0"
    };
    defaultname = "NULL";

    buttonHandler = () => {
        this.setState({
            username: this.defaultname
        })
    }

    stateUpdater = (event) => {
        // event in this case is an 'onChange' associated with any text input in the UserInput component
        this.setState({
            username: event.target.value
        })
    };

  render(){

    return (
        <div className="App">
            <UserInput
                defaultname = {this.defaultname}
                username = {this.state.username}
                // binds the stateUpdater function to the onChange event in the UserInput component
                changeUserName = {this.stateUpdater}
                // changeUserName_alt = { () => this.stateUpdater(args)} // first alternative with arg parsing by creating arrow function
                // changeUserName_alt = {this.stateUpdater().bind(this,args)} // second alternative using .bind to attach this object and pass args
            />
            <UserOutput username={this.state.username}/>
            <UserOutput username={this.state.username}/>
            <button
                onClick={this.buttonHandler}>
                Revert
            </button>
        </div>
    );
  }
};

export default App;
