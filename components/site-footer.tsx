import Link from 'next/link'
import { AtSign, Mail, Send } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const FOOTER_LINKS: { title: string; links: string[] }[] = [
  { title: '쇼핑', links: ['신상품', '베스트', '주얼리', '전체 카테고리'] },
  { title: '고객 지원', links: ['공지사항', '자주 묻는 질문', '배송/교환', '1:1 문의'] },
  { title: '브랜드', links: ['브랜드 스토리', '입점 문의', '채용', '제휴 안내'] },
]

export function SiteFooter() {
  return (
    <footer id="about" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <span className="font-serif text-2xl italic text-foreground">
              VELOUR
            </span>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              세련된 취향을 가진 이들을 위한 컨템포러리 라이프스타일
              셀렉트샵입니다.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="인스타그램"
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              >
                <AtSign className="size-4" />
              </Link>
              <Link
                href="#"
                aria-label="이메일 문의"
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              >
                <Mail className="size-4" />
              </Link>
              <Link
                href="#"
                aria-label="카카오톡 채널"
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              >
                <Send className="size-4" />
              </Link>
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl">
            (주)벨루어컴퍼니 대표 김하늘 · 사업자등록번호 000-00-00000
            · 서울특별시 강남구 도산대로 000
            <br />
            통신판매업신고 제0000-서울강남-00000호 · 고객센터
            1588-0000 (평일 10:00–18:00)
          </p>
          <p>&copy; 2026 VELOUR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
