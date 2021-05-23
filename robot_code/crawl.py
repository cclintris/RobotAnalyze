from pymysql import connect

# • 刷单机器人：
# • 对应的购买行为集中在同一商品上
# • 大量短时间内重复购买请求

conn = connect(host='localhost', port=3306, user='root', password='jsx1A205', charset='utf8')
print(conn)
cursor = conn.cursor()
print(cursor)
conn.select_db('testDB')  # 指定数据库testDB

sql = "select userID,categoryID,time,action from user u where userID in (select userID from login l where ipAddress in (" \
      "select ipAddress from (select distinct ipAddress,userID from login) l1 group by ipAddress having count(userID) " \
      "> 1))"
cursor.execute(sql)
suspects = cursor.fetchall()
# print(suspects)
# print(len(suspects))

suspects = sorted(suspects, key=lambda x: (x[0], x[2]))

dic = {}
for s in suspects:
    if s[0] in dic.keys():
        dic[s[0]].append([s[1], s[2], s[3]])
    else:
        dic[s[0]] = [[s[1], s[2], s[3]]]
# print(len(dic.keys()))
# print(dic)
criminal = []

for line in dic.keys():
    count = 1
    for i in range(0, len(dic[line]) - 1):
        if count > 4:
            criminal.append(line)
            break
        action = dic[line][i]
        if action[2] == 'getDetail' and dic[line][i+1][2] == 'getDetail':
            if dic[line][i + 1][0] == action[0] and (dic[line][i + 1][1] - action[1]).seconds < 300:
                count = count + 1
            else:
                count = 1
        else:
            count = 1
print(criminal)
print(len(criminal))

cursor.close()  # 先关闭游标
conn.close()  # 再关闭数据库连接
