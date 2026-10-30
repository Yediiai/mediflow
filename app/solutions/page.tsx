"use client";

import React, { useState } from "react";
import { 
  Calendar, FileText, MessageSquare, Clock, Users, Shield, 
  CheckCircle2, ArrowRight, Laptop, Activity, Stethoscope
} from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState<string>("clinic-management");

  const solutions = [
    {
      id: "clinic-management",
      title: "Clinic & Multi-Provider Management",
      icon: <Calendar className="w-5 h-5 text-teal-600" />,
      tagline: "Synchronize multi-location clinics, provider schedules, and exam rooms.",
      points: [
        "Dynamic multi-doctor calendar views with specialty-based time slots",
        "Exam room status dashboard with real-time sanitation indicators",
        "Staff scheduling and shift handoff communication logs",
        "Centralized multi-location dashboard for group practices",
      ],
    },
    {
      id: "appointment-scheduling",
      title: "Intelligent Appointment Scheduling",
      icon: <Clock className="w-5 h-5 text-teal-600" />,
      tagline: "Empower patients to self-book online 24/7 while enforcing provider rules.",
      points: [
        "Direct integration with clinic website, Google Business, and social profiles",
        "Intelligent slot buffering to prevent physician burnout",
        "Automated cancellation re-fill engine that alerts waitlisted patients",
        "Configurable multi-channel SMS and email reminders",
      ],
    },
    {
      id: "patient-engagement",
      title: "Patient Engagement & Two-Way Messaging",
      icon: <MessageSquare className="w-5 h-5 text-teal-600" />,
      tagline: "Foster long-term patient loyalty with proactive communication.",
      points: [
        "Secure two-way SMS messaging without requiring patients to download an app",
        "Automated post-care follow-up instructions and recovery check-ins",
        "Broadcast clinic announcements (flu clinics, holiday hours, emergency closures)",
        "Automated 5-star review collection and patient satisfaction surveys",
      ],
    },
    {
      id: "digital-intake",
      title: "Digital Intake Forms & E-Signatures",
      icon: <FileText className="w-5 h-5 text-teal-600" />,
      tagline: "Eliminate manual clipboard paperwork with mobile-first onboarding.",
      points: [
        "Drag-and-drop clinical intake questionnaire builder",
        "Automated insurance card photo capture with instant OCR ID extraction",
        "Legally binding finger/stylus electronic signatures on consent documents",
        "Direct bidirectional write-back into existing EHR clinical charts",
      ],
    },
  ];

  const currentSolution = solutions.find((s) => s.id === activeSolution) || solutions[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-4">
          <Activity className="w-3.5 h-3.5" />
          <span>Comprehensive Healthcare Practice Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Clinical Solutions Built for Modern Medicine
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Tailored workflows that empower private practices, specialty clinics, and outpatient healthcare systems to optimize capacity and elevate patient care.
        </p>
      </div>

      {/* Interactive Solution Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {solutions.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveSolution(item.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition ${
                  activeSolution === item.id
                    ? "bg-white border-teal-500 shadow-md ring-1 ring-teal-500/20"
                    : "bg-white/60 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${activeSolution === item.id ? "bg-teal-50 text-teal-600" : "bg-slate-100 text-slate-500"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.tagline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Solution Deep Dive Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">
              <span>Solution Focus</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {currentSolution.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {currentSolution.tagline}
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              {currentSolution.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition shadow-md shadow-teal-600/20"
              >
                <span>Request Custom Demo for Your Specialty</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Supported */}
      <section className="bg-slate-50/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold">
            Specialty-Specific Templates
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Configured for Diverse Clinical Disciplines
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-xl mx-auto">
            Pre-configured clinical screening templates and intake packets tailored to your medical field.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Primary Care",
              "Dermatology",
              "Cardiology",
              "Orthopedics",
              "Pediatrics",
              "Mental Health",
            ].map((spec) => (
              <div
                key={spec}
                className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center justify-center"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
