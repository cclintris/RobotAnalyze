# Kafka 数据获取

Kafka消费者端配置如下：

![](https://obohe.com/i/2021/06/06/qwaoq1.png)

我们接收了所有数据，为方便存储与后续处理，在接受数据时我们将每96000存为一个txt文件，文件名为文件创建时的的时间戳：

![](https://obohe.com/i/2021/06/06/qwxl3w.png)# 数据接收源代码
