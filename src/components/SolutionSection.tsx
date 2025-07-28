import { Bot, Clock, Heart, TrendingUp } from 'lucide-react';

const SolutionSection = () => {
  const benefits = [
    {
      icon: Bot,
      title: "AI-Powered Excellence",
      description: "Advanced AI that understands your patients' needs"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a potential patient, even while you sleep"
    },
    {
      icon: Heart,
      title: "Exceptional Experience",
      description: "Create a flawless client journey from first click"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Consistent growth without the manual effort"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            The Effortless Way to <span className="text-primary">Grow Your Practice</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Introducing the AI Concierge—a fully managed system designed exclusively for elite MedSpas. 
            It works around the clock to engage, qualify, and book your ideal patients, creating a 
            flawless client experience from the very first click and freeing your team to focus on 
            what they do best: <span className="text-primary font-semibold">delivering exceptional care.</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`text-center group animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant group-hover:shadow-glow transition-smooth">
                <benefit.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Value Proposition */}
        <div className="bg-gradient-subtle rounded-3xl p-12 shadow-card animate-fade-in delay-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Transform Your Practice Today
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Join the elite MedSpas who have already revolutionized their patient acquisition. 
                Our AI Concierge doesn't just book appointments—it creates an experience that 
                builds trust and excitement before your patients even walk through your door.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">Instant patient qualification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">Seamless booking experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">Higher conversion rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">Reduced staff workload</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-elegant">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm text-muted-foreground mb-6">More Qualified Leads</div>
                  
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground mb-6">Reduction in No-Shows</div>
                  
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Patient Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;