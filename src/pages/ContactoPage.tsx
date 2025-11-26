import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import BackgroundImageBlock from '../components/BackgroundImageBlock';
import contactoImage from '../assets/contacto-1.jpg';

interface FormData {
  name: string;
  email: string;
  cv: File | null;
}

const ContactoPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    cv: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'cv' && files && files[0]) {
      setFormData(prev => ({ ...prev, cv: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, ingresa tu nombre.',
      });
      return false;
    }

    if (!formData.email.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, ingresa tu correo electrónico.',
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, ingresa un correo electrónico válido.',
      });
      return false;
    }

    if (!formData.cv) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, adjunta tu CV.',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Get recipient email from environment variable or use default
      // Set VITE_CONTACT_EMAIL in your .env file, e.g., VITE_CONTACT_EMAIL=hr@cuarzo24.com
      const recipientEmail =
        import.meta.env.VITE_CONTACT_EMAIL || 'your-email@example.com';

      if (recipientEmail === 'your-email@example.com') {
        throw new Error(
          'Please configure VITE_CONTACT_EMAIL in your .env file'
        );
      }

      // Prepare form data for FormSubmit (free, unlimited, no API keys needed)
      // FormSubmit is a simple POST endpoint that sends emails directly
      // No dependencies, no API keys, just works - perfect for long-term stability
      const formDataToSend = new FormData();

      // Format message with better structure for professional appearance
      const formattedMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NUEVO CV RECIBIDO - CUARZO 24
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 INFORMACIÓN DEL CANDIDATO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nombre: ${formData.name}
📧 Correo: ${formData.email}
📎 CV: ${formData.cv?.name || 'No adjuntado'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Este CV fue recibido a través del formulario de 
contacto del portal web de Cuarzo 24.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim();

      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formattedMessage);
      formDataToSend.append('_to', recipientEmail);
      formDataToSend.append('_subject', `📎 Nuevo CV - ${formData.name}`);

      // Using plain format since we're formatting the message ourselves
      // This gives us full control over the email appearance

      // Add CV file if present
      if (formData.cv) {
        formDataToSend.append('cv', formData.cv);
      }

      // Send email using FormSubmit (https://formsubmit.co/)
      // Free, unlimited, no API keys, very stable - perfect for long-term use
      const response = await fetch(
        `https://formsubmit.co/ajax/${recipientEmail}`,
        {
          method: 'POST',
          body: formDataToSend,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // FormSubmit returns success: true on success
      const result = await response.json();

      // Check if response indicates success (FormSubmit returns {success: true} or similar)
      if (
        result.success === false ||
        (result.message && result.message.includes('error'))
      ) {
        throw new Error(result.message || 'Failed to send email');
      }

      setSubmitStatus({
        type: 'success',
        message:
          '¡Gracias! Tu CV ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        cv: null,
      });

      // Reset file input
      const fileInput = document.getElementById('cv') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message:
          'Hubo un error al enviar tu CV. Por favor, intenta nuevamente o contáctanos directamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="-mx-6 -mt-24">
      <BackgroundImageBlock
        imageSrc={contactoImage}
        alt="Trabajador de la construcción observando un edificio en construcción"
        backgroundPosition="center"
        className="flex min-h-[50vh] items-center justify-center bg-cover py-14 md:min-h-[70vh]"
        overlayClassName="bg-gradient-to-r from-teal-900/50 via-teal-800/30 to-transparent md:from-teal-900/85 md:via-teal-800/50"
        contentClassName="mx-auto flex w-full max-w-4xl justify-start px-6 pt-28 text-white md:px-8"
      >
        <div className="max-w-2xl">
          <div className="mb-6 text-left">
            <h1 className="text-xl font-semibold text-white">
              ¿Te gustaría trabajar con nosotros?
            </h1>
            <p className="mt-2 text-base text-white/90">
              Envíanos tu CV en formato PDF o Word.
            </p>
          </div>

          {submitStatus.type && (
            <div
              className={`mb-6 rounded-lg px-4 py-3 text-sm font-medium ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/90 text-white'
                  : 'bg-red-500/90 text-white'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-semibold text-white"
              >
                Nombre:
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Escribe tu nombre completo"
                required
                disabled={isSubmitting}
                className="w-full rounded-lg border border-white/40 bg-white/90 px-4 py-2.5 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-semibold text-white"
              >
                Correo:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@correo.com"
                required
                disabled={isSubmitting}
                className="w-full rounded-lg border border-white/40 bg-white/90 px-4 py-2.5 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="cv"
                className="mb-1 block text-sm font-semibold text-white"
              >
                CV (PDF o Word):
              </label>
              <input
                id="cv"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full cursor-pointer rounded-lg border border-white/40 bg-white/90 px-4 py-2.5 text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-brand-nav file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-brand-accent/80 focus:border-brand-accent/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {formData.cv && (
                <p className="mt-2 text-xs text-white/80">
                  Archivo seleccionado: {formData.cv.name}
                </p>
              )}
            </div>

            <div className="md:col-span-2 flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-brand-nav px-10 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-accent/80 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
              </button>
            </div>
          </form>
        </div>
      </BackgroundImageBlock>
    </div>
  );
};

export default ContactoPage;
