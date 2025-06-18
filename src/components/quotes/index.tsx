"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, User, Mail, Phone, Settings, X } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { useStore } from "@/store/useStore";
import emailjs from "@emailjs/browser";

const GetQuotes = () => {
  const { isGetQuotesOpen, closeGetQuotes } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          service_type: formData.serviceType,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Quote Request Sent!", {
        description: "We'll contact you within 24 hours with your free quote.",
        duration: 5000,
        position: "top-center",
        style: {
          background: "white",
          color: "#1f2937",
          border: "1px solid #e5e7eb",
        },
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });
      closeGetQuotes();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send quote request", {
        description: "Please try again later or contact us directly.",
        duration: 5000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isGetQuotesOpen) return null;

  return (
    <>
      <Toaster richColors closeButton />
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000]" />

      {/* Modal Container */}
      <div
        className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6 md:p-8"
        onClick={closeGetQuotes}
      >
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            onClick={closeGetQuotes}
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <div className="p-6 md:p-8">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#018d43] via-[#007436] to-[#01401e] bg-clip-text text-transparent mb-4">
                Get Your Free Quote
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Transform your space with our professional cleaning services.
                Get a personalized quote in less than 24 hours.
              </p>
            </div>

            {/* Form Container */}
            <div className="relative">
              {/* Animated background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#018d43]/10 to-[#007436]/10 rounded-3xl blur-xl animate-pulse"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#018d43] to-[#007436] rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      Personal Information
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group transform hover:scale-105 transition-all duration-300">
                      <Label
                        htmlFor="name"
                        className="text-sm font-semibold text-gray-700 mb-3 block flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 md:h-14 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300 group-hover:border-gray-300 bg-white/70 backdrop-blur-sm text-base md:text-lg"
                      />
                    </div>

                    <div className="group transform hover:scale-105 transition-all duration-300">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-gray-700 mb-3 block flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 md:h-14 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300 group-hover:border-gray-300 bg-white/70 backdrop-blur-sm text-base md:text-lg"
                      />
                    </div>

                    <div className="group transform hover:scale-105 transition-all duration-300 md:col-span-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-semibold text-gray-700 mb-3 block flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(03) 1234 5678"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12 md:h-14 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300 group-hover:border-gray-300 bg-white/70 backdrop-blur-sm text-base md:text-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Details Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#018d43] to-[#007436] rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      Service Details
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>

                  <div className="group transform hover:scale-105 transition-all duration-300">
                    <Label
                      htmlFor="serviceType"
                      className="text-sm font-semibold text-gray-700 mb-3 block flex items-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Service Type *
                    </Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="h-12 md:h-14 w-full border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300 group-hover:border-gray-300 bg-white/70 backdrop-blur-sm px-6 text-base md:text-lg"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="commercial">Business & Corporate</option>
                      <option value="office">
                        Healthcare & Social Services
                      </option>
                      <option value="medical">Hospitality & Leisure</option>
                      <option value="residential">Industrial</option>
                      <option value="residential">
                        Residential & Specialized
                      </option>
                      <option value="residential">Sustainable Practices</option>
                      <option value="residential">Products</option>
                      <option value="residential">Others</option>
                    </select>
                  </div>
                </div>

                {/* Additional Details Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#018d43] to-[#007436] rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">?</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      Additional Details
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>

                  <div className="group transform hover:scale-105 transition-all duration-300">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-700 mb-3 block"
                    >
                      Tell us about your cleaning requirements
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your specific cleaning needs, frequency, special requirements, or any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300 group-hover:border-gray-300 resize-none bg-white/70 backdrop-blur-sm text-base md:text-lg p-4 md:p-6"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 md:h-16 text-lg md:text-xl font-bold bg-gradient-to-r from-[#018d43] via-[#007436] to-[#01401e] hover:from-[#018d43] hover:via-[#007436] hover:to-[#01401e] rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-4 animate-pulse hover:animate-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 md:w-6 md:h-6" />
                    {isSubmitting ? "Sending..." : "Get My Free Quote Now"}
                  </Button>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2 transform hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">24-hour response</span>
                  </div>
                  <div className="flex items-center gap-2 transform hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Fully insured</span>
                  </div>
                  <div className="flex items-center gap-2 transform hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">No obligation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetQuotes;
