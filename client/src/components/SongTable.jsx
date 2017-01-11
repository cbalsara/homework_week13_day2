var React = require('react');
var SongDetail = require('./SongDetails');

var SongTable = React.createClass({
  getInitialState: function(){
    return{ selectedIndex: undefined };
  },

  render: function (){
    var songsList = this.props.musicInfo.map(function(music, index){

      console.log(music);

      return (
        <musicInfo key={index} title={music["im:name"]["label"]} artist={music['im:artist']['label']} picture={music['im:image']['label']}/>
        )
    });
  return (
    <div 
     id="musicInfo"
    >
      {songsList}
    </div>
    );
  }
});


  

module.exports = SongTable;