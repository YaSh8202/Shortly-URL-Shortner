import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import ShortedLinks from "./components/Shortner/ShortedLinks";
import ShortnerForm from "./components/Shortner/ShortnerForm";
import Stats from "./components/Stats/Stats";
import GrayLayout from "./components/UI/GrayLayout";
import { UserAuth } from "./context/AuthContext";
import { db } from "./firebase";

function App() {
  const [shortedUrls, setShortedUrls] = useState([]);
  const { user } = UserAuth();
  console.log("app user", user);
  useEffect(() => {
    const getUrls = () => {
      if (!user?.uid) return;
      const unsub = onSnapshot(doc(db, "shortedUrls", user.uid), (doc) => {
        setShortedUrls(doc.data().urls);
        console.log(doc.data().urls);
      });
      return () => {
        unsub();
      };
    };
    user?.uid && getUrls();
  }, [user]);

  const removeLink = async (url) => {
    console.log(url);
    try {
      await updateDoc(doc(db, "shortedUrls", user.uid), {
        urls: arrayRemove({ ...url }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <Hero />
      <GrayLayout>
        <ShortnerForm shortedUrls={shortedUrls} onNewUrl={setShortedUrls} />

        {user && <ShortedLinks links={shortedUrls} removeLink={removeLink} />}
        <Stats />
        <Boost />
        <Footer />
      </GrayLayout>
    </>
  );
}

export default App;
