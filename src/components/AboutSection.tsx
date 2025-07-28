import founderPhoto from '@/assets/founder-photo.jpg';
import { Linkedin, Mail, Award, Users } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      metric: "500+",
      label: "MedSpas Helped"
    },
    {
      icon: Award,
      metric: "$50M+",
      label: "Revenue Generated"
    },
    {
      icon: Award,
      metric: "6 Years",
      label: "Industry Experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Meet Your Success Partner
                </h2>
                
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    Hi, I'm <span className="text-primary font-semibold">Abdirahman</span>. 
                    After seeing countless MedSpa owners struggle with the technology gap in client acquisition, 
                    I founded <span className="text-primary font-semibold">AI Concierge</span> with a single mission: 
                    to provide a powerful, done-for-you solution that delivers measurable results, allowing you to 
                    focus on changing lives through your practice.
                  </p>
                  
                  <p>
                    Over the past 6 years, I've worked with elite aesthetic practices across the country, 
                    helping them streamline their patient acquisition process and scale their revenue. 
                    I've seen firsthand how the right technology can transform a struggling practice into 
                    a thriving, profitable business.
                  </p>
                  
                  <p>
                    The AI Concierge system is the culmination of everything I've learned about what works 
                    in the aesthetic industry. It's not just another chatbot—it's a complete patient 
                    acquisition system designed specifically for the unique needs of MedSpas.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`text-center animate-fade-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{achievement.metric}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:abdirahman@aiconcierge.com" 
                  className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                  <span>Connect directly</span>
                </a>
                <div className="w-px h-6 bg-border"></div>
                <a 
                  href="https://linkedin.com" 
                  className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="animate-fade-in delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-card rounded-3xl p-8 shadow-elegant">
                  <img 
                    src={founderPhoto} 
                    alt="Abdirahman, Founder of AI Concierge"
                    className="w-full h-96 object-cover rounded-2xl mb-6"
                  />
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Abdirahman</h3>
                    <p className="text-muted-foreground mb-4">Founder & CEO, AI Concierge</p>
                    
                    <div className="bg-gradient-subtle rounded-xl p-4">
                      <p className="text-sm text-muted-foreground italic">
                        "My goal is simple: help you build the practice of your dreams 
                        without getting overwhelmed by technology."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mt-20 text-center animate-fade-in delay-700">
          <div className="bg-gradient-subtle rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To bridge the technology gap for aesthetic practices, providing elite MedSpas with 
              the tools they need to thrive in the digital age while maintaining the personal 
              touch that makes their practice special. We believe every aesthetic practitioner 
              deserves access to cutting-edge technology that works as hard as they do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;