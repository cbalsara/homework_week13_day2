var React = require('react');


var SongDetail = function(props){
  return (
    <div className='song-details'>
      <h3>{props.theTitle}</h3>
      <h3>{props.performer}</h3>
      <a onClick={props.handleClick} href={props.itunesLink}>
        <img src={props.randomName}/>
      </a>
    </div>
  );
};
module.exports = SongDetail;

