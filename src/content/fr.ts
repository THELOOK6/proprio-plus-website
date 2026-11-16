// French is the primary language. `en.ts` must match this shape (enforced by `Content`).
// Text wrapped in *asterisks* is rendered as an italic accent word (see `rich()` in src/i18n/utils.ts).

const fr = {
  ui: {
    nav: { home: 'Accueil', about: 'À propos', services: 'Services', contact: 'Contactez-nous' },
    skip: 'Passer au contenu',
    menu: 'Menu',
    menuClose: 'Fermer',
    langLabel: 'Langue',
    mainNav: 'Navigation principale',
    footer: {
      tagline: 'Vous aider à profiter de la propriété — sans les tracas.',
      navigate: 'Navigation',
      contact: 'Coordonnées',
      legal: 'Juridique',
      region: 'Grand Montréal, Laval, Rive-Nord et Rive-Sud',
      rights: 'Tous droits réservés.',
    },
    legal: { privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation' },
    lastUpdated: 'Dernière mise à jour',
    notFound: { title: 'Page introuvable', message: 'Désolé, la page que vous recherchez n’existe pas.', back: 'Retour à l’accueil' },
  },

  home: {
    seo: {
      title: 'Gestion immobilière à Montréal et Laval | Gestion Proprio Alliance',
      description:
        'Gestion de plex, d’immeubles à revenus, de copropriétés et d’immeubles commerciaux à Montréal, Laval, Rive-Nord et Rive-Sud. Estimation gratuite.',
    },
    hero: {
      eyebrow: 'Gestion immobilière · Grand Montréal',
      title: 'Gestion immobilière de plex, condos et immeubles commerciaux dans le *Grand Montréal*',
      description:
        'Multiplex résidentiels, espaces commerciaux ou syndicat de copropriété : nous nous occupons de tout. Notre équipe d’experts gère les opérations quotidiennes, optimise vos rendements et protège vos actifs dans le Grand Montréal.',
      cta: 'Obtenir une soumission',
      caption: 'Résidentiel · Commercial · Copropriété',
      imageAlt: 'Immeuble en brique rouge de huit étages dans un quartier urbain',
    },
    facts: [
      { value: 'Grand Montréal', label: 'Laval, Rive-Nord et Rive-Sud' },
      { value: '24/7', label: 'Soutien d’urgence technique' },
      { value: 'Courtier immobilier', label: 'Intégré à notre équipe de direction' },
      { value: 'TAL', label: 'Conformité stricte des baux' },
    ],
    services: {
      eyebrow: 'Notre expertise',
      title: 'Une gestion immobilière complète — *opérée avec précision*',
      description:
        'Nous vous libérons des contraintes de la gestion locative : recherche de locataires fiables, perception des loyers, entretien et conformité légale. Nous prenons soin de chaque détail pour que votre patrimoine demeure rentable et protégé.',
      cta: 'Découvrir tous nos services',
      items: [
        { title: 'Gestion résidentielle et multi-logements', description: 'Gestion complète de vos plex, multiplex et portefeuilles résidentiels : location, perception des loyers et respect strict de la réglementation du TAL.' },
        { title: 'Gestion d’immeubles commerciaux', description: 'Administration experte de commerces de détail, de bureaux et de propriétés industrielles : baux commerciaux, charges communes et rétention des locataires.' },
        { title: 'Syndicats de copropriété', description: 'Soutien administratif et technique clé en main : assemblées générales, perception des frais de condo, fonds de prévoyance et carnets d’entretien.' },
        { title: 'Gestion financière et comptabilité', description: 'Perception sécuritaire et transparente des loyers et des cotisations, comptes fournisseurs, rapports financiers mensuels détaillés et budgets prévisionnels.' },
        { title: 'Entretien technique et urgences 24/7', description: 'Intervention rapide pour les réparations d’urgence et entretien préventif continu, coordonnés par des entrepreneurs de confiance titulaires d’une licence RBQ.' },
        { title: 'Vérification complète des locataires', description: 'Enquête de crédit, vérification des antécédents criminels, recherche de dossiers au TAL et validation des références d’employeur et des anciens propriétaires, pour des locataires fiables et durables.' },
        { title: 'Conformité légale et TAL', description: 'Tranquillité d’esprit face aux lois québécoises : mises à jour des baux, augmentations de loyer et liaison directe avec le Tribunal administratif du logement.' },
        { title: 'Optimisation des actifs et analyse de marché', description: 'Analyse régulière du marché montréalais pour optimiser les loyers, minimiser les périodes de vacance et maximiser le rendement de votre investissement.' },
      ],
    },
    approach: {
      eyebrow: 'Un partenaire local de confiance',
      title: 'Votre propriété. *Notre priorité.*',
      description:
        'Proprio Alliance allie des outils modernes à une connaissance fine du marché montréalais. Maison unifamiliale ou immeuble à logements multiples, nous traitons votre propriété comme la nôtre.',
      cta: 'Découvrez notre approche',
      imageAlt: 'Immeuble résidentiel à logements multiples au coucher du soleil',
    },
    tour: {
      eyebrow: 'Chaque partie de votre immeuble',
      title: 'Un seul partenaire, *du toit à l’entrée*',
      description: 'Un immeuble est un ensemble de systèmes qui demandent tous de l’attention. Voici comment nous prenons soin de chacun.',
      modelLabel: 'Modèle 3D d’un immeuble résidentiel montrant tour à tour l’ensemble, le toit, les logements et l’entrée.',
      steps: [
        { label: 'L’actif', title: 'Gestion financière', text: 'Loyers et frais de copropriété perçus à temps, fournisseurs payés et un état de compte mensuel clair, pour savoir en tout temps où en est votre immeuble.' },
        { label: 'Toit et enveloppe', title: 'Entretien préventif', text: 'Inspections planifiées de la toiture, de la maçonnerie et des systèmes mécaniques. Les travaux sont confiés à des entrepreneurs licenciés RBQ et consignés au carnet d’entretien.' },
        { label: 'Les logements', title: 'Locataires et baux', text: 'Sélection rigoureuse, baux bien rédigés et renouvellements traités dans les délais du TAL, pour que chaque logement soit loué à la bonne personne, aux bonnes conditions.' },
        { label: 'L’entrée', title: 'Urgences 24/7', text: 'Les locataires nous joignent jour et nuit. Dégât d’eau, panne de chauffage ou serrure bloquée : nous dépêchons le bon entrepreneur et vous tenons informé.' },
      ],
    },
    occupancy: {
      eyebrow: 'Occupation',
      title: 'Des logements qui *restent occupés*',
      description:
        'Un logement vacant est la dépense la plus coûteuse d’un budget locatif. Nous travaillons à prévenir la vacance plutôt qu’à la subir.',
      items: [
        { title: 'Des renouvellements préparés tôt', text: 'Les avis de renouvellement et de modification de bail sont envoyés dans les délais prévus par la loi, de trois à six mois avant la fin du bail. Les départs sont connus tôt et les logements sont reloués sans période creuse.' },
        { title: 'Des locataires qui restent', text: 'Vérification complète de chaque candidat : crédit, antécédents criminels, dossiers au TAL, emploi et références des anciens propriétaires. Des locataires fiables s’installent pour longtemps.' },
        { title: 'Des loyers alignés sur le marché', text: 'Chaque loyer est comparé aux annonces similaires du quartier, pour trouver le juste équilibre entre le revenu et la rapidité de location.' },
      ],
    },
    faqs: {
      eyebrow: 'FAQ',
      title: 'Foire aux *questions*',
      description: 'Des réponses claires pour les propriétaires, les investisseurs et les conseils d’administration de copropriété.',
      items: [
        { question: 'Quels types de propriétés gérez-vous?', answer: 'Nous gérons un large éventail d’immeubles : condos locatifs, plex (duplex à quintuplex) et immeubles à revenus multi-logements, propriétés commerciales (bureaux et commerces), et nous agissons comme gestionnaire de syndicats de copropriété.' },
        { question: 'Quels secteurs desservez-vous?', answer: 'Nous desservons l’ensemble du Grand Montréal, incluant l’île de Montréal, Laval, la Rive-Nord et la Rive-Sud.' },
        { question: 'Quels sont vos tarifs de gestion?', answer: 'Nos honoraires sont adaptés selon le type d’immeuble et le nombre de portes. Nous travaillons à pourcentage des revenus bruts mensuels pour les immeubles locatifs, ou à honoraires fixes sur mesure pour les mandats de syndicat de copropriété. Contactez-nous pour une estimation gratuite.' },
        { question: 'Comment gérez-vous les urgences d’entretien?', answer: 'Nous offrons une ligne d’urgence accessible 24 heures sur 24, 7 jours sur 7 pour les locataires, appuyée par une équipe de techniciens et d’entrepreneurs certifiés (RBQ).' },
        { question: 'Êtes-vous à jour avec les lois du TAL et de la copropriété au Québec?', answer: 'Absolument. Notre équipe maîtrise la réglementation du Tribunal administratif du logement (TAL), les règles des baux commerciaux ainsi que les récentes modifications législatives québécoises concernant les fonds de prévoyance et les carnets d’entretien des copropriétés.' },
      ],
    },
    cta: {
      title: 'Prêt à optimiser la gestion de vos *immeubles*?',
      description:
        'Investisseur expérimenté ou premier immeuble, déléguez la gestion quotidienne à Proprio Alliance et concentrez-vous sur l’essentiel.',
      button: 'Réserver une consultation gratuite',
    },
  },

  about: {
    seo: {
      title: 'À propos | Gestion Proprio Alliance, Montréal',
      description:
        'Découvrez Proprio Alliance, votre partenaire de confiance à Montréal. Gestion résidentielle, commerciale, syndicats de copropriété et expertise de courtage immobilier intégrée.',
    },
    hero: { eyebrow: 'À propos', title: 'Une firme de gestion immobilière montréalaise, *proche de ses clients*' },
    intro: {
      eyebrow: 'Qui sommes-nous?',
      title: 'L’expertise immobilière au service de *votre sérénité*',
      paragraphs: [
        'Chez Proprio Alliance, nous croyons que la gestion d’un patrimoine immobilier repose sur trois valeurs : la rigueur, la transparence et la tranquillité d’esprit. Fondée par des gestionnaires d’expérience, notre entreprise est née de la volonté d’offrir aux propriétaires et aux investisseurs du Grand Montréal un service à la hauteur de leurs attentes.',
        'Après des années sur le marché immobilier québécois, nous avons constaté que les investisseurs voulaient plus qu’un service de perception de loyers ou d’entretien sur appel : un partenaire proactif. Notre mission est de réunir la gestion d’immeubles, l’optimisation financière et la conformité légale en un seul service.',
      ],
      imageAlt: 'Façade contemporaine d’un immeuble résidentiel montréalais',
    },
    scope: {
      eyebrow: 'Confiance, rigueur et transparence',
      title: 'Notre champ d’action',
      description:
        'Notre équipe prend en charge tout le cycle d’exploitation de votre immeuble : mise en location, sélection des locataires, perception des loyers, entretien préventif et soutien d’urgence 24/7. Du condo locatif unique aux grands parcs multi-logements, nous adaptons nos services à votre propriété.',
    },
    vision: {
      title: 'Notre vision',
      items: [
        { title: 'Bâtir des alliances durables', description: 'Placer l’intégrité et la communication transparente au centre de nos relations pour assurer la réussite à long terme de nos clients.' },
        { title: 'Éclairer vos choix stratégiques', description: 'Fournir des analyses de marché précises et des conseils d’experts pour maximiser la rentabilité et l’évaluation de vos actifs.' },
        { title: 'Gestion et courtage sous un même toit', description: 'Grâce à la présence d’un courtier immobilier au sein de notre équipe, nous offrons l’inscription de vos propriétés sur Centris et des conseils d’experts sous un même toit.' },
      ],
    },
    more: {
      eyebrow: 'Une valeur ajoutée unique sur le marché',
      title: 'Bien plus que de la saine gestion : *une expertise globale*',
      intro:
        'Proprio Alliance se distingue par la présence d’un courtier immobilier au sein de son équipe de direction. Cette double expertise en gestion et en courtage vous donne accès à des services qui vont au-delà de la gestion traditionnelle :',
      items: [
        { title: 'Vos logements et immeubles inscrits sur Centris', text: 'Une mise en marché d’envergure professionnelle et une visibilité maximale auprès de l’ensemble des courtiers du Québec pour vos locations ou vos ventes.' },
        { title: 'Analyse de marché pointue', text: 'Des rapports de comparables précis et une stratégie d’optimisation des loyers basée sur les données réelles du marché montréalais.' },
        { title: 'Accompagnement transactionnel', text: 'Un encadrement juridique et commercial complet pour l’acquisition, la restructuration ou la disposition de vos immeubles à revenus.' },
      ],
      outro:
        'Que vous souhaitiez combler une vacance, agrandir votre portefeuille ou vendre une propriété, vous bénéficiez d’un accompagnement complet, sans multiplier les intermédiaires.',
    },
    cta: {
      title: 'Collaborons à la réussite de *vos projets*',
      description: 'Chez Proprio Alliance, nous sommes bien plus que des gestionnaires immobiliers — nous sommes vos partenaires immobiliers dévoués.',
      button: 'Discuter avec un gestionnaire',
    },
  },

  services: {
    seo: {
      title: 'Services de gestion immobilière à Montréal | Gestion Proprio Alliance',
      description:
        'Gestion locative de plex et d’immeubles à revenus, gestion de syndicats de copropriété et d’immeubles commerciaux à Montréal et Laval.',
    },
    hero: { eyebrow: 'Services', title: 'Services de gestion immobilière : *résidentiel, copropriété et commercial*' },
    intro: {
      title: 'Une gestion immobilière professionnelle, *adaptée à chaque type d’actif*',
      description:
        'Nous offrons des services de gestion immobilière pensés pour simplifier votre quotidien et protéger la valeur de votre patrimoine. Que vous possédiez un condo locatif, des multiplex, un immeuble commercial ou que vous administriez un syndicat de copropriété, notre équipe vous accompagne avec rigueur et une fine connaissance du marché québécois.',
      imageAlt: 'Vue aérienne d’un complexe résidentiel avec stationnements et bassin',
    },
    items: [
      { title: 'Gestion locative clé en main', description: 'Prise en charge intégrale de vos immeubles résidentiels et multi-logements : commercialisation, administration des baux et gestion quotidienne pour maximiser vos rendements sans tracas.' },
      { title: 'Gestion d’immeubles commerciaux', description: 'Administration rigoureuse d’espaces de bureaux et commerciaux : perception, gestion des charges communes, indexation des baux commerciaux et relations avec les locataires d’affaires.' },
      { title: 'Gestion de syndicats de copropriété', description: 'Soutien administratif, financier et technique complet pour les conseils d’administration de condo : budgets, fonds de prévoyance, carnets d’entretien et assemblées.' },
      { title: 'Perception et comptabilité financière', description: 'Système sécurisé et transparent de perception des loyers ou des frais de condo, conciliation bancaire, gestion des fournisseurs et rapports financiers mensuels.' },
      { title: 'Coordination technique et urgences 24/7', description: 'Ligne d’urgence accessible en tout temps pour les locataires. Planification de l’entretien préventif et supervision des travaux par des entrepreneurs certifiés RBQ.' },
      { title: 'Vérification complète des locataires', description: 'Chaque candidat fait l’objet d’une vérification complète : enquête de crédit, antécédents criminels, dossiers au TAL et références d’employeur et des anciens propriétaires.' },
      { title: 'Conformité légale et baux du TAL', description: 'Rédaction et renouvellement des baux officiels, avis d’augmentation de loyer, et respect strict de la réglementation du Tribunal administratif du logement.' },
      { title: 'Inspections périodiques des bâtiments', description: 'Visites régulières de contrôle de l’état général des logements et des aires communes pour prévenir les dégradations et maintenir vos standards.' },
      { title: 'Gestion des risques et sinistres', description: 'Analyses préventives des risques, mise en place de protocoles de sécurité clairs et coordination avec les assureurs en cas de sinistre.' },
      { title: 'Optimisation des revenus et loyers', description: 'Analyses comparatives régulières du marché locatif montréalais pour positionner vos unités au juste prix et maximiser votre flux de trésorerie.' },
      { title: 'Optimisation du roulement (turnover)', description: 'Négociation stratégique des fins de baux, gestion des transitions d’occupants, rachats de baux et remises en état rapides des unités pour éviter la vacance.' },
      { title: 'Conseil en investissement immobilier', description: 'Des conseils d’experts pour les investisseurs qui souhaitent agrandir ou optimiser leur portefeuille immobilier.' },
    ],
    cta: {
      title: 'Confiez la gestion de vos actifs à *des spécialistes*',
      description:
        'Parlez-nous de votre immeuble et recevez une soumission gratuite, adaptée à vos besoins.',
      button: 'Demander une soumission gratuite',
    },
  },

  contact: {
    seo: {
      title: 'Contact | Gestion Proprio Alliance, Montréal',
      description:
        'Prêt à optimiser vos immeubles ou votre syndicat de condo? Communiquez avec l’équipe d’experts de Proprio Alliance pour obtenir une estimation gratuite dans le Grand Montréal.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Discutons de *vos projets immobiliers*',
      description:
        'Que vous soyez propriétaire d’un plex, gestionnaire d’actifs commerciaux ou membre d’un conseil d’administration de copropriété, nos spécialistes sont à votre écoute pour simplifier votre quotidien.',
    },
    info: {
      title: 'Nos coordonnées',
      businessName: 'Gestion Proprio Alliance Inc.',
      regionLabel: 'Territoire desservi',
      region: 'Grand Montréal, Laval, Rive-Nord et Rive-Sud',
      phoneLabel: 'Téléphone',
      emailLabel: 'Courriel',
      hoursLabel: 'Heures d’ouverture',
      hours: 'Lundi au vendredi : 9 h à 17 h (soutien d’urgence technique : 24/7)',
      mapLabel: 'Carte du territoire desservi',
    },
    form: {
      title: 'Demande de consultation gratuite',
      description: 'Remplissez ce formulaire et un gestionnaire de portefeuille communiquera avec vous en moins de 24 heures ouvrables.',
      name: 'Nom complet',
      email: 'Adresse courriel',
      phone: 'Numéro de téléphone',
      needLabel: 'Type de besoin immobilier',
      needPlaceholder: 'Choisir…',
      needs: [
        { value: 'residential', label: 'Gestion résidentielle (plex / multi-logements)' },
        { value: 'commercial', label: 'Gestion commerciale (bureaux / commerces)' },
        { value: 'condo', label: 'Gestion de copropriété (syndicat de condo)' },
        { value: 'brokerage', label: 'Achat / vente / courtage immobilier' },
        { value: 'other', label: 'Autre demande' },
      ],
      units: 'Nombre de portes / unités (si applicable)',
      message: 'Parlez-nous brièvement de votre immeuble et de vos objectifs',
      terms: 'J’accepte les conditions générales',
      termsLink: 'Politique de confidentialité',
      submit: 'Envoyer ma demande',
      optional: 'facultatif',
    },
  },

  thanks: {
    seo: { title: 'Merci | Gestion Proprio Alliance', description: 'Votre demande a bien été envoyée.' },
    title: 'Merci! *Votre demande est envoyée.*',
    message: 'Un gestionnaire de portefeuille communiquera avec vous en moins de 24 heures ouvrables.',
    back: 'Retour à l’accueil',
  },

  legalIndex: {
    title: 'Informations *juridiques*',
    description: 'Politiques et conditions importantes régissant l’utilisation de nos services.',
  },
};

export type Content = typeof fr;
export default fr;
