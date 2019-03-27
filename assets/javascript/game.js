//initializing variables
var wins= 0,
    losses= 0,
    posD=0,
    posW=0,
    guessesRemaining= 12,
    lettersGuessed= "",
    currentWord,
    userKey

//connecting to html
var winsText=document.getElementById("wins"),
    lossesText=document.getElementById('losses'),
    wordDashText=document.getElementById('wordDash'),
    guessesRemainingText=document.getElementById('guessesRemaining'),
    lettersGuessedText=document.getElementById('lettersGuessed'),
    alreadyGuessedText=document.getElementById('alreadyGuessed'),
    introText=document.getElementById('intro')

//arrays
var wordArray= ['octopus','dolphin','shark','jellyfish','turtle','whale','seahorse','coral'],
    dashArray= ['-------','-------','-----','---------','------','-----','--------','-----'],
    lettersArray= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']







//photos connecting to html
var whalePhoto= document.getElementById('whale'),
    dolphinPhoto= document.getElementById('dolphin'),
    jellyFishPhoto= document.getElementById('jellyfish'),
    turtlePhoto= document.getElementById('turtle'),
    sharkPhoto= document.getElementById('shark'),
    seaHorsePhoto= document.getElementById('seahorse'),
    octopusPhoto= document.getElementById('octopus')

    


//object with my game functions
var game={
    //if dashArray[posD] no longer has dashes then:
    //wins go up by one
    //introText directs to next word
    //dash and word array index will go up by one for new word
    //photo will show of word achieved
    won: function(){  
        wins+=1
        winsText.textContent= wins
        posD+=1 
        posW+=1
        introText.textContent="Great! Press ENTER for next word!"
        this.showPhoto()    
    },

    lost: function(){
        //if number of guesses remaining equals 1 and the userkey just pressed is not in wordArray[posW]:
        //losses will increase by 1
        //textContent of intro will direct to new word
        //guessesRemaining will equal 0
        //index of word and dash arrays will be increased by one for new word
        introText.textContent= "Too bad, press ENTER to try a different word!"
        guessesRemaining=0
        guessesRemainingText.textContent= guessesRemaining
        losses+=1
        lossesText.textContent= losses
        posD += 1
        posW += 1    
    },

    gotOne: function(){
        //if userKey is in the wordArray[posW] then wordArray[posW] will be split and looped through
        //loop will find each userKey and push the index to a new array, posArray
        //the dashArray[posD] will be split
        //new array, posArray, will be looped through and each index will take the dashArray[posD] index and = userKey
        //regex used to check if there are any dashes left in dashArray[posD], if not it will go to "won" function
        var multiArray= wordArray[posW].split('')
        var posArray= []
        var dashSplit= dashArray[posD].split('')
        for (var i=0; i < multiArray.length; i ++){
          if(multiArray[i]=== userKey){
            posArray.push(i)
          }
        }
        for (var i=0; i < posArray.length; i++){
          dashSplit[posArray[i]]= userKey
        }
        dashArray[posD]=dashSplit.join('')
        wordDashText.textContent= dashArray[posD]
        if(dashArray[posD].match(/-/g) === null){
           this.won()
        }    
    },

    guessedAlready: function(){
        //if letter is guessed again intro text will show already guessed
        introText.textContent = "Already Guessed!!!"
    },

    fail: function(){
        //if userKey is not in wordArray[posW]:
        //guessesRemaining goes down by one
        //lettersGuessed adds userKey
        //player is shown with text for guessesRemaining and lettersGuessed
        guessesRemaining-=1
        guessesRemainingText.textContent= guessesRemaining
        lettersGuessed+= userKey
        lettersGuessedText.textContent = lettersGuessed
    },

    restartWord: function(){
        //if enter is pressed for new word (after won function or loss function:
        //introText will direct to press letter
        //re-initializing guessesRemaining and lettersGuessed
        //new word dashes displayed
        introText.textContent= "Press a letter to guess!"  
        guessesRemaining=12
        guessesRemainingText.textContent= guessesRemaining
        lettersGuessed= ''
        lettersGuessedText.textContent= lettersGuessed
        wordDashText.textContent=dashArray[posD]       
    },

    showPhoto: function(){
        //when play guesses whole word these pics will appear
        //end photo is a background change and introText will announce end game
        if(posW === 6){
            whalePhoto.style.display= "block"
            whalePhoto.style.zIndex= 1
        }else if(posW === 2){
            dolphinPhoto.style.display="block"
        }else if(posW === 1){
            octopusPhoto.style.display="block"
        }else if(posW === 3){
            sharkPhoto.style.display="block"
        }else if(posW === 4){
            jellyFishPhoto.style.display="block"
        }else if(posW === 5){
            turtlePhoto.style.display="block"
        }else if(posW === 7){
            seaHorsePhoto.style.display="block"
        }else{
            document.body.style.backgroundImage= "url('https://ichef.bbci.co.uk/news/624/cpsprodpb/17EC5/production/_102898979_figure6-creditsusannrossbach.jpg')"
            document.body.style.backgroundRepeat="no-repeat"
            document.body.style.backgroundSize= "cover"
            introText.textContent= "Congrats! That's it!"
        }
    }
}


//start of game/logic
wordDashText.textContent= dashArray[posD]
document.onkeyup=function(event){
  userKey=event.key.toLowerCase()  
  wordDashText.textContent= dashArray[posD]
  if(introText.textContent === "Already Guessed!!!"){
      introText.textContent= "Press a letter to guess!"
  }
  if(guessesRemaining === 0|| introText.textContent === "Great! Press ENTER for next word!"){
        game.restartWord()
   } 
  if(userKey.length === 1){
    if(guessesRemaining === 1 && wordArray[posW].indexOf(userKey) < 0){
        game.lost()
    }else if(dashArray[posD].indexOf(userKey) >= 0 || lettersGuessed.indexOf(userKey)>=0){
        game.guessedAlready()
    }else if(wordArray[posW].indexOf(userKey) >=0){
        game.gotOne()
    }else{
        game.fail()
    }  
  }   
}


































