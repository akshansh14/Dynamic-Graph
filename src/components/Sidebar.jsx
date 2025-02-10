import { RiDashboardLine } from 'react-icons/ri'
import { FaRegLightbulb } from 'react-icons/fa'
import { BsBriefcase } from 'react-icons/bs'

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      <nav className="px-4 pt-6 space-y-1">
        <SidebarLink icon={<RiDashboardLine />} text="Dashboard" className="text-lg" />
        <SidebarLink 
          icon={<FaRegLightbulb />} 
          text="Skill Test" 
          active={true}
          className="text-lg"
        />
        <SidebarLink icon={<BsBriefcase />} text="Internship" className="text-lg" />
      </nav>
    </div>
  )
}

function SidebarLink({ icon, text, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg
        ${active 
          ? 'bg-blue-50 text-blue-600 font-medium' 
          : 'text-gray-700 hover:bg-gray-50'
        }`}
    >
      <span className="text-xl">{icon}</span>
      {text}
    </a>
  )
} 