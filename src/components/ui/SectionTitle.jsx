const SectionTitle = ({ title, subtitle }) => {
  return (
      <div className='mb-10 max-w-2xl'>
        <h2 className='mb-4 text-3xl font-bold sm:text-4xl'>
          { title }
          <span className='text-indigo-400'>.</span>
        </h2>
        <p className='text-[rgb(var(--muted))]'> { subtitle } </p>
      </div>
  )
}

export default SectionTitle