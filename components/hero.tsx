"use client"

import {MapPin, ChevronRight} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"

export default function Hero() {
    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const item = {
        hidden: {y: 20, opacity: 0},
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
        tap: {
            scale: 0.95,
        },
    }

    return (
        <section
            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900/95 text-white overflow-hidden md:rounded-t-xl shadow-2xl">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-orange-500/70 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div
                    className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Content */}
            <div
                className="container mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
                <motion.div
                    className="lg:w-1/2 mb-12 lg:ml-12 lg:mb-0 text-center lg:text-left"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight" variants={item}>
                        <motion.span
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.5}}
                        >
                            Hi, I'm{" "}
                        </motion.span>
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r"
                            style={{
                                backgroundImage: "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                                "--gradient-from": "rgb(96, 165, 250)",
                                "--gradient-to": "rgb(147, 51, 234)",
                            }}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                "--gradient-from": [
                                    "rgb(96, 165, 250)", // blue-400
                                    "rgb(139, 92, 246)", // violet-500
                                    "rgb(236, 72, 153)", // pink-500
                                    "rgb(59, 130, 246)", // blue-500
                                    "rgb(96, 165, 250)", // back to blue-400
                                ],
                                "--gradient-to": [
                                    "rgb(147, 51, 234)", // purple-600
                                    "rgb(236, 72, 153)", // pink-500
                                    "rgb(139, 92, 246)", // violet-500
                                    "rgb(147, 51, 234)", // purple-600
                                    "rgb(147, 51, 234)", // stay at purple-600
                                ],
                            }}
                            transition={{
                                opacity: {duration: 0.5, delay: 0.7},
                                scale: {duration: 0.5, delay: 0.7},
                                "--gradient-from": {duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear"},
                                "--gradient-to": {duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear"},
                            }}
                        >
                            Viththagan
                        </motion.span>
                    </motion.h1>

                    <motion.div className="space-y-2" variants={item}>
                        <motion.h2
                            className="text-xl lg:text-2xl text-blue-200"
                            animate={{
                                opacity: [0.8, 1, 0.8],
                                y: [0, -2, 0],
                            }}
                            transition={{
                                opacity: {duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"},
                                y: {duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"},
                            }}
                        >
                            Software Engineering Intern
                            <motion.span
                                className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500/90 to-red-500/90 font-semibold"
                                animate={{
                                    backgroundPosition: ["0% 0%", "100% 100%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                            >
                                <Link
                                    href="https://wso2.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    @WSO2
                                </Link>
                            </motion.span>
                        </motion.h2>
                        <motion.h2
                            className="text-xl lg:text-2xl mb-6 text-blue-200"
                            animate={{
                                opacity: [0.8, 1, 0.8],
                                y: [0, -2, 0],
                            }}
                            transition={{
                                opacity: {duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5},
                                y: {duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5},
                            }}
                        >
                            Computer Science Undergraduate
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center lg:justify-start bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-8 mx-auto lg:mx-0"
                        variants={item}
                        whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            transition: {duration: 0.2},
                        }}
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 5, 0, -5, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <MapPin className="h-5 w-5 mr-2 text-blue-300"/>
                        </motion.div>
                        <span className="text-blue-100">Jaffna, Sri Lanka</span>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
                        variants={item}
                    >
                        <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                            <Link
                                href="#contact"
                                className="btn bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 flex items-center justify-center"
                            >
                                Get in Touch
                                <motion.div
                                    animate={{x: [0, 3, 0]}}
                                    transition={{duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"}}
                                >
                                    <ChevronRight className="ml-2 h-5 w-5"/>
                                </motion.div>
                            </Link>
                        </motion.div>

                        <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                            <Link
                                href="#projects"
                                className="btn bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-300 flex items-center justify-center"
                            >
                                View Projects
                                <motion.div
                                    animate={{x: [0, 3, 0]}}
                                    transition={{duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"}}
                                >
                                    <ChevronRight className="ml-2 h-5 w-5"/>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lg:w-1/2 flex justify-center"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, delay: 0.5}}
                >
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
                        {/* Professional Photo Frame */}
                        <div className="absolute inset-0">
                            {/* Subtle professional border */}
                            <div
                                className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"></div>

                            {/* Professional outer ring */}
                            <div
                                className="absolute inset-4 rounded-full border border-white/20 backdrop-blur-sm"></div>

                            {/* Professional inner accent */}
                            <div className="absolute inset-6 rounded-full overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-orange-500/5 to-purple-500/10"></div>
                            </div>

                            {/* Professional Glass Background */}
                            <motion.div
                                className="absolute inset-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/30"
                                animate={{
                                    boxShadow: [
                                        "0 0 0 rgba(191, 219, 254, 0)",
                                        "0 0 10px rgba(191, 219, 254, 0.2)",
                                        "0 0 0 rgba(191, 219, 254, 0)",
                                    ],
                                }}
                                transition={{duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"}}
                            />

                            {/* Image Container */}
                            <motion.div
                                className="absolute inset-10 rounded-full overflow-hidden shadow-lg"
                                animate={{
                                    borderColor: ["rgba(255, 255, 255, 0.3)", "rgba(191, 219, 254, 0.4)", "rgba(255, 255, 255, 0.3)"],
                                }}
                                transition={{duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"}}
                            >
                                <Image
                                    src="./Viththagan.jpeg"
                                    alt="Viththagan"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                    style={{objectPosition: "center"}}
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

