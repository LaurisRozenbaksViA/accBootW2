import React from 'react';
import MoreButton from './more_button.jsx';

class Bio extends React.Component{
  render(){
    return (
      <div className="bio-cont">
        <h1 className="bio-title">bio</h1>
        <text className = "bio-exerpt">
          Born September 23, 1926 in Hamlet, North Carolina, John Coltrane was always surrounded by music. His father played several instruments sparking Coltrane’s study of E-flat horn and clarinet. While in high school, Coltrane’s musical influences shifted to the likes of Lester Young and Johnny Hodges prompting him to switch to alto saxophone. He continued his musical training in Philadelphia at Granoff Studios and the Ornstein School of Music. He was called to military service during WWII, where he performed in the U.S. Navy Band in Hawaii.<br/>After the war, Coltrane began playing tenor saxophone with the Eddie "CleanHead" Vinson Band, and was later quoted as saying, "A wider area of listening opened up for me. There were many things that people like Hawk, and Ben and Tab Smith were doing in the ‘40’s that I didn’t understand, but that I felt emotionally." Prior to joining the Dizzy Gillespie band, Coltrane performed with Jimmy Heath where his passion for experimentation began to take shape. However, it was his work with the Miles Davis Quintet in 1958 that would lead to his own musical evolution. " Miles music gave me plenty of freedom," he once said. During that period, he became known for using the three-on-one chord approach, and what has been called the ‘sheets of sound,’ a method of playing multiple notes at one time.
        </text>
        <MoreButton />
      </div>
    );
  }
}
export default Bio;
