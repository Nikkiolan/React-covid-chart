import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Navigation extends Component {

    render() {

        return (
            <div className="row">
                <div className="col-md-3 my-auto">
                    <table className=" table-sm bg-transparent mx-auto">
                        <tbody>
                            <tr>
                                <td><a className="h2" href="/covid/">Covid in Italia</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <form onSubmit={this.props.setperiodo} >
                                        <table className="table-sm bg-transparent mx-auto paddingg">
                                            <tbody>
                                                <tr className='paddingg'>
                                                    <td><p>Negli ultimi </p></td>
                                                    <td className='paddingg'><input type="text" name="intervallo" id="periodo" className="form-control intervall my-auto" autoFocus></input></td>
                                                    <td className='paddingg'> <button className='btn btn-outline-success btna btn-sm' type="submit">Giorni</button></td>
                                                    <td><p> </p></td>
                                                </tr>
                                                <tr>

                                                    <td colSpan="2">
                                                        <Link className="btn btnb btn-outline-success shadowb" to="/covid/">Home</Link>
                                                    </td>
                                                    <td colSpan="2">
                                                        <Link className="btn btnb btn-outline-success shadowb" to="/covid/regioni">Regioni</Link>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6 my-auto col-left">
                    <table className=" table-sm bg-transparent mx-auto">
                    <tbody>
                        <tr>

                            <th><p id="labelpositivi"></p></th>
                            <th><p id="labelGuariti"></p></th>
                            <th><p id="labelDeceduti"></p></th>
                            <th><p id="labelAttivi"></p></th>
                            <th><p id="labelDomiciliare"></p></th>
                            <th><p id="labelRicoverati"></p></th>
                            <th><p id="labelIntensiva"></p></th>

                        </tr>
                        <tr className="my-auto">

                            <td ><p id="positivi"></p></td>
                            <td ><p id="Guariti"></p></td>
                            <td><p id="Deceduti"></p></td>
                            <td><p id="Attivi"></p></td>
                            <td ><p id="Domiciliare"></p></td>
                            <td><p id="Ricoverati"></p></td>
                            <td ><p id="Intensiva"></p></td>

                        </tr>
                        <tr>

                            <td ><p id="positiviOggi"></p></td>
                            <td ><p id="Guaritioggi"></p></td>
                            <td><p id="Decedutioggi"></p></td>
                            <td><p id="Attivioggi"></p></td>
                            <td ><p id="Domiciliareoggi"></p></td>
                            <td><p id="Ricoveratioggi"></p></td>
                            <td ><p id="Intensivaoggi"></p></td>

                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-3 my-auto col-right">
                    <table className=" table-sm bg-transparent mx-auto">
                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><p className="alignright" id="ErreconZeroEtichetta">R0: </p></td>
                            <td><p id="ErreconZero"></p></td>
                            <td><p className="alignright">Deceduti %</p></td>
                            <td><p id="percdecessi" ></p></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><p className="alignright" id="percTamponiEtichetta"> T.C: %</p></td>
                            <td><p id="percTamponi"></p></td>
                            <td><p className="alignright">Malati %</p></td>
                            <td><p id="percmalati"></p></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><p className="alignright" id="percTamponiOggiEtichetta">T.C.O: %</p></td>
                            <td><p id="percTamponiOggi"></p></td>
                            <td><p className="alignright">Guariti %</p></td>
                            <td><p id="percguariti"></p></td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

export default Navigation;