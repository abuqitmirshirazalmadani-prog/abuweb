"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../lib/firebase";

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function ContactPageContent() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const path = 'submissions';
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("TRANSMISSION_FAILED. PLEASE_RETRY.");
      try {
        handleFirestoreError(err, OperationType.CREATE, 'submissions');
      } catch (logErr) {
        // Log error already handled in handleFirestoreError
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32 pb-24 px-6 overflow-x-hidden min-h-screen flex flex-col bg-[#020617]">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto w-full flex-grow">
        <section className="mb-32">
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// COMMUNICATIONS CHANNEL`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            INITIATE<br/>CONTACT.
          </motion.h2>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
           <motion.div variants={item}>
              <h3 className="text-3xl font-black text-white mb-12 uppercase">TRANSMISSION DATA</h3>
              {isSubmitted ? (
                 <div className="p-8 bg-cyan-400/5 border border-cyan-400/20 text-cyan-400 space-y-4">
                    <CheckCircle2 className="w-12 h-12" />
                    <h4 className="text-2xl font-black uppercase">TRANSMISSION_RECEIVED</h4>
                    <p className="font-mono text-sm leading-relaxed">YOUR MESSAGE HAS BEEN ENCRYPTED AND DELIVERED. WE WILL INITIATE RESPONSE PROTOCOLS SHORTLY.</p>
                    <button 
                       onClick={() => setIsSubmitted(false)}
                       className="text-xs font-mono uppercase tracking-[0.2em] border-b border-cyan-400 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                       _SEND_ANOTHER
                    </button>
                 </div>
              ) : (
                 <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">_FULL_NAME</label>
                       <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/[0.02] border-b border-white/20 p-4 focus:border-cyan-400 outline-none transition-colors text-white placeholder:text-slate-700" 
                          placeholder="ENTER NAME" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">_EMAIL_ADDRESS</label>
                       <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/[0.02] border-b border-white/20 p-4 focus:border-cyan-400 outline-none transition-colors text-white placeholder:text-slate-700" 
                          placeholder="ENTER EMAIL" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">_MISSION_OBJECTIVE</label>
                       <textarea 
                          rows={4} 
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-white/[0.02] border-b border-white/20 p-4 focus:border-cyan-400 outline-none transition-colors text-white resize-none placeholder:text-slate-700" 
                          placeholder="DESCRIBE PROJECT" 
                       />
                    </div>
                    {error && <p className="text-red-500 font-mono text-xs italic">{error}</p>}
                    <button 
                       disabled={isSubmitting}
                       className="w-full py-5 bg-cyan-400 text-black font-black font-mono text-xl hover:bg-white disabled:bg-slate-800 disabled:text-slate-500 transition-colors flex items-center justify-center gap-4"
                    >
                       {isSubmitting ? (
                          <>_INITIALIZING_SEND <Loader2 className="w-5 h-5 animate-spin" /></>
                       ) : (
                          <>_SEND_TRANSMISSION <Send className="w-5 h-5" /></>
                       )}
                    </button>
                 </form>
              )}
           </motion.div>
           <motion.div variants={item} className="space-y-16">
              <div>
                 <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4 italic">DIRECT_LINES</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-6 group">
                       <Mail className="w-6 h-6 text-cyan-400" />
                       <span className="text-xl md:text-2xl text-white font-bold tracking-tight group-hover:text-cyan-400 transition-colors uppercase">abuqitmirshirazalmadani@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-6 group">
                       <Phone className="w-6 h-6 text-cyan-400" />
                       <span className="text-xl md:text-2xl text-white font-bold tracking-tight group-hover:text-cyan-400 transition-colors">+923233260859</span>
                    </div>
                 </div>
              </div>
              <div className="p-8 bg-white/[0.02] border border-white/5 space-y-4">
                 <h4 className="text-sm font-mono text-cyan-400 uppercase italic">OPERATIONAL_HOURS</h4>
                 <div className="text-xs text-slate-500 font-mono space-y-2">
                    <p>MON-FRI: 0900 - 1800 EST</p>
                    <p>SAT-SUN: CLOSED [SUPPORT ONLY]</p>
                 </div>
              </div>
           </motion.div>
        </section>
      </motion.div>
      <Footer suffix="CONTACT.PORTAL.PROT" />
    </main>
  );
}
