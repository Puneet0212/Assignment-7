//STEP 1
var favoriteMovies = ["Bahubali", "RRR", "Sita Ramam", "The Sky is Pink", "Interstellar"];
window.console.log("Step 1: ");
window.console.log("Second Movie in the Array is: " + favoriteMovies[1]); 


//STEP 2
var movies = new Array(5);
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
window.console.log("\nStep 2: ");
window.console.log("The First Movie in the Array is: " + movies[0]); 


//STEP 3
var movies = new Array(5);
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
movies.splice(2,0,"End Game");
window.console.log("\nStep 3: ");
window.console.log(movies); 


//STEP 4
var movies = [];
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
movies.shift();
window.console.log("\nStep 4: ");
window.console.log("The Array after deleting the first element is: " + movies); 

//STEP 5
var movies = [];
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
movies[5] = "End Game";
movies[6] = "Iron-Man";
window.console.log("\nStep 5: ");
for(var i=0; i<movies.length; i++){
    window.console.log("Movie " + i + ": " + movies[i] + "\n");
}

//STEP 6
var movies = [];
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
movies[5] = "End Game";
movies[6] = "Iron-Man";
window.console.log("\nStep 6: ");
for(var i in movies) {
    window.console.log("Movie " + i + ": " + movies[i] + "\n");
}

//STEP 7
var movies = [];
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
movies[5] = "End Game";
movies[6] = "Iron-Man";
movies.sort();
window.console.log("\nStep 7: ");
for(var i=0; i<movies.length; i++){
    window.console.log("Movie " + i + ": " + movies[i] + "\n");
}

//STEP 8
var movies = [];
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
movies[5] = "End Game";
movies[6] = "Iron-Man";
window.console.log("\nStep 8: ");
window.console.log("Movies I like:\n\n");

for(var i=0; i<movies.length; i++){
    window.console.log(movies[i]);
}

var leastFavMovies = ["Conjuring", "Conjuring 2", "The Fanantic"];
window.console.log("\nMovies I regret watching:\n\n");

for(var i=0; i<leastFavMovies.length; i++){
    window.console.log(leastFavMovies[i]);
}
//STEP 9
var movies = [];
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
movies[5] = "End Game";
movies[6] = "Iron-Man";
var leastFavMovies = ["Conjuring", "Conjuring 2", "The Fanantic"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log("\nStep 9: ");
window.console.log(movies);


//STEP 10
var movies = [];
movies[0] = "Bahubali";
movies[1] = "RRR";
movies[2] = "Sita Ramam";
movies[3] = "The Sky is Pink";
movies[4] = "Interstellar";
movies[5] = "End Game";
movies[6] = "Iron-Man";
var leastFavMovies = ["Conjuring", "Conjuring 2", "The Fanantic"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log("\nStep 10: ");
window.console.log(movies.slice(-1));


