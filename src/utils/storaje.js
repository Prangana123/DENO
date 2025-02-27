import { CONFIG } from "./config";

export function getLikes(){
    return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.LIKES)) || {};
    console.log(data);
    return data;
}

export function toggleLike(postId) {
    const likes = getLikes();
    const newLikes = {...likes, [postId]: !likes[postId] }
    localStorage.setItem(CONFIG.STORAGE_KEYS.LIKES, JSON.stringify(newLikes));
    return newLikes;
}

/*export const CONFIG = {
    API_URL: 'https://jsonplaceholder.typicode.com'
    STORAGE_KEYS: {
        LIKES: 'social-network-likes'
    }
}*/