# techoptimumhacksgroup

The idea is we take movies and books and reduce them to a few variables we can compare with K-nearest neighbors algorithm when you search up a book or movie. If we had more time maybe we could have implemented more.

Our website ran under several types of files: the index.html, styles.css, and button.js serve as the front end of the website, while classifier.js, knn.js served as backend files.

At the core our our website is a recommendation system for similar books and movies. To generate our preexisting data, we used New York Times APIs and a database linked below for books and movies in that respect. 
https://github.com/mukulmantosh/fileparser/blob/master/movies.txt

We generated further movie/book data using Python scripts. Below are the repositories used to generate the .json files. For Books: The code requested the Plot Synopsis, Author, and a link to an image of the book.
For Movies: The code requested the Title, Plot Synopsis, Actors, ratings, and a link to the poster of the movie.
https://replit.com/@YaoXiao2/books#main.py
https://replit.com/@YaoXiao2/movieapi#main.py

With the generated data, we used the Python sentence_transformer class to transform our data into a 1x32 matrix of numbers. The AI was a universal sentence encoder. You can find this in our GitHub files of encode.py, preprocess.py, and mov_preproc.py.

Once we generated the 1x32 matrix, we added another dimension as a "rating" of the book. Since we wanted the model to mainly recommend higher-rated movies(because the books were on a bestselling list), we gave all books a "1" quality while movies received their iMDB rating/10. We take this into account in the files preprocess.py and mov_preproc.py.

Finally, our code in knnpy.py runs a k-nearest neighbors algorithm on a predetermined tensor. Doing so gets us the closest movie and book recommendations.

Below are some screenshots of Books and Movies recommended using this Model.
Percy Jackson Recommendations:
<img width="589" alt="Screen Shot 2022-07-17 at 7 35 38 AM" src="https://user-images.githubusercontent.com/68256364/179403357-5286537d-20e1-44e6-924e-1f5a3e6b3a5b.png">
<img width="671" alt="Screen Shot 2022-07-17 at 7 36 10 AM" src="https://user-images.githubusercontent.com/68256364/179403379-3fd3b265-4f85-4410-8a27-da673a0cc4e2.png">

