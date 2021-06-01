from pymysql import connect
import datetime
from tqdm import tqdm

# • 抢单机器人：
# • 抢购成功率较高
# • 一般在整点整附近进行抢购

conn = connect(host='localhost', port=3306, user='root', password='use your password', charset='utf8')
cursor = conn.cursor()
conn.select_db('testDB')  # 指定数据库testDB

print("执行sql...")
# 所有类型是秒杀的购买记录
sql = "SELECT userID, itemID, time, success FROM user where isSecondKill=1;"
cursor.execute(sql)
all_record = set(cursor.fetchall())

print("存储为dic...")
dic = {}
for s in tqdm(all_record):
    if s[0] in dic.keys():
        if s[1] in dic[s[0]].keys():
            added = False
            for i in range(len(dic[s[0]][s[1]])):
                if dic[s[0]][s[1]][i][0] > s[2]:
                    dic[s[0]][s[1]].insert(i, (s[2], s[3]))
                    added = True
                    break
            if not added:
                dic[s[0]][s[1]].append((s[2], s[3]))
        else:
            dic[s[0]][s[1]] = [(s[2], s[3])]
    else:
        dic[s[0]] = {s[1]: [(s[2], s[3])]}

print("分析...处理...")
# 用户的抢单成功率
user_rate = {}
# 用户抢单失败后仍然抢单的次数
user_request_after_failure = {}
# 用户在下面设置的interval内连续发起request_num次的商品数量
user_item_num = {}

# 根据情况设置
# 时间间隔/针对同一个商品的连续请求数量
interval = 5
request_num = 5

for user in tqdm(dic):
    successful = 0
    unsuccessful = 0
    request_after_failure = 0
    item_num = 0
    for item in dic[user]:
        date = 0
        fail = False
        t = 0
        requests = 0
        for i in range(len(dic[user][item])):
            # 计算成功率
            if dic[user][item][i][1] == 0:
                unsuccessful += 1
            else:
                successful += 1

            # 失败之后继续请求并失败次数
            if dic[user][item][i][1] == 0:
                if not fail:
                    date = dic[user][item][i][0]
                    fail = True
                else:
                    if dic[user][item][i][0] - date < datetime.timedelta(minutes=10) and dic[user][item][i][1] == 0:
                        request_after_failure += 1
            else:
                if fail:
                    date = dic[user][item][i][0]
                    fail = False

            #
            if i == 0:
                t = dic[user][item][i][0]
            else:
                t = dic[user][item][i-1][0]
                if dic[user][item][i][0]-t < datetime.timedelta(minutes=interval):
                    requests += 1

        if requests > request_num:
            item_num += 1

    user_rate[user] = successful / (successful + unsuccessful)
    user_request_after_failure[user] = request_after_failure
    user_item_num[user] = item_num

criminal = []
print("总用户数", format(len(user_rate)))
for user in user_rate:
    if user_rate[user] * 0.1 + user_request_after_failure[user] * 0.1 + user_item_num[user] * 0.1 >= 1:
        criminal.append(user)
print("嫌疑数量", format(len(criminal)))
print("嫌疑列表", format(criminal))

