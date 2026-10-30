"use client";

import React, { useState } from "react";
import { 
  Calendar, Clock, User, CheckCircle2, AlertCircle, Phone, 
  Video, FileText, ChevronRight, Stethoscope, HeartPulse, Shield
} from "lucide-react";

export function MediFlowDashboardMockup() {
  const [activeTab, setActiveTab] = useState<"schedule" | "intake" | "rooms">("schedule");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Sarah Lin, MD");

  const appointments = [
    {
      id: "apt-1",
      patient: "Eleanor Campbell",
      age: "42 y/o",
      time: "09:00 AM",
      type: "Comprehensive Wellness Exam",
      doctor: "Dr. Sarah Lin, MD",
      status: "In Exam Room 2",
      intake: "100% Completed",
      mode: "In-Person",
    },
    {
      id: "apt-2",
      patient: "Jameson Miller",
      age: "58 y/o",
      time: "09:30 AM",
      type: "Hypertension Follow-up",
      doctor: "Dr. Sarah Lin, MD",
      status: "Arrived & Waiting",
      intake: "100% Completed",
      mode: "In-Person",
    },
    {
      id: "apt-3",
      patient: "Sofia Rodriguez",
      age: "31 y/o",
      time: "10:15 AM",
      type: "Allergy Consultation",
      doctor: "Dr. Arthur Vance, MD",
      status: "Telehealth Waiting",
      intake: "Forms Ready",
      mode: "Video Telehealth",
    },
    {
      id: "apt-4",
      patient: "Marcus Chen",
      age: "47 y/o",
      time: "11:00 AM",
      type: "Pre-Operative Clearance",
      doctor: "Dr. Sarah Lin, MD",
      status: "Upcoming",
      intake: "Pending Insurance Sync",
      mode: "In-Person",
    },
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-teal-100 shadow-xl overflow-hidden font-sans">
      {/* Top Banner Bar */}
      <div className="bg-teal-700 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-sm">
            Metro Health Partners — Clinic Station 4A
          </span>
          <span className="text-xs bg-teal-800/80 text-teal-200 px-2.5 py-0.5 rounded-full font-mono">
            Live Daily Queue
          </span>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2">
          {[
            { id: "schedule", label: "Patient Schedule" },
            { id: "intake", label: "Digital Intake Forms" },
            { id: "rooms", label: "Exam Rooms (8)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === tab.id
                  ? "bg-white text-teal-800 shadow-sm"
                  : "text-teal-100 hover:text-white hover:bg-teal-600/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="p-6 bg-slate-50/60 border-b border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-2xl border border-teal-50 shadow-sm">
          <span className="text-xs text-slate-500 block mb-1">Today&apos;s Appointments</span>
          <div className="text-2xl font-bold font-mono text-slate-900">28 Patients</div>
          <span className="text-xs text-teal-700 font-medium">92% On-Time Pace</span>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-teal-50 shadow-sm">
          <span className="text-xs text-slate-500 block mb-1">Digital Intake Rate</span>
          <div className="text-2xl font-bold font-mono text-teal-700">96.4%</div>
          <span className="text-xs text-slate-500">Pre-completed before arrival</span>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-teal-50 shadow-sm">
          <span className="text-xs text-slate-500 block mb-1">Avg Patient Wait Time</span>
          <div className="text-2xl font-bold font-mono text-slate-900">4.2 Mins</div>
          <span className="text-xs text-emerald-700 font-medium">Down from 22 mins</span>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-teal-50 shadow-sm">
          <span className="text-xs text-slate-500 block mb-1">No-Show Rate</span>
          <div className="text-2xl font-bold font-mono text-emerald-700">2.1%</div>
          <span className="text-xs text-slate-500">Automated SMS confirmation</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8">
        {activeTab === "schedule" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-600" />
                <span>Today&apos;s Clinical Flow — October 31</span>
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Filter Provider:</span>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="text-xs font-medium py-1 px-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none"
                >
                  <option value="Dr. Sarah Lin, MD">Dr. Sarah Lin, MD (Internal)</option>
                  <option value="Dr. Arthur Vance, MD">Dr. Arthur Vance, MD (Cardiology)</option>
                </select>
              </div>
            </div>

            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-teal-800 font-mono text-xs font-bold shrink-0 text-center min-w-[70px]">
                      {apt.time}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm sm:text-base">
                          {apt.patient}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">({apt.age})</span>
                        {apt.mode === "Video Telehealth" ? (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 flex items-center gap-1">
                            <Video className="w-3 h-3" /> Telehealth
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700">
                            In-Clinic
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-2">
                        <span>{apt.type}</span>
                        <span>•</span>
                        <span className="text-slate-600 font-medium">{apt.doctor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right sm:block hidden">
                      <span className="text-xs text-slate-500 block">Intake Form:</span>
                      <span className="text-xs font-semibold text-teal-700">{apt.intake}</span>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${
                        apt.status.includes("Room")
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : apt.status.includes("Arrived")
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "intake" && (
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">
              Paperless Patient Intake & Insurance Verification
            </h4>
            <p className="text-xs text-slate-600">
              Patients receive a secure, one-click link via SMS 24 hours prior to appointment to upload insurance cards, sign HIPAA disclosures, and input symptoms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200">
                <FileText className="w-5 h-5 text-teal-700 mb-2" />
                <h5 className="font-bold text-xs text-teal-900">Demographics & History</h5>
                <p className="text-[11px] text-teal-800 mt-1">Pre-filled automatically from patient portal</p>
              </div>
              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200">
                <Shield className="w-5 h-5 text-teal-700 mb-2" />
                <h5 className="font-bold text-xs text-teal-900">Insurance OCR Verification</h5>
                <p className="text-[11px] text-teal-800 mt-1">Real-time copay and eligibility check</p>
              </div>
              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200">
                <CheckCircle2 className="w-5 h-5 text-teal-700 mb-2" />
                <h5 className="font-bold text-xs text-teal-900">E-Signature Disclosures</h5>
                <p className="text-[11px] text-teal-800 mt-1">Legally binding consent forms synced to EHR</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rooms" && (
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">
              Real-Time Examination Room Tracker
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { room: "Room 101", status: "Available", color: "border-emerald-200 bg-emerald-50 text-emerald-800" },
                { room: "Room 102", status: "Occupied (Dr. Lin)", color: "border-purple-200 bg-purple-50 text-purple-800" },
                { room: "Room 103", status: "Cleaning In Progress", color: "border-amber-200 bg-amber-50 text-amber-800" },
                { room: "Room 104", status: "Occupied (Dr. Vance)", color: "border-purple-200 bg-purple-50 text-purple-800" },
              ].map((r, i) => (
                <div key={i} className={`p-4 rounded-xl border ${r.color} text-center`}>
                  <div className="font-bold text-sm">{r.room}</div>
                  <div className="text-xs mt-1 font-medium">{r.status}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
