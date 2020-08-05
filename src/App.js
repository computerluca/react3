import React from 'react'
class Drum extends React.Component
{
  constructor(props){
    super(props);
    this.state = {DrumData:[{
      "drum_mode":"1","type":"Q","file":"audio1.mp3","description":"Heater 1"
  },{"drum_mode":"1","type":"W","file":"audio1.mp3","description":"Heater 2"},
  {
      "drum_mode":"1","type":"E","file":"audio1.mp3","description":"Heater 3"
  },{"drum_mode":"1","type":"A","file":"audio1.mp3","description":"Heater 4"},
  {
      "drum_mode":"1","type":"S","file":"audio1.mp3","description":"Clap"
  },{"drum_mode":"1","type":"D","file":"audio1.mp3","description":"Open hh"},
  {
      "drum_mode":"1","type":"Z","file":"audio1.mp3","description":"Kikn hat"
  },{"drum_mode":"1","type":"X","file":"audio1.mp3","description": "hat"},
  {
      "drum_mode":"1","type":"C","file":"audio1.mp3","description":"close hh"
  
  },{"drum_mode":"2","type":"Q","file":"audio1.mp3","description":"prova1"},
  {"drum_mode":"2","type":"W","file":"audio1.mp3","description":"prova2"},
  {
      "drum_mode":"2","type":"E","file":"audio1.mp3","description":"prova3"
  },{"drum_mode":"2","type":"A","file":"audio1.mp3","description":"prova4"},
  {
      "drum_mode":"2","type":"S","file":"audio1.mp3","description":"Open hh2"
  },{"drum_mode":"2","type":"D","file":"audio1.mp3","description":"Kikn hat2"},
  {
      "drum_mode":"2","type":"Z","file":"audio1.mp3","description":"Hat"
  },{"drum_mode":"2","type":"X","file":"audio1.mp3","description": "close hh3"},
  {"drum_mode":"2","type":"X","file":"audio1.mp3","description": "close hh4"}
  ]
  ,on:"false","drum_mode":"1","status":"","volume":40,"audio":"null"};
  this.setOn = this.setOn.bind(this);
  this.setMode = this.setMode.bind(this);
  this.play = this.play.bind(this);
  this.changeVolume = this.changeVolume.bind(this);
  }
  filter(){
    var container = this;
    return this.state.DrumData.filter(function(e){

      return (e.drum_mode===container.state.drum_mode)
    })
  }
  
  mapDiv(arr){
    
    return  arr.map ((e)=>{
    return <button type="button" className="drum-pad" id={e.file} onClick={this.play} onKeyDown={this.play}>{e.type}<audio src={e.file} className="clip"  id={e.type} /></button>
    });
  }
  changeVolume(evt){
    this.setState ({volume:evt.target.value})
  }
  play(evt){
    let result = "";
    
    if(this.state.on){
      if(evt.target.textContent){
              result=
         this.filter().filter(function(e){
             return evt.target.textContent === e.type
      })[0]
    }
      
       
    }
    if(evt.target.keyPressed){
      result = this.filter().filter(function(e){
        return evt.target.keyPressed === e.type
 })[0]

    }
    let audio = document.getElementById(result.type);
      audio.play();
      this.setState ({
        status:result.description
  
      })
    }

  
  
  setOn(){
    this.setState({
      on:!this.state.on
    })
  }
  setMode(){
    if(this.state.on){
      if(this.state.drum_mode==="1"){
      this.setState({
        drum_mode:"2"
      })
    }
    else{
      this.setState({
        drum_mode:"1"
      })
    }
  }
}
  render(){
    return(
    <div id="drum-machine">
      <input type="range" value={this.state.volume}  min= '0' max = '100' onChange={this.changeVolume} step="1" />
      <button type="button" onClick={this.setOn}>{this.state.on?"acceso":"spento"}</button>
      <button type="button" onClick={this.setMode}>{this.state.drum_mode}</button>
    <div id="drum-grid">
    {this.mapDiv(this.filter())}
    <div id="display">{this.state.status}</div>
        </div>
    </div>);
  }
}
export default Drum;

