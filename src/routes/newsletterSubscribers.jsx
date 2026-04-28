import {useEffect, useState} from "react";
import { api } from "../contexts/CSRF.jsx";

function NewsletterSubscribers() {

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
            <p className="font-bold text-center mx-auto my-4">Newsletter Subscribers</p>
            <div
                className="w-full h-[90%] relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-2xl border border-slate-200">
                <table className="w-full text-left rtl:text-right text-body">
                    <thead className="uppercase text-md font-bold text-white bg-neutral-secondary-soft border-b border-slate-200 rounded-2xl bg-emerald-500">
                    <tr>
                        <th scope="col" className="px-6 py-4 drop-shadow-sm">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-4 drop-shadow-sm">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-4 drop-shadow-sm">
                            Date Joined
                        </th>
                    </tr>
                    </thead>
                    <tbody className="w-full place-content-center place-items-center text-center overflow-scroll">
                    {subs.map((sub, index) => (
                        <tr key={index} className="">
                            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                {sub.email}
                            </th>
                            <td className="px-6 py-4 drop-shadow-sm">{sub.name}</td>
                            <td className="px-6 py-4 drop-shadow-sm">{sub.date_joined}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default NewsletterSubscribers