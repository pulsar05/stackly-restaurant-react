import { useState } from "react";

function Reservation() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.date ||
      !form.guests
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    if (form.phone.length !== 10) {
      setMessage("Enter a valid 10 digit phone number.");
      return;
    }

    setMessage(
      `Table reserved successfully for ${form.name}!`
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
    });
  };

  return (
    <section className="form-page">

      <div className="section-title">

        <span>RESERVATION</span>

        <h1>
          Reserve Your Table
        </h1>

        <p>
          Make your dining experience special.
        </p>

      </div>

      <form
        className="restaurant-form"
        onSubmit={handleSubmit}
      >

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />

        <input
          name="guests"
          type="number"
          placeholder="Number of Guests"
          value={form.guests}
          onChange={handleChange}
        />

        <button className="primary-btn">
          Reserve Table
        </button>

        {message && (
          <p className="form-message">
            {message}
          </p>
        )}

      </form>

    </section>
  );
}

export default Reservation;