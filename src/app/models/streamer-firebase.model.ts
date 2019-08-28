export interface StreamerFirebase {
    id?: string
    name:string;
    display_name:string
    twitch_id:string;
    rating?:number;
    tags?:string[]
    type: 'dev' | "game"
}