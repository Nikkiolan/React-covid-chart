import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navigation from './components/navigation'
import Chart from './components/chart4'
import Regioni from './components/regioni4'
import Footer from './components/footer'
//import InputGiorni from './components/inputGiorni' //<Navigation  setperiodo={this.setperiodo}/>

// <Footer />
class App extends Component {
    state = {
        periodo: 0
    }

    setperiodo = e => {
        //    document.addEventListener('touchstart', handler, true);

        e.preventDefault()
        const { intervallo } = e.target.elements;
        // console.log(intervallo.value);

        let periodo = intervallo.value;
        this.setState({
            periodo: periodo
        })
        //console.log(periodo);


        // chart()
    }

    render() {
        //  console.log(this.state.periodo);
        return (
            <Router>


                <div className="container">
                    <Navigation setperiodo={this.setperiodo} />

                    <Route exact path="/covid" render={() => {
                        return <div>
                            <Chart periodo={this.state.periodo} />
                        </div>
                    }} />


                    <Route path="/covid/regioni" render={() => {
                        return <div>
                            <Regioni periodo={this.state.periodo} />
                        </div>
                    }}>

                    </Route>


                </div>
                <Footer />

            </Router>
        )
    }
};

export default App;