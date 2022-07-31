import axios from 'axios' 
export function cleanStates(){
    return async function(dispatch){
        return dispatch({type:'CLEAN_STATES',payload:[]})
    }
}

export function getext(text){ return async function (dispatch){ 
try{
const salida= await axios.get('http://localhost:3001/?text='+text)
           let array=[]
           array.push(salida.data.text)
              return dispatch({type:'GET_TEXT',payload:array})
}
catch{console.error('no se puede')}
  
}
}


