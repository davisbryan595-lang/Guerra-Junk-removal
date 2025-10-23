"use client"

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          {/* Animated Truck Loader */}
          <div className="relative w-24 h-24 mx-auto">
            <svg
              className="w-full h-full animate-spin"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#2D7A3E"
                strokeWidth="3"
                strokeDasharray="141 282"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">G</span>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Guerra</h2>
        <p className="text-gray-600">Loading your junk removal solution...</p>
      </div>
    </div>
  )
}
