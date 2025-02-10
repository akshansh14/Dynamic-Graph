import Logo from './Logo'

export default function Navbar() {
  return (
    <div className="h-16 md:h-24 border-b border-gray-200 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-2 md:gap-3">
        <Logo />
        <span className="font-bold text-lg md:text-xl">WhatBytes</span>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <img
          src="https://ui-avatars.com/api/?name=Rahil+Siddique"
          alt="User avatar"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
        />
        <span className="text-sm md:text-md font-medium hidden sm:block">Rahil Siddique</span>
      </div>
    </div>
  )
} 