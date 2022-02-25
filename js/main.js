const navbar = () => {
  return `    <nav class="nav-bar">
  <div class="logo">
     <h1>Tepela.</h1>
  </div>
  <div class="nav-links">
      <ul>
          <li>
              <a href="./pages/skills.html">skills</a>
          </li>
          <li>
              <a href="/">about</a>
          </li>
          <li>
              <a href="./pages//Projects.html">projects</a>
          </li>
          <l1>
              <a href="./pages/contact.html">contacts</a>
          </l1>
      </ul>
  </div>
</nav>`
}
const footer = () => {
  return `    <footer>
  <ul>
      <li>
          <a href="">Github</a>
      </li>
      <li>
          <a href="">Email</a>
      </li>
      <li>
          <a href="">Stackoverflow</a>
      </li>
      <li>
          <a href="">Linkedin</a>
      </li>
      <li>
          <a href="">Instagram</a>
      </li>
      <li>
          <a href="">Twitter</a>
      </li>
  </ul>
  <p>All rights Reserved &copy; 2022
      <a href="">The black hut guy</a>
  </p>
</footer>`
}
document.getElementById("nav").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()
