
import './App.css';
import {Route,Routes} from 'react-router-dom'
import {Provider } from 'react-redux';
import {store}from'./redux/store'
import {Home} from './components/home';
function App() {
  return (
          
      <div className="App">
           <Provider store= {store}>
            <Routes>
            <Route exact path="/home" element={<Home/>} > </Route> 
                 <Route path="*" element={<Home/>} > </Route>
         </Routes>
       </Provider>
        </div>   
  );
}

export default App;
