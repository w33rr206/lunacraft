import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameModes from './components/GameModes';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-purple-500 selection:text-white" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features/Stats Divider with Gradient */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 py-3 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-4 text-center">
             <p className="text-purple-200 font-medium text-sm md:text-base flex items-center justify-center gap-2">
               <span className="animate-pulse">✨</span>
               خبر ویژه: سیزن جدید اسکای‌بلاک با جوایز دلاری شروع شد!
               <span className="animate-pulse">✨</span>
             </p>
           </div>
        </div>

        <GameModes />
        
        {/* CTA Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">به لونا بپیوندید</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              هزاران پلیر ایرانی در لونا کرافت منتظر شما هستند. همین حالا ماجراجویی فضایی خود را شروع کنید.
            </p>
            <div className="flex justify-center">
               <button 
                 onClick={() => navigator.clipboard.writeText('play.lunacraft.ir')}
                 className="group px-10 py-4 bg-white text-slate-900 font-black rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3"
               >
                 <span>play.lunacraft.ir</span>
                 <svg className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
               </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;