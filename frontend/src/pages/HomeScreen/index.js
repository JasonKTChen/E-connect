import "./HomeScreen.css";
import Navigation from "../../components/Navigation";
import MyCards from "../../components/MyCards";
import OtherCards from "../../components/OtherCards";
import Footer from "../../components/Footer";
import CreateCardForm from "../../components/CreateCardForm";

const HomeScreen = () => {
  return (
    <>
      <Navigation />
      <MyCards />
      <OtherCards />
      <CreateCardForm />
      <Footer />
    </>
  );
};

export default HomeScreen;
