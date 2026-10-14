import type { PageSet } from "./types";

/**
 * DUKAAT Academy — source section 4 ("# 4." in all three source files), in the source's order.
 * ar: verbatim from owntext/DUKAAT_محتوى كتابة الموقع حديد _AR.md; nl/en: verbatim from owntext/vertalingen/*_uit_AR.md.
 * Not published: the editorial labels ("Titel:", "Knoppen:" …) and the course page template ("قالب صفحة الدورة").
 * The four buttons: the first is the heading of the programme listing (#programmes); the other three sit under it and
 * lead to the contact form with the subject "training". The listing's empty text is the source's (21) "programme not open".
 */
export const academy: PageSet = {
  academy: {
    masthead: { variant: "band", photo: "f-academy" },
    eyebrow: { en: "DUKAAT Academy", nl: "DUKAAT Academy", ar: "DUKAAT Academy" },
    headline: {
      en: "Knowledge that turns into skill, and skill that opens an opportunity for you",
      nl: "Kennis die vaardigheid wordt, en vaardigheid die voor u een kans opent",
      ar: "معرفة تتحول إلى مهارة، ومهارة تفتح لك فرصة",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "The Academy is one of the core pillars of DUKAAT. Through it, we develop courses, lectures and workshops led by specialists and experienced practitioners, to connect knowledge with the needs of work and professional life.",
          nl: "De academie is een van de kernpijlers van DUKAAT. Via de academie ontwikkelen we cursussen, lezingen en workshops onder leiding van specialisten en mensen met ervaring, om kennis te verbinden met de behoeften van het werk en het beroepsleven.",
          ar: "الأكاديمية أحد المحاور الأساسية في دوكات. نطوّر من خلالها دورات ومحاضرات وورش عمل يقودها مختصون وأصحاب خبرة، لربط المعرفة باحتياجات العمل والحياة المهنية.",
        },
      },
      {
        kind: "prose",
        body: [
          {
            en: "We address entrepreneurs and company owners; professionals such as lawyers, doctors, engineers and others; university students and graduates; and anyone who wants to enter the labour market or develop their career path. The programme varies with its participants, and the aim remains the same: learning you can use.",
            nl: "We richten ons tot ondernemers en bedrijfseigenaren, tot professionals zoals advocaten, artsen, ingenieurs en anderen, tot universiteitsstudenten en afgestudeerden, en tot iedereen die de arbeidsmarkt wil betreden of de eigen loopbaan wil ontwikkelen. Het programma verschilt naargelang de deelnemers; het doel blijft hetzelfde: leren waar u iets mee kunt.",
            ar: "نخاطب روّاد الأعمال وأصحاب الشركات، والمهنيين من محامين وأطباء ومهندسين وغيرهم، وطلاب الجامعات والخريجين، وكل من يريد دخول سوق العمل أو تطوير مساره. يختلف البرنامج باختلاف المشاركين، ويظل الهدف واحدًا: تعلمٌ تستطيع استخدامه.",
          },
        ],
      },
      {
        kind: "prose",
        heading: { en: "How do we learn at DUKAAT?", nl: "Hoe leren we bij DUKAAT?", ar: "كيف نتعلّم في دوكات؟" },
        body: [
          {
            en: "Our methodology draws inspiration from Dutch and European practices in applied education: dialogue, the study of real-life cases, group work, problem-solving, simulation and receiving feedback. Participants take part by asking questions, trying things out and discussing, and work on practical exercises linked to the programme’s objectives.",
            nl: "Onze methodiek is geïnspireerd op Nederlandse en Europese werkwijzen uit het praktijkgerichte onderwijs: dialoog, het bestuderen van echte casussen, groepswerk, het oplossen van problemen, simulatie en het ontvangen van feedback. De cursist neemt deel door vragen te stellen, uit te proberen en te discussiëren, en werkt aan toepassingen die aansluiten bij de doelen van het programma.",
            ar: "تستلهم منهجيتنا ممارسات التعليم التطبيقي الهولندية والأوروبية: الحوار، ودراسة الحالات الواقعية، والعمل الجماعي، وحل المشكلات، والمحاكاة، وتلقي الملاحظات. يشارك المتدرّب بالسؤال والتجربة والنقاش، ويعمل على تطبيقات ترتبط بأهداف البرنامج.",
          },
          {
            en: "You may leave a workshop with a plan for presenting a project, a purchase request template, a clearer way of negotiating, or steps to improve your professional presence. On each programme’s page, we set out the skills it targets and what participants will work on.",
            nl: "Mogelijk verlaat u een workshop met een plan om een project te presenteren, een model voor een inkoopaanvraag, een duidelijkere manier van onderhandelen of stappen om uw professionele aanwezigheid te verbeteren. Op de pagina van elk programma lichten we toe op welke vaardigheden het zich richt en waaraan de deelnemer zal werken.",
            ar: "قد تخرج من ورشة بخطة عرض مشروع، أو نموذج طلب شراء، أو طريقة أوضح للتفاوض، أو خطوات لتحسين حضورك المهني. نوضح في صفحة كل برنامج المهارات المستهدفة وما سيعمل عليه المشارك.",
          },
        ],
        photo: "x-academy-group",
        size: "half",
      },
      {
        kind: "chapter",
        heading: { en: "Academy tracks", nl: "Trajecten van de academie", ar: "مسارات الأكاديمية" },
        items: [
          {
            title: {
              en: "Entrepreneurship and business management",
              nl: "Ondernemerschap en projectmanagement",
              ar: "ريادة الأعمال وإدارة المشاريع",
            },
            body: {
              en: "From idea to business model: understanding the customer, formulating the value proposition, planning, pricing, managing operations and the team, and presenting the venture to partners and customers.",
              nl: "Van idee naar bedrijfsmodel: de klant begrijpen, de waardepropositie formuleren, plannen, prijzen bepalen, de operationele processen en het team aansturen, en het project presenteren aan partners en klanten.",
              ar: "من الفكرة إلى نموذج العمل: فهم العميل، وصياغة القيمة، والتخطيط، والتسعير، وإدارة العمليات والفريق، وتقديم المشروع للشركاء والعملاء.",
            },
          },
          {
            title: {
              en: "International trade and market entry",
              nl: "Internationale handel en markttoetreding",
              ar: "التجارة الدولية ودخول الأسواق",
            },
            body: {
              en: "Import and export, selecting suppliers and distributors, procurement, delivery terms, payment methods, logistics, and the culture of negotiation between the Netherlands and the Arab world. Specialised programmes address the requirements of the target market, in collaboration with specialists in the subject.",
              nl: "Import en export, het selecteren van leveranciers en distributeurs, inkoop, leveringsvoorwaarden, betaalmethoden, logistieke dienstverlening en de onderhandelingscultuur tussen Nederland en de Arabische wereld. De gespecialiseerde programma’s behandelen de eisen van de doelmarkt, in samenwerking met specialisten op het betreffende terrein.",
              ar: "الاستيراد والتصدير، واختيار المورّدين والموزّعين، والمشتريات، وشروط التسليم، وطرق الدفع، والخدمات اللوجستية، وثقافة التفاوض بين هولندا والعالم العربي. وتتناول البرامج المتخصصة متطلبات السوق المستهدف بالتعاون مع مختصين في موضوعها.",
            },
          },
          {
            title: {
              en: "Marketing, sales and artificial intelligence",
              nl: "Marketing, verkoop en kunstmatige intelligentie",
              ar: "التسويق والمبيعات والذكاء الاصطناعي",
            },
            body: {
              en: "Developing brand identity and the commercial offer, business-to-business sales, digital marketing, building relationships through professional platforms, and using AI tools for research, content, customer service and organising work.",
              nl: "Het ontwikkelen van de identiteit en het commerciële aanbod, zakelijke verkoop, digitale marketing, het opbouwen van relaties via professionele platforms, en het gebruik van AI-tools voor onderzoek, content, klantenservice en werkorganisatie.",
              ar: "تطوير الهوية والعرض التجاري، ومبيعات الشركات، والتسويق الرقمي، وبناء العلاقات عبر المنصات المهنية، واستخدام أدوات الذكاء الاصطناعي في البحث والمحتوى وخدمة العملاء وتنظيم العمل.",
            },
          },
          {
            title: {
              en: "Financial management and understanding investment",
              nl: "Financieel management en inzicht in investeringen",
              ar: "الإدارة المالية وفهم الاستثمار",
            },
            body: {
              en: "Reading financial statements, managing cash flow, calculating costs, understanding feasibility studies, assessing assumptions and risks, and preparing questions before taking a business or investment decision.",
              nl: "Het lezen van financiële overzichten, het beheren van kasstromen, het berekenen van kosten, het begrijpen van een haalbaarheidsstudie, het beoordelen van aannames en risico’s, en het voorbereiden van vragen voordat u een zakelijke of investeringsbeslissing neemt.",
              ar: "قراءة القوائم المالية، وإدارة التدفقات النقدية، وحساب التكاليف، وفهم دراسة الجدوى، وتقييم الفرضيات والمخاطر، وإعداد الأسئلة قبل اتخاذ قرار تجاري أو استثماري.",
            },
          },
          {
            title: {
              en: "Professional development for specialists",
              nl: "Professionele ontwikkeling voor specialisten",
              ar: "التطوير المهني لأصحاب الاختصاص",
            },
            body: {
              en: "Programmes suited to lawyers, doctors, engineers and all other professionals, covering the management of offices, clinics and projects, client communication, leadership, digital technologies and collaboration across disciplines. Each programme clearly sets out its subject, its requirements and its level.",
              nl: "Programma’s die geschikt zijn voor advocaten, artsen, ingenieurs en andere professionals, op het gebied van het beheer van kantoren, praktijken en projecten, communicatie met klanten, leiderschap, digitale technologieën en samenwerking tussen disciplines. Elk programma vermeldt duidelijk het onderwerp, de vereisten en het niveau.",
              ar: "برامج تناسب المحامين والأطباء والمهندسين وسائر المهنيين في إدارة المكاتب والعيادات والمشاريع، والتواصل مع العملاء، والقيادة، والتقنيات الرقمية، والتعاون بين التخصصات. يحدد كل برنامج موضوعه ومتطلباته ومستواه بوضوح.",
            },
          },
          {
            title: {
              en: "Students, graduates and preparing for the labour market",
              nl: "Studenten, afgestudeerden en voorbereiding op de arbeidsmarkt",
              ar: "الطلاب والخريجون والاستعداد لسوق العمل",
            },
            body: {
              en: "The CV, the interview, introducing yourself professionally, working in a team, presenting and communicating, understanding the working environment, and turning university knowledge into applicable skills.",
              nl: "Het cv, het sollicitatiegesprek, uzelf professioneel voorstellen, werken in teamverband, presenteren en communiceren, de werkomgeving begrijpen en universitaire kennis omzetten in toepasbare vaardigheden.",
              ar: "السيرة الذاتية، والمقابلة، والتعريف المهني، والعمل ضمن فريق، والعرض والتواصل، وفهم بيئة العمل، وتحويل المعرفة الجامعية إلى مهارات قابلة للتطبيق.",
            },
          },
        ],
      },
      {
        kind: "register",
        heading: { en: "Forms of learning", nl: "Leervormen", ar: "أشكال التعلّم" },
        items: [
          {
            title: { en: "Introductory lectures", nl: "Inleidende lezingen", ar: "محاضرات تعريفية" },
            body: {
              en: "a clear way into a specific topic, with direct questions to the speaker.",
              nl: "een heldere introductie in een specifiek onderwerp en directe vragen aan de spreker.",
              ar: "مدخل واضح إلى موضوع محدد وأسئلة مباشرة مع المتحدث.",
            },
          },
          {
            title: { en: "Specialised courses", nl: "Gespecialiseerde cursussen", ar: "دورات متخصصة" },
            body: {
              en: "a step-by-step track to develop a skill or a set of skills.",
              nl: "een stapsgewijs traject om een vaardigheid of een reeks vaardigheden te ontwikkelen.",
              ar: "مسار متدرّج لتطوير مهارة أو مجموعة مهارات.",
            },
          },
          {
            title: { en: "Group workshops", nl: "Groepsworkshops", ar: "ورش عمل جماعية" },
            body: {
              en: "practical exercises and challenges that participants work on in teams.",
              nl: "toepassingen en uitdagingen waaraan de deelnemers in teams werken.",
              ar: "تطبيقات وتحديات يعمل عليها المشاركون ضمن فرق.",
            },
          },
          {
            title: { en: "Meetings with experts", nl: "Ontmoetingen met experts", ar: "لقاءات مع الخبراء" },
            body: {
              en: "discussion of practical questions related to a specialism or a market.",
              nl: "het bespreken van praktische vragen die verband houden met een vakgebied of een markt.",
              ar: "مناقشة أسئلة عملية مرتبطة بتخصص أو سوق.",
            },
          },
          {
            title: { en: "Advanced and executive sessions", nl: "Gevorderde en executive sessies", ar: "جلسات متقدمة وتنفيذية" },
            body: {
              en: "deeper topics for experienced professionals and managers.",
              nl: "diepgaandere onderwerpen voor mensen met ervaring en voor managers.",
              ar: "موضوعات أعمق لأصحاب الخبرة والمديرين.",
            },
          },
          {
            title: { en: "Dedicated training for companies", nl: "In-companytraining", ar: "تدريب خاص للشركات" },
            body: {
              en: "a programme designed around the team’s needs and the organisation’s goals.",
              nl: "een programma dat wordt ontworpen rond de behoeften van het team en de doelen van de organisatie.",
              ar: "برنامج يُصمم حول احتياجات الفريق وأهداف المؤسسة.",
            },
          },
          {
            title: { en: "In-person or remote learning", nl: "Fysiek leren of leren op afstand", ar: "تعلّم حضوري أو عن بُعد" },
            body: {
              en: "depending on the nature of the programme and where participants are based.",
              nl: "afhankelijk van de aard van het programma en de plaats waar de deelnemers zich bevinden.",
              ar: "بحسب طبيعة البرنامج ومكان المشاركين.",
            },
          },
        ],
        cols: 2,
      },
      {
        kind: "prose",
        heading: {
          en: "Knowledge that is accessible for starting out, and specialised for growth",
          nl: "Kennis: toegankelijk om te beginnen, en gespecialiseerd om te groeien",
          ar: "المعرفة متاحة للبداية، ومتخصصة للنمو",
        },
        body: [
          {
            en: "We are working to develop free or subsidised initiatives and introductory lectures, particularly for students and those about to enter working life, alongside paid specialised courses and programmes for companies. The type of participation and its fees, if any, are stated on each programme’s page.",
            nl: "We werken aan de ontwikkeling van gratis of gesubsidieerde initiatieven en inleidende lezingen, vooral voor studenten en starters op de arbeidsmarkt, naast betaalde gespecialiseerde cursussen en programma’s voor bedrijven. De vorm van deelname en de eventuele kosten worden op de pagina van elk programma vermeld.",
            ar: "نعمل على تطوير مبادرات ومحاضرات تعريفية مجانية أو مدعومة، خصوصًا للطلاب والمقبلين على العمل، إلى جانب دورات متخصصة مدفوعة وبرامج للشركات. يُذكر نوع المشاركة ورسومها، إن وجدت، في صفحة كل برنامج.",
          },
          {
            en: "We seek to collaborate with universities, institutions and professional bodies to make wider learning opportunities available; the names of participating organisations are announced once the collaboration with them is confirmed.",
            nl: "We streven naar samenwerking met universiteiten, instellingen en beroepsorganisaties om ruimere leermogelijkheden beschikbaar te maken; de namen van de deelnemende organisaties worden bekendgemaakt wanneer de samenwerking met hen is bevestigd.",
            ar: "ونسعى إلى التعاون مع الجامعات والمؤسسات والجهات المهنية لإتاحة فرص تعلم أوسع؛ وتُعلن أسماء الجهات المشاركة عندما يتأكد التعاون معها.",
          },
        ],
      },
      {
        kind: "prose",
        heading: { en: "Are you a trainer or an expert?", nl: "Bent u trainer of expert?", ar: "هل أنت مدرّب أو خبير؟" },
        body: [
          {
            en: "If you have practical experience and can turn it into a useful learning experience, share with us your field of specialisation, your training idea and the group you would like to serve.",
            nl: "Als u over praktijkervaring beschikt en die kunt omzetten in een nuttige leerervaring, deel dan met ons uw vakgebied, uw trainingsidee en de doelgroep die u wilt bedienen.",
            ar: "إذا كنت تمتلك خبرة عملية وتستطيع تحويلها إلى تجربة تعلم مفيدة، شاركنا مجال تخصصك وفكرتك التدريبية والفئة التي ترغب في خدمتها.",
          },
        ],
      },
      {
        kind: "listing",
        id: "programmes",
        heading: { en: "Explore the programmes", nl: "Verken de programma’s", ar: "استكشف البرامج" },
        empty: {
          en: "Registration has not opened yet. Register your interest so that we can share the details with you when they are announced.",
          nl: "De inschrijving is nog niet geopend. Registreer uw interesse, zodat wij u over de details kunnen informeren wanneer deze worden aangekondigd.",
          ar: "التسجيل لم يُفتح بعد. سجّل اهتمامك لنطلعك على التفاصيل عند الإعلان عنها.",
        },
        links: [
          {
            href: "contact?subject=training#contact-form",
            label: { en: "Register your interest in training", nl: "Registreer uw interesse in trainingen", ar: "سجّل اهتمامك بالتدريب" },
          },
          {
            href: "contact?subject=training#contact-form",
            label: { en: "Request training for your company", nl: "Vraag een training aan voor uw bedrijf", ar: "اطلب تدريبًا لشركتك" },
          },
          {
            href: "contact?subject=training#contact-form",
            label: { en: "Join as a trainer", nl: "Sluit u aan als trainer", ar: "انضم كمدرّب" },
          },
        ],
      },
    ],
  },
};
