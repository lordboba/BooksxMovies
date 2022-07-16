#This code preprocesses our existing database
import json
import encode
with open('book_info.json', 'r') as f:
    books = json.load(f)
with open('book_grid.json', 'r') as f:
    gridz = json.load(f)
#x = encode.embedd("BEYOND ORDER")
# print(x)
#with open("book_grid.json",'a') as f:
sum =0
for title in books:
    if title in gridz:
        continue
    info = books[title]
    
    desc = info["description"]
    if desc == "":
        desc = title
    tensor = encode.embedd(desc)
    tensor.append(1)
    gridz[title] = [tensor,info["contributor"],info["description"],info["book_image"]]
    sum = sum + 1
    if sum %10 == 0:
        print(f"sus {len(gridz)}")
        with open('book_grid.json', 'w') as f:
            json.dump(gridz,f)

