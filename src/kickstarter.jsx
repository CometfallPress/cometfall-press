import ks_banner from "./assets/KS_Banner.png"
import sunlessdunesLogo from "./assets/SunlessDunesLogo.svg"

export default function KickstarterCard() {
  return (
    <section className="ks_card border-2 mx-auto max-w-2xl rounded-2xl border-zinc-200 shadow-sm">
      <div className="p-6 space-y-3 backdrop-blur-lg backdrop-brightness-125 rounded-2xl">
        <p className="landscape:text-[1vw] portrait:text-[1vh] font-medium uppercase tracking-wide text-zinc-200 text-shadow-md">
          Kickstarter Pre-Launch
        </p>

        {/* <h2 className="landscape:text-[3vw] portrait:text-[3vh] font-extrabold text-zinc-900 text-shadow-lg text-shadow-[#ebe08266]">
          Sunless Dunes
        </h2> */}

        <img src={sunlessdunesLogo} className="landscape:w-[15vw] portrait:w-[10vh] m-auto my-4 fill-black"/> 

        <p className="landscape:text-[1.5vw] portrait:text-[1.5vh] font-semibold text-zinc-100 text-shadow-md">
          Follow the project on Kickstarter and get notified when it launches.
        </p>

        <div className="place-items-center place-content-center flex flex-wrap gap-3 pt-2">
          <a
            href="https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia"
            target="_blank"
            rel="noreferrer"
            className="text-[1.5vw] portrait:text-[1.5vh] inline-flex items-center rounded-xl bg-[#05ce78] px-5 py-4 m-1 text-white! hover:text-pink-700 hover:scale-105 transition-all"
          >
            View on Kickstarter
          </a>

          <a
            href="https://www.kickstarter.com/projects/cometfallpress/sunless-dunes-5e-campaign-setting-inspired-by-south-asia/watch"
            target="_blank"
            rel="noreferrer"
            className="text-[1.5vw] portrait:text-[1.5vh] inline-flex items-center rounded-xl border bg-zinc-100 m-1 border-zinc-300 px-5 py-4 text-black! hover:text-pink-700 hover:scale-105 transition-all"
          >
            Notify me on launch
          </a>
        </div>
      </div>
    </section>
  );
}