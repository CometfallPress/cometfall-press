let csrfToken = null;
let csrfReady = null;

export function initCSRF() {
	if (!csrfReady) {
		csrfReady = fetch(`${import.meta.env.VITE_API_URL}/csrf`, {
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				csrfToken = data.csrf_token;
				return csrfToken;
			});
	}
	return csrfReady;
}

export async function api(path, options = {}) {
	await initCSRF();

	const method = options.method || "GET";
	const headers = {
		...(method !== "GET" ? { "Content-Type": "application/json" } : {}),
		...(csrfToken && method !== "GET" ? { "X-CSRFToken": csrfToken, "X-CSRF-Token": csrfToken } : {}),
	};

	const res = await fetch(`${import.meta.env.VITE_API_URL}${path}`, {
		method,
		headers,
		credentials: "include",
		body: options.body,
	});

	const data = await res.json();
	if (data.redirect_to) {
		window.location.replace(`${import.meta.env.VITE_REDIRECT_URL}${data.redirect_to}`);
	}
	return { res, data };
}