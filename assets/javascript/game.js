var wins= 0,
    losses= 0,
    guessesRemaining= 12,
    alreadyGuessed= "",
    currentWord,
    userKey


var winsText=document.getElementById("wins"),
    lossesText=document.getElementById('losses'),
    wordDashText=document.getElementById('wordDash'),
    guessesRemainingText=document.getElementById('guessesRemaining'),
    alreadyGuessedText=document.getElementById('alreadyGuessed')

var wordArray= ['fish','dolphin','shark']
    dashArray= ['____','_______','_____']


for (var i=0; i <dashArray.length;i++){
    wordDashText.textContent= dashArray[i]
    for(var j=0; j < wordArray.length; j++){
        if(wordArray[j].indexOf('_') <= 0){
            wins+=1
            winsText.textContent= wins
            break;
        }
        if(guessesRemaining === 0){
            losses+= 1
            lossesText.textContent= losses
            break;
        }
        document.onkeyup=function(event){
            alreadyGuessedText.textContent="none"
            userKey= event.key.toLowerCase()
            if(wordArray[j].indexOf(userKey) >= 0){
                var index= wordArray[j].indexOf(userKey)
                charAt
            }
        }
    }
}
