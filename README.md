# Cricket Scoreboard Web Application

A responsive cricket scoreboard built with React and Vite that allows tracking and displaying cricket match statistics in real-time.

## Features

- Team and individual batsmen score tracking
- Support for runs, wickets, and various extras (wide, no ball, bye, leg bye, free hit)
- Proper overs calculation with automatic striker switching
- Responsive design for all devices
- Clean, modern UI with clear visual feedback

## Installation

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cricket-scoreboard.git
cd cricket-scoreboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173/
```

## Usage

### Scoring Runs

- Click on number buttons (1, 2, 3, 4, 6) to add runs
- Odd runs (1, 3) will automatically switch the striker

### Recording Wickets

- Click "Wicket" or "LBW" buttons to record a dismissal
- The new batsman (simulated as Rahul) will be on strike

### Handling Extras

- Click the appropriate button for Wide, No Ball, Free Hit, Bye, or Leg Bye
- Wide and No Ball do not increment the ball count
- Free Hit sets up the next delivery where a batsman cannot be dismissed

### Controls

- Use "Switch" button to manually change striker
- Use "Reset" button to reset the entire scoreboard

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory, which can be deployed to any static hosting service.

## Project Structure

- `src/App.jsx`: Main component with game logic
- `src/App.css`: Application styling
- `src/index.css`: Global styling
- `src/main.jsx`: Application entry point

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the excellent frontend library
- Vite team for the fast build tool
- Cricket enthusiasts for their feedback and suggestions

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
