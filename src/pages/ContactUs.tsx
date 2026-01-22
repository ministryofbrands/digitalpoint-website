import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, ChevronDown } from 'lucide-react';

export function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "47206444-8501-40ba-999f-9fb6f6519cd0",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "DigitalPoint Website"
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Montserrat'] selection:bg-[#E91E63] selection:text-white">

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505] font-['Outfit']">
          {/* Background Visuals */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2070&auto=format&fit=crop"
              alt="Contact Us"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-[#1b63bb]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-[#E91E63]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse [animation-delay:1s]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-3 text-xs font-black tracking-[0.5em] uppercase mb-12 text-[#E91E63] animate-fade-in-up bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-[#E91E63] rounded-full animate-ping"></span>
              <span>Get in Touch</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 leading-none animate-fade-in-up select-none uppercase overflow-visible">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                Let's
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_50px_rgba(233,30,99,0.3)] italic mt-2 pr-8">
                Connect.
              </span>
            </h1>

            <div className="relative max-w-3xl animate-fade-in-up [animation-delay:0.4s]">
              <p className="text-white/95 text-lg md:text-2xl lg:text-3xl leading-relaxed font-bold tracking-wider [text-shadow:_0_4px_15px_rgba(0,0,0,0.5)]">
                <span className="opacity-80 font-light italic">Have a project in mind?</span><br />
                <span>We'd love to hear it.</span>
              </p>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="py-32 bg-white relative overflow-hidden">
          {/* Decorative Backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b63bb]/5 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E91E63]/5 blur-[100px] -ml-48 -mb-48 rounded-full"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-24 animate-fade-in-up">
              <span className="text-[#1b63bb] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Reach Out</span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-tight overflow-visible">Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic pr-4">With Us</span></h2>
              <div className="w-24 h-2 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] rounded-full mx-auto"></div>
            </div>

            {/* The 3 Main Info Parts (Redesigned) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 animate-fade-in-up [animation-delay:0.2s]">
              {/* Location */}
              <div className="group relative p-10 rounded-[3rem] bg-gray-50 border border-transparent hover:border-[#1b63bb]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1b63bb]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#1b63bb] mb-8 group-hover:scale-110 group-hover:bg-[#1b63bb] group-hover:text-white transition-all duration-500">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 font-['Outfit']">Our Location</p>
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight leading-tight">11640, Makola, <br />Kiribathgoda, Sri Lanka</h3>
                </div>
              </div>

              {/* Phone */}
              <a href='tel:+94740655900' className="group relative p-10 rounded-[3rem] bg-gray-50 border border-transparent hover:border-[#E91E63]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E91E63]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#E91E63] mb-8 group-hover:scale-110 group-hover:bg-[#E91E63] group-hover:text-white transition-all duration-500">
                    <Phone className="w-8 h-8" />
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 font-['Outfit']">Contact Numbers</p>
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">+94 74 065 5900</h3>
                </div>
              </a>

              {/* Email */}
              <a href='mailto:info@digitalpoint.lk' className="group relative p-10 rounded-[3rem] bg-gray-50 border border-transparent hover:border-[#ff8a00]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff8a00]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#ff8a00] mb-8 group-hover:scale-110 group-hover:bg-[#ff8a00] group-hover:text-white transition-all duration-500">
                    <Mail className="w-8 h-8" />
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 font-['Outfit']">Email Support</p>
                  <h3 className="text-xl font-black text-gray-900 lowercase tracking-tight">info@digitalpoint.lk</h3>
                </div>
              </a>
            </div>

            {/* Map & Form Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch animate-fade-in-up [animation-delay:0.4s]">
              {/* Map Column */}
              <div className="lg:col-span-5 h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-gray-100 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.273122500792!2d79.94934148469268!3d6.977066899755525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2577743aad37b%3A0x233bfca55ff118c0!2sDigital%20point%20(%20Pvt%20)%20Ltd!5e0!3m2!1sen!2slk!4v1767871180220!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="w-full h-full transition-all duration-1000 scale-105 group-hover:scale-100"
                ></iframe>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
                  <p className="text-[10px] font-black text-[#1b63bb] uppercase tracking-[0.2em] mb-1">Visit Our Workshop</p>
                  <p className="text-gray-900 font-bold">Open Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-7 bg-white rounded-[3rem] p-12 lg:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border-2 border-gray-100 flex flex-col justify-center">
                <div className="mb-12">
                  <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">Send a <span className="italic text-[#E91E63]">Message</span></h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] rounded-full"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-[#1b63bb]/20 focus:border-[#1b63bb] outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-[#1b63bb]/20 focus:border-[#1b63bb] outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-[#1b63bb]/20 focus:border-[#1b63bb] outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Subject</label>
                    <div className="relative group/select">
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-[#1b63bb]/20 focus:border-[#1b63bb] outline-none transition-all font-bold text-gray-900 appearance-none cursor-pointer pr-12"
                      >
                        <option>General Inquiry</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within/select:text-[#1b63bb] transition-colors">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Your Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-[#1b63bb]/20 focus:border-[#1b63bb] outline-none transition-all font-bold text-gray-900 resize-none placeholder:text-gray-300"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full relative overflow-hidden bg-gray-900 hover:bg-black text-white font-black py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed shadow-xl uppercase tracking-widest text-sm"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                        Successfully Sent
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] transition-transform" />
                  </button>

                  {status === 'error' && (
                    <p className="text-red-500 text-center font-bold text-[10px] uppercase tracking-widest mt-4">
                      Error occurred. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

