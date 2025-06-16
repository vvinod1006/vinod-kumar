
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vvinod1006', icon: '🐙' },
    { name: 'Email', url: 'mailto:vinodkumar.vrc@gmail.com', icon: '✉️' },
    { name: 'Phone', url: 'tel:+919573269642', icon: '📞' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-portfolio rounded-full"></div>
              <span className="text-xl font-semibold font-poppins">V Vinod Kumar</span>
            </div>
            <p className="text-gray-400 mb-4">
              UI/UX Designer & Web Developer passionate about creating user-friendly 
              and modern digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.name === 'GitHub' ? '_blank' : undefined}
                  rel={link.name === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="text-2xl hover:scale-110 transition-transform"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Responsive Website Design</li>
              <li>UI/UX Design & Prototyping</li>
              <li>Web Application Development</li>
              <li>AI-Powered Design Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} V Vinod Kumar. All rights reserved. | Designed and Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
