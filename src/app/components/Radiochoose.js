import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Radiochoose extends Component {

    state = {
        ordinaper: 'casi'
    }

    onSubmit = async (e) => {
        e.preventDefault()
        await this.setState({ ordinaper: e.target.value })
        this.props.ordinaRadio(this.state.ordinaper)
      //  document.getElementById(this.state.ordinaper).checked = true;
       // console.log(this.state.ordinaper);
       
    }
    // checked={this.state.ordinaper === 'decessi'}
    // onClick   onFocus  onChange
    render() {


        return (
            <div className="radio mx-auto">
                <form onFocus={this.onSubmit}>
                    <table className=" table-sm bg-transparent mx-auto aligncenter">
                        <tbody>
                            <tr>
                                <th>Casi</th>
                                <th>Guariti</th>
                                <th>Deceduti</th>
                                <th>Positivi</th>
                                <th>Domiciliare</th>
                                <th>Ricoverati</th>
                                <th>Intensiva</th>
                                <th>T.C.O.</th>
                                <th>R.0.</th>

                            </tr>
                            <tr className=" mx-auto aligncenter">

                                <td className="aligncenter"><input type="radio" id="casi" name="ordina" value="casi" defaultChecked/></td>
                                <td className="aligncenter"><input type="radio" id="guariti" name="ordina" value="guariti"/></td>
                                <td className="aligncenter"><input type="radio" id="decessi" name="ordina" value="decessi"/></td>
                                <td className="aligncenter"><input type="radio" id="positivi" name="ordina" value="positivi" /></td>
                                <td><input type="radio" id="domiciliare" name="ordina" value="domiciliare" /></td>
                                <td className="aligncenter"><input type="radio" id="ricoverati" name="ordina" value="ricoverati" /></td>
                                <td className="aligncenter"><input type="radio" id="intensiva" name="ordina" value="intensiva" /></td>
                                <td className="aligncenter"><input type="radio" id="T.P" name="ordina" value="T.P" /></td>
                                <td className="aligncenter"><input type="radio" id="R.0" name="ordina" value="R.0" /></td>
                            </tr>
                        </tbody>
                    </table>


                </form>
            </div>
        )
    }

}