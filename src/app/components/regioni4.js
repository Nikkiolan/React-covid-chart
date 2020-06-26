import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import Regione from './regione'
import Radiochoose from './Radiochoose'
import Navigation from './navigation'

// const [state, setState] = useState({});
const Regioni = () => {
    const [tuttiDati, setTuttiDati] = useState({});

    let giorni = '';

    const piemonte = [[], [], [], [], [], [], [], [], [], [], [], [], []]
    let regioni = [[], [], [], [], [], [], [], [], [], [], [], [], []]
    let giorno = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
    // let regioni = new Array();
    // regioni[0] = new Array();
    //  regioni[0][[], [], [], [], [], [], [], [], [], [], [], [], []] = new Array();
    let nome = ['nome0', 'nome1', 'nome2', 'nome3', 'nome4', 'nome5', 'nome6', 'nome7', 'nome8', 'nome9', 'nome10', 'nome11', 'nome12', 'nome13', 'nome14', 'nome15', 'nome16', 'nome17', 'nome18', 'nome19', 'nome20', 'nome21'];
    let totale_casi = ['totale_casi0', 'totale_casi1', 'totale_casi2', 'totale_casi3', 'totale_casi4', 'totale_casi5', 'totale_casi6', 'totale_casi7', 'totale_casi8', 'totale_casi9', 'totale_casi10', 'totale_casi11', 'totale_casi12', 'totale_casi13', 'totale_casi14', 'totale_casi15', 'totale_casi16', 'totale_casi17', 'totale_casi18', 'totale_casi19', 'totale_casi20', 'totale_casi21'];
    let casi_oggi = ['casi_oggi0', 'casi_oggi1', 'casi_oggi2', 'casi_oggi3', 'casi_oggi4', 'casi_oggi5', 'casi_oggi6', 'casi_oggi7', 'casi_oggi8', 'casi_oggi9', 'casi_oggi10', 'casi_oggi11', 'casi_oggi12', 'casi_oggi13', 'casi_oggi14', 'casi_oggi15', 'casi_oggi16', 'casi_oggi17', 'casi_oggi18', 'casi_oggi19', 'casi_oggi20', 'casi_oggi21'];

    let dimessi_guariti = ['dimessi_guariti0', 'dimessi_guariti1', 'dimessi_guariti2', 'dimessi_guariti3', 'dimessi_guariti4', 'dimessi_guariti5', 'dimessi_guariti6', 'dimessi_guariti7', 'dimessi_guariti8', 'dimessi_guariti9', 'dimessi_guariti10', 'dimessi_guariti11', 'dimessi_guariti12', 'dimessi_guariti13', 'dimessi_guariti14', 'dimessi_guariti15', 'dimessi_guariti16', 'dimessi_guariti17', 'dimessi_guariti18', 'dimessi_guariti19', 'dimessi_guariti20', 'dimessi_guariti21'];
    let guariti_oggi = ['guariti_oggi0', 'guariti_oggi1', 'guariti_oggi2', 'guariti_oggi3', 'guariti_oggi4', 'guariti_oggi5', 'guariti_oggi6', 'guariti_oggi7', 'guariti_oggi8', 'guariti_oggi9', 'guariti_oggi10', 'guariti_oggi11', 'guariti_oggi12', 'guariti_oggi13', 'guariti_oggi14', 'guariti_oggi15', 'guariti_oggi16', 'guariti_oggi17', 'guariti_oggi18', 'guariti_oggi19', 'guariti_oggi20', 'guariti_oggi21'];
    let deceduti = ['deceduti0', 'deceduti1', 'deceduti2', 'deceduti3', 'deceduti4', 'deceduti5', 'deceduti6', 'deceduti7', 'deceduti8', 'deceduti9', 'deceduti10', 'deceduti11', 'deceduti12', 'deceduti13', 'deceduti14', 'deceduti15', 'deceduti16', 'deceduti17', 'deceduti18', 'deceduti19', 'deceduti20', 'deceduti21'];
    let deceduti_oggi = ['deceduti_oggi0', 'deceduti_oggi1', 'deceduti_oggi2', 'deceduti_oggi3', 'deceduti_oggi4', 'deceduti_oggi5', 'deceduti_oggi6', 'deceduti_oggi7', 'deceduti_oggi8', 'deceduti_oggi9', 'deceduti_oggi10', 'deceduti_oggi11', 'deceduti_oggi12', 'deceduti_oggi13', 'deceduti_oggi14', 'deceduti_oggi15', 'deceduti_oggi16', 'deceduti_oggi17', 'deceduti_oggi18', 'deceduti_oggi19', 'deceduti_oggi20', 'deceduti_oggi21'];
    let attivi = ['attivi0', 'attivi1', 'attivi2', 'attivi3', 'attivi4', 'attivi5', 'attivi6', 'attivi7', 'attivi8', 'attivi9', 'attivi10', 'attivi11', 'attivi12', 'attivi13', 'attivi14', 'attivi15', 'attivi16', 'attivi17', 'attivi18', 'attivi19', 'attivi20', 'attivi21'];
    let attivi_oggi = ['attivi_oggi0', 'attivi_oggi1', 'attivi_oggi2', 'attivi_oggi3', 'attivi_oggi4', 'attivi_oggi5', 'attivi_oggi6', 'attivi_oggi7', 'attivi_oggi8', 'attivi_oggi9', 'attivi_oggi10', 'attivi_oggi11', 'attivi_oggi12', 'attivi_oggi13', 'attivi_oggi14', 'attivi_oggi15', 'attivi_oggi16', 'attivi_oggi17', 'attivi_oggi18', 'attivi_oggi19', 'attivi_oggi20', 'attivi_oggi21'];
    let domiciliare = ['domiciliare0', 'domiciliare1', 'domiciliare2', 'domiciliare3', 'domiciliare4', 'domiciliare5', 'domiciliare6', 'domiciliare7', 'domiciliare8', 'domiciliare9', 'domiciliare10', 'domiciliare11', 'domiciliare12', 'domiciliare13', 'domiciliare14', 'domiciliare15', 'domiciliare16', 'domiciliare17', 'domiciliare18', 'domiciliare19', 'domiciliare20', 'domiciliare21'];
    let domiciliare_oggi = ['domiciliare_oggi0', 'domiciliare_oggi1', 'domiciliare_oggi2', 'domiciliare_oggi3', 'domiciliare_oggi4', 'domiciliare_oggi5', 'domiciliare_oggi6', 'domiciliare_oggi7', 'domiciliare_oggi8', 'domiciliare_oggi9', 'domiciliare_oggi10', 'domiciliare_oggi11', 'domiciliare_oggi12', 'domiciliare_oggi13', 'domiciliare_oggi14', 'domiciliare_oggi15', 'domiciliare_oggi16', 'domiciliare_oggi17', 'domiciliare_oggi18', 'domiciliare_oggi19', 'domiciliare_oggi20', 'domiciliare_oggi21'];
    let ricoverati = ['ricoverati0', 'ricoverati1', 'ricoverati2', 'ricoverati3', 'ricoverati4', 'ricoverati5', 'ricoverati6', 'ricoverati7', 'ricoverati8', 'ricoverati9', 'ricoverati10', 'ricoverati11', 'ricoverati12', 'ricoverati13', 'ricoverati14', 'ricoverati15', 'ricoverati16', 'ricoverati17', 'ricoverati18', 'ricoverati19', 'ricoverati20', 'ricoverati21'];
    let ricoverati_oggi = ['ricoverati_oggi0', 'ricoverati_oggi1', 'ricoverati_oggi2', 'ricoverati_oggi3', 'ricoverati_oggi4', 'ricoverati_oggi5', 'ricoverati_oggi6', 'ricoverati_oggi7', 'ricoverati_oggi8', 'ricoverati_oggi9', 'ricoverati_oggi10', 'ricoverati_oggi11', 'ricoverati_oggi12', 'ricoverati_oggi13', 'ricoverati_oggi14', 'ricoverati_oggi15', 'ricoverati_oggi16', 'ricoverati_oggi17', 'ricoverati_oggi18', 'ricoverati_oggi19', 'ricoverati_oggi20', 'ricoverati_oggi21'];
    let intensiva = ['intensiva0', 'intensiva1', 'intensiva2', 'intensiva3', 'intensiva4', 'intensiva5', 'intensiva6', 'intensiva7', 'intensiva8', 'intensiva9', 'intensiva10', 'intensiva11', 'intensiva12', 'intensiva13', 'intensiva14', 'intensiva15', 'intensiva16', 'intensiva17', 'intensiva18', 'intensiva19', 'intensiva20', 'intensiva21'];
    let intensiva_oggi = ['intensiva_oggi0', 'intensiva_oggi1', 'intensiva_oggi2', 'intensiva_oggi3', 'intensiva_oggi4', 'intensiva_oggi5', 'intensiva_oggi6', 'intensiva_oggi7', 'intensiva_oggi8', 'intensiva_oggi9', 'intensiva_oggi10', 'intensiva_oggi11', 'intensiva_oggi12', 'intensiva_oggi13', 'intensiva_oggi14', 'intensiva_oggi15', 'intensiva_oggi16', 'intensiva_oggi17', 'intensiva_oggi18', 'intensiva_oggi19', 'intensiva_oggi20', 'intensiva_oggi21'];
    let tamponi_oggi = ['tamponi_oggi0', 'tamponi_oggi1', 'tamponi_oggi2', 'tamponi_oggi3', 'tamponi_oggi4', 'tamponi_oggi5', 'tamponi_oggi6', 'tamponi_oggi7', 'tamponi_oggi8', 'tamponi_oggi9', 'tamponi_oggi10', 'tamponi_oggi11', 'tamponi_oggi12', 'tamponi_oggi13', 'tamponi_oggi14', 'tamponi_oggi15', 'tamponi_oggi16', 'tamponi_oggi17', 'tamponi_oggi18', 'tamponi_oggi19', 'tamponi_oggi20', 'tamponi_oggi21'];
    let TP = ['TP0', 'TP1', 'TP2', 'TP3', 'TP4', 'TP5', 'TP6', 'TP7', 'TP8', 'TP9', 'TP10', 'TP11', 'TP12', 'TP13', 'TP14', 'TP15', 'TP16', 'TP17', 'TP18', 'TP19', 'TP20', 'TP21'];
    let TPO = ['TPO0', 'TPO1', 'TPO2', 'TPO3', 'TPO4', 'TPO5', 'TPO6', 'TPO7', 'TPO8', 'TPO9', 'TPO10', 'TPO11', 'TPO12', 'TPO13', 'TPO14', 'TPO15', 'TPO16', 'TPO17', 'TPO18', 'TPO19', 'TPO20', 'TPO21'];
    let Rcon0 = ['Rcon00', 'Rcon01', 'Rcon02', 'Rcon03', 'Rcon04', 'Rcon05', 'Rcon06', 'Rcon07', 'Rcon08', 'Rcon09', 'Rcon010', 'Rcon011', 'Rcon012', 'Rcon013', 'Rcon014', 'Rcon015', 'Rcon016', 'Rcon017', 'Rcon018', 'Rcon019', 'Rcon020', 'Rcon021'];

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1`')
    }
    function sortByDate(a, b) {
        return a[0].getTime() - b[0].getTime();
    }

    const ordinaArray = (arraydaordinare, colonna) => {
        //console.log('ora lo ordino');
        // console.log(arraydaordinare[0].length);
        // let flag_girosenzascambi = 1;
        for (let indexa = 0; indexa < 21; indexa++) {
            /* if (flag_girosenzascambi === 0) {
                console.log('giro senza scambi');
                break;
            } */
            for (let index = 21; index < arraydaordinare[0].length; index++) {
                if (arraydaordinare[colonna][index] < arraydaordinare[colonna][index + 1]) {
                    // console.log('scambio da fare',arraydaordinare[colonna][index], arraydaordinare[colonna][index + 1]);
                    //flag_girosenzascambi = 1;
                    let temp = [arraydaordinare[0][index + 1], arraydaordinare[1][index + 1], arraydaordinare[2][index + 1], arraydaordinare[3][index + 1], arraydaordinare[4][index + 1], arraydaordinare[5][index + 1], arraydaordinare[6][index + 1], arraydaordinare[7][index + 1], arraydaordinare[8][index + 1], arraydaordinare[9][index + 1], arraydaordinare[10][index + 1], arraydaordinare[11][index + 1], arraydaordinare[12][index + 1], arraydaordinare[13][index + 1], arraydaordinare[14][index + 1], arraydaordinare[15][index + 1], arraydaordinare[16][index + 1], arraydaordinare[17][index + 1], arraydaordinare[18][index + 1], arraydaordinare[19][index + 1], arraydaordinare[20][index + 1], arraydaordinare[21][index + 1], arraydaordinare[22][index + 1]];
                    let temp2 = [arraydaordinare[0][index - 20], arraydaordinare[1][index - 20], arraydaordinare[2][index - 20], arraydaordinare[3][index - 20], arraydaordinare[4][index - 20], arraydaordinare[5][index - 20], arraydaordinare[6][index - 20], arraydaordinare[7][index - 20], arraydaordinare[8][index - 20], arraydaordinare[9][index - 20], arraydaordinare[10][index - 20], arraydaordinare[11][index - 20], arraydaordinare[12][index - 20], arraydaordinare[13][index - 20], arraydaordinare[14][index - 20], arraydaordinare[15][index - 20], arraydaordinare[16][index - 20], arraydaordinare[17][index - 20], arraydaordinare[18][index - 20], arraydaordinare[19][index - 20], arraydaordinare[20][index - 20], arraydaordinare[21][index - 20], arraydaordinare[22][index - 20]];

                    arraydaordinare[0][index + 1] = arraydaordinare[0][index];
                    arraydaordinare[1][index + 1] = arraydaordinare[1][index];
                    arraydaordinare[2][index + 1] = arraydaordinare[2][index];
                    arraydaordinare[3][index + 1] = arraydaordinare[3][index];
                    arraydaordinare[4][index + 1] = arraydaordinare[4][index];
                    arraydaordinare[5][index + 1] = arraydaordinare[5][index];
                    arraydaordinare[6][index + 1] = arraydaordinare[6][index];
                    arraydaordinare[7][index + 1] = arraydaordinare[7][index];
                    arraydaordinare[8][index + 1] = arraydaordinare[8][index];
                    arraydaordinare[9][index + 1] = arraydaordinare[9][index];
                    arraydaordinare[10][index + 1] = arraydaordinare[10][index];
                    arraydaordinare[11][index + 1] = arraydaordinare[11][index];
                    arraydaordinare[12][index + 1] = arraydaordinare[12][index];
                    arraydaordinare[13][index + 1] = arraydaordinare[13][index];
                    arraydaordinare[14][index + 1] = arraydaordinare[14][index];
                    arraydaordinare[15][index + 1] = arraydaordinare[15][index];
                    arraydaordinare[16][index + 1] = arraydaordinare[16][index];
                    arraydaordinare[17][index + 1] = arraydaordinare[17][index];
                    arraydaordinare[18][index + 1] = arraydaordinare[18][index];
                    arraydaordinare[19][index + 1] = arraydaordinare[19][index];
                    arraydaordinare[20][index + 1] = arraydaordinare[20][index];
                    arraydaordinare[21][index + 1] = arraydaordinare[21][index];
                    arraydaordinare[22][index + 1] = arraydaordinare[22][index];

                    arraydaordinare[0][index - 20] = arraydaordinare[0][index - 21];
                    arraydaordinare[1][index - 20] = arraydaordinare[1][index - 21];
                    arraydaordinare[2][index - 20] = arraydaordinare[2][index - 21];
                    arraydaordinare[3][index - 20] = arraydaordinare[3][index - 21];
                    arraydaordinare[4][index - 20] = arraydaordinare[4][index - 21];
                    arraydaordinare[5][index - 20] = arraydaordinare[5][index - 21];
                    arraydaordinare[6][index - 20] = arraydaordinare[6][index - 21];
                    arraydaordinare[7][index - 20] = arraydaordinare[7][index - 21];
                    arraydaordinare[8][index - 20] = arraydaordinare[8][index - 21];
                    arraydaordinare[9][index - 20] = arraydaordinare[9][index - 21];
                    arraydaordinare[10][index - 20] = arraydaordinare[10][index - 21];
                    arraydaordinare[12][index - 20] = arraydaordinare[12][index - 21];
                    arraydaordinare[13][index - 20] = arraydaordinare[13][index - 21];
                    arraydaordinare[14][index - 20] = arraydaordinare[14][index - 21];
                    arraydaordinare[15][index - 20] = arraydaordinare[15][index - 21];
                    arraydaordinare[16][index - 20] = arraydaordinare[16][index - 21];
                    arraydaordinare[17][index - 20] = arraydaordinare[17][index - 21];
                    arraydaordinare[18][index - 20] = arraydaordinare[18][index - 21];
                    arraydaordinare[19][index - 20] = arraydaordinare[19][index - 21];
                    arraydaordinare[20][index - 20] = arraydaordinare[20][index - 21];
                    arraydaordinare[21][index - 20] = arraydaordinare[21][index - 21];
                    arraydaordinare[22][index - 20] = arraydaordinare[22][index - 21];

                    arraydaordinare[0][index] = temp[0];
                    arraydaordinare[1][index] = temp[1];
                    arraydaordinare[2][index] = temp[2];
                    arraydaordinare[3][index] = temp[3];
                    arraydaordinare[4][index] = temp[4];
                    arraydaordinare[5][index] = temp[5];
                    arraydaordinare[6][index] = temp[6];
                    arraydaordinare[7][index] = temp[7];
                    arraydaordinare[8][index] = temp[8];
                    arraydaordinare[9][index] = temp[9];
                    arraydaordinare[10][index] = temp[10];
                    arraydaordinare[11][index] = temp[11];
                    arraydaordinare[12][index] = temp[12];
                    arraydaordinare[13][index] = temp[13];
                    arraydaordinare[14][index] = temp[14];
                    arraydaordinare[15][index] = temp[15];
                    arraydaordinare[16][index] = temp[16];
                    arraydaordinare[17][index] = temp[17];
                    arraydaordinare[18][index] = temp[18];
                    arraydaordinare[19][index] = temp[19];
                    arraydaordinare[20][index] = temp[20];
                    arraydaordinare[21][index] = temp[21];
                    arraydaordinare[22][index] = temp[22];

                    arraydaordinare[0][index - 21] = temp2[0];
                    arraydaordinare[1][index - 21] = temp2[1];
                    arraydaordinare[2][index - 21] = temp2[2];
                    arraydaordinare[3][index - 21] = temp2[3];
                    arraydaordinare[4][index - 21] = temp2[4];
                    arraydaordinare[5][index - 21] = temp2[5];
                    arraydaordinare[6][index - 21] = temp2[6];
                    arraydaordinare[7][index - 21] = temp2[7];
                    arraydaordinare[8][index - 21] = temp2[8];
                    arraydaordinare[9][index - 21] = temp2[9];
                    arraydaordinare[10][index - 21] = temp2[10];
                    arraydaordinare[11][index - 21] = temp2[11];
                    arraydaordinare[12][index - 21] = temp2[12];
                    arraydaordinare[13][index - 21] = temp2[13];
                    arraydaordinare[14][index - 21] = temp2[14];
                    arraydaordinare[15][index - 21] = temp2[15];
                    arraydaordinare[16][index - 21] = temp2[16];
                    arraydaordinare[17][index - 21] = temp2[17];
                    arraydaordinare[18][index - 21] = temp2[18];
                    arraydaordinare[19][index - 21] = temp2[19];
                    arraydaordinare[20][index - 21] = temp2[20];
                    arraydaordinare[21][index - 21] = temp2[21];
                    arraydaordinare[22][index - 21] = temp2[22];
                    //console.log(arraydaordinare[12][index]);  
                    //console.log(arraydaordinare[12][index + 1]);  
                    //console.log(temp2);

                } /* else {
                    flag_girosenzascambi = 0;
                } */

            }
        }
        // visualizzaDati(arraydaordinare);
        return arraydaordinare;
    }
    const ordinaRadio = (colonna) => {

        if (colonna == 'casi') {
            giorno = ordinaArray(giorno, 13);
           // document.getElementById("casi").checked = true; 
        }
        if (colonna == 'guariti') {
            giorno = ordinaArray(giorno, 14);
             
        }
        if (colonna == 'decessi') {
            giorno = ordinaArray(giorno, 15); 
        }
        if (colonna == 'positivi') {
            giorno = ordinaArray(giorno, 16);
        }
        if (colonna == 'domiciliare') {
            giorno = ordinaArray(giorno, 17);
        }
        if (colonna == 'ricoverati') {
            giorno = ordinaArray(giorno, 18);
        }
        if (colonna == 'intensiva') {
            giorno = ordinaArray(giorno, 19);
        }
        if (colonna == 'T.P') {
            giorno = ordinaArray(giorno, 21);
        }
        if (colonna == 'R.0') {
            giorno = ordinaArray(giorno, 22);
        }
        visualizzaDati(giorno);
    }
    const visualizzaDati = (giorno) => {
        // VISUALIZZA
        let regionix = 21;
        for (let index = 0; index < 21; index++) {
            // console.log(giorno[2][index]);

            document.getElementById(nome[index]).innerHTML = (giorno[2][index])
            document.getElementById(totale_casi[index]).innerHTML = formatNumber(giorno[10][index + regionix])

            document.getElementById(casi_oggi[index]).innerHTML = `<abbr title=${formatNumber(giorno[13][index])}>${formatNumber(giorno[13][index + regionix])}</abbr>`
            if (giorno[13][index + regionix] > giorno[13][index]) {
                document.getElementById(casi_oggi[index]).classList.remove('green');
                document.getElementById(casi_oggi[index]).classList.add('red');
            } else {
                document.getElementById(casi_oggi[index]).classList.remove('red');
                document.getElementById(casi_oggi[index]).classList.add('green');
            }
            document.getElementById(dimessi_guariti[index]).innerHTML = formatNumber(giorno[8][index + regionix])
            document.getElementById(guariti_oggi[index]).innerHTML = `<abbr title=${formatNumber(giorno[14][index])}>${formatNumber(giorno[14][index + regionix])}</abbr>`
            if (giorno[14][index + regionix] < giorno[14][index]) {
                document.getElementById(guariti_oggi[index]).classList.remove('green');
                document.getElementById(guariti_oggi[index]).classList.add('red');
            } else {
                document.getElementById(guariti_oggi[index]).classList.remove('red');
                document.getElementById(guariti_oggi[index]).classList.add('green');
            }
            document.getElementById(deceduti[index]).innerHTML = formatNumber(giorno[9][index + regionix])
            document.getElementById(deceduti_oggi[index]).innerHTML = `<abbr title=${formatNumber(giorno[15][index])}>${formatNumber(giorno[15][index + regionix])}</abbr>`
            if (giorno[15][index + regionix] > giorno[15][index]) {
                document.getElementById(deceduti_oggi[index]).classList.remove('green');
                document.getElementById(deceduti_oggi[index]).classList.add('red');
            } else {
                document.getElementById(deceduti_oggi[index]).classList.remove('red');
                document.getElementById(deceduti_oggi[index]).classList.add('green');
            }
            document.getElementById(attivi[index]).innerHTML = formatNumber(giorno[7][index + regionix])
            if (giorno[7][index + regionix] > giorno[7][index]) {
                document.getElementById(attivi[index]).classList.remove('green');
                document.getElementById(attivi[index]).classList.add('red');
            } else {
                document.getElementById(attivi[index]).classList.remove('red');
                document.getElementById(attivi[index]).classList.add('green');
            }
            document.getElementById(attivi_oggi[index]).innerHTML = `<abbr title=${formatNumber(giorno[16][index])}>${formatNumber(giorno[16][index + regionix])}</abbr>`
            if (giorno[16][index + regionix] > giorno[16][index]) {
                document.getElementById(attivi_oggi[index]).classList.remove('green');
                document.getElementById(attivi_oggi[index]).classList.add('red');
            } else {
                document.getElementById(attivi_oggi[index]).classList.remove('red');
                document.getElementById(attivi_oggi[index]).classList.add('green');
            }
            document.getElementById(domiciliare[index]).innerHTML = formatNumber(giorno[6][index + regionix])
            if (giorno[6][index + regionix] > giorno[6][index]) {
                document.getElementById(domiciliare[index]).classList.remove('green');
                document.getElementById(domiciliare[index]).classList.add('red');
            } else {
                document.getElementById(domiciliare[index]).classList.remove('red');
                document.getElementById(domiciliare[index]).classList.add('green');
            }
            document.getElementById(domiciliare_oggi[index]).innerHTML = `<abbr title=${formatNumber(giorno[17][index])}>${formatNumber(giorno[17][index + regionix])}</abbr>`
            if (giorno[17][index + regionix] > giorno[17][index]) {
                document.getElementById(domiciliare_oggi[index]).classList.remove('green');
                document.getElementById(domiciliare_oggi[index]).classList.add('red');
            } else {
                document.getElementById(domiciliare_oggi[index]).classList.remove('red');
                document.getElementById(domiciliare_oggi[index]).classList.add('green');
            }
            document.getElementById(ricoverati[index]).innerHTML = formatNumber(giorno[5][index + regionix])
            if (giorno[5][index + regionix] > giorno[5][index]) {
                document.getElementById(ricoverati[index]).classList.remove('green');
                document.getElementById(ricoverati[index]).classList.add('red');
            } else {
                document.getElementById(ricoverati[index]).classList.remove('red');
                document.getElementById(ricoverati[index]).classList.add('green');
            }
            document.getElementById(ricoverati_oggi[index]).innerHTML = `<abbr title=${formatNumber(giorno[18][index])}>${formatNumber(giorno[18][index + regionix])}</abbr>`
            if (giorno[18][index + regionix] > giorno[18][index]) {
                document.getElementById(ricoverati_oggi[index]).classList.remove('green');
                document.getElementById(ricoverati_oggi[index]).classList.add('red');
            } else {
                document.getElementById(ricoverati_oggi[index]).classList.remove('red');
                document.getElementById(ricoverati_oggi[index]).classList.add('green');
            }
            document.getElementById(intensiva[index]).innerHTML = formatNumber(giorno[4][index + regionix])
            if (giorno[4][index + regionix] > giorno[4][index]) {
                document.getElementById(intensiva[index]).classList.remove('green');
                document.getElementById(intensiva[index]).classList.add('red');
            } else {
                document.getElementById(intensiva[index]).classList.remove('red');
                document.getElementById(intensiva[index]).classList.add('green');
            }
            document.getElementById(intensiva_oggi[index]).innerHTML = `<abbr title=${formatNumber(giorno[19][index])}>${formatNumber(giorno[19][index + regionix])}</abbr>`
            if (giorno[19][index + regionix] > giorno[19][index]) {
                document.getElementById(intensiva_oggi[index]).classList.remove('green');
                document.getElementById(intensiva_oggi[index]).classList.add('red');
            } else {
                document.getElementById(intensiva_oggi[index]).classList.remove('red');
                document.getElementById(intensiva_oggi[index]).classList.add('green');
            }
            document.getElementById(TP[index]).innerHTML = (giorno[12][index + regionix]).toFixed(2)
            if (giorno[12][index + regionix] > giorno[12][index]) {
                document.getElementById(TP[index]).classList.remove('green');
                document.getElementById(TP[index]).classList.add('red');
            } else {
                document.getElementById(TP[index]).classList.remove('red');
                document.getElementById(TP[index]).classList.add('green');
            }
            document.getElementById(TPO[index]).innerHTML = `<abbr title=${(giorno[21][index]).toFixed(2)}>${(giorno[21][index + regionix]).toFixed(2)}</abbr>`
            if (giorno[21][index + regionix] > giorno[21][index]) {
                document.getElementById(TPO[index]).classList.remove('green');
                document.getElementById(TPO[index]).classList.add('red');
            } else {
                document.getElementById(TPO[index]).classList.remove('red');
                document.getElementById(TPO[index]).classList.add('green');
            }
            document.getElementById(Rcon0[index]).innerHTML = 'R0 . ' + `<abbr title=${(giorno[22][index]).toFixed(4)}>${(giorno[22][index + regionix]).toFixed(4)}</abbr>`
            if (giorno[22][index + regionix] > giorno[22][index]) {
                document.getElementById(Rcon0[index]).classList.remove('green');
                document.getElementById(Rcon0[index]).classList.add('red');
            } else {
                document.getElementById(Rcon0[index]).classList.remove('red');
                document.getElementById(Rcon0[index]).classList.add('green');
            }
        }
    }
    const getRegioniData = () => {
        axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json')
            .then(res => {

                // DIVIDO PER CATEGORIE
                let giorn = 0;
                for (const dataObj of res.data) {



                    regioni[0].push(dataObj.data.substr(5, 5))
                    regioni[1].push(parseInt(dataObj.codice_regione))
                    regioni[2].push(dataObj.denominazione_regione)
                    regioni[3].push(parseInt(dataObj.ricoverati_con_sintomi))
                    regioni[4].push(parseInt(dataObj.terapia_intensiva))
                    regioni[5].push(parseInt(dataObj.totale_ospedalizzati))
                    regioni[6].push(parseInt(dataObj.isolamento_domiciliare))
                    regioni[7].push(parseInt(dataObj.totale_positivi))
                    regioni[8].push(parseInt(dataObj.dimessi_guariti))
                    regioni[9].push(parseInt(dataObj.deceduti))
                    regioni[10].push(parseInt(dataObj.totale_casi))
                    regioni[11].push(parseInt(dataObj.tamponi))
                    regioni[12].push(parseInt(dataObj.totale_casi) * 100 / parseInt(dataObj.tamponi))
                    if (giorn > (res.data.length - 43)) {
                        //console.log(giorn);

                        giorno[0].push(dataObj.data.substr(5, 5))
                        giorno[1].push(parseInt(dataObj.codice_regione))
                        giorno[2].push(dataObj.denominazione_regione)
                        giorno[3].push(parseInt(dataObj.ricoverati_con_sintomi))
                        giorno[4].push(parseInt(dataObj.terapia_intensiva))
                        giorno[5].push(parseInt(dataObj.totale_ospedalizzati))
                        giorno[6].push(parseInt(dataObj.isolamento_domiciliare))
                        giorno[7].push(parseInt(dataObj.totale_positivi))
                        giorno[8].push(parseInt(dataObj.dimessi_guariti))
                        giorno[9].push(parseInt(dataObj.deceduti))
                        giorno[10].push(parseInt(dataObj.totale_casi))
                        giorno[11].push(parseInt(dataObj.tamponi))
                        giorno[12].push(parseInt(dataObj.totale_casi) * 100 / parseInt(dataObj.tamponi))
                    }

                    giorn = giorn + 1;

                }
                // CALCOLO I GIORNALIERI
                let regionix = 21;
                let giornix = giorn - 42;
                for (let index = 0; index < 42; index++) {

                    giorno[13][index] = regioni[10][giornix] - regioni[10][giornix - regionix]
                    giorno[14][index] = regioni[8][giornix] - regioni[8][giornix - regionix]
                    giorno[15][index] = regioni[9][giornix] - regioni[9][giornix - regionix]
                    giorno[16][index] = regioni[7][giornix] - regioni[7][giornix - regionix]
                    giorno[17][index] = regioni[6][giornix] - regioni[6][giornix - regionix]
                    giorno[18][index] = regioni[5][giornix] - regioni[5][giornix - regionix]
                    giorno[19][index] = regioni[4][giornix] - regioni[4][giornix - regionix]
                    giorno[20][index] = regioni[11][giornix] - regioni[11][giornix - regionix]
                    giorno[21][index] = (regioni[10][giornix] - regioni[10][giornix - regionix]) * 100 / (regioni[11][giornix] - regioni[11][giornix - regionix])
                    giorno[22][index] = regioni[7][giornix] / regioni[7][giornix - regionix]

                    giornix = giornix + 1;
                }
                // console.log(denominazione_regione, tamponi);
               
               /*  setTuttiDati({
                    dati: res
                }) */
               
                giorno = ordinaArray(giorno, 13);  //ORDINO GLI ARRAY
                /*   for (let index = 0; index < giorno[13].length; index++) {
                     console.log(giorno[7][index]);
                 }   */
                // console.log(giorno);

               // giorni = regioni[0].length;
                //console.log(giorni);
                // console.log(regioni[10][giorni - 1]);

                visualizzaDati(giorno);




            })
            .catch(err => {
                console.log(err);
            })


    }
    //


    getRegioniData()

   // console.log(tuttiDati.dati);

    return (
        <div className="App">


            <Radiochoose ordinaRadio={ordinaRadio} />


            <hr />
            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr ">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[0]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[0]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>

                                </tr>
                                <tr>

                                    <td><p id={totale_casi[0]}></p></td>
                                    <td><p id={dimessi_guariti[0]}></p></td>
                                    <td><p id={deceduti[0]}></p></td>
                                    <td><p id={attivi[0]}></p></td>
                                    <td><p id={domiciliare[0]}></p></td>
                                    <td><p id={ricoverati[0]}></p></td>
                                    <td><p id={intensiva[0]}></p></td>
                                    <td><p id={TP[0]}></p></td>
                                </tr>

                                <tr>
                                    <td><p id={casi_oggi[0]}></p></td>
                                    <td><p id={guariti_oggi[0]}></p></td>
                                    <td><p id={deceduti_oggi[0]}></p></td>
                                    <td><p id={attivi_oggi[0]}></p></td>
                                    <td><p id={domiciliare_oggi[0]}></p></td>
                                    <td><p id={ricoverati_oggi[0]}></p></td>
                                    <td><p id={intensiva_oggi[0]}></p></td>
                                    <td><p id={TPO[0]}></p></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col lg-6 containerr">

                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[1]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[1]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>

                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>

                                </tr>
                                <tr>

                                    <td><p id={totale_casi[1]}></p></td>
                                    <td><p id={dimessi_guariti[1]}></p></td>
                                    <td><p id={deceduti[1]}></p></td>
                                    <td><p id={attivi[1]}></p></td>
                                    <td><p id={domiciliare[1]}></p></td>
                                    <td><p id={ricoverati[1]}></p></td>
                                    <td><p id={intensiva[1]}></p></td>
                                    <td><p id={TP[1]}></p></td>

                                </tr>

                                <tr>

                                    <td><p id={casi_oggi[1]}></p></td>
                                    <td><p id={guariti_oggi[1]}></p></td>
                                    <td><p id={deceduti_oggi[1]}></p></td>
                                    <td><p id={attivi_oggi[1]}></p></td>
                                    <td><p id={domiciliare_oggi[1]}></p></td>
                                    <td><p id={ricoverati_oggi[1]}></p></td>
                                    <td><p id={intensiva_oggi[1]}></p></td>
                                    <td><p id={TPO[1]}></p></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[2]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[2]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[2]}></p></td>
                                    <td><p id={dimessi_guariti[2]}></p></td>
                                    <td><p id={deceduti[2]}></p></td>
                                    <td><p id={attivi[2]}></p></td>
                                    <td><p id={domiciliare[2]}></p></td>
                                    <td><p id={ricoverati[2]}></p></td>
                                    <td><p id={intensiva[2]}></p></td>
                                    <td><p id={TP[2]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[2]}></p></td>
                                    <td><p id={guariti_oggi[2]}></p></td>
                                    <td><p id={deceduti_oggi[2]}></p></td>
                                    <td><p id={attivi_oggi[2]}></p></td>
                                    <td><p id={domiciliare_oggi[2]}></p></td>
                                    <td><p id={ricoverati_oggi[2]}></p></td>
                                    <td><p id={intensiva_oggi[2]}></p></td>
                                    <td><p id={TPO[2]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">

                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[3]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[3]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[3]}></p></td>
                                    <td><p id={dimessi_guariti[3]}></p></td>
                                    <td><p id={deceduti[3]}></p></td>
                                    <td><p id={attivi[3]}></p></td>
                                    <td><p id={domiciliare[3]}></p></td>
                                    <td><p id={ricoverati[3]}></p></td>
                                    <td><p id={intensiva[3]}></p></td>
                                    <td><p id={TP[3]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[3]}></p></td>
                                    <td><p id={guariti_oggi[3]}></p></td>
                                    <td><p id={deceduti_oggi[3]}></p></td>
                                    <td><p id={attivi_oggi[3]}></p></td>
                                    <td><p id={domiciliare_oggi[3]}></p></td>
                                    <td><p id={ricoverati_oggi[3]}></p></td>
                                    <td><p id={intensiva_oggi[3]}></p></td>
                                    <td><p id={TPO[3]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[4]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[4]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[4]}></p></td>
                                    <td><p id={dimessi_guariti[4]}></p></td>
                                    <td><p id={deceduti[4]}></p></td>
                                    <td><p id={attivi[4]}></p></td>
                                    <td><p id={domiciliare[4]}></p></td>
                                    <td><p id={ricoverati[4]}></p></td>
                                    <td><p id={intensiva[4]}></p></td>
                                    <td><p id={TP[4]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[4]}></p></td>
                                    <td><p id={guariti_oggi[4]}></p></td>
                                    <td><p id={deceduti_oggi[4]}></p></td>
                                    <td><p id={attivi_oggi[4]}></p></td>
                                    <td><p id={domiciliare_oggi[4]}></p></td>
                                    <td><p id={ricoverati_oggi[4]}></p></td>
                                    <td><p id={intensiva_oggi[4]}></p></td>
                                    <td><p id={TPO[4]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[5]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[5]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[5]}></p></td>
                                    <td><p id={dimessi_guariti[5]}></p></td>
                                    <td><p id={deceduti[5]}></p></td>
                                    <td><p id={attivi[5]}></p></td>
                                    <td><p id={domiciliare[5]}></p></td>
                                    <td><p id={ricoverati[5]}></p></td>
                                    <td><p id={intensiva[5]}></p></td>
                                    <td><p id={TP[5]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[5]}></p></td>
                                    <td><p id={guariti_oggi[5]}></p></td>
                                    <td><p id={deceduti_oggi[5]}></p></td>
                                    <td><p id={attivi_oggi[5]}></p></td>
                                    <td><p id={domiciliare_oggi[5]}></p></td>
                                    <td><p id={ricoverati_oggi[5]}></p></td>
                                    <td><p id={intensiva_oggi[5]}></p></td>
                                    <td><p id={TPO[5]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[6]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[6]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[6]}></p></td>
                                    <td><p id={dimessi_guariti[6]}></p></td>
                                    <td><p id={deceduti[6]}></p></td>
                                    <td><p id={attivi[6]}></p></td>
                                    <td><p id={domiciliare[6]}></p></td>
                                    <td><p id={ricoverati[6]}></p></td>
                                    <td><p id={intensiva[6]}></p></td>
                                    <td><p id={TP[6]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[6]}></p></td>
                                    <td><p id={guariti_oggi[6]}></p></td>
                                    <td><p id={deceduti_oggi[6]}></p></td>
                                    <td><p id={attivi_oggi[6]}></p></td>
                                    <td><p id={domiciliare_oggi[6]}></p></td>
                                    <td><p id={ricoverati_oggi[6]}></p></td>
                                    <td><p id={intensiva_oggi[6]}></p></td>
                                    <td><p id={TPO[6]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[7]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[7]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[7]}></p></td>
                                    <td><p id={dimessi_guariti[7]}></p></td>
                                    <td><p id={deceduti[7]}></p></td>
                                    <td><p id={attivi[7]}></p></td>
                                    <td><p id={domiciliare[7]}></p></td>
                                    <td><p id={ricoverati[7]}></p></td>
                                    <td><p id={intensiva[7]}></p></td>
                                    <td><p id={TP[7]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[7]}></p></td>
                                    <td><p id={guariti_oggi[7]}></p></td>
                                    <td><p id={deceduti_oggi[7]}></p></td>
                                    <td><p id={attivi_oggi[7]}></p></td>
                                    <td><p id={domiciliare_oggi[7]}></p></td>
                                    <td><p id={ricoverati_oggi[7]}></p></td>
                                    <td><p id={intensiva_oggi[7]}></p></td>
                                    <td><p id={TPO[7]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[8]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[8]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[8]}></p></td>
                                    <td><p id={dimessi_guariti[8]}></p></td>
                                    <td><p id={deceduti[8]}></p></td>
                                    <td><p id={attivi[8]}></p></td>
                                    <td><p id={domiciliare[8]}></p></td>
                                    <td><p id={ricoverati[8]}></p></td>
                                    <td><p id={intensiva[8]}></p></td>
                                    <td><p id={TP[8]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[8]}></p></td>
                                    <td><p id={guariti_oggi[8]}></p></td>
                                    <td><p id={deceduti_oggi[8]}></p></td>
                                    <td><p id={attivi_oggi[8]}></p></td>
                                    <td><p id={domiciliare_oggi[8]}></p></td>
                                    <td><p id={ricoverati_oggi[8]}></p></td>
                                    <td><p id={intensiva_oggi[8]}></p></td>
                                    <td><p id={TPO[8]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[9]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[9]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[9]}></p></td>
                                    <td><p id={dimessi_guariti[9]}></p></td>
                                    <td><p id={deceduti[9]}></p></td>
                                    <td><p id={attivi[9]}></p></td>
                                    <td><p id={domiciliare[9]}></p></td>
                                    <td><p id={ricoverati[9]}></p></td>
                                    <td><p id={intensiva[9]}></p></td>
                                    <td><p id={TP[9]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[9]}></p></td>
                                    <td><p id={guariti_oggi[9]}></p></td>
                                    <td><p id={deceduti_oggi[9]}></p></td>
                                    <td><p id={attivi_oggi[9]}></p></td>
                                    <td><p id={domiciliare_oggi[9]}></p></td>
                                    <td><p id={ricoverati_oggi[9]}></p></td>
                                    <td><p id={intensiva_oggi[9]}></p></td>
                                    <td><p id={TPO[9]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[10]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[10]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[10]}></p></td>
                                    <td><p id={dimessi_guariti[10]}></p></td>
                                    <td><p id={deceduti[10]}></p></td>
                                    <td><p id={attivi[10]}></p></td>
                                    <td><p id={domiciliare[10]}></p></td>
                                    <td><p id={ricoverati[10]}></p></td>
                                    <td><p id={intensiva[10]}></p></td>
                                    <td><p id={TP[10]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[10]}></p></td>
                                    <td><p id={guariti_oggi[10]}></p></td>
                                    <td><p id={deceduti_oggi[10]}></p></td>
                                    <td><p id={attivi_oggi[10]}></p></td>
                                    <td><p id={domiciliare_oggi[10]}></p></td>
                                    <td><p id={ricoverati_oggi[10]}></p></td>
                                    <td><p id={intensiva_oggi[10]}></p></td>
                                    <td><p id={TPO[10]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[11]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[11]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[11]}></p></td>
                                    <td><p id={dimessi_guariti[11]}></p></td>
                                    <td><p id={deceduti[11]}></p></td>
                                    <td><p id={attivi[11]}></p></td>
                                    <td><p id={domiciliare[11]}></p></td>
                                    <td><p id={ricoverati[11]}></p></td>
                                    <td><p id={intensiva[11]}></p></td>
                                    <td><p id={TP[11]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[11]}></p></td>
                                    <td><p id={guariti_oggi[11]}></p></td>
                                    <td><p id={deceduti_oggi[11]}></p></td>
                                    <td><p id={attivi_oggi[11]}></p></td>
                                    <td><p id={domiciliare_oggi[11]}></p></td>
                                    <td><p id={ricoverati_oggi[11]}></p></td>
                                    <td><p id={intensiva_oggi[11]}></p></td>
                                    <td><p id={TPO[11]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[12]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[12]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[12]}></p></td>
                                    <td><p id={dimessi_guariti[12]}></p></td>
                                    <td><p id={deceduti[12]}></p></td>
                                    <td><p id={attivi[12]}></p></td>
                                    <td><p id={domiciliare[12]}></p></td>
                                    <td><p id={ricoverati[12]}></p></td>
                                    <td><p id={intensiva[12]}></p></td>
                                    <td><p id={TP[12]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[12]}></p></td>
                                    <td><p id={guariti_oggi[12]}></p></td>
                                    <td><p id={deceduti_oggi[12]}></p></td>
                                    <td><p id={attivi_oggi[12]}></p></td>
                                    <td><p id={domiciliare_oggi[12]}></p></td>
                                    <td><p id={ricoverati_oggi[12]}></p></td>
                                    <td><p id={intensiva_oggi[12]}></p></td>
                                    <td><p id={TPO[12]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[13]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[13]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[13]}></p></td>
                                    <td><p id={dimessi_guariti[13]}></p></td>
                                    <td><p id={deceduti[13]}></p></td>
                                    <td><p id={attivi[13]}></p></td>
                                    <td><p id={domiciliare[13]}></p></td>
                                    <td><p id={ricoverati[13]}></p></td>
                                    <td><p id={intensiva[13]}></p></td>
                                    <td><p id={TP[13]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[13]}></p></td>
                                    <td><p id={guariti_oggi[13]}></p></td>
                                    <td><p id={deceduti_oggi[13]}></p></td>
                                    <td><p id={attivi_oggi[13]}></p></td>
                                    <td><p id={domiciliare_oggi[13]}></p></td>
                                    <td><p id={ricoverati_oggi[13]}></p></td>
                                    <td><p id={intensiva_oggi[13]}></p></td>
                                    <td><p id={TPO[13]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[14]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[14]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[14]}></p></td>
                                    <td><p id={dimessi_guariti[14]}></p></td>
                                    <td><p id={deceduti[14]}></p></td>
                                    <td><p id={attivi[14]}></p></td>
                                    <td><p id={domiciliare[14]}></p></td>
                                    <td><p id={ricoverati[14]}></p></td>
                                    <td><p id={intensiva[14]}></p></td>
                                    <td><p id={TP[14]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[14]}></p></td>
                                    <td><p id={guariti_oggi[14]}></p></td>
                                    <td><p id={deceduti_oggi[14]}></p></td>
                                    <td><p id={attivi_oggi[14]}></p></td>
                                    <td><p id={domiciliare_oggi[14]}></p></td>
                                    <td><p id={ricoverati_oggi[14]}></p></td>
                                    <td><p id={intensiva_oggi[14]}></p></td>
                                    <td><p id={TPO[14]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[15]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[15]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[15]}></p></td>
                                    <td><p id={dimessi_guariti[15]}></p></td>
                                    <td><p id={deceduti[15]}></p></td>
                                    <td><p id={attivi[15]}></p></td>
                                    <td><p id={domiciliare[15]}></p></td>
                                    <td><p id={ricoverati[15]}></p></td>
                                    <td><p id={intensiva[15]}></p></td>
                                    <td><p id={TP[15]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[15]}></p></td>
                                    <td><p id={guariti_oggi[15]}></p></td>
                                    <td><p id={deceduti_oggi[15]}></p></td>
                                    <td><p id={attivi_oggi[15]}></p></td>
                                    <td><p id={domiciliare_oggi[15]}></p></td>
                                    <td><p id={ricoverati_oggi[15]}></p></td>
                                    <td><p id={intensiva_oggi[15]}></p></td>
                                    <td><p id={TPO[15]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[16]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[16]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[16]}></p></td>
                                    <td><p id={dimessi_guariti[16]}></p></td>
                                    <td><p id={deceduti[16]}></p></td>
                                    <td><p id={attivi[16]}></p></td>
                                    <td><p id={domiciliare[16]}></p></td>
                                    <td><p id={ricoverati[16]}></p></td>
                                    <td><p id={intensiva[16]}></p></td>
                                    <td><p id={TP[16]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[16]}></p></td>
                                    <td><p id={guariti_oggi[16]}></p></td>
                                    <td><p id={deceduti_oggi[16]}></p></td>
                                    <td><p id={attivi_oggi[16]}></p></td>
                                    <td><p id={domiciliare_oggi[16]}></p></td>
                                    <td><p id={ricoverati_oggi[16]}></p></td>
                                    <td><p id={intensiva_oggi[16]}></p></td>
                                    <td><p id={TPO[16]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[17]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[17]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[17]}></p></td>
                                    <td><p id={dimessi_guariti[17]}></p></td>
                                    <td><p id={deceduti[17]}></p></td>
                                    <td><p id={attivi[17]}></p></td>
                                    <td><p id={domiciliare[17]}></p></td>
                                    <td><p id={ricoverati[17]}></p></td>
                                    <td><p id={intensiva[17]}></p></td>
                                    <td><p id={TP[17]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[17]}></p></td>
                                    <td><p id={guariti_oggi[17]}></p></td>
                                    <td><p id={deceduti_oggi[17]}></p></td>
                                    <td><p id={attivi_oggi[17]}></p></td>
                                    <td><p id={domiciliare_oggi[17]}></p></td>
                                    <td><p id={ricoverati_oggi[17]}></p></td>
                                    <td><p id={intensiva_oggi[17]}></p></td>
                                    <td><p id={TPO[17]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[18]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[18]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[18]}></p></td>
                                    <td><p id={dimessi_guariti[18]}></p></td>
                                    <td><p id={deceduti[18]}></p></td>
                                    <td><p id={attivi[18]}></p></td>
                                    <td><p id={domiciliare[18]}></p></td>
                                    <td><p id={ricoverati[18]}></p></td>
                                    <td><p id={intensiva[18]}></p></td>
                                    <td><p id={TP[18]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[18]}></p></td>
                                    <td><p id={guariti_oggi[18]}></p></td>
                                    <td><p id={deceduti_oggi[18]}></p></td>
                                    <td><p id={attivi_oggi[18]}></p></td>
                                    <td><p id={domiciliare_oggi[18]}></p></td>
                                    <td><p id={ricoverati_oggi[18]}></p></td>
                                    <td><p id={intensiva_oggi[18]}></p></td>
                                    <td><p id={TPO[18]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[19]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[19]}> </p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[19]}></p></td>
                                    <td><p id={dimessi_guariti[19]}></p></td>
                                    <td><p id={deceduti[19]}></p></td>
                                    <td><p id={attivi[19]}></p></td>
                                    <td><p id={domiciliare[19]}></p></td>
                                    <td><p id={ricoverati[19]}></p></td>
                                    <td><p id={intensiva[19]}></p></td>
                                    <td><p id={TP[19]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[19]}></p></td>
                                    <td><p id={guariti_oggi[19]}></p></td>
                                    <td><p id={deceduti_oggi[19]}></p></td>
                                    <td><p id={attivi_oggi[19]}></p></td>
                                    <td><p id={domiciliare_oggi[19]}></p></td>
                                    <td><p id={ricoverati_oggi[19]}></p></td>
                                    <td><p id={intensiva_oggi[19]}></p></td>
                                    <td><p id={TPO[19]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col lg-6 containerr">
                    <div className="card card-body inshadow-containerr">
                        <table className=" table-sm bg-transparent titoloregione ">
                            <tbody>
                                <tr>
                                    <th><h3 className="card-title floatleft" id={nome[20]}></h3></th>
                                    <th><p className="fontBigright" id={Rcon0[20]}></p> </th>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-sm bg-transparent mx-auto">
                            <tbody>
                                <tr>
                                    <th><p >Casi</p></th>
                                    <th><p >Guariti</p></th>
                                    <th><p >Deceduti</p></th>
                                    <th><p >Positivi</p></th>
                                    <th><p >Domiciliare</p></th>
                                    <th><p >Ricoverati</p></th>
                                    <th><p >Intensiva</p></th>
                                    <th><p >T.C %</p></th>
                                </tr>
                                <tr>
                                    <td><p id={totale_casi[20]}></p></td>
                                    <td><p id={dimessi_guariti[20]}></p></td>
                                    <td><p id={deceduti[20]}></p></td>
                                    <td><p id={attivi[20]}></p></td>
                                    <td><p id={domiciliare[20]}></p></td>
                                    <td><p id={ricoverati[20]}></p></td>
                                    <td><p id={intensiva[20]}></p></td>
                                    <td><p id={TP[20]}></p></td>
                                </tr>
                                <tr>
                                    <td><p id={casi_oggi[20]}></p></td>
                                    <td><p id={guariti_oggi[20]}></p></td>
                                    <td><p id={deceduti_oggi[20]}></p></td>
                                    <td><p id={attivi_oggi[20]}></p></td>
                                    <td><p id={domiciliare_oggi[20]}></p></td>
                                    <td><p id={ricoverati_oggi[20]}></p></td>
                                    <td><p id={intensiva_oggi[20]}></p></td>
                                    <td><p id={TPO[20]}></p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
            


        </div>
    )
}

export default Regioni;