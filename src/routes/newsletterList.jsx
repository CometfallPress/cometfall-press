import { useState, useEffect } from "react";
import { api } from "../contexts/CSRF.jsx"
import { DocumentPlusIcon } from "@heroicons/react/24/outline";


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
				className="w-full h-[90%] relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-2xl border border-slate-200">
				<table className="w-full text-left rtl:text-right text-body">
					<thead className="uppercase text-md font-bold text-white bg-neutral-secondary-soft border-b border-slate-200 rounded-2xl bg-emerald-500">
						<tr>
							<th scope="col" className="px-6 py-4 drop-shadow-sm">
								Created By
							</th>
							<th scope="col" className="px-6 py-4 drop-shadow-sm">
								Date Created
							</th>
							<th scope="col" className="px-6 py-4 drop-shadow-sm">
								Latest Update By
							</th>
							<th scope="col" className="px-6 py-4 drop-shadow-sm">
								Date Updated
							</th>
							<th scope="col" className="px-6 py-4 drop-shadow-sm">
								Published
							</th>
							<th scope="col" className="px-6 py-4 drop-shadow-sm">
								Date Published
							</th>
							<th scope="col" className="px-6 py-4 drop-shadow-sm">

							</th>
						</tr>
					</thead>
					<tbody className="w-full place-content-center place-items-center text-center overflow-scroll">
					{newsletters.map((ns) => (
						<tr key={ns.id} className="">
							<th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
								{ns.created_by}
							</th>
							<td className="px-6 py-4 drop-shadow-sm">{ns.datetime_added}</td>
							<td className="px-6 py-4 drop-shadow-sm">{ns.last_update_by}</td>
							<td className="px-6 py-4 drop-shadow-sm">{ns.datetime_updated}</td>
							<td className="px-6 py-4 drop-shadow-sm">{ns.sent_to_users}</td>
							<td className="px-6 py-4 drop-shadow-sm">{ns.datetime_sent}</td>
							<td className="px-6 py-4 drop-shadow-sm"></td>
						</tr>
					))}
					</tbody>
					<div className="absolute right-0 bottom-0 z-50 m-3">
						<button className="bg-emerald-500 active:bg-emerald-700 text-white flex flex-row p-2 m-2 ml-auto rounded-xl font-medium text-md place-items-center place-content-center text-center" onClick={() => {return null}}>
							<DocumentPlusIcon class="h-6 w-6 mx-2 my-auto" />
							<p className="mr-2 my-auto">New Newsletter</p>
						</button>
					</div>
				</table>
			</div>

		</>
	)
}

export default NewsletterList