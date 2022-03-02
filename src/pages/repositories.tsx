import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import api from '../services/api'
import Card from '../components/card'

interface Repo {
    id: number
    name: string
}

export default function Repositories () {
    const [repositories, setRepositories] = useState<Repo[]>([])

    const { username } = useParams()

    useEffect(() => {
        api.get(`${username}/repos`).then((res) => setRepositories(res.data))
    }, [])

    return (
        <div>
            {repositories.map((repo) => <Card key={repo.id} repo={repo} />)}
        </div>
    )
}
