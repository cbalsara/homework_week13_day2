var React = require('react');


var SongDetail = function(props){
  return (
  <div 

  className='song-details'>
  <h1>"Hello This is a test!"</h1>
  <p>Title: {props.title}</p>
  <p>Artist: {props.artist}</p>
  <p>Image: {props.image}</p>
  

  </div>
  );
};
module.exports = SongDetail;