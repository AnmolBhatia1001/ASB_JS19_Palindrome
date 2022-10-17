const appDiv = document.getElementById("app");

(
    function (){
        const heading = document.createElement("h1");
        heading.innerText = "Palindrome Checker"
        heading.setAttribute("class", "text-6xl font-semibold text-center")
        appDiv.append(heading)

        const inputContainer = document.createElement("div");
        const inputElement = document.createElement("input");

        inputContainer.setAttribute("class", "flex justify-center")

        inputElement.setAttribute("id", "userInput")
        inputElement.setAttribute("type", "text")
        inputElement.setAttribute("placeholder", "Enter or paste your text")
        inputElement.setAttribute("oninput", "isPalindrome()")
        inputElement.setAttribute("class", "p-4 text-2xl w-[600px] rounded-2xl text-black")

        inputContainer.append(inputElement)
        appDiv.append(inputContainer)

        const outputContainer = document.createElement("div");
        const outputElement = document.createElement("h3");
        const outputLabel = document.createTextNode("Type or Paste your text above")

        outputElement.setAttribute("id", "outputEle")
        outputElement.setAttribute("class", "text-4xl text-center")

        appDiv.setAttribute("class", "mt-20 flex flex-col item-center justify-center gap-12")

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

    if(userInputText.length > 0){
        if(userInputText === reversedText){
            outputEle.innerText = "Is Palindrome : True"
        }else{
            outputEle.innerText = "Is Palindrome : False"
        }
    }else{
        outputEle.innerText = "Type or Paste your text above"
    }
}

