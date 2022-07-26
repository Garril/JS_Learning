// 以Chrome为例，介绍现代浏览器的实现架构。
/* 
  Chrome的多进程架构有哪些优点呢？
    1、标签页之间崩溃互不影响
      （可以想像一个标签页就是一个渲染器进程，比如3个标签页就是3个渲染器进程。
      这时候，如果有一个渲染器崩溃了，只要把它关掉即可，不会影响其他标签页。
      如果所有标签页都运行在一个进程中，那只要有一个标签页卡住，所有标签页都会卡住。）
    2、有助于安全和隔离
      因为 操作系统 有限制进程特权的机制，浏览器可以 借此 去限制某些进程的能力。
      比如，Chrome会限制处理任意用户输入的渲染器进程，不让它任意访问文件。
    特例：
      由于进程都有自己私有的内存空间，因此每个进程可能都会保存某个公共基础设施
      （比如Chrome的JavaScript引擎V8）的多个副本。
      这会导致内存占用增多。为节省内存，Chrome会限制自己可以打开的进程数量。
      限制的条件取决于设备内存和CPU配置。达到限制条件后：
        Chrome会!!!!用一个进程处理同一个站点的多个标签页。!!!!

  Chrome架构进化的目标：
    将整个浏览器程序的不同部分服务化，便于分割或合并。
    基本思路是：
      在高配设备中，每个服务独立开进程，保证稳定；
      在低配设备中，多个服务合并为一个进程，节约资源。
      同样的思路也应用到了Android上。
  
*/