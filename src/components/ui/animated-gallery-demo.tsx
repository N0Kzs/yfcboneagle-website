"use client"

import React from "react"
import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/ui/animated-gallery"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "lucide-react"

const IMAGES_1 = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
  "/events/Smart%20City%20Convention%202026/1.jpg",
  "/events/WORLDBEX/1.jpg",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
]

const IMAGES_2 = [
  "/events/Smart%20City%20Convention%202026/2.jpg",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  "/events/NICP%20National%20ICT%20Summit/1.jpg",
  "/events/ClickConex/1.jpg",
]

const IMAGES_3 = [
  "/events/IECEP%20MIDCON/1.jpg",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  "/events/Baguio%20Smart%20City%20Convergence%202025/1.jpg",
  "/veiwEvents/middle.avif",
]

export const DemoVariant1 = () => {
  return (
    <div className="relative bg-background overflow-hidden">
      <ContainerStagger className="relative z-20 -mb-12 place-self-center px-6 pt-12 text-center max-w-4xl mx-auto">
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight md:text-5xl text-foreground">
            Your{" "}
            <span className="font-serif font-extralight text-primary">
              one source
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight md:text-5xl text-foreground">
            for all your designs
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-4">
          <p className="leading-normal tracking-tight text-muted-foreground text-sm sm:text-base">
            No waste of time and money, we provide you with
            <br /> collection of designs to plan your next project.
          </p>
        </ContainerAnimated>

        <ContainerAnimated className="flex items-center justify-center gap-2">
          <Button className="gap-1.5 bg-primary text-primary-foreground">
            Book free call <VideoIcon className="size-4" />
          </Button>
          <Button variant="link" className="text-muted-foreground hover:text-foreground">
            About Us
          </Button>
        </ContainerAnimated>
      </ContainerStagger>

      <div
        className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.25), rgba(59, 130, 246, 0.15), transparent 70%)",
          filter: "blur(84px)",
        }}
      />

      <ContainerScroll className="relative h-[300vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="max-w-7xl mx-auto px-4">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow-lg border border-border/40"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow-lg border border-border/40"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow-lg border border-border/40"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}
