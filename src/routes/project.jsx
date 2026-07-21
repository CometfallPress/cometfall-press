import '../index.css'
import initbg from '../assets/WebsiteBanner2.webp'
import world from '../assets/WebsiteTheWorld.webp'
// import map from '../assets/KasaaqMapClean.webp'
// import overlay from '../assets/WebsiteWorldMap_outer.webp'
// import mapmask from '../assets/WebsiteWorldMapMask.webp'
import bannermask from '../assets/WebsiteBannerMask3.webp'
// import houses from '../assets/WebsiteHouseBanners.webp'
// import housesmask from '../assets/WebsiteHouseBannersMask.webp'
import races from '../assets/WebsiteRaces.webp'
import worldtitle from '../assets/WebsiteText1.png'
import racesitle from '../assets/WebsiteText2.png'
import subclasstitle from '../assets/WebsiteText3.png'
import subclasses from '../assets/WebsiteSubclasses.webp'
import book from '../assets/WebsiteBook.webp'
import sunlessdunesLogo from "../assets/SunlessDunesLogo.svg"
import booksarragned from '../assets/BooksArranged.webp'
// import {TransformWrapper, TransformComponent, KeepScale, useControls} from "react-zoom-pan-pinch";
// import KickstarterCard from '../elements/kickstarter.jsx';
import { useAppContext } from "../contexts/AppContext.jsx";
import ParallaxImg from "../elements/parallaxImg.jsx";
// import MapPoints from "../elements/mapPoints.tsx";
// import { MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon, ArrowPathIcon  } from "@heroicons/react/24/outline";
import {FollowUsOnKickstarter} from "../elements/followUsOnKickstarter.jsx";
import NewsletterAd from "../elements/newsletterad.jsx";


// const Controls = () => {
//     const { zoomIn, zoomOut, resetTransform } = useControls();
//
//     return (
//         <div className="grid p-2 place-items-center gap-4 z-50 -translate-y-[150%] bg-[#000000aa] rounded-xl">
//             <button className="row-1" type="button" onClick={() => zoomIn()}>
//                 <MagnifyingGlassPlusIcon className="landscape:w-[4vw] portrait:w-[5vh] p-3 text-white bg-[#ffffff00] hover:bg-[#ffffffaa] rounded-[50%]"/>
//             </button>
//             <button className="row-1" type="button" onClick={() => zoomOut()}>
//                 <MagnifyingGlassMinusIcon className="landscape:w-[4vw] portrait:w-[5vh] p-3 text-white bg-[#ffffff00] hover:bg-[#ffffffaa] rounded-[50%]"/>
//             </button>
//             <button className="row-1" type="button" onClick={() => resetTransform()}>
//                 <ArrowPathIcon className="landscape:w-[4vw] portrait:w-[5vh] p-3 text-white bg-[#ffffff00] hover:bg-[#ffffffaa] rounded-[50%]"/>
//             </button>
//         </div>
//     );
// };

