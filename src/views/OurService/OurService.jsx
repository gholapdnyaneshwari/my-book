import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./OurService.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import { OUR_SERVICES } from "./../../config";



function OurService() {
  return (
    <div>
      <Navbar active="ourservice" />
      <PageTitle title="OurService" subtitle={"We are commited to provide best experience at our stores"} />
      <BodyContainer>
        <div className="services-container">
        {OUR_SERVICES.map((serviceDetail, index) => {
        return (
        <div key={index} className="service-card">
          {serviceDetail.icon}
          <h2 className="service-card-title">
            {serviceDetail.title}</h2>
          <p className="service-card-description">
            {serviceDetail.description}
          </p>

        </div>
        );
      })}
      </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default OurService