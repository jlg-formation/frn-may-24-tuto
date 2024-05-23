const truc: unknown = [123];

const same = (x: Array<number>) => x;

// same(truc);
if (truc instanceof Array) {
  same(truc);
}
