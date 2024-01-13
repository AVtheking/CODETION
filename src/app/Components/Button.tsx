import React from 'react'
export default function Button({ buttonText }) {
    return (
        <>
            <button className="bg-headingColor hover:bg-headingColor text-lg  text-white font-bold py-3  mb-6 px-4 rounded-lg">
                {buttonText}
            </button>
        </>
    )
}