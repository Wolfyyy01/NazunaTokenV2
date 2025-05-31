"use client";

import { useEffect } from "react";

type Props = {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
};

export default function Notification({ message, type = "info", onClose }: Props) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000); 
    return () => clearTimeout(timeout);
  }, [onClose]);

  const bgColor = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-purple-700",
  }[type];

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 px-4 py-2 rounded-lg shadow-lg text-white ${bgColor} transition-all animate-fade-in`}
    >
      {message}
    </div>
  );
}
