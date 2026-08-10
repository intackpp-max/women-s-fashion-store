import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-0">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            2025 Autumn Edit
          </span>
          <h1 className="max-w-lg font-serif text-4xl leading-[1.25] text-foreground sm:text-5xl lg:text-6xl">
            나를 위한 계절,
            <br />
            <span className="italic text-primary whitespace-nowrap">
              단정한 무드
            </span>
            를 입다
          </h1>
          <p className="max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
            바쁜 일상 속에서도 자신만의 취향을 잃지 않는 당신을 위해.
            VELOUR가 선별한 컨템포러리 웨어와 주얼리로 하루의 완성도를
            더하세요.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-11 shrink-0 rounded-full px-8 whitespace-nowrap"
              nativeButton={false}
              render={<Link href="#categories" />}
            >
              컬렉션 둘러보기
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Link
              href="#story"
              className="whitespace-nowrap text-sm font-medium tracking-wide text-foreground underline decoration-primary/40 decoration-2 underline-offset-4"
            >
              브랜드 이야기
            </Link>
          </div>

          <dl className="mt-8 grid max-w-sm grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-6">
            <div>
              <dt className="text-xs leading-snug text-muted-foreground">
                셀렉트 브랜드
              </dt>
              <dd className="font-serif text-2xl text-foreground">120+</dd>
            </div>
            <div>
              <dt className="text-xs leading-snug text-muted-foreground">
                무료 배송
              </dt>
              <dd className="font-serif text-2xl whitespace-nowrap text-foreground">
                5만원~
              </dd>
            </div>
            <div>
              <dt className="text-xs leading-snug text-muted-foreground">
                교환/반품
              </dt>
              <dd className="font-serif text-2xl text-foreground">14일</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <Image
            src="/images/hero.png"
            alt="깊은 와인 컬러 코트를 입고 스튜디오에 서 있는 여성의 에디토리얼 화보"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
