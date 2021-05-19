import os
import re
from pymysql import connect
import time, datetime

conn = connect(host='localhost', port=3306, user='root', password='root1234', charset='utf8')
print(conn)
cursor = conn.cursor()
print(cursor)
cursor.execute('CREATE DATABASE IF NOT EXISTS testDB DEFAULT CHARSET utf8 COLLATE utf8_general_ci;')  # 创建数据库testDB
conn.select_db('testDB')  # 指定数据库testDB
# 建user表
cursor.execute('drop table if exists user')
sql = """CREATE TABLE IF NOT EXISTS `user` (
      `key` int(11) NOT NULL AUTO_INCREMENT,
      `sessionID` varchar(40) NOT NULL,
      `time` datetime NOT NULL,
      `action` varchar(20) NOT NULL,
      `userID` varchar(15) NOT NULL,
      `itemID` varchar(15) NOT NULL,
      `categoryID` varchar(15) NOT NULL,
      `isSecondKill` int(1) default NULL,
      `success` int(1) default NULL,
      PRIMARY KEY (`key`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=0"""
cursor.execute(sql)

# print("user表创建成功")
cursor.execute('drop table if exists login')
# 建login表
sql = """CREATE TABLE IF NOT EXISTS `login` (
      `key` int(11) NOT NULL AUTO_INCREMENT,
      `ipAddress` varchar(20) NOT NULL,
      `sessionID` varchar(40) NOT NULL,
      `time` datetime NOT NULL,
      `userID` varchar(15) NOT NULL,
      `pwd` varchar(40) NOT NULL,
      `auth` varchar(40) NOT NULL,
      `success` int(1) NOT NULL,
      PRIMARY KEY (`key`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=0"""
cursor.execute(sql)
# print("login表创建成功")

path = "/Users/allen/Desktop/py流数据/data"  # 文件夹目录
files = os.listdir(path)  # 得到文件夹下的所有文件名称
files.sort()
for file in files:  # 遍历文件夹
    pos = path + "/" + file
    users = []
    logins = []
    with open(pos, "r") as f:  # 打开文件
        lines = f.readlines()  # 读取文件内容
        for line in lines:
            usr = []
            log = []
            isLogin = False
            isUser = False
            line = line[:-2]
            # 预处理数据
            r = line.split(' ')
            while r.count(':') != 0:
                r.remove(':')
            if r.count('=') != 0:
                r.remove('=')
            r.remove('|')
            r.remove('DEBUG')
            r.remove('[nio-8080-exec-1]')
            r.remove('com.some.taopao.aop.LogHandler')
            r[0] = (r[0][1:-1]).split('=')[1]
            # 判断数据类型
            if r[0].count('.') == 0:
                isUser = True
            else:
                isLogin = True
            if isUser:
                usr.append(r[0])  # sessionID
                usr.append(r[1]+' '+r[2])  # time
                usr.append((r[3].split('/'))[2])  # action
                if (r[3].split('/'))[2] == 'buy':
                    if r[11].count('0'):
                        usr.append(r[5][1:-2])  # userID
                        usr.append(r[7][1:-2])  # itemID
                        usr.append(r[9][1:-2])  # categoryID
                        usr.append(0)
                    elif r[12].count('1'):
                        usr.append(r[6][1:-2])  # userID
                        usr.append(r[8][1:-2])  # itemID
                        usr.append(r[10][1:-2])  # categoryID
                        usr.append(1)
                        usr.append(int(r[14][1]))
                else:
                    usr.append(r[5][1:-2])  # userID
                    usr.append(r[7][1:-2])  # itemID
                    usr.append(r[9][1:-1])  # categoryID
            elif isLogin:
                log.append(r[0])  # ip
                log.append(r[1][1:-1].split('=')[1])  # sessionID
                log.append(r[2]+' '+r[3])  # time
                log.append(r[7][1:-2])  # userID
                log.append(r[9][1:-2])  # pwd
                log.append(r[11][1:-2])  # auth
                log.append(int(r[13][1]))  # success
            if len(usr):
                users.append(usr)
            if len(log):
                logins.append(log)
    for l in logins:
        # print(l)
        sql = "insert into login(ipAddress, sessionID, time, userID, pwd, auth, success) values(%s,%s,%s,%s,%s,%s,%s)"
        cursor.execute(sql, (l[0], l[1], l[2], l[3], l[4], l[5], l[6]))
    cursor.execute('COMMIT')

    for u in users:
        # print(u)
        if u[2] == 'buy':
            if u[6] == 1:
                sql = "insert into user(sessionID, time, action, userID, itemID, categoryID, isSecondKill, success) " \
                      "values(%s,%s,%s,%s,%s,%s,%s,%s) "
                cursor.execute(sql, (u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7]))

            else:
                sql = "insert into user(sessionID, time, action, userID, itemID, categoryID, isSecondKill) values(%s," \
                      "%s,%s,%s,%s,%s,%s) "
                cursor.execute(sql, (u[0], u[1], u[2], u[3], u[4], u[5], u[6]))


        else:
            sql = "insert into user(sessionID, time, action, userID, itemID, categoryID) values(%s,%s,%s,%s,%s,%s)"
            cursor.execute(sql, (u[0], u[1], u[2], u[3], u[4], u[5]))
    cursor.execute('COMMIT')
    conn.commit()
    print("finished writing" + file)

cursor.close()  # 先关闭游标
conn.close()  # 再关闭数据库连接
