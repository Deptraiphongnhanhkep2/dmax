import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsEvents from "./components/News";
import BusinessSection from "./components/BusinessSection";
import AboutInvestor from "./components/Investor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsEvents />
      <BusinessSection />
      <AboutInvestor />
      <Footer />
    </>
  );
}

export default App;
