"use client";

import React, { useState } from "react";
import { 
  Shield, Lock, Key, Users, FileCheck, Server, 
  CheckCircle2, ArrowRight, Database, Terminal, Cpu
} from "lucide-react";
import Link from "next/link";

export default function PlatformPage() {
  const [selectedRole, setSelectedRole] = useState<string>("physician");

  const roles = [
    {
      id: "physician",
      title: "Physician & Specialist",
      permissions: [
        "Full read/write access to clinical charts & diagnosis notes",
        "E-prescribing authorization & lab order routing",
        "Sign-off on patient discharge & care follow-up plans",
        "Direct peer-to-peer provider encrypted consultation chat",
      ],
      accessLevel: "Level 4 (Highest Clinical Authority)",
    },
    {
      id: "nurse",
      title: "Nurse & Medical Assistant",
      permissions: [
        "Vitals entry, allergy recording & chief complaint triage",
        "Intake verification & patient queue room assignment",
        "Patient messaging reply within physician-approved protocols",
        "Medication history confirmation",
      ],
      accessLevel: "Level 3 (Clinical Staff)",
    },
    {
      id: "front-desk",
      title: "Front Desk & Reception",
      permissions: [
        "Appointment booking, rescheduling, and check-in confirmation",
        "Demographic details & contact updates",
        "Copay collection & receipt generation",
        "Restricted from viewing clinical medical notes and chart diagnoses",
      ],
      accessLevel: "Level 2 (Administrative Only)",
    },
    {
      id: "billing",
      title: "Billing & Revenue Cycle Specialist",
      permissions: [
        "Superbill review & ICD-10 / CPT code auditing",
        "Payer claim submission & remittance tracking",
        "Insurance eligibility & deductible verification",
        "Restricted from clinical narrative notes",
      ],
      accessLevel: "Level 2 (Financial Only)",
    },
  ];

  const currentRole = roles.find((r) => r.id === selectedRole) || roles[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Clinical Security & Cloud Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Trust, Security, and Compliance First
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Built from the ground up to protect Protected Health Information (PHI) with granular role-based access, comprehensive audit logging, and FHIR interoperability.
        </p>
      </div>

      {/* Role-Based Access Control Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold">
              Zero-Trust Principle of Least Privilege
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
              Granular Role-Based Access Control (RBAC)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Front desk personnel see only scheduling details; billing teams see only claims; physicians see clinical records. No unauthorized eyes on sensitive patient charts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Role Buttons */}
            <div className="lg:col-span-5 space-y-2">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRole(r.id)}
                  className={`w-full text-left p-4 rounded-xl border transition ${
                    selectedRole === r.id
                      ? "bg-teal-50/80 border-teal-500 font-semibold text-teal-900"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-sm font-bold">{r.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{r.accessLevel}</div>
                </button>
              ))}
            </div>

            {/* Permission Preview */}
            <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="font-bold text-slate-900 text-sm">
                  Active Permissions for: {currentRole.title}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                  {currentRole.accessLevel}
                </span>
              </div>
              <div className="space-y-3">
                {currentRole.permissions.map((perm, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{perm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Enterprise Healthcare Security Architecture
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Every layer designed in strict alignment with HIPAA Security and Privacy Rules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Lock className="w-8 h-8 text-teal-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-base mb-2">AES-256 Encryption</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All electronic health data is encrypted both at rest via hardware-backed AES-256 cryptographic keys and in transit across TLS 1.3 tunnels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <FileCheck className="w-8 h-8 text-teal-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-base mb-2">Immutable Audit Logging</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every chart view, prescription modification, and user login is permanently stamped with UTC timestamps, user ID, IP address, and cryptographic hashes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Database className="w-8 h-8 text-teal-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-base mb-2">HL7 FHIR v4 Interoperability</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standardized modern APIs enable bi-directional integration with major hospital EHR systems, including Epic, Cerner, AthenaHealth, and eClinicalWorks.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance & BAA Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
              Business Associate Agreements (BAA)
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Signed BAA Included With Every Practice Tier
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              We sign comprehensive Business Associate Agreements ensuring mutual commitment to federal safeguarding standards, incident response protocols, and patient privacy.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition shrink-0"
          >
            Request Security Packet
          </Link>
        </div>
      </section>
    </div>
  );
}
