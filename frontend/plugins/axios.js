export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.headers={
            "username": "11165272",
            "password": "60-dayfreetrial"
        }        
    })
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
  }