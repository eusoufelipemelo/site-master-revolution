import { useEmQuadro } from '../hooks/movimento.js'

/* Entrada com foco puxado: o bloco chega desfocado e assenta.
   `atraso` em segundos escalona os irmãos, como plano em sequência. */
export default function Reveal({
  as: Tag = 'div',
  atraso = 0,
  className = '',
  children,
  ...props
}) {
  const [ref, emQuadro] = useEmQuadro()
  return (
    <Tag
      ref={ref}
      className={`reveal${emQuadro ? ' viu' : ''}${className ? ' ' + className : ''}`}
      style={atraso ? { transitionDelay: `${atraso}s` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
