"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ConnectWallet } from "./thirdweb/ConnectButton"
import { constants } from "@/lib/constants"
import Image from "next/image"
import { usePathname } from "next/navigation"



export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#buy", label: "How to Buy" },
    { href: "https://zealy.io/cw/nazunatoken/invite/O0OEfqjgalnAs9_qdj0JY", label: "Join Zealy" },
  ]


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("http")) {
      window.open(href, "_blank");
      return;
    }

    if (pathname !== "/") {
      window.location.href = `${href}`;
    } else {
      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0f0a1a]/95 backdrop-blur-md border-b border-purple-900/30 shadow-lg shadow-purple-900/20"
        : "bg-[#0f0a1a]/80 backdrop-blur-sm border-b border-purple-900/10"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick("#home")}>
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src={constants.logo}
                  alt="Nazuna Token Logo"
                />
              </div>
              <a href="/" className="ml-2 text-xl lg:text-2xl font-bold gradient-text whitespace-nowrap">Nazuna Token</a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 xl:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium text-purple-200 hover:text-white hover:bg-purple-900/30 transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Connect Wallet Button */}
          <div className="hidden lg:block">
            <ConnectWallet />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-purple-400 hover:text-white hover:bg-purple-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#0f0a1a]/98 backdrop-blur-md border-t border-purple-900/20">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-purple-200 hover:text-white hover:bg-purple-800/50 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </nav>
  )
}
