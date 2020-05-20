import React from 'react';


import './Community.css';



class Community extends React.Component {
  render(){
    return (

            <div className="community-container">
                <div className="community-titles">
                    <h1>Community</h1>
                    <p> VIEW ALL POSTS </p>
                </div>

                <div className="community-pictures">

                  <div className="community-col1">
                    <div className="col1-imagen"></div>
                    <div className="col1-texto">
                      <p className="category">JOURNAL</p>
                      <h2>CREATIVES WORKING </h2>
                      <p className="parrafo">Creatives Working From Home Madison Isbell, Florist As the whole world goes into lockdown it can be a tough time for freelancers working in the creative industry,...</p>
                      <button> READ MORE </button>
                    </div>

                  </div>

                  <div className="community-col2">
                    <div className="col2-imagen"></div>
                    <div className="col2-texto">
                      <p className="category">$CO</p>
                      <h2>GRANT EVANS</h2>
                      <p className="parrafo">‘&Co’ features the people that embody everything P&Co believes in- Riders, surfers, skaters, tattoo artists & creatives. ‘Live The Life Less Boring’ GR...</p>
                      <button> READ MORE </button>
                    </div>

                  </div>

                </div>

            </div>
    );
  }

}

export default Community;
