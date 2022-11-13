import "./HomeScreen.css";
import Navigation from "../Navigation";
import MyCards from "../MyCards";
import OtherCards from "../OtherCards";
import Footer from "../Footer";
import CreateCardForm from "../CreateCardForm";

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
