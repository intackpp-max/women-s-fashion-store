import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProductCard, type Product } from '@/components/product-card'

const PRODUCTS: Product[] = [
  {
    name: '울 테일러드 블레이저',
    brand: 'VELOUR LABEL',
    price: '328,000원',
    image: '/images/product-1.png',
    badge: 'NEW',
  },
  {
    name: '실크 슬립 드레스',
    brand: 'MAISON RUE',
    price: '246,000원',
    image: '/images/product-2.png',
  },
  {
    name: '스트럭처 레더 토트백',
    brand: 'ATELIER NOA',
    price: '412,000원',
    originalPrice: '480,000원',
    image: '/images/product-3.png',
    badge: 'SALE',
  },
  {
    name: '캐시미어 니트 스웨터',
    brand: 'VELOUR LABEL',
    price: '198,000원',
    image: '/images/product-4.png',
  },
  {
    name: '포인티 토 레더 힐',
    brand: 'ATELIER NOA',
    price: '287,000원',
    image: '/images/product-5.png',
  },
  {
    name: '레이어드 골드 네크리스',
    brand: 'MAISON RUE',
    price: '156,000원',
    image: '/images/product-6.png',
    badge: 'NEW',
  },
]

export function FeaturedProducts() {
  return (
    <section id="new" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Editor&apos;s Pick
            </span>
            <h2 className="mt-3 max-w-lg font-serif text-3xl leading-snug text-foreground sm:text-4xl">
              지금 가장 사랑받는 아이템
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            전체 상품 보기
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
