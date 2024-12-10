// tag options
const tagOptions = [
    "p", "h1", "h2", "h3", "h4", "h5", "h6", "span",
];

// Get DOM Elements
const optionsContainer = document.querySelector(".options");
const outputContainer = document.querySelector(".output");
const tagSelect = document.getElementById("tags");
const paragraphsSlider = document.getElementById("paragraphs");
const wordsSlider = document.getElementById("words");
const paragraphsVal = document.getElementById("paragraphsVal");
const wordsVal = document.getElementById("wordsVal");

// Create options UI
function createOptionsUI() {
    // Create tag options to fill up <select> element
    tagOptions.forEach((tag) => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = `<${tag}>`;
        tagSelect.appendChild(option);
    });

    // Event Listeners for sliders
    paragraphsSlider.addEventListener("input", updateParagraphsVal);
    wordsSlider.addEventListener("input", updateWordsVal);

    const generateButton = document.getElementById("generate");
    generateButton.addEventListener("click", generateLoremIpsumText);
}

// Update the displayed value for paragraphs
function updateParagraphsVal() {
    paragraphsVal.textContent = paragraphsSlider.value;
}

// Words per paragraph needs to be updated on the display
function updateWordsVal() {
    wordsVal.textContent = wordsSlider.value;
}

// Generate Lorem Ipsum text
function generateLoremIpsumText() {
    const paragraphs = parseInt(wordsSlider.value);
    const tag = document.getElementById("tags").value;
    const includeHTML = document.getElementById("include").value;
    const wordsPerParagraph = parseInt(wordsSlider.value);
    const loremIpsumText = generateText(paragraphs, tag, includeHTML, wordsPerParagraph);

    displayLoremIpsum(loremIpsumText);
}

// Function for generating Lorem Ipsum text
function generateText(paragraphs, tag, includeHTML, wordsPerParagraph) {
    // Using placeholder text to show an example of illustrating
    const placeholderText = `Lorem ipsum dolor sit amet 
        consectetur adipiscing elit sed 
        do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`;

    // Create an array of paragraphs
    const paragraphsArray = new Array(paragraphs).fill("");

    // Generate words for each paragraph
    for (let i = 0; i < paragraphs; i++) {
        const words = generateWords(wordsPerParagraph);
        paragraphsArray[i] = includeHTML === "Yes" ? `<${tag}>
        ${words}<${tag}>` : words;
    }

    // Join paragraphs into a single string
    return paragraphsArray.join("\n");
}

// Function to generate a specified number of words (for e.g., 100 words)
function generateWords(numOfWords) {
    // For demo purposes
    const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Diam in arcu cursus euismod 
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis 
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus 
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;

    // Split Lorem Ipsum text into words
    const words = loremIpsumText.split(" ");

    // Ensure that the number of words requested is within bounds of the available words
    if (numOfWords <= words.length) {
        return words.slice(0, numOfWords).join(" ");
    }
    else {
        return words.join(" ");
    }
}

// Display Lorem Ipsum text
function displayLoremIpsum(text) {
    outputContainer.innerHTML = text;
}

// Initialise the app
createOptionsUI();