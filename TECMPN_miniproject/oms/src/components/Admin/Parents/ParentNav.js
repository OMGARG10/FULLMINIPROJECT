import React from 'react'
export default function ParentNav(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary"  >
  <div class="container-fluid" style={{ backgroundColor:"lightblue"}}>
    <a class="navbar-brand" href="/BeParent">Be a Parent </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Profile">Profile</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/ViewOrphan">View Orphan </a></li>
            <li><a class="dropdown-item" href="/Aboutus">About Us</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/ContactUs">Contact Us</a></li>
          </ul>
        </li>
        <li>
          <a class = "nav-link active" aria-current="page"href="/Donation">Donation</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href = "/BeParent">Logout</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
