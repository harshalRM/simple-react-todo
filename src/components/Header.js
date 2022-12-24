import React from 'react'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white border border-2 shadow" >
        <div className="container-fluid py-2">
          <img src="/Images/Blue 4 (1).png" alt="Logo" width="60" height="60" className="d-inline-block align-text-top me-4" />
          <a className="navbar-brand" href="/">Archslate</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-2">
                <img src="/Images/icon.png" alt="Logo" width="30" height="25" className="d-inline-block align-text-top  ms-4 fw-bold" />
                <a className="nav-link" aria-current="page" href="/">Candidates</a>
              </li>
              <li className="nav-item px-3">
                <img src="/Images/icon2.png" alt="Logo" width="25" height="25" className="d-inline-block align-text-top  ms-4 fw-bold" />
                <a className="nav-link" href="/">Companies</a>
              </li>
              <li className="nav-item px-3">
                <img src="/Images/icon3.png" alt="Logo" width="25" height="25" className="d-inline-block align-text-top  ms-3 fw-bold" />
                <a className="nav-link" href="/">Jobs</a>
              </li>
              <li className="nav-item px-3">
                <img src="/Images/icon4.png" alt="Logo" width="25" height="25" className="d-inline-block align-text-top  ms-5 fw-bold" />
                <a className="nav-link" href="/">Notifications</a>
              </li>
              <li className="nav-item px-3">
                <img src="/Images/icon5.png" alt="Logo" width="28" height="26" className="d-inline-block align-text-top  ms-4 fw-bold" />
                <a className="nav-link" href="/">User Name</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header