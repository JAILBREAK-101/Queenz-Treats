"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/nav"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import HeroImage from "@/assets/images/Early-Beginnings.avif"; 
import Image from "next/image";

export default function Page() {

  const services = [
    {
        title: "Event Planning and Management",
        text: "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
        img: "",
        btnText: "Book an event",
        url: "/events"
    },
    {
        title: "Catering Services",
        text: "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
        img: "",
        btnText: "Contact Us",
        url: "/contact"
    },
    {
        title: "Catering and Event Trainings",
        text: "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
        img: "",
        btnText: "Register",
        url: "/contact"
    },
    {
        title: "Decorations",
        text: "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
        img: "",
        btnText: "Contact Us",
        url: "/contact"

    }
]

const [isLoading, btnIsLoading ] = useState(false)


  return (
    <>
          <div className="">
              <Navbar />
              
              <div className="p-2">
                  
                  {/* Hero Section */}
                  <div className="">
                      <section className="flex max-md:flex-col gap-6">
  
                          <div className="hero-specific">
                              <h2 className="hero-section_header-text font-bold">Queenz Treats n Events</h2>
                              <p className="hero-section_text">We make the best cakes, pasteries, yogurts, and render exceptional services for all your upcoming events</p>
  
                              <Button className="">Get Started</Button>
                              {/* <LinkButton btnClass={"button button--primary"} anchorLink={"#services"} body={"Learn More"}/> */}
                          </div>

                          <>
                              {/* <ImageGallery /> */}
                              <Image src={HeroImage} alt="Hero Image" />
                          </>
                          
                      </section>
                  </div>

                  {/* Services Section */}
                  <div className="services-section" id="services">

                      <section className="services-section_info">

                          <h2 className="text-2xl">Our Services</h2>
  
                          <p className="services-section_info-text">At Queenz Treats n Events, we don't just sell products alone, but we render services such as</p>
  
                          <div className="grid grid-cols-2">
                                                        {
                                  services.map((service) => {
                                      return (
                                        <Card 
                                            title={service.title}
                                            description={service.text}
                                            btnText={service.btnText}
                                            link={service.url}
                                            image={service.img}
                                        />
                                      )
                                  })
                              }
                          </div>
                      </section>
                  </div>

                  {/* Events and Blog Section */}
                  <div className="events-section" id="events">
                      <section className="events-section_info">
                          <h2 className="fs-32">Past Events</h2>
  
                          <>
                              {/* <EventsComponent /> */}
                          </>
                      </section>
                  </div>

                  {/* Products Section */}
                  <div className="products-section" id="products">
                      <section className="products-section_info">

                          <h2 className="fs-32">Our Products</h2>
  
                          {/* Product Carousel/Slider */}
                          <>
                              <div className="product-slider">

                                  <div className="product-slider__track">

                                      <ul className="product-slider__track-items">
                                          
                                          <li></li>
                                          
                                          <li></li>
                                          
                                          <li></li>

                                      </ul>

                                  </div>

                              </div>
                          </>
                          
                          <>
                              {/* <ProductSlider /> */}
                          </>

                      </section>
                  </div>

                  
              </div>
              
              {/* <Footer /> */}
          </div>
      </>
  
  )
}

// From 2am

// Backend API and Database Schema

// ALX Completion of week 2 and start 3

// Practice the Piano All night.