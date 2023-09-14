# Pomodogo Client by Mongo-Juice
Repository for the front-end of our Lap 3 project. Meant to be used in conjunction with our [back-end](https://github.com/RobbieStam/lap3-project-backend).

Create an account, use the pomodoro timer, and record your completed tasks! Completing sessions makes your dog happy!

# Installation and Usage
- **Clone** this repository: `git clone <repo>`
- Install dependencies: `npm install`
- Run the app: `npm run dev`
- Open in browser
  - By default, the app runs on [5173](http://localhost:5173)

# Routes
| Route | Purpose |
| --- | --- |
| `/` | Homepage. |
| `/register` | Page where you can create an account. |
| `/login` | Page where you can login. |
| `/pomodoro` | The main page of the app. Has a pomodoro timer. |
| `/profile` | View your completed tasks/sessions and the happiness of your dog. |
| `/logout` | Logs you out and redirects to homepage. |
Please note that certain pages can only be accessed once you are logged in, and others can only be accessed when you are logged out.