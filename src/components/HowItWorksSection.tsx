import { MessageCircle, UserCheck, Calendar } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: MessageCircle,
      title: "Patient Discovers You",
      description: "A potential patient finds you on Instagram or your website and starts a chat with your AI Concierge.",
      color: "primary"
    },
    {
      step: "02", 
      icon: UserCheck,
      title: "AI Qualifies & Engages",
      description: "The AI answers their questions, qualifies their needs, and confirms they are a good fit for your clinic.",
      color: "accent"
    },
    {
      step: "03",
      icon: Calendar,
      title: "Instant Booking",
      description: "The AI presents your calendar, and the patient books their appointment instantly. You get a notification.",
      color: "success"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to Automated Growth 
            <span className="block text-primary">in 3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI Concierge transforms casual inquiries into confirmed appointments 
            with zero manual intervention from your team.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                <div className="relative h-1 bg-gradient-to-r from-primary via-accent to-success rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-success rounded-full animate-pulse opacity-50"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`text-center animate-fade-in`}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    {/* Step Circle */}
                    <div className={`relative w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br ${
                      step.color === 'primary' ? 'from-primary to-primary-hover' :
                      step.color === 'accent' ? 'from-accent to-accent-hover' :
                      'from-success to-success/80'
                    } shadow-elegant flex items-center justify-center group hover:shadow-glow transition-smooth`}>
                      <step.icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center text-sm font-bold text-foreground">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-6 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${
                  step.color === 'primary' ? 'from-primary to-primary-hover' :
                  step.color === 'accent' ? 'from-accent to-accent-hover' :
                  'from-success to-success/80'
                } shadow-elegant flex items-center justify-center relative`}>
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-background border-2 border-border rounded-full flex items-center justify-center text-xs font-bold text-foreground">
                    {step.step}
                  </div>
                </div>

                <div className="flex-1 bg-card rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see this in action for your practice?
          </p>
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-foreground font-medium">Setup takes less than 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;