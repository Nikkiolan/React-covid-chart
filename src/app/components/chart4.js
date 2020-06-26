import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

import Navigation from './navigation'
import { useParams } from 'react-router-dom';


const Chart3 = (props) => {
    
    const [tamponiData, setTamponiData] = useState({});
    const [tamponiOGGI, setTamponiOGGI] = useState({});
    const [positiviData, setPositiviData] = useState({});
    const [positiviOGGI, setPositiviOGGI] = useState({});
    const [tamponiPositivi, setTamponiPositivi] = useState({});
    const [tamponiPositiviOGGI, setTamponiPositiviOGGI] = useState({});
    const [positiviTotal, setPositiviTotal] = useState({});
    const [positiviGiornal, setPositiviGiornal] = useState({});
    const [attiviTotal, setAttiviTotal] = useState({});
    const [attiviGiornl, setAttiviGiornl] = useState({});
    const [erreConZero, seterreConZero] = useState({});
    const [percentuali, setpercentuali] = useState({});
    const [state, setState] = useState({ periodo: 0 });

  
    let periodo = props.periodo;
    //console.log(periodo);
    //console.log(periodo);
    
    let numerogiorni = [];
    let covidOggi = [];
    let covidOggi2 = [];
    let covidTamponi = [];
    let tamponiOggi = [];
    let covidPositivi = [];
    let covidPositiviOggi = [];
    let coviTamponiPositivi = [];
    let coviTamponiPositiviOGGI = [];
    let totale_positivi = [];
    let totale_positiviOggi = [];
    let dimessi_guariti = [];
    let dimessi_guaritiOggi = [];
    let deceduti = [];
    let decedutiOggi = [];
    let isolamento_domiciliare = [];
    let isolamento_domiciliareOGGI = [];
    let ricoverati_con_sintomi = [];
    let ricoverati_con_sintomiOGGI = [];
    let terapia_intensiva = [];
    let terapia_intensivaOGGI = [];
    let Rcon0 = [];

    let percGuariti = [];
    let percDeceduti = [];
    let percMalati = [];

    const chart = () => {


        axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
            .then(res => {

                // fs. 
                for (const dataObj of res.data) {
                    numerogiorni.push(dataObj.data.substr(5, 5))
                }
                if (isNaN(periodo) == true) {
                    periodo = numerogiorni.length
                }
                if (periodo == 0) {
                    periodo = numerogiorni.length
                }
                if (periodo <= 2) {
                    periodo = 3
                }
                if (periodo > numerogiorni.length) {
                    periodo = numerogiorni.length
                }
                //  console.log(periodo);

                let temp = periodo;
                let tempo = numerogiorni.length - periodo;
                let ii = 0;
                //console.log(temp);
                // console.log(tempo);

                for (const dataObj of res.data) {

                    if (ii >= tempo) {
                        covidOggi.push(dataObj.data.substr(5, 5))
                        covidTamponi.push(parseInt(dataObj.tamponi))
                        covidPositivi.push(parseInt(dataObj.totale_casi))
                        coviTamponiPositivi.push(parseInt(dataObj.totale_casi) * 100 / parseInt(dataObj.tamponi))
                        totale_positivi.push(parseInt(dataObj.totale_positivi))
                        dimessi_guariti.push(parseInt(dataObj.dimessi_guariti))
                        deceduti.push(parseInt(dataObj.deceduti))
                        isolamento_domiciliare.push(parseInt(dataObj.isolamento_domiciliare))
                        ricoverati_con_sintomi.push(parseInt(dataObj.ricoverati_con_sintomi))
                        terapia_intensiva.push(parseInt(dataObj.terapia_intensiva))
                        // console.log(ii);
                    }
                    ii += 1;
                }

                for (let i = 0; i < periodo; i++) {

                    covidOggi2[i] = covidOggi[i]
                    tamponiOggi[i] = covidTamponi[i] - covidTamponi[i - 1]
                    covidPositiviOggi[i] = covidPositivi[i] - covidPositivi[i - 1]
                    coviTamponiPositiviOGGI[i] = covidPositiviOggi[i] * 100 / tamponiOggi[i]
                    totale_positiviOggi[i] = totale_positivi[i] - totale_positivi[i - 1]
                    dimessi_guaritiOggi[i] = dimessi_guariti[i] - dimessi_guariti[i - 1]
                    decedutiOggi[i] = deceduti[i] - deceduti[i - 1]
                    isolamento_domiciliareOGGI[i] = isolamento_domiciliare[i] - isolamento_domiciliare[i - 1]
                    ricoverati_con_sintomiOGGI[i] = ricoverati_con_sintomi[i] - ricoverati_con_sintomi[i - 1]
                    terapia_intensivaOGGI[i] = terapia_intensiva[i] - terapia_intensiva[i - 1]
                    Rcon0[i] = totale_positivi[i] / totale_positivi[i - 1]
                    //  Romedia[i] = (Rcon0[i] + Romedia[i - 1])
                    //  Rcon0media =+ Rcon0[i]
                    percGuariti[i] = dimessi_guariti[i] * 100 / covidPositivi[i]
                    percDeceduti[i] = deceduti[i] * 100 / covidPositivi[i]
                    percMalati[i] = totale_positivi[i] * 100 / covidPositivi[i]

                    // console.log(Rcon0[i]);
                    //  console.log(Romedia[i]);
                }
                // let totale = Rcon0.reduce(function (accumulator, currentValue) {
                //   return accumulator + currentValue
                // }, 0)
                //console.log(totale);

                // const reducer = (accumulator, currentValue) => accumulator + currentValue;
                //console.log(covidPositivi.reduce(reducer));
                //var Rcon0media = Rcon0.reduce(reducer);
                // console.log(Rcon0media)
                //console.log(total);
                let mediapositivi = ((covidPositivi[periodo - 1] - covidPositivi[0]) / periodo).toFixed(2)
                let mediaGuariti = ((dimessi_guariti[periodo - 1] - dimessi_guariti[0]) / (periodo)).toFixed(2)
                let mediadeceduti = ((deceduti[periodo - 1] - deceduti[0]) / (periodo)).toFixed(2)
                let mediaattivi = ((totale_positivi[periodo - 1] - totale_positivi[0]) / (periodo)).toFixed(2)
                let mediadomiciliare = ((isolamento_domiciliare[periodo - 1] - isolamento_domiciliare[0]) / (periodo)).toFixed(2)
                let mediaricoverati = ((ricoverati_con_sintomi[periodo - 1] - ricoverati_con_sintomi[0]) / (periodo)).toFixed(2)
                let mediaintensiva = ((terapia_intensiva[periodo - 1] - terapia_intensiva[0]) / periodo).toFixed(2)

                /*  console.log(mediapositivi);
                 console.log(mediaGuariti);
                 console.log(mediadeceduti);
                 console.log(mediaattivi);
                 console.log(mediadomiciliare);
                 console.log(mediaricoverati);
                 console.log(mediaintensiva);   */

                covidOggi2.shift();
                tamponiOggi.shift();
                covidPositiviOggi.shift();
                coviTamponiPositiviOGGI.shift();
                totale_positiviOggi.shift();
                dimessi_guaritiOggi.shift();
                decedutiOggi.shift();
                isolamento_domiciliareOGGI.shift();
                ricoverati_con_sintomiOGGI.shift();
                terapia_intensivaOGGI.shift();
                Rcon0.shift();
                percGuariti.shift();
                percDeceduti.shift();
                percMalati.shift();
                function formatNumber(num) {
                    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1`')
                }
                let x = document.getElementById("periodo");
                x.value = periodo
                document.getElementById("ErreconZero").innerHTML = (Rcon0[periodo - 2]).toFixed(4)
                if (Rcon0[periodo - 3] < Rcon0[periodo - 2]) {
                    document.getElementById("ErreconZero").classList.remove('green');
                    document.getElementById("ErreconZero").classList.add('red');
                } else {
                    document.getElementById("ErreconZero").classList.remove('red');
                    document.getElementById("ErreconZero").classList.add('green');
                }

                document.getElementById("percTamponi").innerHTML = (coviTamponiPositivi[periodo - 1]).toFixed(4)
                if (coviTamponiPositivi[periodo - 2] < coviTamponiPositivi[periodo - 1]) {
                    document.getElementById("percTamponi").classList.remove('green');
                    document.getElementById("percTamponi").classList.add('red');
                } else {
                    document.getElementById("percTamponi").classList.remove('red');
                    document.getElementById("percTamponi").classList.add('green');
                }
                document.getElementById("percTamponiOggi").innerHTML = (coviTamponiPositiviOGGI[periodo - 2]).toFixed(4)
                if (coviTamponiPositiviOGGI[periodo - 3] < coviTamponiPositiviOGGI[periodo - 2]) {
                    document.getElementById("percTamponiOggi").classList.remove('green');
                    document.getElementById("percTamponiOggi").classList.add('red');
                } else {
                    document.getElementById("percTamponiOggi").classList.remove('red');
                    document.getElementById("percTamponiOggi").classList.add('green');
                }


                document.getElementById("percdecessi").innerHTML = (percDeceduti[periodo - 2]).toFixed(4)
                if (percDeceduti[periodo - 3] < percDeceduti[periodo - 2]) {
                    document.getElementById("percdecessi").classList.remove('green');
                    document.getElementById("percdecessi").classList.add('red');
                } else {
                    document.getElementById("percdecessi").classList.remove('red');
                    document.getElementById("percdecessi").classList.add('green');
                }
                document.getElementById("percmalati").innerHTML = (percMalati[periodo - 2]).toFixed(4)
                if (percMalati[periodo - 3] < percMalati[periodo - 2]) {
                    document.getElementById("percmalati").classList.remove('green');
                    document.getElementById("percmalati").classList.add('red');
                } else {
                    document.getElementById("percmalati").classList.remove('red');
                    document.getElementById("percmalati").classList.add('green');
                }
                document.getElementById("percguariti").innerHTML = (percGuariti[periodo - 2]).toFixed(4)
                if (percGuariti[periodo - 3] < percGuariti[periodo - 2]) {
                    document.getElementById("percguariti").classList.remove('red');
                    document.getElementById("percguariti").classList.add('green');
                } else {
                    document.getElementById("percguariti").classList.remove('green');
                    document.getElementById("percguariti").classList.add('red');
                }

                document.getElementById("positivi").innerHTML = formatNumber(covidPositivi[periodo - 1])
                if (covidPositivi[periodo - 2] < covidPositivi[periodo - 1]) {
                    //  document.getElementById("positivi").classList.toggle('red');
                } else {
                    document.getElementById("positivi").classList.add('green');
                }
                document.getElementById("positiviOggi").innerHTML = formatNumber(covidPositiviOggi[periodo - 2])
                if (covidPositiviOggi[periodo - 3] < covidPositiviOggi[periodo - 2]) {
                    document.getElementById("positiviOggi").classList.remove('green');
                    document.getElementById("positiviOggi").classList.add('red');
                } else {
                    document.getElementById("positiviOggi").classList.remove('red');
                    document.getElementById("positiviOggi").classList.add('green');
                }
                document.getElementById("labelpositivi").innerHTML = `<abbr title=${formatNumber(mediapositivi)}>Casi-</abbr>`

                if (mediapositivi < covidPositiviOggi[periodo - 2]) {
                    document.getElementById("labelpositivi").classList.remove('green');
                    document.getElementById("labelpositivi").classList.add('red');
                } else {
                    document.getElementById("labelpositivi").classList.remove('red');
                    document.getElementById("labelpositivi").classList.add('green');
                }

                document.getElementById("Guariti").innerHTML = formatNumber(dimessi_guariti[periodo - 1])
                /*  if (dimessi_guariti[periodo - 2] < dimessi_guariti[periodo - 1]) {
                     document.getElementById("Guariti").classList.toggle('green');
                 } else {
                     document.getElementById("Guariti").classList.toggle('red');
                 } */
                document.getElementById("Guaritioggi").innerHTML = formatNumber(dimessi_guaritiOggi[periodo - 2])
                if (dimessi_guaritiOggi[periodo - 3] < dimessi_guaritiOggi[periodo - 2]) {
                    document.getElementById("Guaritioggi").classList.remove('red');
                    document.getElementById("Guaritioggi").classList.add('green');
                } else {
                    document.getElementById("Guaritioggi").classList.remove('green');
                    document.getElementById("Guaritioggi").classList.add('red');
                }
                document.getElementById("labelGuariti").innerHTML = `<abbr title=${formatNumber(mediaGuariti)}>Guariti-</abbr>`
                if (mediaGuariti < dimessi_guaritiOggi[periodo - 2]) {
                    document.getElementById("labelGuariti").classList.remove('red');
                    document.getElementById("labelGuariti").classList.add('green');
                } else {
                    document.getElementById("labelGuariti").classList.remove('green');
                    document.getElementById("labelGuariti").classList.add('red');
                }

                document.getElementById("Deceduti").innerHTML = formatNumber(deceduti[periodo - 1])
                if (deceduti[periodo - 2] < deceduti[periodo - 1]) {
                    //  document.getElementById("Deceduti").classList.toggle('red');
                } else {
                    document.getElementById("Deceduti").classList.remove('red');
                    document.getElementById("Deceduti").classList.add('green');
                }
                document.getElementById("Decedutioggi").innerHTML = formatNumber(decedutiOggi[periodo - 2])
                if (decedutiOggi[periodo - 3] < decedutiOggi[periodo - 2]) {
                    document.getElementById("Decedutioggi").classList.remove('green');
                    document.getElementById("Decedutioggi").classList.add('red');
                } else {
                    document.getElementById("Decedutioggi").classList.remove('red');
                    document.getElementById("Decedutioggi").classList.add('green');
                }
                document.getElementById("labelDeceduti").innerHTML = `<abbr title=${formatNumber(mediadeceduti)}>Deceduti=</abbr>`
                if (mediadeceduti < decedutiOggi[periodo - 2]) {
                    document.getElementById("labelDeceduti").classList.remove('green');
                    document.getElementById("labelDeceduti").classList.add('red');
                } else {
                    document.getElementById("labelDeceduti").classList.remove('red');
                    document.getElementById("labelDeceduti").classList.add('green');
                }

                document.getElementById("Attivi").innerHTML = formatNumber(totale_positivi[periodo - 1])
                if (totale_positivi[periodo - 2] < totale_positivi[periodo - 1]) {
                    document.getElementById("Attivi").classList.remove('green');
                    document.getElementById("Attivi").classList.add('red');
                } else {
                    document.getElementById("Attivi").classList.remove('red');
                    document.getElementById("Attivi").classList.add('green');
                }
                document.getElementById("Attivioggi").innerHTML = formatNumber(totale_positiviOggi[periodo - 2])
                if (totale_positiviOggi[periodo - 3] < totale_positiviOggi[periodo - 2]) {
                    document.getElementById("Attivioggi").classList.remove('green');
                    document.getElementById("Attivioggi").classList.add('red');
                } else {
                    document.getElementById("Attivioggi").classList.remove('red');
                    document.getElementById("Attivioggi").classList.add('green');
                }
                document.getElementById("labelAttivi").innerHTML = `<abbr title=${formatNumber(mediaattivi)}>Positivi</abbr>`
                if (mediaattivi < totale_positiviOggi[periodo - 2]) {
                    document.getElementById("labelAttivi").classList.remove('green');
                    document.getElementById("labelAttivi").classList.add('red');
                } else {
                    document.getElementById("labelAttivi").classList.remove('red');
                    document.getElementById("labelAttivi").classList.add('green');
                }

                document.getElementById("Domiciliare").innerHTML = formatNumber(isolamento_domiciliare[periodo - 1])
                if (isolamento_domiciliare[periodo - 2] < isolamento_domiciliare[periodo - 1]) {
                    document.getElementById("Domiciliare").classList.remove('green');
                    document.getElementById("Domiciliare").classList.add('red');
                } else {
                    document.getElementById("Domiciliare").classList.remove('red');
                    document.getElementById("Domiciliare").classList.add('green');
                }
                document.getElementById("Domiciliareoggi").innerHTML = formatNumber(isolamento_domiciliareOGGI[periodo - 2])
                if (isolamento_domiciliareOGGI[periodo - 3] < isolamento_domiciliareOGGI[periodo - 2]) {
                    document.getElementById("Domiciliareoggi").classList.remove('green');
                    document.getElementById("Domiciliareoggi").classList.add('red');
                } else {
                    document.getElementById("Domiciliareoggi").classList.remove('red');
                    document.getElementById("Domiciliareoggi").classList.add('green');
                }
                document.getElementById("labelDomiciliare").innerHTML = `<abbr title=${formatNumber(mediadomiciliare)}>=Domiciliare</abbr>`

                if (mediadomiciliare < isolamento_domiciliareOGGI[periodo - 2]) {
                    document.getElementById("labelDomiciliare").classList.remove('green');
                    document.getElementById("labelDomiciliare").classList.add('red');
                } else {
                    document.getElementById("labelDomiciliare").classList.remove('red');
                    document.getElementById("labelDomiciliare").classList.add('green');
                }

                document.getElementById("Ricoverati").innerHTML = formatNumber(ricoverati_con_sintomi[periodo - 1])
                if (ricoverati_con_sintomi[periodo - 2] < ricoverati_con_sintomi[periodo - 1]) {
                    document.getElementById("Ricoverati").classList.remove('green');
                    document.getElementById("Ricoverati").classList.add('red');
                } else {
                    document.getElementById("Ricoverati").classList.remove('red');
                    document.getElementById("Ricoverati").classList.add('green');
                }
                document.getElementById("Ricoveratioggi").innerHTML = formatNumber(ricoverati_con_sintomiOGGI[periodo - 2])
                if (ricoverati_con_sintomiOGGI[periodo - 3] < ricoverati_con_sintomiOGGI[periodo - 2]) {
                    document.getElementById("Ricoveratioggi").classList.remove('green');
                    document.getElementById("Ricoveratioggi").classList.add('red');
                } else {
                    document.getElementById("Ricoveratioggi").classList.remove('red');
                    document.getElementById("Ricoveratioggi").classList.add('green');
                }
                document.getElementById("labelRicoverati").innerHTML = `<abbr title=${formatNumber(mediaricoverati)}>+Ricoverati</abbr>`
                if (mediaricoverati < ricoverati_con_sintomiOGGI[periodo - 2]) {
                    document.getElementById("labelRicoverati").classList.remove('green');
                    document.getElementById("labelRicoverati").classList.add('red');
                } else {
                    document.getElementById("labelRicoverati").classList.remove('red');
                    document.getElementById("labelRicoverati").classList.add('green');
                }

                document.getElementById("Intensiva").innerHTML = formatNumber(terapia_intensiva[periodo - 1])
                if (terapia_intensiva[periodo - 2] < terapia_intensiva[periodo - 1]) {
                    document.getElementById("Intensiva").classList.remove('green');
                    document.getElementById("Intensiva").classList.add('red');
                } else {
                    document.getElementById("Intensiva").classList.remove('red');
                    document.getElementById("Intensiva").classList.add('green');
                }
                document.getElementById("Intensivaoggi").innerHTML = formatNumber(terapia_intensivaOGGI[periodo - 2])
                if (terapia_intensivaOGGI[periodo - 3] < terapia_intensivaOGGI[periodo - 2]) {
                    document.getElementById("Intensivaoggi").classList.remove('green');
                    document.getElementById("Intensivaoggi").classList.add('red');
                } else {
                    document.getElementById("Intensivaoggi").classList.remove('red');
                    document.getElementById("Intensivaoggi").classList.add('green');
                }
                document.getElementById("labelIntensiva").innerHTML = `<abbr title=${formatNumber(mediaintensiva)}>+Intensiva</abbr>`
                if (mediaintensiva > parseInt(terapia_intensivaOGGI[periodo - 2])) {
                    document.getElementById("labelIntensiva").classList.remove('red');
                    document.getElementById("labelIntensiva").classList.add('green');
                } else {
                    document.getElementById("labelIntensiva").classList.remove('green');
                    document.getElementById("labelIntensiva").classList.add('red');
                }


                setTamponiData({
                    labels: covidOggi,
                    datasets: [
                        {
                            label: 'Tamponi Totali ' + formatNumber(covidTamponi[temp - 1]),
                            data: covidTamponi,
                            backgroundColor: ['rgba(75, 15, 88, 0.8'],
                            borderWidth: 4
                        }
                    ]
                })
                setTamponiOGGI({
                    labels: covidOggi2,
                    datasets: [
                        {
                            label: 'Tamponi Oggi ' + formatNumber(tamponiOggi[temp - 2]),
                            data: tamponiOggi,
                            backgroundColor: ['rgba(75, 15, 88, 0.8'],
                            borderWidth: 4
                        }
                    ]
                })
                setPositiviData({
                    labels: covidOggi,
                    datasets: [
                        {
                            label: 'Casi Totali ' + formatNumber(covidPositivi[temp - 1]),
                            data: covidPositivi,
                            backgroundColor: ['rgba(175, 15, 88, 0.9'],
                            borderWidth: 4
                        }
                    ]
                })
                setPositiviOGGI({
                    labels: covidOggi2,
                    datasets: [
                        {
                            label: 'Casi Oggi ' + formatNumber(covidPositiviOggi[temp - 2]),
                            data: covidPositiviOggi,
                            backgroundColor: ['rgba(175, 15, 88, 0.9'],
                            borderWidth: 4
                        }
                    ]
                })
                setTamponiPositivi({
                    labels: covidOggi,
                    datasets: [
                        {
                            label: 'Casi % ' + (coviTamponiPositivi[temp - 1]).toFixed(10),
                            data: coviTamponiPositivi,
                            backgroundColor: ['rgba(105, 115, 188, 0.9'],
                            borderWidth: 4
                        }
                    ]
                })
                setTamponiPositiviOGGI({
                    labels: covidOggi2,
                    datasets: [
                        {
                            label: 'Casi Oggi % ' + (coviTamponiPositiviOGGI[temp - 2]).toFixed(10),
                            data: coviTamponiPositiviOGGI,
                            backgroundColor: ['rgba(105, 115, 188, 0.9'],
                            borderWidth: 4
                        }
                    ]
                })
                setPositiviTotal({
                    labels: covidOggi,
                    datasets: [
                        {
                            label: 'Casi ' + formatNumber(covidPositivi[temp - 1]),
                            data: covidPositivi,
                            backgroundColor: ['rgba(175, 15, 88, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Positivi ' + formatNumber(totale_positivi[temp - 1]),
                            data: totale_positivi,
                            backgroundColor: ['rgba(225, 215, 88, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Guariti ' + formatNumber(dimessi_guariti[temp - 1]),
                            data: dimessi_guariti,
                            backgroundColor: ['rgba(53, 104, 45, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Deceduti ' + formatNumber(deceduti[temp - 1]),
                            data: deceduti,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        }
                    ]
                })
                setPositiviGiornal({
                    labels: covidOggi2,
                    datasets: [
                        {
                            label: 'Casi ' + formatNumber(covidPositiviOggi[temp - 2]),
                            data: covidPositiviOggi,
                            backgroundColor: ['rgba(175, 15, 88, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Positivi ' + formatNumber(totale_positiviOggi[temp - 2]),
                            data: totale_positiviOggi,
                            backgroundColor: ['rgba(225, 215, 88, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Guariti ' + formatNumber(dimessi_guaritiOggi[temp - 2]),
                            data: dimessi_guaritiOggi,
                            backgroundColor: ['rgba(53, 104, 45, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Deceduti ' + formatNumber(decedutiOggi[temp - 2]),
                            data: decedutiOggi,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        }
                    ]
                })
                setAttiviTotal({
                    labels: covidOggi,
                    datasets: [
                        {
                            label: 'Positivi ' + formatNumber(totale_positivi[temp - 1]),
                            data: totale_positivi,
                            backgroundColor: ['rgba(225, 215, 88, 0.3'],
                            borderWidth: 4,
                            showLabelBackdrop: false
                        },
                        {
                            label: 'Isolamento Domiciliare ' + formatNumber(isolamento_domiciliare[temp - 1]),
                            data: isolamento_domiciliare,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Riricoverati ' + formatNumber(ricoverati_con_sintomi[temp - 1]),
                            data: ricoverati_con_sintomi,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Terapia Intensiva ' + formatNumber(terapia_intensiva[temp - 1]),
                            data: terapia_intensiva,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        }
                    ]
                })
                setAttiviGiornl({
                    labels: covidOggi2,
                    datasets: [
                        {
                            label: 'Positivi ' + formatNumber(totale_positiviOggi[temp - 2]),
                            data: totale_positiviOggi,
                            backgroundColor: ['rgba(225, 215, 88, 0.3'],
                            borderWidth: 4,
                            showLabelBackdrop: false
                        },
                        {
                            label: 'Isolamento Domiciliare ' + formatNumber(isolamento_domiciliareOGGI[temp - 2]),
                            data: isolamento_domiciliareOGGI,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Ricoverati ' + formatNumber(ricoverati_con_sintomiOGGI[temp - 2]),
                            data: ricoverati_con_sintomiOGGI,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Terapia Intensiva ' + formatNumber(terapia_intensivaOGGI[temp - 2]),
                            data: terapia_intensivaOGGI,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        }
                    ]
                })
                seterreConZero({
                    labels: covidOggi2,
                    datasets: [
                        {
                            label: 'R0 - ' + (Rcon0[temp - 2]).toFixed(10),
                            data: Rcon0,
                            backgroundColor: ['rgba(105, 115, 188, 0.9'],
                            borderWidth: 4
                        }
                    ]
                })
                setpercentuali({
                    labels: covidOggi2,
                    datasets: [
                        {
                            label: 'Guariti %' + (percGuariti[temp - 2]).toFixed(4),
                            data: percGuariti,
                            backgroundColor: ['rgba(0, 102, 0, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Deceduti %' + (percDeceduti[temp - 2]).toFixed(4),
                            data: percDeceduti,
                            backgroundColor: ['rgba(255, 0, 0, 0.3'],
                            borderWidth: 4
                        },
                        {
                            label: 'Malati %' + (percMalati[temp - 2]).toFixed(4),
                            data: percMalati,
                            backgroundColor: ['rgba(105, 115, 188, 0.3'],
                            borderWidth: 4
                        }
                    ]
                })
            })
            .catch(err => {
                console.log(err);
            })

    }
   

    useEffect(() => {
         chart()
    }, [props]) 
   
    return (
     

        <div className="App">
            
            


            <div className="row">
                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"  >
                        <Line data={tamponiData} options={{
                            responsive: true,
                            title: { text: 'Tamponi Totali', display: true },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        autoskip: true,
                                        maxThickLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
                <div className="col md-6 ">

                    <div style={{ height: '100%', width: '100%' }} className="chart"   >
                        <Line data={tamponiOGGI} options={{
                            responsive: true,
                            title: { text: 'Tamponi Giornalieri', display: true },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        autoskip: true,
                                        maxThickLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"  >
                        <Line data={tamponiPositivi} options={{
                            responsive: true,
                            title: { text: '% Tamponi / Casi', display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoskip: true,
                                            maxThickLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"  >
                        <Line data={tamponiPositiviOGGI} options={{
                            responsive: true,
                            title: { text: '% Tamponi / Casi Oggi', display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoskip: true,
                                            maxThickLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"  >
                        <Line data={positiviData} options={{
                            responsive: true,
                            title: { text: 'Casi Totali ', display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoskip: true,
                                            maxThickLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart" >
                        <Line data={positiviOGGI} options={{
                            responsive: true,
                            title: { text: 'Casi Giornalieri', display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoskip: true,
                                            maxThickLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"   >
                        <Line data={positiviTotal} options={{
                            responsive: true,
                            title: { text: 'Casi Totali', display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoskip: true,
                                            maxThickLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
                <div className="col md-6 ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"   >
                        <Line data={positiviGiornal} options={{
                            responsive: true,
                            title: { text: 'Casi Giornalieri', display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoskip: true,
                                            maxThickLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>

            </div>


            <div className="row">




                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"  >
                        <Line data={attiviTotal} options={{
                            responsive: true,
                            title: { text: 'Attivi Totali', display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoskip: true,
                                            maxThickLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"   >
                        <Line data={attiviGiornl} options={{
                            responsive: true,
                            title: { text: 'Attivi Giornalieri', display: true },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoskip: true,
                                            maxThickLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: true
                                        }
                                    }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col md-6  ">
                    <div style={{ height: '100%', width: '100%' }} className="chart"  >
                        <Line data={percentuali} options={{
                            responsive: true,
                            title: { text: 'Andamento in Percentuali', display: true },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        autoskip: true,
                                        maxThickLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
                <div className="col md-6  ">

                    <div style={{ height: '100%', width: '100%' }} className="chart"  >
                        <Line data={erreConZero} options={{
                            responsive: true,
                            title: { text: 'Erre con Zero', display: true },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        autoskip: true,
                                        maxThickLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                            }
                        }} />
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Chart3;