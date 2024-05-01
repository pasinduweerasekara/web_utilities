# web_utilities
These are some website utilities that i have created

## Animations

* ### typing animation
  * Create a object with TypingObject class with desired properties
  * call typeAndDelete() method through created object
  * Verify that All the phrases doesn't start with a whitespace (Code will be updated to handle this)
  * ### example
 
      ~~~js
      const typingElement1 = new TypingObject(
        element = document.getElementById("element1"), //text element in html file
        phrases = ["1 This is a Single time loop",
        "2 Second phrase of texts",
        "3 Last part of the phrases and fished"],
        loop=false,
        //add other properties (typingSpeed, pause, eletingSpeed)
      )

      typingElement1.typeAndDelete() //calling the method
      ~~~
