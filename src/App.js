import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import SinglePriceGrid from "./components/SinglePriceGrid/SinglePriceGrid";
import { Routes, Route } from "react-router-dom";
import './styles/globals.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/four-card-feature-section' element={<FeaturedSection />} />
        <Route path='/single-price-grid' element={<SinglePriceGrid />} />
      </Routes>
    </>
  );
}




export default App;
