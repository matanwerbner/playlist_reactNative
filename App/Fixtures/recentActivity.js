const _makeActivity = (id) => {
    return {
        id,
        user: {
            name: "matan",
            id: 5
        },
        data: {
            type: "youtube",
            track: {
                "kind": "youtube#searchResult",
                "etag": "\"I_8xdZu766_FSaexEaDXTIfEWc0/U0MhmW5mgkuFnbhs4ruQpCxg-JQ\"",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "42Y4mUyWmM0"
                },
                "snippet": {
                    "publishedAt": "2016-09-23T21:25:46.000Z",
                    "channelId": "UCpuvu8mrEO4jxjT6sRwE8tg",
                    "title": "B.o.B - War Witch - Official Video",
                    "description": "A.I.R. mixtape Get it here on http://www.datpiff.com/BoB-AIR-Art-Imitates-Realit" +
                            "y-mixtape.800528.html and follow B.o.B Instagram @Bob Twitter @bobatl AIR is ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/42Y4mUyWmM0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/42Y4mUyWmM0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/42Y4mUyWmM0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "B.o.B",
                    "liveBroadcastContent": "none"
                }
            },
            id: 4
        },
        group: {
            name: "hod hasharon coolShit",
            id: 5
        }
    }
}

module.exports = {
    "recentActivity": [
        _makeActivity(1),
        _makeActivity(2),
        _makeActivity(3),
        _makeActivity(4),
        _makeActivity(5),
        _makeActivity(6),
        _makeActivity(7),
        _makeActivity(8),
        _makeActivity(9),
        _makeActivity(10),
        _makeActivity(11),
        _makeActivity(12)
    ]
}
