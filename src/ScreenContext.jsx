import { useEffect, useState } from 'react'

function ScreenContext() {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.innerWidth / window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return screenSize
}

export default ScreenContext