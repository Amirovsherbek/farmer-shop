export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.headers={
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning':'true'
        }        
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
  }