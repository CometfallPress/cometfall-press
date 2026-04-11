"use client";

import './index.css'
import initbg from './assets/WebsiteBanner.webp'
import world from './assets/WebsiteTheWorld.webp'
import map from './assets/KasaaqMapClean.webp'
import overlay from './assets/WebsiteWorldMap_outer.webp'
import mask from './assets/WebsiteWorldMapMask.webp'
import bannermask from './assets/WebsiteBannerMask.webp'
import houses from './assets/WebsiteHouseBanners.webp'
import races from './assets/WebsiteRaces.webp'
import worldtitle from './assets/WebsiteText1.png'
import racesitle from './assets/WebsiteText2.png'
import subclasstitle from './assets/WebsiteText3.png'
import subclasses from './assets/WebsiteSubclasses.webp'
import book from './assets/WebsiteBook.webp'
import sunlessdunesLogo from "./assets/SunlessDunesLogo.svg"
import {TransformWrapper, TransformComponent, KeepScale, useControls} from "react-zoom-pan-pinch";
import KickstarterCard from './kickstarter';
import { useOutletContext } from "react-router-dom";
import ParallaxImg from "./ParallaxImg.jsx";
import MapPoints from "./MapPoints.js";
import { MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon, ArrowPathIcon  } from "@heroicons/react/24/outline";


const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
        <div className="grid p-2 place-items-center gap-4 z-50 -translate-y-[150%] bg-[#000000aa] rounded-xl">
            <button className="row-1" type="button" onClick={() => zoomIn()}>
                <MagnifyingGlassPlusIcon className="landscape:w-[4vw] portrait:w-[5vh] p-3 text-white bg-[#ffffff00] hover:bg-[#ffffffaa] rounded-[50%]"/>
            </button>
            <button className="row-1" type="button" onClick={() => zoomOut()}>
                <MagnifyingGlassMinusIcon className="landscape:w-[4vw] portrait:w-[5vh] p-3 text-white bg-[#ffffff00] hover:bg-[#ffffffaa] rounded-[50%]"/>
            </button>
            <button className="row-1" type="button" onClick={() => resetTransform()}>
                <ArrowPathIcon className="landscape:w-[4vw] portrait:w-[5vh] p-3 text-white bg-[#ffffff00] hover:bg-[#ffffffaa] rounded-[50%]"/>
            </button>
        </div>
    );
};

