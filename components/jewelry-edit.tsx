import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProductCard, type Product } from '@/components/product-card'

const JEWELRY: Product[] = [
  {
    name: '레이어드 골드 네크리스',
    brand: 'MAISON RUE',
    price: '156,000원',
    image: '/images/product-6.png',
    badge: 'NEW',
  },
  {
    name: '해머드 밴드 링 세트',
    brand: 'ATELIER NOA',
    price: '128,000원',
    image: '/images/jewelry-rings.png',
  },
  {
    name: '펄 드롭 이어링',
    brand: 'MAISON RUE',
    price: '98,000원',
    image: '/images/jewelry-earrings.png',
    badge: 'NEW',
  },
  {
    name: '미니멀 바 브레이슬릿',
    brand: 'VELOUR LABEL',
    price: '112,000원',
    originalPrice: '138,000원',
    image: '/images/jewelry-bracelet.png',
    badge: 'SALE',
  },
]

export function JewelryEdit() {
  return (
    <section id="jewelry" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Fine Jewelry
            </span>
            <h2 className="max-w-md font-serif text-3xl leading-snug text-foreground sm:text-4xl">
              하루를 완성하는
              <br />
              <span className="italic text-primary">작은 빛</span>
            </h2>
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              과장하지 않는 골드 톤과 섬세한 디테일. 옷장 위 레이어처럼
              매일 겹쳐 착용하기 좋은 주얼리를 골랐습니다.
            </p>
            <Link
              href="#"
              className="inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              주얼리 전체 보기
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-secondary lg:aspect-[5/4]">
            <Image
              src="/images/category-jewelry.png"
              alt="린넨 위에 놓인 골드 네크리스와 링 주얼리"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {JEWELRY.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
