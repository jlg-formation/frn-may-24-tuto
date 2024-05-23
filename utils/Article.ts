export type Article = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

const a1: Article = {
  id: "azerty",
  name: "zerzer",
  price: 123,
  qty: 456,
};

export type Book = Article;

const a2: Book = {
  id: "azerty",
  name: "zerzer",
  price: 123,
  qty: 456,
};
