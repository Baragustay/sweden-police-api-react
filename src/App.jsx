import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/pages/home.jsx";
import CrimeSearch from "./assets/components/pages/crimeSearch.jsx";
import Stats from "./assets/components/pages/stats.jsx";
import CountyDetail from "./assets/components/pages/countyDetail.jsx";
import Om from "./assets/components/pages/om.jsx";
import ScrollToTop from "./assets/components/scrollToTop";







export default function App() {
  const [events, setEvents] = useState([]);//events=value setEvents=value that updates data, prepping an empty array that i will populate with json

  useEffect(() => {
    fetch("https://polisen.se/api/events")
      .then(response => {
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.log("Something went wrong:", error);
      });
  }, []);

  return (//Router for the whole web
    <BrowserRouter basename="/~bagu0001/JRS200/polis-app/">      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home events={events} />} />
        <Route path="/crimeSearch" element={<CrimeSearch events={events} />} />{/* We are passing the events state as a prop to CrimeSearch */}
        <Route path="/stats" element={<Stats events={events} />} />
        <Route path="/countyDetail/:countyName" element={<CountyDetail events={events} />} />
        <Route path="/om" element={<Om />} />
      </Routes>
    </BrowserRouter>

  );
}