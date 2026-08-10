import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Newsletter() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center sm:px-10 lg:px-16">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70">
          Join the List
        </span>
        <h2 className="max-w-xl font-serif text-3xl italic leading-snug text-primary-foreground sm:text-4xl">
          가장 먼저, VELOUR의
          <br />
          새로운 소식을 받아보세요
        </h2>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-primary-foreground/75">
          구독 시 첫 구매 10% 할인 코드와 시즌 프리뷰를 가장 먼저
          보내드립니다.
        </p>
        <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="h-12 rounded-full border-primary-foreground/30 bg-primary-foreground/10 px-5 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:border-primary-foreground/60 focus-visible:ring-primary-foreground/30"
          />
          <Button
            type="submit"
            className="h-12 shrink-0 rounded-full bg-primary-foreground px-6 whitespace-nowrap text-primary hover:bg-primary-foreground/90"
          >
            구독하기
            <ArrowRight data-icon="inline-end" />
          </Button>
        </form>
      </div>
    </section>
  )
}
