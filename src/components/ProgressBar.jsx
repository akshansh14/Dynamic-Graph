export default function ProgressBar({ topic, progress, color }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
        <span className="text-xs md:text-sm text-gray-700">{topic}</span>
        <span className="text-xs md:text-sm font-semibold">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}