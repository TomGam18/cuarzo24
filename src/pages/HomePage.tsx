import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackgroundImageBlock from '@/components/BackgroundImageBlock';
import homeHeroImage from '@/assets/home-1.jpg';
import homeCertificatesImage from '@/assets/home-2.png';
import homeContactImage from '@/assets/home-3.jpg';
import isoAbaLogo from '@/assets/iso-aba.png';
import isoNexfidLogo from '@/assets/iso-nexfid.png';
import bulletBlueIcon from '@/assets/bullet-blue.png';

const HomePage = () => {
  return (
    <div className="-mt-12 text-gray-900">
      <BackgroundImageBlock
        imageSrc={homeHeroImage}
        alt="Equipo de ingeniería supervisando obra en construcción"
        className="min-h-[90vh] md:min-h-[100vh]"
        contentClassName="flex h-full items-center px-6 py-20"
      >
        <motion.div
          className="mx-auto grid w-full max-w-4xl gap-6 text-center text-white md:gap-10 md:text-left"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="relative mx-auto inline-flex max-w-4xl flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-left">
            <span className="pointer-events-none absolute -inset-x-10 -inset-y-8 rounded-[3rem] bg-gradient-to-br from-black/85 via-black/65 to-transparent blur-[72px] md:-inset-x-12 md:-inset-y-10" />
            <h1 className="relative font-sans text-4xl font-bold leading-tight text-white drop-shadow-[0_20px_55px_rgba(0,0,0,0.55)] md:text-5xl md:leading-tight">
              Soluciones que transforman
              <span className="block">infraestructura en valor.</span>
            </h1>
            <p className="relative max-w-3xl text-lg font-medium text-white/90 drop-shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:text-2xl md:pr-12 lg:pr-24">
              Más de 10 años de trayectoria brindando servicios integrales de
              mantenimiento e infraestructura con foco en la calidad, la
              eficiencia y la sustentabilidad.
            </p>
          </div>
        </motion.div>
      </BackgroundImageBlock>

      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-brand-footer py-10 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl">
              Certificados en normas ISO 9001 e ISO 14001:
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-12">
            <img
              src={isoNexfidLogo}
              alt="Certificación Nexfid ISO 9001:2015 e ISO 14001:2015"
              className="h-20 w-auto"
            />
            <img
              src={isoAbaLogo}
              alt="Certificación ABA Auditorías"
              className="h-20 w-auto"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 flex w-full max-w-4xl flex-col gap-10 px-6">
        <div className="space-y-6 text-left">
          <p className="text-xl font-medium leading-relaxed text-brand-footer">
            Somos una empresa cordobesa especializada en la ejecución de obras y
            servicios de mantenimiento e infraestructura. Nos destacamos por
            ofrecer soluciones precisas con una gestión comprometida, eficiente
            y sustentable.
          </p>
          <ul className="space-y-6 text-lg text-brand-footer">
            {[
              'Fundada en 2014',
              'Capital humano interdisciplinario',
              'Certificación ISO 9001 y 14001',
              'Premiados en calidad de servicios por Aeropuertos Argentina 2000',
              'Enfoque en la mejora continua y gestión profesional',
            ].map(item => (
              <li key={item} className="flex items-start gap-6">
                <img
                  src={bulletBlueIcon}
                  alt="Elemento destacado"
                  className="mt-1 h-3 w-3"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="h-[3px] w-full bg-brand-accent" />
        </div>

        <div className="flex flex-col gap-8 text-left">
          <div
            className="relative w-full max-w-lg overflow-hidden"
            style={{ aspectRatio: '3 / 4' }}
          >
            <img
              src={homeCertificatesImage}
              alt="Certificados de calidad de CUARZO24"
              className="h-full w-full scale-[1.25] object-cover"
            />
          </div>
          <div className="space-y-4 text-brand-footer">
            <h3 className="text-2xl font-semibold">¡Orgullo y celebración!</h3>
            <p className="text-base leading-relaxed">
              Nuestra empresa alcanza un nuevo hito:
              <span className="font-semibold">
                {' '}
                Certificación ISO el 23 de diciembre de 2024.
              </span>
              <br />
              <span className="font-normal">
                En el marco de nuestro décimo aniversario, este logro refleja
                nuestro compromiso con la calidad y la excelencia.
                <br />
                ¡Gracias a nuestro equipo por hacer posible este logro!
              </span>
            </p>
            <div className="flex justify-center">
              <Link
                to="/certificaciones"
                className="inline-block bg-brand-accent px-6 py-3 text-sm font-semibold uppercase text-white transition-colors duration-200 hover:bg-brand-accent/80"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 bg-brand-nav text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-0 overflow-hidden md:min-h-[30rem] md:grid-cols-2 md:items-stretch">
          {/* Mobile Image - shown first on mobile */}
          <div className="md:hidden">
            <img
              src={homeContactImage}
              alt="Obra de construcción en curso"
              className="w-full object-cover"
            />
          </div>

          {/* Form - shown second on mobile, first on desktop */}
          <div className="flex flex-col justify-center gap-8 px-6 py-12 md:px-12 md:order-1">
            <div className="space-y-3">
              <h3 className="text-3xl font-semibold">Consultas</h3>
            </div>
            <form className="flex flex-col gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold uppercase tracking-wide text-white/80"
                >
                  Nombre
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-base text-brand-footer placeholder:text-brand-footer/60 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold uppercase tracking-wide text-white/80"
                >
                  Correo
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="nombre@empresa.com"
                  className="w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-base text-brand-footer placeholder:text-brand-footer/60 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-semibold uppercase tracking-wide text-white/80"
                >
                  Asunto
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Tema de consulta"
                  className="w-full rounded-md border border-white/20 bg-white/90 px-4 py-3 text-base text-brand-footer placeholder:text-brand-footer/60 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold uppercase tracking-wide text-white/80"
                >
                  Tu mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Contanos en qué podemos ayudarte"
                  className="w-full resize-none rounded-md border border-white/20 bg-white/90 px-4 py-3 text-base text-brand-footer placeholder:text-brand-footer/60 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-brand-accent/80 md:w-auto md:self-end"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Desktop Image - shown second on desktop */}
          <div className="relative hidden h-full md:block md:order-2">
            <img
              src={homeContactImage}
              alt="Obra de construcción en curso"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
