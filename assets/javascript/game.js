var i = 0;
var txt = 'Once Upon a time, in a distant far away land, there was a hero. A typical hero who will journey into a dungeon to find riches and glory through the defeat of a great evil. You are that hero.';
var speed = 30;

$('#myBtn').click(function typeWriter() {
    if (i < txt.length) {
    document.getElementById("intro-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
});


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that gets the character select modal
var span = document.getElementsByClassName("characterSelect")[0];

// Get the character selection modal
var charSelectModal = $('.modal-content1')

$(document).ready(function () {

    var currentHp = 150; 
    var enemyHp = Math.floor((Math.random()*102)+19);
    var enemyDamage = Math.floor((Math.random() * 13) + 1);
    var attack1 = Math.floor((Math.random() * 13)+1); 
    var attack2 = Math.floor((Math.random() * 13)+1); 
    var attack3 = Math.floor((Math.random() * 13)+1); 
    var attack4 = Math.floor((Math.random() * 13)+1);

    $('.heroCurrentHP').text("HP: " + currentHp);
    $('.monsterCurrentHP').text("HP: " + enemyHp); 

    function startGame() {
// When the user clicks the button, open the modal 
    btn.onclick = function() {
        $('.gameover').hide(); 
        modal.style.display = "block";
        $('#myBtn').hide();
        $('.characterSelect').hide();
        setTimeout(function() {
            $('.characterSelect').show();
        }, 1000); //load character selection option after 5 seconds
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        charSelectModal.fadeIn("slow"); 

    }


    $('#subButton').on('click', function getUserName() {
    var nameField = $('#nameField').val();
    var result = document.getElementById('result');
        $('.attack-1').on('click', function() {
            $('.battle-history-text-box').prepend("<p>" + nameField + " swung his sword and did " + attack1 + " damage. " + "The slime counter-attacked dealing " + enemyDamage + " damage.</p>");
        });
        $('.attack-2').on('click', function() {
            $('.battle-history-text-box').prepend("<p>" + nameField + " swung his sword and did " + attack2 + " damage. " + "The slime counter-attacked dealing " + enemyDamage + " damage.</p>");
        });
        $('.attack-3').on('click', function() {
            $('.battle-history-text-box').prepend("<p>" + nameField + " swung his sword and did " + attack3 + " damage. " + "The slime counter-attacked dealing " + enemyDamage + " damage.</p>");
        });
        $('.attack-4').on('click', function() {
            $('.battle-history-text-box').prepend("<p>" + nameField + " swung his sword and did " + attack4 + " damage. " + "The slime counter-attacked dealing " + enemyDamage + " damage.</p>");
        });
    });

    var heroThief = false; 
    var heroKnight = false; 

    $('#adventurer-img').on('click', function startCharacterSelection() {
        heroThief = true; 
        charSelectModal.fadeOut("fast"); 
        $('.modal-content2').fadeIn("slow"); 
        $('.selectedCharacterImg').html("<img src='assets/images/idle.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
    });

    $('#knight-img').on('click', function startCharacterSelection() {
        heroKnight = true; 
        charSelectModal.fadeOut("fast");
        $('.modal-content2').fadeIn("slow"); 
        $('.selectedCharacterImg').html("<img src='assets/images/knight-idle.gif' class='moving-img'>");
    });

    $('#subButton').on('click', function startGame() {
        $('.modal-content2').hide();
        $('#dungeon').fadeIn("slow"); 
        $('.battle-history-text-box').fadeIn("slow");
        $('.battle-moves').fadeIn("slow");
    });

    $('.attack-1').on('click', function() {
        $('.selectedCharacterImg').html("<img src='assets/images/upper-cut.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
        setTimeout(function(){ 
            $('.selectedCharacterImg').html("<img src='assets/images/idle.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
            }, 1000);
        enemyHp -= attack1; 
        currentHp -= enemyDamage;
        $('.heroCurrentHP').text("HP: " + currentHp);
        $('.monsterCurrentHP').text("HP: " + enemyHp); 
        $('.damageToHero').show();
        $('.damageToSlim').show();  
        $('.damageToHero').text(enemyDamage);
        $('.damageToHero').fadeOut("slow");
        $('.damageToSlim').text(attack1);
        $('.damageToSlim').fadeOut("slow");
        checkGame(); 
    });

    $('.attack-2').on('click', function() {
        $('.selectedCharacterImg').html("<img src='assets/images/dbslice.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
        setTimeout(function(){ 
            $('.selectedCharacterImg').html("<img src='assets/images/idle.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
            }, 1800);
        enemyHp -= attack2; 
        currentHp -= enemyDamage;
        $('.heroCurrentHP').text("HP: " + currentHp);
        $('.monsterCurrentHP').text("HP: " + enemyHp);
        $('.damageToHero').show();
        $('.damageToSlim').show();  
        $('.damageToHero').text(enemyDamage);
        $('.damageToHero').fadeOut("slow");
        $('.damageToSlim').text(attack2);
        $('.damageToSlim').fadeOut("slow");
        checkGame();  
    });

    $('.attack-3').on('click', function() {
        $('.selectedCharacterImg').html("<img src='assets/images/triple-threat-strike.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
        setTimeout(function(){ 
            $('.selectedCharacterImg').html("<img src='assets/images/idle.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
            }, 2600);
        enemyHp -= attack3; 
        currentHp -= enemyDamage;
        $('.heroCurrentHP').text("HP: " + currentHp);
        $('.monsterCurrentHP').text("HP: " + enemyHp); 
        $('.damageToHero').show();
        $('.damageToSlim').show();  
        $('.damageToHero').text(enemyDamage);
        $('.damageToHero').fadeOut("slow");
        $('.damageToSlim').text(attack3);
        $('.damageToSlim').fadeOut("slow");
        checkGame(); 
    });

    $('.attack-4').on('click', function() {
        $('.selectedCharacterImg').html("<img src='assets/images/quad-slash.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
        setTimeout(function(){ 
            $('.selectedCharacterImg').html("<img src='assets/images/idle.gif' class='idle-battle-img'> <div class='damageToHero'></div> ");
            }, 3000);
        enemyHp -= attack4; 
        currentHp -= enemyDamage;
        $('.heroCurrentHP').text("HP: " + currentHp);
        $('.monsterCurrentHP').text("HP: " + enemyHp);
        $('.damageToHero').show();
        $('.damageToSlim').show();  
        $('.damageToHero').text(enemyDamage);
        $('.damageToHero').fadeOut("slow");
        $('.damageToSlim').text(attack4);
        $('.damageToSlim').fadeOut("slow");
        checkGame(); 
    });

    };

    function checkGame() {
        if (currentHp <= 0) {
            $('#dungeon').fadeOut("fast"); 
            $('.battle-history-text-box').fadeOut("slow");
            $('.battle-moves').fadeOut("slow");
            $('.gameover').fadeIn("slow"); 
            $('#myBtn').html("Restart");
            $('#myBtn').fadeIn("slow"); 
            $('#myBtn').on('click', function reset() {
                location.reload();
            })
        }

        if (enemyHp <= 0) {
            $('#dungeon').fadeOut("fast"); 
            $('.battle-history-text-box').fadeOut("slow");
            $('.battle-moves').fadeOut("slow");
            $('.gamewin').fadeIn("slow"); 
            $('#myBtn').html("Restart");
            $('#myBtn').fadeIn("slow"); 
            $('#myBtn').on('click', function reset() {
                location.reload();
            })
        }
    }; 

    startGame();
    
    var fewSeconds = 1;

    $('btn-block').click(function(){  
        var btn = $('.btn-block');
        btn.prop('disabled', true);
        setTimeout(function(){
            btn.prop('disabled', false);
        }, fewSeconds*3000);
    });
});


