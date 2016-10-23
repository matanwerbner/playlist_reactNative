const devKey = 'AIzaSyAf9kPR8KvRmdNZ4kUZ5BDQJdEhGhs964Y';

const getGapiUrl = (text, key) => {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${text}&type=video`;
} 
    ''

export default {
    getSuggestions: (text) => {
        return fetch(getGapiUrl(text, devKey)).then((response) => response.json());
    }
}