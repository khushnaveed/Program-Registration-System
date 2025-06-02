import { useState } from "react";
import HeroSection from "../components/HeroSection";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending...");

    setTimeout(() => {
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSending(false);
    }, 2000);
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We’re here to assist you — reach out anytime"
        backgroundImage="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-8">
        <div className="flex-1">
          <h2 className="text-4xl mb-4 text-blue-900 font-bold">
            Get In Touch
          </h2>
          <p className="text-justify text-gray-600">
            We’re excited to connect with you! Whether you have questions about
            admissions, academic programs, campus events, or need support, our
            team is ready to assist. Feel free to reach out by phone, email, or
            visit us on campus. Your inquiries and feedback help us improve and
            grow as a university community. We look forward to hearing from you!
          </p>
          <div className="mt-8 space-y-2">
            <p className="flex items-center text-[13px]">
              <MapPin className="text-blue-900 mr-2" size={16} /> 123 University
              Blvd, Germany
            </p>
            <p className="flex items-center text-[13px]">
              <Phone className="text-blue-900 mr-2" size={16} /> +41 61 000 0000
            </p>
            <p className="flex items-center text-[13px]">
              <Mail className="text-blue-900 mr-2" size={16} /> info@hopnuni.edu
            </p>
          </div>
        </div>

        <div className="max-w-2xl w-full mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-400 rounded"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-400 rounded"
              />
            </div>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded"
            />

            <textarea
              id="message"
              name="message"
              placeholder="Write what do you want"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-2 border border-gray-400 rounded"
            ></textarea>

            <button
              type="submit"
              className="px-8 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-950 text-sm transition-colors"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
          {statusMessage && <p className="mt-4">{statusMessage}</p>}
        </div>
      </div>

      <div className="w-full mt-12">
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5170285.136027102!2d0.4548972257560198!3d50.7467736452762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sde!4v1748867092696!5m2!1sen!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
