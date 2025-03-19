"use client";

import { useState } from "react";
import { Button } from "./Button";

/**
 * Email subscription form component
 * Client component for handling form state and submission
 */
export default function EmailSubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you! We\'ll keep you updated.');
        setSubmitted(true);
        setEmail('');
      } else {
        setMessage(data.error || 'Error submitting email. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full mb-12">
      {submitted ? (
        <div className="p-4 rounded bg-[#78A66B33]">
          <p className="text-lg font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-4 py-3 border-2 bg-transparent focus:outline-none transition-all duration-100"
            style={{
              borderColor: "#78A66B",
              borderWidth: "2px",
            }}
          />
          <Button variant="primary" type="submit">
            SUBSCRIBE
          </Button>
        </form>
      )}
    </div>
  );
}
