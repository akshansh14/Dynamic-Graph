import { RiDashboardLine } from 'react-icons/ri'
import { FaRegLightbulb } from 'react-icons/fa'
import { BsBriefcase } from 'react-icons/bs'

export default function Sidebar() {
  return (
    <div className="w-full lg:w-64 lg:h-screen bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
      <nav className="px-4 py-2 lg:pt-6 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible">
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
      className={`flex items-center gap-3 px-4 py-3 text-sm md:text-base rounded-lg whitespace-nowrap
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