# Web-Development-Mini-Projects - TOTAL (32)

A collection of 32 web development mini-projects built using HTML, CSS, JavaScript, Flask, React, APIs, and Node.js.

## PROJECT - 1 : Movie Ranking Webpage (HTML)

## Algorithm

1. **Start** by creating an HTML document.
2. **Define** a `<h1>` header with the title "The Best Movies According to Imran".
3. **Add** a `<h2>` subheader with the text "My top 3 movies of all-time." to introduce the list.
4. **Insert** a `<hr />` tag to create a horizontal line separator between the title and the movie entries.
5. **For each** movie in the list of top 3 movies:
   1. **Create** a `<h3>` header with the name of the movie.
   2. **Add** a `<p>` paragraph with a short description of why the movie is favored.
6. **End** the document.

## PROJECT - 2 : Birthday Invitation Webpage (HTML)

## Algorithm

1. Start with the basic HTML structure containing headings, an image, and a list.
2. Identify the unordered list `(<ul>)`.
3. Replace the `<ul>` tag with an ordered list `(<ol>)`.
4. Keep each list item `(<li>)` the same.
5. Save and load the HTML to display numbered bullets instead of regular bullets.

## PROJECT - 3 : Spanish Color Learner Webpage (HTML & CSS)

## Algorithm

1. Create an HTML file `(index.html)`.
2. Create a CSS file `(style.css)`.
3. Link the CSS file to the HTML file using `<link>` in the `<head>`.
4. In the CSS file, assign colors to each heading using their id.
5. Set all headings to have "font-weight: normal" using the `.color-title` class.
6. Set all images to be 200px in both height and width using the `img` selector.

## PROJECT - 4 : Motivational Poster Webpage (HTML & CSS)

## Algorithm

1. Set up the HTML structure with a `<div>` containing the image and text.
2. Add CSS for styling the body, image, and headings.
3. Link Google Fonts for the Libre Baskerville font in the `<head>`.
4. Insert the image using the `<img>` tag.
5. Style the image with margin-left, margin-top, height, and a yellow border.
6. Set the color of the h1 heading to yellow and apply the Google font.
7. Style the h3 subheading with white color and the same font.
8. Set the body’s background color to black using CSS.
9. Ensure the external CSS file is linked in the `<head>` section.
10. Save and run the HTML file in a browser to display the styled content.

## PROJECT - 5 : Name Card Webpage (FLASK)

## Algorithm

1. **Initialize Flask Application**:
   - Import the `Flask` class from the Flask package.
   - Create an instance of the `Flask` application.
2. **Define Route**:
   - Set up the root URL route (`'/'`) with a function `greet()`.
   - Use the `render_template` function to return the `index.html` file when the route is accessed.
3. **Run Application**:
   - Use the `app.run(debug=True)` method to start the Flask server with debugging enabled if the script is run as the main program.

## PROJECT - 6 : Blog Website (FLASK)

## Algorithm

1. **Import Required Libraries:**
   - Import `Flask`, `render_template`, and `url_for` from the Flask framework.
   - Import the `requests` module for handling HTTP requests.
2. **Define Constants:**
   - Set `API_ENDPOINT` to the URL of the API that provides JSON data.
3. **Initialize Flask Application:**
   - Create an instance of the `Flask` class.
4. **Fetch Data from API:**
   - Use the `requests.get()` method to fetch data from the API endpoint.
   - Parse the JSON response and store it in `server_data`.
5. **Define Routes:**
   - **Root Route (`/`):** Render the `index.html` template and pass `server_data` to it.
   - **About Route (`/about`):** Render the `about.html` template.
   - **Contact Route (`/contact`):** Render the `contact.html` template.
   - **Post Route (`/post/<int:index>`):** Extract the post ID (`index`) from the URL, search for the matching post, and render `post.html`.
6. **Run the Application:**
   - Check if the script is run directly (`__name__ == "__main__"`).
   - Start the Flask development server by calling `app.run()`.

