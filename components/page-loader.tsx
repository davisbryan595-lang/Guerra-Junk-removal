"use client"

import Image from "next/image"

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center animate-fade-in">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto flex items-center justify-center animate-pulse">
            <Image
              src="/logo.png" // make sure this is your logo path in /public
              alt="Website Logo"
              width={160}
              height={160}
              className="object-contain animate-bounce-slow"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Guerra</h2>
        <p className="text-gray-600 text-base">Loading your junk removal solution...</p>
      </div>

      {/* Optional custom animations */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 2.5s infinite ease-in-out;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
