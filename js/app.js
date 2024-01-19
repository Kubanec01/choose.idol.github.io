var dudes = document.querySelectorAll(".choices img");
dudes = Array.prototype.slice.call( dudes );

//local storage functions
function getKeyFrom(dude) {
    return 'score' + _.capitalize( dude.alt )
}

function getScore(dude) {
    return +localStorage.getItem( getKeyFrom(dude) ) || 0;

}

function setScore(dude, score) {
    localStorage.setItem( getKeyFrom(dude), score );

}

function updateDude(dude) {
    var score = getScore(dude);
    dude.nextElementSibling.textContent = score;
}
 

// click functions
dudes.forEach(function(dude) {

    updateDude(dude);

    // on click, increase score by 1
dude.addEventListener( 'click', function() {

    var score = getScore(dude);
    score++;

    setScore(dude, score);
    updateDude(dude);

});

// mouse enter, the opponent shrinks
dude.addEventListener( 'mouseover', function() {
     var otherDude = _.without(dudes, this)[0];
    otherDude.classList.add('desaturate');
});

// mouse leaves, the opponent rises
dude.addEventListener( 'mouseout', function() {
    var otherDude = _.without(dudes, this)[0];
    otherDude.classList.remove('desaturate');
});

});




