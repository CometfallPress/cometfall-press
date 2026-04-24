let csrfToken = null;

export async function initCSRF() {
	const res = await fetch(`${import.meta.env.VITE_API_URL}/csrf`, {
		credentials: "include",
	});

	const data = await res.json();
	csrfToken = data.csrf_token;
}

export async function api(path, options = {}) {
	const res = await fetch(`${import.meta.env.VITE_API_URL}` + path, {
		method: options.method || "GET",
		headers: {
			"Content-Type": "application/json",
			...(csrfToken ? { "X-CSRFToken": csrfToken } : {}),
		},
		credentials: "include",
		body: options.body,
	});

	const data = await res.json();
	if (data.redirect_to) {
		window.location.replace(`${import.meta.env.VITE_REDIRECT_URL}${data.redirect_to}`);
	}
	return { res, data }
}