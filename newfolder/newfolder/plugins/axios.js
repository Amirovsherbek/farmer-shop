export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.headers={
          "ngrok-skip-browser-warning": "69420",
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
        }        
    })
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 403 || code===401) {
        redirect('/')
      }
      else if (code===404){
        redirect('/404')
      }
      else if(code===500){
        redirect('/500')
      }
    })
  }