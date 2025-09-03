'use client'

import Link from 'next/link'

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/90 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-5xl items-center gap-3 p-3">
        <a 
          href="tel:+19543585001" 
          className="flex-1 h-11 rounded-lg bg-[hsl(var(--brand))] text-[hsl(var(--brand-fg))] grid place-items-center font-medium hover:brightness-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(var(--brand))] focus-visible:outline-offset-2"
        >
          Call (954) 358-5001
        </a>
        <Link 
          href="/refer" 
          className="flex-1 h-11 rounded-lg border border-[hsl(var(--brand))] text-[hsl(var(--brand))] grid place-items-center font-medium hover:bg-[hsl(var(--brand))]/5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(var(--brand))] focus-visible:outline-offset-2"
        >
          Refer a Client
        </Link>
      </div>
    </div>
  )
}