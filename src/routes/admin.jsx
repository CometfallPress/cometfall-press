import {useEffect, useState} from "react";
import { api } from "../contexts/CSRF.jsx";

function Admin() {

	const [subs, setSubs] = useState([]);

	const getSubs = async () => {
		const { res, data } = await api("/newsletter/subscribers", {method: "POST", body: JSON.stringify({})})
		if (res.status === 200) {
			setSubs(data);
		}
	}

	useEffect(()=> {
		getSubs()
	}, [])

	return (
		<>
			<p className="font-bold text-center mx-auto my-4">Admin Panel</p>
			<div
				className="w-full h-[80%] relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-2xl border">
				<table className="w-full text-left rtl:text-right text-body">
					<thead className="uppercase text-md font-bold text-white bg-neutral-secondary-soft border-b border-black rounded-2xl bg-emerald-500">
						<tr>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Date Joined
							</th>
						</tr>
					</thead>
					<tbody>
					{subs.map((sub, index) => (
						<tr key={index} className="">
							<th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
								{sub.email}
							</th>
							<td className="px-6 py-4">{sub.name}</td>
							<td className="px-6 py-4">{sub.date_joined}</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Admin