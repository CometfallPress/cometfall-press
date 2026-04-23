import './index.css'
import logo from './assets/WebsiteLogo.webp'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useAppContext } from "./AppContext";

function Navbar(props) {

    const { mouseState, scrollState, } = useAppContext()
    const [open, setOpen] = useState(false)
    const [openUserDropdown, setOpenUserDropdown] = useState(false)

    const invertOpen = () => {
        if(open){setOpen(false)}
        else{setOpen(true)}
    }
    const [scrollUp, setUp] = useState(props.sdir)
    const [scrollPos, setScrollPos] = useState(props.scrollstate.scrollPosition)

    useEffect(() => {
        const still = scrollPos === props.scrollstate.scrollPosition
        setUp(props.scrollstate.sdir)
        setScrollPos(props.scrollstate.scrollPosition)
        if(!scrollUp&&!still) {
            if(open){setOpen(false)}
        }
    }, [scrollPos, props.scrollstate.scrollPosition, props.scrollstate.sdir, scrollUp, open])

    return (
        <>
            <div className={`${open?'opacity-100':'opacity-0'} opacity-0 fixed w-full h-full z-40 pointer-events-none backdrop-blur-md backdrop-brightness-90 transition-opacity`}/>
            <nav className={`${(scrollUp||scrollPos<150||mousePosition.y<0.2)?'top-0':'-top-60'} transition-all sticky text-lg xl:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-regular z-50`}>
                <div id='hidnav' className={`${open? "portrait:w-[50vw] portrait:sm:w-[40vw] portrait:md:w-[30vw] landscape:w-[20vw]" : "w-0"} w-0 transition-all h-[120vh] fixed top-0 left-0 bg-white drop-shadow-xl`}>
                    <div className="w-full text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl z-20">
                        <ul className={`m-auto landscape:mt-[15vh] portrait:mt-[12vh] ${open ? "text-[100%]" : "text-[0%]" } transition-all flex flex-col w-fit h-[40vh] drop-shadow-xl z-20 space-y-6`}>
                            <li className="m-auto my-6 z-20">
                                <a href={`${import.meta.env.VITE_REDIRECT_URL}`} className="m-auto !text-dark hover:text-[#ed2386]! transition-all z-20">Home</a>
                            </li >
                            <hr className='h-2 my-2'/>
                            <li className="m-auto my-6">
                                <a href={`${import.meta.env.VITE_REDIRECT_URL}/team`} className="m-auto !text-dark hover:text-[#ed2386]! transition-all z-20">Meet the Team</a>
                            </li>
                            <hr className='h-2 my-2'/>
                            <li className="m-auto my-6 z-20">
                                <a href={`${import.meta.env.VITE_REDIRECT_URL}/kickstarter`} className="m-auto !text-dark hover:text-[#ed2386]! transition-all z-20">Kickstarter</a>
                            </li>
                            <hr className='h-2 my-2'/>
                            {/*<li className="m-auto my-6 z-20">*/}
                            {/*    <a href={`${import.meta.env.VITE_REDIRECT_URL}/playtest`} className="m-auto !text-dark hover:text-[#ed2386]! transition-all z-20">Playtests</a>*/}
                            {/*</li>*/}
                            {/*<hr className='h-2 my-2'/>*/}
                            {/*<li className="m-auto my-6 z-20">*/}
                            {/*    <a href={`${import.meta.env.VITE_REDIRECT_URL}/feedback`} className="m-auto !text-dark hover:text-[#ed2386]! transition-all z-20">Feedback</a>*/}
                            {/*</li>*/}
                            {/*<hr className='h-2 my-2'/>*/}
                            <li className="m-auto my-6 z-20">
                                <a href="#contact" className="m-auto !text-dark z-20">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-dark drop-shadow-xl z-30 w-full flex flex-row items-center mx-auto p-1">
                    <Bars3Icon className={`portrait:h-[4vh] landscape:h-[6vh] landscape:4xl:h-[5vh] p-2 m-2 drop-shadow-xl text-white z-50`} onClick={invertOpen}/>
                    <a href={`${import.meta.env.VITE_REDIRECT_URL}`} className="flex items-center unselectable">
                        <img src={logo} className="unselectable portrait:h-[4vh] landscape:h-[6vh] landscape:4xl:h-[5vh] m-1 object-scale-down" alt="Cometfall Logo" />
                    </a>
                    {user!==null&&(<UserDropdown/>)}
                </div>
            </nav>
        </>
    )
    
}

export default Navbar