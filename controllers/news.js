import axios from "axios"

// function getNews(req, res) {
//   axios.get (`https://content.guardianapis.com/search?q=${req.params.search}&api-key=${process.env.NEWS_APIKEY}`)
//   .then(apiResponse => {
//     res.json(apiResponse.data)
//   })
// }

function getNews(req, res) {
  axios.get (`https://newsapi.org/v2/everything?q=${req.params.search}&sortBy=popularity&apiKey=${process.env.NEWS_APIKEY}`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}


export {
  getNews
}