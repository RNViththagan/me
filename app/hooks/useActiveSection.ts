"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observers = sections.map((sectionId) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        },
        {
          rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
        },
      )

      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }

      return { observer, element }
    })

    return () => {
      observers.forEach(({ observer, element }) => {
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sections])

  return activeSection
}

