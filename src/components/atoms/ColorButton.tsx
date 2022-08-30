import React from 'react'

interface ColorButtonProps {
    bgColor?: string
    fontColor?: string
    onClick?: () => void
}

export const ColorButton: React.FC<ColorButtonProps> = ({
    bgColor = 'bg-blue-500',
    fontColor = 'text-white',
    onClick,
}) => {
    return (
        <button
            type="button"
            className={`${bgColor} ${fontColor} rounded-full py-2 px-4 font-bold text-lg`}
            onClick={onClick}
        >
            Hello
        </button>
    )
}
