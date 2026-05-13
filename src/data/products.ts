export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  shortTitle: string;
  image: string;
  price: number;
  rating: number;
  affiliateUrl: string;
  asin: string;
  specs: ProductSpec[];
  features: string[];
  pros: string[];
  cons: string[];
  badge?: string;
  highlightFeature?: string;
}

// Helper to look up a spec value by label (case-insensitive). Returns "—" if missing.
export function getSpec(product: Product, label: string): string {
  const match = product.specs.find(
    (s) => s.label.toLowerCase() === label.toLowerCase()
  );
  return match ? match.value : '—';
}
