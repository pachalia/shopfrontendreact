export const getCookies = (name: string): string | null => {
	const value = `; ${document.cookie}`;
	console.log(value);
	const parts = value.split(`; ${name}=`);
	return parts.length === 2 ? parts[1].split(';').shift() || null : null;
};
