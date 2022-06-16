import { useEffect, useState } from "react";
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

  return (
    <>
      <NavBar />
      <Hero />
      <GrayLayout>
        <ShortnerForm onNewUrl={setShortedUrls} />
        <ShortedLinks links={shortedUrls} />
        <Stats />
      </GrayLayout>
    </>
  );
}

export default App;
