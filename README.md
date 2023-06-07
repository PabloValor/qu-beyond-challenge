# QU Challenge

### Production link
https://qu-beyond-challenge.vercel.app/

### Run in development mode
```yarn dev```

### Run using Docker
Install Docker on your machine.
Build your container: ```docker build -t qu-challenge .```\
Run your container: ```docker run -p 3000:3000 qu-challenge```

### Stack 
* React (using vite)
* react-router-dom
* TailwindCSS
* react-icons
* docker 

### Technical decisions
I decided to create this app as a ```SPA``` web app instead of using a framework with Server Side Rendering like ```Next.js```. I made this decision because I believe that the main focus of the challenge is to evaluate how I fetch and manage data on the frontend side. 