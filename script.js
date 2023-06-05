var stats = document.getElementById("status")
var chossen = document.getElementById("chossen")
var roboScore = document.getElementById("scoreRobo")
var manScore = document.getElementById("scoreMan")
function selected(text) {
    const options = ['Rock', 'Paper', 'Scissor']
    var num = Math.floor(Math.random() * 3)
    chossen.innerHTML = text + " vs " + options[num]
    if(text === options[num]){
        stats.innerHTML = "Draw 🙄"
    }
    else if(text=="Rock" && options[num]=="Scissor"){
        manScore.innerHTML = parseInt(manScore.innerHTML) + 1
        stats.innerHTML = "You Won! 🥳"
    }
    else if(text=="Rock" && options[num]=="Paper"){
        roboScore.innerHTML = parseInt(roboScore.innerHTML) + 1
        stats.innerHTML = "Computer Won! ☹️"
    }
    
    else if(text=="Paper" && options[num]=="Scissor"){
        roboScore.innerHTML = parseInt(roboScore.innerHTML) + 1
        stats.innerHTML = "Computer Won!☹️"
    }
    else if(text=="Paper" && options[num]=="Rock"){
        manScore.innerHTML = parseInt(manScore.innerHTML) + 1
        stats.innerHTML = "You Won!🥳"
    }

    else if(text=="Scissor" && options[num]=="Rock"){
        roboScore.innerHTML = parseInt(roboScore.innerHTML) + 1
        stats.innerHTML = "Computer Won!☹️"
    }
    else if(text=="Scissor" && options[num]=="Paper"){
        manScore.innerHTML = parseInt(manScore.innerHTML) + 1
        stats.innerHTML = "You Won!🥳"
    }
}

function resetButt(){
    manScore.innerHTML = 0 
    roboScore.innerHTML = 0
    stats.innerHTML = "Let's Play!"
    chossen.innerHTML = "Choose your option"
}