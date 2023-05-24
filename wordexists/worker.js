// List of words
const wordList = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
  'kiwi',
  'lemon'
];

// Handle incoming requests
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

// Request handler
async function handleRequest(request) {
  // Extract the word from the request URL
  const url = new URL(request.url);
  const path = url.pathname;
  const word = path.substring(1); // Remove leading slash

  if (!word) {
    // Input not specified, return JSON error response
    const errorResponse = {
      error: 'Input not specified'
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }



  // Check if the word exists in the list
  const exists = wordList.includes(word);

  // Prepare the response
  const response = {
    exists: exists
  };

  // Return the response as JSON
  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
