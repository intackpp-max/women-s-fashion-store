import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export interface Product {
  name: string
  brand: string
  price: string
  originalPrice?: string
  image: string
  badge?: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <Badge className="absolute left-3 top-3 rounded-sm bg-primary text-primary-foreground">
            {product.badge}
          </Badge>
        )}
        <button
          type="button"
          aria-label={`${product.name} 위시리스트에 담기`}
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          <Heart className="size-4" />
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {product.brand}
        </p>
        <h3 className="text-sm leading-snug text-foreground">{product.name}</h3>
        <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="font-serif text-base whitespace-nowrap text-foreground">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs whitespace-nowrap text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
