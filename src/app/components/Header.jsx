'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (path) => {
        return pathname === path
    }

    return (
        <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-cyan-500 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="text-2xl font-bold text-cyan-600">CateringSR</span>
                        </Link>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            <Link
                                href="/"
                                className={`text-base font-medium ${isActive('/') ? 'text-cyan-600' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/menu"
                                className={`text-base font-medium ${isActive('/menu') ? 'text-cyan-600' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Menus
                            </Link>
                            <Link
                                href="/contact"
                                className={`text-base font-medium ${isActive('/contact') ? 'text-cyan-600' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <Link
                            href="/menu"
                            className="inline-block bg-cyan-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-cyan-700"
                        >
                            Order Now
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden py-2">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                className={`block pl-3 pr-4 py-2 text-base font-medium ${isActive('/') ? 'bg-cyan-50 text-cyan-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} rounded-md`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/menu"
                                className={`block pl-3 pr-4 py-2 text-base font-medium ${isActive('/menu') ? 'bg-cyan-50 text-cyan-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} rounded-md`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Menus
                            </Link>
                            <Link
                                href="/contact"
                                className={`block pl-3 pr-4 py-2 text-base font-medium ${isActive('/contact') ? 'bg-cyan-50 text-cyan-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} rounded-md`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/menu"
                                className="block pl-3 pr-4 py-2 text-base font-medium bg-cyan-600 text-white hover:bg-cyan-700 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Order Now
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
