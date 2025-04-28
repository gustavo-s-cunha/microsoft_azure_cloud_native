# Roll a Die

This project is a simple web application that allows users to roll a six-sided die by clicking a button. The die features a 3D rotation animation and uses SVG images for visual representation.

## Project Structure

```
roll-a-die
├── public
│   ├── index.html          # Main HTML document
│   ├── styles              # Directory for styles
│   │   └── main.scss       # SCSS styles for the application
│   └── assets              # Directory for assets
│       └── dice            # Directory for die images
│           ├── die-1.svg   # SVG for side 1
│           ├── die-2.svg   # SVG for side 2
│           ├── die-3.svg   # SVG for side 3
│           ├── die-4.svg   # SVG for side 4
│           ├── die-5.svg   # SVG for side 5
│           └── die-6.svg   # SVG for side 6
├── src
│   ├── components          # Directory for React components
│   │   ├── Die.js         # Component for rendering the die
│   │   └── Button.js      # Component for the roll button
│   ├── app.js             # Main JavaScript entry point
│   └── utils              # Directory for utility functions
│       └── randomNumber.js # Function to generate random numbers
├── package.json            # npm configuration file
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
└── webpack.config.js       # Webpack configuration file
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd roll-a-die
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Build the project:
   ```
   npm run build
   ```

5. Start the application:
   ```
   npm start
   ```

## Usage

- Click the "Roll the Die" button to roll the die.
- The displayed side of the die will change with a 3D rotation animation.

## Technologies Used

- Node.js
- JavaScript
- HTML
- CSS/SCSS
- SVG
- React (for component architecture)

## License

This project is licensed under the MIT License.