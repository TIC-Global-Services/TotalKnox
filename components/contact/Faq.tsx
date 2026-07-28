"use client";

import { useState } from "react";

type Q = { q: string; a: string };
type Group = { label: string; items: Q[] };

const groups: Group[] = [
  {
    label: "Order",
    items: [
      {
        q: "How long will it take to get my orders?",
        a: "Orders are processed within 1–2 business days. Standard shipping typically arrives in 5–7 business days, with express options available at checkout.",
      },
      {
        q: "Do I have to pay customs fees for my order?",
        a: "Customs duties and taxes may apply for international orders and are the responsibility of the buyer. Any fees assessed by your local customs office are not included in our pricing.",
      },
      {
        q: "Can I change my delivery method after placing an order?",
        a: "If your order hasn't shipped yet, reach out to our support team and we'll do our best to update the delivery method. Once dispatched, the carrier becomes the point of contact.",
      },
    ],
  },
  {
    label: "Shipping & Returns",
    items: [
      {
        q: "Where do you ship?",
        a: "We ship worldwide. Delivery times and available carriers vary by region — see checkout for the options available to your address.",
      },
      {
        q: "What is your return policy?",
        a: "Unused items in original packaging can be returned within 30 days of delivery. Final-sale items and personalized products are not eligible.",
      },
      {
        q: "How will I be refunded?",
        a: "Refunds are issued to the original payment method within 5–10 business days of us receiving and inspecting the return.",
      },
    ],
  },
];

function Row({ item }: { item: Q }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/15">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-black/70"
      >
        <span className="text-base md:text-xl uppercase tracking-tight text-black">
          {item.q}
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 pr-10 text-sm leading-relaxed text-black/70">
          {item.a}
        </p>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-5">
        <span className="inline-flex items-center gap-2 text-xl uppercase tracking-tight text-black"><span className="inline-block h-2.5 w-2.5 bg-black" />We're Here to Help</span>
        <h2 className="mt-6 font-display text-3xl uppercase leading-tight tracking-tight text-black md:text-[2.5rem]">
          Frequently Asked
          <br />
          Questions
        </h2>
        <p className="text-xl uppercase leading-tight tracking-tight text-black mt-6">
          Looking for a quick answer? Our frequently asked questions are
          regularly updated for our most common customer queries. Contact us if
          you don't find what you are looking for.
        </p>
      </div>

      <div className="md:col-span-7">
        {groups.map((g) => (
          <div key={g.label} className="mb-12 last:mb-0">
            <h3 className="font-display text-2xl uppercase tracking-tight text-black border-b border-black/40 pb-4">
              {g.label}
            </h3>
            <div>
              {g.items.map((it) => (
                <Row key={it.q} item={it} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
