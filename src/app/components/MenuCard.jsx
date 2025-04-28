'use client'

import { useState, useEffect } from 'react'
import { useOrder } from '../contexts/OrderContext'

export default function MenuCard({ menu }) {
    const { id, title, description, pricePerPerson, image, tags } = menu
    const { selectedMenus, addMenu, removeMenu } = useOrder()

    const [guestCount, setGuestCount] = useState(1)
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        const existingMenu = selectedMenus.find(m => m.id === id)
        if (existingMenu) {
            setIsSelected(true)
            setGuestCount(existingMenu.guestCount)
        } else {
            setIsSelected(false)
            setGuestCount(1)
        }
    }, [selectedMenus, id])

    const handleSelectionChange = (e) => {
        const checked = e.target.checked
        setIsSelected(checked)
        if (checked) {
            addMenu(menu, guestCount)
        } else {
            removeMenu(id)
        }
    }

    const handleGuestChange = (e) => {
        const value = e.target.value

        if (value === "") {
            setGuestCount("")
        } else {
            const count = parseInt(value, 10)

            if (!isNaN(count) && count >= 1) {
                setGuestCount(count)
                if (isSelected) {
                    addMenu(menu, count)
                }
            } else {
                setGuestCount(1) 
            }
        }
    }

    const tagColorClasses = [
        'bg-green-100 text-green-800',
        'bg-blue-100 text-blue-800',
        'bg-purple-100 text-purple-800',
        'bg-yellow-100 text-yellow-800',
        'bg-pink-100 text-pink-800',
        'bg-indigo-100 text-indigo-800',
        'bg-red-100 text-red-800',
        'bg-cyan-100 text-cyan-800',
        'bg-amber-100 text-amber-800',
    ]

    const getTagColor = (index) => {
        return tagColorClasses[index % tagColorClasses.length]
    }

    return (
        <div className="border rounded-xl overflow-hidden mb-6 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 w-full h-48 bg-gray-100 overflow-hidden">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                            No Image
                        </div>
                    )}
                </div>

                <div className="p-6 flex flex-col justify-between sm:w-2/3 w-full">
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-cyan-900">{title}</h3>
                            <span className="text-cyan-700 font-bold text-md">
                                ${pricePerPerson}<span className="text-xs">/person</span>
                            </span>
                        </div>

                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{description}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {tags?.length > 0 &&
                                tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTagColor(index)}`}
                                    >
                                        {tag}
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id={`menu-${id}`}
                                checked={isSelected}
                                onChange={handleSelectionChange}
                                className="h-5 w-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                            />
                            <label htmlFor={`menu-${id}`} className="ml-3 text-sm text-gray-900">
                                Select this menu
                            </label>
                        </div>

                        <div className="flex items-center gap-2">
                            <label htmlFor={`guests-${id}`} className="text-sm text-gray-700 font-medium">
                                Guests:
                            </label>
                            <input
                                id={`guests-${id}`}
                                type="number"
                                value={guestCount}
                                onChange={handleGuestChange}
                                disabled={!isSelected}
                                className="w-20 rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-center"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
