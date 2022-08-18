import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="four-card-feature-section" element={<FeaturedSection />} />
      </Routes>
    </>
  );
}

export default App;