## PROJECT - 7 : To-Do List Web App (HTML, CSS, JS)

## Algorithm

1. **Start** by creating the HTML structure with a `<div>` container for the app.
2. **Add** an `<input>` field for entering new tasks and a button labeled "Add Task".
3. **Create** an empty `<ul>` list element to display the tasks dynamically.
4. **Style** the app using CSS to enhance visual appearance.
5. **In JavaScript**, select the input, button, and list elements.
6. Add an event listener to create a new `<li>` when "Add Task" is clicked.
7. Attach click events to toggle a completed class and add a delete button.
8. Optionally store tasks in `localStorage`.
9. Retrieve and render stored tasks on page load.
10. **End** the script.

## PROJECT - 8 : Weather Finder Web App (HTML, CSS, JS)

## Algorithm

1. **Start** by creating an `index.html` document with an input for a city, a "Get Weather" button, and areas for weather and error messages.
2. **Create** a `style.css` file and use a `.hidden` class for visibility.
3. **Create** a `script.js` file and wait for `DOMContentLoaded`.
4. Grab the required DOM elements and attach a click event listener.
5. Extract and trim the city name.
6. Use `fetch()` to make an API call to OpenWeatherMap.
7. If valid data is returned, extract the city, temperature, and description.
8. Convert temperature from Kelvin to Celsius and update the DOM.
9. If the API fails or the city is invalid, hide the weather section and display an error.
10. **End**.

## PROJECT - 9 : Simple E-Commerce Web App (HTML, CSS, JS)

## Algorithm

1. **Start** by creating the HTML structure with a products section and shopping cart section.
2. Create a `product-list` container for products rendered by JavaScript.
3. Create `cart-items`, `empty-cart`, and `cart-total` elements.
4. Style the page using `styles.css`.
5. Define a list of products as JavaScript objects.
6. Render products dynamically and provide an "Add to Cart" button.
7. Store selected products in a cart array.
8. Update cart items and total price dynamically.
9. Show or hide the cart total and empty-cart message based on cart contents.
10. Handle checkout and clear the cart.
11. **End** the script.

## PROJECT - 10 : Number Adder (HTML, CSS, JavaScript)

## Algorithm

1. **Create** a basic HTML layout with a container and heading.
2. **Add** two number input fields (`num1`, `num2`).
3. **Place** an **Add Numbers** button to trigger calculation.
4. **Create** a result display area.
5. **Style** the UI using CSS for clean layout and icons.
6. **Use JavaScript** to read input values, convert them to numbers, add them, and display the result dynamically.
7. **End**.

## PROJECT - 11 : Guess the Number Game (HTML, CSS, JavaScript)

## Algorithm

1. **Create** a basic HTML structure with a container and heading.
2. **Display** instructions to guess a number between **1 and 10**.
3. **Add** a number input field for the user's guess.
4. **Place** a **Guess** button.
5. **Create** a result display area.
6. **Style** the UI using CSS.
7. **Use JavaScript** to generate a random number, read and validate the guess, compare it with the random number, and display feedback.
8. Display **Too Low**, **Too High**, or **Correct Guess**.
9. Repeat until the correct number is guessed.
10. **End**.

## PROJECT - 12 : Profile Card Generator (HTML, CSS, JavaScript)

## Algorithm

1. **Create** a basic HTML structure with a container and heading.
2. **Add** a **Generate** button.
3. **Select** required DOM elements using JavaScript.
4. **Create** a function to generate a profile card dynamically.
5. Create the image, name, and description elements.
6. Append all created elements to the profile card.
7. Insert the profile card into the main container.
8. Display each new profile card below the previous one.
9. Repeat on every button click.
10. **End**.

## PROJECT - 13 : Loan Calculator (HTML, CSS, JavaScript)

## Algorithm

