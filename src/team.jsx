"use client";

import './index.css'
import sam from './assets/portraits/sam.webp'
import aaron from './assets/portraits/aar.webp'
import vijay from './assets/portraits/vij.webp'
import jouwweria from './assets/portraits/jou.webp'

function Team() {
    return (
        <>
            <div className='scroll-smooth w-[100vw] -z-20 leading-relaxed place-items-center place-content-center text-base portrait:text-[2vw] landscape:text-[2vh] font-regular'>
                <div className='w-full flex place-items-center justify-center h-auto landscape:mb-20 portrait:mb-5 md:mb-0'>
                    <p className='text-[2em] font-semibold m-auto mb-10 mt-20'>
                        Meet the Team
                    </p>
                </div>
                <div className="w-[90%] max-w-[125vh] mx-auto grid landscape:grid-cols-2 landscape:grid-rows-1 portrait:grid-rows-4 portrait:grid-cols-1 place-items-center place-content-center gap-4 mb-20">

                    <div id="Aaron" className="flex flex-col mt-2">
                        <img className="drop-shadow-lg landscape:w-1/4 portrait:w-[33vw] m-auto" src={aaron} alt="Aaron Kumar"/>
                        <div className="font-semibold text-center mt-5">Aaron Kumar</div>
                        <div className="text-center">Founder & Lead Designer</div>
                        <p className="text-center m-auto mt-3 p-1 w-4/5">
                            Aaron is the founder of Cometfall Press and the lead designer of Sunless Dunes. The project initially started as a homebrew campaign he ran, which then became a basis for the book as it is today. Aaron is a worldbuilder and communication designer, currently pursuing a Masters degree at RMIT University, Melbourne.
                        </p>
                    </div>

                    <div id="Jouweria" className="flex flex-col mt-2">
                        <img className="drop-shadow-lg landscape:w-1/4 portrait:w-[33vw] m-auto" src={jouwweria} alt="Jouweria Hassan"/>
                        <div className="font-semibold text-center mt-5">Jouweria Hassan</div>
                        <div className="text-center ">Project Manager</div>
                        <p className="text-center m-auto mt-3 p-1 w-4/5">
                            Jouweria is the Project Manager for CometFall Press. She oversees planning, marketing strategy, team coordination and progress tracking. She also manages communication between creative contributors and supports production to keep the project cohesive and on schedule.
                        </p>
                    </div>

                    <div id="Vijay" className="flex flex-col mt-2">
                        <img className="drop-shadow-lg landscape:w-1/4 portrait:w-[33vw] m-auto" src={vijay} alt="Vijayendra Wairokpam"/>
                        <div className="font-semibold text-center mt-5">Vijayendra Wairokpam</div>
                        <div className="text-center portrait:text-[2em">Lead Artist</div>
                        <p className="text-center m-auto mt-3 p-1 w-4/5">
                            Vijayendra is the lead artist for Sunless Dunes and was introduced to this world as a player for the original homebrew campaign. Working as an illustrator, he complemented the project's essence, owing to a strong interest in mythology, fantasy, and history.
                        </p>
                    </div>

                    <div id="Sam" className="flex flex-col mt-2">
                        <img className="drop-shadow-lg landscape:w-1/4 portrait:w-[33vw] m-auto" src={sam} alt="Samir Amin"/>
                        <div className="font-semibold text-center mt-5">Samir Amin</div>
                        <div className="text-center ">Technical Lead</div>
                        <p className="text-center m-auto mt-3 p-1 w-4/5">
                            Samir is the technical lead of Cometfall Press. He led the creation of our website, and now works on making animations and motion graphics for the project. Samir is currently pursuing a Masters degree in Computing and Data Analytics at Saint Mary's University, Halifax.
                        </p>
                    </div>

                </div>
            </div>
        </>)
}

export default Team;