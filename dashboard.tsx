"use client"

import { useState } from "react"
import {
  Bell,
  Search,
  Calendar,
  MessageSquare,
  TrendingUp,
  Users,
  BookOpen,
  Video,
  Laptop,
  Smartphone,
  Building,
  HandHeart,
  Crown,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Globe,
  ShoppingBag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CommunityTechDashboard() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const statsCards = [
    { title: "Active Certifications", value: "12", change: "+3", icon: BookOpen, color: "bg-blue-500" },
    { title: "Upcoming Classes", value: "8", change: "+2", icon: Calendar, color: "bg-orange-500" },
    { title: "Studio Availability", value: "85%", change: "+5%", icon: Video, color: "bg-green-500" },
    { title: "Equipment Status", value: "Available", change: "24/7", icon: Laptop, color: "bg-purple-500" },
  ]

  const serviceCards = [
    {
      id: "education",
      title: "Certification Center",
      subtitle: "Bootcamps, Exam Prep & Digital Literacy",
      metrics: "200+ Certifications Monthly | 85% Success Rate",
      cta: "Explore Programs",
      icon: BookOpen,
      gradient: "from-blue-600 via-blue-500 to-blue-400",
      pattern: "circuit",
    },
    {
      id: "media",
      title: "4K Media Production",
      subtitle: "Podcast Studio, Photo & Video Production & Live Streaming",
      metrics: "Professional Equipment | Expert Support",
      cta: "Book Studio Time",
      icon: Video,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      pattern: "waves",
    },
    {
      id: "equipment",
      title: "Equipment Rental",
      subtitle: "Laptops, Gaming, Drones & Professional Gear",
      metrics: "Gaming Lab | Drone Training | Laptop Lab",
      cta: "Reserve Equipment",
      icon: Laptop,
      gradient: "from-green-600 via-emerald-500 to-teal-400",
      pattern: "devices",
    },
    {
      id: "development",
      title: "Custom Development",
      subtitle: "Mobile Apps, Web Platforms & Digital Solutions",
      metrics: "$2K - $25K Projects | Ongoing Support",
      cta: "Start Project",
      icon: Smartphone,
      gradient: "from-orange-600 via-orange-500 to-yellow-400",
      pattern: "code",
    },
    {
      id: "events",
      title: "Training Rooms",
      subtitle: "Hi-Tech Training Rooms",
      metrics: "10-50 People | Wifi, Full A/V Setup",
      cta: "Check Availability",
      icon: Building,
      gradient: "from-indigo-600 via-indigo-500 to-blue-400",
      pattern: "architecture",
    },
    {
      id: "community",
      title: "Community Classes",
      subtitle: "Free Digital Literacy & Tech Skills",
      metrics: "Bridging the Digital Divide",
      cta: "Join Free Classes",
      icon: Users,
      gradient: "from-rose-600 via-pink-500 to-red-400",
      pattern: "network",
    },
    {
      id: "consulting",
      title: "Tech Consulting",
      subtitle: "Digital Strategy & Infrastructure Planning",
      metrics: "Smart Building | Bio Energy | Training",
      cta: "Schedule Consultation",
      icon: HandHeart,
      gradient: "from-cyan-600 via-cyan-500 to-blue-400",
      pattern: "blueprint",
    },
    {
      id: "membership",
      title: "Membership Tiers",
      subtitle: "Individual: $125 | Business: $500",
      metrics: "Priority Booking | Discounts | Community Network",
      cta: "Sign-up For Membership",
      icon: Crown,
      gradient: "from-amber-600 via-yellow-500 to-orange-400",
      pattern: "premium",
    },
  ]

  const recentActivities = [
    {
      type: "certification",
      title: "AWS Cloud Practitioner completed",
      time: "2h ago",
      icon: CheckCircle,
      color: "text-green-500",
    },
    { type: "class", title: "Python Bootcamp starts tomorrow", time: "4h ago", icon: Calendar, color: "text-blue-500" },
    {
      type: "equipment",
      title: "Drone kit available for rental",
      time: "6h ago",
      icon: TrendingUp,
      color: "text-purple-500",
    },
    { type: "community", title: "New success story shared", time: "1d ago", icon: Star, color: "text-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Navigation */}
      <header className="backdrop-blur-lg bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Community Tech
                </h1>
                <p className="text-sm text-slate-500">Advacing Communities Through Technology</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Dashboard", "Education", "Media Production", "Equipment", "Development", "Shop", "About"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => {
                      if (item === "Education") {
                        window.location.href = "/education"
                      } else if (item === "Media Production") {
                        window.location.href = "/media-production"
                      } else if (item === "Equipment") {
                        window.location.href = "/equipment"
                      } else if (item === "Development") {
                        window.location.href = "/development"
                      } else if (item === "Shop") {
                        window.location.href = "/shop"
                      }
                    }}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                      index === 0 ? "text-blue-600" : "text-slate-600"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </nav>

            {/* User Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input placeholder="Search..." className="w-64 bg-white/60 border-white/30 backdrop-blur-sm" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>CT</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Tech Innovator</p>
                  <Badge variant="outline" className="text-xs">
                    Individual
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Dashboard Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-2">A Badge Of Honor</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Access comprehensive education, media services, and technology solutions designed to drive innovation and
              community growth.
            </p>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <Card
                key={stat.title}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                      <stat.icon className={`w-6 h-6 ${stat.color.replace("bg-", "text-")}`} />
                    </div>
                    <Badge variant="secondary" className="text-green-600 bg-green-100">
                      {stat.change}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                  <p className="text-sm text-slate-600">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                if (window.location.pathname === "/education") {
                  const element = document.getElementById("popular-programs")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                } else {
                  window.location.href = "/education#popular-programs"
                }
              }}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Certification Bootcamps
            </Button>
            <Button
              variant="outline"
              className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              onClick={() => (window.location.href = "/media-production")}
            >
              <Video className="w-5 h-5 mr-2" />
              Studio Rental
            </Button>
            <Button
              variant="outline"
              className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              onClick={() => (window.location.href = "/development")}
            >
              <Smartphone className="w-5 h-5 mr-2" />
              App Development
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Service Portfolio Grid */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Service Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCards.map((service) => (
                <Card
                  key={service.id}
                  className={`group backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer overflow-hidden ${
                    hoveredCard === service.id ? "ring-2 ring-blue-400 ring-opacity-50" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    if (service.id === "education") {
                      window.location.href = "/education"
                    } else if (service.id === "media") {
                      window.location.href = "/media-production"
                    } else if (service.id === "equipment") {
                      window.location.href = "/equipment"
                    } else if (service.id === "development") {
                      window.location.href = "/development"
                    }
                  }}
                >
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon
                          className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                        />
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-slate-600 text-sm">{service.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">{service.metrics}</p>
                    <Button
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (service.id === "education") {
                          window.location.href = "/education"
                        } else if (service.id === "media") {
                          window.location.href = "/media-production"
                        } else if (service.id === "equipment") {
                          window.location.href = "/equipment"
                        } else if (service.id === "development") {
                          window.location.href = "/development"
                        }
                      }}
                    >
                      {service.cta}
                      <Play className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="backdrop-blur-lg bg-white/60 border-white/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: Calendar, label: "Book Services", color: "text-blue-600" },
                  { icon: BookOpen, label: "Class Calendar", color: "text-green-600" },
                  { icon: Laptop, label: "Training Space", color: "text-purple-600" },
                  { icon: MessageSquare, label: "Support Ticket", color: "text-orange-600" },
                ].map((action, index) => (
                  <Button
                    key={action.label}
                    variant="ghost"
                    className="w-full justify-start hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    onClick={() => (window.location.href = "/project-specification")}
                  >
                    <Calendar className={`w-5 h-5 mr-3 text-blue-600`} />
                    {action.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Featured Products Carousel */}
            <Card className="backdrop-blur-lg bg-white/60 border-white/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-800">Featured Products</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative overflow-hidden h-48">
                  {[
                    {
                      title: "DMV Restaurant Finder App",
                      image: "/placeholder.svg?height=200&width=300&text=Restaurant+App",
                      price: "$29.99",
                      creator: "Marcus Johnson",
                    },
                    {
                      title: "Event Management System",
                      image: "/placeholder.svg?height=200&width=300&text=Event+System",
                      price: "$149.99",
                      creator: "Sarah Chen",
                    },
                    {
                      title: "DC Landmarks Collection",
                      image: "/placeholder.svg?height=200&width=300&text=DC+Photos",
                      price: "$19.99",
                      creator: "David Rodriguez",
                    },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                        index === 0 ? "translate-x-0" : index === 1 ? "translate-x-full" : "translate-x-[200%]"
                      }`}
                      style={{
                        animation: `slideCarousel 9s infinite ${index * 3}s`,
                      }}
                    >
                      <div className="relative h-full">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h4 className="font-bold text-sm mb-1 truncate">{product.title}</h4>
                          <div className="flex justify-between items-center">
                            <p className="text-xs opacity-90">{product.creator}</p>
                            <span className="font-bold">{product.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <Button
                    variant="outline"
                    className="w-full text-sm bg-transparent border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                    onClick={() => (window.location.href = "/shop")}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Visit Shop
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity Feed */}
            <Card className="backdrop-blur-lg bg-white/60 border-white/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-800">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <activity.icon className={`w-5 h-5 mt-0.5 ${activity.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 truncate">{activity.title}</p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <style jsx>{`
              @keyframes slideCarousel {
                0%, 30% { transform: translateX(0); }
                33.33%, 63.33% { transform: translateX(-100%); }
                66.66%, 96.66% { transform: translateX(-200%); }
                100% { transform: translateX(0); }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
