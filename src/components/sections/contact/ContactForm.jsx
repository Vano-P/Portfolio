import { useEffect, useState } from 'react'
import { useLang } from '../../../context/LanguageContext.jsx'
import { useDebouncedValue } from '../../../hooks/useDebouncedValue.jsx'

const initialState = { name: '', email: '', message: '' }

const ContactForm = () => {
  const { t } = useLang()

  const [ values, setValues ] = useState(initialState)
  const [ status, setStatus ] = useState('idle') // idle | loading | success | error
  const [ errors, setErrors ] = useState({})

  const debouncedValues = useDebouncedValue(values, 400)


  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validateName = (name) => {
    if (!name.trim()) return 'required'
    if (name.trim().length < 2) return 'minLength'
    if (!/^[a-zA-Zа-яА-Я\s]+$/.test(name)) return 'onlyLetters'
    return null
  }

  const validateEmail = (email) => {
    if (!email.trim()) return 'required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'invalidFormat'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const nameError = validateName(values.name)
    const emailError = validateEmail(values.email)

    if (nameError || emailError || !values.message.trim()) {
      setErrors({ name: nameError, email: emailError, message: !values.message.trim() ? 'required' : null })
      setStatus('error')
      return
    }
    setErrors({})
    setStatus('loading')

    try {
      const res = await fetch('https://vercel-mailer-mu.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      if (!res.ok) new Error('Failed to send..')

      setStatus('success')
      setValues(initialState)
    }
    catch {
      setStatus('error')
    }
  }

  useEffect(() => {
    if (!debouncedValues.name && !debouncedValues.email) return

    setErrors({
      name: validateName(debouncedValues.name),
      email: validateEmail(debouncedValues.email)
    })
  }, [ debouncedValues ])
  return (
      <form
          onSubmit={ onSubmit }
          className='rounded-xl sm:rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 sm:p-8'
          aria-describedby='form-status'
      >
        <div className='grid gap-5'>
          <div>
            <label htmlFor='name' className='mb-1 block text-sm font-medium'>
              { t.contact.form.name }
            </label>
            <input
                id='name'
                name='name'
                value={ values.name }
                onChange={ onChange }
                placeholder={ t.contact.form.namePlaceholder }
                aria-invalid={ !!errors.name }
                className={ `w-full rounded-lg border px-4 py-3 outline-none transition ${ errors.name ? 'border-rose-400' : 'border-[rgb(var(--border))] focus:border-indigo-400' } ` }
            />
            { errors.name && <p className='mt-1 text-sm text-rose-400'> { t.contact.errors[errors.name] } </p> }
          </div>

          <div>
            <label htmlFor='email' className='mb-1 block text-sm font-medium'>
              { t.contact.form.email }
            </label>
            <input
                id='email'
                name='email'
                value={ values.email }
                onChange={ onChange }
                placeholder={ t.contact.form.emailPlaceholder }
                className='w-full rounded-lg border border-[rgb(var(--border))] bg-transparent px-4 py-3 outline-none transition focus:border-indigo-400'
            />
            { errors.email && <p className='mt-1 text-sm text-rose-400'> { t.contact.errors[errors.email] } </p> }
          </div>

          <div>
            <label htmlFor='message' className='mb-1 block text-sm font-medium'>
              { t.contact.form.message }
            </label>
            <textarea
                id='message'
                name='message'
                rows={ 5 }
                value={ values.message }
                onChange={ onChange }
                placeholder={ t.contact.form.messagePlaceholder }
                className='w-full resize-none rounded-lg border border-[rgb(var(--border))] bg-transparent px-4 py-3 outline-none transition focus:border-indigo-400'
            />
          </div>

          {/* STATUS */ }
          <div id='form-status' aria-live='polite' className='min-h-[24px] text-sm'>
            { status === 'success' && (
                <span className='text-emerald-400'>
              { t.contact.form.success }
            </span>
            ) }
            { status === 'error' && (
                <span className='text-rose-400'>
              { t.contact.form.error }
            </span>
            ) }
          </div>

          <button
              type='submit'
              disabled={ status === 'loading' }
              className='mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400 disabled:opacity-60'
          >
            { status === 'loading'
                ? t.contact.form.sending
                : t.contact.form.send }
          </button>
        </div>
      </form>
  )
}

export default ContactForm
