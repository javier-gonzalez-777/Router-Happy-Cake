import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

import HomePage  from "./views/HomePage";
import ContactoPage from "./views/ContactoPage";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contacto" element={<ContactoPage />}/>
          <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
