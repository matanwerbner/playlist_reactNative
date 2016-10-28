export default(item) => {
    const {
        snippet: {
            title,
            thumbnails: {
                default: {
                    url
                }
            }
        }
    } = item;
    return {title, thumbnailUrl: url}
}