import sunlessdunesLogo from "./assets/SunlessDunesLogo.svg"



export default function KickstarterCard(props) {
	return (
		<div className='text-pretty landscape:text-[3vh] portrait:text-[5vw]  font-semibold text-5xl m-auto mt-20 mb-10 text-center'>
			{props.prelaunch_text===true?(
				<a className='transition-all text-zinc-900! hover:text-[#ed2396]!' href='https://www.cometfallpress.com/kickstarter/'>
					<div className="mb-5">
						Our pre-Launch is now live on <img className="inline-block place-items-center place-content-center landscape:h-[2.5vh] portrait:h-[4.2vw]" src="https://i.kickstarter.com/tq0sfld-kickstarter-logo-green.png"/>!
					</div>
				</a>
			):""}
			<section className="ks_card border-2 mx-auto portrait:max-w-[100vw] landscape:max-w-[80vw] rounded-[3vw] border-zinc-200 shadow-sm">
				<div className="grid backdrop-blur-xl backdrop-brightness-125 rounded-[3vw]">
					<div className="landscape:col-1 portrait:row-1 w-[full] p-6 space-y-10 ">
						<p className="landscape:text-[1vw] portrait:text-[1vh] font-medium uppercase tracking-wide text-zinc-200 text-shadow-md">
							Kickstarter Pre-Launch
						</p>

						<img src={sunlessdunesLogo} className="landscape:w-[15vw] portrait:w-[10vh] m-auto my-4 fill-black" alt='Kickstarter Banner'/>

						<p className="landscape:text-[1.5vw] portrait:text-[1.5vh] font-semibold text-zinc-100 text-shadow-md mx-2">
							Follow the project on Kickstarter and get notified when it launches.
						</p>

						<div className="w-full place-items-center place-content-center gap-3 pt-2">
							<a
								href="https://www.cometfallpress.com/kickstarter/"
								target="_blank"
								rel="noreferrer"
								className="block w-[66%] text-[1.2vw] text-center portrait:text-[1.5vh] items-center rounded-2xl bg-[#05ce78] px-5 py-4 m-auto text-white! hover:text-[#7459a5]! hover:scale-102 duration-100 transition-all"
							>
								<p className="m-auto">
									View on Kickstarter
								</p>
							</a>
							<br/>
							<a
								href="https://www.cometfallpress.com/kickstarter/"
								target="_blank"
								rel="noreferrer"
								className="block w-[66%] text-[1.2vw] text-center portrait:text-[1.5vh] items-center rounded-2xl border bg-zinc-100 m-auto border-zinc-300 px-5 py-4 text-black! hover:text-[#ed2396]! hover:scale-102 duration-100 transition-all"
							>
								<p className="m-auto">
									Notify me on launch
								</p>

							</a>
						</div>
					</div>
					{/*<div className="landscape:col-2 portrait:row-2 w-[95%] h-[90%] p-6 space-y-5 m-auto text-zinc-900 bg-white rounded-[2vw]">*/}
					{/*	<p className="landscape:text-[1.5vw] portrait:text-[1.5vh] font-medium p-1 text-shadow-md">*/}
					{/*		Join our newsletter to get updates and exclusive rewards*/}
					{/*	</p>*/}
					{/*	<form>*/}
					{/*		<div className="mb-6 text-left space-y-6">*/}
					{/*			<label htmlFor="name" className="block mb-2.5 ml-2 text-sm font-medium text-shadow-md">*/}
					{/*				Name*/}
					{/*			</label>*/}
					{/*			<input type="text"*/}
					{/*			       id="name"*/}
					{/*			       className="bg-white text-heading text-sm text-black rounded-xl outline-1 focus-within:outline-2 focus-within:outline-[#7459a5] outline-[#7459a5] block w-full px-3 py-2.5 placeholder:text-body"*/}
					{/*			       placeholder="Your name (optional)"*/}
					{/*			/>*/}
					{/*			<label htmlFor="email" className="block mb-2.5 ml-2 text-sm font-medium text-shadow-md">*/}
					{/*				Email address*/}
					{/*			</label>*/}
					{/*			<input type="email"*/}
					{/*			       id="email"*/}
					{/*			       className="bg-white text-heading text-sm text-black rounded-xl outline-1 focus-within:outline-2 focus-within:outline-[#7459a5] outline-[#7459a5] block w-full px-3 py-2.5 placeholder:text-body"*/}
					{/*			       placeholder="email@example.com" required*/}
					{/*			/>*/}
					{/*			<button type="submit" className="block text-[1.2vw] text-center portrait:text-[1.5vh] items-center rounded-2xl border bg-zinc-100 m-auto border-zinc-300 px-5 py-4 text-black! hover:text-pink-700! hover:scale-102 duration-100 transition-all" >Join</button>*/}
					{/*		</div>*/}
					{/*	</form>*/}
					{/*</div>*/}
				</div>
			</section>
		</div>
	);
}