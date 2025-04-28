'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function DashboardContent() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-cyan-800 mb-4">Premium Catering Services</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We provide exceptional catering experiences for corporate events, weddings, and private parties.
                    Our chef-crafted menus and impeccable service will make your event memorable.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-cyan-100 flex items-center justify-center">
                        <svg className="w-24 h-24 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-cyan-800 mb-2">Corporate Events</h3>
                        <p className="text-gray-600 mb-4">Impress your clients and team with our professional catering services. From breakfast meetings to gala dinners.</p>
                        <Link href="/menu" className="text-cyan-600 font-medium flex items-center">
                            Browse menus <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-cyan-100 flex items-center justify-center">
                        <svg className="w-24 h-24 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-cyan-800 mb-2">Weddings & Celebrations</h3>
                        <p className="text-gray-600 mb-4">Create unforgettable moments with our custom wedding and celebration catering packages.</p>
                        <Link href="/menu" className="text-cyan-600 font-medium flex items-center">
                            Browse menus <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-cyan-100 flex items-center justify-center">
                        <svg className="w-24 h-24 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                        </svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-cyan-800 mb-2">Private Parties</h3>
                        <p className="text-gray-600 mb-4">From intimate gatherings to large celebrations, our team will help you create the perfect menu.</p>
                        <Link href="/menu" className="text-cyan-600 font-medium flex items-center">
                            Browse menus <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-xl p-8 text-white shadow-lg">
                <div className="md:flex items-center justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">Ready to create a memorable event?</h2>
                        <p className="text-cyan-100">Start planning your catering experience today.</p>
                    </div>
                    <Link
                        href="/menu"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-white hover:bg-cyan-50 transition-colors"
                    >
                        View Our Menus <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
