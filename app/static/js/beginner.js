// const inputField = document.getElementById('input-field');
// let text = document.getElementById('text');
// if (text) {
//   text = text.textContent.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
// }
// let score = 0; // Tracks how few helps user needed, higher is better
// const textArray = text.filter(emptyWord => emptyWord !== '') // Removes empty elements
// let currentWordIndex = 0;
// let currentWord = textArray[currentWordIndex];
// inputField.value = '';
// inputField.focus();

// let correctWordsArray = []; // an array to keep track of the correct words entered so far

// inputField.addEventListener('keydown', (event) => {
//     if (event.key === ' ') {
//         event.preventDefault(); // prevent default spacebar behavior
//         const userInput = inputField.value.trim().toLowerCase();

//         // Increment/decrement if the word entered is the next in the sequence
//         if (userInput === currentWord) {
//             score++; // Increment the score
//             currentWordIndex++;
//             if (currentWordIndex < textArray.length) {
//                 currentWord = textArray[currentWordIndex];
//                 inputField.value = ''; // clear the input field
//                 // Add the previous word to the display
//                 const previousWord = textArray[currentWordIndex - 1];

//                 const correctWords = document.getElementById('correctWords')
//                 correctWords.textContent += previousWord + ' ';
//             } else {
//                 // User finished the text

//                 window.location.href = '/'; // Redirect to home page
//             }
//         } else { // Wrong word entered
//             score--; // Decrement score

//             // flash the input field border red
//             inputField.style.backgroundColor = 'red';
//             setTimeout(() => {
//                 inputField.style.backgroundColor = '';
//             }, 500); // set timeout to reset border color after 100 milliseconds
//         }
//         const scoreDisplay = document.getElementById('score');
//         scoreDisplay.textContent = score; // Display the score
//         inputField.value = '' // Clear input field
//     }
// });


// // Generates image from DALL-E API
// const prompt = "an elephant in the forest";
// const apiKey = process.env.OPEN_API_KEY;
// const endpointUrl = "https://api.openai.com/v1/images/generations";

// fetch(endpointUrl, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${apiKey}`,
//   },
//   body: JSON.stringify({
//     "model": "image-alpha-001",
//     "prompt": prompt,
//     "num_images": 1,
//     "size": "256x256",
//   }),
// })
// .then(response => response.json())
// .then(result => {
//   console.log(result);
//   const imageUrl = result.data[0].url;
//   const img = new Image();
//   img.src = imageUrl;
//   document.body.appendChild(img); // append the image to the body of the page
// })
// .catch(error => console.error(error));




// Request a random image from Lorem Picsum API
fetch('https://picsum.photos/512/512')
  .then(response => {
    // Get the image URL from the response headers
    const imageUrl = response.url;
    // Create a new image element and set its source to the URL
    const img = new Image();
    img.src = imageUrl;
    // Add the image to the page
    document.body.appendChild(img);
  })
  .catch(error => console.error(error));