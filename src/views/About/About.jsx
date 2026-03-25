import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./About.css"
function About() {
  return (
    <div>
      <Navbar active="about"/>
      <BodyContainer>
        <h1>About Us</h1>
      </BodyContainer>
      
      <Footer />
    </div>
  );
}

export default About