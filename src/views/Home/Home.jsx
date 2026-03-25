import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import ProductCard from "../../components/ProductCard/ProductCard";
import { PRODUCTS } from "../../config";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar active="home" />
      <BodyContainer>
        <div className="products-container">
        {PRODUCTS.map((product) => {
          return<productCard product={product} />;
      
        })}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;