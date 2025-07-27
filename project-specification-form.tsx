"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Calendar,
  FileText,
  Users,
  Zap,
  CheckCircle,
  Star,
  Smartphone,
  Video,
  GraduationCap,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

export default function ProjectSpecificationForm() {
  const [selectedService, setSelectedService] = useState<string>("")
  const [budgetRange, setBudgetRange] = useState([0])
  const [characterCount, setCharacterCount] = useState(0)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [selectedTeamMember, setSelectedTeamMember] = useState<string>("")
  const [mediaDuration, setMediaDuration] = useState(2) // 2 hour minimum
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const serviceTypes = [
    { id: "development", name: "Development Services", icon: Smartphone },
    { id: "media", name: "Media Services", icon: Video },
    { id: "education", name: "Education Services", icon: GraduationCap },
  ]

  const targetAudiences = [
    "Small Businesses",
    "Enterprises",
    "Educational Institutions",
    "Healthcare Organizations",
    "Non-Profits",
    "Government Agencies",
    "Startups",
    "Individual Consumers",
  ]

  const keyFeatures = [
    "User Authentication",
    "Payment Processing",
    "Real-time Notifications",
    "Data Analytics",
    "Social Media Integration",
    "Multi-language Support",
    "Offline Functionality",
    "API Integration",
    "Admin Dashboard",
    "Mobile Responsive",
  ]

  const designStyles = [
    { id: "modern", name: "Modern & Minimalist", preview: "/placeholder.svg?height=100&width=150&text=Modern" },
    {
      id: "corporate",
      name: "Corporate & Professional",
      preview: "/placeholder.svg?height=100&width=150&text=Corporate",
    },
    { id: "creative", name: "Creative & Artistic", preview: "/placeholder.svg?height=100&width=150&text=Creative" },
    { id: "classic", name: "Classic & Traditional", preview: "/placeholder.svg?height=100&width=150&text=Classic" },
  ]

  const teamMembers = [
    {
      id: "marcus",
      name: "Marcus Johnson",
      role: "Senior Full-Stack Developer",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.9,
      specialties: ["React", "Node.js", "AWS"],
      languages: ["English", "Spanish"],
      available: true,
    },
    {
      id: "sarah",
      name: "Sarah Chen",
      role: "UI/UX Designer & Frontend Developer",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.8,
      specialties: ["Design Systems", "React", "TypeScript"],
      languages: ["English", "Mandarin"],
      available: true,
    },
    {
      id: "david",
      name: "David Rodriguez",
      role: "Media Production Specialist",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.7,
      specialties: ["Video Production", "Photography", "Live Streaming"],
      languages: ["English", "Spanish"],
      available: false,
    },
  ]

  const addOnServices = [
    { id: "priority", name: "Priority Support", price: 100, description: "24-hour response guarantee" },
    { id: "rush", name: "Rush Delivery", price: 300, description: "Expedited project timeline" },
    { id: "revisions", name: "Additional Revisions", price: 150, description: "Extra revision rounds" },
    { id: "warranty", name: "Extended Warranty", price: 300, description: "6-month extended support" },
    { id: "training", name: "Training Sessions", price: 200, description: "User training and onboarding" },
    { id: "documentation", name: "Documentation Package", price: 150, description: "User manuals and guides" },
  ]

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns((prev) => (prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]))
  }

  const calculateTotal = () => {
    let basePrice = 0

    // Base pricing based on service type
    if (selectedService === "development") {
      basePrice = budgetRange[0] > 0 ? budgetRange[0] : 0
    } else if (selectedService === "media") {
      basePrice = mediaDuration * 125 // $125 per hour
    } else if (selectedService === "education") {
      basePrice = budgetRange[0] > 0 ? budgetRange[0] : 0
    }

    const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOnServices.find((service) => service.id === addOnId)
      return total + (addOn?.price || 0)
    }, 0)

    return basePrice + addOnTotal
  }

  const collectFormData = () => {
    // Collect all form field values
    const projectName = (document.getElementById("projectName") as HTMLInputElement)?.value || ""
    const projectDescription = (document.getElementById("projectDescription") as HTMLTextAreaElement)?.value || ""
    const startDate = (document.getElementById("startDate") as HTMLInputElement)?.value || ""
    const contentType = (document.querySelector('[name="contentType"]') as HTMLInputElement)?.value || ""
    const eventDate = (document.getElementById("eventDate") as HTMLInputElement)?.value || ""
    const eventTime = (document.getElementById("eventTime") as HTMLInputElement)?.value || ""
    const location = (document.getElementById("location") as HTMLInputElement)?.value || ""
    const participants = (document.getElementById("participants") as HTMLInputElement)?.value || ""
    const specialRequirements = (document.getElementById("specialRequirements") as HTMLTextAreaElement)?.value || ""

    return {
      serviceType: selectedService,
      estimatedTotal: calculateTotal(),
      selectedAddOns,
      selectedTeamMember,
      mediaDuration: selectedService === "media" ? mediaDuration : null,
      budgetRange: selectedService !== "media" ? budgetRange[0] : null,
      timestamp: new Date().toISOString(),

      // Form field data
      projectName,
      projectDescription,
      startDate,
      contentType,
      eventDate,
      eventTime,
      location,
      participants,
      specialRequirements,

      // Additional context
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    }
  }

  const handleSubmitForm = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formData = collectFormData()

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        // Show more detailed error information
        const errorMessage = result.message || "Failed to submit form"
        setSubmitError(errorMessage)

        // Log form data locally as backup
        console.log("Form submission failed, data:", formData)

        // Show user that data is saved locally
        if (result.message?.includes("logged")) {
          setSubmitError(errorMessage + " Your form data has been saved for manual processing.")
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      const formData = collectFormData()
      console.log("Form data (for manual processing):", formData)

      setSubmitError(
        "Network error occurred. Your form data has been logged in the browser console. " +
          "Please contact services@communitytechnet.com directly with your project details.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderDevelopmentForm = () => (
    <div className="space-y-8">
      {/* Project Requirements Section */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Project Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="projectName">Project Name</Label>
            <Input id="projectName" placeholder="Enter your project name" className="mt-2" />
          </div>

          <div>
            <Label htmlFor="projectDescription">Project Description</Label>
            <Textarea
              id="projectDescription"
              placeholder="Describe your project in detail..."
              className="mt-2 min-h-[120px]"
              maxLength={1000}
              onChange={(e) => setCharacterCount(e.target.value.length)}
            />
            <div className="text-sm text-slate-500 mt-1">{characterCount}/1000 characters</div>
          </div>

          <div>
            <Label>Target Audience</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {targetAudiences.map((audience) => (
                <div key={audience} className="flex items-center space-x-2">
                  <Checkbox id={audience} />
                  <Label htmlFor={audience} className="text-sm">
                    {audience}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Key Features Required</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {keyFeatures.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox id={feature} />
                  <Label htmlFor={feature} className="text-sm">
                    {feature}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Design Preferences</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {designStyles.map((style) => (
                <div key={style.id} className="text-center">
                  <div className="border-2 border-slate-200 rounded-lg p-2 hover:border-blue-400 cursor-pointer transition-colors">
                    <img
                      src={style.preview || "/placeholder.svg"}
                      alt={style.name}
                      className="w-full h-20 object-cover rounded mb-2"
                    />
                    <Label className="text-xs">{style.name}</Label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Timeline Preferences</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="startDate" className="text-sm">
                  Preferred Start Date
                </Label>
                <Input id="startDate" type="date" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="urgency" className="text-sm">
                  Urgency Level
                </Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Flexible timeline</SelectItem>
                    <SelectItem value="medium">Medium - Standard timeline</SelectItem>
                    <SelectItem value="high">High - Rush delivery needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <Label>Budget Range: ${budgetRange[0] > 0 ? budgetRange[0].toLocaleString() : "0"}</Label>
            <Slider
              value={budgetRange}
              onValueChange={setBudgetRange}
              max={50000}
              min={0}
              step={500}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-slate-500 mt-1">
              <span>$0</span>
              <span>$50,000+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Specifications */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <Zap className="w-5 h-5 mr-2 text-orange-600" />
            Technical Specifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Platform Requirements</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
              {["iOS", "Android", "Web", "Desktop"].map((platform) => (
                <div key={platform} className="flex items-center space-x-2">
                  <Checkbox id={platform} />
                  <Label htmlFor={platform} className="text-sm">
                    {platform}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="integrations">Integration Needs</Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select integrations needed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="payment">Payment Systems (Stripe, PayPal)</SelectItem>
                <SelectItem value="apis">Third-party APIs</SelectItem>
                <SelectItem value="databases">Database Systems</SelectItem>
                <SelectItem value="crm">CRM Integration</SelectItem>
                <SelectItem value="analytics">Analytics Tools</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Compliance Requirements</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {["HIPAA", "PCI-DSS", "GDPR", "SOC 2", "CCPA"].map((compliance) => (
                <div key={compliance} className="flex items-center space-x-2">
                  <Checkbox id={compliance} />
                  <Label htmlFor={compliance} className="text-sm">
                    {compliance}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Hosting Preferences</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cloud" id="cloud" />
                <Label htmlFor="cloud">Cloud Hosting (AWS, Azure, GCP)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="onpremise" id="onpremise" />
                <Label htmlFor="onpremise">On-Premise</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hybrid" id="hybrid" />
                <Label htmlFor="hybrid">Hybrid Solution</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderMediaForm = () => (
    <div className="space-y-8">
      {/* Event/Content Details */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <Video className="w-5 h-5 mr-2 text-purple-600" />
            Event/Content Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="contentType">Event/Content Type</Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select content type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="podcast">Podcast Recording</SelectItem>
                <SelectItem value="livestream">Live Streaming</SelectItem>
                <SelectItem value="photography">Photography Session</SelectItem>
                <SelectItem value="videography">Video Production</SelectItem>
                <SelectItem value="event">Event Coverage</SelectItem>
                <SelectItem value="custom">Custom Project</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="eventDate">Preferred Date</Label>
              <Input id="eventDate" type="date" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="eventTime">Preferred Time</Label>
              <Input id="eventTime" type="time" className="mt-2" />
            </div>
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter address or 'Studio'" className="mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="duration">Duration (hours) - 2hr minimum</Label>
              <Input
                id="duration"
                type="number"
                min="2"
                max="12"
                value={mediaDuration}
                onChange={(e) => setMediaDuration(Math.max(2, Number.parseInt(e.target.value) || 2))}
                className="mt-2"
              />
              <p className="text-sm text-slate-500 mt-1">${(mediaDuration * 125).toLocaleString()} total</p>
            </div>
            <div>
              <Label htmlFor="participants">Number of Participants (max 6)</Label>
              <Input id="participants" type="number" min="1" max="6" className="mt-2" />
            </div>
          </div>

          <div>
            <Label htmlFor="specialRequirements">Special Requirements</Label>
            <Textarea
              id="specialRequirements"
              placeholder="Any special equipment, setup, or requirements..."
              className="mt-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Deliverables & Format */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <FileText className="w-5 h-5 mr-2 text-green-600" />
            Deliverables & Format
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Video Format</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4k" id="4k" />
                <Label htmlFor="4k">4K Ultra HD</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hd" id="hd" />
                <Label htmlFor="hd">HD 1080p</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="social" id="social" />
                <Label htmlFor="social">Social Media Optimized</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Delivery Method</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="digital" id="digital" />
                <Label htmlFor="digital">Digital Download</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="usb" id="usb" />
                <Label htmlFor="usb">USB Drive</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cloud" id="cloudStorage" />
                <Label htmlFor="cloudStorage">Cloud Storage</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Usage Rights</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
              {["Social Media", "Commercial Use", "Broadcast Rights"].map((right) => (
                <div key={right} className="flex items-center space-x-2">
                  <Checkbox id={right} />
                  <Label htmlFor={right} className="text-sm">
                    {right}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="rushDelivery">Rush Delivery Needed</Label>
              <p className="text-sm text-slate-500">Additional $200-500 depending on timeline</p>
            </div>
            <Switch id="rushDelivery" />
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderEducationForm = () => (
    <div className="space-y-8">
      {/* Student Information */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Student Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Current Skill Level</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner" />
                <Label htmlFor="beginner">Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate">Intermediate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced">Advanced</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Learning Goals</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {[
                "Career Change",
                "Skill Enhancement",
                "Certification",
                "Personal Interest",
                "Business Growth",
                "Team Training",
              ].map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox id={goal} />
                  <Label htmlFor={goal} className="text-sm">
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Preferred Learning Style</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="visual" id="visual" />
                <Label htmlFor="visual">Visual Learning</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="handson" id="handson" />
                <Label htmlFor="handson">Hands-on Practice</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reading" id="reading" />
                <Label htmlFor="reading">Reading & Research</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mixed" id="mixed" />
                <Label htmlFor="mixed">Mixed Approach</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Certification Goals</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {[
                "AWS Cloud Practitioner",
                "CompTIA Security+",
                "Salesforce Admin",
                "Google Cloud",
                "Microsoft Azure",
                "Cisco CCNA",
              ].map((cert) => (
                <div key={cert} className="flex items-center space-x-2">
                  <Checkbox id={cert} />
                  <Label htmlFor={cert} className="text-sm">
                    {cert}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Support Needs */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Support Needs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Study Materials Format</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="digital" id="digitalMaterials" />
                <Label htmlFor="digitalMaterials">Digital Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="physical" id="physical" />
                <Label htmlFor="physical">Physical Materials</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="bothMaterials" />
                <Label htmlFor="bothMaterials">Both Digital & Physical</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="tutoringSessions">Tutoring Sessions Needed</Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select number of sessions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">No tutoring needed</SelectItem>
                <SelectItem value="2">2 sessions - $400</SelectItem>
                <SelectItem value="4">4 sessions - $750</SelectItem>
                <SelectItem value="8">8 sessions - $1,400</SelectItem>
                <SelectItem value="unlimited">Unlimited - $2,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="careerPlacement">Career Placement Assistance</Label>
              <p className="text-sm text-slate-500">Resume review, interview prep, job matching</p>
            </div>
            <Switch id="careerPlacement" />
          </div>
        </CardContent>
      </Card>
    </div>
  )

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
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                    Project Specification Form
                  </h1>
                  <p className="text-sm text-slate-500">Tell us about your project requirements</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                Estimated Total: ${calculateTotal().toLocaleString()}
              </Badge>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Service Selection */}
        <Card className="backdrop-blur-lg bg-white/60 border-white/30 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800 text-center">Select Your Service Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceTypes.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedService === service.id ? "ring-2 ring-blue-400 bg-blue-50" : "hover:bg-white/80"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="p-6 text-center">
                    <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-lg font-bold text-slate-800">{service.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Form Content */}
        {selectedService === "development" && renderDevelopmentForm()}
        {selectedService === "media" && renderMediaForm()}
        {selectedService === "education" && renderEducationForm()}

        {/* Add-On Services */}
        {selectedService && (
          <Card className="backdrop-blur-lg bg-white/60 border-white/30 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold text-slate-800">
                <Plus className="w-5 h-5 mr-2 text-green-600" />
                Enhanced Service Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOnServices.map((addOn) => (
                  <div
                    key={addOn.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedAddOns.includes(addOn.id)
                        ? "border-green-400 bg-green-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => handleAddOnToggle(addOn.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-800">{addOn.name}</h4>
                      <Badge variant="outline" className="text-green-600">
                        +${addOn.price}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{addOn.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Team Preference */}
        {selectedService && (
          <Card className="backdrop-blur-lg bg-white/60 border-white/30 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold text-slate-800">
                <Users className="w-5 h-5 mr-2 text-purple-600" />
                Choose Your Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <Card
                    key={member.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedTeamMember === member.id ? "ring-2 ring-purple-400 bg-purple-50" : "hover:bg-white/80"
                    } ${!member.available ? "opacity-50" : ""}`}
                    onClick={() => member.available && setSelectedTeamMember(member.id)}
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <Avatar className="w-16 h-16 mx-auto mb-3">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h4 className="font-bold text-slate-800">{member.name}</h4>
                        <p className="text-sm text-slate-600">{member.role}</p>
                        <div className="flex items-center justify-center mt-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1">{member.rating}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-slate-700">Specialties:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {member.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-700">Languages:</p>
                          <p className="text-xs text-slate-600">{member.languages.join(", ")}</p>
                        </div>
                        <div className="text-center mt-3">
                          <Badge
                            variant={member.available ? "default" : "secondary"}
                            className={member.available ? "bg-green-100 text-green-700" : ""}
                          >
                            {member.available ? "Available" : "Busy"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error Message */}
        {submitError && (
          <Card className="backdrop-blur-lg bg-red-50 border-red-200 mb-8">
            <CardContent className="p-6 text-center">
              <div className="text-red-600 mb-2">⚠️ Submission Error</div>
              <p className="text-red-700">{submitError}</p>
            </CardContent>
          </Card>
        )}

        {/* Submit Section */}
        {selectedService && !isSubmitted && (
          <Card className="backdrop-blur-lg bg-white/60 border-white/30">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Ready to Get Started?</h3>
                <p className="text-slate-600">Review your selections and submit your project specification</p>
                <div className="mt-4">
                  <Badge variant="outline" className="text-2xl px-4 py-2 text-blue-600 border-blue-200">
                    Total Estimate: ${calculateTotal().toLocaleString()}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300"
                  onClick={handleSubmitForm}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5 mr-2" />
                      Submit Specification
                    </>
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-3 hover:shadow-xl transition-all duration-300 bg-transparent"
                  disabled={isSubmitting}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Thank You Message */}
        {isSubmitted && (
          <Card className="backdrop-blur-lg bg-white/60 border-white/30">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Thank You for Your Request!</h3>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                Your project specification has been successfully submitted to our team at{" "}
                <span className="font-semibold text-blue-600">services@communitytechnet.com</span>
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                <h4 className="font-bold text-blue-800 mb-2">What happens next?</h4>
                <p className="text-blue-700 text-sm">
                  Once your request has been approved, you will receive an invoice for final confirmation within 24
                  hours. Our team will review your specifications and contact you with any questions or clarifications
                  needed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300"
                  onClick={() => (window.location.href = "/")}
                >
                  Return to Dashboard
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-200 text-green-600 hover:bg-green-50 px-8 py-3 hover:shadow-xl transition-all duration-300 bg-transparent"
                  onClick={() => {
                    setIsSubmitted(false)
                    setSelectedService("")
                    setBudgetRange([0])
                    setMediaDuration(2)
                    setSelectedAddOns([])
                    setSelectedTeamMember("")
                    setSubmitError(null)
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
