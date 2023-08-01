- App [渲染 APP 样式: 背景图片、WeatherCard 的布局]
  - WeatherCard [渲染 WeatherCard 样式: 细节, 布局]
    - CurrentCity [渲染 CurrentCity 样式: 背景图片, 布局]
      - Temperature [渲染 Temperature 样式: 细节]
      - Weather [渲染 Weather 样式: 细节]
      - Meta [渲染 Meta 样式: 布局]
        - Item \*2 [渲染 Humidity 和 Wind 样式: 细节]
      - CityName(1) [渲染 CityName 样式: 细节]
    - OtherCities [渲染 OtherCities 样式: 布局, 统筹所有 cities]
      - CityRow[] [渲染 CityRow 样式: 布局]
        - CityName(2) [渲染 Name 样式: 细节]
        - Temperature [渲染 Temperature 样式: 细节]
        - WeatherIcon [渲染 WeatherIcon 样式: 细节]
    - Forecast [渲染 Forecast 样式: 布局, 统筹所有 Day]
      - DayOfWeek[] [渲染 DayOfWeek 样式: 布局]
        -               []
        - WeatherIcon [渲染 WeatherIcon 样式: 细节]
        - Temperature [渲染 Temperature 样式: 细节]

如果责任有重复, 就可以做成通用组件

- Temperature
- WeatherIcon
- Subsection (Title + Content)
- BackgroundImage

Responsive

~900px:调整 WeatherCard 左右边距 w-[90%]
~800px
整个 Card width 850px->352px
整个 Card height 不变 h-[...px]
CurrentCity 变为上下 flex flex-col-reverse
调整 OtherCities 和 Forecast 为竖向 flex-col-reverse
Forecast title 变小, DayOfWeek 缩小一点
OtherCities 编程一个标题 'View more Cites...'

~~调整 CurrentCity 左右排版更接近 px-0 justify-evenly max-[700px]:px-0 max-[700px]:justify-evenly
让 Meta 里的内容更接近 justify-evenly~~

~520px
调整 CurrentCity 左右排版为上下排版
