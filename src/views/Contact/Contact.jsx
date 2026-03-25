import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./Contact.css"

function Contact() {
  return (
    <div>
      <Navbar active="contact"/>
      <BodyContainer>
        <h1>Contact</h1>
      </BodyContainer>
      
      <Footer />
    </div>
  );
}

export default Contact