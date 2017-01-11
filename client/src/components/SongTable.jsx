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
            a={music['im:artist'].label} 
            i={music['im:image'][2].label}
            />
          );
        })}
    </div>
  );
};
module.exports = SongTable;