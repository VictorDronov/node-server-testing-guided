# Node Server Testing Guided Project

Guided project for **Node Server Testing** Module.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds automated tests to the API.


## Testing an API

- run the server
- make a request to the endpoint (may or maynot incluide data)
- inspect hte results to see if it is what i Expected

Jest will default to running the code in an environment similar to a web browser. For testing node servers we need to hcange that option 

```json
"jest"{
    "testEnvironment": "node"
}
```