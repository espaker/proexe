import { MDBContainer } from "mdbreact";
import { Provider } from 'react-redux';
import {NotificationContainer } from 'react-notifications';

import store from './store/store';

import Header from './components/header/header'
import Users from './components/users/users'

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <Provider store={store}>
      <MDBContainer className="app" fluid>
        <Header/>
        <MDBContainer className="app_body" fluid>
            <Users/>
        </MDBContainer>
      </MDBContainer>
      <NotificationContainer/>
    </Provider>
  );
}

export default App;
