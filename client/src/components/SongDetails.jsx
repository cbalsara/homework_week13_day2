var React = require('react');


var SongDetail = function(props){
  return (
  <div 

  className='song-details'>
  
  <h3>{props.title}</h3>
  <h3>{props.a}</h3>
  <img src={props.i}/>
  </div>
  );
};
module.exports = SongDetail;