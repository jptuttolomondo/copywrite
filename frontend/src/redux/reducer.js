const initialState={
text:[],
copiaTexto:[],
lista:[],
}

export function Reducer(state=initialState,action){
switch(action.type){
case 'GET_TEXT':  return{...state,text:action.payload,lista:[action.payload,...state.lista]}
case 'CLEAN_STATES': return{...state,texto:action.payload,copiatexto:action.payload}
default: return state
}
}


export default Reducer