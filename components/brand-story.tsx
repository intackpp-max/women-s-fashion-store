import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function BrandStory() {
  return (
    <section id="story" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md lg:order-2">
          <Image
            src="/images/story.png"
            alt="햇살이 드는 미니멀한 인터리어에서 니트 룩을 입고 앉아 있는 여성"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 lg:order-1">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Our Philosophy
          </span>
          <h2 className="max-w-md font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            유행이 아닌,
            <br />
            <span className="italic text-primary">시간이 지나도 남는 것</span>
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            VELOUR는 매 시즌 소재와 핏, 완성도를 직접 확인한 브랜드만
            선별합니다. 트렌드를 좇기보다, 오래도록 곁에 두고 싶은 옷과
            소품을 소개하는 것이 저희의 기준입니다.
          </p>
          <ul className="flex flex-col gap-4 border-t border-border pt-6">
            <li className="flex gap-4">
              <span className="font-serif text-lg text-primary">01</span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  전 제품 소재 검증
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  원단과 마감을 직접 확인한 브랜드만 입점합니다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-serif text-lg text-primary">02</span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  1:1 스타일링 상담
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  전담 스타일리스트가 당신의 취향을 함께 찾아드립니다.
                </p>
              </div>
            </li>
          </ul>
          <div>
            <Button
              variant="outline"
              className="h-11 shrink-0 rounded-full px-7 whitespace-nowrap"
              nativeButton={false}
              render={<Link href="#about" />}
            >
              브랜드 스토리 전체 보기
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
