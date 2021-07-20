import React, {Component, useState} from 'react';

const Form =({newBlc})=>{
    const[data,setData] = useState("");
    const[difficulty,setDifficulty] = useState(0)
     return(
        <div className="form">
            <section id="form">
                <h3>Add new block</h3>
                <form className="form-group"/>
                    <input type="number" id="difficulty" name="difficulty" placeholder="Type down the difficulty" class="form-control" onChange={(evt)=>setDifficulty(evt.target.value)} /><br/>
                    <input type="text"  id="data" name="data" placeholder="Data" className="form-control"  onChange={(evt)=>setData(evt.target.value)} /><br/>
                    <input type="button"  id="form-bt" value="Mine" className="btn btn-submit" onClick={()=>{console.log('datas',{data, difficulty});newBlc({data,difficulty})}}/>
                <form/>
            </section>
        </div>
     )
};
export default Form;
 