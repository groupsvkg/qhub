interface IndicatorProps {
    isVerifying: boolean;
    isCorrect: boolean | null;
}

export const Indicator = ({
    isVerifying,
    isCorrect
}: IndicatorProps) => {
    return (
        <>
            {isVerifying && (
                <div>
                    <svg
                        className="ml-3 h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            fill="transparent"
                            stroke="purple"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="brown"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </div>
            )}
            {isCorrect && (
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="green"
                    className="ml-3 h-5 w-5 animate-ping"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                </svg>
            )}
            {isCorrect === false && (
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="red"
                    className="ml-3 h-5 w-5 animate-ping"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            )}
        </>
    )
}