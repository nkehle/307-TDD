import Portfolio from "./portfolio.js"; 

// Test cases for the stoplight TDD assignment

test('Empty Share and no ticker symbols', () => {
  const portfolio = new Portfolio();
  expect(portfolio.getStocks()).toEqual([]);
});

test('A stock portfolio shall answer whether it is empty', () => {
  const portfolio = new Portfolio();
  expect(portfolio.isEmpty()).toBe(true);
});

test('A stock portfolio shall answer its count of unique ticker symbols', () => {
  const portfolio = new Portfolio();
  portfolio.buy('GME', 5); 
  portfolio.buy('RBLX', 10); 
  expect(portfolio.uniqueTickerCount()).toBe(2);
});

test('Make a purchase and update the portfolio accordingly', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10); 
  expect(portfolio.getStocks()).toEqual([['AAPL', 10]]);
});

test('Make a sale and update the portfolio accordingly', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10); 
  portfolio.sell('AAPL', 5); 
  expect(portfolio.getStocks()).toEqual([['AAPL', 5]]);
});

test('Portfolio returns the number of shares for a given symbol', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10); 
  expect(portfolio.getShares('AAPL')).toBe(10);
});

test('Portfolio keeps only owned symbols', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10); 
  portfolio.sell('AAPL', 10); 
  expect(portfolio.getStocks()).toEqual([]);
});

test('Selling too many shares', () => {
  const portfolio = new Portfolio();
  portfolio.buy('AAPL', 10); 

  expect(() => portfolio.sell('AAPL', 15)).toThrowError('Not enough shares of AAPL to sell');
});