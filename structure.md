- App           [渲染APP样式: 背景图片、WeatherCard的布局]
    - WeatherCard   [渲染WeatherCard样式: 细节, 布局]
        - CurrentCity   [渲染CurrentCity样式: 背景图片, 布局]
            - Temperature   [渲染Temperature样式: 细节]
            - Weather     [渲染Weather样式: 细节]
            - Meta        [渲染Meta样式: 布局]
                - Item *2    [渲染Humidity和Wind样式: 细节]
            - CityName(1)    [渲染CityName样式: 细节]
        - OtherCities   [渲染OtherCities样式: 布局, 统筹所有cities]
            - CityRow[]        [渲染CityRow样式: 布局]
                - CityName(2)      [渲染Name样式: 细节]
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
- Subsection (Title + Content)
- BackgroundImage

Responsive

~900px:调整WeatherCard左右边距 w-[90%]
~800px
整个Card width 850px->352px
整个Card height 不变   h-[...px]
CurrentCity变为上下flex flex-col-reverse
调整OtherCities和Forecast为竖向 flex-col-reverse
Forecast title变小, DayOfWeek缩小一点
OtherCities编程一个标题 'View more Cites...'

~~调整CurrentCity左右排版更接近 px-0 justify-evenly  max-[700px]:px-0  max-[700px]:justify-evenly
让Meta里的内容更接近  justify-evenly~~

~520px
调整CurrentCity左右排版为上下排版
