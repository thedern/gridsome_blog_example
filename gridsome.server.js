// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })
//
//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }

// provides interaction with external API
///// WATCH THE EXAMPLE, DO WITH THE REDIT API PER TUTORIAL AND REDO WITH COSMIC
// see datastore API in gridsome docs

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get("https://www.reddit.com/r/aww.json?raw_json=1")
    console.log('data is ', data)

   const collection = actions.addCollection('RedditPost')

    // edited for the structure of the reddit json
    for (const post of data.data.children) {
      collection.addNode({
        id: post.data.id,
        title: post.data.title,
        path: '/reddit/' + post.data.id,
        thumbnail: post.data.thumbnail,
        img: post.data.preview
      })
    }
  })
}
