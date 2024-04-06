import { useEffect, useState } from 'react'

function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState<string>(value)

	useEffect(() => {
		const t = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(t)
		}
	}, [value, delay])
	return debouncedValue
}

export default useDebounce
