import './Button.css'

/**
 * Buton reutilizabil cu mai multe variante vizuale.
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} size    - 'sm' | 'md' | 'lg'
 * @param {function} onClick
 * @param {string} type    - 'button' | 'submit'
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    disabled ? 'btn--disabled' : '',
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button