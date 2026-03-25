import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./OurService.css";


function OurService() {
  return (
    <div>
      <Navbar active="ourservice"/>
      <BodyContainer>
      <h1>OurService</h1>
      </BodyContainer>
     
      <Footer />
    </div>
  );
}

export default OurService