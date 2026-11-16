// Dedicated service pages (/services/<slug>) and service-area pages (/areas/<slug>).
// Slugs are shared between languages so the FR/EN toggle maps page to page.
// Text wrapped in *asterisks* is rendered as an italic accent word (see `rich()`).
import type { Lang } from '../i18n/utils';

export interface LandingPage {
  slug: string;
  nav: string; // short name used in link lists and the footer
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  lede: string;
  pointsTitle: string;
  points: { title: string; text: string }[];
  context: { title: string; paragraphs: string[] };
  places?: string[];
  faqs: { question: string; answer: string }[];
  cta: { title: string; description: string; button: string };
}

export const landingLabels = {
  fr: {
    services: 'Services',
    areas: 'Secteurs',
    placesTitle: 'Secteurs desservis',
    faqEyebrow: 'FAQ',
    faqTitle: 'Questions *fréquentes*',
    relatedServices: 'Nos services',
    detailedTitle: 'Un service pour *chaque type d’immeuble*',
  },
  en: {
    services: 'Services',
    areas: 'Areas',
    placesTitle: 'Areas served',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked *questions*',
    relatedServices: 'Our services',
    detailedTitle: 'A service for *every type of building*',
  },
} satisfies Record<Lang, Record<string, string>>;

const fr = {
  services: [
    {
      slug: 'plex',
      nav: 'Plex et immeubles à revenus',
      seo: {
        title: 'Gestion de plex et d’immeubles à revenus à Montréal | Gestion Proprio Alliance',
        description: 'Gestion locative de duplex, triplex et immeubles à revenus à Montréal et Laval : location, loyers, entretien, TAL. Estimation gratuite.',
      },
      eyebrow: 'Gestion résidentielle',
      title: 'Gestion de plex et d’immeubles *à revenus*',
      lede: 'Du duplex à l’immeuble de plusieurs dizaines de logements, nous prenons en charge la location, les loyers, l’entretien et les relations avec les locataires. Vous gardez les décisions importantes, sans la gestion quotidienne.',
      pointsTitle: 'Ce que nous prenons en charge',
      points: [
        { title: 'Location des logements', text: 'Mise en marché, visites, vérification complète des candidats (crédit, antécédents criminels, dossiers au TAL, références) et signature du bail.' },
        { title: 'Perception des loyers', text: 'Suivi des paiements chaque mois et relance dès le premier retard.' },
        { title: 'Entretien et urgences 24/7', text: 'Demandes des locataires traitées rapidement, ligne d’urgence jour et nuit et travaux confiés à des entrepreneurs licenciés RBQ.' },
        { title: 'Baux et TAL', text: 'Avis de renouvellement et de modification envoyés dans les délais légaux, suivi des non-paiements et préparation des dossiers au Tribunal administratif du logement.' },
        { title: 'Rapports mensuels', text: 'Un état de compte clair chaque mois : loyers perçus, dépenses et travaux réalisés.' },
      ],
      context: {
        title: 'Pourquoi confier *un plex* à un gestionnaire?',
        paragraphs: [
          'Un plex demande peu de temps la plupart de l’année. Puis un logement se libère, un locataire cesse de payer ou un dégât d’eau survient la nuit. Ce sont ces moments qui coûtent le plus cher lorsqu’ils sont mal gérés.',
          'Les règles du TAL sont strictes sur les délais et les formulaires. Un avis de modification envoyé trop tard peut reporter une augmentation de loyer d’une année complète. Nous suivons ces échéances pour chacun de vos baux.',
        ],
      },
      faqs: [
        { question: 'Comment sont calculés vos honoraires pour un plex?', answer: 'Nos honoraires correspondent à un pourcentage des revenus bruts mensuels de l’immeuble. Le taux dépend du nombre de logements et des services inclus. Contactez-nous pour une estimation gratuite.' },
        { question: 'Gérez-vous aussi les condos locatifs?', answer: 'Oui. Nous gérons les condos locatifs individuels au même titre que les plex et les immeubles à revenus.' },
        { question: 'Que se passe-t-il si un locataire ne paie pas son loyer?', answer: 'Nous faisons le suivi dès le premier retard. Si le loyer demeure impayé, nous préparons la demande au TAL : un retard de plus de trois semaines permet de demander la résiliation du bail.' },
      ],
      cta: { title: 'Parlons de *votre immeuble*', description: 'Dites-nous combien de logements vous possédez et où se trouve l’immeuble. Nous vous répondons avec une estimation gratuite.', button: 'Obtenir une estimation' },
    },
    {
      slug: 'copropriete',
      nav: 'Syndicats de copropriété',
      seo: {
        title: 'Gestion de copropriété à Montréal et Laval | Gestion Proprio Alliance',
        description: 'Gestion de syndicats de copropriété à Montréal, Laval, Rive-Nord et Rive-Sud : budget, frais communs, fonds de prévoyance, carnet d’entretien.',
      },
      eyebrow: 'Gestion de copropriété',
      title: 'Gestion de *syndicats de copropriété*',
      lede: 'Nous soutenons le conseil d’administration dans l’administration courante du syndicat : finances, entretien de l’immeuble, assemblées et obligations légales. Le conseil garde les décisions; nous en assurons l’exécution.',
      pointsTitle: 'Ce que nous prenons en charge',
      points: [
        { title: 'Finances du syndicat', text: 'Préparation du budget annuel, perception des charges communes, paiement des fournisseurs et états financiers présentés au conseil.' },
        { title: 'Fonds de prévoyance', text: 'Suivi des cotisations et planification des travaux majeurs selon l’étude du fonds de prévoyance.' },
        { title: 'Carnet d’entretien', text: 'Tenue du carnet d’entretien, inspections planifiées et coordination des travaux avec des entrepreneurs licenciés RBQ.' },
        { title: 'Assemblées', text: 'Avis de convocation, ordre du jour et documents préparés pour le conseil; soutien pendant l’assemblée et rédaction du procès-verbal.' },
        { title: 'Copropriétaires et urgences', text: 'Réponse aux demandes des copropriétaires et ligne d’urgence 24/7 pour les parties communes.' },
        { title: 'Assurances et sinistres', text: 'Suivi des assurances du syndicat et gestion des réclamations lors d’un sinistre dans les parties communes.' },
      ],
      context: {
        title: 'Des obligations qui *se sont alourdies*',
        paragraphs: [
          'Depuis la loi adoptée en 2019 (projet de loi 16), les syndicats doivent tenir un carnet d’entretien de l’immeuble et faire réaliser une étude du fonds de prévoyance par un professionnel. Ces documents doivent être mis à jour périodiquement.',
          'Pour un conseil formé de bénévoles, suivre ces obligations en plus des opérations courantes représente une charge importante. Notre rôle est de tenir ces dossiers à jour et de présenter au conseil l’information dont il a besoin pour décider.',
        ],
      },
      faqs: [
        { question: 'Comment sont fixés vos honoraires pour un syndicat?', answer: 'Nous proposons des honoraires fixes, établis selon le nombre d’unités et les services retenus par le conseil. Contactez-nous pour une proposition.' },
        { question: 'Le conseil d’administration garde-t-il le contrôle?', answer: 'Oui. Le conseil prend les décisions prévues par la déclaration de copropriété et par la loi. Notre mandat est d’exécuter ces décisions et de gérer les opérations courantes.' },
        { question: 'Pouvez-vous reprendre la gestion d’un syndicat autogéré?', answer: 'Oui. Nous récupérons les registres, les contrats et les documents financiers, puis faisons le point avec le conseil sur le carnet d’entretien, le fonds de prévoyance et les assurances.' },
      ],
      cta: { title: 'Parlons de *votre syndicat*', description: 'Dites-nous combien d’unités compte la copropriété et ce que le conseil souhaite déléguer. Nous préparons une proposition sur mesure.', button: 'Demander une proposition' },
    },
    {
      slug: 'commercial',
      nav: 'Immeubles commerciaux',
      seo: {
        title: 'Gestion d’immeubles commerciaux à Montréal | Gestion Proprio Alliance',
        description: 'Gestion de bureaux, de commerces et d’immeubles mixtes à Montréal et Laval : baux commerciaux, frais d’exploitation, entretien et location.',
      },
      eyebrow: 'Gestion commerciale',
      title: 'Gestion d’immeubles *commerciaux*',
      lede: 'Bureaux, commerces de détail et immeubles mixtes : nous gérons les baux, les frais d’exploitation et l’entretien pour que vos locataires restent et que votre immeuble garde sa valeur.',
      pointsTitle: 'Ce que nous prenons en charge',
      points: [
        { title: 'Baux commerciaux', text: 'Suivi des échéances, des options de renouvellement et des clauses d’indexation de chaque bail.' },
        { title: 'Frais d’exploitation', text: 'Calcul et répartition des frais communs entre les locataires, avec la conciliation annuelle prévue au bail.' },
        { title: 'Entretien du bâtiment', text: 'Systèmes mécaniques, toiture, stationnement et déneigement planifiés avec des entrepreneurs licenciés RBQ.' },
        { title: 'Location des locaux vacants', text: 'Mise en marché par notre courtier immobilier, inscription sur Centris et analyse des loyers comparables du secteur.' },
        { title: 'Rapports mensuels', text: 'Revenus, dépenses et état des baux présentés chaque mois.' },
      ],
      context: {
        title: 'Ce qui change avec *un immeuble commercial*',
        paragraphs: [
          'Le bail commercial n’est pas encadré par le TAL. Ce sont ses clauses qui fixent le loyer, la durée et le partage des dépenses. Bien gérer un immeuble commercial, c’est d’abord connaître ces clauses et les faire respecter.',
          'Les immeubles mixtes, avec des commerces au rez-de-chaussée et des logements aux étages, combinent les deux régimes. Nous gérons les deux sous un même mandat.',
        ],
      },
      faqs: [
        { question: 'Gérez-vous les immeubles mixtes?', answer: 'Oui. Les locaux commerciaux et les logements d’un même immeuble sont gérés ensemble, chacun selon les règles qui s’y appliquent.' },
        { question: 'Pouvez-vous louer nos locaux vacants?', answer: 'Oui. Notre courtier immobilier s’occupe de la mise en marché, de l’inscription sur Centris et de la négociation avec les futurs locataires.' },
        { question: 'Comment sont calculés vos honoraires?', answer: 'Nos honoraires correspondent à un pourcentage des revenus bruts de l’immeuble, selon sa taille et les services inclus. Contactez-nous pour une estimation gratuite.' },
      ],
      cta: { title: 'Parlons de *votre immeuble*', description: 'Décrivez-nous l’immeuble, ses locataires et ce que vous souhaitez déléguer. Nous vous répondons avec une estimation gratuite.', button: 'Obtenir une estimation' },
    },
  ],
  areas: [
    {
      slug: 'laval',
      nav: 'Laval',
      seo: {
        title: 'Gestion immobilière à Laval | Gestion Proprio Alliance',
        description: 'Gestion de plex, de copropriétés et d’immeubles commerciaux à Laval : Chomedey, Pont-Viau, Laval-des-Rapides, Sainte-Rose et plus. Estimation gratuite.',
      },
      eyebrow: 'Secteur · Laval',
      title: 'Gestion immobilière à *Laval*',
      lede: 'Nous gérons des plex, des immeubles à revenus, des copropriétés et des immeubles commerciaux partout à Laval, avec la même équipe et les mêmes services qu’à Montréal.',
      pointsTitle: 'Nos services à Laval',
      points: [
        { title: 'Plex et immeubles à revenus', text: 'Location, loyers, entretien et suivi des baux pour les duplex, triplex et immeubles à logements.' },
        { title: 'Syndicats de copropriété', text: 'Budget, fonds de prévoyance, carnet d’entretien et assemblées pour les copropriétés lavalloises.' },
        { title: 'Immeubles commerciaux', text: 'Baux commerciaux, frais d’exploitation et location des locaux vacants.' },
      ],
      context: {
        title: 'Le marché *lavallois*',
        paragraphs: [
          'Troisième ville en importance au Québec, Laval combine des secteurs de plex plus anciens, comme Pont-Viau et Laval-des-Rapides, et de nombreux projets de condos récents autour du métro Montmorency et du centre-ville.',
          'Laval a sa propre réglementation municipale, distincte de celle de Montréal, notamment pour les permis de rénovation et l’entretien des bâtiments. Nous en tenons compte dans la planification des travaux.',
        ],
      },
      places: ['Chomedey', 'Laval-des-Rapides', 'Pont-Viau', 'Vimont', 'Auteuil', 'Duvernay', 'Sainte-Rose', 'Fabreville', 'Sainte-Dorothée', 'Laval-Ouest'],
      faqs: [],
      cta: { title: 'Un immeuble *à Laval*?', description: 'Dites-nous où se trouve l’immeuble et combien il compte de logements ou d’unités. Nous vous répondons avec une estimation gratuite.', button: 'Obtenir une estimation' },
    },
    {
      slug: 'rive-nord',
      nav: 'Rive-Nord',
      seo: {
        title: 'Gestion immobilière sur la Rive-Nord | Gestion Proprio Alliance',
        description: 'Gestion de plex, de copropriétés et d’immeubles commerciaux sur la Rive-Nord : Terrebonne, Blainville, Saint-Eustache, Mirabel, Repentigny et plus.',
      },
      eyebrow: 'Secteur · Rive-Nord',
      title: 'Gestion immobilière sur la *Rive-Nord*',
      lede: 'De Saint-Eustache à Repentigny, nous gérons des immeubles à revenus, des copropriétés et des immeubles commerciaux dans les villes de la Rive-Nord.',
      pointsTitle: 'Nos services sur la Rive-Nord',
      points: [
        { title: 'Plex et immeubles à revenus', text: 'Location, loyers, entretien et suivi des baux pour les plex et les immeubles à logements.' },
        { title: 'Syndicats de copropriété', text: 'Budget, fonds de prévoyance, carnet d’entretien et assemblées, y compris pour les copropriétés récentes.' },
        { title: 'Immeubles commerciaux', text: 'Baux commerciaux, frais d’exploitation et location des locaux vacants.' },
      ],
      context: {
        title: 'Un parc immobilier *plus récent*',
        paragraphs: [
          'Une grande partie des immeubles locatifs et des copropriétés de la Rive-Nord a été construite au cours des dernières décennies. Les premières années d’une copropriété sont déterminantes : c’est à ce moment que se mettent en place le carnet d’entretien, le fonds de prévoyance et les contrats de service.',
          'Chaque ville a ses propres règlements municipaux. Nous en tenons compte dans la planification des travaux et des inspections.',
        ],
      },
      places: ['Terrebonne', 'Mascouche', 'Repentigny', 'Blainville', 'Boisbriand', 'Sainte-Thérèse', 'Rosemère', 'Mirabel', 'Saint-Eustache', 'Deux-Montagnes', 'Saint-Jérôme'],
      faqs: [],
      cta: { title: 'Un immeuble *sur la Rive-Nord*?', description: 'Dites-nous où se trouve l’immeuble et combien il compte de logements ou d’unités. Nous vous répondons avec une estimation gratuite.', button: 'Obtenir une estimation' },
    },
    {
      slug: 'rive-sud',
      nav: 'Rive-Sud',
      seo: {
        title: 'Gestion immobilière sur la Rive-Sud | Gestion Proprio Alliance',
        description: 'Gestion de plex, de copropriétés et d’immeubles commerciaux sur la Rive-Sud : Longueuil, Brossard, Saint-Lambert, Boucherville, La Prairie et plus.',
      },
      eyebrow: 'Secteur · Rive-Sud',
      title: 'Gestion immobilière sur la *Rive-Sud*',
      lede: 'De Longueuil à Châteauguay, nous gérons des plex, des copropriétés et des immeubles commerciaux dans les villes de la Rive-Sud.',
      pointsTitle: 'Nos services sur la Rive-Sud',
      points: [
        { title: 'Plex et immeubles à revenus', text: 'Location, loyers, entretien et suivi des baux pour les plex et les immeubles à logements.' },
        { title: 'Syndicats de copropriété', text: 'Budget, fonds de prévoyance, carnet d’entretien et assemblées pour les copropriétés de toutes tailles.' },
        { title: 'Immeubles commerciaux', text: 'Baux commerciaux, frais d’exploitation et location des locaux vacants.' },
      ],
      context: {
        title: 'Un marché *en transformation*',
        paragraphs: [
          'La Rive-Sud réunit des secteurs de plex établis, comme le Vieux-Longueuil, et de nombreux projets de condos et d’immeubles locatifs récents. La mise en service du REM à Brossard en 2023 a accéléré la construction autour de ses stations.',
          'Chaque ville a ses propres règlements municipaux. Nous en tenons compte dans la planification des travaux et des inspections.',
        ],
      },
      places: ['Longueuil', 'Saint-Hubert', 'Greenfield Park', 'Brossard', 'Saint-Lambert', 'Boucherville', 'Saint-Bruno-de-Montarville', 'La Prairie', 'Candiac', 'Châteauguay'],
      faqs: [],
      cta: { title: 'Un immeuble *sur la Rive-Sud*?', description: 'Dites-nous où se trouve l’immeuble et combien il compte de logements ou d’unités. Nous vous répondons avec une estimation gratuite.', button: 'Obtenir une estimation' },
    },
  ],
} satisfies { services: LandingPage[]; areas: LandingPage[] };

