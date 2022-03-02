interface Props {
    repo: {
        id: number
        name: string
    }
}

export default function Card ({ repo: { id, name } }: Props) {
    return (
        <div>
            {id}
        </div>
    )
}
