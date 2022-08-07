/* 
  Regex Dos---正则：
    完善review code工作
    代码扫描 + 正则性能测试
    不使用用户提供的正则
  
  DDos：
    流量治理：
      负载均衡（过滤）--- 过滤恶意流量
      API网关（过滤）
      前置CDN（抗量）--- 所有流量都要先过cdn，得到我们具体的服务
    快速自动扩容（抗量）
    非核心服务降级（抗量）
  
  传输层 --- 防御中间人：
    HTTPS： HTTP over TLS
    （HTTP3内置了TLS 1.3。这里说没内置的时候版本）
    HTTPS的特性：
      可靠性：加密（避免明文传输）
      完整性：MAC验证（避免数据被篡改）
      不可抵赖性：数字签名（确保双方身份可被信任）
    HTTPS特性解释：
      完整性：所有传输的信息，除了他加密后的信息外，还有加密信息计算后对应的hash
              所有接收方，会对加密信息重新进行一次hash计算，如果和传递过来的hash值
              相等，说明信息没有被篡改。
      不可抵赖性：靠数字签名来确保完成
              在TLS.jpg中可以看到一个证书的东西（HTTPS在非对称加密中，会传递证书） 
              数字签名校验的流程：
              P.S. 存在一个 CA：Certificate Authority 证书机构，去完成相关签名的工作
                比如说：服务提供方会把自己的元信息，以及一些公钥，合并成一对信息，
                然后使用CA提供的私钥进行签名，生成服务端保存的证书，会传递给browser侧
                
                浏览器侧会用CA颁发的公钥进行校验，如果通过
                说明证书合法，签发者身份可信。完成了一次数字签名校验的流程
                （每个浏览器都会内置大量的CA签发的证书，这些证书里就会包含CA各个的公钥）


    TLS 1.2 握手流程简略版
      （分为 非对称加密 和 对称加密）
      看TLS.jpg
      browser把自己支持的加密套件选项发给server
      server选定具体套件，+服务器端证书return给browser
      browser先对证书进行校验，校验通过，
      双方根据先前协商好的加密算法，以及一些额外随机数等，算出一个seesionkey
      此时非对称加密过程结束。
      对称加密：
        双方使用sessionkey，作为secret对所有的信息进行对称加密

  补充：
    数字签名：（校验流程看上面）
      （会有一个签名执行者，有一对公钥和私钥，用于公开可见和自己藏好。）
      其过程就是：前面执行者，使用privatekey对一些内容，进行数学计算
      生成对应的签名。
      所有有公钥的人，都可以用公钥对签名进行一次校验，
      如果内容一致，校验通过。

    HSTS： HTTP Strict-Transport-Security
      将HTTP主动升级到HTTPS
      看HSTS.jpg

*/
