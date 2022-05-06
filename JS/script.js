var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
/*-----------------------------------------------------------------------------------------*/
function jump(){/*การกระโดด*/
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
/*-----------------------------------------------------------------------------------------*/
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));/*กระโดด*/
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));/*เดิน*/
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){/*ค่าความเร็วของการเดินและกระโดด*/
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));/*This page says*/
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);