export default function ProgressBar({ topic, progress, color }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-700">{topic}</span>
        <span className="text-sm font-semibold">{progress}%</span>
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