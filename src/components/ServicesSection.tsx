
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Responsive Website Design',
      description: 'Custom responsive websites for local businesses that work perfectly on all devices. Built with modern technologies and optimized for performance.',
      features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'SEO Optimized', 'Fast Loading'],
      icon: '🌐',
      price: 'Starting from ₹15,000'
    },
    {
      title: 'UI/UX Design & Prototyping',
      description: 'User-centered design solutions using Figma. From wireframes to high-fidelity prototypes that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      icon: '🎨',
      price: 'Starting from ₹8,000'
    },
    {
      title: 'Web Application Development',
      description: 'Custom web applications using modern JavaScript and Java technologies. Scalable solutions for your business needs.',
      features: ['Frontend Development', 'Backend Integration', 'Database Design', 'API Development'],
      icon: '⚡',
      price: 'Starting from ₹25,000'
    },
    {
      title: 'AI-Powered Design Solutions',
      description: 'Leverage cutting-edge AI tools to accelerate design and development processes while maintaining quality and creativity.',
      features: ['AI-Assisted Design', 'Automated Workflows', 'Smart Content Generation', 'Design Optimization'],
      icon: '🤖',
      price: 'Custom Pricing'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">Services I Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I provide comprehensive digital solutions to help businesses establish a strong online presence and achieve their goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-portfolio-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-portfolio-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-portfolio-primary font-semibold">{service.price}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-portfolio text-white hover:opacity-90 transition-opacity"
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-portfolio text-white border-none inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-purple-100 mb-6 max-w-md">
                Let's discuss your ideas and create something amazing together. Schedule a free consultation today!
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
