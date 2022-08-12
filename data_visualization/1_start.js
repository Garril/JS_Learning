/* 
  数据可视化分类
    科学可视化 
      ---化学生物科学领域的空间测量位置进行一个直观的展示
    信息可视化（主要看这部分）
      ---抽象的数据的直观展示
    可视分析
      ---(综合了可视化、数据分析、人机交互)对分析结果的直观展示，以及交互式的反馈
  

  数据可视化
    记得把数据上下文补全，
    一个出色的可视化设计可以在最短的时间内，使用最少的空间、用最少的
    笔墨为观众提供最多的信息内涵。
  
  Data-ink Ratio
    最大化数据墨水占比（Data-Ink Ratio）
    可视化图形由墨水和空白区域构成
    数据墨水：可视化图形当中不可以擦除的核心部分，被称之为“数据墨水”
    擦除数据墨水 将减少图形所传达的信息量
    数据墨水占比：可视化图形中用于展示核心数据的“墨水”，在整体可视化所使用的墨水中的比例
    
    高数据墨水占比 会好一点，更加清晰，清爽，重点突出，不会很繁杂（刻度过多，数据信息标太多）
  
  面向前端的可视化工具：
    D3.js ---JS的函数库，被认为是最好的js可视化框架之一
    Vega ---一种可视化的语法。通过声明式的语言，去描述可视化外观和交互行为，
              并使用canvas或svg生成视图
    （D3和Vega，都是图形语法的库，他们并没有图表类型的概念，虽然画出来的是柱状图，但是在
      定义过程中我们并没有，类似于定义一个bar的概念，而G2有，加一行
      chart.coordinate('polar'),图形从柱状图变饼图--扇区）

    G2 ---一套面向常规统计图表，以数据驱动的高交互可视化图形语法，
          具有高度的易用性和扩展性，一条语句就可以用canvas或svg构建出可交互的统计图表
    ECharts --一个使用JS实现的开源可视化库，可以流程的运行在PC和移动设备上，
              底层依赖矢量图形库ZRender
*/