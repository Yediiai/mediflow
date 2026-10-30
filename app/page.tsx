import React from "react";
import Link from "next/link";
import { 
  HeartPulse, Calendar, Clock, MessageSquare, Shield, ArrowRight, 
  CheckCircle2, Users, FileCheck, Stethoscope, Sparkles, Check
} from "lucide-react";
import { MediFlowDashboardMockup } from "@/components/MediFlowDashboardMockup";

export default function HomePage() {
  const benefits = [
    {
      icon: <Calendar className="w-6 h-6 text-teal-600" />,
      title: "Smart Multi-Provider Scheduling",
      description: "Automate calendar sync across physicians, nurses, and exam rooms. Patients book online 24/7 with zero double-booking risk.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-teal-600" />,
      title: "Two-Way Patient Messaging",
      description: "Communicate securely via SMS and web portal. Send automated appointment reminders, dietary preparation notes, and follow-up surveys.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-teal-600" />,
      title: "100% Paperless Digital Intake",
      description: "Patients complete medical histories, photo-upload insurance cards, and sign consent forms on their smartphones prior to arrival.",
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      title: "42% Reduction in Patient Wait Times",
      description: "Fast-track front desk operations with digital check-in queues, real-time room tracking, and automated copay collection.",
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: "Care Team Collaboration",
      description: "Eliminate chaotic sticky notes with encrypted internal clinical chat, triage handoffs, and shared electronic task boards.",
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      title: "Privacy & Compliance Framework",
      description: "Designed in direct alignment with HIPAA Security Rules. End-to-end encryption, role-based access, and immutable audit logs.",
    },
  ];

  const testimonials = [
    {
      quote: "MediFlow cut our clinic's no-show rate from 18% down to under 3% in our first two months. Our staff no longer spends 4 hours every morning making reminder phone calls.",
      author: "Dr. Evelyn Reed, MD",
      role: "Chief Medical Officer, Westside Medical Pavilion",
      stats: "Under 3% no-show rate",
    },
    {
      quote: "Patients genuinely love the mobile intake forms. When they walk through our doors, their insurance is verified and their history is already in our EHR. It transformed our clinic flow.",
      author: "Marcus Delgado",
      role: "Director of Practice Operations, Horizon Health",
      stats: "96% mobile completion",
    },
    {
      quote: "The multi-provider scheduling tool alone saved our 12-physician group practice thousands of dollars in scheduling errors and administrative overhead.",
      author: "Dr. Sanjay Patel, MD",
      role: "Lead Physician, AllCare Family Medicine",
      stats: "12 providers synchronized",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-12 overflow-hidden clinical-subtle-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Next-Gen Clinic Management Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Better Care Starts With <span className="text-teal-600">Better Technology</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Empower clinics, streamline patient appointments, and automate intake workflows with an intuitive, unified platform designed for modern healthcare teams.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-lg shadow-teal-600/25 transition flex items-center gap-2"
            >
              <span>Book a 20-Min Clinic Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl shadow-sm transition"
            >
              Explore Solutions
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-teal-600" /> BAA-Ready Enterprise Contracts
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-teal-600" /> HL7 FHIR v4 Interoperability
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-teal-600" /> 99.99% Clinical Uptime SLA
            </span>
          </div>

          {/* Interactive Healthcare Dashboard Mockup Preview */}
          <div className="mt-14 max-w-6xl mx-auto">
            <MediFlowDashboardMockup />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold">
            Engineered For Healthcare
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Streamline Clinical Operations & Delights Patients
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From online booking to the waiting room and clinical chart notes, MediFlow unifies the entire patient journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-teal-200 hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Workflow Automation Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
                Paperless Clinical Intake
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Say Goodbye to Waiting Room Clipboards Forever
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Traditional paper intake creates manual data entry bottlenecks, errors, and HIPAA compliance risks. MediFlow moves the entire intake process to the patient&apos;s mobile device before they arrive.
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Insurance card photo OCR auto-populates subscriber IDs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Custom clinical screening questionnaires by medical specialty</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Instant biometric or finger e-signatures on consent forms</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700">
              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between">
                  <span className="text-slate-300">1. Automated SMS Sent (24h before)</span>
                  <span className="text-teal-400">Delivered ✓</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between">
                  <span className="text-slate-300">2. Patient Completes Intake on Mobile</span>
                  <span className="text-teal-400">Completed in 2.8m ✓</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between">
                  <span className="text-slate-300">3. Copay & Eligibility Verified with Payer</span>
                  <span className="text-teal-400">Active Coverage ($25 Copay) ✓</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between">
                  <span className="text-slate-300">4. Intake Chart Synced via FHIR API to EHR</span>
                  <span className="text-teal-400">Ready in Chart ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold">
            Clinician Feedback
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Trusted by 850+ Outpatient Clinics & Medical Groups
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                  {t.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-teal-700 to-teal-600 text-white shadow-xl shadow-teal-700/20">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Ready to modernise your medical practice?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-teal-100 max-w-xl mx-auto">
            Schedule a 20-minute tailored walkthrough with our clinical workflow specialists.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-white text-teal-700 font-bold text-sm hover:bg-teal-50 transition shadow-md"
            >
              Schedule Clinical Demo
            </Link>
            <Link
              href="/platform"
              className="px-8 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm transition"
            >
              Review Platform Security
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
