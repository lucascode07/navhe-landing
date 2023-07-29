import { InternalPage } from "../interfaces/internal-page.interface";

export const listInternalPages: InternalPage[] = [
  {
    slug: "nosotros",
    sidebarNavigationData: [
      { copy: "¿Quiénes somos?", icon: "icon-home", slug: "quienes-somos" },
      { copy: "Misión y Visión", icon: "icon-star", slug: "mision-vision" },
      { copy: "Valores", icon: "icon-heart", slug: "valores" },
      { copy: "Nuestro equipo", icon: "icon-people", slug: "equipo" },
      { copy: "Datos", icon: "icon-fact-check", slug: "datos" },
    ],
    subpages: [
      {
        slug: "quienes-somos",
        sections: [
          [
            {
              title: "Lo que somos", // titulo de sección de la página
              text: [
                "Somos una empresa peruana joven, innovadora y dinámica; un espacio para emprendedores y sus clientes, dedicado, no solo a brindar servicios de delivery y courier local, sino que también te ofrecemos la facilidad de compartir tus gustos e interactuar con otros usuarios, a través de historias y otras divertidas funciones, como mensajería y una lista extensa y variada de productos y servicios que te harán sentir parte de esta comunidad espacial. ",
              ], // texto con referencia del título
              gridData: [], // si hay grid con imágenes e info
              statsInfo: [], // si hay estadísticas con imágenes e info
            },
          ],
        ],
      },
      {
        slug: "mision-vision",
        sections: [
          [
            {
              title: "Misión",
              text: [
                "Generar un espacio accesible para emprendedores y sus clientes.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
          [
            {
              title: "Visión",
              text: [
                "Consolidarnos como la aplicación móvil de delivery más competitiva e innovadora.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "valores",
        sections: [
          [
            {
              title: "Experiencial",
              text: [
                "Compromiso: Estamos comprometidos con nuestros usuarios y asociados, manteniéndonos siempre en contacto con ellos.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
          [
            {
              title: "Simbólico",
              text: [
                "Libertad: Somos una aplicación divertida, dinámica e inclusiva. Parte de nuestra filosofía es llegar a todo tipo de público.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
          [
            {
              title: "Funcional",
              text: [
                "Responsabilidad: Somos una empresa formal y responsable para con todos nuestros usuarios y asociados, al realizar compras y pedidos dentro de nuestra aplicación.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "equipo",
        sections: [
          [
            {
              title: "Nuestro equipo",
              text: ["", ""],
              gridData: [
                {
                  image: "/images/photo-placeholder.png",
                  name: "Nombre Trabajador - 01",
                  info: [
                    "CEO - Director Ejecutivo",
                    "Ejecución de las operaciones de la empresa | Navhe Delivery",
                  ],
                },
                {
                  image: "/images/photo-placeholder.png",
                  name: "Nombre Trabajador - 02",
                  info: [
                    "Gestor Operativo",
                    "Ejecución de las operaciones de la empresa | Navhe Delivery",
                  ],
                },
                {
                  image: "/images/photo-placeholder.png",
                  name: "Nombre Trabajador - 03",
                  info: [
                    "Comunicador Social",
                    "Ejecución de las operaciones de la empresa | Navhe Delivery",
                  ],
                },
                {
                  image: "/images/photo-placeholder.png",
                  name: "Nombre Trabajador - 04",
                  info: [
                    "Administrador",
                    "Ejecución de las operaciones de la empresa | Navhe Delivery",
                  ],
                },
                {
                  image: "/images/photo-placeholder.png",
                  name: "Nombre Trabajador - 05",
                  info: [
                    "Administrador",
                    "Ejecución de las operaciones de la empresa | Navhe Delivery",
                  ],
                },
              ],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "datos",
        sections: [
          [
            {
              title:
                "Ya tenemos mas de (N°) usuarios registrados, estamos creciendo poco a poco gracias a ti.",
              text: [
                "Eres importante para Navhe, por eso estamos trabajando para mejorar tu experiencia como usuario, asociado y piloto de nuestra aplicación. Gracias por formar parte de Navhe.",
              ],
              gridData: [],
              statsInfo: [
                {
                  image: "/images/downloads.png",
                  title: "Descargas",
                  number: 3000,
                },
                {
                  image: "/images/store.png",
                  title: "Asociados",
                  number: 30,
                },
                {
                  image: "/images/moto.png",
                  title: "Pilotos",
                  number: 16,
                },
              ],
            },
          ],
        ],
      },
    ],
  },
  {
    slug: "funcionamiento",
    sidebarNavigationData: [
      { copy: "Para Clientes", icon: "icon-user", slug: "clientes" },
      { copy: "Para Pilotos", icon: "icon-motobike", slug: "pilotos" },
      { copy: "Para Asociados", icon: "icon-store", slug: "asociados" },
    ],
    subpages: [
      {
        slug: "clientes",
        sections: [
          [
            {
              title: "¿Cómo hacer mi pedido por navhe?", // titulo de sección de la página
              text: [
                "Navhe quiere facilitarte el proceso de conocer la manera de realizar tu pedido de manera eficiente. Por eso, te hemos preparado este video interactivo donde conocerás la facilidad de preparar tu lista de compra hasta finalizar tu pedido.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "pilotos",
        sections: [
          [
            {
              title: "¿Cómo recepcionar un pedido en navhe?",
              text: [
                "Navhe quiere facilitarte el proceso de conocer la manera de realizar tu pedido de manera eficiente. Por eso, te hemos preparado este video interactivo donde conocerás la facilidad de preparar tu lista de compra hasta finalizar tu pedido.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "asociados",
        sections: [
          [
            {
              title: "¿Cómo aceptar un pedido en navhe?",
              text: [
                "Navhe quiere facilitarte el proceso de conocer la manera de realizar tu pedido de manera eficiente. Por eso, te hemos preparado este video interactivo donde conocerás la facilidad de preparar tu lista de compra hasta finalizar tu pedido.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
    ],
  },
  {
    slug: "soporte",
    sidebarNavigationData: [
      { copy: "Cuenta", icon: "icon-user", slug: "cuenta" },
      { copy: "Pagos", icon: "icon-money", slug: "pagos" },
      { copy: "Cupones", icon: "icon-cupon", slug: "cupones" },
      { copy: "Promociones", icon: "icon-store", slug: "promociones" },
      { copy: "Preguntas", icon: "icon-fact-check", slug: "preguntas" },
      { copy: "Libro de quejas", icon: "icon-book", slug: "libro-de-quejas" },
    ],
    subpages: [
      {
        slug: "cuenta",
        sections: [
          [
            {
              title: "Fallo de mi cuenta",
              text: [
                "Nos importa mucho la seguridad de tu cuenta, cuéntanos tu caso e inmediatamente nos pondremos en contacto. ¿Qué está sucediendo con tu cuenta?",
                "➔	Cuentas no autorizadas por otras personas.",
              ],
              gridData: [],
              statsInfo: [],
            },
            {
              title: "Pedido no realizado",
              text: [
                "Es lamentable que no puedas realizar algún pedido, cuéntanos la razón de tu inconveniente y nosotros estaremos dispuestos a ayudarte.",
                "¿Qué razón te impide hacer un pedido?",
                "➔ Tienda no acepta el pedido, ➔ Método de pago está fuera servicio, ➔ No hay disponibilidad de pilotos",
              ],
              gridData: [],
              statsInfo: [],
            },
            {
              title: "Cambiar mis datos de registro",
              text: [
                "El primer paso que debes hacer es dirigirte hacia tu perfil ubicado en el menú lateral de la aplicación Navhe, luego puedes editar y estás listo para realizar tu pedido. Solo no es modificable el cambio de tu correo electrónico por tema de seguridad de tu cuenta. ¡Haz clic aquí para realizar las modificaciones!",
              ],
              gridData: [],
              statsInfo: [],
            },
            {
              title: "¿Cómo deshabilitar las notificaciones?",
              text: [
                "Estamos a tus ordenes, puedes deshabilitar las notificaciones dando clic aquí. Es recomendable dejar activo las notificaciones para no perderte de las promociones que se ofrecen en cada campaña y evento que se realiza en Navhe. ¡Tus puntos harán que ganes muchos premios y entérate de las sorpresas que estamos preparándote para ti!",
                "¿Cuál es tu razón de cancelar tu cuenta?",
                "➔ El sistema de pedido es muy lento, ➔	Demora en la entrega de pedido, ➔	Mala experiencia en la comunidad Navhe, ➔	Ingrese mal mis datos",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "pagos",
        sections: [
          [
            {
              title: "Cobro automático no autorizado",
              text: [
                "Han utilizado mis créditos con pedidos no autorizados. Siento que es sospechoso. ¡Estamos para ayudarte a revisar tu caso!",
                "Es ahora de que te comuniques de manera rápida con nosotros para solucionar tu caso. Conoce el proceso de reclamo, haz clic aquí.",
              ],
              gridData: [],
              statsInfo: [],
            },
            {
              title: "Sobre las promociones",
              text: [
                "CANJEO DE PUNTOS",
                "Los puntos son sumamente importantes para realizar tus canjes en premios, cupones de descuentos entre otros. Si deseas saber más sobre los canjes y revisar las vigencias y condiciones de uso, haz clic aquí. Si tienes otras consultas particulares, no dudes en escribirnos a nuestro correo electrónico para revisar tu caso.  ¡Estaremos siempre dispuestos a ayudarte y solucionarlo lo más rápido posible!",
              ],
              gridData: [],
              statsInfo: [],
            },
            {
              title: "No puedo realizar ningún método de pago",
              text: [
                "Lo primero que debes hacer es revisar la actualización de tu aplicación Navhe y segundo, verificar el estado de tu tarjeta. Es muy importante que esté disponible para realizar compras online. ¡Haz clic aquí para agregar un nuevo método de pago para realizar tu pedido!",
                "Si aún no hemos podido solucionar tu problema, no dudes en escribirnos a nuestro correo electrónico y envíanos los detalles de lo sucedido. ¡Estaremos dispuestos a ayudarte!",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "cupones",
        sections: [
          [
            {
              title: "Conoce los Navhe cupones",
              text: [
                "CANJE POR PUNTOS",
                "Navhe te lleva a lograr grandes objetivos para tus compras de tu vida diaria y te facilita a través de puntos que puedes canjear con premios, cupones descuentos, entre otros. ¡Conoce nuestros canjes de Navhe, haz clic aquí!",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "promociones",
        sections: [
          [
            {
              title: "Nuestras promociones",
              text: [
                "CANJE POR PUNTOS",
                "Navhe te lleva a lograr grandes objetivos para tus compras de tu vida diaria y te facilita a través de puntos que puedes canjear con premios, cupones descuentos, entre otros. ¡Conoce nuestros canjes de Navhe, haz clic aquí!",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "preguntas",
        sections: [
          [
            {
              title: "¿Cómo hacer un pedido?",
              text: [
                "Navhe quiere facilitarte el proceso de conocer la manera de realizar tu pedido de manera eficiente. Por eso, te hemos preparado este video interactivo donde conocerás la facilidad de preparar tu lista de compra hasta finalizar tu pedido. VIDEO",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
      {
        slug: "libro-de-quejas",
        sections: [
          [
            {
              title: "",
              text: [
                "Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, este establecimiento cuenta con un Libro de Reclamaciones a tu disposición Solicitalo para registrar una queja o reclamo",
                "Haz clik aqui para llenar el formulario.",
              ],
              gridData: [],
              statsInfo: [],
            },
          ],
        ],
      },
    ],
  },
];