const en: typeof fr = {
  services: [
    {
      slug: 'plex',
      nav: 'Plexes & income properties',
      seo: {
        title: 'Plex & Income Property Management in Montreal | Gestion Proprio Alliance',
        description: 'Rental management for duplexes, triplexes and income properties in Montreal and Laval: leasing, rent, maintenance, TAL. Free estimate.',
      },
      eyebrow: 'Residential management',
      title: 'Plex and *income property* management',
      lede: 'From a duplex to a building with dozens of units, we take care of leasing, rent, maintenance and tenant relations. You keep the important decisions, without the day-to-day management.',
      pointsTitle: 'What we take care of',
      points: [
        { title: 'Leasing', text: 'Marketing, showings, complete applicant verification (credit, criminal background, TAL records, references) and lease signing.' },
        { title: 'Rent collection', text: 'Payments tracked every month, with follow-up from the first late payment.' },
        { title: 'Maintenance & 24/7 emergencies', text: 'Tenant requests handled quickly, an emergency line day and night, and work carried out by licensed (RBQ) contractors.' },
        { title: 'Leases & the TAL', text: 'Renewal and modification notices sent within legal deadlines, follow-up on unpaid rent and case preparation for the Tribunal administratif du logement.' },
        { title: 'Monthly reports', text: 'A clear statement every month: rent collected, expenses and work completed.' },
      ],
      context: {
        title: 'Why hand *a plex* to a manager?',
        paragraphs: [
          'A plex takes little time for most of the year. Then a unit becomes vacant, a tenant stops paying, or a water leak happens at night. Those are the moments that cost the most when they are handled poorly.',
          'TAL rules are strict about deadlines and forms. A modification notice sent too late can push a rent increase back by a full year. We track those deadlines for every one of your leases.',
        ],
      },
      faqs: [
        { question: 'How are your fees calculated for a plex?', answer: 'Our fees are a percentage of the building’s gross monthly revenue. The rate depends on the number of units and the services included. Contact us for a free estimate.' },
        { question: 'Do you also manage rental condos?', answer: 'Yes. We manage individual rental condos just as we manage plexes and income properties.' },
        { question: 'What happens if a tenant doesn’t pay rent?', answer: 'We follow up from the first late payment. If the rent remains unpaid, we prepare the application to the TAL: being more than three weeks late allows the landlord to request termination of the lease.' },
      ],
      cta: { title: 'Let’s talk about *your building*', description: 'Tell us how many units you own and where the building is. We’ll reply with a free estimate.', button: 'Get an estimate' },
    },
    {
      slug: 'copropriete',
      nav: 'Condo syndicates',
      seo: {
        title: 'Condo Syndicate Management in Montreal & Laval | Gestion Proprio Alliance',
        description: 'Condo syndicate management in Montreal, Laval, North Shore and South Shore: budget, common fees, contingency fund, maintenance log, meetings.',
      },
      eyebrow: 'Condo management',
      title: 'Condo *syndicate* management',
      lede: 'We support the board of directors in running the syndicate day to day: finances, building maintenance, meetings and legal obligations. The board keeps the decisions; we carry them out.',
      pointsTitle: 'What we take care of',
      points: [
        { title: 'Syndicate finances', text: 'Annual budget, collection of common charges, supplier payments and financial statements presented to the board.' },
        { title: 'Contingency fund', text: 'Contributions tracked and major work planned according to the contingency fund study.' },
        { title: 'Maintenance log', text: 'The building’s maintenance log kept up to date, scheduled inspections, and work coordinated with licensed (RBQ) contractors.' },
        { title: 'Meetings', text: 'Notices, agendas and documents prepared for the board; support during the meeting and minutes drafted.' },
        { title: 'Co-owners & emergencies', text: 'Co-owner requests answered, and a 24/7 emergency line for the common areas.' },
        { title: 'Insurance & claims', text: 'The syndicate’s insurance tracked, and claims handled when damage occurs in the common areas.' },
      ],
      context: {
        title: 'Obligations that *keep growing*',
        paragraphs: [
          'Since the law adopted in 2019 (Bill 16), syndicates must keep a maintenance log for the building and have a contingency fund study prepared by a professional. Both must be updated periodically.',
          'For a volunteer board, keeping up with these obligations on top of day-to-day operations is a real burden. Our role is to keep these files current and give the board the information it needs to decide.',
        ],
      },
      faqs: [
        { question: 'How are your fees set for a syndicate?', answer: 'We offer flat fees, based on the number of units and the services the board chooses. Contact us for a proposal.' },
        { question: 'Does the board stay in control?', answer: 'Yes. The board makes the decisions set out in the declaration of co-ownership and the law. Our mandate is to carry out those decisions and run day-to-day operations.' },
        { question: 'Can you take over a self-managed syndicate?', answer: 'Yes. We collect the registers, contracts and financial records, then review the maintenance log, contingency fund and insurance with the board.' },
      ],
      cta: { title: 'Let’s talk about *your syndicate*', description: 'Tell us how many units the condo has and what the board would like to delegate. We’ll prepare a tailored proposal.', button: 'Request a proposal' },
    },
    {
      slug: 'commercial',
      nav: 'Commercial buildings',
      seo: {
        title: 'Commercial Property Management in Montreal | Gestion Proprio Alliance',
        description: 'Management of offices, retail and mixed-use buildings in Montreal and Laval: commercial leases, operating costs, maintenance and leasing.',
      },
      eyebrow: 'Commercial management',
      title: 'Commercial *property* management',
      lede: 'Offices, retail and mixed-use buildings: we manage leases, operating costs and maintenance so your tenants stay and your building keeps its value.',
      pointsTitle: 'What we take care of',
      points: [
        { title: 'Commercial leases', text: 'Expiry dates, renewal options and indexation clauses tracked for every lease.' },
        { title: 'Operating costs', text: 'Common costs calculated and allocated among tenants, with the annual reconciliation set out in each lease.' },
        { title: 'Building maintenance', text: 'Mechanical systems, roof, parking and snow removal planned with licensed (RBQ) contractors.' },
        { title: 'Leasing vacant space', text: 'Marketing by our in-house broker, Centris listing and analysis of comparable rents in the area.' },
        { title: 'Monthly reports', text: 'Revenue, expenses and lease status presented every month.' },
      ],
      context: {
        title: 'What’s different about *a commercial building*',
        paragraphs: [
          'Commercial leases are not governed by the TAL. The lease’s own clauses set the rent, the term and how expenses are shared. Managing a commercial building well starts with knowing those clauses and enforcing them.',
          'Mixed-use buildings, with retail on the ground floor and apartments above, combine both systems. We manage both under a single mandate.',
        ],
      },
      faqs: [
        { question: 'Do you manage mixed-use buildings?', answer: 'Yes. The commercial spaces and apartments in the same building are managed together, each under the rules that apply to it.' },
        { question: 'Can you lease our vacant space?', answer: 'Yes. Our real estate broker handles marketing, the Centris listing and negotiations with prospective tenants.' },
        { question: 'How are your fees calculated?', answer: 'Our fees are a percentage of the building’s gross revenue, based on its size and the services included. Contact us for a free estimate.' },
      ],
      cta: { title: 'Let’s talk about *your building*', description: 'Tell us about the building, its tenants and what you’d like to delegate. We’ll reply with a free estimate.', button: 'Get an estimate' },
    },
  ],
  areas: [
    {
      slug: 'laval',
      nav: 'Laval',
      seo: {
        title: 'Property Management in Laval | Gestion Proprio Alliance',
        description: 'Management of plexes, condos and commercial buildings in Laval: Chomedey, Pont-Viau, Laval-des-Rapides, Sainte-Rose and more. Free estimate.',
      },
      eyebrow: 'Area · Laval',
      title: 'Property management in *Laval*',
      lede: 'We manage plexes, income properties, condo syndicates and commercial buildings throughout Laval, with the same team and services as in Montreal.',
      pointsTitle: 'Our services in Laval',
      points: [
        { title: 'Plexes & income properties', text: 'Leasing, rent, maintenance and lease follow-up for duplexes, triplexes and apartment buildings.' },
        { title: 'Condo syndicates', text: 'Budget, contingency fund, maintenance log and meetings for Laval condo buildings.' },
        { title: 'Commercial buildings', text: 'Commercial leases, operating costs and leasing of vacant space.' },
      ],
      context: {
        title: 'The *Laval* market',
        paragraphs: [
          'Quebec’s third-largest city, Laval combines older plex neighbourhoods, such as Pont-Viau and Laval-des-Rapides, with many recent condo projects around Montmorency metro and the city centre.',
          'Laval has its own municipal bylaws, separate from Montreal’s, including for renovation permits and building maintenance. We take them into account when planning work.',
        ],
      },
      places: fr.areas[0].places,
      faqs: [],
      cta: { title: 'A building *in Laval*?', description: 'Tell us where the building is and how many units it has. We’ll reply with a free estimate.', button: 'Get an estimate' },
    },
    {
      slug: 'rive-nord',
      nav: 'North Shore',
      seo: {
        title: 'Property Management on the North Shore | Gestion Proprio Alliance',
        description: 'Management of plexes, condos and commercial buildings on Montreal’s North Shore: Terrebonne, Blainville, Saint-Eustache, Mirabel, Repentigny and more.',
      },
      eyebrow: 'Area · North Shore',
      title: 'Property management on the *North Shore*',
      lede: 'From Saint-Eustache to Repentigny, we manage income properties, condo syndicates and commercial buildings in the cities of the North Shore.',
      pointsTitle: 'Our services on the North Shore',
      points: [
        { title: 'Plexes & income properties', text: 'Leasing, rent, maintenance and lease follow-up for plexes and apartment buildings.' },
        { title: 'Condo syndicates', text: 'Budget, contingency fund, maintenance log and meetings, including for newer condo buildings.' },
        { title: 'Commercial buildings', text: 'Commercial leases, operating costs and leasing of vacant space.' },
      ],
      context: {
        title: 'A *newer* building stock',
        paragraphs: [
          'Much of the North Shore’s rental and condo stock was built in recent decades. A condo’s first years are decisive: that is when the maintenance log, the contingency fund and service contracts are put in place.',
          'Each city has its own municipal bylaws. We take them into account when planning work and inspections.',
        ],
      },
      places: fr.areas[1].places,
      faqs: [],
      cta: { title: 'A building *on the North Shore*?', description: 'Tell us where the building is and how many units it has. We’ll reply with a free estimate.', button: 'Get an estimate' },
    },
    {
      slug: 'rive-sud',
      nav: 'South Shore',
      seo: {
        title: 'Property Management on the South Shore | Gestion Proprio Alliance',
        description: 'Management of plexes, condos and commercial buildings on Montreal’s South Shore: Longueuil, Brossard, Saint-Lambert, Boucherville, La Prairie and more.',
      },
      eyebrow: 'Area · South Shore',
      title: 'Property management on the *South Shore*',
      lede: 'From Longueuil to Châteauguay, we manage plexes, condo syndicates and commercial buildings in the cities of the South Shore.',
      pointsTitle: 'Our services on the South Shore',
      points: [
        { title: 'Plexes & income properties', text: 'Leasing, rent, maintenance and lease follow-up for plexes and apartment buildings.' },
        { title: 'Condo syndicates', text: 'Budget, contingency fund, maintenance log and meetings for condo buildings of every size.' },
        { title: 'Commercial buildings', text: 'Commercial leases, operating costs and leasing of vacant space.' },
      ],
      context: {
        title: 'A market *in transition*',
        paragraphs: [
          'The South Shore combines established plex neighbourhoods, such as Old Longueuil, with many recent condo and rental projects. The REM’s opening in Brossard in 2023 sped up construction around its stations.',
          'Each city has its own municipal bylaws. We take them into account when planning work and inspections.',
        ],
      },
      places: fr.areas[2].places,
      faqs: [],
      cta: { title: 'A building *on the South Shore*?', description: 'Tell us where the building is and how many units it has. We’ll reply with a free estimate.', button: 'Get an estimate' },
    },
  ],
};

export const landing: Record<Lang, typeof fr> = { fr, en };
