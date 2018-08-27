const axios = require('axios')

module.exports = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
});