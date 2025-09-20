"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface GalleryItem {
  src: string
  title: string
  category: string
  description: string
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [videoItems, setVideoItems] = useState<any[]>([])
  const categories = ["Foto", "Murid", "Video"];
  const [activeCategory, setActiveCategory] = useState("Foto")

  useEffect(() => {
    const loadGalleryConfig = async () => {
      try {
        // Foto & Murid
        const response = await fetch("/gallery-config.json")
        const config = await response.json()
        const fotoItems: GalleryItem[] = config.foto
          ? Object.entries(config.foto).map(([filename, data]: [string, any]) => ({
              src: `/images/${filename}`,
              title: data.title,
              category: data.category,
              description: data.description,
            }))
          : [];
        const muridItems: GalleryItem[] = config.murid
          ? Object.entries(config.murid).map(([filename, data]: [string, any]) => ({
              src: `/images/${filename}`,
              title: data.title,
              category: "Murid",
              description: data.description,
            }))
          : [];
        setGalleryItems([...fotoItems, ...muridItems]);

        // Video dari config terpisah
        const videoRes = await fetch("/gallery-video-config.json")
        const videoConfig = await videoRes.json()
        setVideoItems(videoConfig)
      } catch (error) {
        console.error("Error loading gallery config:", error)
        setGalleryItems([])
        setVideoItems([])
      }
    }
    loadGalleryConfig()
  }, [])

  const filteredItems =
    activeCategory === "Video"
      ? videoItems
      : galleryItems.filter((item) => item.category === activeCategory)

  // State untuk hover video
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  return (
    <section id="galeri" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="text-primary">Galeri</span> Kegiatan
          </h2>
          {/* Dokumentasi berbagai kegiatan, prestasi, dan pembelajaran di TK BPP RENDA KASIH. */}
        </div>

        {/* Category Filter: Foto & Video */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            if (activeCategory === "Video") {
              // Cek apakah video YouTube atau lokal
              let isYoutube = !!item.youtubeId;
              let videoUrl = "";
              if (isYoutube) {
                videoUrl = `https://www.youtube.com/embed/${item.youtubeId}${hoveredVideo === index ? "?autoplay=1" : ""}`;
              }
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  onMouseEnter={() => setHoveredVideo(index)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => !isYoutube && setSelectedImage(item.file)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      {isYoutube ? (
                        <iframe
                          width="100%"
                          height="300"
                          src={videoUrl}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-48 sm:h-56 lg:h-64 rounded-lg"
                        />
                      ) : (
                        <video
                          width="100%"
                          height="300"
                          controls={hoveredVideo === index}
                          poster={item.thumbnail}
                          className="w-full h-48 sm:h-56 lg:h-64 rounded-lg object-cover"
                          onMouseEnter={e => e.currentTarget.play()}
                          onMouseLeave={e => e.currentTarget.pause()}
                        >
                          <source src={item.file} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">Video</Badge>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-balance text-sm lg:text-base">{item.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              );
            } else {
              const isClickable = item.category === "Foto" || item.category === "Murid";
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  onClick={() => isClickable ? setSelectedImage(item.src) : null}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">{item.category}</Badge>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-balance text-sm lg:text-base">{item.title}</h3>
                      <p className="text-xs lg:text-sm text-muted-foreground text-pretty line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            }
          })}
        </div>

        {/* Modal for enlarged image or video */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
              {selectedImage.endsWith('.mp4') ? (
                <video src={selectedImage} controls autoPlay style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5rem' }} />
              ) : (
                <img
                  src={selectedImage}
                  alt="Foto murid original"
                  style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5rem' }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
