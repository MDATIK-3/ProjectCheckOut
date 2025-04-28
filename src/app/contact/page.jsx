'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import OrderSteps from '../components/OrderSteps'
import OrderSummary from '../components/OrderSummary'
import { useOrder } from '../contexts/OrderContext'
import toast from 'react-hot-toast'

export default function ContactForm() {
    const router = useRouter()
    const { saveContactInfo, completeOrder } = useOrder()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        notes: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.phone || !formData.date) {
            toast.error("Please fill all required fields")
            return
        }

        saveContactInfo(formData)
        completeOrder()

        toast.success("Order submitted successfully!")
        router.push('/success')
    }

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="pt-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-cyan-800">Contact & Payment</h1>
                        <Link href="/menu" className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center">
                            <ChevronLeft className="h-5 w-5 mr-1" />
                            Back to Menu
                        </Link>
                    </div>

                    <OrderSteps currentStep="contact" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-medium text-cyan-700 mb-6">Contact Information</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Event Address *</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Event Date *</label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Special Requests</label>
                                        <textarea
                                            name="notes"
                                            id="notes"
                                            rows="3"
                                            value={formData.notes}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button type="submit" className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md text-center font-medium hover:bg-cyan-700 transition-colors">
                                        Submit Order
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div>
                            <OrderSummary showButton={false} />

                            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                                <h2 className="text-lg font-medium text-cyan-700 mb-4">Payment</h2>
                                <p className="text-sm text-gray-600 mb-4">
                                    Payment will be processed after confirmation of your order details.
                                </p>

                                <div className="space-y-4">
                                    {/* Default Cash on Delivery */}
                                    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                                        <input
                                            type="radio"
                                            id="cod"
                                            name="paymentMethod"
                                            value="cod"
                                            defaultChecked
                                            className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300"
                                            disabled
                                        />
                                        <label htmlFor="cod" className="text-gray-700 font-medium">
                                            Cash on Delivery (Default)
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center space-x-4 mt-4">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-8" />
                                        <img src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" alt="Bkash" className="h-8 scale-200" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