1. **Create** a basic HTML structure for the loan calculator.
2. Add inputs for Loan Amount, Annual Interest Rate, and Loan Term.
3. Add a **Calculate Loan** button.
4. Select required DOM elements.
5. Create a function to calculate loan details.
6. Convert annual interest to monthly interest and years to months.
7. Apply the loan EMI formula.
8. Calculate total payment and total interest.
9. Display the calculated values.
10. Repeat for updated inputs.
11. **End**.

## PROJECT - 14 : Countdown Timer (HTML, CSS, JavaScript)

## Algorithm

1. **Create** a basic HTML structure for the countdown timer.
2. Add an input for Target Date & Time.
3. Add Start, Pause, Resume, and Cancel/Reset buttons.
4. Select required DOM elements.
5. Read and validate the target date.
6. Calculate remaining time in milliseconds.
7. Convert remaining time into days, hours, minutes, and seconds.
8. Update the timer every second.
9. Implement Pause and Resume functionality.
10. Implement Cancel/Reset functionality.
11. **End**.

## PROJECT - 15 : Tip Calculator (HTML, CSS, JavaScript)

## Algorithm

1. **Create** a basic HTML structure for the Tip Calculator.
2. Add inputs for Bill Amount, Service Quality, and Number of People.
3. Add output fields for Tip Amount, Total Amount, Amount Per Person, and Tip Per Person.
4. Select all required elements.
5. Create `calculateTip()`.
6. Read and convert input values using `parseFloat`.
7. Validate the bill amount and number of people.
8. Calculate tip, total, per-person total, and per-person tip.
9. Format values using `toFixed(2)`.
10. Update the output elements.
11. Attach `input` event listeners.
12. Recalculate automatically when inputs change.
13. **End**.

## PROJECT - 16 : Auto Typing Effect (HTML, CSS, JavaScript)

## Algorithm

1. **Create** a basic HTML structure containing an element to display typing text.
2. Add a class such as `.auto-type`.
3. Include the Typed.js library using a CDN.
4. Initialize the `Typed` object in JavaScript.
5. Provide an array of strings.
6. Set typing speed using `typeSpeed`.
7. Set backspacing speed using `backSpeed`.
8. Enable looping.
9. Add a delay before backspacing.
10. Customize the cursor.
11. Enable smart backspacing.
12. Render the typing animation on page load.
13. **End**.

## PROJECT - 17 : Percentage Calculator

## Algorithm

1. Create an HTML structure containing number and percentage inputs, a calculate button, and result elements.
2. Select DOM elements using `getElementById` and `getElementsByClassName`.
3. Define `calculatePercentage()`.
4. Clear previous error messages.
5. Parse input values using `parseFloat()`.
6. Validate non-negative values and ensure percentage is between 0 and 100.
7. Display an error message if validation fails.
8. Calculate percentage using `(percent * amount) / 100`.
9. Calculate the final result by adding the percentage amount to the original number.
10. Display the percentage amount and final result.
11. Attach a click event listener.
12. **End**.

## PROJECT - 18 : Savings Calculator

## Algorithm

1. Create an HTML structure with inputs for goal amount, current savings, and monthly contribution.
2. Add the Feather icons library via CDN.
3. Select the required DOM elements.
4. Attach a click event listener to the calculate button.
5. Validate that all values are non-negative numbers.
6. Display an error message if validation fails.
7. Calculate the remaining amount.
8. Calculate the number of months needed from the remaining amount and monthly contribution.
9. Update the progress bar width.
10. Display the result or a success message if the goal is already achieved.
11. **End**.

## PROJECT - 19 : To Do List

## Algorithm

1. Initialize the current filter state and load existing todos from `localStorage`.
2. Create `saveToDo()` to persist the todos array.
3. Create `renderToDo()` to display todos according to the current filter.
4. Filter todos as all, completed, or pending.
5. Generate HTML elements with complete and delete buttons.
6. Create `addToDo()` to add new tasks and clear the input.
7. Create `toggleToDo()` to switch completed status.
8. Create `deleteToDo()` to remove a todo.
9. Attach event listeners to the add button, todo list, and filter buttons.
10. Render the initial list on page load.
11. **End**.

