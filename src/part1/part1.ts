type Transaction = {
  category: string;
  price: number;
  quantity: number;
};

function calculateRevenueByCategory(
  transactions: Transaction[]
): Record<string, number> {
  return transactions
    .map((transaction) => ({
      ...transaction,
      price:
        transaction.quantity > 5 ? transaction.price * 0.9 : transaction.price,
    }))
    .filter((transaction) => transaction.price >= 50)
    .reduce((acc, transaction) => {
      acc[transaction.category] =
        (acc[transaction.category] || 0) +
        transaction.price * transaction.quantity;
      return acc;
    }, {} as Record<string, number>);
}

type type1 = <T>(x: T[], y: (value: T) => boolean) => boolean;
const test1: type1 = (x, y) => x.some(y);

type type2 = (x: number[]) => number[];
const test2: type2 = (x) => x.map((y) => y * 2);

type type3 = <T>(x: T[], y: (value: T) => boolean) => T[];
const test3: type3 = (x, y) => x.filter(y);

type type4 = (x: number[]) => number;
const test4: type4 = (x) => x.reduce((acc, cur) => acc + cur, 0);

type type5 = <T>(x: boolean, y: T[]) => T;
const test5: type5 = (x, y) => (x ? y[0] : y[1]);

type type6 = (f: (x: number) => number, g: (x: number) => number) => (x: number) => number;
const test6: type6 = (f,g) => x => f(g(x+1))
