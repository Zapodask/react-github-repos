export interface Repo {
    id: number
    name: string
    description: string
    language: string
    owner: {
        login: string
    }
}
