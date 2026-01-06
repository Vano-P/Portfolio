import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'
import { useOrder } from '../../context/OrderContext'
import { buildOrderMessage } from '../../utils/buildOrderMessage'
import { useLang } from '../../context/LanguageContext'

const OrderModal = () => {
  const { order, closeOrder } = useOrder()
  const { t } = useLang()

  if (!order) return null

  const message = buildOrderMessage(order, t)
  const encodedMessage = encodeURIComponent(message)

  return createPortal(
      <div className='fixed inset-0 z-[200] flex items-center justify-center'>
        {/* OVERLAY */ }
        <div
            className='absolute inset-0 bg-black/70 backdrop-blur-sm'
            onClick={ closeOrder }
        />

        {/* MODAL */ }
        <div className='relative z-10 w-[92%] max-w-lg rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='text-lg font-semibold'>
              { t.orderModal.title }
            </h3>
            <button
                className='cursor-pointer rounded-lg p-1 transition hover:bg-[rgb(var(--border))]'
                onClick={ closeOrder }
                aria-label='Close order modal'
            >
              <FiX />
            </button>
          </div>

          { order.project && (
              <div className='mb-3 rounded-xl border border-[rgb(var(--border))] p-4 text-sm'>
                <strong>{ t.orderModal.project }:</strong>{ ' ' }
                { typeof order.project === 'string'
                    ? order.project
                    : order.project.title }
              </div>
          ) }

          { order.plan && (
              <div className='mb-4 rounded-xl border border-[rgb(var(--border))] p-4 text-sm'>
                <strong>{ t.orderModal.plan }:</strong> { order.plan }
              </div>
          ) }

          <p className='mb-6 text-sm text-[rgb(var(--muted))]'>
            { t.orderModal.description }
          </p>

          <div className='flex gap-3'>
            <a
                href={ `https://t.me/yourusername?text=${ encodedMessage }` }
                target='_blank'
                rel='noreferrer'
                className='flex-1 rounded-xl bg-indigo-500 px-4 py-3 text-center font-medium text-white transition hover:bg-indigo-400'
            >
              { t.orderModal.telegram }
            </a>

            <a
                href={ `mailto:you@email.com?subject=${ encodeURIComponent(
                    t.orderModal.emailSubject
                ) }&body=${ encodedMessage }` }
                className='flex-1 rounded-xl border border-[rgb(var(--border))] px-4 py-3 text-center font-medium transition hover:bg-[rgb(var(--border))]'
            >
              { t.orderModal.email }
            </a>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root')
  )
}

export default OrderModal
