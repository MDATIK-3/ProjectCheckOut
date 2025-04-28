import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-cyan-800 mb-4">Premium Catering Services</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          We provide exceptional catering experiences for corporate events, weddings, and private parties.
          Our chef-crafted menus and impeccable service will make your event unforgettable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {['Corporate Events', 'Weddings & Celebrations', 'Private Parties'].map((title, index) => (
          <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-cyan-100 flex items-center justify-center">
              <img
                className="w-full h-full text-cyan-600"
                src={`/images/${index+1}.png`} 
                alt={title}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-4">{title}</h3>
              <p className="text-gray-600 mb-4">Impress your guests with our top-tier catering services. We craft memorable dining experiences tailored for {title.toLowerCase()}.</p>
              <Link href="/menu" className="text-cyan-600 font-medium flex items-center group">
                Browse menus <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r  from-cyan-500 to-cyan-700 rounded-xl p-8 text-white shadow-lg flex justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">Ready to create a memorable event?</h2>
          <p className="text-cyan-100 text-lg">Start planning your catering experience today with us!</p>
        </div>
        <Link 
          href="/menu" 
          className=" items-center max-sm:hidden justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-white hover:bg-cyan-50 transition-all duration-200"
        >
          View Our Menus <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
