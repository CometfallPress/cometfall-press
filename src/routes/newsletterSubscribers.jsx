import {useEffect, useState} from "react";
import { api } from "../contexts/CSRF.jsx";
import {useAppContext} from "../contexts/AppContext.jsx";
import {CheckCircleIcon, ExclamationCircleIcon, XCircleIcon} from "@heroicons/react/24/outline/index.js";

function NewsletterSubscribers() {

    const [subs, setSubs] = useState([]);
    const { toastState, setModal } = useAppContext();

    const getSubs = async () => {
        const { res, data } = await api("/newsletter/subscribers", {method: "POST", body: JSON.stringify({})})
        if (res.status === 200) {
            setSubs(data);
        }
    }

    const unsub = async (secret) => {
        setModal(
            {
                title: "Warning: Are you sure?",
                icon: <ExclamationCircleIcon className="w-10 h-10 text-amber-400 my-auto mx-1 shrink-0"/>,
                message: "Are you sure you want to manually remove this user from the subscriber list?",
                close: () => { setModal(null) },
                buttons: [
                    {
                        text: "Yes",
                        icon: <CheckCircleIcon className="w-7 h-7 my-auto mx-1 shrink-0" />,
                        onClick: async () => {
                            try {
                                const { res} = await api(`/newsletter/unsubscribe/${secret}`, { method: "GET" })
                                if (res.status === 200) {
                                    toastState.addToast("Unsubscribed successfully!", "success");
                                    await getSubs()
                                }
                                else {
                                    toastState.addToast("Something went wrong while manually unsubscribing the user!", "error");
                                }
                                setModal(null)
                            }
                                // eslint-disable-next-line no-unused-vars
                            catch (e) {
                                toastState.addToast(`An error occurred while creating a new newsletter, please try again later!`, "error");
                            }
                        }
                    },
                    {
                        text: "No",
                        icon: < XCircleIcon className="w-7 h-7 my-auto mx-1 shrink-0"/>,
                        onClick: () => { setModal(null) }
                    },
                ]
            }
        )
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
                        <th scope="col" className="px-6 py-4 drop-shadow-sm">
                            Manually Unsubscribe
                        </th>
                    </tr>
                    </thead>
                    <tbody className="w-full place-content-center place-items-center text-center overflow-scroll">
                    {subs.map((sub, index) => (
                        <tr key={index} className="border-t border-slate-200 even:bg-gray-100 text-left">
                            <th scope="row" className="px-6 py-4 font-medium text-body whitespace-nowrap">{sub.email}</th>
                            <td className="px-6 py-4 drop-shadow-sm">{sub.name}</td>
                            <td className="px-6 py-4 drop-shadow-sm">{sub.date_joined}</td>
                            <td
                                onClick={async () => await unsub(sub.unsubscribe_secret)}
                                className="px-6 py-4 drop-shadow-sm flex items-center justify-center mx-auto">
                                <button className={`rounded-full bg-[#cc4444] text-white font-medium py-2 px-4 mx-auto`}>
                                    Un-Sub
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default NewsletterSubscribers