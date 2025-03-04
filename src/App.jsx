import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ThemeProvider from "./context/ThemeContext";
function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
