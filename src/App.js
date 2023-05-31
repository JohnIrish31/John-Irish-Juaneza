import './App.css';
import { AppNavbar } from "./components/AppNavbar"
import { Banner } from "./components/Banner"
import { AboutMe } from "./components/AboutMe"
import { Projects } from "./components/Projects"
import { Tools } from "./components/Tools"
import { ContactMe } from "./components/ContactMe"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Banner />
      <AboutMe />
      <Projects />
      <Tools />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
