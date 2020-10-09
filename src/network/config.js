const DEV_BASEURL = "http://www.httpbin.org/"
const PRO_BASEURL = "http://skyxxxxxx"

export const BASEURL = process.env.NODE_ENV === 'development'? DEV_BASEURL: PRO_BASEURL;
export const TIMEOUT = 5000