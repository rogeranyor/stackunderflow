
function navBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light" aria-label="Offcanvas navbar small">

      <div class="container-fluid">
        <a class="navbar-brand" href="#a">Fiverr</a>
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
                <a class="nav-link active" aria-current="page" href="#a">Explore</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#a">Join</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navBar;