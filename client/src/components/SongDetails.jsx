var React = require('react');


var SongDetail = function(props){
  return (
  <div 

  className='song-details'>
  
  <h3>{props.title}</h3>
  <h3>{props.artist}</h3>
  <img src={props.image}/>
  </div>
  );
};
module.exports = SongDetail;