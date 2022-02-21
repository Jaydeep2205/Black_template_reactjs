import "./App.css";
import Navbar from "./Components/Navbar.js";
import Chart from "./Components/Chart";
import Chartbar from "./Components/Chartbar";
import Chart2 from "./Components/Chart2";
import BasicTable from "./Components/List";
import DataTable from "./Components/List2";
import Header from "./Components/Header";
import {IoMdNotificationsOutline} from "react-icons/io";
import {GrDeliver} from "react-icons/gr";
import {FaTelegramPlane} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <div className="Header">
          <Header />
        </div>
        <Navbar />
      </div>
      
        <div className="Chart1">
          <h5 className="h5">Total Shipment</h5>
          <h2 className="h2"> Performance </h2>
          <div className="Chart">
          <Chart />
          </div>
        </div>
        <div className="Chartbars">
          <div className="Chart2">
          <h5 className="h5">Total Shipment</h5>
          <div className="icon">
          <IoMdNotificationsOutline className="notification"/>
          <p className="p"> 763,215 </p>
          </div>
          <div className="Charts2">
            <Chart2 />
          </div>
          </div>
          <div className="Chart2">
          <h5 className="h5">Daily Sales</h5>
          <div className="icon">
          <GrDeliver className="car"/>
          <p className="p"> 3,500 </p>
          </div>
          <div className="Chartbar">
            <Chartbar />
          </div>
          </div>
          <div className="Chart2">
          <h5 className="h5">Completed Task</h5>
          <div className="icon">
          <FaTelegramPlane className="car"/>
          <p className="p"> 12,100K </p>
          </div>
          <div className="Charts2">
            <Chart2 />
          </div>
          </div>
        </div>
        <div className="Lists">
          <div className="List">
            <BasicTable />
          </div>
          <div className="List2">
            <DataTable />
          </div>
        </div>
      
    </div>
  );
}

export default App;
