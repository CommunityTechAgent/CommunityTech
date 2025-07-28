"use client"

import { useState } from "react"
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  Calendar,
  DollarSign,
  GraduationCap,
  Shield,
  Cloud,
  Database,
  Globe,
  BarChart3,
  Lock,
  Wifi,
  Trophy,
  UserCheck,
  Heart,
  MessageSquare,
  Play,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Bootcamp data that will be shared with the project specification form
export const bootcampPrograms = [
  {
    id: "awsBootcamp",
    title: "AWS Cloud Practitioner Bootcamp",
    duration: "8-week intensive program",
    price: 2499,
    description: "Includes exam voucher & practice tests",
    icon: Cloud,
    level: "Beginner to Intermediate",
    format: ["Full-time", "Part-time", "Weekend"],
    certification: "AWS Cloud Practitioner",
    skills: ["AWS Core Services", "Cloud Architecture", "Security", "Pricing"],
    jobRoles: ["Cloud Support", "Solutions Architect", "DevOps Engineer"],
    salaryRange: "$65,000 - $120,000",
    nextCohort: "March 15, 2024",
    spotsLeft: 8,
    rating: 4.9,
    students: 1247,
  },
  {
    id: "securityBootcamp",
    title: "CompTIA Security+ Bootcamp",
    duration: "10-week comprehensive program",
    price: 2999,
    description: "Hands-on labs & certification prep",
    icon: Shield,
    level: "Beginner to Intermediate",
    format: ["Full-time", "Part-time", "Evening"],
    certification: "CompTIA Security+",
    skills: ["Network Security", "Risk Management", "Cryptography", "Incident Response"],
    jobRoles: ["Security Analyst", "IT Security Specialist", "Cybersecurity Consultant"],
    salaryRange: "$55,000 - $95,000",
    nextCohort: "March 22, 2024",
    spotsLeft: 12,
    rating: 4.8,
    students: 892,
  },
  {
    id: "salesforceBootcamp",
    title: "Salesforce Administrator Bootcamp",
    duration: "12-week program with real projects",
    price: 3499,
    description: "Trailhead integration & job placement",
    icon: Database,
    level: "Beginner",
    format: ["Full-time", "Part-time", "Self-paced"],
    certification: "Salesforce Administrator",
    skills: ["CRM Management", "Workflow Automation", "Data Management", "Reporting"],
    jobRoles: ["Salesforce Admin", "CRM Specialist", "Business Analyst"],
    salaryRange: "$60,000 - $100,000",
    nextCohort: "April 1, 2024",
    spotsLeft: 15,
    rating: 4.7,
    students: 634,
  },
  {
    id: "googleCloudBootcamp",
    title: "Google Cloud Professional Bootcamp",
    duration: "10-week cloud architecture program",
    price: 3299,
    description: "GCP credits & certification vouchers",
    icon: Globe,
    level: "Intermediate",
    format: ["Full-time", "Part-time", "Weekend"],
    certification: "Google Cloud Professional",
    skills: ["GCP Services", "Kubernetes", "Data Analytics", "Machine Learning"],
    jobRoles: ["Cloud Engineer", "Data Engineer", "DevOps Specialist"],
    salaryRange: "$70,000 - $130,000",
    nextCohort: "March 29, 2024",
    spotsLeft: 6,
    rating: 4.9,
    students: 523,
  },
  {
    id: "azureBootcamp",
    title: "Microsoft Azure Fundamentals Bootcamp",
    duration: "8-week Azure essentials program",
    price: 2799,
    description: "Azure sandbox & certification prep",
    icon: Cloud,
    level: "Beginner to Intermediate",
    format: ["Full-time", "Part-time", "Evening"],
    certification: "Microsoft Azure Fundamentals",
    skills: ["Azure Services", "Virtual Machines", "Storage", "Networking"],
    jobRoles: ["Azure Administrator", "Cloud Support", "Systems Engineer"],
    salaryRange: "$58,000 - $110,000",
    nextCohort: "April 5, 2024",
    spotsLeft: 10,
    rating: 4.6,
    students: 789,
  },
  {
    id: "ciscoBootcamp",
    title: "Cisco CCNA Bootcamp",
    duration: "14-week networking intensive",
    price: 3999,
    description: "Lab equipment & practice exams",
    icon: Wifi,
    level: "Intermediate",
    format: ["Full-time", "Part-time", "Weekend"],
    certification: "Cisco CCNA",
    skills: ["Network Configuration", "Routing & Switching", "Network Security", "Troubleshooting"],
    jobRoles: ["Network Engineer", "Network Administrator", "IT Support Specialist"],
    salaryRange: "$50,000 - $85,000",
    nextCohort: "April 12, 2024",
    spotsLeft: 5,
    rating: 4.8,
    students: 445,
  },
  {
    id: "dataAnalyticsBootcamp",
    title: "Data Analytics Bootcamp",
    duration: "16-week comprehensive program",
    price: 4499,
    description: "Python, SQL, Tableau & portfolio projects",
    icon: BarChart3,
    level: "Beginner to Advanced",
    format: ["Full-time", "Part-time", "Self-paced"],
    certification: "Data Analytics Certificate",
    skills: ["Python", "SQL", "Tableau", "Statistics", "Machine Learning"],
    jobRoles: ["Data Analyst", "Business Intelligence Analyst", "Data Scientist"],
    salaryRange: "$65,000 - $120,000",
    nextCohort: "March 25, 2024",
    spotsLeft: 18,
    rating: 4.9,
    students: 756,
  },
  {
    id: "cybersecurityBootcamp",
    title: "Cybersecurity Specialist Bootcamp",
    duration: "20-week intensive program",
    price: 5999,
    description: "Multiple certifications & job guarantee",
    icon: Lock,
    level: "Intermediate to Advanced",
    format: ["Full-time", "Part-time", "Evening"],
    certification: "Multiple Security Certifications",
    skills: ["Ethical Hacking", "Penetration Testing", "Incident Response", "Forensics"],
    jobRoles: ["Cybersecurity Analyst", "Penetration Tester", "Security Consultant"],
    salaryRange: "$75,000 - $150,000",
    nextCohort: "April 8, 2024",
    spotsLeft: 7,
    rating: 4.9,
    students: 312,
  },
]

