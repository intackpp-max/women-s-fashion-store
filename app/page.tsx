import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CategoryShowcase } from '@/components/category-showcase'
import { FeaturedProducts } from '@/components/featured-products'
import { JewelryEdit } from '@/components/jewelry-edit'
import { BrandStory } from '@/components/brand-story'
import { Testimonials } from '@/components/testimonials'
import { Newsletter } from '@/components/newsletter'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CategoryShowcase />
        <FeaturedProducts />
        <JewelryEdit />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}
