const fetch = require('node-fetch');

const apiOptions = {
    server: 'https://api.giphy.com/v1/gifs/'
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://myserver.domain.com'
}

module.exports = {

    search: async (query, limit, offset) => {

        if (!limit) limit = 25;
        if (!offset) offset = 0;

        let response = await fetch(
                apiOptions.server + "search?api_key=" + process.env.GIPHY_API_KEY +
                "&q=" + query + "&limit=" + limit + "&offset=" + offset + "&rating=g&lang=en", {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
        let json = await response.json()
        return json;

    },

    getRandomGif: function () {

    },

    getTrendingGifs: function (limit) {

    },

    getGifById: function () {

    }
}