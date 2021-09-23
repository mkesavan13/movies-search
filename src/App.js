import React from "react";
import HelloWorld from "./Components/HelloWorld/index.jsx";
import Counter from "./Components/Counter";
import SearchBox from "./Components/SearchBox";

function App() {
  let movieList = [{
    "id":1,
    "name": "Spiderman: Home coming",
    "genre": ["Super Hero", "Action"],
    "year": "2017"
  },{
    "id":2,
    "name": "The Intern",
    "genre": ["Drama", "Feel Good"],
    "year": "2015"
  },{
    "id":3,
    "name": "Forrest Gump",
    "genre": ["Drama", "Feel Good", "Action"],
    "year": "1994"
  },{
    "id":4,
    "name": "Captain America - Civil War",
    "genre": ["Super Hero", "Action"],
    "year": "2016"
  },{
    "id":5,
    "name": "Taken 1",
    "genre": ["CIA", "Action"],
    "year": "2008"
  },{
    "id":6,
    "name": "Taken 2",
    "genre": ["CIA", "Action"],
    "year": "2012"
  },{
    "id":7,
    "name": "Taken 3",
    "genre": ["CIA", "Action"],
    "year": "2014"
  },{
    "id":8,
    "name": "Safe House",
    "genre": ["CIA", "Action"],
    "year": "2012"
  },{
    "id":9,
    "name": "Spider Man: Far from Home",
    "genre": ["Super Hero", "Action"],
    "year": "2019"
  }]

  return (
    <div className="App">
      <HelloWorld/>
      <hr/><br/><br/>
      <Counter/>
      <hr/><br/><br/>
      <SearchBox placeholder="Spiderman: Home Coming" initialData = { movieList } />
    </div>
  );
}

export default App;
