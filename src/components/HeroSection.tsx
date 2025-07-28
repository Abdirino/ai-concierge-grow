import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import aiBookingDemo from '@/assets/ai-booking-demo.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Modern medical spa reception"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Stop Losing High-Value Patients. 
              <span className="block text-accent">Start Filling Your Calendar</span>
              <span className="block">on Autopilot.</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Our AI Concierge for MedSpas converts your Instagram followers and website visitors 
              into booked, qualified appointments 24/7. Even while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Book a Free Discovery Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Play className="mr-2" size={18} />
                See Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>5-Minute Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No Contract</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Results Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative">
              <img 
                src={aiBookingDemo} 
                alt="AI booking demonstration"
                className="rounded-2xl shadow-elegant max-w-sm w-full transform hover:scale-105 transition-bounce"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-glow">
                Live Demo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-1 h-16 bg-white/20 rounded-full relative">
          <div className="w-1 h-4 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;