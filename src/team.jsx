import './index.css'
import sam from './assets/portraits/sam.webp'
import aaron from './assets/portraits/aar.webp'
import vijay from './assets/portraits/vij.webp'
import jouwweria from './assets/portraits/jou.webp'

function Team() {
    return (
        <>
            <div className='portrait:w-[90vw] landscape:w-[90vw] landscape:xl:w-[80vw] m-auto scroll-smooth -z-20 leading-relaxed place-content-center place-items-center text-base sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-5xl font-regular'>
                <div className='w-full flex place-items-center justify-center h-auto landscape:mb-20 portrait:mb-5 md:mb-0'>
                    <p className='text-[3em] font-semibold m-auto my-10'>
                        Meet the Team
                    </p>
                </div>
                <div className="grid landscape:grid-cols-2 portrait:grid-rows-4 place-items-center place-content-center gap-4 m-5">
                    <div id="Aaron" className="flex flex-col mt-10">
                        <img className="drop-shadow-lg landscape:w-1/2 portrait:w-1/2 m-auto" src={aaron} alt="Aaron Kumar"/>
                        <div className="font-semibold portrait:text-[2em] text-center mt-5">Aaron Kumar</div>
                        <div className="text-center portrait:text-[2em]">Founder & Lead Designer</div>
                        <p className="text-center portrait:text-[1.5em] m-auto mt-3 p-2 w-3/4">
                            Aaron is the founder of Cometfall Press and the lead designer of Sunless Dunes. The project initially started as a homebrew campaign he ran, which then became a basis for the book as it is today. Aaron is a worldbuilder and communication designer, currently pursuing a Masters degree at RMIT University, Melbourne.
                        </p>
                    </div>

                    <div id="Jouweria" className="flex flex-col mt-10">
                        <img className="drop-shadow-lg landscape:w-1/2 portrait:w-1/2 m-auto" src={jouwweria} alt="Jouweria Hassan"/>
                        <div className="font-semibold portrait:text-[2em] text-center mt-5">Jouweria Hassan</div>
                        <div className="text-center portrait:text-[2em]">Project Manager</div>
                        <p className="text-center portrait:text-[1.5em] m-auto mt-3 p-2 w-3/4">
                            Jouweria is the Project Manager for CometFall Press. She oversees planning, marketing strategy, team coordination and progress tracking. She also manages communication between creative contributors and supports production to keep the project cohesive and on schedule.
                        </p>
                    </div>

                    <div id="Vijay" className="flex flex-col mt-10">
                        <img className="drop-shadow-lg landscape:w-1/2 portrait:w-1/2 m-auto" src={vijay} alt="Vijayendra Wairokpam"/>
                        <div className="font-semibold portrait:text-[2em] text-center mt-5">Vijayendra Wairokpam</div>
                        <div className="text-center portrait:text-[2em">Lead Artist</div>
                        <p className="text-center portrait:text-[1.5em] m-auto mt-3 p-2 w-3/4">
                            Vijayendra is the lead artist for Sunless Dunes and was introduced to this world as a player for the original homebrew campaign. Working as an illustrator, he complemented the project's essence, owing to a strong interest in mythology, fantasy, and history.
                        </p>
                    </div>

                    <div id="Sam" className="flex flex-col mt-10">
                        <img className="drop-shadow-lg landscape:w-1/2 portrait:w-1/2 m-auto" src={sam} alt="Samir Amin"/>
                        <div className="font-semibold portrait:text-[2em] text-center mt-5">Samir Amin</div>
                        <div className="text-center portrait:text-[2em]">Technical Lead</div>
                        <p className="text-center portrait:text-[1.5em] m-auto mt-3 p-2 w-3/4">
                            Samir is the technical lead of Cometfall Press. He led the creation of our website, and now works on making animations and motion graphics for the project. Samir is currently pursuing a Masters degree in Computing and Data Analytics at Saint Mary's University, Halifax.
                        </p>
                    </div>
                </div>
            </div>
        </>)
}

export default Team;