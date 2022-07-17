import json
def nearest_book(tensor_avg):
    with open('book_grid.json', 'r') as f:
        gridz = json.load(f)
    data = []
    for id in gridz:
        info = gridz[id]
        tensor = info[0]
        sum = 0.0
        for i in range(33):
            sum = sum +  (tensor_avg[i]-tensor[i])*(tensor_avg[i]-tensor[i])
        data.append({"dist":sum,"author":info[1],"desc":info[2],"img":info[3],"title":id})
    array = sorted(data, key=lambda arr: arr["dist"]) 
    top9 = []
    for i in range(10):
        if i == 0:
            continue
        book = array[i]
        top9.append(book)
    print(top9)
def nearest_mov(tensor_avg):
    with open('movie_grid.json', 'r') as f:
        gridz = json.load(f)
    data = []
    for id in gridz:
        info = gridz[id]
        tensor = info[0]
        sum = 0.0
        for i in range(33):
            sum = sum +  (tensor_avg[i]-tensor[i])*(tensor_avg[i]-tensor[i])
        data.append({"dist":sum,"title":info[1],"desc":info[2],"img":info[3],"rating":info[4],"actors":info[5]})
    array = sorted(data, key=lambda arr: arr["dist"]) 
    top9 = []
    for i in range(10):
        if i == 0:
            continue
        book = array[i]
        top9.append(book)
    print(top9)
# def nearest_mov():
knn = [-0.004992551626249527, 0.007062915715347155, -0.007504577564153199, -0.0038788287686960152, -0.0014775515980242442, -0.007133156053896528, 0.002695991318129624, -0.0017771473261139665, 0.0015395031994861104, 0.0008071860211202875, 0.003591209344449453, -0.0041597892850404605, 0.0026556842737287902, 0.0030391080523865335, -0.01790589055841944, 0.0030655166774522513, 0.0038441473055475703, -0.004804795349627966, -0.008777043013348399, -0.005546611855000568, 0.013619537756312639, 0.002696921437745914, 0.019910057138379973, 0.0019566081658316157, -0.008723630521368856, -0.0006551949578958253, 0.005518785549308329, 0.005850575427757576, -0.007415711462584795, 0.00042696541640907526, 0.007107016436445217, -0.0005314247270386355, 0.67]
nearest_book(knn)
nearest_mov(knn)
