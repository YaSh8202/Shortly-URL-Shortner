import { useEffect, useState } from "react";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import ShortedLinks from "./components/Shortner/ShortedLinks";
import ShortnerForm from "./components/Shortner/ShortnerForm";
import Stats from "./components/Stats/Stats";
import GrayLayout from "./components/UI/GrayLayout";

function App() {
  const [shortedUrls, setShortedUrls] = useState([]);

  useEffect(() => {
    setShortedUrls(JSON.parse(localStorage.getItem("shortedUrls")) || []);
  }, []);


  const removeLink = (url) => {
    const newLinks = shortedUrls.filter(link => link.url !== url);
    setShortedUrls(newLinks);
    localStorage.setItem(
      "shortedUrls",
      JSON.stringify(newLinks)
    );
  }

  return (
    <>
      
      <NavBar />
      <Hero />
      <GrayLayout>
        <ShortnerForm shortedUrls={shortedUrls} onNewUrl={setShortedUrls} />
        <ShortedLinks links={shortedUrls} removeLink={removeLink} />
        <Stats />
        <Boost />
        <Footer />
      </GrayLayout>
    </>
  );
}

export default App;
