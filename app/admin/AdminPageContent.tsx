"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Lock, Activity, Server, Database, LogIn, Mail, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User, signOut } from "firebase/auth";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Timestamp;
}

export default function AdminPageContent() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => {
      clearInterval(timer);
      unsubscribeAuth();
    };
  }, []);

  useEffect(() => {
    // Only subscribe to submissions if the user is authorized (matches the email in firestore.rules)
    if (user && user.email === 'abuqitmirshirazalmadani@gmail.com') {
      const q = query(collection(db, "submissions"), orderBy("createdAt", "desc"));
      const unsubscribeSubmissions = onSnapshot(q, (snapshot) => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Submission));
        setSubmissions(docs);
      }, (error) => {
        console.error("Firestore Error:", error);
      });
      return () => unsubscribeSubmissions();
    }
  }, [user]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => signOut(auth);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center font-mono text-cyan-400">
        _ESTABLISHING_SECURE_CONNECTION...
      </div>
    );
  }

  // Check against the specific admin email
  if (!user || user.email !== 'abuqitmirshirazalmadani@gmail.com') {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-12 border-2 border-white/20 bg-black/80 backdrop-blur-xl text-center"
        >
          <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-8" />
          <h1 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">SECURE OPERATIONAL ACCESS</h1>
          <p className="text-slate-500 font-mono text-[10px] mb-8 uppercase tracking-widest">
            {user ? "ACCESS_DENIED: UNAUTHORIZED_USER" : "AUTHORIZATION_REQUIRED"}
          </p>
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-cyan-400 text-black font-black font-mono text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3"
          >
            _AUTHENTICATE_VIEW_GOOGLE <LogIn className="w-4 h-4" />
          </button>
          {user && (
            <button onClick={handleLogout} className="mt-4 text-[10px] font-mono text-slate-500 hover:text-white uppercase transition-colors">
              _SWITCH_ACCOUNT
            </button>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-mono selection:bg-cyan-400 selection:text-black">
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 gap-6">
        <div className="flex items-center gap-4">
          <Terminal className="w-6 h-6 text-cyan-400" />
          <h1 className="text-xl font-black tracking-tighter uppercase shrink-0">ABUQITMIR_DASHBOARD_v1.0.4</h1>
          <span className="hidden md:inline px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-[10px] font-bold tracking-widest">ROOT_ACCESS</span>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">
             SYSTEM_TIME: {time || "_CALIBRATING"}
          </div>
          <div className="text-[10px] text-cyan-400 uppercase tracking-widest">
             OPERATOR: {user.email?.split('@')[0]}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: Activity, label: "CPU_LOAD", val: "12.4%", color: "text-green-500" },
          { icon: Server, label: "LATENCY", val: "0.02ms", color: "text-cyan-400" },
          { icon: Database, label: "SUBMISSIONS", val: submissions.length.toString(), color: "text-yellow-500" },
          { icon: Shield, label: "SECURITY", val: "ACTIVE", color: "text-cyan-400" },
        ].map((stat, i) => (
          <div key={i} className="p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
             <stat.icon className={`w-5 h-5 ${stat.color} mb-4`} />
             <div className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest">{stat.label}</div>
             <div className="text-2xl font-black">{stat.val}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
             <h3 className="text-sm font-black uppercase tracking-widest">INCOMING_TRANSMISSIONS</h3>
             <span className="text-[10px] font-mono text-slate-500">REALTIME_STREAMS</span>
           </div>
           
           <div className="space-y-4">
              {submissions.length === 0 ? (
                <div className="p-12 border border-white/5 bg-white/[0.01] text-center text-slate-600 font-mono text-xs uppercase tracking-[0.2em]">
                  NO_TRANSMISSIONS_DETECTED
                </div>
              ) : (
                submissions.map((sub) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={sub.id} 
                    className="p-6 border border-white/5 bg-white/[0.01] hover:border-cyan-400/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-tighter mb-1">{sub.name}</h4>
                        <a href={`mailto:${sub.email}`} className="text-[10px] text-cyan-400 hover:text-white transition-colors lowercase flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {sub.email}
                        </a>
                      </div>
                      <div className="text-[10px] text-slate-600 font-mono uppercase bg-white/5 px-2 py-1">
                        {sub.createdAt?.toDate().toLocaleString() || "PENDING..."}
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed border-l border-white/10 pl-4 py-1">
                      {sub.message}
                    </p>
                  </motion.div>
                ))
              )}
           </div>
        </div>

        <div className="space-y-8">
          <div className="p-8 border border-white/5 bg-white/[0.01]">
             <h3 className="text-sm font-black mb-8 border-b border-white/10 pb-4 uppercase tracking-widest">CORE_LOGS</h3>
             <div className="space-y-4 text-[10px] text-slate-400 leading-relaxed uppercase overflow-hidden">
                <p className="text-cyan-400/50 truncate">[ SYSTEM ] SESSION_INITIATED</p>
                <p className="truncate">[ SYSTEM ] BUFFER_READ_SUCCESS</p>
                <p className="truncate">[ SYSTEM ] SECURITY_PROTOCOLS_V4_LOADED</p>
                {submissions.slice(0, 3).map((sub, i) => (
                  <p key={i} className="text-cyan-400/70 truncate">[ DATA ] INCOMING: {sub.name.split(' ')[0]}</p>
                ))}
             </div>
          </div>
          
          <div className="p-8 border border-white/5 bg-white/[0.01]">
             <h3 className="text-sm font-black mb-8 border-b border-white/10 pb-4 uppercase tracking-widest">SYSTEM_CONTROLS</h3>
             <div className="grid grid-cols-1 gap-4">
                <button className="p-4 border border-white/10 text-[10px] hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all uppercase tracking-widest flex items-center justify-between">
                  _FIREBASE_CONSOLE <ExternalLink className="w-3 h-3" />
                </button>
                <button onClick={handleLogout} className="p-4 border border-white/10 text-[10px] hover:bg-white hover:text-black transition-all bg-white/10 uppercase tracking-widest">
                  _SECURE_LOGOUT
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
