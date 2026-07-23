import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Footer from "./components/Footer";
import Why from "./components/Why";
import Admire from "./components/Admire";
import Wondering from "./components/Wondering";
import Court from "./components/Court";
function App() {
  return (
    <div className="bg-[#fff8f5] min-h-screen">
      <Navbar />
      <Hero />
      <Why />
      <Admire />
      <Wondering />
      <Letter />
      <Court />
      <Footer />
    </div>
  );
}

export default App;