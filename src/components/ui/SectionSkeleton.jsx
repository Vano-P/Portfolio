const SectionSkeleton = () => {
  return (
      <section className='py-32 border-t border-[rgb(var(--border))]'>
        <div className='mx-auto max-w-7xl px-6 animate-pulse'>

          {/* Title */ }
          <div className='mb-4 h-8 w-56 rounded-lg bg-[rgb(var(--surface))]' />

          {/* Subtitle */ }
          <div className='mb-10 h-4 w-96 rounded-md bg-[rgb(var(--surface))]/70' />

          {/* Content placeholders */ }
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            { Array.from({ length: 6 }).map((_, i) => (
                <div key={ i } className='overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]'>
                  <div className='aspect-[4/3] bg-[rgb(var(--bg))]' />
                  <div className='p-6 space-y-3'>
                    <div className='h-3 w-24 rounded bg-[rgb(var(--bg))]' />
                    <div className='h-5 w-3/4 rounded bg-[rgb(var(--bg))]' />
                    <div className='h-4 w-full rounded bg-[rgb(var(--bg))]/70' />
                  </div>
                </div>
            )) }
          </div>

        </div>
      </section>
  )
}

export default SectionSkeleton
