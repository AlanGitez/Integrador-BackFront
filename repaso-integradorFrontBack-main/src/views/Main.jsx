import React from "react";
import { Routes, Route } from "react-router";
import axios from "axios";
import Form from "./form/Form";
import Tasks from "./tasks/Tasks";
import Navbar from "./navbar/Navbar";
import FormRegister from "./form/FormRegister";

class App extends React.Component {

  componentDidMount() {
    // chequeamos que el pedido axios al nuestro server funcione correctamente! deberias poder ver desde la consola del browser lo siguiente: "This is your data:  api its working"
    axios
      .get("http://localhost:1337/api")
        .then(response => response.data)
        .then(data => console.log("This is your data: ", data));
  }

  render() {
    return (
      <>
        <Navbar />
          
        <Routes> 
          <Route path="/tasks" element={<Tasks />}/>
          <Route path="/login" element={<Form />}/>          
          <Route path="/register" element={<FormRegister />}/>
        </Routes>
      </>
    );
  }

  
}

export default App;
