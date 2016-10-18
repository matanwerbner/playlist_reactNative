const _makeActivity = (id) => {
    return {
        id,
        user: {
            name: "matan",
            id: 5
        },
        track: {
            title: "Bert yountch stuff",
            id: 9,
            thumbnail: "https://facebook.github.io/react/img/logo_og.png",
        },
        group: {
            name: "hod hasharon coolShit",
            id: 5
        }
    }
}

module.exports = {
    "recentActivity": [_makeActivity(1),_makeActivity(2),_makeActivity(3),_makeActivity(4)
    ,_makeActivity(5),_makeActivity(6),_makeActivity(7),_makeActivity(8),_makeActivity(9),
    _makeActivity(10),_makeActivity(11),_makeActivity(12)]
}