## PROJECT - 20 : Quick Portfolio

## Algorithm

1. Initialize a responsive navigation bar.
2. Render the header with introduction and call-to-action.
3. Display the profile image and about section.
4. Organize skills into visually distinct cards.
5. Present recent works in a grid layout.
6. Implement smooth scrolling.
7. Validate contact form fields.
8. Use external fonts and icons.
9. Ensure mobile-friendly design.
10. Add an interactive mobile navigation toggle.

## PROJECT - 21 : Awesome Posts (API Fetching)

## Algorithm

1. Wait for the DOM to fully load using `DOMContentLoaded`.
2. Select the `.posts-container`.
3. Define the API endpoint.
4. Create an asynchronous `fetchPosts` function.
5. Send an HTTP GET request.
6. Parse the JSON response.
7. Clear existing content or loading messages.
8. For each post, call `createPostElement`.
9. Create an article containing the post title and body.
10. Append each article to the posts container.
11. Invoke `fetchPosts`.
12. **End**.

## PROJECT - 22 : Country Explorer (HTML, CSS, JavaScript)

## Algorithm

1. **Start** by creating the basic HTML document structure.
2. Design the interface using input fields, buttons, and a result section.
3. Style the webpage using CSS.
4. Accept the country name from the user.
5. Trigger JavaScript when the search button is clicked.
6. Send a request to the REST Countries API using Fetch.
7. Receive country data in JSON format.
8. Extract country name, capital, population, region, and flag.
9. Display the information dynamically.
10. Handle invalid inputs and API errors.
11. **End**.

## PROJECT - 23 : Movies Finder (HTML, CSS, JavaScript, API)

## Algorithm

1. **Start** by creating the HTML structure.
2. Add a movie search input and search button.
3. Apply CSS styling.
4. Capture the entered movie name using JavaScript.
5. Send an API request to the OMDb API using Fetch.
6. Receive movie details in JSON format.
7. Verify whether the movie exists.
8. Extract title, poster, year, genre, and rating.
9. Display the movie details dynamically.
10. Show an error if the movie is not found.
11. **End**.

## PROJECT - 24 : Gemini AI Chat Application (HTML, CSS, JavaScript)

## Algorithm

1. **Start** by creating the HTML chat interface.
2. Design the message input and chat display area.
3. Style the application using CSS.
4. Accept the user's message.
5. Trigger JavaScript when the user sends a message.
6. Send the prompt to the Gemini AI API.
7. Receive the AI-generated response.
8. Parse the response.
9. Display the AI response in the chat window.
10. Append user and AI messages sequentially.
11. Handle empty inputs and API errors.
12. **End**.

## PROJECT - 25 : Currency Converter Using API

## Algorithm

1. **Start** by creating the HTML currency converter interface.
2. Design fields for amount, currency dropdowns, and conversion buttons.
3. Style the application using CSS.
4. Accept the amount and selected currencies.
5. Trigger JavaScript when Convert or Get Rates is clicked.
6. Send a request to the ExchangeRate-API.
7. Receive conversion rates.
8. Parse the response.
9. Display the converted amount or exchange rates.
10. Handle empty inputs and API errors.

## PROJECT - 26 : AI Powered Background Remover

## Algorithm

1. **Start** by creating the HTML structure with upload area, image previews, and action buttons.
2. Design a drag-and-drop zone and file input.
3. Style the application using CSS.
4. Accept an image using drag-and-drop or file selection.
5. Read the uploaded file using `FileReader`.
6. Send a POST request to the Slazzer API with the image as `FormData`.
7. Receive the processed image blob.
8. Convert the blob into an object URL.
9. Display the original and processed images.
10. Handle loading states, API errors, and invalid uploads.

