var wins= 0,
    losses= 0,
    posD=0,
    posW=0,
    guessesRemaining= 12,
    lettersGuessed= "",
    currentWord,
    userKey


var winsText=document.getElementById("wins"),
    lossesText=document.getElementById('losses'),
    wordDashText=document.getElementById('wordDash'),
    guessesRemainingText=document.getElementById('guessesRemaining'),
    lettersGuessedText=document.getElementById('lettersGuessed'),
    alreadyGuessedText=document.getElementById('alreadyGuessed'),
    introText=document.getElementById('intro')

var wordArray= ['fish','dolphin','shark'],
    dashArray= ['----','xxxxxxx','xxxxx']


wordDashText.textContent= dashArray[posD]


var game={
    won: function(){
        
        wins+=1
        winsText.textContent= wins
        posD+=1
        dashArrayText.textContent=dashArray[posD]
        posW+=1
        guessesRemainingText.textContent=12
        lettersGuessedText.textContent=''
        
    },

    lost: function(){
        introText.textContent= "Press any key to try a different word!"
        guessesRemaining=0
        guessesRemainingText.textContent= guessesRemaining
        losses+=1
        lossesText.textContent= losses
        posD += 1
        posW += 1
        
        
        
    },

    gotOne: function(){
        var ind= wordArray[posW].indexOf(userKey)
        var pleaseWork= dashArray[posD]
        var help= pleaseWork.split('')
        help[ind]= userKey
        dashArray[posD]=help.join('')
        wordDashText.textContent= dashArray[posD]
    },

    guessedAlready: function(){
        introText.textContent = "Already Guessed!!!"
    },

    fail: function(){
        guessesRemaining-=1
        guessesRemainingText.textContent= guessesRemaining
        lettersGuessed+= userKey
        lettersGuessedText.textContent = lettersGuessed
    },

    restartWord: function(){
        guessesRemaining=12
        guessesRemainingText.textContent= guessesRemaining
        lettersGuessed= ''
        lettersGuessedText.textContent= lettersGuessed
        dashArrayText.textContent=dashArray[posD]
    
    }
}




document.onkeyup=function(event){
    wordDashText.textContent= dashArray[posD]
    userKey=event.key
    introText.textContent= "Press a letter to guess!"
    var dashInd=dashArray[posD].indexOf(userKey)
    var wordInd= wordArray[posW].indexOf(userKey)

    if(guessesRemaining === 0){
        game.restartWord()
    }

    if(guessesRemaining === 1 && wordInd < 0){
        game.lost()
    }else if(dashInd >= 0 || lettersGuessed.indexOf(userKey)>=0){
        game.guessedAlready()
    }else if(wordInd >=0){
        game.gotOne()
    }else{
        game.fail()
    }
    if(dashArray[posD].indexOf('-')<0){
        game.won()
    }
}








































