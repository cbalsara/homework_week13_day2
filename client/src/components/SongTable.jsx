var React = require('react');
var SongDetails = require('./SongDetails.jsx');

var SongTable = function(props){
  return (
    <div>
      {props.musicInfo.map(function(music, index){
        return(
            <SongDetails
            key={index} 
            theTitle={music["im:name"].label} 
            perfomer={music['im:artist'].label} 
            randomName={music['im:image'][2].label}
            itunesLink={music['link'][0].attributes.href}
            />
          );
        })}
    </div>
  );
};
module.exports = SongTable;

