import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./About.css";
import PageTitle from "../../components/PageTitle/PageTitle";

function About() {
  return (
    <div>
      <Navbar active="about"/>
      <PageTitle title="Learn more about us"
      subtitle={"We are dedicated to providing the best service."}/>
      <BodyContainer>
      </BodyContainer>
      
      <Footer />
    </div>
  );
}

export default About