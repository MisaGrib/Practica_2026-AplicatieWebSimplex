import { useState } from 'react'
import './Contact.css'

const initialFormData = {
  name: '',
  email: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Numele este obligatoriu.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Emailul este obligatoriu.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Introdu o adresă de email validă.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Mesajul este obligatoriu.'
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Mesajul trebuie să conțină cel puțin 10 caractere.'
    }

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))

    setSuccessMessage('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccessMessage('')
      return
    }

    setFormData(initialFormData)
    setErrors({})
    setSuccessMessage('Mesajul a fost trimis cu succes. Te vom contacta în curând.')
  }

  return (
    <section className="contact-page section">
      <div className="container contact-page__container">
        <div className="contact-page__content">
          <span className="contact-page__label">Contact</span>

          <h1>Hai să discutăm despre următorul tău proiect digital</h1>

          <p>
            Completează formularul, iar echipa Simplex îți va răspunde cu
            detalii despre soluțiile potrivite pentru compania ta.
          </p>

          <div className="contact-page__details">
            <div>
              <strong>Email</strong>
              <span>contact@simplex.io</span>
            </div>

            <div>
              <strong>Telefon</strong>
              <span>+40 721 000 000</span>
            </div>

            <div>
              <strong>Adresă</strong>
              <span>Str. Tehnologiei 42, București</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__field">
            <label htmlFor="name">Nume</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Numele tău"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="contact-form__error">{errors.name}</p>}
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="nume@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="contact-form__error">{errors.email}</p>}
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              placeholder="Scrie mesajul tău aici..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="contact-form__error">{errors.message}</p>
            )}
          </div>

          {successMessage && (
            <p className="contact-form__success">{successMessage}</p>
          )}

          <button className="btn btn--primary btn--lg" type="submit">
            Trimite mesajul
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact