import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/constant/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
