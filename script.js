const appDiv = document.getElementById("app");

(
    function (){
        const heading = document.createElement("h1");
        heading.innerText = "Palindrome Checker"
        appDiv.append(heading)

        const inputContainer = document.createElement("div");
        const inputElement = document.createElement("input");

        inputElement.setAttribute("id", "userInput")
        inputElement.setAttribute("type", "text")
        inputElement.setAttribute("placeholder", "Enter or paste your text")
        inputElement.setAttribute("oninput", "isPalindrome()")

        inputContainer.append(inputElement)
        appDiv.append(inputContainer)

        const outputContainer = document.createElement("div");
        const outputElement = document.createElement("h3");
        const outputLabel = document.createTextNode("Is Palindrome : ")

        outputElement.setAttribute("id", "outputEle")

        outputElement.appendChild(outputLabel)
        outputContainer.append(outputElement)
        appDiv.append(outputContainer)
        
    }
)()

function strReverse(str){
    let strArr = str.split("");
    let reverseArr = strArr.reverse();
    let reversedStr = reverseArr.join("");
    return reversedStr
}

function isPalindrome(){
    const userInput = document.getElementById("userInput");
    const outputEle = document.getElementById("outputEle");

    let userInputText = String(userInput.value)
    let reversedText = strReverse(userInputText);

    if(userInputText === reversedText){
        outputEle.innerText = "Is Palindrome : True"
    }else{
        outputEle.innerText = "Is Palindrome : False"
    }
}

