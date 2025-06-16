import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen bg-gradient-portfolio relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-white/10 rounded-full"></div>
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Available for new opportunities
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              Hi, I'm <br />
              <span className="text-yellow-300">V Vinod Kumar</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-medium text-purple-100">
              UI/UX Designer & Web Developer
            </h2>
            
            <p className="text-lg text-purple-100 max-w-lg leading-relaxed">
              I'm passionate about creating user-friendly and modern websites using the latest technologies and AI tools. 
              Currently pursuing B.Tech in CSE while building responsive websites for local businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToProjects} size="lg" className="bg-white text-purple-600 hover:bg-gray-100 transition-colors">
                View My Work
              </Button>
              <Button onClick={scrollToContact} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-colors">
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <img alt="V Vinod Kumar - UI/UX Designer & Web Developer" className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl" src="/lovable-uploads/65bcace6-8cee-4d52-b435-8515c451d669.jpg" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">UI</span>
                </div>
              </div>
              
              <div className="absolute top-1/4 -right-8 bg-white rounded-2xl p-3 shadow-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CSS</span>
                </div>
              </div>
            </div>
            
            {/* Profile card */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-xl min-w-64">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800">Web Designer</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Hi there! I'm Vinod, a passionate web designer who loves to take challenges and create stunning website designs.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <span className="text-green-500 mr-2">●</span>
                  <span className="text-sm font-medium">+91 9573269642</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;