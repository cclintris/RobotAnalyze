# 安装：pip3 install kafka-python

from kafka import KafkaConsumer
import time
import zipfile

# 需要在校园网环境或nju vpn环境中使用

consumer = KafkaConsumer(

    'foobar',

    bootstrap_servers='172.29.4.17:9092',

    security_protocol='SASL_PLAINTEXT',

    sasl_mechanism='PLAIN',

    sasl_plain_username='student',

    sasl_plain_password='nju2021',

)


# 多个 consumer 可以重复消费相同的日志，每个 consumer 只会消费到它启动后产生的日志，不会拉到之前的余量

zip_file = zipfile.ZipFile('data.zip', 'a')
zip_file.close()


time_str = str(time.time())
newFile = "./data/" + time_str + ".txt"
f = open(newFile, "a")

cnt = 0

for msg in consumer:
    line = msg.value.decode("utf-8")
    f.write(line)
    f.write("\n")
    cnt = cnt + 1
    if cnt == 96000:
        print(newFile + " is OK.")
        cnt = 0
        f.close()
        zip_file = zipfile.ZipFile('data.zip', 'a')
        zip_file.write(newFile, compress_type=zipfile.ZIP_DEFLATED)
        zip_file.close()
        time_str = str(time.time())
        newFile = "./data/" + time_str + ".txt"
        f = open(newFile, "a")

