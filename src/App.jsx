import { BrowserRouter, Route, Routes , Navigate} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ThemeProvider from "./context/ThemeContext";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="404.html" />} /> */}
        </Routes>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
