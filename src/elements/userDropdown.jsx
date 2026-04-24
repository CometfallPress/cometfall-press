import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {useState} from "react";
import {useAppContext} from "../contexts/AppContext.jsx";
import {api} from "../contexts/CSRF.jsx";

function UserDropdown() {

	const [openUserDropdown, setOpenUserDropdown] = useState(false)
	const { user } = useAppContext()

	return (
		<>
			<div className={`ml-auto mr-10 flex items-center gap-1 text-white ${openUserDropdown?"drop-shadow-[#ed2396] drop-shadow-lg":""} hover:drop-shadow-[#ed2396] hover:drop-shadow-lg transition-all`}
				 onClick={()=> setOpenUserDropdown(!openUserDropdown)}

			>
				<div className="flex flex-column">
					<div className="flex flex-row">
						<p className="text-[2cqh] m-0 leading-none">
							{user}
						</p>
						<ChevronDownIcon className={`w-5 h-5 shrink-0 mt-auto mx-1 transition-all ${openUserDropdown&&"-scale-y-100"}`}/>
					</div>
					<div className={`absolute flex flex-col gap-y-1 p-4 py-6 right-0 top-5 mt-2 w-56 ${openUserDropdown&&"scale-y-100"} font-semibold text-[1.5cqh] scale-y-0 transition-all origin-top bg-white text-black rounded-lg shadow-lg overflow-hidden z-50 place-items-center`}
						onMouseLeave={()=> setOpenUserDropdown(false)}
					>
						<a href={`${import.meta.env.VITE_REDIRECT_URL}/admin/newsletter`} className="m-auto p-2 px-4 hover:bg-fuchsia-100 rounded-lg">
							Newsletter List
						</a>
						<hr className='h-2 my-2 w-full'/>
						<a href={`${import.meta.env.VITE_REDIRECT_URL}/admin/newsletter/editor`} className="m-auto p-2 px-4 hover:bg-fuchsia-100 rounded-lg">
							Newsletter Editor
						</a>
						<hr className='h-2 my-2 w-full'/>
						<a className="m-auto p-2 px-4 hover:bg-fuchsia-100 rounded-lg"
							onClick={async () => await api("/logout")}
						>
							Log Out
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserDropdown;