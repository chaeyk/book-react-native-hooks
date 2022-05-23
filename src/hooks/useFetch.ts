import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T>();
	const [error, setError] = useState<any>(null);
	const [inProgress, setInProgress] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setInProgress(true);

				const res = await fetch(url);
				const result = await res.json();
				console.log(JSON.stringify(result, null, '  '));
				if (res.ok) {
					setData(result);
					setError(null);
				} else {
					console.log(JSON.stringify(result));
					throw result;
				}
			} catch (e) {
				setError(e);
			} finally {
				setInProgress(false);
			}
		}
		fetchData();
	}, []);

	return { data, error, inProgress };
};
