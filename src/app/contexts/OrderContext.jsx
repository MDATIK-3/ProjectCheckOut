'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext(undefined);

export const OrderProvider = ({ children }) => {
    const [selectedMenus, setSelectedMenus] = useState([]);
    const [contactInfo, setContactInfo] = useState(null);
    const [orderReference, setOrderReference] = useState(null);

    useEffect(() => {
        const storedMenus = localStorage.getItem('selectedMenus');
        const storedContactInfo = localStorage.getItem('contactInfo');
        const storedReference = localStorage.getItem('orderReference');

        if (storedMenus) setSelectedMenus(JSON.parse(storedMenus));
        if (storedContactInfo) setContactInfo(JSON.parse(storedContactInfo));
        if (storedReference) setOrderReference(storedReference);
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedMenus', JSON.stringify(selectedMenus));
    }, [selectedMenus]);

    useEffect(() => {
        if (contactInfo) {
            localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
        }
    }, [contactInfo]);

    useEffect(() => {
        if (orderReference) {
            localStorage.setItem('orderReference', orderReference);
        }
    }, [orderReference]);

    const totalPrice = selectedMenus.reduce(
        (sum, menu) => sum + menu.pricePerPerson * menu.guestCount,
        0
    );

    const totalGuests = selectedMenus.reduce(
        (sum, menu) => sum + menu.guestCount,
        0
    );

    const addMenu = (menu, count) => {
        setSelectedMenus(prev => {
            const existing = prev.find(m => m.id === menu.id);
            if (existing) {
                return prev.map(m => m.id === menu.id ? { ...m, guestCount: count } : m);
            }
            return [...prev, { ...menu, guestCount: count }];
        });
    };

    const removeMenu = (menuId) => {
        setSelectedMenus(prev => prev.filter(menu => menu.id !== menuId));
    };

    const saveContactInfo = (info) => {
        setContactInfo(info);
    };

    const completeOrder = () => {
        const reference = `GG${Math.floor(10000 + Math.random() * 90000)}`;
        setOrderReference(reference);
    };

    const resetOrder = () => {
        setOrderReference(null);
    };

    const clearOrder = () => {
        setSelectedMenus([]);
        setContactInfo(null);
        setOrderReference(null);
        localStorage.removeItem('selectedMenus');
        localStorage.removeItem('contactInfo');
        localStorage.removeItem('orderReference');
    };

    return (
        <OrderContext.Provider
            value={{
                selectedMenus,
                contactInfo,
                orderReference,
                totalPrice,
                totalGuests,
                addMenu,
                removeMenu,
                saveContactInfo,
                completeOrder,
                resetOrder,
                clearOrder,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};
