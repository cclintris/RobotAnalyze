from pymysql import connect

# • 刷单机器人：
# • 对应的购买行为集中在同一商品上
# • 大量短时间内重复购买请求

conn = connect(host='localhost', port=3306, user='root', password='jsx1A205', charset='utf8')
print(conn)
cursor = conn.cursor()
print(cursor)
conn.select_db('testDB')  # 指定数据库testDB

sql = "select userID,itemID,time from user where userID in (select userID from (select userID,itemID,count(*) as cnt from user u where action='buy' and isSecondKill!=1 group " \
      "by userID,itemID) t where cnt > 5)"
# sql = "select * from (select userID,count(*) as cnt from (select userID,itemID,count(*) as cnt from user u where action='buy' and isSecondKill!=1 group " \
#       "by userID,itemID) t where cnt > 5 group by userID) t1 where cnt > 1"
cursor.execute(sql)
suspects = set(cursor.fetchall())
# print(suspects)
dic = {}
for s in suspects:
    if s[0] in dic.keys():
        if s[1] in dic[s[0]].keys():
            dic[s[0]][s[1]].append(s[2])
        else:
            dic[s[0]][s[1]] = [s[2]]
    else:
        dic[s[0]] = {s[1]: [s[2]]}
print(len(dic.keys()))
criminal = []

for line in dic.keys():
    flag = False
    for l in dic[line].keys():
        if flag:
            criminal.append(line)
            break
        count = 1
        timelst = sorted(dic[line][l])
        base = timelst[0]
        for i in range(0, len(timelst) - 1):
            if count >= 4:
                flag = True
                break
            base = timelst[i]
            if (timelst[i + 1] - base).seconds < 300:
                count = count + 1
            else:
                count = 1
print(criminal)
print(len(criminal))

# sql = "select `userID` from user where action='buy' group by `userID` having count(`userID`)>10"
# cursor.execute(sql)
# suspect_tmp = set(cursor.fetchall())
# suspects = suspects & suspect_tmp
# print(suspects)       # 1380条
#


cursor.close()  # 先关闭游标
conn.close()  # 再关闭数据库连接
