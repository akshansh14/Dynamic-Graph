import Logo from './Logo'
export default function Navbar() {
  return (
    <div className="h-24 border-b border-gray-200 flex items-center justify-between px-8">
      <div className="flex items-center gap-3">
        <Logo />
        <span className="font-bold text-xl">WhatBytes</span>
      </div>
      <div className="flex items-center gap-3">
        <img
          src="https://ui-avatars.com/api/?name=Rahil+Siddique"
          alt="User avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-md font-medium">Rahil Siddique</span>
      </div>
    </div>
  )
} 