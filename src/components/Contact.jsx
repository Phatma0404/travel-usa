import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useInView } from "../hooks/useScrollAnimation";

const SERVICE_ID = "service_3k3xqxs";
const TEMPLATE_ID = "template_y0y1ayy";
const PUBLIC_KEY = "gBkvxHhjzPTBXrpVd";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [headerRef, headerInView] = useInView();
  const [cardsRef, cardsInView] = useInView();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="relative bg-slate-900 py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499566727020-881da110a0b0?q=80&w=2143&auto=format&fit=crop')",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-brand-400 font-semibold mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl font-extrabold text-white flex items-center justify-center gap-3">
            Send Us a <BiSolidPlaneAlt className="text-brand-400" /> Message
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div ref={cardsRef} className={`flex flex-col gap-6 justify-center transition-all duration-700 delay-150 ${
            cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="bg-brand-500/20 p-3 rounded-xl">
                <FaMapMarkerAlt className="text-brand-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-white/60 text-sm">
                  New York City, NY 10001, USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="bg-brand-500/20 p-3 rounded-xl">
                <FaPhoneAlt className="text-brand-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <p className="text-white/60 text-sm">+1 (212) 555-0199</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="bg-brand-500/20 p-3 rounded-xl">
                <FaEnvelope className="text-brand-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-white/60 text-sm">hello@nycitytravel.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your phone (optional)"
              className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              rows={5}
              className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 transition-colors text-white font-semibold py-4 rounded-xl tracking-wide"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-success-400 text-sm text-center">
                Message sent! We will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-danger-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
