import Card from "./Card";
function Program() {



    return (
      <>
  
    {/*
        <div style={{marginTop:'5rem',width:'100%',height:'10px'}} className="about-scroll"></div>
   
    
        <div className="container about ">
          <div className="row appmodel">
            
              <h2 className="main-title about-h2">Approach Model</h2>
              <img alt="about" width="300px" height="100px" src={require("../public/img/Appmodel.png")} className="img-fluid1" />

         
          </div>
        </div>
  
        <div className="container about">
            <div className="col-md-9">
            <h2 className="main-title about-h2">Business Model Research</h2>
                <div className="row">

                    <div className="col-md-4 mb-2">
                      <Card title="Research" img="card3.png" text="We focus our research on technical market trends. " />
                    </div>
                    <div className="col-md-4 mb-2">
                      <Card title="Abstraction" img="card2.png" text="We believe that people need more products that add value to their existing need." />
                    </div>
                    <div className="col-md-4 mb-2">
                      <Card title="Constructing" img="card1.png" text="Easy to use." />
                    </div>
                </div>
            </div>
        </div>

        <div className="container about">
          <div className="row" style ={{display:"block"}}>
           
           
              <h2 className="main-title about-h2">Our Projects</h2>
              <p className="main-p">
              <b><span className="pad">1-PADAUS</span></b> (PREDICTIVE ANALY TICAL DATA ACCESSIBILITY USER SYSTEM).
              <br></br>
              <br></br>
              This project aim is to optimize the way we commute by making use of available technologies on the market which we can harness to provide safer and more efficient commutes for drivers and users of public and private transportation.
              <br></br>
              <br></br>Status: In development.
              </p>
              <p className="main-p">
              <b><span className ="bio">2- Biomesys</span></b>
              <br></br>
              <br></br>
              A medical AI service tool for EME data and Triage system.
              <br></br>
              <br></br>Status: In development.

              </p>
              <p className="main-p">
              <b><span className = "ron">3- Ronnect</span></b>
              <br></br>
              <br></br>
              A system that provides great shopping experience to consumers and retailers.           
              <br></br>
              <br></br>Status: In development.

              </p>
            </div>
          
        </div>
    */}
        <div className="container about">
          <div className="row" style ={{display:"block"}}>
            
          
              <h2 className="main-title about-h2">SIPA Program Division</h2>
         
              <h3 style = {{fontSize:"35px"}}>Overview</h3>
         
              <p style = {{fontSize:"22px", fontWeight: "500"}}>SIPA is a program division of Systemiai that focuses on engaging in academic research, innovation, and experiential learning. Our ecosystem comprises faculty members, experts, and students.</p>
             
              <h3 style = {{fontSize:"35px"}}>Our Values</h3>

         

              <p style = {{fontSize:"22px", fontWeight: "500"}}>We have a strong focus on today's societal advancement success that empowers innovation and technology by ensuring these resources are best positioned to support and enhance SIPA's aim and its partners and impact communities.</p>
              <br></br>
             {/*<a className = "sipa" href="/documents/SIPA Program Division.pdf"
              target="_blank" download="SIPA.pdf" >Download document here.</a>*/}
              <p className = "sipa">Interested in collaborating
               with us or in one of our positions at SIPA?</p>
              <p className = "sipa"> Please tell us about your 
               interest by sending an email to <a style = {{color:"black"}}href = "mailto:contact@systemiai.info"
                >contact@systemiai.com</a>.</p>
          </div>
        </div>
  
      </>
    );
  }
  export default Program;
  