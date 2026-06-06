"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // temporary (later connect Resend or Formspree)
    alert("Request sent. We will contact you soon.");
  };

  return (
    <section id="contact" className="section-padding bg-[var(--light)]">
      <div className="container-custom max-w-3xl">
        <div className="text-center">
          <h2 className="section-title">Request a Free Estimate</h2>

          <p className="section-subtitle mx-auto">
            Tell us about your garage door issue and we will get back to you quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded-xl border"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 rounded-xl border"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl border"
            onChange={handleChange}
          />

          <input
            name="service"
            placeholder="Service Needed"
            className="w-full p-3 rounded-xl border"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Describe your issue"
            className="w-full p-3 rounded-xl border h-32"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}