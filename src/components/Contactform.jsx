import React, { useState } from "react";

export default function Contactform() {
  const [step, setStep] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch("https://my-portfolio-backend-qb87.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (res.ok) {
        setSuccessMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
        setStep(1);
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setErrorMessage("Oops! Something went wrong. Please try again.");
        setTimeout(() => setErrorMessage(""), 5000);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Server error. Please try again later.");
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black text-white relative"
      style={{
        backgroundImage:
          "url('https://getwallpapers.com/wallpaper/full/6/c/d/129192.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-11/12 lg:w-9/12 mx-auto gap-8">
        {/* Left Side Heading */}
        <div className="flex flex-col justify-center w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-left">
          <h1 className="bebas-neue-regular text-4xl sm:text-4xl md:text-9xl lg:text-10xl font-extrabold leading-tight">
            Ready? <br />
            <span className="text-[#ff4925]">Let's Talk</span>
          </h1>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 bg-[#110f0f] border border-[#747373] rounded-2xl p-6 sm:p-8 shadow-lg">
          {/* Step Indicator */}
          {/* <div className="text-sm mb-4 sm:mb-6 text-[#34ebd2] font-medium">
            {step}/2 Steps
          </div> */}
          {/* Text */}
          <div className="oswald-font text-4xl mb-4 sm:mb-6 text-white font-extrabold">
            Drop a mail, Lets Make it Happen.
          </div>

          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 rounded-lg bg-black border border-gray-700 focus:border-[#ff4925] focus:ring-2 focus:ring-[#ff4925] outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 rounded-lg bg-black border border-gray-700 focus:border-[#ff4925] focus:ring-2 focus:ring-[#ff4925] outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff4925] text-black font-bold py-2.5 sm:py-3 rounded-lg hover:bg-white transition"
              >
                Continue
              </button>
            </form>
          )}

          {step === 2 && (
            <form
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">
                  Explain your idea *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 rounded-lg bg-black border border-gray-700 focus:border-[#ff4925] focus:ring-2 focus:ring-[#ff4925] outline-none"
                  rows="4"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                <input type="checkbox" required />
                <p>
                  I accept the{" "}
                  <a href="#" className="text-[#ff4925] underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#ff4925] underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full sm:w-1/2 bg-gray-700 text-white font-bold py-2.5 sm:py-3 rounded-lg hover:bg-gray-600 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full sm:w-1/2 bg-[#ff4925] text-black font-bold py-2.5 sm:py-3 rounded-lg hover:bg-cyan-400 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* ✅ Loading Modal */}
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-center animate-pulse">
                <div className="text-5xl mb-2">⏳</div>
                <h2 className="text-xl font-bold">Sending your message...</h2>
              </div>
            </div>
          )}

           {/* ✅ Success Message */}
            {successMessage && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-center animate-fadeIn">
                  <div className="text-5xl mb-2">✅</div>
                  <h2 className="text-xl font-bold">{successMessage}</h2>
                </div>
              </div>
            )}

            {/* ✅ Error Modal */}
            {errorMessage && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-center animate-fadeIn">
                  <div className="text-5xl mb-2">❌</div>
                  <h2 className="text-xl font-bold">{errorMessage}</h2>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
