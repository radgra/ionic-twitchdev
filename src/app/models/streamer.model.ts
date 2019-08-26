export interface Streamer {
    id: string
    user_id: string,
    user_name: string,
    game_id?: string,
    type?: string,
    title?: string,
    viewer_count?: number,
    started_at?: string,
    language?: string,
    thumbnail_url?: string,
    tag_ids?: string[]
    rating?:number;
    last_streamed?:Date
    is_live:boolean
}