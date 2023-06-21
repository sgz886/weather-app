# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

- App(渲染 APP 样式: 背景图片、布局)
  - WeatherCard(渲染 WeatherCard 样式: 细节+布局)
    - CurrentCity(渲染 CurrentCity样式: 背景图片、布局)
      - Temperature(渲染 Temperature 样式: 细节)
      - Weather(渲染 Weather 样式: 细节)
      - Meta(渲染 Weather 样式: 布局)
          - Item(渲染 Item 样式: 细节)
          - Wind(渲染 Wind 样式: 细节)
      - Name(渲染 Name 样式: 细节)
    - OtherCities(渲染 OtherCities 样式、布局, 统筹所有cities)
      - City[] (渲染 City 样式、布局)
        - Name(渲染 Name 样式: 细节)
        - Temperature(渲染 Temperature 样式: 细节)
        - WeatherIcon(渲染 WeatherIcon 样式: 细节)
    - Forecast(渲染 WeatherForecast 样式、布局, 统筹所有days of week)
      - DayOfWeek[] (渲染 DayOfWeek 样式、布局)
        - Name(渲染 Name 样式: 细节)
        - WeatherIcon(渲染 WeatherIcon 样式: 细节)
        - Temperature(渲染 Temperature 样式: 细节)

- 重用组件
  - Temperature
  - Name
  - WeatherIcon
    - SubSection  (Title + 内容)
  - BackgroundImage

- App
  - WeatherCard
    - CurrentCity
      - Name
      - Temperature
      - Weather
      - Meta
        - Item
        - Wind
    - OtherCities
      - Cities[]
        - Name
        - Temperature
        - WeatherIcon
    - Forecast
      - DayOfWeek[]
        - Name
        - WeatherIcon
        - Temperature