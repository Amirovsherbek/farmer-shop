<template>
    <footer class="footer">
      <div class="container">
        <div class="company-info">
          <Logo/>
          <p class="company-name">Thomas Global</p>
        </div>
        <nav class="navigation">
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div class="contact">
          <p>Melbourne VIC 3000</p>
          <p><a href="tel:13001234444">1300 123 4444</a></p>
          <p><a href="mailto:info@thomasglobal.com">info@thomasglobal.com</a></p>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; {{ year }} Thomas Global. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f1f1f1;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1024px;
    margin: 0 auto;
  }
  
  .company-info,
  .navigation,
  .contact {
    flex: 1;
  }
  
  .company-info {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 50px; /* Adjust as needed */
    margin-right: 1rem;
  }
  
  .company-name {
    font-weight: bold;
  }
  
  .navigation {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .navigation li {
    margin-bottom: 1rem;
  }
  
  .contact p {
    margin-bottom: 0.5rem;
  }
  
  .copyright {
    text-align: center;
    width: 100%;
  }
  </style>
  