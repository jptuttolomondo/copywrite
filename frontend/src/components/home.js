import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getext, cleanStates } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
//import {styles}from 'react-bootstrap'
export function Home() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    text: [],
  });

  var aux = useSelector((state) => state.lista);
  useEffect(() => {
    dispatch(cleanStates());
  }, [dispatch]);

  function handleInputChange(e) {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.text.length > 0) {
      dispatch(getext(input.text));
    }
    setInput({
      text: [],
    });
  }

  return (  
    <div className=" bg-success">    
 
    
      <h1>App copywrite Juan Pablo Tuttolomondo</h1>
      <div>
        <input
        className="col-4 col-m-2 col-lg-2 bg-warning" 
     
          type="text"
          placeholder="insert text"
          name="text"
          value={input.text}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="btn btn-info"
          type="submit"
          onClick={(e) => handleSubmit(e)}>  Send </button>
        <p></p>
      </div>
      <div>
        {  


        aux.map((e) => {
          return <div key={aux.indexOf(e)}className="container bg-danger" >
            <ul><li className="list-group">{e}</li> </ul>
            
           </div>;
        })
        }
      </div>

    </div>
  );
}
