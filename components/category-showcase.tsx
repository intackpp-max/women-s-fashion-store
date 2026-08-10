import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const CATEGORIES = [
  {
    label: '아우터 & 니트',
    count: '32 Products',
    image: '/images/category-outerwear.png',
    href: '#',
  },
  {
    label: '백 & 액세서리',
    count: '24 Products',
    image: '/images/category-bags.png',
    href: '#',
  },
  {
    label: '주얼리',
    count: '41 Products',
    image: '/images/category-jewelry.png',
    href: '#jewelry',
  },
]

export function CategoryShowcase() {
  return (
    <section id="categories" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Shop by Category
            </span>
            <h2 className="mt-3 max-w-lg font-serif text-3xl leading-snug text-foreground sm:text-4xl">
              취향에 맞춰 고른
              <br className="sm:hidden" /> 세 가지 무드
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            전체 카테고리 보기
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-md bg-secondary"
            >
              <Image
                src={category.image}
                alt={category.label}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
              <div className="relative mt-auto flex items-end justify-between p-6 text-primary-foreground">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
                    {category.count}
                  </p>
                  <p className="mt-1 font-serif text-xl whitespace-nowrap">
                    {category.label}
                  </p>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/40 transition-colors group-hover:bg-primary-foreground/15">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
