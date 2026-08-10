'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, ShoppingBag, User } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: '신상', href: '#new' },
  { label: '컬렉션', href: '#categories' },
  { label: '주얼리', href: '#jewelry' },
  { label: '에디토리얼', href: '#story' },
  { label: '스토어 소개', href: '#about' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">
        <div className="flex items-center gap-2 sm:gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="메뉴 열기"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'lg:hidden'
              )}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-background">
              <SheetHeader>
                <SheetTitle className="font-serif text-xl italic">
                  VELOUR
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Separator className="mx-4" />
              <div className="flex flex-col gap-1 px-4 text-sm text-muted-foreground">
                <Link href="#" className="rounded-md px-2 py-3 hover:bg-secondary">
                  로그인
                </Link>
                <Link href="#" className="rounded-md px-2 py-3 hover:bg-secondary">
                  장바구니
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            className="font-serif text-xl italic tracking-tight text-foreground sm:text-2xl"
          >
            VELOUR
          </Link>
        </div>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex"
            aria-label="검색"
          >
            <Search />
          </Button>
          <Button variant="ghost" size="icon" aria-label="내 계정">
            <User />
          </Button>
          <Button variant="ghost" size="icon" aria-label="장바구니 (0)">
            <ShoppingBag />
          </Button>
        </div>
      </div>
    </header>
  )
}
