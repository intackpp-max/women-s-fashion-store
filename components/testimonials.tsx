import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      '옷장 정리하듯 필요한 것만 사게 돼요. 소재가 좋아서 몇 년째 입는 아이템이 많아요.',
    name: '김서연',
    role: '마케터 · 34세',
  },
  {
    quote:
      '큐레이션이 확실해서 고민 없이 구매해요. 스타일링 상담도 정말 만족스러웠습니다.',
    name: '이지현',
    role: '디자이너 · 31세',
  },
  {
    quote:
      '포장부터 배송까지 세심해서 선물할 때도 자주 이용해요. 믿고 사는 브랜드예요.',
    name: '박하은',
    role: '변호사 · 37세',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Client Voices
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-snug text-foreground sm:text-4xl">
            VELOUR를 먼저 경험한
            <br />
            분들의 이야기
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-5 rounded-md border border-border bg-card p-7"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-pretty text-sm leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex flex-col text-sm">
                <span className="font-medium text-foreground">
                  {testimonial.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
