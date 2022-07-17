
function near_movie(tensor_avg) {
    const movie_json = require('./movie_grid.json');
    //apply k nearest neighbors
    var data = [];
    for(var id in movie_json) {
        const info = movie_json[id];
        const tensor = info[0];
        //calculate distance
        var sum = 0.0; 
        for(var i = 0; i < 33; ++i){
            sum += (tensor_avg[i]-tensor[i])*(tensor_avg[i]-tensor[i]);
        }
        data.push({"dist":sum,"title":info[1],"desc":info[2],"img":info[3],"rating":info[4],"actors":info[5]});
    }
    data.sort(function(a,b){return a.dist - b.dist;});
    var top9 = [];
    for(var i = 0; i < 9; ++i){
        const mov = data[i];
        top9.push(mov);
        console.log(`Title: ${mov["title"]} Actors: ${mov["actors"]} Description: ${mov["desc"]}`);
    }
    return top9;
}

//hi
function near_book(tensor_avg) {
    const book_json = require('./book_grid.json');
    //apply k nearest neighbors
    var data = [];
    for(var title in book_json) {
        const info = book_json[title];
        const tensor = info[0];
        //calculate distance
        var sum = 0.0; 
        for(var i = 0; i < 33; ++i){
            sum += (tensor_avg[i]-tensor[i])*(tensor_avg[i]-tensor[i]);
        }
        data.push({"dist":sum,"author":info[1],"desc":info[2],"img":info[3],"title":title});
    }
    data.sort(function(a,b){return a.dist - b.dist;});
    var top9 = [];
    for(var i = 0; i < 9; ++i){
        const book = data[i];
        top9.push(book);
        console.log(`Title: ${book["title"]} Author: ${book["author"]} Description: ${book["desc"]} `);
    }
    return top9;
}