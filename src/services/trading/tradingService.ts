import { tradingAPI } from '../api/endpoints';

export class TradingService {
  async executeStrategy(strategyId: string, params: any) {
    try {
      const marketData = await tradingAPI.getMarketData();
      // Strategy execution logic
      return this.createOrder(params);
    } catch (error) {
      console.error('Strategy execution failed:', error);
      throw error;
    }
  }

  private async createOrder(orderParams: any) {
    return tradingAPI.createOrder(orderParams);
  }

  async getPortfolioStatus() {
    return tradingAPI.getPortfolio();
  }
}

export const tradingService = new TradingService();
