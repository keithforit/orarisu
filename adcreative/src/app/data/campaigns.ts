export interface Campaign {
  id: string;
  pid: number;
  status: 'Not Joined' | 'Joined' | 'Pending';
  storeName: string;
  storeUrl: string;
  productName: string;
  commission: number;
  conversionPoint: string;
  category: string;
  clientName: string;
  promotionPeriod: string;
  serviceableCountries: string[];
  termsOfCooperation: string[];
  explanation: {
    listingSubmission: string;
    excludedCategories: string;
    specialRewards: string;
    rejectionCriteria: string;
  };
}

export const campaigns: Campaign[] = [
  {
    id: '1',
    pid: 1,
    status: 'Not Joined',
    storeName: 'BINKI',
    storeUrl: 'BIZKI.STORE',
    productName: '[TW] Herbal Rabbit Natural Cream/ ハーバルラビットナチュラルゲルクリーム',
    commission: 8.00,
    conversionPoint: 'New Purchase',
    category: 'Other',
    clientName: '株式会社ビズキ',
    promotionPeriod: '2020-03-12 00:00:00～',
    serviceableCountries: ['Taiwan'],
    termsOfCooperation: ['PPC', 'Cashback/Reward/Loyalty', 'Auto partnership'],
    explanation: {
      listingSubmission: 'Partial Approval Prohibited: Trademarks, Company Names, Product Names, Brand Names, etc. (Including variations and misspellings)',
      excludedCategories: 'Sites Contrary to Public Order and Morality, Adult Content, Gambling',
      specialRewards: 'Available',
      rejectionCriteria: 'False Information, Duplicates, Incomplete Applications, Returns, Cancellations, Unpaid Orders, Refusal of Delivery, Non-Receipt of Order Confirmation Emails, Resale on Auctions, Purchases Using False Names, Purchases by Existing Customers, Purchases of Non-Eligible Products, Absence of Product Introduction on the Website, Non-Final Order Times in Cases of Overlapping Results with Other Affiliate Service Providers'
    }
  },
  {
    id: '2',
    pid: 2,
    status: 'Joined',
    storeName: 'TechStore',
    storeUrl: 'TECHSTORE.COM',
    productName: 'Premium Wireless Headphones',
    commission: 12.50,
    conversionPoint: 'New Purchase',
    category: 'Electronics',
    clientName: 'Tech Solutions Inc.',
    promotionPeriod: '2023-01-01 00:00:00～',
    serviceableCountries: ['United States', 'Canada', 'United Kingdom'],
    termsOfCooperation: ['PPC', 'Auto partnership'],
    explanation: {
      listingSubmission: 'Full Approval Required',
      excludedCategories: 'Adult Content, Gambling, Illegal Activities',
      specialRewards: 'Bonus for 10+ sales per month',
      rejectionCriteria: 'Returns within 30 days, Fraudulent purchases, Duplicate accounts'
    }
  },
  {
    id: '3',
    pid: 3,
    status: 'Pending',
    storeName: 'FashionHub',
    storeUrl: 'FASHIONHUB.JP',
    productName: 'Designer Handbag Collection',
    commission: 15.00,
    conversionPoint: 'Confirmed Delivery',
    category: 'Fashion',
    clientName: '株式会社ファッション',
    promotionPeriod: '2024-06-15 00:00:00～2025-12-31 23:59:59',
    serviceableCountries: ['Japan', 'Taiwan', 'South Korea'],
    termsOfCooperation: ['Cashback/Reward/Loyalty'],
    explanation: {
      listingSubmission: 'Trademark usage prohibited',
      excludedCategories: 'Adult Content, Counterfeit goods',
      specialRewards: 'Top performer bonus available',
      rejectionCriteria: 'Returns, Canceled orders, Non-authentic traffic sources'
    }
  }
];
