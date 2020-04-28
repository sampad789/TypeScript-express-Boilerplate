import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

//Sample function in node
const addNumbers = (a: number, b: number): number => a + b;
console.log(addNumbers(5, 15));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello From Typescript");
});

// Define a port to run a server on or a deploy env port
const PORT = process.env.PORT || 5000;

// tell the server what port to listen on
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
