import "./App.css";
import { useState } from "react";

const api = {
  key: "f50c0b3dbe98a792fb23929dee04c30a",//ENTER_YOUR_API_KEY_HERE
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
/////////////////////////////////////////////////////////////////
// import "./App.css";
// import React from "react";

// const api = {
//     key: "f50c0b3dbe98a792fb23929dee04c30a",//ENTER_YOUR_API_KEY_HERE
//     base: "https://api.openweathermap.org/data/2.5/",
// };

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//           this.state ={
//             search = '',
//             setSearch = [],
//             weather = [],
//             setWeather =[]



//     }
//     componentDidMount() {
//         fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
//             .then((res) => res.json())
//             .then((result) => {
//                 setWeather(result);
//             });
//     }
//     render() {
//     // const [search, setSearch] = this.state("");
//     // const [weather, setWeather] = this.state({});

//     /*
//       Search button is pressed. Make a fetch call to the Open Weather Map API.
//     */


//     return (
//         <div className="App">
//             <header className="App-header">
//                 {/* HEADER  */}
//                 <h1>Weather App</h1>

//                 {/* Search Box - Input + Button  */}
//                 <div>
//                     <input
//                         type="text"
//                         placeholder="Enter city/town..."
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                     <button onClick={searchPressed}>Search</button>
//                 </div>

//                 {/* If weather is not undefined display results from API */}
//                 {typeof weather.main !== "undefined" ? (
//                     <div>
//                         {/* Location  */}
//                         <p>{weather.name}</p>

//                         {/* Temperature Celsius  */}
//                         <p>{weather.main.temp}°C</p>

//                         {/* Condition (Sunny ) */}
//                         <p>{weather.weather[0].main}</p>
//                         <p>({weather.weather[0].description})</p>
//                     </div>
//                 ) : (
//                     ""
//                 )}
//             </header>
//         </div>
//     );
// }
// }
// }
// export default App;