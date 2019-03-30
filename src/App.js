import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import { isArray } from 'util';

class App extends Component {

  /*constructor(props){
    super.props()
    this.crawl = this.crawl.bind(this)
  }*/


  iterateobj1 = (obj,keyname) => {
    if(isArray(obj)){
      var values = obj
      for(var i in values){
        var ul = document.getElementById("list")
        
        
        if(typeof(values[i]) === 'object' && values[i] != null){
            var li = document.createElement("li")
            li.setAttribute('id',Object.keys(values[i]));
            li.appendChild(document.createTextNode(Object.keys(values[i])));
            ul.appendChild(li);
          console.log("Object keys"+Object.keys(values[i]))
         
          var keyvalue = values[i]
          for(var key1 in keyvalue){
            this.iterateobj1(keyvalue[key1],Object.keys(values[i]))
          }
         
        }
        else {
            var ul1 = document.getElementById(keyname);
            var ul2 = document.createElement("ul");
            ul2.setAttribute('id',values[i])
            ul1.appendChild(ul2)
            var li1 = document.createElement("li")
            li1.setAttribute('id',values[i]);
            li1.appendChild(document.createTextNode(values[i]));
            ul2.appendChild(li1)
          console.log("valuess==="+values[i])
          
        }
        
      }
      
    }
    else{
      console.log("Keys aree===="+Object.keys(obj))
      for(var keys in obj){
        this.iterateobj1(obj[keys])
      }
      
    }
   
  }
  
  crawl =() => {
    var url = document.getElementById("url").value
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    if (!re.test(url)) { 
        alert("url error");
        return false;
    }
    fetch('http://localhost:5000/api')
    .then(results =>{
        console.log("Fetched results"+JSON.stringify(results))
        var json = {
          "foo":[{
            "bar":['xyz','abc']
          },{
            "mno":['about',{"helo":["hello"]}]
          },{
            "contacts":[{
              "has":[{"def":['123']},{"ghi":['456']}]
            }]
          }]
        }
        console.log("Json keys"+Object.keys(json))
        
        for(var key1 in json){

         this.iterateobj1(json[key1])
         
        }
      
    })
}
 crawl1 = () => {
     this.props.history.push('/crawl')
 }
  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <input id="url" type ="url" placeholder="Enter url"/>
          <br/>
          <Button variant="primary" size="lg" onClick={this.crawl}>Crawl Site</Button>
          <ul id="list">
           
        </ul> 
            
          
        </header>
      </div>
    );
  }
}

export default App;
