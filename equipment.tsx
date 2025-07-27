"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Laptop,
  Gamepad2,
  Plane,
  Projector,
  Monitor,
  Clock,
  CheckCircle,
  Calendar,
  Zap,
  Users,
  Star,
  Settings,
  Trophy,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EquipmentPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const equipmentCategories = [
    {
      id: "laptop-lab",
      title: "Laptop Lab Rental",
      description: "Ideal for group training & business needs",
      icon: Laptop,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      pricing: [
        { option: "Full Lab Rental", price: "$120", duration: "per day", description: "Complete lab setup" },
        { option: "Individual Laptop", price: "$10", duration: "per day", description: "Single laptop rental" },
      ],
      features: [
        "High-Performance Laptops",
        "Pre-configured Software",
        "Network Setup Included",
        "Technical Support",
        "Flexible Configurations",
        "Group Training Ready",
      ],
      highlights: ["Most Popular", "Group Training"],
      idealFor: ["Corporate Training", "Educational Workshops", "Certification Bootcamps", "Team Development"],
    },
    {
      id: "av-equipment",
      title: "Audio Visual Equipment",
      description: "Professional presentation and display solutions",
      icon: Projector,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      pricing: [
        { option: "Projector Rental", price: "$10", duration: "per day", description: "HD projection display" },
        { option: "Printer Rental", price: "$10", duration: "per day", description: "Professional printing" },
      ],
      features: [
        "HD Projectors",
        "Professional Printers",
        "Audio Systems",
        "Display Monitors",
        "Cable Management",
        "Setup Support",
      ],
      highlights: ["Essential", "Professional"],
      idealFor: ["Presentations", "Conferences", "Training Sessions", "Business Meetings"],
    },
    {
      id: "drone-services",
      title: "Drone Services",
      description: "Professional drone operations with certified pilot",
      icon: Plane,
      gradient: "from-green-600 via-emerald-500 to-teal-400",
      pricing: [
        {
          option: "Drone Operations",
          price: "$25",
          duration: "per hour",
          description: "4 drone minimum, includes pilot",
        },
      ],
      features: [
        "Professional Drones",
        "Certified Pilot Included",
        "4K Video Capability",
        "Aerial Photography",
        "Real-time Monitoring",
        "Safety Compliance",
      ],
      highlights: ["Pilot Included", "4K Capable"],
      idealFor: ["Event Coverage", "Real Estate", "Marketing Content", "Surveying"],
    },
    {
      id: "gaming-stations",
      title: "Mobile Gaming Stations",
      description: "Professional gaming setups for tournaments and events",
      icon: Gamepad2,
      gradient: "from-orange-600 via-orange-500 to-yellow-400",
      pricing: [
        {
          option: "Tournament Setup",
          price: "Custom",
          duration: "Contact for details",
          description: "Professional-grade gaming carts",
        },
      ],
      features: [
        "Professional Gaming Carts",
        "High-Performance PCs",
        "Gaming Peripherals",
        "Tournament Software",
        "Network Configuration",
        "Event Support Staff",
      ],
      highlights: ["Tournament Ready", "Custom Config"],
      idealFor: ["Gaming Tournaments", "eSports Events", "Brand Activations", "Entertainment"],
    },
    {
      id: "multimedia-stations",
      title: "Multimedia Engagement Stations",
      description: "Gaming + Media Creation combined setup",
      icon: Monitor,
      gradient: "from-red-600 via-red-500 to-pink-400",
      pricing: [
        {
          option: "Engagement Setup",
          price: "$125",
          duration: "per hour",
          description: "2 gaming carts, 2hr minimum",
        },
      ],
      features: [
        "Gaming + Media Creation",
        "Interactive Workshops",
        "Brand Activation Ready",
        "Content Creation Tools",
        "Streaming Capability",
        "Professional Support",
      ],
      highlights: ["Interactive", "Brand Ready"],
      idealFor: ["Interactive Workshops", "Brand Activations", "Media Events", "Engagement Campaigns"],
    },
  ]

  const stats = [
    { label: "Equipment Available", value: "24/7", icon: Clock },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Events Supported", value: "200+", icon: Trophy },
    { label: "Gaming Tournaments", value: "50+", icon: Gamepad2 },
  ]

  const recentRentals = [
    {
      title: "Corporate Training Event",
      equipment: "Full Laptop Lab",
      client: "Tech Startup",
      duration: "3 days",
      setup: "25 Laptops",
    },
    {
      title: "Gaming Tournament",
      equipment: "Gaming Stations",
      client: "DMV Esports",
      duration: "8 hours",
      setup: "12 Gaming Carts",
    },
    {
      title: "Real Estate Showcase",
      equipment: "Drone Services",
      client: "Property Group",
      duration: "4 hours",
      setup: "Aerial Photography",
    },
  ]

  const popularPackages = [
    {
      title: "Training Workshop Package",
      equipment: ["10 Laptops", "Projector", "Printer"],
      price: "$150",
      duration: "Full Day",
      savings: "Save $20",
    },
    {
      title: "Event Presentation Package",
      equipment: ["Projector", "Audio System", "Laptop"],
      price: "$35",
      duration: "Full Day",
      savings: "Save $5",
    },
    {
      title: "Gaming Event Package",
      equipment: ["4 Gaming Stations", "Tournament Setup"],
      price: "Custom Quote",
      duration: "Event Duration",
      savings: "Volume Discount",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Header */}
      <header className="backdrop-blur-lg bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => (window.location.href = "/")}
                className="hover:bg-green-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                    Equipment Rental Center
                  </h1>
                  <p className="text-sm text-slate-500">Tech Resources for Events, Training & Business</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-green-700 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Reserve Equipment
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Professional Tech Equipment Rental
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Power Your Events with{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Professional Equipment
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            From laptop labs for training sessions to gaming stations for tournaments, we provide comprehensive
            technology solutions for events, businesses, and educational programs.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="backdrop-blur-lg bg-white/60 border-white/30 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Professional Equipment Categories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipmentCategories.map((category) => (
              <Card
                key={category.id}
                className={`group backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer overflow-hidden ${
                  hoveredCard === category.id ? "ring-2 ring-green-400 ring-opacity-50" : ""
                }`}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon
                        className={`w-8 h-8 bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent`}
                      />
                    </div>
                    <div className="flex gap-2">
                      {category.highlights?.map((highlight, index) => (
                        <Badge
                          key={index}
                          variant={highlight === "Most Popular" ? "default" : "secondary"}
                          className={
                            highlight === "Most Popular" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                          }
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors mb-2">
                    {category.title}
                  </CardTitle>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                </CardHeader>
                <CardContent>
                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-3">Pricing Options:</h4>
                    {category.pricing.map((option, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <div>
                          <span className="text-sm font-medium text-slate-700">{option.option}</span>
                          <p className="text-xs text-slate-500">{option.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-slate-800">{option.price}</span>
                          <span className="text-xs text-slate-500 ml-1">/ {option.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Features:</h4>
                    {category.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Ideal For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.idealFor.map((use, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Reserve Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Popular Equipment Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPackages.map((pkg, index) => (
              <Card
                key={pkg.title}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {pkg.savings}
                    </Badge>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-800">{pkg.price}</p>
                      <p className="text-sm text-slate-500">{pkg.duration}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">{pkg.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Includes:</h4>
                    {pkg.equipment.map((item, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg transition-all duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Rentals */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Recent Equipment Rentals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentRentals.map((rental, index) => (
              <Card
                key={rental.title}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {rental.equipment}
                    </Badge>
                    <Settings className="w-5 h-5 text-slate-400" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">{rental.title}</CardTitle>
                  <p className="text-sm text-slate-600">Client: {rental.client}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      Duration: {rental.duration}
                    </div>
                    <div className="flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-green-500" />
                      Setup: {rental.setup}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="backdrop-blur-lg bg-gradient-to-r from-green-600/10 to-emerald-500/10 border-white/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Laptop className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Power Your Next Event?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Whether you need laptops for training, gaming stations for tournaments, or drones for aerial coverage,
                our professional equipment rental service has you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Reserve Equipment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-200 text-green-600 hover:bg-green-50 px-8 py-3 hover:shadow-xl transition-all duration-300 bg-transparent"
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
