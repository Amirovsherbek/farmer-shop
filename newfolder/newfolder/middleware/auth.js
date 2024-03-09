export default function ({ store, redirect, isClient }) {
    if (isClient) {
      const token = localStorage.getItem("access_token"); 
      if (!token) {
        return redirect('/login');
      }
      else{
        this.$router.push('/admin')
      }
    }
  }
  