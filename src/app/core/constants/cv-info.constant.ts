import { CVInfo } from '../models/cv-structure.model';

export const CV_INFO: CVInfo = {
  en: {
    header: {
      backgroundImage: '',
      photo: '',
      lastName: 'Pugliatti',
      firstName: 'Barbara',
      jobTitle: 'Front-end Developer',
      aboutMe: `<p>As a <span class="highlight">Front-End Developer</span> with 5+ years of experience, I love bringing ideas to life through <span class="highlight">intuitive interfaces</span> that make everyday interactions smoother and more enjoyable.</p> <p>Specialized in the <span class="highlight">Angular</span> ecosystem, I'm a curious mind who loves <span class="highlight">exploring new technologies</span>, refining <span class="highlight">best practices</span>, and finding smarter ways to build high-impact digital experiences.</p>`,
    },
    jobExperiences: [
      {
        experienceName: 'FRONT-END DEVELOPER',
        experienceDateStart: 'Jun 2021',
        experienceDateEnd: 'Present',
        companyName: 'Tiime',
        location: 'Paris, France',
        extraDescription: `
      <p><span class="highlight">Collaboration</span> was at the heart of my work: working closely with product and UX teams to develop <span class="highlight">scalable, reusable UI components</span> that improved <span class="highlight">performance and maintainability</span>. Beyond my core role, I actively took on minor back-end tasks.</p> 
  <p>Features I'm proud to have contributed to:</p>
  <ul>
      <li>Revamping core credit card functionalities, streamlining the creation and management of virtual and company cards to <span class="highlight">enhance user experience</span> and operational efficiency.</li>
      <li>Implementing Strong Customer Authentication (SCA) and user privilege management, ensuring <span class="highlight">top-tier security</span> while <span class="highlight">maintaining compliance</span> with financial and privacy regulations.</li>
      <li>Partnering with the QA team to establish an <span class="highlight">automated end-to-end test environment</span>, reducing production bug reports on the front-end side.</li>
  </ul>

    `,
      },
      {
        experienceName: 'INFORMATIC ENJINEER',
        experienceDateStart: 'Sept 2019',
        experienceDateEnd: 'Jun 2021',
        companyName: 'RS2I',
        location: 'Levallois-Perret, France',
        extraDescription: `
       <p>I built client-specific interfaces for business process management, turning <span class="highlight">massive datasets</span> and workflow tracking into intuitive visualizations. <span class="highlight">Performance and scalability</span> were top priorities.</p>
      <p>I loved to:</p>
        <ul>
          <li><span class="highlight">Optimized data structures</span> and tailored business flows to ensure the interface scaled effortlessly as data grew.</li>
          <li><span class="highlight">Work remotely with globally distributed teams</span> in both English and French.</li>
          <li>Act as a bridge between technical and non-technical stakeholders, <span class="highlight">simplifying complex concepts</span>, keeping everyone aligned, and empowering <span class="highlight">informed decision-making</span>.</li>
      </ul>
    `,
      },
    ],
    formationExperiences: [
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
        experienceDateEnd: 'JUN 2015',
        companyName: 'Accademia Anja',
        location: 'Rome, Italy',
        extraDescription:
          'Certications obtained: PHP Developer Fundamentals on MySQL®',
      },
      {
        experienceName: 'DEGREE IN CULTURAL HERITAGE SCIENCES',
        experienceDateStart: 'Jan 2014',
        experienceDateEnd: 'Sept 2010',
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
        contactValue: '+330636411538',
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
        skillCategory: 'Tech I’m Currently Exploring',
        icon: 'star_half',
        skillList: [
          {
            skillName: 'Node.js',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'Docker',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'CI/CD Pipelines',
            isLinkedToCertification: false,
            linkToCertification: '',
          },
          {
            skillName: 'AWS Cloud',
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
        language: 'French',
        proficiency: 'B2/C1',
        proficiencyLevel: '80',
        isLinkedToCertification: true,
        linkToCertification: '',
      },
      {
        language: 'English',
        proficiency: 'B2',
        proficiencyLevel: '70',
        isLinkedToCertification: false,
        linkToCertification: '',
      },
    ],
  },
  fr: {
    header: {
      backgroundImage: '',
      photo: '',
      lastName: 'Pugliatti',
      firstName: 'Barbara',
      jobTitle: 'Développeuse Front-end',
      aboutMe: `<p>En tant que <span class="highlight">Développeuse Front-End</span> avec plus de 5 ans d'expérience, j'aime donner vie aux idées grâce à des <span class="highlight">interfaces intuitives</span> qui rendent les interactions quotidiennes plus fluides et agréables.</p> 
    <p>Spécialisée dans l'écosystème <span class="highlight">Angular</span>, je suis une curieuse qui adore <span class="highlight">explorer de nouvelles technologies</span>, affiner les <span class="highlight">meilleures pratiques</span> et trouver des moyens plus intelligents de créer des expériences numériques à fort impact.</p>`,
    },
    jobExperiences: [
      {
        experienceName: 'DÉVELOPPEUSE FRONT-END',
        experienceDateStart: 'Juin 2021',
        experienceDateEnd: 'Présent',
        companyName: 'Tiime',
        location: 'Paris, France',
        extraDescription: `
      <p><span class="highlight">La collaboration</span> était au cœur de mon travail : travailler en étroite collaboration avec les équipes produit et UX pour développer des <span class="highlight">composants UI réutilisables et évolutifs</span> afin d'améliorer la <span class="highlight">performance et la maintenabilité</span>. En plus de mon rôle principal, j'ai également effectué quelques tâches back-end.</p> 
  <p>Fonctionnalités auxquelles j'ai contribué :</p>
  <ul>
      <li>Refonte des fonctionnalités principales des cartes bancaires, simplifiant la création et la gestion des cartes virtuelles et d’entreprise afin d'<span class="highlight">améliorer l’expérience utilisateur</span> et l’efficacité opérationnelle.</li>
      <li>Implémentation de l'Authentification Forte du Client (SCA) et gestion des privilèges utilisateurs, garantissant une <span class="highlight">sécurité optimale</span> tout en <span class="highlight">assurant la conformité</span> aux réglementations financières et de confidentialité.</li>
      <li>Collaboration avec l'équipe QA pour mettre en place un <span class="highlight">environnement de tests end-to-end automatisé</span>, réduisant les rapports de bugs en production côté front-end.</li>
  </ul>
    `,
      },
      {
        experienceName: 'INGÉNIEURE EN INFORMATIQUE',
        experienceDateStart: 'Sept 2019',
        experienceDateEnd: 'Juin 2021',
        companyName: 'RS2I',
        location: 'Levallois-Perret, France',
        extraDescription: `
       <p>J'ai conçu des interfaces spécifiques aux besoins des clients pour la gestion des processus métier, transformant des <span class="highlight">données massives</span> et des suivis de flux de travail en visualisations intuitives. La <span class="highlight">performance et la scalabilité</span> étaient mes priorités.</p>
      <p>J'aimais :</p>
        <ul>
          <li><span class="highlight">Optimiser les structures de données</span> et adapter les flux métier pour garantir une interface fluide, même avec des volumes de données croissants.</li>
          <li><span class="highlight">Travailler à distance avec des équipes distribuées</span> à travers le monde, en anglais et en français.</li>
          <li>Faire le lien entre les parties techniques et non techniques, <span class="highlight">simplifiant des concepts complexes</span>, alignant toutes les parties prenantes et facilitant une <span class="highlight">prise de décision éclairée</span>.</li>
      </ul>
    `,
      },
    ],
    formationExperiences: [
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
        experienceName:
          'MASTER EN ARTS, DIVERTISSEMENT, MODE & ARTS NUMÉRIQUES',
        experienceDateStart: 'Sept 2014',
        experienceDateEnd: 'Mars 2017',
        companyName: 'Université La Sapienza de Rome',
        location: 'Rome, Italie',
        extraDescription: 'Note finale : 110 Summa cum Laude/110',
      },
      {
        experienceName: 'WEB MASTER',
        experienceDateStart: 'Sept 2014',
        experienceDateEnd: 'Juin 2015',
        companyName: 'Accademia Anja',
        location: 'Rome, Italie',
        extraDescription:
          'Certification obtenue : PHP Developer Fundamentals sur MySQL®',
      },
      {
        experienceName: 'LICENCE EN SCIENCES DU PATRIMOINE CULTUREL',
        experienceDateStart: 'Jan 2014',
        experienceDateEnd: 'Sept 2010',
        companyName: 'Université de Milan',
        location: 'Rome, Italie',
        extraDescription: 'Note finale : 105/110',
      },
    ],
    contacts: [
      {
        contactType: 'mail',
        contactValue: 'pugliatti.barbara@gmail.com',
        contactIcon: 'mail',
        contactTooltip:
          'Cliquez sur l’e-mail pour ouvrir votre client de messagerie par défaut.',
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
        contactValue: '+330636411538',
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
          { skillName: 'HTML5' },
          { skillName: 'CSS3' },
          { skillName: 'SASS/SCSS' },
          { skillName: 'JavaScript' },
          { skillName: 'TypeScript' },
        ],
      },
      {
        skillCategory: 'Frameworks & Librairies',
        icon: 'developer_mode',
        skillList: [
          { skillName: 'Angular 2+' },
          { skillName: 'Redux' },
          { skillName: 'RxJs' },
          { skillName: 'Angular Material' },
          { skillName: 'Cypress' },
          { skillName: 'Bootstrap' },
          { skillName: 'Tailwind CSS' },
        ],
      },
      {
        skillCategory: 'APIs & Backend',
        icon: 'dns',
        skillList: [
          { skillName: 'APIs RESTful' },
          { skillName: 'PHP' },
          { skillName: 'Symfony' },
        ],
      },
      {
        skillCategory: 'Contrôle de Version & Gestion de Packages',
        icon: 'device_hub',
        skillList: [
          { skillName: 'Git' },
          { skillName: 'GitHub' },
          { skillName: 'NPM/Yarn' },
        ],
      },
    ],
    languages: [
      { language: 'Italien', proficiency: 'Natif', proficiencyLevel: '100' },
      { language: 'Français', proficiency: 'B2/C1', proficiencyLevel: '80' },
      { language: 'Anglais', proficiency: 'B2', proficiencyLevel: '70' },
    ],
  },

  it: {
    header: {
      backgroundImage: '',
      photo: '',
      lastName: 'Pugliatti',
      firstName: 'Barbara',
      jobTitle: 'Sviluppatrice Front-end',
      aboutMe: `<p>Come <span class="highlight">Sviluppatrice Front-End</span> con oltre 5 anni di esperienza, amo dare vita alle idee attraverso <span class="highlight">interfacce intuitive</span> che rendono le interazioni quotidiane più fluide e piacevoli.</p> 
      <p>Specializzata nell'ecosistema <span class="highlight">Angular</span>, sono una persona curiosa che ama <span class="highlight">esplorare nuove tecnologie</span>, perfezionare le <span class="highlight">best practice</span> e trovare modi più intelligenti per creare esperienze digitali di grande impatto.</p>`,
    },
    jobExperiences: [
      {
        experienceName: 'SVILUPPATRICE FRONT-END',
        experienceDateStart: 'Giugno 2021',
        experienceDateEnd: 'Presente',
        companyName: 'Tiime',
        location: 'Parigi, Francia',
        extraDescription: `
        <p><span class="highlight">La collaborazione</span> è stata al centro del mio lavoro: ho lavorato a stretto contatto con i team di prodotto e UX per sviluppare <span class="highlight">componenti UI scalabili e riutilizzabili</span> che hanno migliorato la <span class="highlight">performance e la manutenibilità</span>. Oltre al mio ruolo principale, ho svolto anche alcune attività di back-end.</p> 
    <p>Funzionalità a cui ho contribuito:</p>
    <ul>
        <li>Rinnovamento delle funzionalità principali delle carte di credito, semplificando la creazione e la gestione delle carte virtuali e aziendali per <span class="highlight">migliorare l'esperienza utente</span> e l'efficienza operativa.</li>
        <li>Implementazione della Strong Customer Authentication (SCA) e gestione dei privilegi utente, garantendo una <span class="highlight">sicurezza di alto livello</span> e <span class="highlight">conformità</span> alle normative finanziarie e sulla privacy.</li>
        <li>Collaborazione con il team QA per creare un <span class="highlight">ambiente di test end-to-end automatizzato</span>, riducendo il numero di bug segnalati in produzione lato front-end.</li>
    </ul>
      `,
      },
      {
        experienceName: 'INGEGNERE INFORMATICO',
        experienceDateStart: 'Settembre 2019',
        experienceDateEnd: 'Giugno 2021',
        companyName: 'RS2I',
        location: 'Levallois-Perret, Francia',
        extraDescription: `
         <p>Ho realizzato interfacce su misura per la gestione dei processi aziendali, trasformando <span class="highlight">grandi set di dati</span> e tracciamento dei flussi di lavoro in visualizzazioni intuitive. <span class="highlight">Performance e scalabilità</span> erano le mie priorità.</p>
        <p>Amo:</p>
          <ul>
            <li><span class="highlight">Ottimizzare le strutture dati</span> e adattare i flussi aziendali per garantire un'interfaccia scalabile senza problemi con la crescita dei dati.</li>
            <li><span class="highlight">Lavorare da remoto con team distribuiti</span> a livello globale, in inglese e francese.</li>
            <li>Fare da ponte tra stakeholder tecnici e non tecnici, <span class="highlight">semplificando concetti complessi</span>, allineando tutti e permettendo una <span class="highlight">presa di decisioni consapevole</span>.</li>
        </ul>
      `,
      },
    ],
    formationExperiences: [
      {
        experienceName: 'SVILUPPO WEB CON SYMFONY 6',
        experienceDateStart: '',
        experienceDateEnd: 'Febbraio 2019',
        companyName: 'SensioLab',
        location: 'Parigi, Francia',
        extraDescription: '',
      },
      {
        experienceName: 'SVILUPPATORE JAVA J2EE',
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
          'Clicca sull’email per aprire il client di posta predefinito.',
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
        contactValue: '+330636411538',
        contactIcon: 'phone_iphone',
        contactTooltip: 'Clicca sul numero per chiamare con l’app predefinita.',
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
          { skillName: 'HTML5' },
          { skillName: 'CSS3' },
          { skillName: 'SASS/SCSS' },
          { skillName: 'JavaScript' },
          { skillName: 'TypeScript' },
        ],
      },
      {
        skillCategory: 'Framework & Librerie',
        icon: 'developer_mode',
        skillList: [
          { skillName: 'Angular 2+' },
          { skillName: 'Redux' },
          { skillName: 'RxJs' },
          { skillName: 'Angular Material' },
          { skillName: 'Cypress' },
          { skillName: 'Bootstrap' },
          { skillName: 'Tailwind CSS' },
        ],
      },
      {
        skillCategory: 'API & Backend',
        icon: 'dns',
        skillList: [
          { skillName: 'API RESTful' },
          { skillName: 'PHP' },
          { skillName: 'Symfony' },
        ],
      },
      {
        skillCategory: 'Controllo Versioni & Gestione Pacchetti',
        icon: 'device_hub',
        skillList: [
          { skillName: 'Git' },
          { skillName: 'GitHub' },
          { skillName: 'NPM/Yarn' },
        ],
      },
    ],
    languages: [
      {
        language: 'Italiano',
        proficiency: 'Madrelingua',
        proficiencyLevel: '100',
      },
      { language: 'Francese', proficiency: 'B2/C1', proficiencyLevel: '80' },
      { language: 'Inglese', proficiency: 'B2', proficiencyLevel: '70' },
    ],
  },
};
