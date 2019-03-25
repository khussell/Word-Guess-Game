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
    dashArray= ['----','-------','-----']




var game={
    won: function(){
        
        wins+=1
        winsText.textContent= wins
        posD+=1
        wordDashText.textContent=dashArray[posD]
        posW+=1
        guessesRemainingText.textContent=12
        lettersGuessedText.textContent=''
        introText.textContent="Great! Press any key for next word!"
        
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
        if(dashArray[posD].match(/-/g) === null){
            this.won()
        }
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
        wordDashText.textContent=dashArray[posD]
    
    }
}




document.onkeyup=function(event){
    
wordDashText.textContent= dashArray[posD]
    userKey=event.key
    introText.textContent= "Press a letter to guess!"
   

    if(guessesRemaining === 0){
        game.restartWord()
    }else if(guessesRemaining === 1 && wordArray[posW].indexOf(userKey) < 0){
        game.lost()
    }else if(dashArray[posD].indexOf(userKey) >= 0 || lettersGuessed.indexOf(userKey)>=0){
        game.guessedAlready()
    }else if(wordArray[posW].indexOf(userKey) >=0){
        game.gotOne()
    }else{
        game.fail()
    }
    
}








































