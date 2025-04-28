'use client'

export default function OrderSteps({ currentStep }) {
    const steps = [
        { id: 'dashboard', name: 'Start', href: '/' },
        { id: 'menu', name: 'Menu', href: '/menu' },
        { id: 'contact', name: 'Payment', href: '/contact' },
        { id: 'success', name: 'Confirmation', href: '/success' }
    ]

    const getCurrentStepIndex = () => {
        return steps.findIndex(step => step.id === currentStep)
    }

    const stepIndex = getCurrentStepIndex()

    return (
        <div className="py-4">
            <nav aria-label="Progress">
                <ol className="flex items-center">
                    {steps.map((step, index) => {
                        const isCompleted = index < stepIndex
                        const isCurrent = index === stepIndex

                        return (
                            <li
                                key={step.id}
                                className={`relative flex-1`}
                            >
                                {index !== steps.length && (
                                    <div
                                        className={`absolute top-5 left-0 w-full h-0.5 ${isCompleted ? 'bg-cyan-600' : 'bg-gray-200'}`}
                                    />
                                )}

                                <div className="relative flex flex-col items-center text-center">
                                    <span className="text-sm font-medium text-gray-700 mb-2">
                                        {step.name}
                                    </span>

                                    <span
                                        className={`
                      flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                      ${isCompleted || isCurrent ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-500'}
                    `}
                                    >
                                        {index + 1}
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </div>
    )
}
