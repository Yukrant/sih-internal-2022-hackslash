import {  Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import Editpage from "./pages/Editpage";
import PublicProfileCollege from "./pages/PublicProfileCollege";
import PublicOffice from "./pages/PublicOffice";

function App() {
  return (
    <Container maxW={"8xl"}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/college/:college_name" exact element={<PublicProfileCollege/>}/>
          <Route path="/company/:company_name" exact element={<PublicOffice/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/college/editDetails" element={<Editpage/>}/>
          <Route path="/college/previousYear" element={<Editpage/>}/>
          <Route path="/college/inviteoffices" element={<DashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
