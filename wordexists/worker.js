// Handle incoming requests
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

// Request handler
async function handleRequest(request) {
  // Extract the word from the request URL
  const url = new URL(request.url);
  const path = url.pathname;
  const word = path.substring(1).toLowerCase(); // Remove leading slash and convert to lowercase

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

  // Read the word list from a file
  const wordList = await getWordListFromFile();

  // Check if the lowercase word exists in the lowercase list
  const exists = wordList.map(w => w.toLowerCase()).includes(word);

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

// Helper function to read the word list from a file
async function getWordListFromFile() {
  // Fetch the file content
  const response = await fetch('https://gist.githubusercontent.com/wchargin/8927565/raw/d9783627c731268fb2935a731a618aa8e95cf465/words'); // Replace with your actual file URL

  if (response.ok) {
    // Read the file content as text
    const text = await response.text();

    // Split the text by new lines to create the word list
    const wordList = text.split('\n');

    return wordList;
  } else {
    throw new Error('Failed to fetch word list');
  }
}
