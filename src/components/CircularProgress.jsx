import image from '../assets/target-dart.webp'

export default function CircularProgress({ value }) {
  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <circle
          className="text-blue-600"
          strokeWidth="10"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center">
          <img src={image} alt="Target" className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}