const axios = require("axios");

const appId = "f374031ca22934d2b6e6116d3abd2eea";
const unit = "metric";
const cities = ["Melbourne", "Sydney", "Brisbane", "Perth"];

// const OPEN_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${unit}`;
const main = async () => {
  const fetchGeos = cities.map((city) =>
    axios
      .get("http://api.openweathermap.org/geo/1.0/direct", {
        params: {
          q: `${city},AU`,
          limit: 1,
          appid: appId,
        },
      })
      .then((response) => response.data)
  );
  const results = await Promise.all(fetchGeos);
  results.forEach((r) => console.log("r = ", r[0].name, r[0].lat, r[0].lon));
};
// main();

const data = {
  name: 'gordon',
  age:35,
  friends:[
    {friendName:'WHR'},
    {friendName:'NSW'}
  ]
}

const currentPerson = ( person ) => {
  const { name='default name' ,
    age = 0,
    education = 'default grade',
    friends : {0: {friendName: newName}  }
  } = person;
  console.log('name = ', name);
  console.log('age = ', age);
  console.log('education = ', education);
  // console.log('friends = ', friends);
  console.log('newName = ', newName);
}

currentPerson(data);
// const noone = {};
// currentPerson(noone)