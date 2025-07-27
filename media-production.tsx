"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Video,
  Camera,
  Mic,
  Radio,
  Palette,
  Share2,
  Clock,
  CheckCircle,
  Play,
  Zap,
  Users,
  Star,
  Calendar,
  Settings,
  Headphones,
  Film,
  ImageIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MediaProductionPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const services = [
    {
      id: "podcast-studio",
      title: "Podcast Studio Rental",
      description: "Professional 4K studio with engineer, green screen, and darkroom multiple scenes",
      icon: Mic,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      price: "$125",
      duration: "2-hour minimum",
      features: [
        "Professional 4K Recording",
        "Dedicated Audio Engineer",
        "Green Screen Technology",
        "Multiple Scene Setup",
        "Darkroom Available",
        "Post-Production Support",
      ],
      highlights: ["Most Popular", "Professional Grade"],
    },
    {
      id: "photography-videography",
      title: "Photography & Videography",
      description: "Full-service production with high-quality equipment and post-production",
      icon: Camera,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      price: "Custom Pricing",
      duration: "Based on project scope",
      features: [
        "Professional Photography",
        "4K Video Production",
        "High-End Equipment",
        "Creative Direction",
        "Post-Production Editing",
        "Color Grading & Effects",
      ],
      highlights: ["Full Service", "Custom Solutions"],
    },
    {
      id: "live-streaming",
      title: "Live Streaming Services",
      description: "Broadcast your events in professional 4K quality",
      icon: Radio,
      gradient: "from-red-600 via-red-500 to-orange-400",
      price: "$500 - $1,500",
      duration: "4-hour sessions",
      features: [
        "4K Quality Streaming",
        "Multi-Camera Setup",
        "Professional Audio",
        "Real-Time Monitoring",
        "Platform Integration",
        "Technical Support",
      ],
      pricing: [
        { option: "1 Camera Setup", price: "$500", duration: "4 hours" },
        { option: "3 Camera Setup", price: "$1,500", duration: "4 hours" },
      ],
      highlights: ["Live Events", "Multi-Platform"],
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Branding, content creation, and audience engagement strategies",
      icon: Share2,
      gradient: "from-green-600 via-emerald-500 to-teal-400",
      price: "$225 - $500",
      duration: "Monthly packages",
      features: [
        "Content Strategy",
        "Brand Development",
        "Audience Engagement",
        "Analytics & Reporting",
        "Multi-Platform Management",
        "Growth Optimization",
      ],
      pricing: [
        { option: "Basic Package", price: "$225", duration: "Monthly" },
        { option: "Premium Package", price: "$500", duration: "Monthly" },
      ],
      highlights: ["Growth Focused", "Multi-Platform"],
    },
  ]

  const addOns = [
    {
      title: "Photography Session",
      price: "$125",
      icon: ImageIcon,
      description: "Professional photo shoot with editing",
    },
    {
      title: "Graphic Design",
      price: "$50",
      icon: Palette,
      description: "Custom graphics and visual elements",
    },
    {
      title: "Video Vignettes",
      price: "$225",
      icon: Film,
      description: "30-second promotional videos",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "500+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Studio Availability", value: "85%", icon: Calendar },
    { label: "Average Turnaround", value: "3 Days", icon: Clock },
  ]

  const recentWork = [
    {
      title: "Tech Startup Launch Event",
      type: "Live Streaming",
      client: "InnovateDC",
      duration: "4 hours",
      setup: "3 Camera",
    },
    {
      title: "Community Leader Podcast Series",
      type: "Podcast Production",
      client: "DMV Leaders",
      episodes: "12 episodes",
      setup: "Full Studio",
    },
    {
      title: "Small Business Brand Package",
      type: "Photography & Video",
      client: "Local Restaurant",
      deliverables: "50+ assets",
      setup: "On-location",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="backdrop-blur-lg bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => (window.location.href = "/")}
                className="hover:bg-purple-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Media Production Studio
                  </h1>
                  <p className="text-sm text-slate-500">Professional Content Creation Services</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Book Studio
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Professional-Grade Content Creation
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Elevate Your Brand with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Premium Media Production
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            From podcast studios to live streaming, photography to social media management - we provide comprehensive
            media production services to enhance your brand storytelling and audience engagement.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="backdrop-blur-lg bg-white/60 border-white/30 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Professional Media Services</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`group backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer overflow-hidden ${
                  hoveredCard === service.id ? "ring-2 ring-purple-400 ring-opacity-50" : ""
                }`}
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
                      <div className="flex gap-2 mb-2">
                        {service.highlights?.map((highlight, index) => (
                          <Badge
                            key={index}
                            variant={highlight === "Most Popular" ? "default" : "secondary"}
                            className={
                              highlight === "Most Popular"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-blue-100 text-blue-700"
                            }
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-slate-800">{service.price}</p>
                      <p className="text-sm text-slate-500">{service.duration}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {service.pricing && (
                    <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-3">Pricing Options:</h4>
                      {service.pricing.map((option, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                          <span className="text-sm text-slate-600">{option.option}</span>
                          <div className="text-right">
                            <span className="font-bold text-slate-800">{option.price}</span>
                            <span className="text-xs text-slate-500 ml-1">/ {option.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-Ons Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Professional Add-Ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card
                key={addon.title}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <addon.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{addon.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-purple-600 mb-4">{addon.price}</div>
                  <Button
                    variant="outline"
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    Add to Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Work */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentWork.map((project, index) => (
              <Card
                key={project.title}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-purple-600 border-purple-200">
                      {project.type}
                    </Badge>
                    <Play className="w-5 h-5 text-slate-400" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">{project.title}</CardTitle>
                  <p className="text-sm text-slate-600">Client: {project.client}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    {project.duration && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        Duration: {project.duration}
                      </div>
                    )}
                    {project.episodes && (
                      <div className="flex items-center">
                        <Headphones className="w-4 h-4 mr-2 text-green-500" />
                        {project.episodes}
                      </div>
                    )}
                    {project.deliverables && (
                      <div className="flex items-center">
                        <ImageIcon className="w-4 h-4 mr-2 text-orange-500" />
                        {project.deliverables}
                      </div>
                    )}
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 mr-2 text-purple-500" />
                      Setup: {project.setup}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="backdrop-blur-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 border-white/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Video className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Create Something Amazing?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Whether you need a professional podcast studio, live streaming setup, or comprehensive media production
                services, our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Studio Time
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  <Users className="w-5 h-5 mr-2" />
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
