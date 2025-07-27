"use client"

import { useState } from "react"
import {
  ArrowLeft,
  BookOpen,
  Users,
  Award,
  Laptop,
  Shield,
  Briefcase,
  GraduationCap,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  Zap,
  Building,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const coreFeatures = [
    {
      id: "multi-modal",
      title: "Multi-Modal Training Delivery",
      description: "Hybrid in-person/online programs with hands-on lab components",
      icon: Laptop,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      features: ["In-Person Labs", "Online Flexibility", "Hands-On Practice", "Expert Instruction"],
    },
    {
      id: "testing-center",
      title: "Authorized Testing Center",
      description: "Secure facilities for Pearson, Kryterion, Certiport, Scantron certifications",
      icon: Shield,
      gradient: "from-green-600 via-emerald-500 to-teal-400",
      features: ["Pearson VUE", "Kryterion", "Certiport", "Scantron"],
    },
    {
      id: "bootcamps",
      title: "Certification Bootcamps",
      description: "Intensive programs in AI, app development, AWS, Salesforce, Security+, Adobe Creative Suite",
      icon: Zap,
      gradient: "from-orange-600 via-orange-500 to-yellow-400",
      features: ["AI & Machine Learning", "App Development", "AWS Cloud", "Salesforce", "Security+", "Adobe Creative"],
      priceRange: "$500-$3,500",
    },
    {
      id: "exam-prep",
      title: "Community-Led Exam Prep",
      description: "Study groups led by local certified professionals",
      icon: Users,
      gradient: "from-purple-600 via-purple-500 to-pink-400",
      features: ["Expert-Led Groups", "Peer Learning", "Practice Exams", "Study Materials"],
      price: "$99/30-day sessions",
    },
    {
      id: "digital-literacy",
      title: "Free Digital Literacy Programs",
      description: "Community classes bridging the digital divide",
      icon: BookOpen,
      gradient: "from-rose-600 via-pink-500 to-red-400",
      features: ["Basic Computer Skills", "Internet Safety", "Digital Communication", "Online Resources"],
      price: "FREE",
    },
    {
      id: "workforce-dev",
      title: "Workforce Development Partnerships",
      description: "Industry-specific training with employment placement guarantees",
      icon: Briefcase,
      gradient: "from-indigo-600 via-indigo-500 to-blue-400",
      features: ["Industry Training", "Job Placement", "Career Counseling", "Skills Assessment"],
    },
    {
      id: "mentorship",
      title: "Mentorship & Networking Programs",
      description: "Alumni networks and industry professional connections",
      icon: Network,
      gradient: "from-cyan-600 via-cyan-500 to-blue-400",
      features: ["Alumni Network", "Industry Mentors", "Professional Events", "Career Guidance"],
    },
    {
      id: "internships",
      title: "Internship Placement Services",
      description: "Real-world experience opportunities with local businesses",
      icon: Building,
      gradient: "from-amber-600 via-yellow-500 to-orange-400",
      features: ["Local Partnerships", "Real Experience", "Skill Development", "Career Pathways"],
    },
  ]

  const stats = [
    { label: "Success Rate", value: "85%", icon: Target },
    { label: "Certifications Monthly", value: "200+", icon: Award },
    { label: "Industry Partners", value: "50+", icon: Building },
    { label: "Alumni Network", value: "1,000+", icon: Users },
  ]

  const popularPrograms = [
    {
      title: "AWS Cloud Practitioner Bootcamp",
      duration: "4 weeks",
      price: "$1,200",
      level: "Beginner",
      nextStart: "Sept 15, 2025",
      spots: "8 spots left",
    },
    {
      title: "CompTIA Security+ Intensive",
      duration: "6 weeks",
      price: "$1,800",
      level: "Intermediate",
      nextStart: "Sept 22, 2025",
      spots: "12 spots left",
    },
    {
      title: "Salesforce Admin Certification",
      duration: "8 weeks",
      price: "$2,200",
      level: "",
      nextStart: "Oct 1, 2025",
      spots: "15 spots left",
    },
    {
      title: "App Development",
      duration: "3 days",
      price: "Free",
      level: "Beginner",
      nextStart: "Aug 5, 2025",
      spots: "10 spots left",
    },
    {
      title: "Digital Literacy",
      duration: "1 week",
      price: "$69",
      level: "Beginner",
      nextStart: "Aug 15, 2025",
      spots: "20 spots left",
    },
    {
      title: "Ai Essentials",
      duration: "1 day",
      price: "$125",
      level: "Beginner",
      nextStart: "Aug 31 , 2025",
      spots: "6 spots left",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="backdrop-blur-lg bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => (window.location.href = "/")}
                className="hover:bg-blue-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                    Education & Certification Hub
                  </h1>
                  <p className="text-sm text-slate-500">Premier Community-Driven Certification Center</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Enroll Now
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            DMV Region's Premier Certification Center
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Transform Your Career with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Establish yourself as a leader in technology through our comprehensive certification programs, expert-led
            training, and community-driven learning environment.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="backdrop-blur-lg bg-white/60 border-white/30 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Programs */}
        <div className="mb-16" id="popular-programs">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Popular Certification Bootcamps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPrograms.map((program, index) => (
              <Card
                key={program.title}
                className="backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {program.level}
                    </Badge>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-800">{program.price}</p>
                      <p className="text-sm text-slate-500">{program.duration}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      Next Start: {program.nextStart}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Users className="w-4 h-4 mr-2 text-green-500" />
                      {program.spots}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transition-all duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Comprehensive Learning Ecosystem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreFeatures.map((feature) => (
              <Card
                key={feature.id}
                className={`group backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer overflow-hidden ${
                  hoveredCard === feature.id ? "ring-2 ring-blue-400 ring-opacity-50" : ""
                }`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-1 bg-gradient-to-r ${feature.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon
                        className={`w-6 h-6 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}
                      />
                    </div>
                    {feature.price && (
                      <Badge
                        variant={feature.price === "FREE" ? "default" : "secondary"}
                        className={feature.price === "FREE" ? "bg-green-100 text-green-700" : ""}
                      >
                        {feature.price}
                      </Badge>
                    )}
                    {feature.priceRange && <Badge variant="secondary">{feature.priceRange}</Badge>}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                    {feature.title}
                  </CardTitle>
                  <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {feature.features.map((item, index) => (
                      <div key={index} className="flex items-center text-xs text-slate-500">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className={`w-full bg-gradient-to-r ${feature.gradient} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="backdrop-blur-lg bg-gradient-to-r from-blue-600/10 to-orange-500/10 border-white/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Advance Your Career?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their careers through our comprehensive
                certification programs. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse All Programs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-3 hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
