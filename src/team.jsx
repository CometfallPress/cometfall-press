"use client";

import './index.css'
import sam from './assets/portraits/sam.webp'
import aaron from './assets/portraits/aar.webp'
import vijay from './assets/portraits/vij.webp'
import jouwweria from './assets/portraits/jou.webp'
import ourTeamTitle from "./assets/OurTeamTitle.png";
import ParallaxImg from "./ParallaxImg.jsx";
import { useAppContext } from "./AppContext.jsx";
import Hero from "./hero.jsx";
import noteheader from "./assets/NoteHeader.png";


function Team() {

    const { scrollState, screenState, breakpoints } = useAppContext();

    const team = [
        {
            id: "Aaron",
            src: aaron,
            name: "Aaron Kumar",
            title: "Founder & Lead Designer",
            description: "Aaron is the founder of Cometfall Press and the lead designer of Sunless Dunes. The project initially started as a homebrew campaign he ran, which then became a basis for the book as it is today. Aaron is a worldbuilder and communication designer, currently pursuing a Masters degree at RMIT University, Melbourne."
        },
        {
            id: "Jouweria",
            src: jouwweria,
            name: "Jouweria Hassan",
            title: "Project Manager",
            description: "Jouweria is the Project Manager for CometFall Press. She oversees planning, marketing strategy, team coordination and progress tracking. She also manages communication between creative contributors and supports production to keep the project cohesive and on schedule."
        },
        {
            id: "Vijay",
            src: vijay,
            name: "Vijayendra Wairokpam",
            title: "Lead Artist",
            description: "Vijayendra is the lead artist for Sunless Dunes and was introduced to this world as a player for the original homebrew campaign. Working as an illustrator, he complemented the project's essence, owing to a strong interest in mythology, fantasy, and history."
        },
        {
            id: "Samir",
            src: sam,
            name: "Samir Amin",
            title: "Technical Lead",
            description: "Samir is the technical lead of Cometfall Press. He led the creation of our website, and now works on making animations and motion graphics for the project. Samir is currently pursuing a Masters degree in Computing and Data Analytics at Saint Mary's University, Halifax."
        },
    ]

    return (
        <>
            <div className='scroll-smooth w-[100vw] -z-20 leading-relaxed place-items-center place-content-center text-base portrait:text-[3vw] landscape:text-[2.4vh] font-regular mb-20'>
                <ParallaxImg
                    src={ourTeamTitle}
                    alt='Our Team'
                    classes={`relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] ${screenState.ratio<=breakpoints.bp1?"w-[90vw]":"w-[60vw]"} scale-120 m-auto z-20 p-2 mt-10 mb-5 flex justify-center items-center`}
                    intensity={0}
                    scrollPosition={scrollState.scrollPosition}
                />
                <div className='origin-top scale-x-112'>
                    <img className="-z-10 portrait:min-w-[200%] portrait:-translate-x-[25%] scale-y-112" alt='' src={noteheader}/>
                    <div className={`ks_card mx-auto grid ${screenState.ratio<=breakpoints.bp1?"grid-rows-4 grid-cols-1":"grid-cols-2 grid-rows-1"} p-10 landscape:px-15 place-items-center place-content-center gap-4`}>
                        {team.map((member, index) => (
                            <Hero key={index} id={member.id} name={member.name} title={member.title} description={member.description} src={member.src}/>
                        ))}
                    </div>
                    <img className="-z-10 portrait:min-w-[200%] portrait:-translate-x-[25%] scale-y-112 rotate-180" alt='' src={noteheader}/>
                </div>
            </div>
        </>)
}

export default Team;