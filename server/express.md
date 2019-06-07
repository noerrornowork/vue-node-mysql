## NodeJs 基于CommonJs规范
  - 1. 一个文件就是一个模块
  - 2. 通过exports和module.exports导出模块中的成员
  - 3. 通过require加载模块
### NodeJs中模块
  - 1. 内置的NodeJs模块
  - 2. 第三方的NodeJs模块
  - 3. 自定义模块
### 字节的概念
  - 1. 计算机的计量单位
    1 Byte(字节) = 8位 bit
    1 KB = 1024Byte
    1 M = 1024KB
    1 G = 1024MB
    1 T = 1024GB
    -- 我的电脑: 内存约6G,空闲内存约2G
### NodeJs
  - 1. 内置模块
  - 2. http协议: request和response请求
    - 1.1 有请求必须有响应,否则网页无法打开
  - 3. 路由
  - 4. 配置模板引擎
  - 5. 托管静态资源: css,image,js,视频,音频等
    - 5.1 也需要向服务器发送请求
  - 6. 中间件
### NodeJs静态资源也发生请求: 文本,图像,视频,音频
### NPM
  - 1. 一个命令行工具,一个包管理工具
  - 2. 下载第三方模块
## Express响应数据的方法
  - 1. res.end()
    - 响应字符串,中文会出现乱码
  - 2. res.send()
    - 响应字符串,但会自动识别数据类型
  - 3. res.render()
