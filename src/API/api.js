import axios from 'axios'
const COMPANY_DOMAIN = 'none65'
const TOKEN = process.env.REACT_APP_TOKEN

export const API = axios.create({
  baseURL: `https://${COMPANY_DOMAIN}.pipedrive.com/api/v1`,
  params: {
    api_token: TOKEN
  }
})