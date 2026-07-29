"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
      <div className="md:col-span-5">
        <span className="inline-flex items-center gap-2 text-xl uppercase tracking-tight text-black"><span className="inline-block h-2.5 w-2.5 bg-black" />Get In Touch</span>
        <h2 className="mt-6 font-display text-3xl uppercase leading-tight tracking-tight text-black md:text-[2.5rem]">
          We'd Love to Hear
          <br />
          From You
        </h2>
        <p className="text-xl uppercase leading-tight tracking-tight text-black mt-6">
          We welcome your feedback, suggestions, and recommendations. Get in
          touch with our team, we're always looking to improve your
          experience.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (name && email && message) setSent(true);
        }}
        className="md:col-span-7"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full border border-black/50 rounded-lg bg-white px-4 py-4 text-base uppercase tracking-tight text-black placeholder:text-black/50 focus:border-black focus:outline-none"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full border border-black/50 rounded-lg bg-white px-4 py-4 text-base uppercase tracking-tight text-black placeholder:text-black/50 focus:border-black focus:outline-none"
          />
        </div>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          rows={6}
          className="w-full border border-black/50 rounded-lg bg-white px-4 py-4 text-base font-semibold uppercase tracking-[0.18em] text-black placeholder:text-black/50 focus:border-black focus:outline-none mt-4 resize-none"
        />
        <button type="submit" className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base uppercase tracking-tight transition bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black mt-6 px-10">
          {sent ? "Message Sent" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
