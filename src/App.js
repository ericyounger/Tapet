import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

window.onload = function() {
    var elems  = document.querySelectorAll("input[type=range]");
    M.Range.init(elems);
};

function App() {
    const [rollLength, setRollLength] = useState("");
    const [rollWidth, setRollWidth] = useState("");
    const [wallHeight, setWallHeight] = useState("");
    const [wallWidth, setWallWidth] = useState("");
    const [rapport, setRapport] = useState("");

    useEffect(() => { console.log(rapport)}, [rollWidth, rollLength, wallHeight, wallWidth, rapport])
    function kalkuler(){
        console.log(rollLength, rollWidth, wallWidth, wallHeight);

        //Check for errors on input
        let widthNeed = parseFloat(wallWidth) / parseFloat(rollWidth);

        let heightRequirement = parseFloat(wallHeight) + parseFloat(rapport)/100;

        let lengthFromEachRoll = parseFloat(rollLength) / heightRequirement;
        let i = 1;

        console.log(widthNeed);
        console.log(lengthFromEachRoll);

        while(widthNeed>lengthFromEachRoll*i){
            i++
        }

        let rest = Math.abs(widthNeed - lengthFromEachRoll*i);

        alert(`Du trenger ${i} ruller, og har en rest på ${rest.toFixed(2)}m`)



        //calculate

        //show result and difference.
    }
  return (
<div className="container">


    <div className="card card-panel">
        <div className="card-title">Tapet kalkulator</div>
        <div className="card-content">
            <div className="row">

                <div className="input-field col s12 l6">
                    <input placeholder="" id="rull_lengde" type="text" onChange={text => setRollLength(text.target.value)}/>
                    <label htmlFor="Rull_lengde">Rull lengde i meter</label>
                </div>

                <div className="input-field col s12 l6">
                    <input placeholder="" id="rull_bredde" type="text" onChange={text => setRollWidth(text.target.value)}/>
                    <label htmlFor="Rull_bredde">Rull bredde i meter</label>
                </div>

            </div>

            <div className="row">
                <div className="input-field col s12 l6">
                    <input placeholder="" id="vegg_høyde" type="text" onChange={text => setWallHeight(text.target.value)} />
                    <label htmlFor="vegg_høyde">Vegghøyde i meter</label>
                </div>

                <div className="input-field col s12 l6">
                    <input placeholder="" id="vegg_bredde" type="text" onChange={text => setWallWidth(text.target.value)}/>
                    <label htmlFor="vegg_bredde">Veggbredde i meter</label>
                </div>

                <div className="input-field col s12 l6">
                    <form action="#">
                        <p className="range-field">
                            <label htmlFor="rapport">Rapport i cm</label>
                            <input type="range" id="rapport" min="0" max="100" onChange={text => setRapport(text.target.value)}/>

                        </p>
                    </form>
                </div>

            </div>
            <button className="btn waves-light" onClick={kalkuler}>Kalkuler
                <i className="material-icons right">calculate</i>
            </button>
    </div>

    </div>

</div>
  );
}

export default App;
