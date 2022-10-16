import { Component } from "react";

function NoLoggedNavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top" aria-label="Offcanvas navbar small">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">Fiverr</a>
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <a class="nav-link active"  id="offcanvasNavbar2Label" href="/home"><h1>Fiverr</h1> </a>
            <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/explore">Explore</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/sign-in">Log in</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/join">Join</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
function LoggedNavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light" aria-label="Offcanvas navbar small">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">Fiverr</a>
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Fiverr</h5>
            <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/explore">Explore</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/favoritos">Favoritos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/buzon">Buzon</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/perfil">Mi perfil</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default class navBar extends Component {
  constructor(props) {
    super(props);
    this.logged = props.logged;

  }
  render() {
    if(this.logged){
      return <LoggedNavBar/>
    }else{
      return <NoLoggedNavBar/>
    }
  }


}