import React, { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'

const GoogleCallback = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const token = urlParams.get('token')

        if (token) {
            localStorage.setItem('api_token', token)
            navigate({ to: '/dashboard' })
        } else {
            navigate({ to: '/login' })
        }
    }, [navigate])

    return <div>Loading...</div>
}

export default GoogleCallback
