import { motion } from 'framer-motion';
import logoCuarzoWhite from '@/assets/logo-cuarzo-white.png';
import iconoTelefono from '@/assets/icono-telefono.png';
import iconoMail from '@/assets/icono-mail.png';
import logoFacebook from '@/assets/logo-facebook.png';
import logoInstagram from '@/assets/logo-instagram.png';
import logoLinkedin from '@/assets/logo-linkedin.png';
import iconoYoutube from '@/assets/icono-youtube.png';

const Footer = () => {
  const empresaLinks = [
    { label: 'Código de Ética', href: '#codigo-etica' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'RSE', href: '#rse' },
  ];

  const serviciosLinks = [
    { label: 'Mantenimiento', href: '#servicios' },
    { label: 'Ingeniería e Infraestructura', href: '#servicios' },
    { label: 'Energía', href: '#servicios' },
  ];

  const socialLinks = [
    {
      icon: logoFacebook,
      label: 'Facebook',
      href: import.meta.env.VITE_SOCIAL_FACEBOOK || '#',
      enabled: !!import.meta.env.VITE_SOCIAL_FACEBOOK,
    },
    {
      icon: logoInstagram,
      label: 'Instagram',
      href: import.meta.env.VITE_SOCIAL_INSTAGRAM || '#',
      enabled: !!import.meta.env.VITE_SOCIAL_INSTAGRAM,
    },
    {
      icon: logoLinkedin,
      label: 'LinkedIn',
      href: import.meta.env.VITE_SOCIAL_LINKEDIN || '#',
      enabled: !!import.meta.env.VITE_SOCIAL_LINKEDIN,
    },
    {
      icon: iconoYoutube,
      label: 'YouTube',
      href: import.meta.env.VITE_SOCIAL_YOUTUBE || '#',
      enabled: !!import.meta.env.VITE_SOCIAL_YOUTUBE,
    },
  ].filter(social => social.enabled); // Only show enabled social links

  return (
    <footer className="bg-brand-footer text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <img
                src={logoCuarzoWhite}
                alt="CUARZO24"
                className="h-12 w-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-medium text-white">Empresa</h3>
            <ul className="space-y-2 text-sm">
              {empresaLinks.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-brand-accent transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-medium text-white">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {serviciosLinks.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-brand-accent transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-medium text-white">Contacto</h3>
            <div className="space-y-3 text-sm text-white">
              <div className="flex items-center gap-3">
                <img src={iconoTelefono} alt="Teléfono" className="h-4 w-4" />
                <a
                  href="tel:+5493515760138"
                  className="text-brand-accent transition-colors duration-200 hover:text-white"
                >
                  +54 9 351 5760138
                </a>
              </div>
              <div className="flex items-center gap-3">
                <img src={iconoMail} alt="Correo" className="h-4 w-4" />
                <a
                  href="mailto:info@cuarzo24sa.com"
                  className="text-brand-accent transition-colors duration-200 hover:text-white"
                >
                  info@cuarzo24sa.com
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-white">Redes Sociales:</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="transition-transform duration-200 hover:scale-105"
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className="h-5 w-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
