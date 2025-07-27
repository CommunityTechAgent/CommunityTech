"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Smartphone,
  Database,
  FileText,
  Calendar,
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Code,
  Server,
  CheckCircle,
  Zap,
  Star,
  Clock,
  DollarSign,
  Layers,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DevelopmentPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const developmentServices = [
    {
      id: "basic-app",
      title: "Basic App Development",
      description: "Essential applications for small businesses and organizations",
      icon: Smartphone,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      price: "$500",
      hosting: "$125/month",
      features: [
        "Custom Mobile App",
        "Basic Database Integration",
        "User Authentication",
        "Content Management",
        "Basic Analytics",
        "1 Month Support",
      ],
      idealFor: ["Small Businesses", "Startups", "Non-Profits", "Personal Projects"],
      timeline: "2-4 weeks",
      highlights: ["Most Popular", "Quick Start"],
    },
    {
      id: "custom-app",
      title: "Custom App Development",
      description: "Tailored solutions for camps, schools, organizations, restaurants, and retail",
      icon: Code,
      gradient: "from-orange-600 via-orange-500 to-yellow-400",
      price: "$2,500 avg",
      hosting: "$125/month",
      features: [
        "Fully Custom Design",
        "Advanced Database Systems",
        "Multi-User Management",
        "Payment Integration",
        "Advanced Analytics",
        "3 Months Support",
        "Training Included",
      ],
      idealFor: ["Schools", "Restaurants", "Retail Stores", "Organizations"],
      timeline: "6-12 weeks",
      highlights: ["Custom Solution", "Full Service"],
    },
    {
      id: "enterprise-app",
      title: "Enterprise Solutions",
      description: "Complex data-driven applications for large organizations",
      icon: Database,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      price: "Custom Quote",
      hosting: "Custom Hosting",
      features: [
        "Enterprise Architecture",
        "Complex Database Design",
        "API Development",
        "Third-party Integrations",
        "Advanced Security",
        "Ongoing Support",
        "Scalable Infrastructure",
      ],
      idealFor: ["Large Organizations", "Government", "Healthcare", "Finance"],
      timeline: "3-6 months",
      highlights: ["Enterprise Grade", "Scalable"],
    },
  ]

  const addOnServices = [
    {
      title: "Scheduling System",
      price: "$50/month",
      icon: Calendar,
      description: "Advanced appointment and event scheduling",
      features: ["Calendar Integration", "Automated Reminders", "Multi-User Support"],
    },
    {
      title: "Ordering System",
      price: "$50/month",
      icon: ShoppingCart,
      description: "E-commerce and ordering functionality",
      features: ["Payment Processing", "Inventory Management", "Order Tracking"],
    },
    {
      title: "Survey & Polls",
      price: "$50/month",
      icon: MessageSquare,
      description: "Data collection and feedback systems",
      features: ["Custom Forms", "Analytics Dashboard", "Export Options"],
    },
    {
      title: "Advanced Analytics",
      price: "$75/month",
      icon: BarChart3,
      description: "Comprehensive data insights and reporting",
      features: ["Real-time Dashboards", "Custom Reports", "Data Visualization"],
    },
  ]

  const stats = [
    { label: "Apps Developed", value: "150+", icon: Smartphone },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Average Timeline", value: "8 weeks", icon: Clock },
    { label: "Ongoing Support", value: "24/7", icon: Settings },
  ]

  const recentProjects = [
    {
      title: "Restaurant Management App",
      client: "Local Restaurant Chain",
      type: "Custom Development",
      features: ["Ordering System", "Staff Management", "Analytics"],
      timeline: "10 weeks",
      budget: "$3,200",
    },
    {
      title: "School Portal System",
      client: "Private Academy",
      type: "Educational Platform",
      features: ["Student Management", "Grade Tracking", "Parent Portal"],
      timeline: "12 weeks",
      budget: "$4,500",
    },
    {
      title: "Event Management App",
      client: "Community Organization",
      type: "Event Platform",
      features: ["Registration", "Scheduling", "Payment Processing"],
      timeline: "8 weeks",
      budget: "$2,800",
    },
  ]

  const developmentProcess = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Understanding your needs and creating a detailed project plan",
      icon: FileText,
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Creating user-friendly designs and interactive prototypes",
      icon: Layers,
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Building your application with rigorous testing throughout",
      icon: Code,
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Launching your app and providing ongoing maintenance",
      icon: Server,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="backdrop-blur-lg bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => (window.location.href = "/")}
                className="hover:bg-orange-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                    App Development Services
                  </h1>
                  <p className="text-sm text-slate-500">Custom Digital Solutions for Your Business</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
              <MessageSquare className="w-4 h-4 mr-2" />
              Start Project
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Custom App Development Solutions
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Custom Applications
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            From simple business apps to complex data-driven solutions, we create tailored applications for camps,
            schools, organizations, restaurants, and retail businesses that drive growth and efficiency.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="backdrop-blur-lg bg-white/60 border-white/30 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Development Service Tiers</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {developmentServices.map((service) => (
              <Card
                key={service.id}
                className={`group backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer overflow-hidden ${
                  hoveredCard === service.id ? "ring-2 ring-orange-400 ring-opacity-50" : ""
                } ${service.id === "custom-app" ? "lg:scale-105 ring-2 ring-orange-300" : ""}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon
                        className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                      />
                    </div>
                    <div className="text-right">
                      <div className="flex gap-2 mb-2 flex-wrap justify-end">
                        {service.highlights?.map((highlight, index) => (
                          <Badge
                            key={index}
                            variant={highlight === "Most Popular" ? "default" : "secondary"}
                            className={
                              highlight === "Most Popular"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-blue-100 text-blue-700"
                            }
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-slate-800">{service.price}</p>
                      <p className="text-sm text-slate-500">+ {service.hosting} hosting</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                </CardHeader>
                <CardContent>
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Includes:</h4>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Timeline & Ideal For */}
                  <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-slate-700">Timeline:</span>
                      <span className="text-sm text-slate-600">{service.timeline}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Ideal For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((use, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {use}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-On Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Add-On Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((addon, index) => (
              <Card
                key={addon.title}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <addon.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{addon.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-orange-600 mb-4">{addon.price}</div>
                  <div className="space-y-1 mb-4">
                    {addon.features.map((feature, index) => (
                      <div key={index} className="text-xs text-slate-500">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    Add to Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((process, index) => (
              <Card
                key={process.step}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <process.icon className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{process.title}</h4>
                  <p className="text-sm text-slate-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Recent Development Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <Card
                key={project.title}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-orange-600 border-orange-200">
                      {project.type}
                    </Badge>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-800">{project.budget}</p>
                      <p className="text-xs text-slate-500">{project.timeline}</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">{project.title}</CardTitle>
                  <p className="text-sm text-slate-600">Client: {project.client}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    <h4 className="font-semibold text-slate-800">Key Features:</h4>
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="backdrop-blur-lg bg-gradient-to-r from-orange-600/10 to-yellow-500/10 border-white/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Code className="w-16 h-16 text-orange-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Build Your Custom App?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Whether you need a simple business app or a complex data-driven solution, our experienced development
                team is ready to bring your vision to life with cutting-edge technology and ongoing support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-3 hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
