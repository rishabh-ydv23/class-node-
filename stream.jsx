/*
| Stream Type   | Description                            | Example                                |
| ------------- | -------------------------------------- | -------------------------------------- |
| **Readable**  | Used to **read** data                  | Reading from a file, HTTP request body |
| **Writable**  | Used to **write** data                 | Writing to a file, HTTP response       |
| **Duplex**    | Both readable and writable             | TCP sockets                            |
| **Transform** | Duplex stream that can **modify data** | Compression, encryption                |
*/ 