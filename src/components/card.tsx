import { Repo } from '../types/repo'
import { Container } from '../styles/components/card'

interface Props {
    repo: Repo
}

export default function Card ({ repo: { id, name, description, language, owner: { login } } }: Props) {
    const click = () => {
        window.location.href = `https://github.com/${login}/${name}`
    }

    return (
        <Container onClick={click}>
            <p>Nome: {name}</p>
            <p>Desrição: {description}</p>
            <p>Linguagem utilizada: {language}</p>
        </Container>
    )
}
