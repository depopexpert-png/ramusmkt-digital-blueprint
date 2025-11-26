import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "10 Digital Marketing Trends to Watch in 2025",
      category: "Trends",
      excerpt: "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in the coming year.",
      date: "November 15, 2024",
      readTime: "8 min read",
      author: "Marketing Team",
    },
    {
      title: "The Complete Guide to SEO for Small Businesses",
      category: "SEO",
      excerpt: "Everything small business owners need to know about search engine optimization to increase organic traffic and grow their online presence.",
      date: "November 10, 2024",
      readTime: "12 min read",
      author: "SEO Specialists",
    },
    {
      title: "How to Create High-Converting Landing Pages",
      category: "Conversion",
      excerpt: "Learn the proven strategies and design principles that turn visitors into customers with optimized landing pages.",
      date: "November 5, 2024",
      readTime: "10 min read",
      author: "Design Team",
    },
    {
      title: "Social Media Marketing: Platform Comparison 2024",
      category: "Social Media",
      excerpt: "An in-depth analysis of major social platforms to help you choose the right channels for your business goals.",
      date: "October 28, 2024",
      readTime: "15 min read",
      author: "Social Team",
    },
    {
      title: "Email Marketing Best Practices for Higher Engagement",
      category: "Email Marketing",
      excerpt: "Discover proven techniques to improve your email open rates, click-through rates, and overall campaign performance.",
      date: "October 20, 2024",
      readTime: "9 min read",
      author: "Content Team",
    },
    {
      title: "Understanding Marketing Analytics: A Beginner's Guide",
      category: "Analytics",
      excerpt: "Demystifying marketing analytics and showing you how to use data to make better marketing decisions.",
      date: "October 12, 2024",
      readTime: "11 min read",
      author: "Analytics Team",
    },
    {
      title: "Building a Strong Brand Identity in the Digital Age",
      category: "Branding",
      excerpt: "Strategic insights on creating and maintaining a compelling brand identity that resonates with your target audience.",
      date: "October 5, 2024",
      readTime: "13 min read",
      author: "Brand Strategy",
    },
    {
      title: "PPC Advertising: Maximizing ROI on Limited Budgets",
      category: "PPC",
      excerpt: "Smart strategies for getting the most out of your paid advertising budget, regardless of company size.",
      date: "September 28, 2024",
      readTime: "10 min read",
      author: "PPC Team",
    },
    {
      title: "Content Marketing: Creating Content That Converts",
      category: "Content",
      excerpt: "Master the art of content creation that not only attracts audiences but also drives meaningful business results.",
      date: "September 20, 2024",
      readTime: "14 min read",
      author: "Content Strategy",
    },
  ];

  const categories = ["All", "Trends", "SEO", "Social Media", "Email Marketing", "Analytics", "Branding", "PPC", "Content"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Blog & Resources</h1>
            <p className="text-xl text-muted-foreground">
              Expert insights, industry trends, and actionable strategies to help you succeed in digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge>Featured Article</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">{articles[0].title}</h2>
                <p className="text-lg text-muted-foreground">{articles[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <Button variant="accent" size="lg">
                  Read Article <ArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-gold/20 rounded-xl aspect-video flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <span className="text-5xl">📝</span>
                </div>
                <Badge className="mb-3 w-fit">{article.category}</Badge>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full">
                  Read More <ArrowRight className="ml-2" size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2>Stay Updated</h2>
            <p className="text-xl text-primary-foreground/80">
              Get the latest digital marketing insights, tips, and strategies delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-foreground"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Join 5,000+ marketers receiving our weekly newsletter
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
