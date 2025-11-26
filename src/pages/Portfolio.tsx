import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Marketing", "Web Design", "Branding", "SEO", "E-commerce"];

  const projects = [
    {
      title: "TechStart Inc. - Digital Transformation",
      category: "Marketing",
      description: "Complete digital marketing overhaul resulting in 300% lead increase",
      results: ["300% increase in leads", "125% ROI improvement", "50% reduction in CAC"],
      testimonial: "RAMUSMKT transformed our entire digital presence. The results speak for themselves.",
    },
    {
      title: "GrowthCo - Brand Relaunch",
      category: "Branding",
      description: "Full rebrand and launch campaign across multiple channels",
      results: ["400% brand awareness increase", "2M+ social impressions", "85% positive sentiment"],
      testimonial: "The branding work was exceptional. Our market position changed overnight.",
    },
    {
      title: "EcoShop - E-commerce Growth",
      category: "E-commerce",
      description: "Scaling online store from startup to 7-figure revenue",
      results: ["$1.2M revenue in 6 months", "350% traffic growth", "4.5x conversion rate"],
      testimonial: "We couldn't have scaled this fast without RAMUSMKT's expertise.",
    },
    {
      title: "HealthPlus - SEO Domination",
      category: "SEO",
      description: "Taking local clinic to #1 rankings in competitive healthcare market",
      results: ["#1 rankings for 50+ keywords", "500% organic traffic increase", "200+ quality backlinks"],
      testimonial: "Our appointment bookings tripled after the SEO campaign launched.",
    },
    {
      title: "FinanceHub - Website Redesign",
      category: "Web Design",
      description: "Modern, conversion-optimized website for financial services firm",
      results: ["85% conversion increase", "60% faster load times", "95% mobile performance"],
      testimonial: "The new website has become our best sales tool. Beautiful and functional.",
    },
    {
      title: "FashionForward - Social Media Campaign",
      category: "Marketing",
      description: "Viral social campaign driving brand awareness and sales",
      results: ["5M+ impressions", "200k+ engagements", "$500k attributed revenue"],
      testimonial: "The campaign went beyond our wildest expectations. Truly viral.",
    },
    {
      title: "LegalEase - Content Strategy",
      category: "Branding",
      description: "Thought leadership content positioning law firm as industry authority",
      results: ["100+ published articles", "500% website traffic", "50+ qualified leads/month"],
      testimonial: "We're now seen as thought leaders in our space thanks to the content strategy.",
    },
    {
      title: "FoodieBox - Email Marketing",
      category: "Marketing",
      description: "Automated email sequences driving repeat purchases",
      results: ["45% open rate", "8.5% CTR", "$250k email revenue"],
      testimonial: "Email has become our most profitable channel by far.",
    },
    {
      title: "TravelMore - PPC Campaigns",
      category: "Marketing",
      description: "High-performance paid advertising across Google and Meta",
      results: ["4.2x ROAS", "$2M revenue", "32% YoY growth"],
      testimonial: "The ROAS we're seeing is the best we've ever had with any agency.",
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Real results from real clients. Explore case studies showcasing our proven track record of driving business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-1">
                  <Badge className="mb-4">{project.category}</Badge>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2">✓</span>
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-muted-foreground mb-6">
                    "{project.testimonial}"
                  </blockquote>
                </div>

                <Button variant="ghost" className="w-full justify-center">
                  View Case Study <ExternalLink className="ml-2" size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Want Results Like These?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom strategy to achieve your business goals.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="/contact">Start Your Success Story</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
