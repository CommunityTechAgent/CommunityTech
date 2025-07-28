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
  Cloud,
  Shield,
  Database,
  Globe,
  BarChart3,
  Lock,
  Wifi,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

// Bootcamp data synchronized with education page
const bootcampPrograms = [
  {
    id: "awsBootcamp",
    title: "AWS Cloud Practitioner Bootcamp",
    duration: "8-week intensive program",
    price: 2499,
    description: "Includes exam voucher & practice tests",
    icon: Cloud,
    level: "Beginner to Intermediate",
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
    rating: 4.9,
    students: 312,
  },
]

// Additional certifications data synchronized with education page
const additionalCertifications = [
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
  const [mediaAddOns, setMediaAddOns] = useState<string[]>([])
  const [developmentServices, setDevelopmentServices] = useState<string[]>([])
  const [developmentAddOns, setDevelopmentAddOns] = useState<string[]>([])
  const [timeline, setTimeline] = useState<string>("")
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  // Education form specific state
  const [selectedBootcamps, setSelectedBootcamps] = useState<string[]>([])
  const [bootcampFormat, setBootcampFormat] = useState<string>("")
  const [selectedAdditionalCerts, setSelectedAdditionalCerts] = useState<string[]>([])
  const [tutoringSessions, setTutoringSessions] = useState<string>("")
  const [studyMaterials, setStudyMaterials] = useState<string>("")
  const [careerServices, setCareerServices] = useState<string[]>([])
  const [paymentOption, setPaymentOption] = useState<string>("")

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    howDidYouHear: "",
    communicationPreference: "email",
  })

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

  const handleMediaAddOnToggle = (addOnId: string) => {
    setMediaAddOns((prev) => (prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]))
  }

  const handleDevelopmentServiceToggle = (serviceId: string) => {
    setDevelopmentServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleDevelopmentAddOnToggle = (addOnId: string) => {
    setDevelopmentAddOns((prev) => (prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]))
  }

  // Education form handlers
  const handleBootcampToggle = (bootcampId: string) => {
    setSelectedBootcamps((prev) =>
      prev.includes(bootcampId) ? prev.filter((id) => id !== bootcampId) : [...prev, bootcampId],
    )
  }

  const handleAdditionalCertToggle = (certId: string) => {
    setSelectedAdditionalCerts((prev) =>
      prev.includes(certId) ? prev.filter((id) => id !== certId) : [...prev, certId],
    )
  }

  const handleCareerServiceToggle = (serviceId: string) => {
    setCareerServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const calculateTotal = () => {
    let basePrice = 0

    // Base pricing based on service type
    if (selectedService === "development") {
      // Calculate based on selected development services (using lowest prices)
      const developmentServicePrices = {
        basicWeb: 1500, // Lowest of $1,500-$3,000
        businessWeb: 3000, // Lowest of $3,000-$5,000
        ecommerceWeb: 3500, // Lowest of $3,500-$10,500
        enterpriseWeb: 20000, // Lowest of $20,000+
        basicMobile: 2500, // Lowest of $2,500-$5,500
        advancedMobile: 5000, // Lowest of $5,000-$7,500
        enterpriseMobile: 15000, // Lowest of $15,000+
        basicSoftware: 10000, // Lowest of $10,000-$15,000
        complexSoftware: 15000, // Lowest of $15,000-$100,000
        enterpriseSoftware: 100000, // Lowest of $100,000+
        basicApi: 1000, // Lowest of $1,000-$4,000
        complexApi: 4000, // Lowest of $4,000-$15,000
        enterpriseApi: 25000, // Lowest of $25,000+
      }

      developmentServices.forEach((serviceId) => {
        if (developmentServicePrices[serviceId as keyof typeof developmentServicePrices]) {
          basePrice += developmentServicePrices[serviceId as keyof typeof developmentServicePrices]
        }
      })

      // Add development add-ons (using lowest prices)
      const devAddOnPrices = {
        devOps: 2500, // Lowest of $2,500-$7,500
        testing: 1500, // Lowest of $1,500-$5,000
        security: 2000, // Lowest of $2,000-$8,000
        performance: 1000, // Lowest of $1,000-$4,000
        monitoring: 1500, // Lowest of $1,500-$3,500
        backup: 1000, // Lowest of $1,000-$3,000
        basicSupport: 1500, // $500/month × 3 months
        standardSupport: 4500, // $750/month × 6 months
        premiumSupport: 12000, // $1,000/month × 12 months
        enterpriseSupport: 24000, // $2,000/month × 12 months
        userTraining: 1500, // Lowest of $1,500-$3,000
        adminTraining: 2000, // Lowest of $2,000-$4,000
        documentation: 1000, // Lowest of $1,000-$2,500
        userManual: 500, // Lowest of $500-$1,500
      }

      developmentAddOns.forEach((addOnId) => {
        if (devAddOnPrices[addOnId as keyof typeof devAddOnPrices]) {
          basePrice += devAddOnPrices[addOnId as keyof typeof devAddOnPrices]
        }
      })

      // Apply timeline multiplier
      if (timeline === "rush") {
        basePrice *= 1.25 // +25% for rush projects
      }
    } else if (selectedService === "media") {
      // Get selected media service type
      const contentTypeElement = document.querySelector('[name="contentType"]') as HTMLInputElement
      const contentType = contentTypeElement?.value || ""

      let hourlyRate = 125 // default rate

      // Set rates based on service type
      switch (contentType) {
        case "livestream":
          hourlyRate = 150
          break
        case "photography":
        case "editing":
        case "consultation":
          hourlyRate = 100
          break
        case "studio":
          hourlyRate = 75
          break
        case "podcast":
        case "videography":
        case "event":
        case "custom":
        default:
          hourlyRate = 125
          break
      }

      basePrice = mediaDuration * hourlyRate

      // Add media service add-ons (hourly rates)
      const mediaAddOnTotal = mediaAddOns.reduce((total, addOnId) => {
        switch (addOnId) {
          case "multiCamera":
            return total + mediaDuration * 50
          case "lighting":
            return total + mediaDuration * 25
          case "audio":
            return total + mediaDuration * 30
          case "teleprompter":
            return total + mediaDuration * 20
          case "greenscreen":
            return total + mediaDuration * 35
          case "drone":
            return total + 100 // flat rate per session
          case "camera4k":
            return total + 40 // per day
          case "microphones":
            return total + 15 // per day
          case "tripods":
            return total + 10 // per day
          case "backdrop":
            return total + 20 // per day
          case "colorGrading":
            return total + mediaDuration * 50
          case "motionGraphics":
            return total + mediaDuration * 75
          case "audioMixing":
            return total + mediaDuration * 40
          case "subtitles":
            return total + mediaDuration * 25
          case "thumbnails":
            return total + 30 // flat rate per set
          default:
            return total
        }
      }, 0)

      basePrice += mediaAddOnTotal
    } else if (selectedService === "education") {
      // Calculate based on selected bootcamps
      selectedBootcamps.forEach((bootcampId) => {
        const bootcamp = bootcampPrograms.find((b) => b.id === bootcampId)
        if (bootcamp) {
          basePrice += bootcamp.price
        }
      })

      // Add format adjustments
      switch (bootcampFormat) {
        case "parttime":
          basePrice += 500
          break
        case "weekend":
          basePrice += 300
          break
        case "selfpaced":
          basePrice -= 500
          break
      }

      // Add additional certifications
      selectedAdditionalCerts.forEach((certId) => {
        const cert = additionalCertifications.find((c) => c.id === certId)
        if (cert) {
          basePrice += cert.price
        }
      })

      // Add tutoring sessions
      const tutoringPrices = {
        "2": 400,
        "4": 750,
        "8": 1400,
        "12": 2000,
        unlimited: 2500,
      }
      if (tutoringSessions && tutoringPrices[tutoringSessions as keyof typeof tutoringPrices]) {
        basePrice += tutoringPrices[tutoringSessions as keyof typeof tutoringPrices]
      }

      // Add study materials
      switch (studyMaterials) {
        case "physical":
          basePrice += 199
          break
        case "both":
          basePrice += 149
          break
      }

      // Add career services
      const careerServicePrices = {
        resumeReview: 299,
        interviewPrep: 399,
        jobPlacement: 599,
        linkedinOptimization: 199,
      }

      careerServices.forEach((serviceId) => {
        if (careerServicePrices[serviceId as keyof typeof careerServicePrices]) {
          basePrice += careerServicePrices[serviceId as keyof typeof careerServicePrices]
        }
      })

      // Apply payment discount
      if (paymentOption === "full") {
        basePrice *= 0.95 // 5% discount for full payment
      }
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
      developmentServices,
      developmentAddOns,
      timeline,

      // Education specific data
      selectedBootcamps,
      bootcampFormat,
      selectedAdditionalCerts,
      tutoringSessions,
      studyMaterials,
      careerServices,
      paymentOption,

      timestamp: new Date().toISOString(),

      // User Information
      userInfo,

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
    // Validate required fields
    const errors: string[] = []

    if (!userInfo.firstName.trim()) {
      errors.push("First Name is required")
    }

    if (!userInfo.lastName.trim()) {
      errors.push("Last Name is required")
    }

    if (!userInfo.email.trim()) {
      errors.push("Email Address is required")
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (userInfo.email.trim() && !emailRegex.test(userInfo.email)) {
      errors.push("Please enter a valid email address")
    }

    if (errors.length > 0) {
      setValidationErrors(errors)
      setSubmitError("Please fill in all required fields before submitting.")
      return
    }

    // Clear validation errors if all fields are valid
    setValidationErrors([])
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
      {/* Development Service Selection */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
            Development Service Tiers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Select Development Service</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:border-blue-400">
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox id="webDev" />
                  <Label htmlFor="webDev" className="font-semibold">
                    Web Development
                  </Label>
                </div>
                <div className="space-y-2 ml-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="basicWeb"
                      checked={developmentServices.includes("basicWeb")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("basicWeb")}
                    />
                    <Label htmlFor="basicWeb" className="text-sm">
                      Basic Website - $1,500-$3,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="businessWeb"
                      checked={developmentServices.includes("businessWeb")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("businessWeb")}
                    />
                    <Label htmlFor="businessWeb" className="text-sm">
                      Business Website - $3,000-$5,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ecommerceWeb"
                      checked={developmentServices.includes("ecommerceWeb")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("ecommerceWeb")}
                    />
                    <Label htmlFor="ecommerceWeb" className="text-sm">
                      E-commerce Platform - $3,500-$10,500
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="enterpriseWeb"
                      checked={developmentServices.includes("enterpriseWeb")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("enterpriseWeb")}
                    />
                    <Label htmlFor="enterpriseWeb" className="text-sm">
                      Enterprise Solution - $20,000+
                    </Label>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:border-blue-400">
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox id="mobileDev" />
                  <Label htmlFor="mobileDev" className="font-semibold">
                    Mobile App Development
                  </Label>
                </div>
                <div className="space-y-2 ml-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="basicMobile"
                      checked={developmentServices.includes("basicMobile")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("basicMobile")}
                    />
                    <Label htmlFor="basicMobile" className="text-sm">
                      Basic App - $2,500-$5,500
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="advancedMobile"
                      checked={developmentServices.includes("advancedMobile")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("advancedMobile")}
                    />
                    <Label htmlFor="advancedMobile" className="text-sm">
                      Advanced App - $5,000-$7,500
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="enterpriseMobile"
                      checked={developmentServices.includes("enterpriseMobile")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("enterpriseMobile")}
                    />
                    <Label htmlFor="enterpriseMobile" className="text-sm">
                      Enterprise App - $15,000+
                    </Label>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:border-blue-400">
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox id="customSoftware" />
                  <Label htmlFor="customSoftware" className="font-semibold">
                    Custom Software Development
                  </Label>
                </div>
                <div className="space-y-2 ml-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="basicSoftware"
                      checked={developmentServices.includes("basicSoftware")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("basicSoftware")}
                    />
                    <Label htmlFor="basicSoftware" className="text-sm">
                      Basic Solution - $10,000-$15,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="complexSoftware"
                      checked={developmentServices.includes("complexSoftware")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("complexSoftware")}
                    />
                    <Label htmlFor="complexSoftware" className="text-sm">
                      Complex System - $15,000-$100,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="enterpriseSoftware"
                      checked={developmentServices.includes("enterpriseSoftware")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("enterpriseSoftware")}
                    />
                    <Label htmlFor="enterpriseSoftware" className="text-sm">
                      Enterprise System - $100,000+
                    </Label>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:border-blue-400">
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox id="apiDev" />
                  <Label htmlFor="apiDev" className="font-semibold">
                    API Development & Integration
                  </Label>
                </div>
                <div className="space-y-2 ml-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="basicApi"
                      checked={developmentServices.includes("basicApi")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("basicApi")}
                    />
                    <Label htmlFor="basicApi" className="text-sm">
                      Basic API - $1,000-$4,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="complexApi"
                      checked={developmentServices.includes("complexApi")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("complexApi")}
                    />
                    <Label htmlFor="complexApi" className="text-sm">
                      Complex Integration - $4,000-$15,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="enterpriseApi"
                      checked={developmentServices.includes("enterpriseApi")}
                      onCheckedChange={() => handleDevelopmentServiceToggle("enterpriseApi")}
                    />
                    <Label htmlFor="enterpriseApi" className="text-sm">
                      Enterprise API Suite - $25,000+
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label>Development Approach</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="agile" id="agile" />
                <Label htmlFor="agile">Agile Development (Recommended)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="waterfall" id="waterfall" />
                <Label htmlFor="waterfall">Waterfall Methodology</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hybrid" id="hybridDev" />
                <Label htmlFor="hybridDev">Hybrid Approach</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Technology Stack Preferences</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {[
                "React/Next.js",
                "Vue.js",
                "Angular",
                "Node.js",
                "Python/Django",
                "PHP/Laravel",
                "Ruby on Rails",
                ".NET",
                "Java/Spring",
              ].map((tech) => (
                <div key={tech} className="flex items-center space-x-2">
                  <Checkbox id={tech} />
                  <Label htmlFor={tech} className="text-sm">
                    {tech}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Project Timeline</Label>
            <Select value={timeline} onValueChange={setTimeline}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select expected timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rush">Rush (2-4 weeks) - +25% cost</SelectItem>
                <SelectItem value="standard">Standard (1-3 months)</SelectItem>
                <SelectItem value="extended">Extended (3-6 months)</SelectItem>
                <SelectItem value="longterm">Long-term (6+ months)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Development Add-Ons */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <Plus className="w-5 h-5 mr-2 text-green-600" />
            Development Add-On Services
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Professional Services</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="devOps"
                  checked={developmentAddOns.includes("devOps")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("devOps")}
                />
                <Label htmlFor="devOps" className="text-sm">
                  DevOps Setup & CI/CD (+$2,500-$7,500)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="testing"
                  checked={developmentAddOns.includes("testing")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("testing")}
                />
                <Label htmlFor="testing" className="text-sm">
                  Automated Testing Suite (+$1,500-$5,000)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="security"
                  checked={developmentAddOns.includes("security")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("security")}
                />
                <Label htmlFor="security" className="text-sm">
                  Security Audit & Hardening (+$2,000-$8,000)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="performance"
                  checked={developmentAddOns.includes("performance")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("performance")}
                />
                <Label htmlFor="performance" className="text-sm">
                  Performance Optimization (+$1,000-$4,000)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="monitoring"
                  checked={developmentAddOns.includes("monitoring")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("monitoring")}
                />
                <Label htmlFor="monitoring" className="text-sm">
                  Monitoring & Analytics Setup (+$1,500-$3,500)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="backup"
                  checked={developmentAddOns.includes("backup")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("backup")}
                />
                <Label htmlFor="backup" className="text-sm">
                  Backup & Disaster Recovery (+$1,000-$3,000)
                </Label>
              </div>
            </div>
          </div>

          <div>
            <Label>Maintenance & Support</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="basicSupport"
                  checked={developmentAddOns.includes("basicSupport")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("basicSupport")}
                />
                <Label htmlFor="basicSupport" className="text-sm">
                  Basic Support (3 months) - $500/month
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="standardSupport"
                  checked={developmentAddOns.includes("standardSupport")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("standardSupport")}
                />
                <Label htmlFor="standardSupport" className="text-sm">
                  Standard Support (6 months) - $750/month
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="premiumSupport"
                  checked={developmentAddOns.includes("premiumSupport")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("premiumSupport")}
                />
                <Label htmlFor="premiumSupport" className="text-sm">
                  Premium Support (12 months) - $1,000/month
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="enterpriseSupport"
                  checked={developmentAddOns.includes("enterpriseSupport")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("enterpriseSupport")}
                />
                <Label htmlFor="enterpriseSupport" className="text-sm">
                  Enterprise Support (24/7) - $2,000/month
                </Label>
              </div>
            </div>
          </div>

          <div>
            <Label>Training & Documentation</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="userTraining"
                  checked={developmentAddOns.includes("userTraining")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("userTraining")}
                />
                <Label htmlFor="userTraining" className="text-sm">
                  User Training Sessions (+$1,500-$3,000)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="adminTraining"
                  checked={developmentAddOns.includes("adminTraining")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("adminTraining")}
                />
                <Label htmlFor="adminTraining" className="text-sm">
                  Admin Training (+$2,000-$4,000)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="documentation"
                  checked={developmentAddOns.includes("documentation")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("documentation")}
                />
                <Label htmlFor="documentation" className="text-sm">
                  Technical Documentation (+$1,000-$2,500)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="userManual"
                  checked={developmentAddOns.includes("userManual")}
                  onCheckedChange={() => handleDevelopmentAddOnToggle("userManual")}
                />
                <Label htmlFor="userManual" className="text-sm">
                  User Manual & Guides (+$500-$1,500)
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
            <Label>Database Requirements</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase"].map((db) => (
                <div key={db} className="flex items-center space-x-2">
                  <Checkbox id={db} />
                  <Label htmlFor={db} className="text-sm">
                    {db}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Cloud Services</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {["AWS", "Google Cloud", "Microsoft Azure", "Vercel", "Netlify", "DigitalOcean"].map((cloud) => (
                <div key={cloud} className="flex items-center space-x-2">
                  <Checkbox id={cloud} />
                  <Label htmlFor={cloud} className="text-sm">
                    {cloud}
                  </Label>
                </div>
              ))}
            </div>
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
            <Label htmlFor="contentType">Media Service Type</Label>
            <Select
              onValueChange={(value) => {
                // Update pricing based on service type
                const serviceElement = document.querySelector(`[name="contentType"]`) as HTMLInputElement
                if (serviceElement) serviceElement.value = value
              }}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select media service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="podcast">Podcast Recording & Production - $125/hr</SelectItem>
                <SelectItem value="livestream">Live Streaming Services - $150/hr</SelectItem>
                <SelectItem value="photography">Photography Services - $100/hr</SelectItem>
                <SelectItem value="videography">Video Production - $125/hr</SelectItem>
                <SelectItem value="event">Event Coverage - $125/hr</SelectItem>
                <SelectItem value="custom">Custom Media Projects - $125/hr</SelectItem>
                <SelectItem value="studio">Studio Rental - $75/hr</SelectItem>
                <SelectItem value="editing">Post-Production Editing - $100/hr</SelectItem>
                <SelectItem value="consultation">Media Consultation - $100/hr</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="contentType" />
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

      {/* Professional Media Services */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <Star className="w-5 h-5 mr-2 text-yellow-600" />
            Professional Media Services
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Service Add-Ons</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="multiCamera"
                  checked={mediaAddOns.includes("multiCamera")}
                  onCheckedChange={() => handleMediaAddOnToggle("multiCamera")}
                />
                <Label htmlFor="multiCamera" className="text-sm">
                  Multi-Camera Setup (+$50/hr = +${(mediaDuration * 50).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="lighting"
                  checked={mediaAddOns.includes("lighting")}
                  onCheckedChange={() => handleMediaAddOnToggle("lighting")}
                />
                <Label htmlFor="lighting" className="text-sm">
                  Professional Lighting (+$25/hr = +${(mediaDuration * 25).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="audio"
                  checked={mediaAddOns.includes("audio")}
                  onCheckedChange={() => handleMediaAddOnToggle("audio")}
                />
                <Label htmlFor="audio" className="text-sm">
                  Advanced Audio Setup (+$30/hr = +${(mediaDuration * 30).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="teleprompter"
                  checked={mediaAddOns.includes("teleprompter")}
                  onCheckedChange={() => handleMediaAddOnToggle("teleprompter")}
                />
                <Label htmlFor="teleprompter" className="text-sm">
                  Teleprompter Service (+$20/hr = +${(mediaDuration * 20).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="greenscreen"
                  checked={mediaAddOns.includes("greenscreen")}
                  onCheckedChange={() => handleMediaAddOnToggle("greenscreen")}
                />
                <Label htmlFor="greenscreen" className="text-sm">
                  Green Screen Setup (+$35/hr = +${(mediaDuration * 35).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="drone"
                  checked={mediaAddOns.includes("drone")}
                  onCheckedChange={() => handleMediaAddOnToggle("drone")}
                />
                <Label htmlFor="drone" className="text-sm">
                  Drone Footage (+$100/session)
                </Label>
              </div>
            </div>
          </div>

          <div>
            <Label>Equipment Rental</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="camera4k"
                  checked={mediaAddOns.includes("camera4k")}
                  onCheckedChange={() => handleMediaAddOnToggle("camera4k")}
                />
                <Label htmlFor="camera4k" className="text-sm">
                  4K Camera Rental (+$40/day)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="microphones"
                  checked={mediaAddOns.includes("microphones")}
                  onCheckedChange={() => handleMediaAddOnToggle("microphones")}
                />
                <Label htmlFor="microphones" className="text-sm">
                  Wireless Microphones (+$15/day)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="tripods"
                  checked={mediaAddOns.includes("tripods")}
                  onCheckedChange={() => handleMediaAddOnToggle("tripods")}
                />
                <Label htmlFor="tripods" className="text-sm">
                  Professional Tripods (+$10/day)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="backdrop"
                  checked={mediaAddOns.includes("backdrop")}
                  onCheckedChange={() => handleMediaAddOnToggle("backdrop")}
                />
                <Label htmlFor="backdrop" className="text-sm">
                  Backdrop & Stands (+$20/day)
                </Label>
              </div>
            </div>
          </div>

          <div>
            <Label>Post-Production Services</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="basicEdit" />
                <Label htmlFor="basicEdit" className="text-sm">
                  Basic Editing (included)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="colorGrading"
                  checked={mediaAddOns.includes("colorGrading")}
                  onCheckedChange={() => handleMediaAddOnToggle("colorGrading")}
                />
                <Label htmlFor="colorGrading" className="text-sm">
                  Color Grading (+$50/hr = +${(mediaDuration * 50).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="motionGraphics"
                  checked={mediaAddOns.includes("motionGraphics")}
                  onCheckedChange={() => handleMediaAddOnToggle("motionGraphics")}
                />
                <Label htmlFor="motionGraphics" className="text-sm">
                  Motion Graphics (+$75/hr = +${(mediaDuration * 75).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="audioMixing"
                  checked={mediaAddOns.includes("audioMixing")}
                  onCheckedChange={() => handleMediaAddOnToggle("audioMixing")}
                />
                <Label htmlFor="audioMixing" className="text-sm">
                  Audio Mixing & Mastering (+$40/hr = +${(mediaDuration * 40).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="subtitles"
                  checked={mediaAddOns.includes("subtitles")}
                  onCheckedChange={() => handleMediaAddOnToggle("subtitles")}
                />
                <Label htmlFor="subtitles" className="text-sm">
                  Subtitles & Captions (+$25/hr = +${(mediaDuration * 25).toLocaleString()})
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="thumbnails"
                  checked={mediaAddOns.includes("thumbnails")}
                  onCheckedChange={() => handleMediaAddOnToggle("thumbnails")}
                />
                <Label htmlFor="thumbnails" className="text-sm">
                  Custom Thumbnails (+$30/set)
                </Label>
              </div>
            </div>
          </div>

          <div>
            <Label>Studio Services</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="onlocation" id="onlocation" />
                <Label htmlFor="onlocation">On-Location Shoot (travel fees may apply)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="studio" id="studioShoot" />
                <Label htmlFor="studioShoot">In-Studio Production ($75/hr studio rental)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hybrid" id="hybridShoot" />
                <Label htmlFor="hybridShoot">Hybrid (Studio + Location)</Label>
              </div>
            </RadioGroup>
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
      {/* Bootcamp Selection - Now using local bootcamp data with state management */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
            Popular Certification Bootcamps
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Select Bootcamp Program</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {bootcampPrograms.map((bootcamp) => (
                <div
                  key={bootcamp.id}
                  className="p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:border-blue-400"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Checkbox
                      id={bootcamp.id}
                      checked={selectedBootcamps.includes(bootcamp.id)}
                      onCheckedChange={() => handleBootcampToggle(bootcamp.id)}
                    />
                    <Label htmlFor={bootcamp.id} className="font-semibold">
                      {bootcamp.title}
                    </Label>
                  </div>
                  <div className="ml-6 space-y-1">
                    <p className="text-sm text-slate-600">{bootcamp.duration}</p>
                    <p className="text-sm font-semibold text-green-600">${bootcamp.price.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">{bootcamp.description}</p>
                    <div className="flex items-center text-xs text-slate-500 mt-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      {bootcamp.rating} • {bootcamp.students} students
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Bootcamp Format</Label>
            <RadioGroup className="mt-2" value={bootcampFormat} onValueChange={setBootcampFormat}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fulltime" id="fulltime" />
                <Label htmlFor="fulltime">Full-time (40 hours/week)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="parttime" id="parttime" />
                <Label htmlFor="parttime">Part-time (20 hours/week) - +$500</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekend" id="weekend" />
                <Label htmlFor="weekend">Weekend Only - +$300</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="selfpaced" id="selfpaced" />
                <Label htmlFor="selfpaced">Self-Paced Online - -$500</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Additional Certifications</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {additionalCertifications.map((cert) => (
                <div key={cert.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={cert.id}
                    checked={selectedAdditionalCerts.includes(cert.id)}
                    onCheckedChange={() => handleAdditionalCertToggle(cert.id)}
                  />
                  <Label htmlFor={cert.id} className="text-sm">
                    {cert.title} (+${cert.price.toLocaleString()})
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

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
                <Label htmlFor="beginner">Beginner - No prior experience</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate">Intermediate - Some experience</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced">Advanced - Professional experience</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Learning Goals</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {[
                "Career Change",
                "Skill Enhancement",
                "Certification Achievement",
                "Salary Increase",
                "Job Security",
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
                <Label htmlFor="visual">Visual Learning (Videos, Diagrams)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="handson" id="handson" />
                <Label htmlFor="handson">Hands-on Practice (Labs, Projects)</Label>
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
            <Label>Time Availability</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="hoursPerWeek" className="text-sm">
                  Hours per week you can dedicate
                </Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10-15 hours</SelectItem>
                    <SelectItem value="20">20-25 hours</SelectItem>
                    <SelectItem value="30">30-35 hours</SelectItem>
                    <SelectItem value="40">40+ hours (Full-time)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="preferredSchedule" className="text-sm">
                  Preferred Schedule
                </Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (1 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (6 PM - 9 PM)</SelectItem>
                    <SelectItem value="weekend">Weekends Only</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <Label>Employment Status</Label>
            <RadioGroup className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="employed" id="employed" />
                <Label htmlFor="employed">Currently Employed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unemployed" id="unemployed" />
                <Label htmlFor="unemployed">Unemployed/Job Seeking</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="freelance" id="freelance" />
                <Label htmlFor="freelance">Freelancer/Contractor</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Support Needs */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Support & Services
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Study Materials Format</Label>
            <RadioGroup className="mt-2" value={studyMaterials} onValueChange={setStudyMaterials}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="digital" id="digitalMaterials" />
                <Label htmlFor="digitalMaterials">Digital Only (included)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="physical" id="physical" />
                <Label htmlFor="physical">Physical Materials (+$199)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="bothMaterials" />
                <Label htmlFor="bothMaterials">Both Digital & Physical (+$149)</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="tutoringSessions">1-on-1 Tutoring Sessions</Label>
            <Select value={tutoringSessions} onValueChange={setTutoringSessions}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select tutoring package" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">No tutoring needed</SelectItem>
                <SelectItem value="2">2 sessions (1 hour each) - $400</SelectItem>
                <SelectItem value="4">4 sessions (1 hour each) - $750</SelectItem>
                <SelectItem value="8">8 sessions (1 hour each) - $1,400</SelectItem>
                <SelectItem value="12">12 sessions (1 hour each) - $2,000</SelectItem>
                <SelectItem value="unlimited">Unlimited tutoring - $2,500</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Career Services</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <Label htmlFor="resumeReview">Resume Review & Optimization</Label>
                  <p className="text-sm text-slate-500">Professional resume makeover</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold">+$299</span>
                  <Switch
                    id="resumeReview"
                    checked={careerServices.includes("resumeReview")}
                    onCheckedChange={() => handleCareerServiceToggle("resumeReview")}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <Label htmlFor="interviewPrep">Interview Preparation</Label>
                  <p className="text-sm text-slate-500">Mock interviews & coaching</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold">+$399</span>
                  <Switch
                    id="interviewPrep"
                    checked={careerServices.includes("interviewPrep")}
                    onCheckedChange={() => handleCareerServiceToggle("interviewPrep")}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <Label htmlFor="jobPlacement">Job Placement Assistance</Label>
                  <p className="text-sm text-slate-500">Job matching & application support</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold">+$599</span>
                  <Switch
                    id="jobPlacement"
                    checked={careerServices.includes("jobPlacement")}
                    onCheckedChange={() => handleCareerServiceToggle("jobPlacement")}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <Label htmlFor="linkedinOptimization">LinkedIn Profile Optimization</Label>
                  <p className="text-sm text-slate-500">Professional LinkedIn makeover</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold">+$199</span>
                  <Switch
                    id="linkedinOptimization"
                    checked={careerServices.includes("linkedinOptimization")}
                    onCheckedChange={() => handleCareerServiceToggle("linkedinOptimization")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label>Payment Options</Label>
            <RadioGroup className="mt-2" value={paymentOption} onValueChange={setPaymentOption}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full" id="fullPayment" />
                <Label htmlFor="fullPayment">Pay in Full (5% discount)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="installments" id="installments" />
                <Label htmlFor="installments">Monthly Installments (0% interest)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="employer" id="employer" />
                <Label htmlFor="employer">Employer Sponsorship</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="financing" id="financing" />
                <Label htmlFor="financing">Third-party Financing</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Special Accommodations</Label>
            <Textarea
              placeholder="Please describe any special accommodations needed (accessibility, scheduling, etc.)"
              className="mt-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Project Requirements Section */}
      <Card className="backdrop-blur-lg bg-white/60 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-slate-800">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Program Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="startDate">Preferred Start Date</Label>
            <Input id="startDate" type="date" className="mt-2" />
          </div>

          <div>
            <Label htmlFor="urgency">Timeline Preference</Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP - Next available cohort</SelectItem>
                <SelectItem value="month">Within 1 month</SelectItem>
                <SelectItem value="quarter">Within 3 months</SelectItem>
                <SelectItem value="flexible">Flexible - Best fit for schedule</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="motivation">What motivates you to pursue this certification?</Label>
            <Textarea
              id="motivation"
              placeholder="Tell us about your career goals and motivation..."
              className="mt-2 min-h-[100px]"
            />
          </div>

          <div>
            <Label htmlFor="experience">Relevant Experience</Label>
            <Textarea
              id="experience"
              placeholder="Describe any relevant work experience, education, or projects..."
              className="mt-2 min-h-[100px]"
            />
          </div>

          <div>
            <Label>Technology Access</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {[
                "Reliable Internet Connection",
                "Personal Computer/Laptop",
                "Webcam & Microphone",
                "Quiet Study Space",
                "Mobile Device",
                "Cloud Platform Access",
              ].map((tech) => (
                <div key={tech} className="flex items-center space-x-2">
                  <Checkbox id={tech} />
                  <Label htmlFor={tech} className="text-sm">
                    {tech}
                  </Label>
                </div>
              ))}
            </div>
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

        {/* User Information */}
        {selectedService && (
          <Card className="backdrop-blur-lg bg-white/60 border-white/30 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold text-slate-800">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Validation Errors Display */}
              {validationErrors.length > 0 && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="text-red-800 font-semibold mb-2">Please correct the following errors:</h4>
                  <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={userInfo.firstName}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, firstName: e.target.value }))}
                    placeholder="Enter your first name"
                    className={`mt-2 ${
                      validationErrors.some((error) => error.includes("First Name"))
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={userInfo.lastName}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, lastName: e.target.value }))}
                    placeholder="Enter your last name"
                    className={`mt-2 ${
                      validationErrors.some((error) => error.includes("Last Name"))
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    className={`mt-2 ${
                      validationErrors.some((error) => error.includes("Email"))
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={userInfo.company}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, company: e.target.value }))}
                    placeholder="Your company name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    value={userInfo.jobTitle}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, jobTitle: e.target.value }))}
                    placeholder="Your job title"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={userInfo.address}
                  onChange={(e) => setUserInfo((prev) => ({ ...prev, address: e.target.value }))}
                  placeholder="Street address"
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={userInfo.city}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, city: e.target.value }))}
                    placeholder="City"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State/Province</Label>
                  <Input
                    id="state"
                    value={userInfo.state}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, state: e.target.value }))}
                    placeholder="State"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                  <Input
                    id="zipCode"
                    value={userInfo.zipCode}
                    onChange={(e) => setUserInfo((prev) => ({ ...prev, zipCode: e.target.value }))}
                    placeholder="12345"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="country">Country</Label>
                <Select
                  value={userInfo.country}
                  onValueChange={(value) => setUserInfo((prev) => ({ ...prev, country: value }))}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                    <SelectItem value="Germany">Germany</SelectItem>
                    <SelectItem value="France">France</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                <Select
                  value={userInfo.howDidYouHear}
                  onValueChange={(value) => setUserInfo((prev) => ({ ...prev, howDidYouHear: value }))}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Referral from friend/colleague</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="advertisement">Online Advertisement</SelectItem>
                    <SelectItem value="event">Event/Conference</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Preferred Communication Method</Label>
                <RadioGroup
                  value={userInfo.communicationPreference}
                  onValueChange={(value) => setUserInfo((prev) => ({ ...prev, communicationPreference: value }))}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="commEmail" />
                    <Label htmlFor="commEmail">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="commPhone" />
                    <Label htmlFor="commPhone">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="commBoth" />
                    <Label htmlFor="commBoth">Both Email & Phone</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        )}

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
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  onClick={handleSubmitForm}
                  disabled={
                    isSubmitting || !userInfo.firstName.trim() || !userInfo.lastName.trim() || !userInfo.email.trim()
                  }
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
                    setValidationErrors([]) // Add this line
                    setMediaAddOns([])
                    setDevelopmentServices([])
                    setDevelopmentAddOns([])
                    setTimeline("")
                    setSelectedBootcamps([])
                    setBootcampFormat("")
                    setSelectedAdditionalCerts([])
                    setTutoringSessions("")
                    setStudyMaterials("")
                    setCareerServices([])
                    setPaymentOption("")
                    setUserInfo({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      company: "",
                      jobTitle: "",
                      address: "",
                      city: "",
                      state: "",
                      zipCode: "",
                      country: "United States",
                      howDidYouHear: "",
                      communicationPreference: "email",
                    })
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
