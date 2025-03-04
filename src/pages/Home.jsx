import TopSection from "../components/TopSection";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Cases from "../components/Cases";
import Process from "../components/Process";
import ServicesMore from "../components/ServicesMore";
import  { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
    const { isDark } = useContext(ThemeContext);
  
  return (
    <main className={`main ${isDark? "dark": "" }`}>
      <TopSection />
      <AboutMe />
      <Services />
      <Cases />
      <Process />
      <ServicesMore />
    </main>
  );
};
export default Home;
