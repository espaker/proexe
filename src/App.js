import { MDBContainer } from "mdbreact";

import Header from './components/header/header'

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

function App() {
  return (
    <MDBContainer className="app" fluid>
      <Header />
      
    </MDBContainer>
  );
}

export default App;
