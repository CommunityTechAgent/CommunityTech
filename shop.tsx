"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  Heart,
  Search,
  Grid3X3,
  List,
  Zap,
  Award,
  TrendingUp,
  Users,
  ShoppingCart,
  Eye,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const categories = [
    { name: "All Products", count: 48, active: true },
    { name: "Mobile Apps", count: 12, active: false },
    { name: "Web Platforms", count: 8, active: false },
    { name: "Digital Art", count: 15, active: false },
    { name: "Photography", count: 6, active: false },
    { name: "Music & Audio", count: 4, active: false },
    { name: "Templates", count: 3, active: false },
  ]

  const featuredProducts = [
    {
      id: "1",
      title: "DMV Restaurant Finder App",
      description: "Discover the best local restaurants with reviews, menus, and delivery options",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.8,
      reviews: 124,
      category: "Mobile Apps",
      creator: {
        name: "Marcus Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Firebase", "Maps API"],
      featured: true,
      sales: 89,
    },
    {
      id: "2",
      title: "Community Event Management System",
      description: "Complete platform for organizing and managing community events and registrations",
      price: "$149.99",
      rating: 4.9,
      reviews: 67,
      category: "Web Platforms",
      creator: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
      featured: true,
      sales: 45,
    },
    {
      id: "3",
      title: "DC Landmarks Photography Collection",
      description: "Professional high-resolution photos of iconic DC landmarks for commercial use",
      price: "$19.99",
      rating: 4.7,
      reviews: 203,
      category: "Photography",
      creator: {
        name: "David Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      image: "/placeholder.svg?height=300&width=400",
      tags: ["4K Resolution", "Commercial License", "RAW Files"],
      featured: false,
      sales: 156,
    },
    {
      id: "4",
      title: "Local Business Directory Template",
      description: "Customizable website template for local business directories with search and filters",
      price: "$79.99",
      rating: 4.6,
      reviews: 89,
      category: "Templates",
      creator: {
        name: "Jennifer Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
      },
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML/CSS", "JavaScript", "Responsive"],
      featured: false,
      sales: 34,
    },
    {
      id: "5",
      title: "DMV Transit Tracker",
      description: "Real-time public transportation tracking app for DC Metro area",
      price: "$24.99",
      rating: 4.5,
      reviews: 178,
      category: "Mobile Apps",
      creator: {
        name: "Alex Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Flutter", "Real-time API", "Offline Mode"],
      featured: false,
      sales: 92,
    },
    {
      id: "6",
      title: "Community Podcast Intro Music Pack",
      description: "Collection of royalty-free intro music tracks perfect for community podcasts",
      price: "$15.99",
      rating: 4.8,
      reviews: 145,
      category: "Music & Audio",
      creator: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      image: "/placeholder.svg?height=300&width=400",
      tags: ["MP3", "WAV", "Royalty-Free"],
      featured: false,
      sales: 78,
    },
  ]

  const stats = [
    { label: "Local Creators", value: "150+", icon: Users },
    { label: "Products Available", value: "500+", icon: ShoppingBag },
    { label: "Community Rating", value: "4.8★", icon: Star },
    { label: "Total Sales", value: "$50K+", icon: TrendingUp },
  ]

  const topCreators = [
    {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
      products: 8,
      rating: 4.9,
      sales: "$2,400",
      verified: true,
    },
    {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=50&width=50",
      products: 5,
      rating: 4.8,
      sales: "$1,800",
      verified: true,
    },
    {
      name: "David Rodriguez",
      avatar: "/placeholder.svg?height=50&width=50",
      products: 12,
      rating: 4.7,
      sales: "$3,200",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="backdrop-blur-lg bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => (window.location.href = "/")}
                className="hover:bg-indigo-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                    Tech Talent Marketplace
                  </h1>
                  <p className="text-sm text-slate-500">Discover Amazing Products Created by Local Talent</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input placeholder="Search products..." className="w-64 bg-white/60 border-white/30 backdrop-blur-sm" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
              <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Supporting Local Tech Talent
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Discover Amazing Products by{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              Local Creators
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Support the DMV tech community by purchasing innovative apps, digital art, templates, and creative works
            made by talented local developers, designers, and creators.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="backdrop-blur-lg bg-white/60 border-white/30 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Main Content */}
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-bold text-slate-800">Featured Products</h3>
                <Badge variant="secondary" className="text-indigo-600 bg-indigo-100">
                  {featuredProducts.length} products
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-indigo-100 text-indigo-700" : ""}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-indigo-100 text-indigo-700" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}
            >
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group backdrop-blur-lg bg-white/60 border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer overflow-hidden ${
                    hoveredProduct === product.id ? "ring-2 ring-indigo-400 ring-opacity-50" : ""
                  }`}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.featured && <Badge className="bg-indigo-600 text-white">Featured</Badge>}
                      <Badge variant="secondary" className="bg-white/90">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Creator Info */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={product.creator.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">
                          {product.creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-slate-600">{product.creator.name}</span>
                      {product.creator.verified && <Award className="w-3 h-3 text-indigo-600" />}
                    </div>

                    {/* Product Info */}
                    <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Rating & Sales */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-sm text-slate-500">({product.reviews})</span>
                      </div>
                      <div className="text-sm text-slate-500">{product.sales} sales</div>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-slate-800">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-slate-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent">
                Load More Products
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="backdrop-blur-lg bg-gradient-to-r from-indigo-600/10 to-purple-500/10 border-white/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <ShoppingBag className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Showcase Your Work?</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join our marketplace and start selling your digital products to the DMV tech community. From apps to
                templates, photography to music - share your creativity and earn from your talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Become a Seller
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-8 py-3 hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
