import React from 'react';
import MoreButton from './more_button.jsx';
import SimpleSlider from './slider';
class Disco extends React.Component{

  render(){
    return (
      <div className="disco-cont">
        <h1 className="disco-title">discography</h1>
          <SimpleSlider />
        <MoreButton />
      </div>
    );
  }
}
export default Disco;
