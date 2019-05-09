## Car Pics

Another project from the "Modern React with Redux" course on Udemy. This project goes deep into form handling with React. Also touches on creating requests to an API.

### Handling Forms

- User click on something --> onClick
- User changes text in an input --> onChange
- User submits a form --> onSubmit

### Controlled vs Uncontrolled Components

- Store information about components in React rather than in the DOM world
- Do this by setting the state, value
  - value={this.state.value}
  - Makes it easy to tell the DOM what to render

### this

- What is 'this' used for in a class?
  - Give me an instance of the class I'm working in
- How is the value of 'this' determined in a function?
- Rewatch lecture 84 if confused
- 3 Ways to Solve it
- Bind in the constructor
- Arrow function in the event handler onFormSubmit = event => {}
  - Makes sure that 'this' always refers to this instance of SearchBar
- Inline the callback
  - Arrow function in the onSubmit={event => this.onFormSubmit(event)}

### Unsplash API

- Create requests to pull fake data from an API
- unsplash.com/developers

### Axios vs Fetch

- Axios
  - 3rd party package
  - Very easily installed using npm
  - A lot of the small details are taken care of for you
- Fetch
  - Function built into modern browsers
  - No installation needed. Final application size is smaller
  - Far more basic than axios

### Misc Notes

- No parentheses when we pass a callback function to an event handler like "onChange"
- Naming convention for event callbacks
  - (on), name of the element (Input), event that we are watching for (Change)
  - onInputChange
- TypeError: Cannot read property 'state' of undefined
