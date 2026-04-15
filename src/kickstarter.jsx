import sunlessdunesLogo from "./assets/SunlessDunesLogo.svg"
import {useState} from "react";



export default function KickstarterCard(props) {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [processing, setProcessing] = useState(false);
	const [status, setStatus] = useState("");
	const [respSuccess, setRespSuccess] = useState(true);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		try {
			const res = await fetch("https://api.cometfallpress.com/newsletter/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email }),
			});
			const data = await res.json();
			setProcessing(false);
			if (res.status === 200) {
				setRespSuccess(true);
			}
			else {
				setRespSuccess(false);
			}
			setStatus(data.status)
		}
		catch {
			setRespSuccess(false);
			setStatus("Something went wrong while processing your request, please try again later.");
		}
		finally {
			setProcessing(false);
		}
	};

	return (
		<div className='text-pretty landscape:text-[3vh] portrait:text-[5vw] font-semibold text-5xl m-auto mt-20 mb-5 text-center'>
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

						<img src={sunlessdunesLogo} className="landscape:w-[20vw] portrait:w-[40vw] m-auto my-4 fill-black" alt='Kickstarter Banner'/>

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
					<div className="landscape:col-2 portrait:row-2 w-[95%] h-fit p-2 space-y-5 m-auto place-items-center place-content-center">
						<div className="flex flex-col my-auto text-zinc-900 bg-white p-4 py-10 mb-2 rounded-[2vw] place-items-center place-content-center">
							<p className="landscape:text-[1.5vw] portrait:text-[2vh] font-medium p-1 text-shadow-md mb-2">
								Join our newsletter to get updates and exclusive rewards
							</p>
							<form className='w-full' onSubmit={handleSubmit}>
								<div className="text-left space-y-6">
									<label htmlFor="name" className="block mb-2.5 ml-2 text-sm font-medium text-shadow-md">
										Name
									</label>
									<input type="text"
									       id="name"
									       value={name}
									       onChange={(e) => setName(e.target.value)}
									       className="bg-white text-heading text-sm text-black rounded-xl outline-1 focus-within:outline-2 focus-within:outline-[#7459a5] outline-[#7459a5] block w-full px-3 py-2.5 placeholder:text-body"
									       placeholder="Your name (optional)"
									/>
									<label htmlFor="email" className="block mb-2.5 ml-2 text-sm font-medium text-shadow-md">
										Email address
									</label>
									<input type="email"
									       id="email"
									       value={email}
									       onChange={(e) => setEmail(e.target.value)}
									       className="bg-white text-heading text-sm text-black rounded-xl outline-1 focus-within:outline-2 focus-within:outline-[#7459a5] outline-[#7459a5] block w-full px-3 py-2.5 placeholder:text-body"
									       placeholder="email@example.com" required
									/>
									<button type="submit" className="block text-[1.2vw] text-center portrait:text-[1.5vh] items-center rounded-2xl border bg-zinc-100 m-auto border-zinc-300 px-5 py-4 text-black! hover:text-pink-700! hover:scale-102 duration-100 transition-all" >
										{processing ? (
											<div className="place-items-center items-center place-content-center content-center text-center">
												<svg className="animate-spin h-5 w-5 text-[#7459a5]" xmlns="http://www.w3.org/2000/svg"
												     fill="none" viewBox="0 0 24 24">
													<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
													<path className="opacity-75" fill="currentColor"
													      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
												</svg>
											</div>):"Join"
										}
									</button>
								</div>
							</form>
							<p className={`mx-auto mt-4 text-[2vw] ${respSuccess?"text-lime-700":"text-rose-700"}`}>
								{status}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}