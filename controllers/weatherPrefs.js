import { WeatherPref } from '../models/weatherPref.js'
import { Profile } from '../models/profile.js'
import axios from 'axios'

const BASE_URL = `http://api.weatherapi.com/v1`

function getCurrent(req, res) {
  axios.get(`${BASE_URL}/current.json?key=${process.env.WEATHER_APIKEY}&q=${req.params.location}`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function getHourly(req, res) {
  axios.get(`${BASE_URL}/forecast.json?key=${process.env.WEATHER_APIKEY}&q=${req.params.location}&days=1&aqi=no&alerts=no`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function getDaily(req, res) {
  axios.get(`${BASE_URL}/forecast.json?key=${process.env.WEATHER_APIKEY}&q=${req.params.location}&days=3&aqi=no&alerts=no`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function getWeatherPref(req,res) {
  Profile.findById(req.user.profile)
  .populate('weather')
  .then(pref=>{
    res.json(pref)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  getCurrent,
  getHourly,
  getDaily,
  getWeatherPref
}