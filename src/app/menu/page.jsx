'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Info, ShoppingCart, Users, Check } from 'lucide-react'
import { toast } from 'react-hot-toast'
import OrderSteps from '../components/OrderSteps'
import MenuCard from '../components/MenuCard'
import { menuItems } from '../lib/utils'

export default function MenuContent() {
  const [selectedMenus, setSelectedMenus] = useState([])
  const router = useRouter()

  const addMenu = (menu, guestCount) => {
    if (!guestCount || guestCount <= 0) {
      toast.error("Guest count must be at least 1")
      return false
    }

    const exists = selectedMenus.find(m => m.id === menu.id)
    if (exists) {
      setSelectedMenus(prev => 
        prev.map(m => m.id === menu.id ? { ...m, guestCount } : m)
      )
      toast.success(`${menu.title} updated for ${guestCount} guests`)
    } else {
      setSelectedMenus(prev => [...prev, { ...menu, guestCount }])
      toast.success(`${menu.title} added for ${guestCount} guests`)
    }
    return true
  }

  const removeMenu = (menuId) => {
    const menu = selectedMenus.find(m => m.id === menuId)
    setSelectedMenus(prev => prev.filter(m => m.id !== menuId))
    if (menu) {
      toast.success(`${menu.title} removed`)
    }
  }

  const handleContinue = () => {
    if (!selectedMenus.length) {
      toast.error("Select at least one menu to proceed")
      return
    }
    router.push('/contact')
  }

  const totalPrice = selectedMenus.reduce((acc, menu) => acc + (menu.pricePerPerson * menu.guestCount), 0)
  const totalGuests = selectedMenus.reduce((acc, menu) => acc + menu.guestCount, 0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-8">
      <div className="max-w-5xl mx-auto w-full px-4 flex-1">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-cyan-800">Customize Your Order</h1>
          <Link href="/" className="flex items-center text-cyan-600 hover:text-cyan-800 transition-colors text-sm font-medium">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back Home
          </Link>
        </div>

        <OrderSteps currentStep="menu" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          
          <div className="md:col-span-2">
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <header className="flex items-center mb-4">
                <ShoppingCart className="text-cyan-600 w-5 h-5 mr-2" />
                <h2 className="text-xl font-semibold text-cyan-800">Menu Options</h2>
              </header>

              <div className="bg-cyan-50 rounded-md p-4 mb-6 flex items-start">
                <Info className="w-5 h-5 text-cyan-600 mt-1 mr-2" />
                <p className="text-sm text-cyan-800">
                  Select multiple menus, specifying guest counts individually. Minimum 1 guest per selection.
                </p>
              </div>

              <div className="space-y-6">
                {menuItems.length > 0 ? (
                  menuItems.map(menu => (
                    <MenuCard
                      key={menu.id}
                      menu={menu}
                      isSelected={selectedMenus.some(m => m.id === menu.id)}
                      onSelect={addMenu}
                      onRemove={removeMenu}
                    />
                  ))
                ) : (
                  <p className="text-center text-gray-500">No menu items available.</p>
                )}
              </div>
            </section>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-6 bg-white rounded-xl shadow-sm p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-cyan-800 mb-4">Summary</h2>

              {selectedMenus.length > 0 ? (
                <>
                  <div className="space-y-4 mb-6">
                    {selectedMenus.map(menu => (
                      <div key={menu.id} className="flex flex-col">
                        <div className="flex justify-between text-sm font-medium">
                          <span>{menu.title}</span>
                          <span>${(menu.pricePerPerson * menu.guestCount).toFixed(2)}</span>
                        </div>
                        <span className="text-xs text-gray-500">{menu.guestCount} × ${menu.pricePerPerson.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2 mb-6">
                    <div className="flex justify-between text-gray-700 text-sm">
                      <span>Total Guests</span>
                      <span className="font-semibold">{totalGuests}</span>
                    </div>
                    <div className="flex justify-between text-cyan-800 font-semibold text-lg">
                      <span>Total Price</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center text-gray-400 text-center py-10">
                  <ShoppingCart className="w-10 h-10 mb-2" />
                  <p>No menus selected</p>
                  <p className="text-xs mt-1">Choose a menu to see summary</p>
                </div>
              )}

              <button
                onClick={handleContinue}
                disabled={!selectedMenus.length}
                className={`mt-auto w-full py-3 rounded-lg flex items-center justify-center font-semibold transition-colors ${
                  selectedMenus.length
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {selectedMenus.length > 0 && <Check className="w-4 h-4 mr-2" />}
                Continue
              </button>

              {!selectedMenus.length && (
                <p className="text-xs text-center text-gray-400 mt-2">
                  Select at least one menu
                </p>
              )}
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
