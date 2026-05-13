import { useState, useEffect } from "react";

const steps = ["hero","intent","loading","itinerary","rooms","upsells","summary"];

export default function App() {
  const [step, setStep] = useState("hero");
  const [trip, setTrip] = useState({ destination:"Bahamas", travelers:"Couple" });
  const [selection, setSelection] = useState({});

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= steps.length - 1) return clearInterval(interval);
      setStep(steps[i + 1]);
      i++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const calculateTotal = () => {
    let base = selection.room?.price || 800;
    return base;
  };

  return (
    <div className="app">

      {step === "hero" && (
        <section className="hero">
          <h1>Design Your Perfect Escape</h1>
          <p>AI-curated journeys inspired by Royal Caribbean</p>
        </section>
      )}

      {step === "intent" && (
        <section className="card center">
          <h2>Understanding Your Trip...</h2>
        </section>
      )}

      {step === "loading" && <Loading />}

      {step === "itinerary" && (
        <section className="card">
          <h2>AI Curated Itinerary</h2>
          <p>Personalized Bahamas getaway</p>
          <ul>
            <li>VIP Check-in Experience</li>
            <li>Private Beachfront Setup</li>
            <li>Sunset Dining Reservation</li>
          </ul>
        </section>
      )}

      {step === "rooms" && (
        <section className="container">
          <h2>Recommended Stays</h2>

          <div className="room-card">
            https://images.unsplash.com/photo-1566073771259-6a8506099945
            <div>
              <h3>Ocean View Suite</h3>
              <p>$450/night</p>
            </div>
          </div>

          <div className="room-card">
            https://images.unsplash.com/photo-1582719478250-c89cae4dc85b
            <div>
              <h3>Luxury Villa</h3>
              <p>$680/night</p>
            </div>
          </div>

        </section>
      )}

      {step === "upsells" && (
        <section className="card">
          <h2>Enhance Your Experience</h2>
          <ul>
            <li>Spa Retreat</li>
            <li>Private Excursion</li>
            <li>VIP Dining</li>
          </ul>
        </section>
      )}

      {step === "summary" && (
        <section className="card">
          <h2>Your Journey</h2>
          <p>Destination: Bahamas</p>
          <p>Stay: Ocean View Suite</p>
          <h3>Total: ${calculateTotal()}</h3>
          <button className="primary">Complete Booking</button>
        </section>
      )}
    </div>
  );
}

function Loading() {
  const messages = [
    "Analyzing traveler profile...",
    "Matching destinations...",
    "Building itinerary...",
    "Optimizing pricing..."
  ];

  const [text, setText] = useState(messages[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(messages[i]);
      i++;
      if (i >= messages.length) clearInterval(interval);
    }, 700);
  }, []);

  return (
    <section className="center">
      <h2>{text}</h2>
      <div className="spinner"></div>
    </section>
  );
}
