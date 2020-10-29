import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{

  constructor(props){
    super(props);
    //This is the only time we do direct assignment to this.state
    this.state = {lat: null, erorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
        //callback function
        position => {
            //we called setState!!!
            this.setState({lat: position.coords.latitude})


            //we did NOT !!!!
            //this.state.lat = position.coords.latitude
        },
        err =>{
            this.setState({errorMessage: err.message})
        }
    );

  }

    //React says we have to deifine render
    render() { 
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude:{this.state.lat} </div>;
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))