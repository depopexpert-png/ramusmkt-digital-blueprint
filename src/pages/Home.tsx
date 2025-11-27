import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, Target, Zap, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Digital Strategy",
      description: "Data-driven strategies that align with your business goals and drive measurable growth.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Social Media Marketing",
      description: "Build engaged communities and amplify your brand across all major platforms.",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics & Insights",
      description: "Transform data into actionable insights that fuel smarter business decisions.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Marketing Automation",
      description: "Streamline your marketing processes and scale your campaigns efficiently.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO & Growth",
      description: "Increase visibility and drive organic traffic with proven SEO strategies.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Brand Protection",
      description: "Safeguard your brand reputation with comprehensive monitoring and management.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "RAMUSMKT transformed our digital presence. Our leads increased by 300% in just 3 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "Professional, results-driven, and always ahead of the curve. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, BrandBoost",
      content: "The ROI we've seen from working with RAMUSMKT has exceeded all our expectations.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10M+", label: "Revenue Generated" },
    { number: "50+", label: "Team Experts" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="leading-tight">
              Transform Your Business with{" "}
              <span className="gradient-primary text-gradient">Digital Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              RAMUSMKT delivers premium digital marketing solutions that drive growth, build brands, and generate measurable results for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-black text-accent">{stat.number}</div>
                <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2>Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital marketing solutions tailored to your unique business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link to="/services" className="text-accent font-semibold inline-flex items-center hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2>Why Choose RAMUSMKT?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Proven Track Record</h4>
                    <p className="text-muted-foreground">Over 500 successful projects with measurable ROI and client satisfaction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Data-Driven Strategies</h4>
                    <p className="text-muted-foreground">Every decision backed by analytics and insights for maximum impact.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Team</h4>
                    <p className="text-muted-foreground">50+ specialists with deep expertise across all digital channels.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Transparent Reporting</h4>
                    <p className="text-muted-foreground">Real-time dashboards and detailed reports keep you informed every step.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 shadow-elegant">
                <h3 className="text-2xl font-bold mb-6">Ready to Grow Your Business?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can help you achieve your marketing goals and drive sustainable growth.
                </p>
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2>What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from businesses we've helped succeed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust RAMUSMKT for their digital marketing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
