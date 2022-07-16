#This code preprocesses our existing database
import json
import encode
with open('movie_info.json', 'r') as f:
    movies = json.load(f)
with open('movie_grid.json', 'r') as f:
    gridz = json.load(f)
#x = encode.embedd("BEYOND ORDER")
# print(x)
#with open("book_grid.json",'a') as f:
sum =0
for title in movies:
    if title in gridz:
        continue
    info = movies[title]
    
    desc = info["Plot"]
    if desc == "":
        desc = title
    tensor = encode.embedd(desc)
    rating = float(info["Rating"])/10
    tensor.append(rating)
    gridz[title] = [tensor,info["Title"],info["Plot"],info["Poster"],info["Rated"],info["Actors"]]
    sum = sum + 1
    if sum %10 == 0:
        print("sus")
        with open('movie_grid.json', 'w') as f:
            json.dump(gridz,f)

