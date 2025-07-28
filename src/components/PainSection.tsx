import { MessageSquare, Phone, DollarSign } from 'lucide-react';

const PainSection = () => {
  const painPoints = [
    {
      icon: MessageSquare,
      title: "DMs Full of Questions",
      description: "Your Instagram DMs are full of questions, but few turn into actual patients."
    },
    {
      icon: Phone,
      title: "Repetitive Staff Calls",
      description: "Your staff spends hours on the phone answering the same basic questions over and over."
    },
    {
      icon: DollarSign,
      title: "Inefficient Ad Spend",
      description: "You're spending a fortune on ads that drive traffic, but the booking process is manual and inefficient."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Does This Sound Familiar?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth text-center group animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-destructive/20 transition-smooth">
                <point.icon className="w-8 h-8 text-destructive" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {point.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <div className="text-center mt-16 animate-fade-in delay-700">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These problems are costing you patients, revenue, and peace of mind. 
            <span className="text-primary font-semibold"> But it doesn't have to be this way.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;