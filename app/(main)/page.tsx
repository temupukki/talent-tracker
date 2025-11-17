"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CloudSun,
  Plane,
  MapPin,
  Calendar,
  Star,
  Quote,
  ArrowRight,
  Search,
  Users,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: <CloudSun className="w-12 h-12 text-blue-500" />,
      title: "Perfect Weather",
      description: "Get real-time weather updates for your dream destinations",
    },
    {
      icon: <MapPin className="w-12 h-12 text-green-500" />,
      title: "Best Locations",
      description: "Discover hidden gems and popular spots worldwide",
    },
    {
      icon: <Calendar className="w-12 h-12 text-purple-500" />,
      title: "Flexible Planning",
      description: "Plan your trips with customizable itineraries",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-red-500" />,
      title: "Safe Travel",
      description: "Travel with confidence and comprehensive safety guides",
    },
  ];

  const destinations = [
    {
      image: "/addis.jfif",
      name: "Addis Ababa, Ethiopia",
      price: "$899",
      rating: 4.8,
      days: "7 Days Tour",
    },
    {
      image: "/addis.jfif",
      name: "Rome, Italy",
      price: "$1,299",
      rating: 4.9,
      days: "10 Days Tour",
    },
    {
      image: "/addis.jfif",
      name: "Bali, Indonesia",
      price: "$1,099",
      rating: 4.7,
      days: "8 Days Tour",
    },
  ];

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Choose Destination",
      description:
        "Browse through our curated list of amazing destinations worldwide",
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "Select Dates",
      description:
        "Pick your preferred travel dates and customize your itinerary",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Book & Travel",
      description:
        "Confirm your booking and get ready for an unforgettable journey",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Travel Enthusiast",
      content:
        "The best travel experience I've ever had! Everything was perfectly organized.",
      rating: 5,
      image: "/woman.jfif",
    },
    {
      name: "Mike Chen",
      role: "Adventure Seeker",
      content:
        "Amazing destinations and seamless booking process. Highly recommended!",
      rating: 5,
      image: "/man.jfif",
    },
  ];

  const partners = [
    { name: "CBE", logo: "/CBE.jfif", class: "h-16" },
    { name: "Dashen", logo: "/dashen.png", class: "h-14" },
    { name: "Abssinia", logo: "/abssinia.png", class: "h-16" },
    { name: "Safaricom", logo: "/safari.png", class: "h-16" },
    { name: "Zemen Bank", logo: "/zemen.png", class: "h-14" },
    { name: "Gondar", logo: "/gondar.jfif", class: "h-16" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto items-center gap-12"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.h1
                variants={fadeInUp}
                className="uppercase font-bold text-lg tracking-widest text-orange-500"
              >
                Best destination around the world
              </motion.h1>

              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl lg:text-7xl font-black text-blue-950 leading-tight">
                  Travel, enjoy
                </h1>
                <h1 className="text-5xl lg:text-7xl font-black text-blue-950 leading-tight">
                  and live anew
                </h1>
                <h1 className="text-5xl lg:text-7xl font-black text-blue-950 leading-tight">
                  and full life.
                </h1>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Discover amazing places at exclusive deals. Eat, shop, visit
                interesting places around the world and create unforgettable
                memories.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-orange-200 transition-all"
                >
                  Find Destinations
                  <Plane className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-950 text-blue-950 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-950 hover:text-white transition-all"
                >
                  Watch Demo
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full max-w-2xl rounded-2xl shadow-2xl"
                src="/c.png"
                alt="Travel Experience"
              />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-bold text-gray-800">25+ Locations</p>
                    <p className="text-sm text-gray-600">Worldwide</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="uppercase text-sm font-semibold text-gray-600 tracking-wider">
              Category
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mt-4">
              We Offer Best Services
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="w-full rounded-2xl shadow-lg border-0 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-col items-center text-center pb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 rounded-2xl bg-white shadow-lg mb-4"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-gray-600 tracking-wider">
              Top Selling
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mt-4">
              Top Destinations
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                className="group cursor-pointer"
              >
                <Card className="w-full rounded-2xl overflow-hidden shadow-lg border-0 group-hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <p className="font-bold text-orange-500">
                        {destination.price}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-gray-800 text-lg">
                        {destination.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-700">
                          {destination.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{destination.days}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <p className="font-semibold text-gray-600 text-lg">
                  Easy and Fast
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  Get Your Next Trip
                </h2>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  In 3 Easy Steps
                </h2>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center"
                    >
                      {step.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-0 mx-auto">
                  <div className="relative">
                    <img
                      src="/man.jfif"
                      alt="Travel Experience"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Luxury Bali Package
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Experience the perfect blend of luxury and adventure in
                      the heart of Bali.
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700 font-medium">
                          8 Days
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 font-medium">
                          12 People
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-700">4.8</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <p className="uppercase font-semibold text-gray-600 tracking-wider">
                  Testimonials
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  What People Say
                </h2>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  About Us
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "{testimonial.content}"
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl z-10"
              >
                <Quote className="w-8 h-8 text-orange-500 mb-2" />
                <p className="font-bold text-gray-800 text-lg">5000+</p>
                <p className="text-gray-600">Happy Travelers</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-0 mx-auto">
                  <div className="relative">
                    <img
                      src="/woman.jfif"
                      alt="Happy Traveler"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 "
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trusted by Leading Companies
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="flex flex-wrap justify-center items-center gap-12 lg:gap-20"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={partner.class}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <hr />
      <section id="about">
        <div className="grid grid-cols-2">
          <div className=" h-screen ">
            <div className="grid grid-cols-2">
              <div className="mt-60 ml-30">
                <img
                  className="rounded-xl h-70 w-60 "
                  src="/addis.jfif"
                  alt="Addis Ababa"
                />
                <p className="ml-22 mt-11 font-medium">Best ratings</p>
                <p
                  className="ml-22 mt-4 text-l"
                  style={{ letterSpacing: "4px" }}
                >
                  😡🥺😀😂🤣
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.12 }}
                  >
                    🤝
                  </motion.span>
                </p>
              </div>
              <div className="grid-2">
                <div className="mt-14 ml-4">
                  <img
                    className="rounded-xl h-54 w-47 shadow-2xl "
                    src="/addis.jfif"
                    alt="Addis Ababa"
                  />
                </div>
                <div className="ml-4 mt-8">
                  <img
                    className="rounded-xl h-80 w-65 shadow-2xl "
                    src="/addis.jfif"
                    alt="Addis Ababa"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" h-screen">
            <p
              className="uppercase text-orange-600 mt-35 ml-21 font-semibold  text-xl "
              style={{ letterSpacing: "4px" }}
            >
              A bit
            </p>
            <h1
              className="uppercase text-5xl ml-20 mt-4 font-bold "
              style={{ letterSpacing: "5px" }}
            >
              About us
            </h1>
            <div className="ml-20 text-gray-800 mt-4 space-y-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing nisi ut
                aliquip elit.
              </p>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua nim id est laborum.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo .
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="uppercase bg-orange-600 ml-20 mt-25 p-5 pr-10 text-white font-semibold rounded-l-xl rounded-tr-xl rounded-br-[55px] shadow-2xl "
            >
              Explore More
            </motion.button>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div>
          <h1 className="text-orange-600 flex justify-center font-semibold text-xl">Contact us</h1>
        </div>

      </section>
    </div>
  );
}
