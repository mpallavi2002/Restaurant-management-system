// home.component.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to our Restaurant</h2>

      {/* Buttons */}
      <div className="text-center mb-4">
        <Link to="/Recipes" className="btn btn-primary mr-2">
          Search for Recipe
        </Link>
       <hr></hr>
       <hr></hr>
        <Link to="/AddRecipe" className="btn btn-success">
          Add Recipe
        </Link>
      </div>

      {/* Boxes */}
      <div className="row">
        {/* Box 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <Link to="/Recipes">
              <img
                src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*56eVdRktJbnrZJU3cW9X8g.jpeg"
                className="card-img-top"
                alt="Food 1"
              />
            </Link>
            <div className="card-body">
              <div>
                <p>
                 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <Link to="/Recipes">
              <img
                src="https://static.wixstatic.com/media/801f83_63aea72e91484d33969cffcd6b6b0c68~mv2.png/v1/crop/x_0,y_15,w_2600,h_1701/fill/w_776,h_436,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CK%20MENU%20PIC.png"
                className="card-img-top"
                alt="Food 2"
              />
            </Link>
            <div className="card-body">
              <div>
                <p>
                 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <Link to="/Recipes">
              <img
                src="https://as1.ftcdn.net/v2/jpg/02/69/90/64/1000_F_269906443_NURKDipkWirMArVEQWu7RULJZ9EZY1Il.jpg"
                className="card-img-top"
                alt="Food 3"
              />
            </Link>
            <div className="card-body">
              <div>
                <p>
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
