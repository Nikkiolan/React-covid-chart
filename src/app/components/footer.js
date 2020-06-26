import React from 'react';

const Footer = props => {


    return (
        <div className="footer mt-4">
            <div className="container">
                <div className="row ">

                    <div className="col-md-6">
                    <p>Dati forniti dal Ministero della Salute.</p>
                        <p>Elaborazione e gestione dati a cura del Dipartimento della Protezione Civile.</p>  <hr />
                        <p> Per informare i cittadini e mettere a disposizione i dati raccolti, utili ai soli fini comunicativi e informativi, il Dipartimento della Protezione Civile mette a disposizione i seguenti dati, con licenza <a href="https://creativecommons.org/licenses/by/4.0/deed.en" target="_blank" >CC-BY-4.0</a>.</p>
                    </div>

                    <div className="col-md-6">
                        <p>Download dati:</p>
                        <hr />
                        <ul>
                            <li>PDF: <a href="https://github.com/pcm-dpc/COVID-19/tree/master/schede-riepilogative" target="_blank" >Schede riepilogative</a></li>
                            <li>CSV: <a href="https://github.com/pcm-dpc/COVID-19/tree/master/dati-regioni" target="_blank" >Regioni</a> - <a href="https://github.com/pcm-dpc/COVID-19/tree/master/dati-province" target="_blank" >Province</a> - <a href="https://github.com/pcm-dpc/COVID-19/tree/master/dati-andamento-nazionale" target="_blank" >Andamento nazionale</a></li>
                            <li>Shape: <a href="https://github.com/pcm-dpc/COVID-19/tree/master/aree" target="_blank" >aree misure di contenimento</a></li>
                            <li>PDF: Metadata XML (IT-EN): <a href="https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/metadata/covid-19-monitoraggio.xml" target="_blank" >dati</a> (RNDT) - <a href="https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/metadata/covid-19-ita-andamento-nazionale.xml" target="_blank" >dati</a> (DCAT-AP-IT) - <a href="https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/metadata/covid-19-aree.xml" target="_blank" >aree</a> (RNDT)</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <details>
                            <summary>Istruzioni</summary>
                            <p>Questo sito ci permette di visualizzare l'andamento del covid-19 in Italia, prendendo in considerazione il periodo che vogliamo analizzare.</p> <p>La scheda riassuntiva mostra in rosso i dati che sono peggiori del giorno precedente ed in verde quelli che sono migliori, le scritte in alto sono verdi se il dato odierno e' migliore della media del periodo selezionato o rosse se peggiore, posizionando il mouse sopra la scritta compare la media del periodo per una rapida comparazione.</p> <p>Nei grafici multipli si possono escludere alcuni dati per meglio analizzare i restanti.</p> <p>Nella pagina delle regioni e' possibile ordinare le schede riassuntive in base alle varie voci, per meglio analizzare l'andamento della situazione. le schede vengono ordinate in base ai dati odierni per meglio analizzare la situazione attuale.</p> <p>L'indice <span className="green">T.C.O.</span> indica la percentuale di casi odierni in relazione al numero di tamponi fatti, se si trovano pochi nuovi casi ma si sono fatti pochi tamponi il dato potrebbe non essere tranquillizzante.</p> <p>L'indice <span className="green">R.0</span> (Erre con zero) anche noto come indice di contagiosita' in un dato momento, ci mostra se stiamo migliorando o peggiorando rispetto a ieri, e di quanto, se e' inferiore a 1 stiamo migliorando se e' maggiore di 1 stiamo peggiorando, se e' uguale ad 1 la situazione e' rimasta invariata. ( si ottiene dividendo il totale positivi di oggi con quello di ieri ) Nella pagina delle regioni ci mostra chi sta peggiorando di piu' fino a quello che migliora di piu'.</p> <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/r2iIjN8FSLw" frameBorder="0" allowFullScreen></iframe></p><hr /> <p>Ogni virus e' differente dagli altri, ci vuole tempo per studiarlo e analizzare le sue peculiarita', la prudenza e' la miglior dote che si possa avere, ascoltate solo quel che dicono i medici, gli opinionisti potrebbero non aver capito la gravita' della situazione, e quando ascoltate un medico chiedetevi sempre: sara' abbastanza prudente? </p> <p>Al solo scopo informativo invito a guardare i seguenti video, che danno una visione generale su cosa stiamo combattendo, e su quello che sappiamo al giorno d'oggi.</p><hr /> <p><iframe width="560" height="315" src="https://www.youtube.com/embed/d8nZKv3YPKo" frameborder="0" allowfullscreen></iframe></p><hr /> <p><iframe width="560" height="315" src="https://www.youtube.com/embed/m-U3VRcuR3Y" frameborder="0" allowfullscreen></iframe></p><hr />
                            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/rMLm3FpgYMY" frameborder="0" allowfullscreen></iframe></p>
                        </details>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <hr />
                        <p align="center"> Sito realizzato con <a href="https://it.reactjs.org/" target="_blank" >React </a> e <a href="https://getbootstrap.com/" target="_blank" > Bootstrap </a> a cura di <a href="mailto:nicola.naracci@gmail.com">nicola.naracci@gmail.com</a> © .  Elaborazioni Ridistribuite con licenza <a href="https://creativecommons.org/licenses/by/4.0/deed.en" target="_blank" >CC-BY-4.0</a>.</p> <p>Non si fa uso di cookies.</p> <p>Competenze acquisite seguendo i video del grande <a href="https://www.youtube.com/channel/UCX9NJ471o7Wie1DQe94RVIg" target="_blank" >Fazt</a> </p>
                        
                </div>
            </div>
        </div>
            </div >
    )
}
export default Footer;