import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, CheckIcon } from "lucide-react";
import axios from "axios";
import { AppContent } from '../context/AppContent';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = "http://localhost:3001";

// ------------------- Form Step Wrapper -------------------
const FormStepWrapper = ({ step, title, subtitle, children, onBack }) => (
  <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl relative">
    <div className="flex justify-between w-full mb-8 space-x-2 pt-4">
      {[1, 2, 3, 4].map((s) => (
        <div
          key={s}
          className={`h-2 w-1/4 rounded-full ${s <= step ? "bg-gold shadow-inner" : "bg-gray-200"}`}
        ></div>
      ))}
    </div>
    <h1 className="text-4xl font-extrabold text-teal mb-2 text-center">{title}</h1>
    <p className="text-base text-gray-500 mb-8 text-center">{subtitle}</p>
    {children}
    {step > 1 && (
      <button
        onClick={onBack}
        className="mt-6 mx-auto text-dark-teal border-b-2 border-gold hover:text-gold transition duration-150 flex items-center"
        aria-label="Go back to the previous step"
      >
        <ChevronLeftIcon className="w-6 h-6 mr-2" /> Go back
      </button>
    )}
  </div>
);

// ------------------- Step Components -------------------
// (UserTypeStep, EmailStep, NameStep, StatusStep remain unchanged)

// ------------------- Password Step -------------------
const PasswordStep = ({ onBack, setFormData, formData }) => {
  const [password, setPassword] = useState(formData.password || "");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const passwordStrength = (p) => {
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[a-z]/.test(p)) score++;
    if (/\d/.test(p)) score++;
    return score;
  };

  const strength = passwordStrength(password);
  const strengthText = strength === 4 ? "Strong" : strength >= 2 ? "Medium" : "Weak";
  const strengthColor = strength === 4 ? "text-green-600" : strength >= 2 ? "text-yellow-600" : "text-red-600";
  const barColor = strength === 4 ? "bg-green-500" : strength >= 2 ? "bg-yellow-500" : "bg-red-500";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (strength < 2) return toast.error("Password must be at least medium strength.");

    setFormData(prev => ({ ...prev, password }));
    setLoading(true);

    try {
      const res = await axios.post(
        backendUrl + "/api/auth/register", {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber || "",
        userStatus: formData.userStatus,
        password
      });

      if (res.data.success) {
        setIsLoggedin(true);
      
        // Get the user object from getUserData
        const user = await getUserData();

        toast.success(`Welcome ${user?.firstName || "User"}, Your registration is complete!`);
        setTimeout(() => {
          navigate("/login");
        }, 2000); // 2 seconds delay for toast visibility
      } else {
        toast.error(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormStepWrapper step={4} title="Secure your account" subtitle="Create a strong password to protect your privacy." onBack={onBack}>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
        <div className="relative w-full mb-4 group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full py-3 px-0 text-lg text-dark-teal bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer"
            placeholder=" "
            required
          />
          <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-focus:text-gold peer-focus:-translate-y-6 peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-0">
            Password
          </label>
        </div>
        <div className="w-full text-left text-sm">
          <div className="h-1 bg-gray-200 rounded-full mb-1">
            <div className={`h-full rounded-full transition-all duration-300 ${barColor}`} style={{ width: `${(strength/4)*100}%` }}></div>
          </div>
          <p className={`font-semibold ${strengthColor}`}>
            Strength: {strengthText} {strength < 4 && <span className="text-gray-500">(8+ chars, Upper, Lower, Number)</span>}
          </p>
        </div>
        <button type="submit" disabled={loading} className="w-full rounded-full py-3 px-4 text-lg font-bold shadow-md bg-gold text-dark-teal hover:bg-dark-gold transition duration-300 mt-6">
          {loading ? "Registering..." : "Finish Registration"}
        </button>
      </form>
    </FormStepWrapper>
  );
};

// ------------------- Main Register Component -------------------
const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleSelectClient = () => setCurrentStep(1);
  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handleBack = () => setCurrentStep(prev => prev - 1);

  const renderStep = () => {
    const stepProps = { onNext: handleNext, onBack: handleBack, setFormData, formData };
    switch (currentStep) {
      case 0: return <UserTypeStep onSelectClient={handleSelectClient} />;
      case 1: return <EmailStep {...stepProps} />;
      case 2: return <NameStep {...stepProps} />;
      case 3: return <StatusStep {...stepProps} />;
      case 4: return <PasswordStep {...stepProps} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-50 font-nunito p-4">
      <div className="absolute top-0 w-full max-w-7xl flex justify-start py-6 px-4">
        <h1 className="text-3xl font-extrabold text-teal">Lucid Path</h1>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        {renderStep()}
      </div>
    </div>
  );
};

export default Register;
