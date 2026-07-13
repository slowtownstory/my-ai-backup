// ============================================================
// PayPal Configuration — @paypal/react-paypal-js 기반
// ============================================================
// 
// 설정 방법:
// 1. https://developer.paypal.com/dashboard 에서 앱 생성
// 2. Client ID를 .env 파일에 넣기:
//    VITE_PAYPAL_CLIENT_ID=실제_클라이언트_ID
// 3. 프로덕션: VITE_PAYPAL_CLIENT_ID에 Live Client ID 사용
//
// ============================================================

export const PAYPAL_CONFIG = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test',
  currency: 'USD',
  intent: 'capture' as const,
};

// ── 상품 타입 정의 ──

export interface PayPalProduct {
  id: string;
  name: string;
  description: string;
  price: string; // '29.99' 형식
  currency: string;
}

// ── 구독 플랜 타입 정의 ──

export interface PayPalSubscriptionPlan {
  id: string;
  name: string;
  description: string;
  planId: string; // PayPal에서 생성한 구독 Plan ID
  price: string;
  currency: string;
  interval: 'MONTH' | 'YEAR';
}

// ── 예시 상품 목록 — 여기를 수정하세요 ──

export const PRODUCTS: PayPalProduct[] = [
  {
    id: 'ebay-seller-basic',
    name: "eBay Seller's Start Guide",
    description: 'Essential guide for launching your global eBay business',
    price: '19.99',
    currency: 'USD',
  },
  {
    id: 'ebay-seller-pro',
    name: 'eBay Global Seller Masterclass Bundle',
    description: 'Full eBay master guide, sourcing templates, and 1:1 email coaching',
    price: '49.99',
    currency: 'USD',
  },
];

// ── 예시 구독 플랜 — 여기를 수정하세요 ──

export const SUBSCRIPTION_PLANS: PayPalSubscriptionPlan[] = [
  {
    id: 'connect-ai-monthly',
    name: 'Connect AI Monthly',
    description: 'Monthly access to full neural-AI suite',
    planId: 'YOUR_PAYPAL_PLAN_ID', // PayPal에서 생성한 구독 플랜 ID
    price: '49.99',
    currency: 'USD',
    interval: 'MONTH',
  },
  {
    id: 'connect-ai-yearly',
    name: 'Connect AI Yearly',
    description: 'Annual access — save 20%',
    planId: 'YOUR_PAYPAL_YEARLY_PLAN_ID',
    price: '479.99',
    currency: 'USD',
    interval: 'YEAR',
  },
];
