import React, { useState } from "react";
import axios from "axios";

const EmailVerify = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [sendOTP, setSendOTP] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/send-verify-otp",
        { email: email.trim() },
        { withCredentials: true }
      );

      if (res.data.success) {
        setSendOTP(true);
        setSuccessMsg("OTP sent! Check your email.");
      } else {
        setError(res.data.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/verify-otp",
        { email: email.trim(), otp: otp.trim() },
        { withCredentials: true }
      );

      if (res.data.success) {
        setSuccessMsg("Email verified successfully!");
        setSendOTP(false);
        setOtp("");
      } else {
        setError(res.data.message || "Invalid OTP.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 font-nunito p-4">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
        <h1 className="text-2xl font-bold text-teal mb-4 text-center">
          Email Verification
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm text-center">
            {error}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm text-center">
            {successMsg}
          </div>
        )}

        {!sendOTP ? (
          <form onSubmit={handleSendOTP} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="block w-full py-3 px-4 text-dark-teal border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              required
            />
            <button
              type="submit"
              className="bg-gold text-dark-teal py-3 rounded-lg font-bold hover:bg-dark-gold transition duration-300"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="flex flex-col gap-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="block w-full py-3 px-4 text-dark-teal border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              required
            />
            <button
              type="submit"
              className="bg-teal text-white py-3 rounded-lg font-bold hover:bg-dark-teal transition duration-300"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailVerify;
