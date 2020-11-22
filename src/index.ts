import readline from "readline";

enum Color {
  RED = "\u001b[31m",
  YELLOW = "\u001b[33m",
  BLUE = "\u001b[34m",
}

type Cheese = { name: string; color: Color };

const cheeses = [
  { name: "cheddar", color: Color.YELLOW },
  { name: "red leicester", color: Color.RED },
  { name: "stilton", color: Color.BLUE },
  { name: "tallegio", color: Color.BLUE },
  { name: "jarlsberg", color: Color.YELLOW },
  { name: "epoisses de bourgogne", color: Color.RED },
];

const cheesify = (cheese: Cheese) => (text: string) =>
  `${cheese.color}${text}\u001b[0m`;

export default async () => {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.on("line", function (line) {
    const formattedLine = cheeses.reduce(
      (result, cheese) => result.replace(cheese.name, cheesify(cheese)),
      line
    );
    console.log(formattedLine);
  });
};
