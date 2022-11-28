import "./HomeScreen.css";
import Navigation from "../../components/Navigation";
import MyCards from "../../components/MyCards";
import OtherCards from "../../components/OtherCards";
import Footer from "../../components/Footer";
import CreateCardForm from "../../components/CreateCardForm";
import Board from "../../components/Board";

const HomeScreen = () => {
  return (
    <>
      <Navigation />
      <Board />
      <MyCards />
      <OtherCards />
      <CreateCardForm />
      <Footer />
    </>
  );
};

export default HomeScreen;
