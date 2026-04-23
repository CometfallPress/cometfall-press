import { createContext, useContext } from "react";

export const AppContext = createContext(null);

export function useAppContext() {
	const ctx = useContext(AppContext);
	if (!ctx) throw new Error("useAppContext must be used inside AppContext.Provider");
	return ctx;
}