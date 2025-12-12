import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Star, Shield, Zap, Trophy, CreditCard, MessageCircle, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const whatsappNumber = "923327549200";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0a0514] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0514]/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
              ProX<span className="text-white">Exchange</span>
            </span>
          </div>
          <Button 
            variant="outline"
            className="rounded-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-semibold px-6"
          >
            Login
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4 max-w-lg md:max-w-2xl lg:max-w-5xl">
          
          {/* Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20 mb-8 border border-white/10"
          >
            <img 
              src="/attached_assets/prox_1765533035830.jpeg" 
              alt="ProX Exchange Hero" 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Trusted Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4 text-[#FFD700]"
          >
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">Pakistan's Most Trusted Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center leading-tight mb-4 uppercase"
          >
            YOUR WINNING <br />
            STREAK STARTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">RIGHT HERE</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-center text-lg mb-8 max-w-lg mx-auto leading-relaxed"
          >
            Join the ultimate betting exchange where high stakes meet instant payouts. 
            Experience premium service, competitive odds, and 24/7 support on Pakistan's #1 trusted platform.
          </motion.p>

          {/* CTA Buttons */}
          <div className="space-y-4 mb-12">
            <Button 
              asChild 
              className="w-full bg-[#FFC107] hover:bg-[#FFD700] text-black font-black text-lg h-14 rounded-xl uppercase tracking-wide"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                GET YOUR ID NOW &gt;
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 h-14 rounded-xl font-bold text-lg"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-6 md:gap-12 text-sm md:text-base mb-20 text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Instant</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-purple-500" />
              <span>Trusted</span>
            </div>
          </div>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black uppercase mb-4">
                Why Choose <span className="text-[#FFC107]">ProX</span>
              </h2>
              <p className="text-gray-400">
                We provide the fastest and most secure environment for your gaming needs.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Feature 1 */}
              <div className="bg-[#130b24] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#2a1f45] rounded-2xl flex items-center justify-center mb-6 text-[#FFC107]">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Withdrawals</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get your winnings instantly to your bank account via UPI, Paytm, or Bank Transfer. No waiting.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#130b24] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1a2f24] rounded-2xl flex items-center justify-center mb-6 text-[#25D366]">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 WhatsApp Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our dedicated team is available round the clock to assist you with IDs and deposits.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#130b24] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#2a1f45] rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">100% Secure Payments</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your money is safe with us. We use advanced encryption to ensure secure transactions every time.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-gray-500 text-sm pb-8">
            <p>© 2024 ProX Exchange. All rights reserved.</p>
            <p className="mt-1">Play Responsibly. 18+ Only.</p>
          </footer>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:scale-110 transition-transform cursor-pointer"
      >
        <MessageCircle className="w-8 h-8 text-white fill-current" />
      </motion.a>
    </div>
  );
}
