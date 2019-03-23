var wins= 0,
    losses= 0,
    posD=0,
    posW=0,
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
    dashArray= ['----','-------','-----']


var game={
    won: function(){
        wins+=1
        winsText.textContent= wins
        posD+=1
        dashArray.textContent=dashArray[posD]
        posW+=1
    },

    lost: function(){
        losses+=1
        lossesText.textContent= losses
        posD+=1
        dashArray.textConent=dashArray[posD]
        posW+=1
    },

    gotOne: function(){
        var ind= wordArray[posW].indexOf(userKey)
        charAt(ind).dashArray[posD]=userKey
        wordDashText.textContent= dashArray[posD]
    },

    guessedAlready: function(){
        alreadyGuessedText.textContent = "Already Guessed!!!"
    },

    fail: function(){
        guessesRemaining-=1
        guessesRemainingText.value= guessesRemaining
        alreadyGuessed+= userKey
        alreadyGuessedText.textContent = alreadyGuessed
    }
}


document.onkeyup=function(event){
    userKey=event.key
    if(dashArray[posD].indexOf('-')<0){
        game.won()
    }else if(guessesRemaining === 0){
        game.lost()
    }else if(dashArray[posD].indexOf(userKey) >= 0){
        game.guessedAlready()
    }else{
        game.fail()
    }
}








