function Project() {

    const {scrollPosition, screenSize} = useOutletContext();
    const points = MapPoints();

    return (
        <>
            <div
                className='scroll-smooth w-screen -z-20 leading-relaxed place-items-center place-content-center text-base portrait:text-[4vw] landscape:text-[2.4vh]'>
                <div
                    className='grid w-screen  h-auto md:mb-0 -top-20 landscape:origin-[50%_100%] landscape:mb-10 landscape:scale-111 portrait:origin-[50%_60%] portrait:mb-20 portrait:scale-150 portrait:md:scale-130 portrait:lg:scale-111 object-fill'
                    style={{
                        WebkitMaskImage: `url(${bannermask})`,
                        maskImage: `url(${bannermask})`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskSize: '111%',
                        maskSize: '111%',
                        WebkitMaskPosition: `50% ${50 + scrollPosition*0.25*(screenSize.height/screenSize.width)}%`,
                        maskPosition: `50% ${50 + scrollPosition*0.25*(screenSize.height/screenSize.width)}%`,
                    }}
                >
                    <img
                        style = {{ transform: `translateY(${scrollPosition*0.06*(screenSize.height/screenSize.width)}%)`}}
                        className='col-start-1 row-start-1'
                        src={initbg}
                        alt='Godess Sol Shrine Background'
                    />
                    <div style={{ transform: `translateY(${25 + scrollPosition*0.03*(screenSize.height/screenSize.width)}%)` }} className='col-start-1 row-start-1 w-[25vw] mx-auto'>
                        <img src={sunlessdunesLogo} alt='Sunless Dunes'/>
                    </div>
                </div>
                
                <div className='w-full m-auto mt-10'>
                    <div className='flex flex-col landscape:flex-row-reverse place-items-center place-content-center m-auto w-[90vw]'>
                        <p className='relative clear-both text-left text-pretty text-dark w-full p-2 landscape:w-1/2'>
                            Sunless Dunes is a new Campaign Setting for D&D 5e inspired by 17th century South-Asia, taking your table to the nation of Kasaaq within the northern deserts of the continent of Eqos. The various cities, noble houses, races, and subclasses found within this setting are each influenced by one of the many diverse cultures found in and around India, set during a time period in which steam power is beginning to shake-up old feudal ways.
                            <br/>
                                <img className='portrait:visible landscape:invisible relative portrait:m-auto portrait:w-2/3 landscape:w-0' src={book} alt='Book Sample' />
                            <br/>
                            Cometfall Press started off as a group of design students playing D&D many years ago in India. Our setting has been developed over many years, initially starting off as a homebrew world created for our table which continued to expand in scope. Now, our team is spread across the globe, and aims to bring our home-grown setting to players and DMs everywhere.
                        </p>
                        <div className='portrait:invisible landscape:visible relative portrait:m-0 landscape:m-auto portrait:w-0 landscape:w-2/5 z-20'>
                            <img src={book} className='m-auto drop-shadow-2xl' alt='Book Sample' />
                        </div>
                    </div>

                    <div className='relative flex flex-col mt-10 md:mt-10 w-[90vw] mx-auto mb-15'>
                        <ParallaxImg
                            src={worldtitle}
                            alt='World Title'
                            classes='relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] portrait:w-[90vw] landscape:w-[60vw] m-auto z-20 p-2 mt-5 flex justify-center items-center'
                            intensity={0}
                            scrollPosition={scrollPosition}
                        />

                        <div className='place-items-center relative h-auto flex flex-col-reverse m-auto landscape:flex-row'>
                            <p className='relative w-full landscape:w-1/2 mx-auto h-auto p-2 clear-both mt-10 text-left text-pretty text-dark'>
                                This book details the cultures and landscapes of the nation of the Kasaaqi Dynasty (कसाकी हुकूमत), which is only a small whole of a greater world known as Abmarah. Kasaaq is most well known for its large desert, but contains many diverse environments including dense jungles, floodplains, underground caves, volcanic mountains, tropical islands, and cool valleys.
                                <br/>
                                <br/>
                                The Kav&#39;orra Desert (कवोरा मरुस्थल) is a vast expanse of arid wasteland that covers almost the entirety of northern Eqos. It is a land of shifting sands and unrelenting heat, where the sun beats down mercilessly on all who dare to cross it. This desert is primordial, dating back to a time long before even the most powerful empires of the world existed. The sands of the Kav&#39;orra Desert are said to be incomprehensibly old, unchanged and uncharted.
                            </p>

                            <ParallaxImg
                                src={world}
                                alt='World Map'
                                classes='portrait:w-[90%] landscape:w-3/5 z-20 p-2 m-2 mt-5'
                                intensity={0}
                                scrollPosition={scrollPosition}
                            />
                        </div>
                    </div>
                </div>
                <div className='place-items-center relative h-auto flex flex-col m-auto mt-5 w-screen'>

                        <TransformWrapper initialScale={1.0} wheel={{activationKeys: ["Shift"] }} className="scroll-smooth">

                            <div className="relative portrait:w-[150%] mt-10 z-20 scale-111"
                                 style={{
                                     WebkitMaskImage: `url(${mask})`,
                                     maskImage: `url(${mask})`,
                                     WebkitMaskRepeat: 'no-repeat',
                                     maskRepeat: 'no-repeat',
                                     WebkitMaskSize: `cover`,
                                     maskSize: `cover`,
                                     WebkitMaskPosition: 'center',
                                     maskPosition: 'center',
                                 }}>
                                <TransformComponent className="scroll-smooth">
                                    <div className="min-w-screen scroll-smooth">
                                        <img className="min-w-screen" src={map} alt='Kasaaq Map'/>
                                        {points.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    style={{
                                                        position: "absolute",
                                                        left: `${item.x}%`,
                                                        top: `${item.y}%`,
                                                        width: `${item.width}%`,
                                                        height: `${item.height}%`,
                                                    }}
                                                >
                                                    <KeepScale>
                                                        <img
                                                            src={item.src}
                                                            alt=''/>
                                                    </KeepScale>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </TransformComponent>
                            </div>
                            <Controls />
                        </TransformWrapper>


                    <img src={overlay} alt="Overlay" className="pointer-events-none absolute inset-0 z-30 origin-center scale-105 min-w-screen"/>
                    {/*<div className={`pointer-events-none absolute inset-0 z-40 origin-center scale-105 min-w-[100vw] max-h-[50vw] my-[7%]`}>*/}
                    {/*    <p className="flex size-fit m-auto px-5 py-2 text-[0.5em] text-black/75 font-bold rounded-2xl bg-white/50">*/}
                    {/*        Drag to Pan | Shift+Scroll to Zoom*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    <div className='flex flex-col mx-auto place-items-center mt-10'>
                        <div className='flex flex-col md:flex-row w-[90vw] my-10 '>
                            <p className='clear-both w-full p-2 mr-0 md:w-1/2 md:mr-6 md:my-10 text-left text-pretty text-dark'>
                                Each city was inspired by a different culture from the medieval Indian subcontinent, and they all hold unique adventure hooks within them. The nation is divided into six different kingdoms, each serving the <i>Mahataraja</i> of the city of Kasaaq. Many of the story hooks of the setting are political in nature, and there are many <i>Mahaan Houses</i> of powerful noble families to be found within the Kav&#39;orra Desert and surrounding areas. They all have different ambitions within the constant power struggles of the desert...
                            </p>
                            <p className='clear-both w-full p-2 ml-0 md:w-1/2 md:ml-6 md:my-10 text-left text-pretty text-dark'>
                                ...which your party can use to their advantage in furthering their own goals of adventure and notoriety. The setting features plot hooks relating to politics, war, mythology, ancient religions, and even tales of an apocalypse. The legend of the Sunless Dunes states that the ancient ruler of these sands, Sol Sultana, has ascended to become a goddess of the sun, and is soon returning to burn away the world.
                            </p>
                        </div>

                        <ParallaxImg
                            src={houses}
                            alt='Houses'
                            classes='relative z-20 w-screen mx-0 drop-shadow-[0_0_25px_rgba(50,5,5,0.14)]'
                            img_classes='min-w-full drop-shadow-2xl origin-center scale-111 my-10'
                            intensity={0}
                            scrollPosition={scrollPosition}
                        />
                    </div>
                </div>
                <div className='place-items-center relative h-auto flex flex-col m-auto mt-5 w-screen'>
                    <p className='relative p-2 w-[90vw] clear-both text-left text-pretty font-regular m-auto mt-20 text-dark'>
                        There are many factions both outside and within Kasaaq, and many of them feature as backgrounds for player characters and NPCs alike within this book. An example here is the Swarna Guild, based on the ancient Dravidian merchants of South India. While they are not within Kasaaq itself, they control a neighboring nation and hold a lot of foreign influence within the desert.
                    </p>
                    <div className='flex flex-col m-auto mt-10 '>
                        <ParallaxImg
                            src={racesitle}
                            alt='Race Title'
                            classes='relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] portrait:w-[90vw] landscape:w-[60vw] m-auto z-20 p-2 mt-5 flex justify-center items-center'
                            intensity={0}
                            scrollPosition={scrollPosition}
                        />
                        <div className='place-items-center relative h-auto flex flex-col m-auto landscape:flex-row w-[90vw]'>
                            <ParallaxImg
                                src={races}
                                alt='Races'
                                classes='landscape:w-[75%] portrait:w-[90%] scale-100 z-20 p-2 mx-auto mt-5 '
                                img_classes='min-w-full drop-shadow-2xl'
                                intensity={0}
                                scrollPosition={scrollPosition}
                            />
                            <p className='relative portrait:w-[90vw] landscape:w-1/2 mx-auto h-auto p-2 clear-both mt-10 text-left text-pretty text-dark'>
                                There are many species specifically created for the world of Abmarah, including ancient species long-thought extinct. Most peoples do not have an extensive species culture, instead their culture is based on the city or faction that they grew up in. 
                                <br/>
                                <br/>
                                The Indian subcontinent alone is home to hundreds of cultural groups and 800+ languages. This setting cannot possibly represent the full diversity present in the region, so only the most common and relevant cultures and languages have been taken as inspiration for their Eqosi equivalents in the setting. These in-universe cultures are not truly authentic to reality, and are not commentaries on the actual cultures used as inspiration.
                            </p>
                        </div>
                        <p className='relative m-auto my-auto mt-10 lg:mt-10 clear-both text-left text-pretty font-regular w-[90vw] p-2 text-dark'>
                            This book will contain new lineages for 13 playable species, each culturally embedded within the history of Kasaaq and inspired from South-Asian mythologies. Most of these lineages also have unique species-feats to further customize their powers. These lineages include:
                        </p>
                        <ul className='m-auto p-2 w-[90vw] portrait:md:columns-1 landscape:columns-2'>
                            <li className='p-1 break-inside-avoid-column'><b>The Sand Elves</b><br/> A new lineage of dark-skinned elves who are accustomed to the harsh desert.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Sunless Drow</b><br/> A new lineage of drow that have been forced to live on the arid surface under the moonlight.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Desert Dwarves</b><br/> A new lineage of dark-skinned dwarves who live in the arid mountains of the desert with a rajasthani-inspired culture.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Dune Orcs</b><br/> A new lineage of nomadic pale-skinned orcs who dwell within the sandy wastes.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Vedavin</b><br/> A blue-skinned species deeply attuned to the divine magic of Ashtadharma known for their psionic fortitude.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Omniborn</b><br/> An ancient extinct species who had four arms and three different lineages, who disappeared after the first era.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Vezaborn</b><br/> A tentacled humanoid species created by the gods to survive all extremes and to never perish.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Faiiali</b><br/> Insect-like humanoids with six arms known for their architectural genius, who travel across the stars.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Panshera</b><br/> Humanoid cat-beastfolk with three lineages: The Simhari, the Tigari, and the Bilari.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Vanara</b><br/> Humanoid monkey-beastfolk known for their legendary heroism and trickery, based on legends from both India and China.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Ursines</b><br/> Humanoid bear-beastfolk with two lineages: The wandering brown and black furred Ursos, and the panda-inspired Pandos.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Saurians</b><br/> Humanoid lizard-beastfolk with three lineages: The Crocids, the Gatorids, and the Gharids.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Haanari</b><br/> Humanoid elephant-beastfolk with two lineages: The african-inspired Tembosi, and the fur-covered mammoth-like Mammori.</li>
                            <li className='p-1 break-inside-avoid-column'><b>The Vicchu</b><br/> Half-Scorpion centaur-like monstrosities who wander across the deserts of Eqos, feared for their stature.</li>
                        </ul>

                        <ParallaxImg
                            src={subclasstitle}
                            alt='Subclass Title'
                            classes='relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] portrait:w-[90vw] landscape:w-[60vw] m-auto z-20 p-2 mt-5 flex justify-center items-center'
                            intensity={0}
                            scrollPosition={scrollPosition}
                        />

                        <div className='place-items-center relative h-auto flex flex-col m-auto landscape:flex-row-reverse w-[90vw]'>

                            <ParallaxImg
                                src={subclasses}
                                alt='Subclass'
                                classes='portrait:w-[80%] landscape:w-1/2 scale-100 z-20 p-2 mt-5'
                                img_classes='min-w-full drop-shadow-2xl'
                                intensity={0}
                                scrollPosition={scrollPosition}
                            />

                            <p className='relative portrait:w-full landscape:w-[50%] p-2 clear-both mx-auto mt-10 text-left text-pretty text-dark'>
                                We have designed new subclasses for this setting inspired by real-life concepts within the history and mythologies of South-Asia. From a cleric subclass devoted to astrology to a fighter subclass designed to use new gunpowder firearms, a wide variety of subclasses are presented to the players.
                                <br/>
                                <br/>
                                These subclasses are designed to work with both the old and new rulesets, providing new playstyles not yet realized such as a strength-based rogue and a wizard channeling divine magic.
                            </p>
                        </div>
                        <p className='relative m-auto my-auto mt-10 lg:mt-10 clear-both text-left text-pretty font-regular w-[90vw] p-2 text-dark'>
                            This book will contain 12 new subclasses, one for each of the main classes found in 5e 2024:
                        </p>
                        <ul className='m-auto p-2 w-[90vw] portrait:sm:columns-1 landscape:columns-2'>
                            <li className='p-1 break-inside-avoid-column'><b>Barbarian:</b> <i>Path of the Pehlwan</i><br/> A subclass inspired by ancient Indian wrestling.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Bard:</b> <i>The College of Hymns</i><br/> A subclass dedicated to the gods and their mantras.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Cleric:</b> <i>The Star Domain</i><br/> A subclass that worships  gods of astrology and star signs.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Druid:</b> <i>Circle of the Dunes</i><br/> A subclass that maintains the primal life of the desert.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Fighter:</b> <i>The Deadeye</i><br/> A subclass using firearms for gunslingers and sharpshooters.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Monk:</b> <i>Way of the Claw</i><br/> A subclass that uses bestial claws to destroy their enemies.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Paladin:</b> <i>Oath of Domination</i><br/> A subclass dedicated to those who seek the darkness.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Ranger:</b> <i>The Veilguard</i><br/> A subclass for those who guard the veil to the afterlife.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Rogue:</b> <i>The Thuggee</i><br/> A subclass of raw strength and thuggish mysticism.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Sorcerer:</b> <i>Terror Sorcery</i><br/> A subclass that turns fear itself into arcane power.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Warlock:</b> <i>The Rakshasa Patron</i><br/> A subclass for those that make deals with the fiends.</li>
                            <li className='p-1 break-inside-avoid-column'><b>Wizard:</b> <i>The Heretic</i><br/> A subclass that involves turning the divine into the arcane.</li>
                        </ul>
                    </div>
                     <div className='text-pretty landscape:text-[3vh] portrait:text-[5vw]  font-semibold text-5xl m-auto mt-20 mb-10 text-center'>
                        <a className='transition-all' href='https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia'>
                            <div className="mb-5">
                                The Pre-Launch is now live on <img className="inline-block place-items-center place-content-center landscape:h-[2.5vh] portrait:h-[4.2vw]" src="https://i.kickstarter.com/tq0sfld-kickstarter-logo-green.png"/>!
                            </div>
                        </a>
                        <KickstarterCard />
                        <div className='mb-20'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project