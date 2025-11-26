import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  TrendingUp,
  Megaphone,
  Globe,
  ShoppingCart,
  Lightbulb,
  Zap,
  Mail,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Digital Marketing Strategy",
      description: "Comprehensive marketing strategies aligned with your business objectives.",
      features: [
        "Market research & competitive analysis",
        "Customer persona development",
        "Multi-channel campaign planning",
        "KPI framework & performance tracking",
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Social Media Marketing",
      description: "Build engaged communities and amplify your brand across platforms.",
      features: [
        "Content strategy & creation",
        "Community management",
        "Influencer partnerships",
        "Social advertising campaigns",
      ],
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Paid Advertising",
      description: "Maximize ROI with targeted ad campaigns across Google, Meta, and more.",
      features: [
        "Google Ads & PPC management",
        "Facebook & Instagram ads",
        "LinkedIn advertising",
        "Retargeting campaigns",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO & Website Traffic Growth",
      description: "Increase organic visibility and drive qualified traffic to your website.",
      features: [
        "Technical SEO audits",
        "On-page optimization",
        "Link building strategies",
        "Local SEO",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Design & Landing Pages",
      description: "Create high-converting websites that deliver exceptional user experiences.",
      features: [
        "Responsive web design",
        "Landing page optimization",
        "Conversion rate optimization",
        "A/B testing",
      ],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Marketing",
      description: "Drive sales and grow your online store with specialized e-commerce strategies.",
      features: [
        "Product listing optimization",
        "Shopping feed management",
        "Cart abandonment recovery",
        "Customer retention campaigns",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Branding & Content Strategy",
      description: "Develop compelling brand narratives that resonate with your target audience.",
      features: [
        "Brand identity development",
        "Content marketing strategy",
        "Copywriting & storytelling",
        "Video production",
      ],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Marketing Automation",
      description: "Streamline workflows and scale your marketing with intelligent automation.",
      features: [
        "CRM integration",
        "Lead nurturing workflows",
        "Behavioral triggers",
        "Performance analytics",
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Lead Generation",
      description: "Attract and convert high-quality leads with proven acquisition strategies.",
      features: [
        "Lead magnet creation",
        "Landing page optimization",
        "Lead scoring systems",
        "Conversion funnel design",
      ],
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Marketing",
      description: "Build lasting customer relationships with personalized email campaigns.",
      features: [
        "Email list segmentation",
        "Campaign design & copywriting",
        "Automation sequences",
        "Performance optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital marketing solutions designed to drive growth, build brands, and generate measurable results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2>Our Process</h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology that delivers consistent results
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
                <h4 className="font-bold text-lg">Discovery</h4>
                <p className="text-sm text-muted-foreground">
                  We learn about your business, goals, and target audience
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
                <h4 className="font-bold text-lg">Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  We develop a data-driven plan tailored to your objectives
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
                <h4 className="font-bold text-lg">Execution</h4>
                <p className="text-sm text-muted-foreground">
                  We implement campaigns with precision and attention to detail
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  4
                </div>
                <h4 className="font-bold text-lg">Optimize</h4>
                <p className="text-sm text-muted-foreground">
                  We continuously refine strategies based on performance data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for your business and how we can help you achieve your goals.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
