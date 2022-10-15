import './landingPage.css'

const Home = () => {
    return (
      <div name='home'>   
          <div class="d-flex align-items-center justify-content-center landName row"> 
          <div class="col-sm"></div>
          <div class="col-sm">
            <div class="row">
              <div class = "col-sm">
              </div>
              <div class = "col-sm">
                    <h1 class="w-75 pb-4">Art is not what you see, but what you make <i> others </i> see.</h1>
                        <div class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                  </span>
                  </div>
                  <div class="flex my-4 row">
                    <div class="col-3">
                    <p><strong> Popular: </strong></p>

                    </div>
                    <div class="col-lg container-fluid">

                    <span class="landingTextSpan">Disney</span>
                    <span class="landingTextSpan">Dragon Ball</span>
                    <span class="landingTextSpan">Tokyo Ghoul</span>

                    </div>
                    

                  </div>
              </div>
              <div class = "col-sm">

              </div>
            </div>
          </div>
          <div class="col-sm"></div>

          </div>
      </div>
    );
  }
  
  export default Home;