## PROJECT - 27 : Donation Webpage (React)

## Algorithm

1. **Start** by creating the HTML structure for the donation interface.
2. Design preset amount options, custom amount input, donor details, and donation message.
3. Style the application using CSS.
4. Validate the donation amount, email, and required fields.
5. Send validated donation details to `/api/process-donation`.
6. Receive the transaction response.
7. Parse transaction ID, timestamp, and confirmed amount.
8. Display the donation confirmation and receipt details.
9. Handle loading, validation, and API errors.
10. Provide visual feedback throughout the process.

## PROJECT - 28 : Profile Card (React)

## Algorithm

1. Import React.
2. Define a functional `ProfileCard` component that accepts props.
3. Extract the `name` property.
4. Define language, bio, and image URL values.
5. Create an array of hobbies.
6. Initialize the JSX return statement.
7. Render a welcome heading.
8. Include the profile image.
9. Add favorite language and bio information.
10. Map over the hobbies array and display the hobbies.

## PROJECT - 29 : System View API (Node.js)

## Algorithm

1. Import `http`, `os`, `process`, and `url`.
2. Create helper functions to format memory and uptime values.
3. Define `getCpuInfo` for CPU model, cores, architecture, and load average.
4. Define `getMemoryInfo` for total and free memory.
5. Define `canGetOsInfo` for OS details.
6. Add utility functions for user, process, and network information.
7. Initialize an HTTP server with `http.createServer`.
8. Set the response header to `application/json`.
9. Handle the `/` route.
10. Map `/cpu`, `/memory`, `/user`, `/process`, `/network`, and `/os` to functions.
11. Return `404` for invalid routes.
12. Start the server on port `5000`.

## PROJECT - 30 : System View API (Node.js)

1. Project 30 is a simple Node.js HTTP API that returns system information in JSON format.
2. The server uses core Node.js modules such as `http`, `os`, `process`, and `url`.
3. Helper functions format raw values like memory bytes and uptime seconds.
4. The API includes CPU details such as model, total cores, architecture, and load average.
5. The API includes memory details such as total and free memory.
6. The API includes OS details such as type, platform, release, hostname, and uptime.
7. The API can also return current user information, process details, and network interface data.
8. The root route `/` returns project metadata and available endpoints.
9. Endpoints such as `/cpu`, `/memory`, `/user`, `/process`, `/network`, and `/os` return structured JSON responses; invalid routes return `404`.
10. The server starts on port `5000`.

## PROJECT - 31 : Website Speed Test (Node.js)

1. Project 31 is a small Node.js script that measures how long it takes to connect to one or more websites.
2. The script uses core Node.js modules such as `http` and reads command-line arguments from `process.argv`.
3. Targets are provided as command-line arguments.
4. Input URLs have their protocol removed with a regular expression to form a hostname.
5. Requests are made with `http.get()`, and start/end times are recorded using `Date.now()`.
6. Successful responses report hostname, response time in milliseconds, and HTTP status code.
7. Errors are handled and logged.
8. A 3-second timeout is enforced.
9. If no websites are supplied, the script prints `No Websites Mentioned`.
10. **End**.

## PROJECT - 32 : File Analysis Tool (Node.js)

1. Project 32 is a Node.js command-line tool that analyzes one or more text files.
2. The tool uses core Node.js modules such as `fs`, `path`, and `process`.
3. Supported counts include lines, words, and characters.
4. File paths are read from command-line arguments and flags such as `--detailed` can enable extended output.
5. Detailed output can include longest/shortest lines, frequent words, and per-line breakdowns.
6. The implementation can stream files to avoid high memory usage for large inputs.
7. File errors are handled gracefully.
8. The default encoding is UTF-8.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Flask
- React
- Node.js
- REST APIs
- External APIs
- Local Storage

## Repository Structure

Each project is organized in its own folder from Project 1 through Project 32.

## More projects will be added soon

