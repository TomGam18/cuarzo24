import { useEffect, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HeroImage from '../assets/quienes-somos-1.jpg';
import BackgroundImageBlock from '../components/BackgroundImageBlock';
import MissionImage from '../assets/quienes-somos-2.jpg';
import VisionImage from '../assets/quienes-somos-3.jpg';
import ValuesImage from '../assets/quienes-somos-4.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const metricVariants = {
  hidden: { opacity: 0, y: 24 },
  rest: { opacity: 1, y: 0 },
  hover: { opacity: 1, y: -4 },
};

interface MetricItemProps {
  title: string;
  delay: number;
}

const MetricItem = ({ title, delay }: MetricItemProps) => {
  const value = useMotionValue(0);
  const rounded = useTransform(value, latest => Math.round(latest));
  const width = useTransform(
    value,
    latest => `${Math.min(Math.max(latest, 0), 100)}%`
  );
  const [displayValue, setDisplayValue] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const animatedWidth = useTransform(width, latest => {
    if (!isHovered) return latest;
    const numeric = parseFloat(latest);
    const scaled = Math.min(numeric * 1.15, 115);
    return `${scaled}%`;
  });

  useEffect(() => {
    const controls = animate(value, 100, {
      duration: 1.6,
      delay,
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [value, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', latest => setDisplayValue(latest));
    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.div
      className="group space-y-2"
      variants={metricVariants}
      initial="hidden"
      whileInView="rest"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-end gap-3">
        <span className="text-4xl font-semibold text-brand-nav md:text-5xl">
          {displayValue}%
        </span>
        <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
          <motion.div
            className="h-full origin-left bg-brand-accent transition-transform duration-300 ease-out group-hover:scale-x-105"
            style={{ width: animatedWidth, transformOrigin: 'left' }}
          />
        </div>
      </div>
      <p className="text-xl font-medium leading-snug text-brand-footer md:text-2xl md:leading-relaxed">
        {title}
      </p>
    </motion.div>
  );
};

const MotionCard = motion(Card);

const QuienesSomosPage = () => {
  return (
    <div className="bg-white">
      <motion.div
        className="relative -mx-6 -mt-24"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <BackgroundImageBlock
          imageSrc={HeroImage}
          alt=""
          className="min-h-[50vh] bg-[length:220%_auto] md:min-h-[100vh] md:bg-cover"
          backgroundPosition="top center"
        />

        {/* Mobile Vertical Line - extends from top to bottom including through title div */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-accent md:hidden"
          style={{ zIndex: 10 }}
        />

        {/* Mobile Title at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-brand-nav px-6 py-4 md:hidden"
          style={{ zIndex: 5 }}
        >
          <h1 className="relative z-20 text-3xl font-semibold text-white">
            Cuarzo 24 SA
          </h1>
        </div>
      </motion.div>

      <motion.section
        className="mx-auto mt-6 flex w-full max-w-4xl flex-col gap-6 px-6 text-left md:mt-16 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.header
          className="space-y-3 md:space-y-4"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <motion.h1
            className="hidden text-3xl font-semibold text-brand-nav md:block md:text-4xl"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            Cuarzo 24 SA
          </motion.h1>
          <motion.p
            className="w-full text-base font-medium leading-snug text-brand-nav md:w-3/5 md:text-lg md:leading-relaxed md:text-gray-700"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Brindamos la ejecución de Proyectos, Dirección y Conducción Técnica,
            cálculos y dimensionado y Montaje de Instalaciones Especiales.
          </motion.p>
        </motion.header>

        <motion.div
          className="mt-4 space-y-3 text-base leading-snug text-brand-nav md:mt-0 md:space-y-4 md:text-lg md:leading-relaxed md:text-gray-700"
          variants={fadeUp}
          transition={{ delay: 0.25 }}
        >
          <p>
            Apostamos a dar solución a todo tipo de problemas, con bases sólidas
            en Calidad, Sustentabilidad y Responsabilidad Social empresarial.
            Brindamos mantenimiento de infraestructuras, y ofrecemos servicios
            diseñados para la gestión integral de activos físicos, ofreciendo un
            alto nivel de eficiencia, reforzando las ventajas competitivas de
            nuestros clientes y poniendo en valor todas las partes involucradas.
          </p>
          <p>
            Garantizamos resultados, a través de la implementación de
            indicadores de calidad y disponibilidad para cada servicio del
            contrato, reflejados en informes de gestión temporales.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 md:space-y-8"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          {[
            { title: 'Respeto al medio ambiente' },
            { title: 'Buenas Prácticas' },
            { title: 'Eficiencia' },
          ].map(({ title }, index) => (
            <MetricItem key={title} title={title} delay={0.2 + index * 0.1} />
          ))}
        </motion.div>
      </motion.section>

      <section className="relative left-1/2 mt-16 w-screen -translate-x-1/2 bg-brand-accent py-12 text-white md:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-3 md:gap-12 md:px-8">
          {[
            {
              title: 'Misión',
              image: MissionImage,
              items: [
                'Gestionar las instalaciones y el mantenimiento de infraestructuras con excelencia en el servicio.',
              ],
            },
            {
              title: 'Visión',
              image: VisionImage,
              items: [
                'Ser empresa líder en el mercado.',
                'Innovar en tecnologías.',
                'Desarrollar un ambiente laboral con responsabilidad social.',
                'Implementar desarrollo sustentable en las prácticas aplicadas al servicio.',
              ],
            },
            {
              title: 'Valores',
              image: ValuesImage,
              items: [
                'Responsabilidad social empresarial.',
                'Respeto al medio ambiente.',
                'Trabajo en equipo.',
                'Seguridad.',
                'Buenas prácticas.',
                'Mejora continua.',
              ],
            },
          ].map(({ title, image, items }, index) => (
            <MotionCard
              key={title}
              className="flex h-full flex-col overflow-hidden border border-brand-nav bg-white text-brand-nav shadow-lg shadow-black/10 md:border-white/10 md:bg-white/5 md:text-white md:backdrop-blur"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="overflow-hidden bg-white">
                <img
                  src={image}
                  alt={title}
                  className="h-40 w-full object-cover"
                />
              </div>
              <CardHeader className="space-y-2 px-4 pt-4 pb-2 md:px-6 md:pt-6">
                <CardTitle className="text-2xl font-medium text-brand-nav md:text-3xl md:text-white">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                <ul className="space-y-1 text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-white/90">
                  {items.map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-nav md:bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default QuienesSomosPage;
