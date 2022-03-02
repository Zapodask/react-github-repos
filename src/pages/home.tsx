import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../services/api'

export default function Home () {
    const [username, setUsername] = useState<string>('')

    const navigate = useNavigate()

    const findUser = () => {
        api.get(username).then((res) => {
            navigate(username)
        }).catch((err) => {
            if (err.response.status === 404) {
                alert('User not found')
            }
        })
    }

    return (
        <div>
            <div>
                <h2>Pesquisar usuário do github</h2>
                <input type="text" onChange={e => setUsername(e.target.value)} />
                <button onClick={findUser}>Pesquisar</button>
            </div>
        </div>
    )
}
