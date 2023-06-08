# QU Challenge

### Production link
https://qu-beyond-challenge.vercel.app/

### Run in development mode
```yarn dev```
Navigate to ```http://localhost:3000```

### Run using Docker
Install Docker on your machine.\
Build your container: ```docker build -t qu-challenge .```\
Run your container: ```docker run -p 3000:3000 qu-challenge```\
Navigate to ```http://localhost:3000```


### Stack 
* React (using vite)
* react-router-dom
* TailwindCSS
* react-icons
* docker 

### Technical decisions
I decided to create this app as a ```SPA``` web app instead of using a framework with Server Side Rendering like ```Next.js```. I made this decision because I believe that the main focus of the challenge is to evaluate how I fetch and manage data on the frontend side. 

---

## Questions

###  What's a closure?

A closure is a combination of a function and the surrounding state within which that function was declared. It allows a function to access variables from an outer (enclosing) scope even after the outer function has finished executing.

When you declare a function inside another function, the inner function has access to its own scope as well as the scope of the outer function and the global scope, even if the outer function has finished, javascript will keep in memory the outer variables to be used in the inner function.

```js 
const outerfn = () => { 
    const outerValue =
    'this string is keeping alive in memory even when this function has been executed'
    
    const innerfn = () => { 
        console.log(outerValue)
    }
    return innerfn
}
const closure = outerfn() // assigning the returned inner function to a variable, outerfn no longer exist
closure() // exec the innerfn which use a variable that was declared on the outherfn 
```
As I mentioned before, there are "3 levels" of scopes for variables: 
The own scope
Enclosing scope 
The global scope (window or global for node)

One cool thing about closures that I used in my first job was the IIFE (Immediately Invoked Function Expression). The idea was pretty simple: to expose "public methods'' while keeping some of them private. The closures that lived in the IIFE essentially took a snapshot of the moment before the anonymous outer function was executed and retained that information in memory.

```js
const myModule = (function() { 
    const superSecret = 100
    function somePublicMethod (value) { 
        return superSecret + value
    } 
    return { 
        somePublicMethod
    }
})()

myModule.somePublicMethod(1) // 101
```

### Where in the code is there a closure?

In the ```useFetch.ts``` component, there's a closure concept when I use the ```useEffect``` hook.
Within the inner function of ```useEffect```, the value of the variable ```url``` is used, which is captured from the outer environment. This constitutes a closure because the inner function has access to variables from its outer scope even after the outer function has finished executing.

```ts
export default function useFetch<Response>({ url, errorMessage, mapper })
{ 
    ...
    useEffect(() => {
        ...
        fetch(url) // 👈 Here I'm using the variable 'url' that comes from the outer scope.
        .then(...)
        .then(...)
        .catch(...)
    }, [url])

    return { data, error, isLoading }
}
```

### Which are the potential side-effects in any function?

A potential side effects in a function are any changes or interactions that occur outside the function's scope. These can include modifying variables, manipulating the DOM, making HTTP requests, modifying browser history, cookies or local storage, logging information, and interacting with external files or resources. Side effects should be minimized and controlled for better code maintainability and predictability.
It's important to note that while side effects are sometimes necessary, they can make code harder to reason about, test, and maintain. It's often considered a best practice to minimize and control side effects within functions, promoting a more predictable and functional programming style when appropriate.

### Could you point out any of these cases in your code? Are they expected? Can they be avoided?

In ```swapi.ts```, I have implemented the logic to fetch data from the SWAPI API. One potential side effect is the reliance on external APIs for retrieving planet and film data. Any changes or inconsistencies in the API structure or availability can potentially impact the functionality of the code.


---