var React = require('react');
var SongDetail = require('../components/SongDetails');

var MusicContainer = React.createClass({
  getInitialState: function() {
    return{
      musicInfo: []
    };
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({
        musicInfo: data
      });
    }.bind(this);
    request.send();
  },

  render: function (){
    return(
    <div className ='music-container'>
    <h3> Music Information </h3>
    <SongDetail/> 

    </div>
    )
  }


});

module.exports = MusicContainer;

