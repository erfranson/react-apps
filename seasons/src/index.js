import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends  React.Component {
    constructor(props) {
        super(props);

        //This is the only time we do direct assignment
        //to this.state
        this.state= { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) =>  {
                // we called setState
                this.setState({lat: position.coords.latitude})

                // we never should do this !!!
                // this.state.lat = position.coords.latitude
            },
            (err) => console.log(err),

        );
    }

    // React says we have to define render!!
    render() {
        return <div>Latitude: {this.state.lat} </div>
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));