import { Button } from '@/components/ui/button';
import { 
  Bot, 
  UserCheck, 
  MessageSquare, 
  Calendar, 
  Bell, 
  Wrench, 
  BarChart3,
  Check,
  Star
} from 'lucide-react';

const OfferSection = () => {
  const services = [
    {
      icon: Bot,
      title: "The AI Concierge System",
      description: "A sophisticated, 24/7 AI-powered chatbot deployed on both the clinic's Instagram DMs and Website. It acts as a virtual front desk."
    },
    {
      icon: UserCheck,
      title: "Intelligent Lead Qualification",
      description: "The AI is trained to ask key qualifying questions (e.g., service of interest, previous treatments, budget) to separate serious prospects from casual inquiries."
    },
    {
      icon: MessageSquare,
      title: "Instant & Automated FAQ Handling",
      description: "The AI provides immediate, accurate answers to the top 20 most common questions, freeing up human staff entirely from this repetitive task."
    },
    {
      icon: Calendar,
      title: "Seamless Booking Integration",
      description: "Once a lead is qualified, the AI seamlessly presents a link to a dedicated Calendly booking page to schedule a consultation or appointment directly within the chat."
    },
    {
      icon: Bell,
      title: "Automated Appointment Reminders",
      description: "Drastically reduce no-shows with automated SMS and WhatsApp reminders sent 24 hours and 2 hours before the appointment."
    },
    {
      icon: Wrench,
      title: '"White-Glove" Onboarding',
      description: "A complete done-for-you setup, including all technical integration, copywriting for the AI, and system testing."
    },
    {
      icon: BarChart3,
      title: "Monthly Performance Snapshot",
      description: "A simple, one-page report delivered monthly, showing key metrics: Leads Engaged, Leads Qualified, Appointments Booked, and a calculated Estimated ROI."
    }
  ];

  const valueProps = [
    "No setup fees or hidden costs",
    "Cancel anytime, no contracts",
    "Dedicated success manager",
    "Priority technical support",
    "Custom AI training for your services",
    "Integration with existing systems"
  ];

  return (
    <section id="whats-included" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your "Founding Partner" 
            <span className="block text-primary">AI Concierge Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your patient acquisition process, 
            delivered with white-glove service and ongoing support.
          </p>
        </div>

        {/* Main Package Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 shadow-elegant">
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Value Props */}
            <div className="bg-card rounded-2xl p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Founding Partner Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {valueProps.map((prop, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 animate-fade-in`}
                    style={{ animationDelay: `${(index + 7) * 100}ms` }}
                  >
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="text-center bg-gradient-hero rounded-2xl p-8 text-white">
              <div className="mb-6">
                <div className="text-lg text-white/80 mb-2">Founding Partner Investment</div>
                <div className="text-5xl font-bold mb-2">$497<span className="text-2xl font-normal">/month</span></div>
                <div className="text-white/80">
                  <span className="line-through">Regular Price: $997/month</span>
                  <span className="block text-accent font-semibold">Save $500/month as a Founding Partner</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full max-w-md mx-auto bg-accent hover:bg-accent-hover"
                >
                  Secure Your Founding Partner Spot
                </Button>
                <p className="text-sm text-white/80">
                  Only 10 founding partner spots available this month
                </p>
              </div>

              <div className="text-sm text-white/60">
                * Price increases to $997/month after founding partner program ends
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
            <div className="text-muted-foreground">Money-Back Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5 Min</div>
            <div className="text-muted-foreground">Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Included</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;