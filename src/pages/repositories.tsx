import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import api from '../services/api'
import Card from '../components/card'
import { Repo } from '../types/repo'
import { Container } from '../styles/pages/repositories'

export default function Repositories () {
    const [repositories, setRepositories] = useState<Repo[]>([])

    const { username } = useParams()

    useEffect(() => {
        api.get(`${username}/repos`).then((res) => setRepositories(res.data))
    }, [])

    return (
        <Container>
            {repositories.map((repo) => <Card key={repo.id} repo={repo} />)}
        </Container>
    )
}
