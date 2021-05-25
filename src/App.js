import img from './img.jpg';
import "./App.css"
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';

function App() {
  return (
    <div className="root">
      <div className="App"> 
          <img src={img} className="img" width="400px"/>  
          <div className="jenny">Jenny</div> 
          <div className="frds">Friends</div>  
          <div className="pgm">
            Jenny is a personal assistant living in Paris.
          </div>
          <hr className="line" size="1px"/>
          <div className="footer">
          <div className="flex1"><IconButton> <PersonIcon /> </IconButton>32 friends</div>
            <div className="flex2">Joined in 2013</div>
          </div>
      </div>
    </div>

  );
}

export default App;
