import React, {Component} from 'react';  
import './App.css';  
import Alert from './Components/Alert'
import Media from './Components/Media'
  
class App extends Component {  
  render(){  
    return (  
      <div className="App container">  
        <div className="alert alert-info">  
          <h3 className="judul">Ini Project Pertama React JS</h3>  
          <p className="subjudul">Belajar React JS itu mudah</p>  
          <button className="mr-1 btn btn-success">Setuju</button>  
          <button className="btn btn-info">Iya Dong</button>  
        </div>

        <div className="App container col-sm-6">  
          <Alert type="danger" header="Fatal Error">  
            Ini adalah alert dengan tipe danger  
          </Alert>  
          <Alert type="success" header="Berhasil">  
            Ini adalah alert dengan tipe success  
          </Alert>  
          <Alert type="warning" header="Warning">  
            Ini adalah alert dengan tipe warning  
          </Alert>  
        </div>

        <Media image="mobil1.jpg" title="Honda">
          Ini adalah mobil
        </Media> 
        <Media image="mobil2.jpg" title="Honda">
          Ini juga mobil
        </Media>
      </div>
        
    );  
  }  
}  
export default App;  