function Project() {

    const { scrollState, screenState, breakpoints } = useAppContext();
    const font_size_port = (3.6*(1+(screenState.dpr)/15)).toPrecision(2)
    const font_size_land = (2.6*(1+(screenState.dpr)/15)).toPrecision(2)

    return (
        <>
            <div
                className={`scroll-smooth w-screen -z-20 leading-relaxed place-items-center place-content-center text-base`}
                style={{
                    fontSize: screenState.ratio > breakpoints.bp4 ? `${font_size_land}vh` : `${font_size_port}vw`,
                }}
            >
                <div
                    className='grid w-screen h-auto -top-10 overflow-y-clip landscape:origin-[50%_20%] landscape:scale-135  origin-[50%_15%] scale-170 object-fill'
                    style={{
                        WebkitMaskImage: `url(${bannermask})`,
                        maskImage: `url(${bannermask})`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskSize: '111%',
                        maskSize: '111%',
                        WebkitMaskPosition: `50% ${10 + scrollState.scrollPosition*0.1*screenState.ratio}%`,
                        maskPosition: `50% ${10 + scrollState.scrollPosition*0.1*screenState.ratio}%`,
                        marginBottom: `${Math.max(-0.02*scrollState.scrollPosition*screenState.ratio, 10)}%`,
                    }}
                >
                    <img
                        style = {{ transform: `translateY(${(scrollState.scrollPosition*0.03*screenState.ratio)}%)`}}
                        className='col-start-1 row-start-1'
                        src={initbg}
                        alt='Godess Sol Shrine Background'
                    />
                    <div style={{ transform: `translateY(${15 + scrollState.scrollPosition*0.03*screenState.ratio}%) scale(${Math.max(1-(scrollState.scrollPosition*0.0001*screenState.ratio), 0.97)})` }} className='col-start-1 row-start-1 w-[25vw] mx-auto'>
                        <img src={sunlessdunesLogo} alt='Sunless Dunes'/>
                    </div>
                </div>
                
                <div style={{ transform: `translateY(${screenState.ratio>breakpoints.bp1?'-1':'1'}%)`}}>
                    <div className='w-full m-auto mt-10'>
                        <div className={`flex ${screenState.ratio<=breakpoints.bp1?"flex-col":"flex-row-reverse"} relative mt-10 md:mt-15 w-[90vw] mx-auto mb-15`}
                             style = {{ transform: `translateY(${Math.max(scrollState.scrollPosition*-0.01*screenState.ratio, -10)}%)`}}
                        >
                            <div className={`relative p-2 ${screenState.ratio>breakpoints.bp1?"w-1/2":"w-full"}`}>
                                <p className={`relative clear-both text-left text-pretty text-dark`}>
                                    Sunless Dunes is a new campaign setting inspired by 17th century South Asia, designed for Dungeons and Dragons taking your table to the nation of Kasaaq within the northern deserts of the continent of Eqos.
                                    <br/>
                                    {screenState.ratio<=breakpoints.bp1&&(<img className='relative m-auto w-2/3' src={book} alt='Book Sample' />)}
                                    <br/>
                                    The various cities, noble houses, races, and subclasses found within this setting are each influenced by one of the many diverse cultures found in and around India, set during a time period in which steam power is beginning to shake-up old feudal ways.
                                </p>
                                <div className={`mt-20`}>
                                    <FollowUsOnKickstarter breakpoints={breakpoints} screenState={screenState} />
                                </div>
                            </div>

                            {screenState.ratio>breakpoints.bp1&&(
                                <div className='relative m-auto w-2/5 z-20'>
                                    <img src={book} className='m-auto drop-shadow-2xl' alt='Book Sample' />
                                </div>)}
                        </div>
                        <div id='newsletter'>
                            <NewsletterAd />
                        </div>
                        <div className='relative flex flex-col mt-10 md:mt-15 w-[90vw] mx-auto mb-15'>
                            <ParallaxImg
                                src={worldtitle}
                                alt='World Title'
                                classes={`relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] ${screenState.ratio>breakpoints.bp2?"w-[60vw]":"w-[90vw] scale-100 portrait:scale-130 origin-center"} m-auto z-20 p-2 mt-20 flex justify-center items-center`}
                                intensity={0}
                                scrollPosition={scrollState.scrollPosition}
                            />

                            <div className={`place-items-center relative h-auto flex ${screenState.ratio>breakpoints.bp2?"flex-row-reverse":"flex-col-reverse"} m-auto `}>
                                <p className={`relative ${screenState.ratio>breakpoints.bp2?"w-1/2":"w-full"} mx-auto h-auto p-2 clear-both mt-10 text-left text-pretty text-dark`}>
                                    Abmarah is shaped by the hands of divine forces leading to a world enriched with myths, lore and constant new beginnings.
                                    <br/>
                                    <br/>
                                    In an era of steam where new technology seeks to threaten the old empires of Kasaaq, while the Sun herself returns with vengeance, you must choose carefully to decide the fate of a nation.
                                </p>

                                <ParallaxImg
                                    src={world}
                                    alt='Characters in the world'
                                    classes={`${screenState.ratio>breakpoints.bp2?"w-1/2":"w-[90%]"} scale-100 portrait:scale-110 z-20 p-2 m-2 mt-0 drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.25)]`}
                                    intensity={0}
                                    scrollPosition={scrollState.scrollPosition}
                                />
                            </div>
                        </div>
                    </div>
                    {/*<div className='place-items-center relative h-auto flex flex-col m-auto mt-5 w-screen'>*/}

                        {/*<TransformWrapper initialScale={1.0} wheel={{activationKeys: ["Shift"] }} className="scroll-smooth">*/}

                        {/*    <div className="relative portrait:w-[150%] mt-10 z-20 scale-111"*/}
                        {/*         style={{*/}
                        {/*             WebkitMaskImage: `url(${mapmask})`,*/}
                        {/*             maskImage: `url(${mapmask})`,*/}
                        {/*             WebkitMaskRepeat: 'no-repeat',*/}
                        {/*             maskRepeat: 'no-repeat',*/}
                        {/*             WebkitMaskSize: `cover`,*/}
                        {/*             maskSize: `cover`,*/}
                        {/*             WebkitMaskPosition: 'center',*/}
                        {/*             maskPosition: 'center',*/}
                        {/*         }}>*/}
                        {/*        <TransformComponent className="scroll-smooth">*/}
                        {/*            <div className="min-w-screen scroll-smooth">*/}
                        {/*                <img className="min-w-screen" src={map} alt='Kasaaq Map'/>*/}
                        {/*                {points.map((item, index) => {*/}
                        {/*                    return (*/}
                        {/*                        <div*/}
                        {/*                            key={index}*/}
                        {/*                            style={{*/}
                        {/*                                position: "absolute",*/}
                        {/*                                left: `${item.x}%`,*/}
                        {/*                                top: `${item.y}%`,*/}
                        {/*                                width: `${item.width}%`,*/}
                        {/*                                height: `${item.height}%`,*/}
                        {/*                            }}*/}
                        {/*                        >*/}
                        {/*                            <KeepScale>*/}
                        {/*                                <img*/}
                        {/*                                    className="scale-115"*/}
                        {/*                                    src={item.src}*/}
                        {/*                                    alt=''/>*/}
                        {/*                            </KeepScale>*/}
                        {/*                        </div>*/}

                        {/*                    )*/}
                        {/*                })}*/}
                        {/*            </div>*/}
                        {/*        </TransformComponent>*/}
                        {/*    </div>*/}
                        {/*    <Controls />*/}
                        {/*</TransformWrapper>*/}


                        {/*<img src={overlay} alt="Overlay" className="pointer-events-none absolute inset-0 z-30 origin-center scale-105 min-w-screen"/>*/}
                        {/*<div className={`pointer-events-none absolute inset-0 z-40 origin-center scale-105 min-w-[100vw] max-h-[50vw] my-[7%]`}>*/}
                        {/*    <p className="flex size-fit m-auto px-5 py-2 text-[0.5em] text-black/75 font-bold rounded-2xl bg-white/50">*/}
                        {/*        Drag to Pan | Shift+Scroll to Zoom*/}
                        {/*    </p>*/}
                        {/*</div>*/}

                        {/*<div className='flex flex-col mx-auto place-items-center'>*/}
                        {/*    <div className={`flex ${screenState.ratio>breakpoints.bp2?"flex-row":"flex-col"} w-[90vw] my-10`}>*/}
                        {/*        <p className={`clear-both p-2 ${screenState.ratio>breakpoints.bp2?"w-1/2 mr-6 my-10":"w-full  mr-0"} text-left text-pretty text-dark`}>*/}
                        {/*            Each city was inspired by a different culture from the medieval Indian subcontinent, and they all hold unique adventure hooks within them. The nation is divided into six different kingdoms, each serving the <i>Mahataraja</i> of the city of Kasaaq. Many of the story hooks of the setting are political in nature, and there are many <i>Mahaan Houses</i> of powerful noble families to be found within the Kav&#39;orra Desert and surrounding areas. They all have different ambitions within the constant power struggles of the desert...*/}
                        {/*        </p>*/}
                        {/*        <p className={`clear-both p-2 ${screenState.ratio>breakpoints.bp2?"w-1/2 ml-6 my-10":"w-full ml-0"} text-left text-pretty text-dark`}>*/}
                        {/*            ...which your party can use to their advantage in furthering their own goals of adventure and notoriety. The setting features plot hooks relating to politics, war, mythology, ancient religions, and even tales of an apocalypse. The legend of the Sunless Dunes states that the ancient ruler of these sands, Sol Sultana, has ascended to become a goddess of the sun, and is soon returning to burn away the world.*/}
                        {/*        </p>*/}
                        {/*    </div>*/}

                        {/*    <div style={{*/}
                        {/*        WebkitMaskImage: `url(${housesmask})`,*/}
                        {/*        maskImage: `url(${housesmask})`,*/}
                        {/*        WebkitMaskRepeat: 'no-repeat',*/}
                        {/*        maskRepeat: 'no-repeat',*/}
                        {/*        WebkitMaskSize: `100%`,*/}
                        {/*        maskSize: `100%`,*/}
                        {/*        WebkitMaskPosition: 'center',*/}
                        {/*        maskPosition: 'center',*/}
                        {/*    }}*/}
                        {/*    className="relative z-20 w-screen mx-0 shadow-[inset_0_0_25px_rgba(50,5,5,0.14)] scale-112">*/}
                        {/*        <img src={houses} alt='Houses' className="min-w-full drop-shadow-2xl origin-center"/>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    {/*</div>*/}
                    <div className='flex flex-col m-auto mt-10'>
                        {/*<p className='relative p-2 w-[90vw] clear-both text-left text-pretty font-regular m-auto mt-20 text-dark'>*/}
                        {/*    There are many factions both outside and within Kasaaq, and many of them feature as backgrounds for player characters and NPCs alike within this book. An example here is the Swarna Guild, based on the ancient Dravidian merchants of South India. While they are not within Kasaaq itself, they control a neighboring nation and hold a lot of foreign influence within the desert.*/}
                        {/*</p>*/}
                        <ParallaxImg
                            src={subclasstitle}
                            alt='Subclass Title'
                            classes={`relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] ${screenState.ratio>breakpoints.bp2?"w-[60vw]":"w-[90vw] scale-100 portrait:scale-130 origin-center"} m-auto z-20 p-2 mt-10 flex justify-center items-center`}
                            intensity={0}
                            scrollPosition={scrollState.scrollPosition}
                        />

                        <div className={`place-items-center relative h-auto flex m-auto ${screenState.ratio>breakpoints.bp2?"flex-row-reverse":"flex-col"} w-[90vw]`}>

                            <ParallaxImg
                                src={subclasses}
                                alt='Subclass'
                                classes={`${screenState.ratio>breakpoints.bp2?"w-1/2":"w-4/5"} scale-100 portrait:scale-110 z-20 p-2 mt-5`}
                                img_classes='min-w-full drop-shadow-2xl'
                                intensity={0}
                                scrollPosition={scrollState.scrollPosition}
                            />

                            <p className={`relative ${screenState.ratio>breakpoints.bp2?"w-1/2":"w-full"} p-2 clear-both mx-auto mt-10 text-left text-pretty text-dark`}>
                                Explore 12 new subclasses from a cleric subclass devoted to astrology to a fighter subclass designed to use new gunpowder firearms.
                                <br/>
                                <br/>
                                These subclasses are designed to work with both the old and new rulesets, providing new playstyles not yet realized such as a strength-based rogue and a wizard channeling divine magic.
                            </p>
                        </div>

                        <div className='place-items-center relative h-auto flex flex-col m-auto mt-10 w-screen'>
                            <ParallaxImg
                                src={racesitle}
                                alt='Race Title'
                                classes={`relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] ${screenState.ratio>breakpoints.bp2?"w-[60vw]":"w-[90vw] scale-100 portrait:scale-130 origin-center"} m-auto z-20 p-2 mt-10 flex justify-center items-center`}
                                intensity={0}
                                scrollPosition={scrollState.scrollPosition}
                            />
                            <div className={`place-items-center relative h-auto flex ${screenState.ratio>breakpoints.bp2?"flex-row":"flex-col"} m-auto w-[90vw]`}>
                                <ParallaxImg
                                    src={races}
                                    alt='Races'
                                    classes='landscape:w-[75%] portrait:w-[90%] scale-100 portrait:scale-110 z-20 p-2 mx-auto mt-5 '
                                    img_classes='min-w-full drop-shadow-2xl'
                                    intensity={0}
                                    scrollPosition={scrollState.scrollPosition}
                                />
                                <p className={`relative ${screenState.ratio>breakpoints.bp2?"w-1/2":"w-[90vw]"} mx-auto h-auto p-2 clear-both mt-10 text-left text-pretty text-dark`}>
                                    This book will contain new lineages for 13 playable species, each culturally embedded within the history of Kasaaq and inspired from South-Asian mythologies. Most of these lineages also have unique species-feats to further customize their powers.
                                </p>
                            </div>
                            {/*<p className='relative m-auto my-auto mt-10 lg:mt-10 clear-both text-left text-pretty font-regular w-[90vw] p-2 text-dark'>*/}
                            {/*    This book will contain new lineages for 13 playable species, each culturally embedded within the history of Kasaaq and inspired from South-Asian mythologies. Most of these lineages also have unique species-feats to further customize their powers. These lineages include:*/}
                            {/*</p>*/}
                            {/*<ul className='m-auto p-2 w-[90vw] portrait:md:columns-1 landscape:columns-2'>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Sand Elves</b><br/> A new lineage of dark-skinned elves who are accustomed to the harsh desert.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Sunless Drow</b><br/> A new lineage of drow that have been forced to live on the arid surface under the moonlight.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Desert Dwarves</b><br/> A new lineage of dark-skinned dwarves who live in the arid mountains of the desert with a rajasthani-inspired culture.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Dune Orcs</b><br/> A new lineage of nomadic pale-skinned orcs who dwell within the sandy wastes.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Vedavin</b><br/> A blue-skinned species deeply attuned to the divine magic of Ashtadharma known for their psionic fortitude.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Omniborn</b><br/> An ancient extinct species who had four arms and three different lineages, who disappeared after the first era.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Vezaborn</b><br/> A tentacled humanoid species created by the gods to survive all extremes and to never perish.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Faiiali</b><br/> Insect-like humanoids with six arms known for their architectural genius, who travel across the stars.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Panshera</b><br/> Humanoid cat-beastfolk with three lineages: The Simhari, the Tigari, and the Bilari.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Vanara</b><br/> Humanoid monkey-beastfolk known for their legendary heroism and trickery, based on legends from both India and China.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Ursines</b><br/> Humanoid bear-beastfolk with two lineages: The wandering brown and black furred Ursos, and the panda-inspired Pandos.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Saurians</b><br/> Humanoid lizard-beastfolk with three lineages: The Crocids, the Gatorids, and the Gharids.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Haanari</b><br/> Humanoid elephant-beastfolk with two lineages: The african-inspired Tembosi, and the fur-covered mammoth-like Mammori.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>The Vicchu</b><br/> Half-Scorpion centaur-like monstrosities who wander across the deserts of Eqos, feared for their stature.</li>*/}
                            {/*</ul>*/}


                            {/*<p className='relative m-auto my-auto mt-10 lg:mt-10 clear-both text-left text-pretty font-regular w-[90vw] p-2 text-dark'>*/}
                            {/*    This book will contain 12 new subclasses, one for each of the main classes found in 5e 2024:*/}
                            {/*</p>*/}
                            {/*<ul className='m-auto p-2 w-[90vw] portrait:sm:columns-1 landscape:columns-2'>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Barbarian:</b> <i>Path of the Pehlwan</i><br/> A subclass inspired by ancient Indian wrestling.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Bard:</b> <i>The College of Hymns</i><br/> A subclass dedicated to the gods and their mantras.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Cleric:</b> <i>The Star Domain</i><br/> A subclass that worships  gods of astrology and star signs.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Druid:</b> <i>Circle of the Dunes</i><br/> A subclass that maintains the primal life of the desert.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Fighter:</b> <i>The Deadeye</i><br/> A subclass using firearms for gunslingers and sharpshooters.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Monk:</b> <i>Way of the Claw</i><br/> A subclass that uses bestial claws to destroy their enemies.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Paladin:</b> <i>Oath of Domination</i><br/> A subclass dedicated to those who seek the darkness.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Ranger:</b> <i>The Veilguard</i><br/> A subclass for those who guard the veil to the afterlife.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Rogue:</b> <i>The Thuggee</i><br/> A subclass of raw strength and thuggish mysticism.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Sorcerer:</b> <i>Terror Sorcery</i><br/> A subclass that turns fear itself into arcane power.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Warlock:</b> <i>The Rakshasa Patron</i><br/> A subclass for those that make deals with the fiends.</li>*/}
                            {/*    <li className='p-1 break-inside-avoid-column'><b>Wizard:</b> <i>The Heretic</i><br/> A subclass that involves turning the divine into the arcane.</li>*/}
                            {/*</ul>*/}
                        </div>
                        <ParallaxImg
                            src={booksarragned}
                            alt='Book Preview'
                            classes='w-[90%] landscape:w-[80%] mx-auto scale-90 z-20 p-2 mt-10'
                            img_classes='min-w-full drop-shadow-2xl'
                            intensity={0}
                            scrollPosition={scrollState.scrollPosition}
                        />
                        {/*<KickstarterCard prelaunch_text={true} include_ks={true}/>*/}
                        <a
                            href={`${import.meta.env.VITE_REDIRECT_URL}/kickstarter`}
                            target="_blank"
                            rel="noreferrer"
                            className={`block ${screenState.ratio>breakpoints.bp1?'w-fit text-[3.5vh]':'w-fit text-[4.7vw] '} text-center items-center rounded-full bg-linear-to-t from-emerald-500 hover:from-emerald-400 to-emerald-500 py-3 px-8 m-auto my-20 text-white! hover:scale-101 duration-100 transition-all`}
                        >
                            <p className="m-auto">
                                Our prelaunch is live on Kickstarter!
                            </p>
                        </a>
                        <div className='mb-20'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project