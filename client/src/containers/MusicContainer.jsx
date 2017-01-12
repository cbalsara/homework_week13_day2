var React = require('react');
var SongDetail = require('../components/SongDetails');
var SongTable = require('../components/SongTable');

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
      var data = JSON.parse(request.responseText).feed.entry;
      console.log(data);
      this.setState({
        musicInfo: data
      });
    }.bind(this);
    request.send();
  },

  handleClick: function(a){
    a.preventDefault();
  },

  render: function (){
    return(
    <div 

    className ='music-container'>
    <h2> List Of No 1 Hits!</h2>
    <SongTable 
    musicInfo={this.state.musicInfo} 
    handleClick={this.handleClick}
    />

   
    </div>
    );
  }
});

module.exports = MusicContainer;

