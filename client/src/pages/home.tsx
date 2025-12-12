import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Zap, Trophy, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const whatsappNumber = "923327549200";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const displayPhone = "0332 754 9200";

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo from attached assets */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <img 
                src="/attached_assets/prox_1765532201174.jpeg" 
                alt="ProX Exchange Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl md:text-2xl font-tech font-bold text-white tracking-wider">
              ProX <span className="text-primary">Exchange</span>
            </span>
          </div>
          <Button 
            asChild 
            className="bg-gradient-gold text-background hover:brightness-110 font-bold hidden sm:flex"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Get Your ID Now
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 tracking-wide uppercase">
              Premium Betting Exchange
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
              YOUR PLATFORM FOR <br />
              <span className="text-gradient-gold">HIGH-STAKES ACTION</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the thrill of premium betting with instant withdrawals, 24/7 support, and the most competitive odds in the market.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-gold text-background hover:brightness-110 text-lg font-bold h-14 px-8"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="w-6 h-6 mr-2" 
                  />
                  Get Your ID Now
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white/20 hover:bg-white/5 text-white h-14 px-8"
              >
                <a href="#features">
                  Explore Features
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 md:mt-24 relative max-w-4xl mx-auto"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img 
                src="/attached_assets/prox_1765532201174.jpeg" 
                alt="Platform Preview" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col items-center">
                 <p className="text-white/80 font-tech tracking-widest text-sm mb-2">TRUSTED BY THOUSANDS</p>
                 <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why Choose <span className="text-primary">ProX</span>?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We provide a secure, fast, and premium environment for all your gaming needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Instant Withdrawals", desc: "Get your winnings instantly to your account without delays." },
              { icon: Shield, title: "100% Secure", desc: "Your data and funds are protected by state-of-the-art encryption." },
              { icon: Trophy, title: "Best Odds", desc: "We offer the most competitive odds in the market for maximum returns." },
              { icon: CreditCard, title: "Easy Deposit", desc: "Multiple payment methods supported for hassle-free deposits." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center border-primary/20">
            <div className="w-16 h-16 mx-auto bg-[#25D366] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#25D366]/20">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-10 h-10 filter brightness-0 invert" 
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
              Start Winning Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us on WhatsApp to get your ID instantly and join the action.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xl font-bold h-16 px-10 rounded-full shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
              <div className="flex items-center gap-2 text-white/80 font-mono text-lg bg-black/30 px-4 py-2 rounded-lg border border-white/10">
                <Phone className="w-4 h-4" />
                <span>{displayPhone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/40 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2024 ProX Exchange. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Gambling involves risk. Please play responsibly.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform cursor-pointer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-8 h-8 filter brightness-0 invert" 
        />
      </a>
    </div>
  );
}
