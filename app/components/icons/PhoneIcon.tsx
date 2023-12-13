import React from 'react'

export default function PhoneIcon({ className} : {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className={className}>
            <path d="M13.24 21.58C16.12 27.24 20.76 31.86 26.42 34.76L30.82 30.36C31.36 29.82 32.16 29.64 32.86 29.88C35.1 30.62 37.52 31.02 40 31.02C41.1 31.02 42 31.92 42 33.02V40C42 41.1 41.1 42 40 42C21.22 42 6 26.78 6 8C6 6.9 6.9 6 8 6H15C16.1 6 17 6.9 17 8C17 10.5 17.4 12.9 18.14 15.14C18.36 15.84 18.2 16.62 17.64 17.18L13.24 21.58Z" fill="#766E6E" />
        </svg>
    )
}
