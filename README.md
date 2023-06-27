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

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

- App           [渲染APP样式: 背景图片、WeatherCard的布局]
  - WeatherCard   [渲染WeatherCard样式: 细节, 布局]
    - CurrentCity   [渲染CurrentCity样式: 背景图片, 布局]
      - Temperature   [渲染Temperature样式: 细节]
      - Weather     [渲染Weather样式: 细节]
      - Meta        [渲染Meta样式: 布局]
        - Item *2    [渲染Humidity和Wind样式: 细节]
      - CityName1    [渲染CityName样式: 细节]
    - OtherCities   [渲染OtherCities样式: 布局, 统筹所有cities]
      - City[]        [渲染City样式: 布局]
        - CityName2      [渲染Name样式: 细节]
        - Temperature    [渲染Temperature样式: 细节]
        - WeatherIcon    [渲染WeatherIcon样式: 细节]
    - Forecast   [渲染Forecast样式: 布局, 统筹所有Day]
      - DayOfWeek[]    [渲染DayOfWeek样式: 布局]
        -               []
        - WeatherIcon   [渲染WeatherIcon样式: 细节]
        - Temperature   [渲染Temperature样式: 细节]

如果责任有重复, 就可以做成通用组件
- Temperature
- WeatherIcon
- Name
- Subsection (Title + Content)
- BackgroundImage
