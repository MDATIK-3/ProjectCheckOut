'use client'

import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import { useOrder } from '../contexts/OrderContext'

export default function SuccessContent() {
    const { orderReference, contactInfo, totalPrice, clearOrder } = useOrder()

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount)
    }

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date)
    }

    const serviceFee = totalPrice * 0.18
    const total = totalPrice + serviceFee

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="pt-8">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                        <div className="flex flex-col items-center justify-center mb-6">
                            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                            <h1 className="text-2xl font-bold text-gray-800 text-center">Order Confirmed!</h1>
                            <p className="text-gray-600 text-center mt-2">
                                Thank you for your order. We will contact you shortly to confirm details.
                            </p>
                        </div>

                        <div className="border-t border-b border-gray-100 py-6 my-6">
                            <h2 className="text-lg font-medium text-cyan-800 mb-4">Order Details</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Order Reference:</span>
                                    <span className="font-medium">{orderReference || 'GG12345'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Customer Name:</span>
                                    <span className="font-medium">{contactInfo?.name || 'Guest'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Event Date:</span>
                                    <span className="font-medium">{formatDate(contactInfo?.date) || 'TBD'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Event Address:</span>
                                    <span className="font-medium">{contactInfo?.address || 'TBD'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Amount (with 18% Service Charge):</span>
                                    <span className="font-semibold text-cyan-800">
                                        {formatCurrency(total)}
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-600 text-sm">
                                A confirmation email has been sent to <span className="font-medium">{contactInfo?.email || 'your email'}</span>.
                                Our team will contact you at <span className="font-medium">{contactInfo?.phone || 'your phone number'}</span> within 24 hours to discuss the details of your event.
                            </p>

                            <p className="text-gray-600 text-sm">
                                If you have any questions, please contact our customer service at <span className="font-medium">support@catering96.com</span> or call <span className="font-medium">01840069805</span>.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link href="/"
                                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium"
                                onClick={clearOrder}
                            >
                                <ArrowLeft className="h-5 w-5 mr-1" />
                                Return to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
