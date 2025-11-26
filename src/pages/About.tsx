import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Excellence",
      description: "We deliver exceptional results that exceed expectations in every project.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Client-Focused",
      description: "Your success is our success. We prioritize your goals above all else.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Innovation",
      description: "We stay ahead of trends to give you a competitive edge in your market.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Collaboration",
      description: "We work as an extension of your team to achieve shared objectives.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>About RAMUSMKT</h1>
            <p className="text-xl text-muted-foreground">
              We are a premium digital marketing agency dedicated to transforming businesses through strategic innovation and data-driven excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-10 shadow-elegant animate-fade-in">
              <div className="text-accent mb-6">
                <Target className="w-16 h-16" />
              </div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower businesses worldwide with cutting-edge digital marketing solutions that drive sustainable growth, build lasting brands, and generate measurable ROI. We believe every business deserves access to world-class marketing expertise.
              </p>
            </Card>
            <Card className="p-10 shadow-elegant animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-accent mb-6">
                <Eye className="w-16 h-16" />
              </div>
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To become the most trusted digital marketing partner globally, recognized for transforming businesses through innovation, integrity, and exceptional results. We envision a future where every client achieves their full potential.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                RAMUSMKT was founded with a simple yet powerful vision: to democratize access to world-class digital marketing expertise. We recognized that many businesses struggled to navigate the complex digital landscape, and we knew we could help.
              </p>
              <p>
                What started as a small team of passionate marketers has grown into a full-service digital agency with over 50 specialists. Our journey has been defined by our unwavering commitment to client success, continuous innovation, and measurable results.
              </p>
              <p>
                Today, we've completed over 500 projects across diverse industries, generating millions in revenue for our clients. But what we're most proud of is the lasting relationships we've built and the businesses we've helped transform.
              </p>
              <p>
                Every project we undertake is an opportunity to push boundaries, challenge conventions, and deliver excellence. We don't just execute campaigns—we partner with you to build sustainable competitive advantages in your market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2>Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2>What Makes Us Different</h2>
              <p className="text-xl text-primary-foreground/80">
                We're not just another marketing agency. Here's why businesses choose RAMUSMKT:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Results-Obsessed</h3>
                <p className="text-primary-foreground/80">
                  We measure success by your ROI, not vanity metrics. Every strategy is designed to deliver tangible business outcomes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Transparent Communication</h3>
                <p className="text-primary-foreground/80">
                  No jargon, no smoke and mirrors. We explain our strategies clearly and report results honestly.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Cutting-Edge Expertise</h3>
                <p className="text-primary-foreground/80">
                  Our team stays ahead of industry trends and platform updates to keep your campaigns optimized.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Scalable Solutions</h3>
                <p className="text-primary-foreground/80">
                  Whether you're a startup or enterprise, we build strategies that grow with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center shadow-elegant max-w-4xl mx-auto">
            <h2 className="mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how RAMUSMKT can help transform your business through strategic digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