// Additional certifications data
export const additionalCertifications = [
  {
    id: "comptiaA",
    title: "CompTIA A+",
    price: 799,
    duration: "4 weeks",
    description: "Hardware and software fundamentals",
  },
  {
    id: "comptiaNetwork",
    title: "CompTIA Network+",
    price: 899,
    duration: "6 weeks",
    description: "Networking concepts and protocols",
  },
  {
    id: "awsSolutions",
    title: "AWS Solutions Architect",
    price: 1299,
    duration: "8 weeks",
    description: "Advanced AWS architecture",
  },
  {
    id: "azureAdmin",
    title: "Azure Administrator",
    price: 1199,
    duration: "6 weeks",
    description: "Azure administration and management",
  },
  {
    id: "googleCloudArch",
    title: "Google Cloud Architect",
    price: 1399,
    duration: "8 weeks",
    description: "GCP architecture and design",
  },
  {
    id: "ciscoSecurity",
    title: "Cisco CyberOps",
    price: 1599,
    duration: "10 weeks",
    description: "Cisco security operations",
  },
]

export default function EducationPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const stats = [
    { label: "Active Students", value: "2,847", icon: Users, color: "text-blue-600" },
    { label: "Courses Available", value: "156", icon: BookOpen, color: "text-green-600" },
    { label: "Certifications Earned", value: "1,234", icon: Award, color: "text-purple-600" },
    { label: "Job Placement Rate", value: "94%", icon: TrendingUp, color: "text-orange-600" },
  ]

  const upcomingCourses = [
    {
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      duration: "2 hours",
      level: "Advanced",
      spots: 12,
    },
    {
      title: "AWS Security Best Practices",
      instructor: "Marcus Johnson",
      date: "March 18, 2024",
      time: "10:00 AM EST",
      duration: "3 hours",
      level: "Intermediate",
      spots: 8,
    },
    {
      title: "Data Visualization with Tableau",
      instructor: "David Rodriguez",
      date: "March 20, 2024",
      time: "1:00 PM EST",
      duration: "2.5 hours",
      level: "Beginner",
      spots: 15,
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Cloud Solutions Architect",
      company: "TechCorp",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The AWS bootcamp completely transformed my career. I went from help desk to cloud architect in just 6 months!",
    },
    {
      name: "Michael Thompson",
      role: "Cybersecurity Analyst",
      company: "SecureNet",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Outstanding instruction and hands-on labs. The Security+ bootcamp prepared me perfectly for the real world.",
    },
    {
      name: "Lisa Wang",
      role: "Data Analyst",
      company: "DataInsights",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The data analytics program gave me all the skills I needed. Now I'm working at my dream company!",
    },
  ]

  const instructors = [
    {
      name: "Sarah Chen",
      title: "Senior Cloud Architect",
      specialties: ["AWS", "Azure", "DevOps"],
      experience: "8+ years",
      rating: 4.9,
      students: 1247,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Marcus Johnson",
      title: "Cybersecurity Expert",
      specialties: ["Security+", "Ethical Hacking", "Incident Response"],
      experience: "10+ years",
      rating: 4.8,
      students: 892,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Rodriguez",
      title: "Data Science Lead",
      specialties: ["Python", "Machine Learning", "Analytics"],
      experience: "7+ years",
      rating: 4.9,
      students: 634,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const filteredBootcamps = bootcampPrograms.filter((bootcamp) => {
    const matchesSearch = bootcamp.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === "all" || bootcamp.level.toLowerCase().includes(selectedLevel.toLowerCase())
    return matchesSearch && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="backdrop-blur-lg bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Education Services
                </h1>
                <p className="text-sm text-slate-500">Professional certification bootcamps & training</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Advance Your Career with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Join thousands of professionals who have transformed their careers through our intensive bootcamp programs.
            Get certified, get hired, get ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              Browse Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="backdrop-blur-lg bg-white/60 border-white/30 text-center">
              <CardContent className="p-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card className="backdrop-blur-lg bg-white/60 border-white/30 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search bootcamps..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Popular Certification Bootcamps */}
        <Card className="backdrop-blur-lg bg-white/60 border-white/30 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-slate-800">
              <Trophy className="w-6 h-6 mr-3 text-yellow-600" />
              Popular Certification Bootcamps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBootcamps.map((bootcamp) => (
                <Card
                  key={bootcamp.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <bootcamp.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <Badge variant="secondary" className="text-xs">
                        {bootcamp.level}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {bootcamp.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">{bootcamp.duration}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-green-600">${bootcamp.price.toLocaleString()}</div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {bootcamp.rating}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{bootcamp.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        Next cohort: {bootcamp.nextCohort}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Users className="w-4 h-4 mr-2" />
                        {bootcamp.spotsLeft} spots left
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {bootcamp.salaryRange}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {bootcamp.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white group-hover:shadow-lg transition-all">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Live Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="backdrop-blur-lg bg-white/60 border-white/30">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold text-slate-800">
                <Calendar className="w-5 h-5 mr-2 text-green-600" />
                Upcoming Live Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingCourses.map((course, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-white/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-slate-800">{course.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Instructor: {course.instructor}</p>
                  <div className="flex items-center text-sm text-slate-500 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {course.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.time}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.spots} spots
                    </span>
                  </div>
                  <Button size="sm" className="mt-3 w-full">
                    Register Free
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-white/60 border-white/30">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold text-slate-800">
                <UserCheck className="w-5 h-5 mr-2 text-purple-600" />
                Expert Instructors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-white/50 transition-colors"
                >
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={instructor.image || "/placeholder.svg"} />
                    <AvatarFallback>
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800">{instructor.name}</h4>
                    <p className="text-sm text-slate-600">{instructor.title}</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-slate-500">{instructor.rating}</span>
                      <span className="text-sm text-slate-400 ml-2">• {instructor.students} students</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {instructor.specialties.slice(0, 2).map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Student Success Stories */}
        <Card className="backdrop-blur-lg bg-white/60 border-white/30 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-slate-800">
              <Heart className="w-6 h-6 mr-3 text-red-500" />
              Student Success Stories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-3">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                        <p className="text-xs text-slate-500">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="backdrop-blur-lg bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals who have advanced their careers through our certification programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <ExternalLink className="w-5 h-5 mr-2" />
                View All Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Talk to Advisor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
