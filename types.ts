export interface IPost {
    id?: number
    title: string
    body: string
    image: string
}

export interface IComment {
    comId?: number
    id: string
    nickname: string
    text: string
}