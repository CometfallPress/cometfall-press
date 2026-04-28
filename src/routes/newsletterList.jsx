import { useState, useEffect } from "react";
import { api } from "../contexts/CSRF.jsx"
import { PlusCircleIcon } from "@heroicons/react/24/outline";


function NewsletterList() {
	const [newsletters, setNewsletters] = useState([]);

	const getNewsletters = async () => {
		const { res, data } = await api("/newsletter/list", {method: "POST", body: JSON.stringify({})})
		if (res.status === 200) {
			setNewsletters(data);
		}
	}

	useEffect(()=> {
		getNewsletters()
	}, [])
	return (
		<>
			<p className="font-bold text-center mx-auto my-4">Newsletter List</p>
			<div
				className="w-full h-[80%] relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-2xl border">
				<table className="w-full text-left rtl:text-right text-body">
					<thead className="uppercase text-md font-bold text-white bg-neutral-secondary-soft border-b border-black rounded-2xl bg-emerald-500">
						<tr>
							<th scope="col" className="px-6 py-3">
								Created By
							</th>
							<th scope="col" className="px-6 py-3">
								Date Created
							</th>
							<th scope="col" className="px-6 py-3">
								Latest Update By
							</th>
							<th scope="col" className="px-6 py-3">
								Date Updated
							</th>
							<th scope="col" className="px-6 py-3">
								Published
							</th>
							<th scope="col" className="px-6 py-3">
								Date Published
							</th>
						</tr>
					</thead>
					<tbody className="w-full place-content-center place-items-center text-center">
					{newsletters.map((ns) => (
						<tr key={ns.id} className="">
							<th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
								{ns.created_by}
							</th>
							<td className="px-6 py-4">{ns.datetime_added}</td>
							<td className="px-6 py-4">{ns.last_update_by}</td>
							<td className="px-6 py-4">{ns.datetime_updated}</td>
							<td className="px-6 py-4">{ns.sent_to_users}</td>
							<td className="px-6 py-4">{ns.datetime_sent}</td>
							<td className="px-6 py-4"></td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
			<div className="w-full right-0">
				<button className="bg-emerald-500 text-white flex flex-row p-2 m-2 ml-auto rounded-xl font-medium text-md" onClick={() => {return null}}>
					<PlusCircleIcon class="h-6 w-6 mx-1" />
					New Newsletter
				</button>
			</div>
		</>
	)
}

export default NewsletterList