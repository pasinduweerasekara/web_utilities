class TypingObject {
    curPhraseIndex = 0 

    constructor(element, phrases,loop = true, typingSpeed = 100, pause = 1000, deletingSpeed = 50) {
        this.element = element // Assign the DOM element to be typed into
        this.phrases = phrases // Assign the array of phrases to be typed
        this.loop = loop
        this.curPhraseIndex = 0
        this.typingSpeed = typingSpeed
        this.pause = pause
        this.deletingSpeed = deletingSpeed
    }

    sleep(milliSeconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, milliSeconds) // A helper function to pause execution for a specified time
        })
    }

    typeAndDelete = async () => { // An async function to type and delete text
        let repeat = true
        while (repeat){ // Loop indefinitely
            let curPhrase = this.phrases[this.curPhraseIndex]
            for (let i = 0; i < curPhrase.length; i++) { // Loop through each character in the phrase
                this.element.innerText = curPhrase.substring(0, i + 1) // Update element with typed characters
                await this.sleep(this.typingSpeed) // Pause for typing speed duration
            }
            await this.sleep(this.pause) // Pause for pause duration after typing

            for (let i = curPhrase.length; i > 0; i--) { // Loop to delete characters
                this.element.innerText = curPhrase.substring(0, i) 
                if (i <= 1) { // If all characters are deleted
                    this.element.innerText = "\u00A0"
                    continue
                }
                await this.sleep(this.deletingSpeed)
            }

            if (this.curPhraseIndex == this.phrases.length - 1) { 
                if(!this.loop){ //if loop property is false braking the loop
                    break
                }
                this.curPhraseIndex = 0 
            } else {
                this.curPhraseIndex++
            }

        }
    }
}

// Create instances of TypingObject with different configurations
const typingElement1 = new TypingObject(element = document.getElementById("element1"), phrases = ["1 This is a Single time loop", "2 Second phrase of texts","3 Last part of the phrases and fished"],loop=false,typingSpeed=80,pause=200,deletingSpeed=40)
const typingElement2 = new TypingObject(element = document.getElementById("element2"), phrases = ["1 This is a Normal typing", "2 Infinite", "3 loop", "4 Again to first phrase"],loop = true, typingSpeed = 80, pause = 10)
const typingElement3 = new TypingObject(element = document.getElementById("element3"), phrases = ["1 Fast deleting Loop","2 Second phrase"],loop=true,typingSpeed=100, pause =500, deletingSpeed = 10)
const typingElement4 = new TypingObject(element = document.getElementById("element4"), phrases = ["1 Slow typing loop", "2 Like a", "3 Snail..:;"],loop=true, typingSpeed = 500, pause = 15, deletingSpeed = 100)

// Start the typing and deleting animation for each element
typingElement1.typeAndDelete()
typingElement2.typeAndDelete()
typingElement3.typeAndDelete()
typingElement4.typeAndDelete()
