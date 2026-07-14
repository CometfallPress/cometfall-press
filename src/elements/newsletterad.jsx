import noteheader from "../assets/NoteHeader.png"
import vetala from '../assets/vetala.webp'
import {useState} from "react";
import { api } from "../contexts/CSRF.jsx"
import { useAppContext } from "../contexts/AppContext.jsx";

export default function NewsletterAd() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [processing, setProcessing] = useState(false);
	const [status, setStatus] = useState("");
	const [respSuccess, setRespSuccess] = useState(true);
	const { screenState, breakpoints } = useAppContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		try {
			const { res, data } = await api("/newsletter/subscribe", {
				method: "POST",
				body: JSON.stringify({ name, email }),
			});
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
		<div className='text-pretty landscape:text-[3vh] portrait:text-[5vw] font-semibold text-5xl m-auto mt-20 mb-5 text-center scale-y-112 scale-x-130'>
			<img className="-z-10 scale-y-110" alt='border' src={noteheader}/>
			<div className={``}>
				<div className="bg-linear-to-br from-sky-300 to-cyan-50 mx-auto w-screen origin-center">
					<img className="absolute h-[100%] object-contain z-10 scale-x-90 origin-left" alt='Vetala' src={vetala}/>
					<div className="w-screen grid grid-cols-3 py-5">
						<div className={`${screenState.ratio<=breakpoints.bp4? 'col-span-3 col-start-1 origin-center' : `col-span-2 col-start-2 ${screenState.ratio<breakpoints.bp1?'origin-center':'origin-left'}` } z-20 h-fit p-2 space-y-5 m-auto place-items-center scale-y-90 scale-x-75 place-content-center`}>
							<div className={`flex flex-col my-auto text-zinc-900 bg-[#ffffffcc] p-4 pt-10 pb-4 mb-2 ${screenState.ratio<breakpoints.bp1?'rounded-[2vh]':'rounded-[2vw]'} place-items-center place-content-center`}>
								<p className={`${screenState.ratio<breakpoints.bp1?'text-[2vh]':'text-[1.5vw]'} font-medium p-1 text-shadow-md mb-4`}>
									Subscribe to our newsletter to get updates and exclusive rewards
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
										<button type="submit" className="block text-[1.2vw] text-center portrait:text-[1.5vh] items-center rounded-2xl border bg-zinc-100 active:bg-zinc-300 m-auto border-zinc-300 px-5 py-4 text-black! hover:text-pink-700! hover:scale-102 duration-100 transition-all" >
											{processing ? (
												<div className="place-items-center items-center place-content-center content-center text-center">
													<svg className="animate-spin h-5 w-5 text-[#7459a5]" xmlns="http://www.w3.org/2000/svg"
													     fill="none" viewBox="0 0 24 24">
														<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
														<path className="opacity-75" fill="currentColor"
														      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
													</svg>
												</div>):"Subscribe"
											}
										</button>
									</div>
								</form>
								<p className={`mx-auto p-2 text-[1.2vw] portrait:text-[1.5vh] ${status===""?"my-0 h-0":"mt-4 h-auto"} ${respSuccess?"text-lime-700":"text-rose-700"}`}>
									{status}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img className="-z-10 rotate-180 scale-y-110" alt='border' src={noteheader}/>
		</div>
	);
}