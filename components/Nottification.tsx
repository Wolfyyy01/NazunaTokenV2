"use client"

import { useEffect } from "react"
import { CheckCircle, XCircle, Info, X, AlertTriangle } from "lucide-react"

interface NotificationProps {
  message: string
  type?: "success" | "error" | "info" | "warning"
  onClose: () => void
  duration?: number
}

export default function Notification({ message, type = "info", onClose, duration = 5000 }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [onClose, duration])

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-400" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />
      case "info":
      default:
        return <Info className="h-5 w-5 text-blue-400" />
    }
  }

  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-900/90 border-green-500/50 text-green-100"
      case "error":
        return "bg-red-900/90 border-red-500/50 text-red-100"
      case "warning":
        return "bg-yellow-900/90 border-yellow-500/50 text-yellow-100"
      case "info":
      default:
        return "bg-blue-900/90 border-blue-500/50 text-blue-100"
    }
  }

  const getGlowEffect = () => {
    switch (type) {
      case "success":
        return "shadow-green-500/30"
      case "error":
        return "shadow-red-500/30"
      case "warning":
        return "shadow-yellow-500/30"
      case "info":
      default:
        return "shadow-blue-500/30"
    }
  }

  // Split message by \n and render each line
  const renderMessage = () => {
    const lines = message.split("\n")
    return lines.map((line, index) => (
      <span key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ))
  }

  return (
    <div className="fixed top-24 right-4 z-[70] animate-in slide-in-from-right-5 fade-in duration-300">
      <div
        className={`max-w-sm p-4 rounded-xl border backdrop-blur-md shadow-lg ${getStyles()} ${getGlowEffect()} transition-all duration-300 hover:scale-105`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3 mt-0.5">{getIcon()}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-relaxed">{renderMessage()}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-3 text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-3 w-full bg-white/20 rounded-full h-1 overflow-hidden">
          <div
            className={`h-full transition-all ease-linear ${
              type === "success"
                ? "bg-green-400"
                : type === "error"
                  ? "bg-red-400"
                  : type === "warning"
                    ? "bg-yellow-400"
                    : "bg-blue-400"
            }`}
            style={{
              animation: `shrink ${duration}ms linear forwards`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  )
}
