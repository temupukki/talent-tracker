"use client";

import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldSet, FieldLabel } from "@/components/ui/field";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      toast.success(" Registration successful! You can now login.");
      console.log("User registered:", data);

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        confirm_password: "",
      });
    } catch (err: unknown) {
      toast.error(err.message);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-[40%_60%] min-h-screen">
      <div className="bg-orange-500"></div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            BECOME AN EXCLUSIVE MEMBER
          </h1>
          <p className="uppercase text-gray-600 mt-2">
            Sign up and join the partnership
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
          <FieldGroup className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field>
                <FieldLabel className="uppercase text-sm font-medium mb-2 block">
                  First Name *
                </FieldLabel>
                <Input
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 py-7 px-4 rounded-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all "
                  placeholder="Enter your first name"
                  required
                />
              </Field>

              <Field>
                <FieldLabel className="uppercase text-sm font-medium mb-2 block">
                  Last Name *
                </FieldLabel>
                <Input
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 py-7 px-4 rounded-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Enter your last name"
                  required
                />
              </Field>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field>
                <FieldLabel className="uppercase text-sm font-medium mb-2 block">
                  Email Address *
                </FieldLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 py-7 px-4 rounded-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </Field>

              <Field>
                <FieldLabel className="uppercase text-sm font-medium mb-2 block">
                  Phone Number
                </FieldLabel>
                <Input
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 py-7 px-4 rounded-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="09**********"
                />
              </Field>
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field>
                <FieldLabel className="uppercase text-sm font-medium mb-2 block">
                  Password *
                </FieldLabel>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 py-7 px-4 rounded-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Create a password"
                  required
                />
              </Field>

              <Field>
                <FieldLabel className="uppercase text-sm font-medium mb-2 block">
                  Confirm Password *
                </FieldLabel>
                <Input
                  name="confirm_password"
                  type="password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 py-7 px-4 rounded-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Confirm your password"
                  required
                />
              </Field>
            </div>
          </FieldGroup>
          <div className="flex items-center gap-3 mt-5">
            <Checkbox id="terms" className="w-6 h-6 border-black" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 px-6 bg-blue-900 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              "CREATE MY ACCOUNT"
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
