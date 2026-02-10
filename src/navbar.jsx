import './index.css'
import logo from './assets/WebsiteLogo.webp'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

function Navbar(up) {
    let nav;
    window.onload = () => {  
        nav = document.getElementById('hidnav')  
    }

    const [open, setOpen] = useState(false)
    const [animating, setAnimating] = useState(false)

    const invertOpen = () => {
        if(!animating)
        {
            setAnimating(true)
            if(open){setOpen(false)}
            else{setOpen(true)}
        }
        //${open ? "" : ""}
    }
    const [scrollUp, setUp] = useState(up.up)

    useEffect(() => {
        setUp(up.up)
        if(!up.up && !animating)
        {
            setAnimating(true)
            if(open){setOpen(false)}
            setAnimating(false)
        }
    })
    return (
        <>
            <nav className={`${scrollUp&&'animate-slide-in-top top-0'} ${!scrollUp&&'animate-slide-out-top delay-300 -top-60'} sticky text-lg xl:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-regular z-50`}>
                <div id='hidnav' className={`${open ? "portrait:w-[50vw] portrait:sm:w-[40vw] portrait:md:w-[30vw] landscape:w-[20vw] delay-0 animate-slide-in" : "animate-slide-out w-0 delay-150"} h-[120vh] fixed top-0 left-0 bg-white drop-shadow-xl`} onAnimationEnd={()=>{setAnimating(false)}}>
                    <div className="w-full text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl z-20">
                        <ul className={`m-auto mt-[12vh] ${open ? "text-[100%]" : "text-[0%] delay-200" } flex flex-col w-fit h-[40vh] drop-shadow-xl z-20`}>
                            <li className="m-auto my-6 z-20">
                                <a href="https://cometfallpress.com/" className="m-auto !text-dark z-20">Home</a>
                            </li >
                                <hr className='h-1 z-20'/>
                            <li className="m-auto my-6">
                                <a href="https://cometfallpress.com/team" className="m-auto !text-dark z-20">Meet the Team</a>
                            </li>
                                <hr className='h-2'/>
                            <li className="m-auto my-6 z-20">
                                <a href="#contact" className="m-auto !text-dark z-20">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-dark drop-shadow-xl z-20 w-full flex flex-row items-center mx-auto p-1">
                    <Bars3Icon className={`${open ? "" : ""} portrait:h-[4vh] landscape:h-[6vh] landscape:4xl:h-[5vh] p-2 m-2 drop-shadow-xl text-white z-20`} onClick={invertOpen}/>
                    <a href="https://cometfallpress.com/" className="flex items-center">
                        <img src={logo} className="portrait:h-[4vh] landscape:h-[6vh] landscape:4xl:h-[5vh] m-1 object-scale-down" alt="Cometfall Logo" />
                    </a>
                </div>
            </nav>
        </>
    )
    
}

export default Navbar