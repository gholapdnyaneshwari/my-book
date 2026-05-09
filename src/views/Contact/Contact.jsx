import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./Contact.css";
import PageTitle from "../../components/PageTitle/PageTitle";

function Contact() {
  return (
    <div>
      <Navbar active="contact"/>
      <PageTitle title="Get in touch with us" subtitle={"We are just one call away...."}/>
      <BodyContainer>
      </BodyContainer>
      
      <Footer />
    </div>
  );
}

export default Contact