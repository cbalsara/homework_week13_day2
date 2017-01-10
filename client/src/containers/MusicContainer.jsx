var React = require('react');
var SongDetail = require('../components/SongDetails');

var MusicContainer = React.createClass({
  getInitialState: function() {
    return{
      musicInfo: []
    };
  },

  render: function (){
    return(
    <div>
    <h3> Music Information </h3>
    </div>
    )
  }


});

module.exports = MusicContainer;

