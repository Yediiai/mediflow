import React from "react";
import Link from "next/link";
import { HeartPulse, Shield, Lock, FileText, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-teal-100 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white">
                <HeartPulse className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Medi<span className="text-teal-400">Flow</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Next-generation digital clinic management, intelligent appointment scheduling, and patient engagement platform. Empowering providers to focus on what matters most: exceptional patient care.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Designed for HIPAA Security Rule Alignment • BAA Ready</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              *Notice: MediFlow provides administrative, scheduling, and clinic workflow technology. MediFlow is not a medical provider and does not provide clinical diagnoses or direct healthcare services.
            </p>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Clinical Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-teal-400 transition">
                  Clinic Management
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-teal-400 transition">
                  Online Scheduling
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-teal-400 transition">
                  Patient Engagement
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-teal-400 transition">
                  Digital Intake & Forms
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-teal-400 transition">
                  Automated Check-in Kiosks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Platform & Security
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/platform" className="hover:text-teal-400 transition">
                  Role-Based Access (RBAC)
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-teal-400 transition">
                  Audit Logging Trail
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-teal-400 transition">
                  FHIR v4 & HL7 APIs
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-teal-400 transition">
                  EHR & EMR Integrations
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-teal-400 transition">
                  Data Privacy Framework
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Demo */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition">
                  Schedule Guided Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition">
                  Clinical Onboarding FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition">
                  Practice Size Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition">
                  Clinical Support Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} MediFlow Health Systems Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition">Patient Privacy Notice</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">Security Whitepaper</span>
            <span className="hover:text-white cursor-pointer transition">Accessibility (WCAG 2.1)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
