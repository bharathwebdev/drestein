import logo from './logo.svg';
import './App.css';
import '../src/components/main.css'
import Nav_bar from './components/Nav_Bar';
import Header from './components/Header';
import DrawerAppBar from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
     <img className="bg_img" src="background.jpeg" alt="jjo"/>
      
     <div> 
      <DrawerAppBar/>
      <Header/>
      <Main/>
     </div>
    </div>
  );
}

export default App;
