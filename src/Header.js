import React from 'react'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark " data-bs-theme="dark" >
  <div className="container-fluid" style={{ alignItems: 'center' ,
        justifyContent: 'center'}}>
    <a className="navbar-brand " href="#">Enter your Daily Goals</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    </div>
  )
}

export default Header
