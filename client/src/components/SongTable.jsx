var React = require('react');
var SongDetails = require('./SongDetails.jsx');

var SongTable = function(props){
  return (
    <div>
      {props.musicInfo.map(function(music, index){
        return(
            <SongDetails
            key={index} 
            title={music["im:name"].label} 
            artist={music['im:artist'].label} 
            image={music['im:image'].label}
            />
          );
        })}
    </div>
  );
};
module.exports = SongTable;