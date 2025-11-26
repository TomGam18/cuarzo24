import certificateStackImage from '../assets/home-2.png';
import obrasCertificateOne from '../assets/obras-1.jpg';
import obrasCertificateTwo from '../assets/obras-2.jpg';
import obrasCertificateThree from '../assets/obras-3.jpg';
import obrasRseImage from '../assets/obras-4.jpg';

const ObrasPage = () => (
  <main className="bg-white py-4">
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 text-brand-footer">
      <h1 className="relative z-20 w-full text-left text-4xl font-semibold leading-tight pr-4 md:pr-32 md:text-5xl md:whitespace-nowrap">
        Cuarzo 24, con certificaciones ISO
      </h1>

      <div className="relative z-10 flex w-full flex-col gap-12 md:flex-row md:items-start">
        <div className="z-10 w-full max-w-2xl space-y-6 text-left md:w-3/5 md:pr-20 lg:pr-28">
          <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
            ¡Orgullo y celebración! Nuestra empresa alcanza un nuevo hito:
            certificación ISO el 23 de diciembre de 2024. En el marco de nuestro
            décimo aniversario, este logro refleja nuestro compromiso con la
            calidad y la excelencia.
          </p>
          <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
            ¡Gracias a nuestro equipo por hacer posible este logro!
          </p>

          <div className="flex w-full max-w-sm flex-col gap-3">
            {['CERTIFICACIONES ISO', 'RSE', 'CÓDIGO DE ÉTICA'].map(label => (
              <button
                key={label}
                type="button"
                className="rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-brand-accent/90"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="pointer-events-none relative mx-auto mt-4 w-full max-w-xl md:absolute md:right-[-6%] md:top-1/2 md:mt-0 md:w-[60%] md:max-w-3xl md:-translate-y-1/2 md:z-0">
          <img
            src={certificateStackImage}
            alt="Certificación ISO de Cuarzo 24 S.A."
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="relative left-1/2 z-20 mt-12 w-screen -translate-x-1/2 bg-brand-nav py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 text-center md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
          Certificaciones y Compromisos
        </h2>
        <div className="flex w-full flex-row items-center justify-center gap-4 text-white md:gap-10 lg:gap-16">
          {[
            obrasCertificateOne,
            obrasCertificateTwo,
            obrasCertificateThree,
          ].map((imageSrc, index) => (
            <div key={imageSrc} className="flex max-w-sm flex-1 justify-center">
              <img
                src={imageSrc}
                alt={`Certificación ${index + 1} de Cuarzo 24 S.A.`}
                className="h-auto w-full max-w-xs rounded-md shadow-lg lg:max-w-sm"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="-mx-6 -mt-12">
      {/* Mobile: Full width image with title */}
      <div className="relative md:hidden">
        <img
          src={obrasRseImage}
          alt="Acción de responsabilidad social en Cuarzo 24"
          className="w-full"
          loading="lazy"
        />

        {/* Mobile Vertical Line - extends from top to bottom including through title div */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-accent"
          style={{ zIndex: 10 }}
        />

        {/* Mobile Title at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-brand-nav px-6 py-4"
          style={{ zIndex: 5 }}
        >
          <h3 className="relative z-20 text-3xl font-semibold text-white">
            RSE
          </h3>
        </div>
      </div>

      <section className="relative left-1/2 w-screen -translate-x-1/2 py-6 md:py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-center gap-4 md:gap-6 lg:flex-row lg:items-start lg:gap-8">
            {/* Desktop: Image side by side with text */}
            <div className="hidden relative w-full lg:block lg:w-1/2">
              <img
                src={obrasRseImage}
                alt="Acción de responsabilidad social en Cuarzo 24"
                className="w-full rounded-sm shadow-xl"
                loading="lazy"
              />
            </div>

            <div className="flex w-full flex-col gap-1.5 text-brand-footer lg:w-1/2">
              <h3 className="hidden text-2xl font-semibold text-brand-nav md:block md:text-3xl">
                RSE
              </h3>
              <p className="text-sm leading-snug text-brand-nav md:text-base md:leading-relaxed md:text-gray-700">
                Cuarzo 24 SA es miembro permanente del IARSE, en apoyo a la
                misión institucional de "Generar conocimiento público para
                promover y difundir el concepto y la práctica de la RS, como
                forma de contribuir al desarrollo sustentable de Argentina y la
                región".
              </p>
              <p className="text-sm leading-snug text-brand-nav md:text-base md:leading-relaxed md:text-gray-700">
                Cuarzo 24 SA articula sus acciones de RSE de manera directa en
                la cadena de valor incorporando en el desarrollo del servicio
                una política explícita, en la que se definen valores y acciones
                basados en el respeto hacia:
              </p>
              <p className="text-sm leading-snug text-brand-nav md:text-base md:leading-relaxed md:text-gray-700">
                <span className="font-semibold text-brand-nav">
                  Los colaboradores:
                </span>{' '}
                promoción de oportunidades de empleo, integrando la diversidad
                en un entorno justo, pudiendo desarrollarse cubriendo sus
                expectativas tanto personales como profesionales.
              </p>
              <p className="text-sm leading-snug text-brand-nav md:text-base md:leading-relaxed md:text-gray-700">
                <span className="font-semibold text-brand-nav">
                  Los proveedores:
                </span>{' '}
                mantenemos relaciones estables con nuestros clientes y
                proveedores, basadas en la creación de valor, confianza,
                afrontando con responsabilidad los compromisos adquiridos. En
                este ámbito fomentamos a los proveedores adherir a códigos de
                conductas RSE.
              </p>
              <p className="text-sm leading-snug text-brand-nav md:text-base md:leading-relaxed md:text-gray-700">
                Respecto del Medio Ambiente, Cuarzo 24 SA tiene definida y
                difunde su Política Medioambiental, y en relación a la
                vinculación con la sociedad civil, mantenemos neutralidad
                política y el respeto por la diversidad de pensamientos y
                opiniones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Mobile: Código de ética header with rectangle */}
    <div className="-mx-6 md:hidden">
      <div className="relative">
        <div className="h-24 bg-white" />

        {/* Mobile Title Rectangle at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-brand-nav px-6 py-4"
          style={{ zIndex: 5 }}
        >
          {/* Mobile Vertical Line - matches rectangle height */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-accent"
            style={{ zIndex: 10 }}
          />
          <h3 className="relative z-20 text-3xl font-semibold text-white">
            Código de ética
          </h3>
        </div>
      </div>
    </div>

    <section className="relative left-1/2 w-screen -translate-x-1/2 py-6 md:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:px-12 lg:px-16">
        <div className="flex w-full flex-col gap-6 text-brand-nav md:text-gray-700">
          <div className="space-y-3">
            <h3 className="hidden text-3xl font-semibold text-gray-700 md:block md:text-4xl">
              Código de ética
            </h3>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Constituir un marco general, que contemple la aplicación de
              principios de ética y desarrollo sostenible en el desempeño de las
              funciones de CUARZO 24 SA. La ética en la empresa requiere que los
              accionistas, directivos y administradores, se constituyan como
              garantes del presente código de ética.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-brand-nav md:text-gray-700">
              Aplicación
            </h4>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Todo personal involucrando las actividades de CUARZO 24 SA, en
              relación directa o indirecta.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-brand-nav md:text-gray-700">
              Principios básicos de comportamiento
            </h4>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Es responsabilidad de cada empleado actuar de manera ética,
              honesta y con una clara orientación a la excelencia.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-brand-nav md:text-gray-700">
              Respeto a las normas vigentes
            </h4>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Las actividades empresariales y profesionales de CUARZO 24 SA se
              desarrollarán en cumplimiento de las normas y leyes vigentes.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-brand-nav md:text-gray-700">
              Respeto para clientes y proveedores
            </h4>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              CUARZO 24 SA mantiene relaciones estables con nuestros clientes y
              proveedores, basadas en la creación de valor, confianza,
              afrontando con responsabilidad los compromisos adquiridos.
              Contribuimos al desarrollo social y económico, innovando e
              implementando nuevas tecnologías que propicien mejoras sociales y
              medioambientales.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-brand-nav md:text-gray-700">
              Respeto para los empleados
            </h4>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              CUARZO 24 SA trabaja para la creación de oportunidades de empleo.
              Abogando el trato con dignidad, respeto y justicia hacia los
              empleados, teniendo en consideración su diferente sensibilidad
              cultural, evitando cualquier tipo de discriminación respetando la
              diversidad, facilitando todo tipo de comunicación ascendente,
              descendente y transversal.
            </p>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Se favorece un entorno justo, donde la equidad interna sea una
              realidad, y se recompense a las personas por su aportación de
              valor a la compañía, pudiendo desarrollarse cubriendo sus
              expectativas tanto personales como profesionales.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-brand-nav md:text-gray-700">
              Respeto por el medio ambiente
            </h4>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Las prácticas de CUARZO 24 SA tienen en cuenta la preservación del
              medio ambiente, según lo establecido en la PMP (Política
              Medioambiental propia).
            </p>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Todos los empleados, en el ámbito de sus funciones, deben conocer
              y asumir dicha política y actuar en todo momento de acuerdo con
              los criterios de respeto y sustentabilidad. También adoptar
              hábitos y conductas relacionadas con las buenas prácticas
              medioambientales contribuyendo al logro de los objetivos
              establecidos, esforzándose en minimizar el impacto medioambiental
              derivado de sus actividades y de la utilización de las
              instalaciones, equipos y medios de trabajo puestos a su
              disposición, procurando un uso eficiente de los mismos.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-brand-nav md:text-gray-700">
              Respeto por la información de terceros
            </h4>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              CUARZO 24 SA de acuerdo con la legislación vigente, garantizará la
              confidencialidad de los datos de sus clientes, comprometiéndose a
              no revelar los mismos a terceros, salvo consentimiento del cliente
              o por obligación legal, o cumplimiento de resoluciones judiciales
              o administrativas.
            </p>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Asimismo, garantiza el derecho de modificación y rectificación de
              datos a terceros, siempre y cuando ésta sea necesaria. No
              obstante, los empleados guardarán la confidencialidad de los datos
              antes referidos, en el desempeño de su actividad profesional, y se
              abstendrán de cualquier utilización inapropiada.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-brand-nav md:text-gray-700">
              Respeto con la sociedad civil
            </h4>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Mantener el principio de neutralidad política, como muestra además
              de respeto a las diferentes opiniones y sensibilidades de las
              personas vinculadas a la empresa.
            </p>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Relacionarse con las autoridades e instituciones públicas de
              manera lícita y respetuosa.
            </p>
            <p className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700">
              Colaborar con las entidades y organizaciones no gubernamentales
              dedicadas a mejorar los niveles de atención social de los más
              necesitados.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ObrasPage;
