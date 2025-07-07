What is Node.js?
# Node.js is an open source , cross plateform runtime enviornment for executing javascript code outside a browser
# Designed to build scalable and performant applications.
# Known for its asynchronous, non-blocking architecture.

What does single threaded means?
# Single threaded executes all the tasks in a single sequence using one thread.
# a single execution context processes tasks one at a time.
# contrasts with multi-threaded enviornments that execute multiple tasks simultaneously.

Why Node.js is Single-threaded?
# Efficiency in I/O Operations:   
# Designed for non-blocking I/o to handle multiple requests without threading overhead.

# Concurrency Model:  
# Uses an event loop to manage tasks efficiently.
# offloads time-consuming operations to the background (worker thread in libuv)

# Reduced Complexity:
# eliminates issues like thread synchronization and deadlocks.
# simpler architecture for developers to manage

# Javascript nature:
# Javascript was originally single-threaded , aligning Node.js with the language's ecosystem.

Benefits of Single-Threaded Node.js?
# Lightweight and fast.
# efficient for real-time, data-intensive applications like chats or streaming.
# easier debugging compared to multi-threaded architectures.
# lower memory footprint

Drawbacks of Single threaded architecture?
# CPU-intensive tasks can block the event loop
# Workarounds like worker threads or external services are sometimes necessary.
# not ideal for computationaly intensive operations.
 
How Node.js handles workloads?
# worker threads: Introduced in later version of multithreading.
# Offloading: Use of external libraries and services.
# Clustering: Spawning multiple processes to handle load.

When to choose Node.js?
# Real-time applications (e.g chat, gaming).
# Streaming services.
# APIs with high I/O operations.

what is Event loop ?
# The event loop is central part of Node.js architecture,responsiple for executing code and managing asynchronous operations 
# It continuosly checks for new events and processes them one by one ,enabling Node.js to handle concurrent operations efficiently .

what is infinite loop or recursion?

# A function calls itself recursively without a termination condition or a loop that never exits 
# Explanation : Infinite loops or recursive function that don't terminate can block the event loop indefinitely, causing the application to become unresponsive

What is Anti-Patterns?
# Coding practices that might seem like quick fixes but lead to long term issues.
# they includes things like 'God objects', 'Spaghetti Code' , 'Magic numbers' and 'Copy-paste coding'.

What is God Object?
# a single object that knows too much or does too much 
# It violates the single responsibility principle

What is Spaghetti Code?
# Code with a complex tangled structure, making it difficult to follow or maintain.

What is magic numbers?
# Using unexplained numeric constants directly in the code, instead of using named constants.

What is Copy-Paste Coding?
# Duplicating blocks of code without making proper abstractions, leading to redundant and error prone code.

Why are anti-Patterns bad?
# Anti-patterns make code hard to read, understand and maintain.
# They introduces bugs errors and security risks
# They leads to Inflexible and brittle code that's tough to update.

How can you identify Anti-Patterns?
# review code with team to spot problematic patterns.
# Use tools that scan code for issues and bad practices.
# Look for signs like long complex functions , confusing logic and repeated code

How can you address Anti-Patterns?
# Refactor code
# Break code into smaller manageable pieces.
# Follow naming conventions and best practices.
# Share knowledge and good coding habits with your team.

How can you prevent Anti-Patterns?
# Educate yourself on coding principles
# plan project carefully to avoid pitfalls.
# Communicate with your team and stakeholders to make informed decisions
# Maintain good documentation and conduct regular code reviews to keep your code healthy.
# Regularly do code reviews.
# Implement comprehensive testing to identify and rectify issues by anti-patterns.
# Follow software development best practices.
# encourage and mentor your team.

What are the differences between buffer and stream?
Buffer:
# a buffer in Node.js is a temporary storage area for a chunk of binary data.
# Bugffers are typically used when you need to work with binary data that isn't streaming.
# They are often used for handling I/O operations, like reading files or data from a network, when you need to manipulate or process the entire data at once.
# Works with the entire data at once.
# You have to wait for the whole data to be loaded into memory before performing any operations on it.

stream:
# A stream is a continuous flow of data.
# Streams are used when data doesn't need to be loaded all at once and can be processed piece by piece.
# This makes them ideal for working with large files, network requests, or any other kind of continuous data flow.
# allows data to be processed in chunks as it arrives.
# streams don't load the entire data into memory but process it as chunks ,which is more memory efficient and ideal for large data.

Which is more memory efficient in above?
# streams are more memory efficient because they work with small chunks of data, allowing you to process even very large files without consuming much memory

Use cases of buffer and stream?
# Buffers are used when data can fit into memory comfortably, such as small files, images or pieces of text.
# streams are used for real time large data transfer, such as reading a file line by line, handling http requests or dealing with audio/video streaming.

Types of Streams in Node.js?
# 1- Readable: For reading data, e.g, fs.createReadStream.
# 2- Writable: For Writing data, e.g, fs.createWriteStream.
# 3- Duplex: For both reading and writing data, e.g. net.Socket.
# 4-Transform: For modifying data while reading/writing ,e.g zlib.createGzip.

Error handling in Node.js
Types of errors in Node.js:
# Runtime errors: occur during code execution
# operational Errors: E.g. missing file or network issues.
# Syntax Errors: Mistakes in code syntax.
# Programming errors: Bugs in code logic.

How to handle error:
# using Try-catch for synchronous codes
# handling asynchronous errors using Promises
# global error handling
# custom error classes
# centralized error middleware(express error route)

what is callback?
# a function passed as an argument to another function.
# The first function calls the callback function when a certain task is compared.
problems with callback:
# callback hell: nested callbacks becomes difficult to read and maintain.
# error handling: can be tricky to manage errors consistently.

Promises:
# an object representing the eventual completion (or failure) of an asynchronous operation.
# it has two states:
# Resolved: operation succeded
# Rejected: Operation failed
# Introduced in ES6(2015)

Async/Await:
# Syntactic sugar on top of promises
# Make asynchronous code look and feel more like synchronous code.
# introduces in ES8(2017)

What is Observables?
# A stream of data that emits a series of values over time.
# can handle multiple values and events.
# promises emits only single value, Observables emit multiple values.

What is Middlewares?
# Middlewares are functions that have access to:
# the request object(req)
# The response object (res)
# The next middleware function in the application's request-response cycle.

What is next()?
# A function passed as the third argument in middleware.
# Controls the flow of request-response cycle.
# tells express to move to the next middleware in the stack
# purpose is to continue the request flow.

What is Template Literals?
# Modern js uses backticks (`) for string creation.
# Alternatives to single or double quotes
# introduced in ES6 (ES 2015)