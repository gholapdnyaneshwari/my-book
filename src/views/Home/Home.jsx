import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import ProductCard from "../../components/ProductCard/ProductCard";
import { PRODUCTS } from "../../config";
import "./Home.css";
import PageTitle from "../../components/PageTitle/PageTitle";

function Home() {
  return (
    <div>
      <Navbar active="home" />
      <PageTitle title="Wellcome to Our Ice Cream Shop"
      subtitle={"We are the best IceCream providers in India"}/>

      <BodyContainer>
        <div className="products-container">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;