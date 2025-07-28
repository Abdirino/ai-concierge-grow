import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const FinalCTASection = () => {
  const urgencyPoints = [
    {
      icon: Users,
      text: "Only 10 founding partner spots remaining"
    },
    {
      icon: Clock,
      text: "Program closes this month"
    },
    {
      icon: CheckCircle,
      text: "Next available slots in 60+ days"
    }
  ];

  const ctaBenefits = [
    "15-minute no-obligation discovery call",
    "Custom strategy for your practice",
    "See live demo of the AI Concierge",
    "Get pricing for your specific needs",
    "Learn how we guarantee results"
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/3 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Build Your 
              <span className="block text-accent">Patient Pipeline?</span>
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Spots in our Founding Partner Program are limited to ensure white-glove service. 
              Schedule your complimentary 15-minute discovery call to see if the AI Concierge 
              is right for your practice.
            </p>
          </div>

          {/* Urgency Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in delay-300">
            {urgencyPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-center space-x-3">
                  <point.icon className="w-5 h-5 text-accent" />
                  <span className="text-white font-medium text-sm">{point.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-white/20 animate-fade-in delay-500">
            <div className="mb-8">
              <Calendar className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Book Your Free Discovery Call
              </h3>
              <p className="text-white/80 mb-8">
                No sales pressure. Just a genuine conversation about your practice goals 
                and how AI can help you achieve them.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
              {ctaBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full max-w-md mx-auto bg-accent hover:bg-accent-hover shadow-glow group"
              >
                Schedule My Free Discovery Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <p className="text-sm text-white/60">
                🔒 Your information is 100% secure and will never be shared
              </p>
            </div>
          </div>

          {/* Calendly Embedded Form Placeholder */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant animate-fade-in delay-700">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                Select Your Preferred Time
              </h4>
              <p className="text-muted-foreground">
                Choose a time that works best for your schedule. All times are shown in your local timezone.
              </p>
            </div>
            
            {/* Calendly Integration Placeholder */}
            <div className="bg-gradient-subtle rounded-xl p-12 border-2 border-dashed border-primary/20">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-foreground font-medium mb-2">Calendly Booking Widget</p>
              <p className="text-muted-foreground text-sm">
                Integration point for Calendly embedded scheduling widget
              </p>
              <Button variant="premium" size="lg" className="mt-4">
                Book Now via Calendly
              </Button>
            </div>
          </div>

          {/* Final Trust Elements */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center animate-fade-in delay-1000">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15 Min</div>
              <div className="text-white/80 text-sm">Quick discovery call</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">No Cost</div>
              <div className="text-white/80 text-sm">Completely free consultation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">No Pressure</div>
              <div className="text-white/80 text-sm">Just valuable insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;