import { Shield, TrendingUp, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GuaranteeSection = () => {
  const guaranteePoints = [
    {
      icon: Shield,
      title: "Performance Promise",
      description: "We don't start charging until we book 5 qualified patients for you"
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description: "Our success is directly tied to your patient acquisition success"
    },
    {
      icon: Users,
      title: "Risk-Free Trial",
      description: "Experience the system with zero financial risk upfront"
    },
    {
      icon: Trophy,
      title: "Proven Method",
      description: "Based on strategies that have generated millions in MedSpa revenue"
    }
  ];

  return (
    <section id="guarantee" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Main Guarantee Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-hero rounded-3xl p-12 text-white text-center shadow-elegant animate-fade-in">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Our Performance Guarantee
            </h2>
            
            <div className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              We are so confident in our ability to deliver results that we offer an 
              <span className="font-bold text-accent"> unprecedented guarantee</span>. 
              You only begin paying the monthly management fee 
              <span className="font-bold"> *after* we've booked 5 qualified patients for you</span>. 
              <span className="block mt-4 text-accent font-semibold">We win when you win.</span>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 mb-8">
              <div className="text-6xl font-bold text-accent mb-4">$0</div>
              <div className="text-xl">
                Investment until we prove results
              </div>
              <div className="text-sm text-white/80 mt-2">
                Only pay after 5 qualified bookings
              </div>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="bg-accent hover:bg-accent-hover shadow-glow"
            >
              Claim Your Risk-Free Spot
            </Button>
          </div>
        </div>

        {/* Supporting Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {guaranteePoints.map((point, index) => (
            <div 
              key={index}
              className={`text-center animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-success/20 transition-smooth">
                <point.icon className="w-8 h-8 text-success" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="bg-card rounded-2xl p-8 shadow-card max-w-4xl mx-auto animate-fade-in delay-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why We Can Make This Guarantee
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Client Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
                <div className="text-sm text-muted-foreground">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
                <div className="text-sm text-muted-foreground">Average Time to First Booking</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-success/5 rounded-xl border border-success/20">
              <p className="text-foreground italic">
                "In 6 years of building MedSpa growth systems, we've never had a client 
                not see results within the first 30 days. That's why we can make this guarantee."
              </p>
              <div className="text-sm text-muted-foreground mt-2">
                - Abdirahman, Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;