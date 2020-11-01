import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component{

 // constructor(props){
 //   super(props);
    //This is the only time we do direct assignment to this.state
 //   this.state = {lat: null, erorMessage: ''};  
  //}

   state = {lat: null, erorMessage: ''};  

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        //callback function
        position => this.setState({lat: position.coords.latitude}),
        err =>this.setState({errorMessage: err.message})
    );

  }

  //helper function, prevents rendering conditionals directly
renderContent() {
    if(this.state.errorMessage && !this.state.lat){
        return <div>Error:{this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>;
    }

    return <Spinner message="Please accept location request" />;
}

    //React says we have to deifine render
    render() { 
        return <div className="border red">
            {this.renderContent()}
        </div>
    }

}

ReactDOM.render(<App />, document.querySelector("#root"))