import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterMurid from "./components/Navbar/RegisterMurid";
import RegisterGuru from "./components/Navbar/RegisterGuru";
import SD from "./components/Pembelajaran/SD";
import Silabus from "./components/Silabus/Silabus";
import Tugas from "./components/Tugas/Tugas";
import Soal from "./components/Soal/Soal";
import Diskusi from "./components/Diskusi/Diskusi";
import Offline from "./components/Offline";

function App() {
 
  //tambah state untuk menampung staus online/offline
  const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);

  //fungsi untuk menghandle status offline/online
  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }

  React.useEffect(function() {

    //ketika pertama kali components dijalankan maka akan mengecek status terlebih dahulu
    handleOfflineStatus();
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus)

    //fungsi useeffect akan mendevinisikan components
    return function() {
        window.removeEventListener('online', handleOfflineStatus)
        window.removeEventListener('offline', handleOfflineStatus)
    }
}, [offlineStatus]);

  return (
    <div>
    

      <div className="App">
        <Router>
        
          <div className="app-header">
          {offlineStatus && <Offline/>}
            <Navbar />
            
          </div>
          <Switch>
            <div className="app-content">
              
              <Route path="/" exact component={Home} />
              <Route path="/register_murid" exact component={RegisterMurid} />
              <Route path="/register_guru" exact component={RegisterGuru} />
              <Route path="/SD" exact component={SD} />
              <Route path="/silabus" exact component={Silabus} />
              <Route path="/tugas" exact component={Tugas} />
              <Route path="/soal" exact component={Soal} />
              <Route path="/diskusi" exact component={Diskusi} />
            </div>
          </Switch>
          <div className="app-footer">
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
