import { CVInfo } from '../models/cv-structure.model';

export const CV_INFO: CVInfo = {
  en: {
    labels: {
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      skills: 'Skills',
      languages: 'Languages',
    },
    header: {
      backgroundImage: '',
      photo: '',
      lastName: 'Pugliatti',
      firstName: 'Barbara',
      jobTitle: 'Front-end Developer',
      aboutMe: `<p>I'm a <strong>Front-End Developer</strong> with 6+ years in the <strong>Angular</strong> ecosystem. I came to tech through the <strong>humanities</strong>: trilingual, trained to think about language, context and how people make sense of things. I believe that's an edge: good interfaces don't just function, they <strong>make things easier</strong>.</p><p>I'm currently working toward my <strong>IAAP WAS accessibility certification</strong> and exploring <strong>AI tools</strong> through hands-on training work. I care deeply about how these tools get used in practice: <strong>product quality, developer accountability and accessibility</strong> matter to me as much as the technology itself.</p>`,
    },
    jobExperiences: [
      {
        experienceName: 'AI TRAINER & DATA ANNOTATOR',
        experienceDateStart: 'Apr 2026',
        experienceDateEnd: 'Present',
        companyName: 'Mercor.io',
        location: 'Remote · Freelance',
        extraDescription: `
<p>I train AI models for <strong>software usage assistance</strong>, applying a <strong>reverse engineering approach</strong> to analyse outputs and identify reasoning gaps. I design <strong>evaluation rubrics</strong> to annotate and correct model responses, improving accuracy and reasoning performance.</p>
        `,
      },
      {
        experienceName: 'SOFTWARE ENGINEER',
        experienceDateStart: 'Sept 2025',
        experienceDateEnd: 'Mar 2026',
        companyName: 'Dougs Compta',
        location: 'Lyon, Auvergne-Rhône-Alpes, France · Remote',
        extraDescription: `
<ul>
  <li>Championed <strong>web accessibility</strong> at company level, raising awareness of legal obligations and driving the organisation to <strong>appoint dedicated owners</strong> and kick off a structured remediation effort.</li>
  <li>Built <strong>online cash register and e-commerce features</strong>, including the tools needed for their tax declaration workflows.</li>
  <li>Redesigned the <strong>charts on the performance page</strong>, overhauling their color scheme to improve <strong>contrast and readability</strong>.</li>
</ul>
        `,
      },
      {
        experienceName: 'FRONT-END DEVELOPER',
        experienceDateStart: 'Jun 2021',
        experienceDateEnd: 'Jun 2025',
        companyName: 'Tiime',
        location: 'Paris, France',
        extraDescription: `
      <p><strong>Collaboration</strong> was at the heart of my work: working closely with product and UX teams, I developed <strong>scalable, reusable UI components</strong> that improved performance and maintainability.</p>
  <ul>
      <li>Revamped core credit card functionalities, streamlining how users create and manage virtual and company cards.</li>
      <li>Implemented Strong Customer Authentication (SCA) and user privilege management, ensuring <strong>security and compliance</strong> with financial and data protection regulations.</li>
      <li>Partnered with the QA team to establish an <strong>automated end-to-end test environment</strong>, reducing production bug reports on the front-end side.</li>
  </ul>
  <p>The result: an app trusted by <strong>over 300,000 users</strong> and rated <strong>4.8/5 on Google</strong>.</p>

    `,
      },
      {
        experienceName: 'IT ENGINEER',
        experienceDateStart: 'Sept 2019',
        experienceDateEnd: 'Jun 2021',
        companyName: 'RS2I',
        location: 'Levallois-Perret, France',
        extraDescription: `
       <p>I built client-specific interfaces for business process management, turning <strong>massive datasets</strong> and workflow tracking into intuitive visualizations. <strong>Performance and scalability</strong> were top priorities.</p>
        <ul>
          <li><strong>Optimized data structures</strong> and tailored business flows to ensure the interface scaled effortlessly as data grew.</li>
          <li>Worked remotely with <strong>globally distributed teams</strong> in both English and French.</li>
          <li>Bridged technical and non-technical stakeholders, <strong>simplifying complex concepts</strong> and facilitating <strong>informed decision-making</strong>.</li>
      </ul>
    `,
      },
    ],
    formationExperiences: [
      {
        experienceName: 'WAS CERTIFICATION — WEB ACCESSIBILITY SPECIALIST',
        experienceDateStart: 'May 2026',
        experienceDateEnd: 'Present',
        companyName: 'IAAP',
        location: 'Online',
        extraDescription: '',
      },
      {
        experienceName: 'WEB DEVELOPMENT WITH SYMFONY 6',
        experienceDateStart: '',
        experienceDateEnd: 'Feb 2019',
        companyName: 'SensioLab',
        location: 'Paris, France',
        extraDescription: '',
      },
      {
        experienceName: 'JAVA J2EE DEVELOPER',
        experienceDateStart: 'May 2019',
        experienceDateEnd: 'Sept 2019',
        companyName: 'EduGroup',
        location: 'Paris, France',
        extraDescription: '',
      },
      {
        experienceName: 'MASTER OF ARTS, ENTERTAINMENT, FASHION & DIGITAL ARTS',
        experienceDateStart: 'Sept 2014',
        experienceDateEnd: 'Mar 2017',
        companyName: 'Sapienza University of Rome',
        location: 'Rome, Italy',
        extraDescription: 'Final score: 110 Summa cum Laude/110',
      },
      {
        experienceName: 'WEB MASTER',
        experienceDateStart: 'Sept 2014',
        experienceDateEnd: 'Jun 2015',
        companyName: 'Accademia Anja',
        location: 'Rome, Italy',
        extraDescription:
          'Certifications obtained: PHP Developer Fundamentals on MySQL®',
      },
      {
        experienceName: 'DEGREE IN CULTURAL HERITAGE SCIENCES',
        experienceDateStart: 'Sept 2010',
        experienceDateEnd: 'Jan 2014',
        companyName: 'University of Milan',
        location: 'Milan, Italy',
        extraDescription: 'Final score: 105/110',
      },
    ],
    contacts: [
      {
        contactType: 'mail',
        contactValue: 'pugliatti.barbara@gmail.com',
        contactIcon: 'mail',
        contactTooltip: 'Click on the email to open your default email client.',
        isCopyAllowed: true,
      },
      {
        contactType: 'text',
        contactValue: 'Paris, France',
        contactIcon: 'room',
        contactTooltip: '',
        isCopyAllowed: false,
      },
      {
        contactType: 'phone',
        contactValue: '+33636411538',
        contactIcon: 'phone_iphone',
        contactTooltip:
          'Click the number to call with your default calling app.',
        isCopyAllowed: true,
      },
      {
        contactType: 'link',
        contactValue: 'linkedin.com/in/barbarapugliatti',
        contactIcon: 'person',
        contactTooltip: 'Click to open my LinkedIn profile in a new tab',
        isCopyAllowed: true,
      },
      {
        contactType: 'link',
        contactValue: 'github.com/bpugliatti',
        contactIcon: 'code',
        contactTooltip: 'Click to open my GitHub profile in a new tab',
        isCopyAllowed: true,
      },
    ],
    skills: [
      {
        skillCategory: 'Core Web Technologies',
        icon: 'code',
        skillList: [
          {
            skillName: 'HTML5',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'CSS3',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'SASS/SCSS',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Javascript',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'TypeScript',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'WCAG 2.1',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Frameworks & Libraries',
        icon: 'developer_mode',
        skillList: [
          {
            skillName: 'Angular 2+',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Redux',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'RxJs',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Angular Material',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Cypress',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Jest',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Bootstrap',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Tailwind CSS',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'APIs & Backend',
        icon: 'dns',
        skillList: [
          {
            skillName: 'RESTful APIs',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Php',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Symfony',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Version & Packages Control',
        icon: 'device_hub',
        skillList: [
          {
            skillName: 'Git',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'GitHub',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'NPM/Yarn',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'AI Tools & Integrations',
        icon: 'smart_toy',
        skillList: [
          {
            skillName: 'Claude Code',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'OpenAI Codex',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'GitHub Copilot',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: "Tech I'm Currently Exploring",
        icon: 'star_half',
        skillList: [
          {
            skillName: 'WAS Certification',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Docker',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'CI/CD',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Design & Project Management',
        icon: 'dashboard',
        skillList: [
          {
            skillName: 'Agile/Scrum Principles',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Jira',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Miro',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Figma',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
    ],
    languages: [
      {
        language: 'Italian',
        proficiency: 'Native',
        proficiencyLevel: '100',
        isLinkedToCertification: false,
        linkToCertification: '',
      },
      {
        language: 'English',
        proficiency: 'C1',
        proficiencyLevel: '85',
        isLinkedToCertification: false,
        linkToCertification: '',
      },
      {
        language: 'French',
        proficiency: 'B2/C1',
        proficiencyLevel: '80',
        isLinkedToCertification: true,
        linkToCertification: '',
      },
    ],
  },
  fr: {
    labels: {
      experience: 'Expérience',
      education: 'Formation',
      contact: 'Contact',
      skills: 'Compétences',
      languages: 'Langues',
    },
    header: {
      backgroundImage: '',
      photo: '',
      lastName: 'Pugliatti',
      firstName: 'Barbara',
      jobTitle: 'Développeuse Front-end',
      aboutMe: `<p>Je suis <strong>développeuse Front-End</strong> avec plus de 6 ans d'expérience dans l'écosystème <strong>Angular</strong>. Je suis arrivée à la tech par les <strong>sciences humaines</strong>: trilingue, formée à penser le langage, le contexte et la façon dont les gens donnent du sens aux choses. C'est ce qui fait la différence: une bonne interface ne se contente pas de fonctionner, elle <strong>simplifie la vie</strong>.</p><p>Je prépare actuellement ma <strong>certification IAAP WAS en accessibilité web</strong> et j'explore les <strong>outils IA</strong> à travers un travail de formation pratique. J'aime voir les différentes façons dont ces technologies sont mises en pratique, mais je considère la <strong>qualité du produit, la responsabilité des développeurs sur leur code et l'accessibilité</strong> comme partie intégrante du travail bien fait.</p>`,
    },
    jobExperiences: [
      {
        experienceName: 'FORMATRICE IA & ANNOTATRICE DE DONNÉES',
        experienceDateStart: 'Avr 2026',
        experienceDateEnd: 'Présent',
        companyName: 'Mercor.io',
        location: 'Remote · Freelance',
        extraDescription: `
<p>Je forme des modèles d'IA sur des cas d'usage <strong>logiciel</strong>, en appliquant une approche de <strong>rétro-ingénierie</strong> pour analyser les outputs et identifier les lacunes de raisonnement. Je conçois des <strong>rubrics d'évaluation</strong> pour annoter et corriger les réponses des modèles, améliorant leur précision et leur performance.</p>
        `,
      },
      {
        experienceName: 'INGÉNIEURE LOGICIEL',
        experienceDateStart: 'Sept 2025',
        experienceDateEnd: 'Mars 2026',
        companyName: 'Dougs Compta',
        location: 'Lyon, Auvergne-Rhône-Alpes, France · Remote',
        extraDescription: `
<ul>
  <li>Portée d'entreprise: sensibilisation à <strong>l'accessibilité web</strong> et aux obligations légales associées, conduisant l'organisation à <strong>nommer des responsables dédiés</strong> et à lancer un travail structuré sur le sujet.</li>
  <li>Développé les fonctionnalités de <strong>caisse en ligne et de vente en ligne</strong>, en réalisant les outils nécessaires aux déclarations fiscales associées.</li>
  <li>Refonte des <strong>graphiques de la page de performance</strong>, avec une nouvelle palette de couleurs pour améliorer le <strong>contraste et la lisibilité</strong>.</li>
</ul>
        `,
      },
      {
        experienceName: 'DÉVELOPPEUSE FRONT-END',
        experienceDateStart: 'Juin 2021',
        experienceDateEnd: 'Juin 2025',
        companyName: 'Tiime',
        location: 'Paris, France',
        extraDescription: `
      <p>La <strong>collaboration</strong> était au cœur de mon travail: en étroite relation avec les équipes produit et UX, j'ai développé des <strong>composants UI réutilisables et évolutifs</strong>, améliorant la performance et la maintenabilité.</p>  
<ul>  
    <li>Refonte des fonctionnalités clés des cartes de crédit, simplifiant la création et la gestion des cartes virtuelles et d'entreprise pour <strong>améliorer l'expérience utilisateur</strong> et l'efficacité opérationnelle.</li>  
    <li>Mise en place de l'Authentification Forte du Client (SCA) et de la gestion des privilèges utilisateurs, garantissant une <strong>sécurité optimale</strong> tout en <strong>assurant la conformité</strong> aux réglementations financières et de protection des données.</li>  
    <li>Collaboration avec l'équipe QA pour établir un <strong>environnement de test automatisé de bout en bout</strong>, réduisant ainsi le nombre de bugs signalés en production côté front-end.</li>
</ul>
<p>Le résultat: une application utilisée par <strong>plus de 300 000 utilisateurs</strong>, notée <strong>4,8/5 sur Google</strong>.</p>
    `,
      },
      {
        experienceName: 'INGÉNIEURE INFORMATIQUE',
        experienceDateStart: 'Sept 2019',
        experienceDateEnd: 'Juin 2021',
        companyName: 'RS2I',
        location: 'Levallois-Perret, France',
        extraDescription: `
      <p>J'ai conçu des interfaces adaptées aux besoins des clients pour la gestion des processus métier, transformant des <strong>volumes massifs de données</strong> et des flux de travail complexes en visualisations claires et intuitives. La <strong>performance et la scalabilité</strong> étaient toujours au cœur de mes priorités.</p>
<ul>
  <li><strong>Optimisation des structures de données</strong> et adaptation des flux métier pour garantir une interface fluide même face à une forte croissance des données.</li>
  <li><strong>Collaboration à distance avec des équipes distribuées</strong> à travers le monde, en anglais et en français.</li>
  <li>Interface entre les équipes techniques et non techniques, en <strong>rendant des concepts complexes accessibles</strong> et en facilitant une <strong>prise de décision éclairée</strong>.</li>
</ul>

    `,
      },
    ],
    formationExperiences: [
      {
        experienceName: 'CERTIFICATION WAS — WEB ACCESSIBILITY SPECIALIST',
        experienceDateStart: 'Mai 2026',
        experienceDateEnd: 'En cours',
        companyName: 'IAAP',
        location: 'En ligne',
        extraDescription: '',
      },
      {
        experienceName: 'DÉVELOPPEMENT WEB AVEC SYMFONY 6',
        experienceDateStart: '',
        experienceDateEnd: 'Fév 2019',
        companyName: 'SensioLab',
        location: 'Paris, France',
        extraDescription: '',
      },
      {
        experienceName: 'DÉVELOPPEUSE JAVA J2EE',
        experienceDateStart: 'Mai 2019',
        experienceDateEnd: 'Sept 2019',
        companyName: 'EduGroup',
        location: 'Paris, France',
        extraDescription: '',
      },
      {
        experienceName: 'MASTER EN ARTS, MODE & ARTS NUMÉRIQUES',
        experienceDateStart: 'Sept 2014',
        experienceDateEnd: 'Mars 2017',
        companyName: 'Université La Sapienza de Rome',
        location: 'Rome, Italie',
        extraDescription: 'Note finale: 110 Summa cum Laude/110',
      },
      {
        experienceName: 'WEB MASTER',
        experienceDateStart: 'Sept 2014',
        experienceDateEnd: 'Juin 2015',
        companyName: 'Accademia Anja',
        location: 'Rome, Italie',
        extraDescription:
          'Certification obtenue: PHP Developer Fundamentals sur MySQL®',
      },
      {
        experienceName: 'LICENCE EN SCIENCES DU PATRIMOINE CULTUREL',
        experienceDateStart: 'Sept 2010',
        experienceDateEnd: 'Jan 2014',
        companyName: 'Université de Milan',
        location: 'Rome, Italie',
        extraDescription: 'Note finale: 105/110',
      },
    ],
    contacts: [
      {
        contactType: 'mail',
        contactValue: 'pugliatti.barbara@gmail.com',
        contactIcon: 'mail',
        contactTooltip:
          "Cliquez sur l'e-mail pour ouvrir votre client de messagerie par défaut.",
        isCopyAllowed: true,
      },
      {
        contactType: 'text',
        contactValue: 'Paris, France',
        contactIcon: 'room',
        contactTooltip: '',
        isCopyAllowed: false,
      },
      {
        contactType: 'phone',
        contactValue: '+33636411538',
        contactIcon: 'phone_iphone',
        contactTooltip:
          'Cliquez sur le numéro pour appeler avec votre application de téléphonie par défaut.',
        isCopyAllowed: true,
      },
      {
        contactType: 'link',
        contactValue: 'linkedin.com/in/barbarapugliatti',
        contactIcon: 'person',
        contactTooltip:
          'Cliquez pour ouvrir mon profil LinkedIn dans un nouvel onglet',
        isCopyAllowed: true,
      },
      {
        contactType: 'link',
        contactValue: 'github.com/bpugliatti',
        contactIcon: 'code',
        contactTooltip:
          'Cliquez pour ouvrir mon profil GitHub dans un nouvel onglet',
        isCopyAllowed: true,
      },
    ],
    skills: [
      {
        skillCategory: 'Technologies Web de Base',
        icon: 'code',
        skillList: [
          {
            skillName: 'HTML5',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'CSS3',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'SASS/SCSS',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Javascript',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'TypeScript',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'WCAG 2.1',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Frameworks & Bibliothèques',
        icon: 'developer_mode',
        skillList: [
          {
            skillName: 'Angular 2+',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Redux',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'RxJs',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Angular Material',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Cypress',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Jest',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Bootstrap',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Tailwind CSS',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'APIs & Back-End',
        icon: 'dns',
        skillList: [
          {
            skillName: 'APIs RESTful',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Php',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Symfony',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Versioning & Dépendances',
        icon: 'device_hub',
        skillList: [
          {
            skillName: 'Git',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'GitHub',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'NPM/Yarn',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Outils IA',
        icon: 'smart_toy',
        skillList: [
          {
            skillName: 'Claude Code',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'OpenAI Codex',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'GitHub Copilot',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: "En ce moment j'explore",
        icon: 'star_half',
        skillList: [
          {
            skillName: 'Certification WAS',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Docker',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'CI/CD',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Design & Gestion de Projet',
        icon: 'dashboard',
        skillList: [
          {
            skillName: 'Principes Agile/Scrum',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Jira',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Miro',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Figma',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
    ],

    languages: [
      { language: 'Italien', proficiency: 'Natif', proficiencyLevel: '100' },
      { language: 'Anglais', proficiency: 'C1', proficiencyLevel: '85' },
      { language: 'Français', proficiency: 'B2/C1', proficiencyLevel: '80' },
    ],
  },

  it: {
    labels: {
      experience: 'Esperienza',
      education: 'Formazione',
      contact: 'Contatti',
      skills: 'Competenze',
      languages: 'Lingue',
    },
    header: {
      backgroundImage: '',
      photo: '',
      lastName: 'Pugliatti',
      firstName: 'Barbara',
      jobTitle: 'Sviluppatrice Front-end',
      aboutMe: `<p>Sono una <strong>sviluppatrice Front-End</strong> con oltre 6 anni di esperienza nell'ecosistema <strong>Angular</strong>. Sono arrivata alla tecnologia attraverso le <strong>scienze umane</strong>: trilingue, con una formazione che mi ha insegnato a ragionare su linguaggio, contesto e come le persone costruiscono il senso delle cose. Penso che sia un vantaggio: una buona interfaccia non funziona soltanto, <strong>semplifica le cose</strong>.</p><p>Sto preparando la <strong>certificazione IAAP WAS per l'accessibilità web</strong> e sto esplorando gli <strong>strumenti di IA</strong> attraverso un lavoro di formazione pratica. Mi interessa vedere come vengono usati concretamente nei progetti: la <strong>responsabilità degli sviluppatori sul codice e l'accessibilità come parte integrante del prodotto</strong> sono valori a cui tengo molto.</p>
`,
    },
    jobExperiences: [
      {
        experienceName: 'AI TRAINER & DATA ANNOTATOR',
        experienceDateStart: 'Apr 2026',
        experienceDateEnd: 'Presente',
        companyName: 'Mercor.io',
        location: 'Remote · Freelance',
        extraDescription: `
<p>Mi occupo di formare modelli per l'<strong>assistenza all'uso di software</strong>, applicando un approccio di <strong>reverse engineering</strong> per analizzare gli output e individuare le lacune di ragionamento. Costruisco <strong>rubrics di valutazione</strong> per annotare e correggere le risposte dei modelli, migliorandone precisione e performance.</p>
        `,
      },
      {
        experienceName: 'INGEGNERE SOFTWARE',
        experienceDateStart: 'Settembre 2025',
        experienceDateEnd: 'Marzo 2026',
        companyName: 'Dougs Compta',
        location: 'Lione, Auvergne-Rhône-Alpes, Francia · Remote',
        extraDescription: `
<ul>
  <li>Ho promosso a livello aziendale la cultura dell'<strong>accessibilità web</strong>, sensibilizzando sull'esistenza di obblighi legali e spingendo l'organizzazione a <strong>nominare responsabili dedicati</strong> e avviare un lavoro strutturato sul tema.</li>
  <li>Ho contribuito allo sviluppo delle funzionalità di <strong>cassa online e vendita online</strong>, realizzando gli strumenti necessari per le relative dichiarazioni fiscali.</li>
  <li>Ho ridisegnato i <strong>grafici della pagina delle performance</strong>, rinnovando la palette di colori per migliorare il <strong>contrasto e la leggibilità</strong>.</li>
</ul>
        `,
      },
      {
        experienceName: 'SVILUPPATRICE FRONT-END',
        experienceDateStart: 'Giugno 2021',
        experienceDateEnd: 'Giugno 2025',
        companyName: 'Tiime',
        location: 'Parigi, Francia',
        extraDescription: `
     <p><strong>La collaborazione</strong> è sempre stata al centro del mio lavoro. A stretto contatto con i team di prodotto e UX, ho sviluppato <strong>componenti UI scalabili e riutilizzabili</strong>, migliorando performance e manutenibilità.</p>
<ul>
    <li>Rinnovamento delle funzionalità di gestione delle carte di credito, semplificando la creazione e la gestione delle carte virtuali e aziendali per <strong>ottimizzare l'esperienza utente</strong> e migliorare l'efficienza operativa.</li>
    <li>Implementazione della Strong Customer Authentication (SCA) e gestione dei privilegi utente, garantendo una <strong>sicurezza avanzata</strong> e la <strong>conformità</strong> alle normative finanziarie e sulla protezione dei dati.</li>
    <li>Collaborazione con il team QA per creare un <strong>ambiente di test end-to-end automatizzato</strong>, riducendo il numero di bug segnalati in produzione lato front-end.</li>
</ul>
<p>Il risultato: un'app con <strong>oltre 300.000 utenti</strong>, valutata <strong>4,8/5 su Google</strong>.</p>
      `,
      },
      {
        experienceName: 'INGEGNERE INFORMATICO',
        experienceDateStart: 'Settembre 2019',
        experienceDateEnd: 'Giugno 2021',
        companyName: 'RS2I',
        location: 'Levallois-Perret, Francia',
        extraDescription: `
        <p>Ho progettato interfacce su misura per la gestione dei processi aziendali, trasformando <strong>grandi volumi di dati</strong> e il tracciamento dei flussi di lavoro in visualizzazioni intuitive. <strong>Performance e scalabilità</strong> sono sempre state le mie priorità.</p>
<ul>
  <li>Ho <strong>ottimizzato le strutture dati</strong> e adattato i flussi aziendali per garantire un'interfaccia fluida anche con la crescita dei dati.</li>
  <li>Ho lavorato da remoto con <strong>team distribuiti a livello globale</strong>, in inglese e francese.</li>
  <li>Ho fatto da ponte tra stakeholder tecnici e non tecnici, <strong>semplificando concetti complessi</strong> e facilitando <strong>decisioni informate</strong>.</li>
</ul>
      `,
      },
    ],
    formationExperiences: [
      {
        experienceName: 'CERTIFICAZIONE WAS — WEB ACCESSIBILITY SPECIALIST',
        experienceDateStart: 'Maggio 2026',
        experienceDateEnd: 'In corso',
        companyName: 'IAAP',
        location: 'Online',
        extraDescription: '',
      },
      {
        experienceName: 'SVILUPPO WEB CON SYMFONY 6',
        experienceDateStart: '',
        experienceDateEnd: 'Febbraio 2019',
        companyName: 'SensioLab',
        location: 'Parigi, Francia',
        extraDescription: '',
      },
      {
        experienceName: 'SVILUPPATRICE JAVA J2EE',
        experienceDateStart: 'Maggio 2019',
        experienceDateEnd: 'Settembre 2019',
        companyName: 'EduGroup',
        location: 'Parigi, Francia',
        extraDescription: '',
      },
      {
        experienceName: 'MASTER IN ARTI, SPETTACOLO, MODA & ARTI DIGITALI',
        experienceDateStart: 'Settembre 2014',
        experienceDateEnd: 'Marzo 2017',
        companyName: 'Università La Sapienza di Roma',
        location: 'Roma, Italia',
        extraDescription: 'Voto finale: 110 Summa cum Laude/110',
      },
      {
        experienceName: 'WEB MASTER',
        experienceDateStart: 'Settembre 2014',
        experienceDateEnd: 'Giugno 2015',
        companyName: 'Accademia Anja',
        location: 'Roma, Italia',
        extraDescription:
          'Certificazione ottenuta: PHP Developer Fundamentals su MySQL®',
      },
      {
        experienceName: 'LAUREA IN SCIENZE DEI BENI CULTURALI',
        experienceDateStart: 'Gennaio 2014',
        experienceDateEnd: 'Settembre 2010',
        companyName: 'Università di Milano',
        location: 'Roma, Italia',
        extraDescription: 'Voto finale: 105/110',
      },
    ],
    contacts: [
      {
        contactType: 'mail',
        contactValue: 'pugliatti.barbara@gmail.com',
        contactIcon: 'mail',
        contactTooltip:
          "Clicca sull'email per aprire il client di posta predefinito.",
        isCopyAllowed: true,
      },
      {
        contactType: 'text',
        contactValue: 'Parigi, Francia',
        contactIcon: 'room',
        contactTooltip: '',
        isCopyAllowed: false,
      },
      {
        contactType: 'phone',
        contactValue: '+33636411538',
        contactIcon: 'phone_iphone',
        contactTooltip: "Clicca sul numero per chiamare con l'app predefinita.",
        isCopyAllowed: true,
      },
      {
        contactType: 'link',
        contactValue: 'linkedin.com/in/barbarapugliatti',
        contactIcon: 'person',
        contactTooltip:
          'Clicca per aprire il mio profilo LinkedIn in una nuova scheda',
        isCopyAllowed: true,
      },
      {
        contactType: 'link',
        contactValue: 'github.com/bpugliatti',
        contactIcon: 'code',
        contactTooltip:
          'Clicca per aprire il mio profilo GitHub in una nuova scheda',
        isCopyAllowed: true,
      },
    ],
    skills: [
      {
        skillCategory: 'Tecnologie Web di Base',
        icon: 'code',
        skillList: [
          {
            skillName: 'HTML5',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'CSS3',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'SASS/SCSS',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Javascript',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'TypeScript',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'WCAG 2.1',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Framework e Librerie',
        icon: 'developer_mode',
        skillList: [
          {
            skillName: 'Angular 2+',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Redux',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'RxJs',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Angular Material',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Cypress',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Jest',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Bootstrap',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Tailwind CSS',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'API & Back-End',
        icon: 'dns',
        skillList: [
          {
            skillName: 'API RESTful',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Php',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Symfony',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Versioning & Pacchetti',
        icon: 'device_hub',
        skillList: [
          {
            skillName: 'Git',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'GitHub',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'NPM/Yarn',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Strumenti IA',
        icon: 'smart_toy',
        skillList: [
          {
            skillName: 'Claude Code',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'OpenAI Codex',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'GitHub Copilot',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Tecnologie che sto esplorando',
        icon: 'star_half',
        skillList: [
          {
            skillName: 'Certificazione WAS',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Docker',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'CI/CD',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
      {
        skillCategory: 'Design & Gestione Progetti',
        icon: 'dashboard',
        skillList: [
          {
            skillName: 'Principi Agile/Scrum',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Jira',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Miro',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Figma',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
        ],
      },
    ],

    languages: [
      {
        language: 'Italiano',
        proficiency: 'Madrelingua',
        proficiencyLevel: '100',
      },
      { language: 'Inglese', proficiency: 'C1', proficiencyLevel: '85' },
      { language: 'Francese', proficiency: 'B2/C1', proficiencyLevel: '80' },
    ],
  },
};
