//var date = new Date(); 
//document.body.innerHTML = "<h1>Today is: " + date + "</h1>";



// named function //
/*
function findBiggestFraction(a,b){
  var results;
  a>b ? results = ["firstFrac", a] : results = ["secondFrac", b];
  return results;
}

var firstFrac = 3/4;
var secondFrac = 5/7;

//findBiggestFraction(firstFrac, secondFrac);
//findBiggestFraction(7/16, 13/25);

var fracResults = findBiggestFraction(firstFrac, secondFrac);
console.log(fracResults)
*/

// anonymous function //
/*
var theBiggest = function(a,b){
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  return result;
}

console.log(theBiggest(7/9,13/25));
*/

// immediately invoked function //
/*
var theBiggest = (function(a,b){
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  return result;
})(7/9,13/25)

console.log(theBiggest);
*/

// making an Object 
/*
var course = new Object();

var course = {
  title: "this title",
  instructor: "Me",
  level: 1,
  published: true,
  views: 0,

  updateViews: function() {
    return ++course.views;
  }
}

console.log(course)
*/

// making object constructor
function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  }
}

var courses = [
  new Course("JS ET", "Me", 1, true, 0),
  new Course("JS", "josh", 1, true, 12)
]

console.log(courses)








