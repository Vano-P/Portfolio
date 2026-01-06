export const buildOrderMessage = (order = {}, t) => {
  const { project, plan } = order

  let message = t.orderModal.orderMessage.intro

  if (plan) message += `\n\n${ t.orderModal.orderMessage.plan }: ${ plan }`

  if (project) {
    const projectTitle = typeof project === 'string' ? project : project.title
    message += `\n${ t.orderModal.orderMessage.project }: ${ projectTitle }`
  }

  message += `\n\n${ t.orderModal.orderMessage.outro }`

  return message
}
