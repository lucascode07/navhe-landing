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
];
