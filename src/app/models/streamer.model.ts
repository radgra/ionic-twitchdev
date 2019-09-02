import { StreamTwitch } from './stream-twitch.model';
import { UserTwitch } from './user-twitch.model';
import { StreamerFirebase } from './streamer-firebase.model';

export interface Streamer {
    name:string;
    firebase:StreamerFirebase,
    user?:UserTwitch
    stream?:StreamTwitch
}