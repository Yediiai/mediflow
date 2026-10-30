"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  HeartPulse, Shield, Calendar, Users, Phone, Mail, MapPin, 
  CheckCircle2, AlertCircle, Send, Loader2, Stethoscope, HelpCircle
} from "lucide-react";

const mediflowDemoSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  clinicName: z.string().min(2, "Clinic or practice name is required"),
  workEmail: z.string().email("Please provide a valid work or clinic email"),
  phoneNumber: z.string().min(7, "Please provide a valid contact phone number"),
  specialty: z.enum(["primary-care", "pediatrics", "dermatology", "cardiology", "mental-health", "multi-specialty"], {
    errorMap: () => ({ message: "Please select your clinic specialty" }),
  }),
  providerCount: z.enum(["1-solo", "2-5", "6-20", "20-plus"], {
    errorMap: () => ({ message: "Please select number of providers" }),
  }),
  timeframe: z.enum(["immediate", "within-month", "evaluating"]),
  message: z.string().min(10, "Please provide a brief note on your clinic's goals"),
});

type MediflowDemoData = z.infer<typeof mediflowDemoSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<MediflowDemoData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MediflowDemoData>({
    resolver: zodResolver(mediflowDemoSchema),
    defaultValues: {
      specialty: "primary-care",
      providerCount: "2-5",
      timeframe: "within-month",
    },
  });

  const onSubmit = async (data: MediflowDemoData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 850));
    setIsSubmitting(false);
    setSubmittedData(data);
    reset();
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>Clinical Demonstration & Practice Advisory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          See MediFlow in Action
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Schedule a personalized, 20-minute demonstration customized to your practice specialty, provider headcount, and existing EHR systems.
        </p>
      </div>

      {/* Main Grid: Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Practice Guidance & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold">
                What to Expect During Your Demo
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                A Workflow Consultation, Not a Pushy Sales Pitch
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Led by former practice administrators, we review your current scheduling friction points, demonstrate mobile patient intake in real-time, and outline your migration timeline.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Stethoscope className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Specialty-Specific Templates</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Pre-tailored intake questionnaires and clinical triage rules for your medical discipline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Users className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Staff Training Included</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Live onboarding sessions for receptionists, nurses, billing staff, and physicians.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Shield className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">BAA Agreement Executed</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Standardized compliance documents provided prior to any clinical data import.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Validated Demo Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {submittedData ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Demo Session Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{submittedData.fullName}</strong>. A clinical practice specialist will contact <strong>{submittedData.clinicName}</strong> within 1 business day to confirm your time slot.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-sm mx-auto text-left">
                  <div>Clinic: {submittedData.clinicName}</div>
                  <div>Email: {submittedData.workEmail}</div>
                  <div>Providers: {submittedData.providerCount}</div>
                  <div>Specialty: {submittedData.specialty}</div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition"
                >
                  Schedule for Another Clinic Location
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Request 20-Min Clinic Demo</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide your clinic details below. No credit card required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name & Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Dr. Sarah Campbell, MD"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.fullName ? "border-rose-300" : "border-slate-200 focus:border-teal-500"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Clinic / Practice Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("clinicName")}
                      placeholder="Bay Area Health Partners"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.clinicName ? "border-rose-300" : "border-slate-200 focus:border-teal-500"
                      }`}
                    />
                    {errors.clinicName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.clinicName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("workEmail")}
                      placeholder="sarah@bayareahealth.org"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.workEmail ? "border-rose-300" : "border-slate-200 focus:border-teal-500"
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.workEmail.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register("phoneNumber")}
                      placeholder="(415) 892-0192"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.phoneNumber ? "border-rose-300" : "border-slate-200 focus:border-teal-500"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Specialty <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register("specialty")}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 transition"
                    >
                      <option value="primary-care">Family Medicine / Primary Care</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="mental-health">Behavioral & Mental Health</option>
                      <option value="multi-specialty">Multi-Specialty Clinic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Number of Providers <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register("providerCount")}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 transition"
                    >
                      <option value="1-solo">1 Solo Practitioner</option>
                      <option value="2-5">2 to 5 Providers</option>
                      <option value="6-20">6 to 20 Providers</option>
                      <option value="20-plus">20+ Enterprise Health System</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Implementation Timeline
                  </label>
                  <select
                    {...register("timeframe")}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-teal-500 transition"
                  >
                    <option value="immediate">Immediate (Next 30 days)</option>
                    <option value="within-month">Planning (Within 1-3 months)</option>
                    <option value="evaluating">General Technology Evaluation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Challenges & Existing EHR <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about your current EHR system (e.g. Athena, Epic, eCW) and pain points..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                      errors.message ? "border-rose-300" : "border-slate-200 focus:border-teal-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-md shadow-teal-600/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling Clinical Demo...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Demo Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Clinical FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
          Frequently Asked Practice Questions
        </h3>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              How long does clinic onboarding typically take?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Most 2 to 10 provider clinics go live within 5 to 7 business days. We provide white-glove setup of your scheduling rules, intake form mapping, and staff training.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              Can MediFlow sync with our existing Electronic Health Record (EHR)?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Yes. MediFlow connects via standard HL7 FHIR v4 APIs to major platforms including AthenaHealth, Epic, Cerner, NextGen, and eClinicalWorks to sync demographic and appointment status.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              Do patients need to install a mobile application?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Never. Patient booking, reminders, and digital intake forms run natively in modern mobile web browsers with zero app installation required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
