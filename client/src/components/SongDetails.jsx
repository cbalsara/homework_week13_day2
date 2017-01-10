var React = require('react');

var SongDetail = function(props){
  return (
  <div className='song-details'>
  <h1>"Hello"{props.name}</h1>
  </div>
  )
}
module.exports = SongDetail