import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {useState} from "react";

function UserDropdown(user) {

	const [openUserDropdown, setOpenUserDropdown] = useState(false)

	return (
		<>
			<div className={`ml-auto mr-10 flex items-center gap-1 text-white ${openUserDropdown?"drop-shadow-[#ed2396] drop-shadow-lg":""} hover:drop-shadow-[#ed2396] hover:drop-shadow-lg transition-all`}
			     onMouseEnter={()=> setOpenUserDropdown(true)}
			     onMouseLeave={()=> setOpenUserDropdown(false)}
			>
				<p className="text-[2cqh] m-0 leading-none">
					{user}
				</p>
				<ChevronUpIcon className={`w-5 h-5 shrink-0 mt-auto mx-1 transition-all ${openUserDropdown&&"-scale-y-100"}`}/>
			</div>
		</>
	)
}

export default UserDropdown;