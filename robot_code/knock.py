import os
import re
from pymysql import connect
import time, datetime

conn = connect(host='localhost', port=3306, user='root', password='jsx1A205', charset='utf8')
print(conn)
cursor = conn.cursor()
print(cursor)
conn.select_db('testDB')  # 指定数据库testDB

sql = "select l3.ipAddress,l3.userID,fcnt/(fcnt+ifnull(scnt,0)) from (select ipAddress,userID,count(success) as fcnt " \
      "from (select ipAddress,userID,success from login where ipAddress in (select ipAddress from (select ipAddress," \
      "count(*) as icnt from (select distinct ipAddress,userID from login) l group by ipAddress) l1 where icnt>2)) l2 " \
      "where success=0 group by ipAddress,userID) l3 left join (select ipAddress,userID,count(success) as scnt from (" \
      "select ipAddress,userID,success from login where ipAddress in (select ipAddress from (select ipAddress," \
      "count(*) as icnt from (select distinct ipAddress,userID from login) l group by ipAddress) l1 where icnt>2)) l2 " \
      "where success=1 group by ipAddress,userID) l4 on l3.ipAddress=l4.ipAddress and l3.userID=l4.userID "
cursor.execute(sql)
suspects = cursor.fetchall()

date = ['2017-11-25 12:00:00', '2017-11-26 12:00:00', '2017-11-27 12:00:00', '2017-11-28 12:00:00',
        '2017-11-29 12:00:00', '2017-11-30 12:00:00', '2017-12-01 12:00:00', '2017-12-02 12:00:00']

knock_robot = []

for i in range(0, 7):
    suspect_dic = {}
    for s in suspects:
        if s[2] > 0.8:
            if s[0] in suspect_dic.keys():
                suspect_dic[s[0]].append(s[1])
            else:
                suspect_dic[s[0]] = [s[1]]
    sql = "select userID,count(*) as cnt from user u where date(time)>='" + date[i] + "' and date(time)<'" + date[i+1] +\
          "' group by userID"
    print(sql)
    cursor.execute(sql)
    user_action = cursor.fetchall()
    user_action_dict = {}
    for u_a in user_action:
        user_action_dict[u_a[0]] = u_a[1]

    for suspect in suspect_dic.keys():
        uID_lst = suspect_dic[suspect]
        low_energy_cnt = 0
        for uID in uID_lst:
            if uID in user_action_dict and user_action_dict[uID] < 3:
                low_energy_cnt = low_energy_cnt + 1
            else:
                low_energy_cnt = low_energy_cnt + 1
        if low_energy_cnt / len(uID_lst) > 0.9:
            knock_robot.append(suspect)
            print(uID_lst)

    print("嫌疑数量：" + str(len(suspect_dic.keys())))
knock_robot = list(set(knock_robot))
print("嫌疑确凿数量：" + str(len(knock_robot)))
print(knock_robot)

cursor.close()  # 先关闭游标
conn.close()  # 再关闭数据库连接
