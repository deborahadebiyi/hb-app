"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./_actions";
import { AnimatePresence, motion } from "framer-motion";

export default function Onboarding() {
  const [error, setError] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    location: "",
    providerName: "",
    dob: "",
  });
  const steps = ["Role Selection", "Basic Info", "Contact Info", "Confirm"];

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (role === "customer" && step === 1) {
      setStep(3);
    } else {
      if (step < steps.length - 1) setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (role === "customer" && step === 3) {
      setStep(1);
    } else {
      if (step > 0) setStep(step - 1);
    }
  };

  const onboardingRedirect = () => {
    if (role === "serviceprovider") {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    console.log("Submitted data:", formData);
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const res = await completeOnboarding(data);

      if (res?.message) {
        await user?.reload();
        // router.push("/subscribe");
      }

      if (res?.error) {
        setError(res?.error);
      }
    } catch (err) {
      console.error("Onboarding failed:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <div className="mb-6">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <motion.div
            className="h-2 bg-black rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-center mt-2 font-medium">
          Step {step + 1} of {steps.length} - {steps[step]}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <p className="font-medium">Continue sign up as:</p>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={role === "customer"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <span>Customer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="serviceprovider"
                    checked={role === "serviceprovider"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <span>Service provider</span>
                </label>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {role === "customer" && (
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              )}
              {role === "serviceprovider" && (
                <>
                  <input
                    type="text"
                    name="providerName"
                    placeholder="Company Name"
                    value={formData.providerName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </>
              )}
            </motion.div>
          )}

          {step === 2 && role === "serviceprovider" && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <p>
                  <strong>Role:</strong> {role}
                </p>
                {role === "serviceprovider" && (
                  <p>
                    <strong>Company Name:</strong> {formData.providerName}
                  </p>
                )}
                {role === "serviceprovider" && (
                  <p>
                    <strong>Location:</strong> {formData.location}
                  </p>
                )}
                {role === "customer" && (
                  <p>
                    <strong>Date of Birth:</strong> {formData.dob}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 0}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={step === 0 && !role}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              onClick={onboardingRedirect}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      {error && <p className="text-red-600">Error: {error}</p>}
    </div>
  );
}
