export default class Portfolio {
  constructor() {
    this.stocks = new Map();
  }

  buy(ticker, shares) {
    if (this.stocks.has(ticker)) {
      this.stocks.set(ticker, this.stocks.get(ticker) + shares);
    } else {
      this.stocks.set(ticker, shares);
    }
  }

  sell(ticker, shares) {
    if (!this.stocks.has(ticker)) {
      throw new Error(`No shares of ${ticker} in the portfolio`);
    }

    const currentShares = this.stocks.get(ticker);
    if (currentShares < shares) {
      throw new Error(`Not enough shares of ${ticker} to sell`);
    }

    const remainingShares = currentShares - shares;
    if (remainingShares === 0) {
      this.stocks.delete(ticker);
    } else {
      this.stocks.set(ticker, remainingShares);
    }
  }

  buy(ticker, shares) {
    if (this.stocks.has(ticker)) {
      this.stocks.set(ticker, this.stocks.get(ticker) + shares);
    } else {
      this.stocks.set(ticker, shares);
    }
  }

  sell(ticker, shares) {
    if (!this.stocks.has(ticker)) {
      throw new Error(`No shares of ${ticker} in the portfolio`);
    }

    const currentShares = this.stocks.get(ticker);
    if (currentShares < shares) {
      throw new Error(`Not enough shares of ${ticker} to sell`);
    }

    this.stocks.set(ticker, currentShares - shares);
  }

  getShares(ticker) {
    if (!this.stocks.has(ticker)) {
      return 0;
    }
    return this.stocks.get(ticker);
  }

  getStocks() {
    return Array.from(this.stocks.entries()).filter(
      ([_, shares]) => shares !== 0
    );
  }

  isEmpty() {
    return this.stocks.size === 0;
  }

  uniqueTickerCount() {
    return this.stocks.size;
  }
}
