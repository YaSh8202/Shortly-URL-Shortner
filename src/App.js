import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import ShortedLinks from "./components/Shortner/ShortedLinks";
import ShortnerForm from "./components/Shortner/ShortnerForm";
import GrayLayout from "./components/UI/GrayLayout";

function App() {
  const [shortedUrls, setShortedUrls] = useState([]);

  return (
    <>
      <NavBar />
      <Hero />
      <GrayLayout>
        <ShortnerForm onNewUrl={setShortedUrls} />
        <ShortedLinks links={shortedUrls} />
      </GrayLayout>
    </>
  );
}

export default App;
