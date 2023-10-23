import React from 'react'

export default function useFetch(url) {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    const fetchQuote = async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            const json = await res.json()
            setData(json)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        fetchQuote()
    }, [])

    return [data, loading, error]

}
