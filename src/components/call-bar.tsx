'use client'

import Link from 'next/link'

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-slate-900 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="mx-auto flex max-w-5xl items-center gap-3 p-3">
        <a 
          href="tel:+19543585001" 
          className="flex-1 h-11 rounded-lg bg-white text-slate-900 grid place-items-center font-semibold hover:bg-gray-100 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          Call (954) 358-5001
        </a>
        <Link 
          href="/refer" 
          className="flex-1 h-11 rounded-lg border-2 border-white text-white grid place-items-center font-semibold hover:bg-white/10 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          Refer a Client
        </Link>
      </div>
    </div>
  )
}