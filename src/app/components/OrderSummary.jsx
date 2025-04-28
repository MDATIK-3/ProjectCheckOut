'use client'

import React from 'react';
import Link from 'next/link';
import { formatCurrency } from '../lib/utils';
import { useOrder } from '../contexts/OrderContext';

export default function OrderSummary({ showButton = true }) {
  const { selectedMenus, totalPrice } = useOrder();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-medium text-cyan-700 mb-4">Order Summary</h2>

      {selectedMenus.length === 0 ? (
        <p className="text-gray-500 italic">No menu items selected yet.</p>
      ) : (
        <div className="space-y-4">
          {selectedMenus.map((menu) => {
            const { title, pricePerPerson, guestCount } = menu;
            const itemTotal = pricePerPerson * guestCount;

            return (
              <div key={menu.id} className="flex justify-between pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-gray-500">
                    {guestCount} {guestCount === 1 ? 'guest' : 'guests'} x {formatCurrency(pricePerPerson)}
                  </p>
                </div>
                <p className="font-medium">{formatCurrency(itemTotal)}</p>
              </div>
            );
          })}

          <div className="flex justify-between pt-2 font-medium text-cyan-800">
            <p>Total</p>
            <p>{formatCurrency(totalPrice)}</p>
          </div>
        </div>
      )}

      {showButton && (
        <div className="mt-6">
          <Link href="/contact" className="block w-full bg-cyan-600 text-white py-2 px-4 rounded-md text-center font-medium hover:bg-cyan-700 transition-colors">
            Proceed to Contact
          </Link>
        </div>
      )}
    </div>
  );
}
