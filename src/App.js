import "./App.css";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
        <Faq />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}

export default App;
