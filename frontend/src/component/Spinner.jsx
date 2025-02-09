import React from 'react'
import { ImSpinner } from "react-icons/im";

const Spinner = () => {
    return (
        <button type="button" className="bg-indigo-500 text-white flex p-2 rounded-md" disabled>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.834 3 7.969l3-2.678zm10 3.21A7.962 7.962 0 0120 12h-4c0 2.958-1.291 5.633-3.345 7.484l3.345-2.683z"></path>
            </svg>
            Processing...
        </button>
    )
}

export default Spinner