import React, { Component } from "react";
// import API from "../utils/API";
import Container from "../../components/Container";
import "../../contact.json";
import "./style.css";

// const style = {
//   style: {
//     borderRadius: "5px"
//   },
//   submitButton: {
//     textAlign: "right"
//   }  
// }

class Contact extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">test</h1>
          <main>
      <div className="container-fluid">
        <article className="socialmedia">
          <div className="row articleHeading">
            <div className="col-12"><h3>Follow Me</h3></div>
          </div>    

          <div className="row" id="feature">   
            <div className="col-1"></div>
            <div className="col-2">
              <a href="https://github.com/margaretseiche" target="_blank" rel="noopener noreferrer">
                <img id="social" src=".../%PUBLIC_URL%/assets/socialmedia/Github-gray.png" alt="Github link" title="Github link"/>
              </a>  
            </div> 
            <div className="col-2">
              <a href="https://www.linkedin.com/in/margaret-seiche-06451743/" target="_blank" rel="noopener noreferrer">
                <img id="social" src=".../%PUBLIC_URL%/assets/socialmedia/LinkedIn-gray.png" alt="LinkedIn" title="LinkedIn"/>
              </a>       
            </div>
            <div className="col-2">
              <a href="mailto:margaretseiche@hotmail.com" target="_blank" rel="noopener noreferrer">
                <img id="social" src=".../%PUBLIC_URL%/assets/socialmedia/Email-gray.png" alt="Email address" title="Email address"/>
              </a>                 
            </div>
            <div className="col-2">
              <a href="https://www.facebook.com/margaret.seiche/" target="_blank" rel="noopener noreferrer">
                <img id="social" src=".../%PUBLIC_URL%/assets/socialmedia/Facebook-gray.png" alt="Facebook link" title="Facebook link"/>
              </a>       
            </div>
            <div className="col-2">    
              <a href="https://www.instagram.com/margaretseiche/" target="_blank" rel="noopener noreferrer">
                <img id="social" src=".../%PUBLIC_URL%/assets/socialmedia/Instagram-gray.png" alt="Instagram link" title="Instagram link"/>
              </a>            
            </div>
          </div>  
      </article>


      
      {/* <article className="email">
        <div className="row articleHeading">
          <div className="col-md-12"><h3>Or Email Me</h3></div>
        </div>
        
        <div className="row" id="feature">            
          <form action="mailto:margaretseiche@hotmail.com" enctype="text/plain">
            <div id="form" className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
                </div>
                <div className="form-group">
                  <label for="subjectLine">Subject</label>
                  <input type="text" className="form-control" id="subjectLine"/>
                </div>
              </div>  
                <div className="col-md-6">
                  <div className="form-group">    
                    <br/>            
                    <textarea rows="5" cols="80" name="comment" form="usrform" style="border-radius: 5px;">
                      Enter text here...</textarea>
                  </div>
                </div>  
            </div>
            <div className="row">
              <div className="col-md-6">
                <button type="submit" className="btn btn-primary" style={style.submitButton}>Submit</button>
              </div>
            </div>
          </form>    
        </div> 
      </article>    */}
    </div>
    </main>
        </Container>
      </div>
    );
  }
}

export default Contact;
