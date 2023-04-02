import { Link, animateScroll as scroll } from 'react-scroll'

function Footer({changeState}) {

  function openBar(e) {
    if (e.target.innerHTML === 'SYSTEMIAI' || e.target.innerHTML === "Let's Think System."){
      changeState('Home');
    }else{
      changeState(e.target.innerHTML);
    }
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");  
  }

  return (
    <footer>
      <div className="container">
        <div className="row"  style={{alignItems:"center"}}>
         
          <div className="col-md-3" style={{display:"flex"}}>
          <img className= "" width = "100px" height = "100px"
        src={require("../public/img/Systemiai 07.png")}></img>
          <ul className="bar">
            <li>
              <Link
                className="footer-title"
                onClick={openBar}
                to="mainBody"
                spy={true}
                smooth={true}
                duration={1000}
              
              >
              <h1 className="logo">SYSTEMIAI</h1>
              <i className="footer-text">
              Let's Think System.
              </i>
              </Link>
            </li>
            </ul>
          </div>
        

          <div className="text-center">
             <p>Systemiai Inc. All rights reserved © 2023</p>
          </div>

              <div className="col-md-3 contactFoot">
                <Link  className="footer-title"
                          onClick={openBar}
                          spy={true}
                          smooth={true}
                          duration={1000}
                          to="mainBody"
                    > Contact</Link>
                <a href = "mailto:contact@systemiai.info">contact@systemiai.com</a>
                <br></br>
                <a href = "https://twitter.com/systemiai">twitter</a>
                
                <a href = "http://instagram.com/systemiai.inc">instagram</a>
              
                <a href = "https://www.linkedin.com/company/systemiai/">LinkedIn</a>

              </div>
              
            </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
