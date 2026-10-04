import type { PageSet } from "./types";

/**
 * Source sections 11 (DUKAAT Directory), 15 (DUKAAT Intelligence), 16 (DUKAAT Circles), 17 (DUKAAT Stories) and
 * 18 (Partnerships and sponsorship), each in the source's order.
 * ar = the Arabic master verbatim; nl / en = the translation files verbatim (owntext/vertalingen/).
 * Not published (editorial): the labels, the report card data (15) and the story editing template (17).
 *
 * 11  "Browse the companies" is the heading of the directory listing (#companies): its search fields are the source's
 *     search options, its empty text the source's no-results text, its links the other two buttons. The profile form
 *     (#company-profile) holds the profile fields, then the profile headings.
 * 15  "Browse the content" is the heading of the publications listing (#publications), the other two buttons are its
 *     links; the text accompanying the reports follows as a notice. The source gives no empty text: pending marker.
 * 16  The three buttons lead to the registration form (#circle); its sector field offers the target sectors.
 *     "Country" is one of the shared fields the site appends, so it is not repeated.
 * 17  "Read the stories" is the heading of the stories listing (#stories), whose empty text is the source's launch text.
 * 18  Both buttons lead to the form (#partnership), headed by the source's "Have an idea for collaboration?".
 */
export const network: PageSet = {
  /* ------------------------------------------------------------------ 11. Company directory */
  "services/directory": {
    masthead: { variant: "plate", photo: "dir-hero" },
    eyebrow: {
      en: "DUKAAT Directory",
      nl: "DUKAAT Directory",
      ar: "DUKAAT Directory",
    },
    headline: {
      en: "Get to know companies through what they offer and what they are looking for",
      nl: "Maak kennis met bedrijven aan de hand van wat zij bieden en wat zij zoeken",
      ar: "تعرّف إلى الشركات من خلال ما تقدّمه وما تبحث عنه",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "The DUKAAT Directory helps you discover companies and people with expertise by sector, country and nature of activity. Each profile presents information that makes it easier to understand the company and to explore opportunities to connect with it.",
          nl: "De DUKAAT-gids helpt bij het ontdekken van bedrijven en mensen met expertise op basis van sector, land en de aard van de activiteit. Elk profiel toont informatie die het gemakkelijker maakt om het bedrijf te begrijpen en de kansen te verkennen om ermee in contact te komen.",
          ar: "يساعد دليل دوكات على اكتشاف شركات وأصحاب خبرة بحسب القطاع والدولة وطبيعة النشاط. يعرض كل ملف معلومات تسهّل فهم الشركة واستكشاف فرص التواصل معها.",
        },
      },
      {
        kind: "listing",
        id: "companies",
        heading: {
          en: "Browse the companies",
          nl: "Bekijk de bedrijven",
          ar: "استعرض الشركات",
        },
        search: [
          {
            name: "query",
            label: {
              en: "Search by company name or product",
              nl: "Zoek op bedrijfsnaam of product",
              ar: "ابحث باسم الشركة أو المنتج",
            },
          },
          {
            name: "country",
            label: {
              en: "Country",
              nl: "Land",
              ar: "الدولة",
            },
          },
          {
            name: "sector",
            label: {
              en: "Sector",
              nl: "Sector",
              ar: "القطاع",
            },
          },
          {
            name: "market",
            label: {
              en: "Target market",
              nl: "Doelmarkt",
              ar: "السوق المستهدف",
            },
          },
          {
            name: "activity",
            label: {
              en: "Type of activity",
              nl: "Type activiteit",
              ar: "نوع النشاط",
            },
          },
        ],
        searchLabel: {
          en: "Search",
          nl: "Zoeken",
          ar: "بحث",
        },
        empty: {
          en: "We found no results matching your selection. Try another sector or country, or send us your requirement.",
          nl: "We hebben geen resultaten gevonden die overeenkomen met uw keuze. Probeer een andere sector of een ander land, of laat ons weten wat u nodig heeft.",
          ar: "لم نجد نتائج تطابق اختيارك. جرّب قطاعًا أو دولة أخرى، أو أرسل لنا احتياجك.",
        },
        links: [
          {
            href: "#company-profile",
            label: {
              en: "Submit your company profile",
              nl: "Dien uw bedrijfsprofiel in",
              ar: "قدّم ملف شركتك",
            },
          },
          {
            href: "contact?subject=introductions#contact-form",
            label: {
              en: "Request an introduction",
              nl: "Vraag een kennismaking aan",
              ar: "اطلب التعارف",
            },
          },
        ],
      },
      {
        kind: "prose",
        heading: {
          en: "Clarity of information and trust",
          nl: "Duidelijke informatie en vertrouwen",
          ar: "وضوح المعلومات والثقة",
        },
        body: [
          {
            en: "We distinguish between information provided by the company and any data that has actually been reviewed. Where a review of a piece of information is shown, we set out its subject, date and scope; neither membership nor the listing of a profile implies a guarantee of the company or of the quality of its dealings.",
            nl: "We maken onderscheid tussen de informatie die het bedrijf verstrekt en eventuele gegevens die daadwerkelijk zijn gecontroleerd. Wanneer we een controle van een gegeven weergeven, maken we het onderwerp, de datum en de reikwijdte ervan duidelijk; lidmaatschap of opname van het profiel betekent geen garantie voor het bedrijf of voor de kwaliteit van zijn transacties.",
            ar: "نميّز بين المعلومات التي تقدّمها الشركة وأي بيانات تمت مراجعتها فعليًا. عند عرض مراجعة لمعلومة، نوضح موضوعها وتاريخها ونطاقها؛ ولا تعني العضوية أو إدراج الملف ضمان الشركة أو جودة تعاملاتها.",
          },
        ],
        photo: "dir-profile",
        size: "tall",
        side: "end",
      },
      {
        kind: "form",
        form: {
          id: "company-profile",
          title: {
            en: "Submit your company profile",
            nl: "Dien uw bedrijfsprofiel in",
            ar: "قدّم ملف شركتك",
          },
          omit: ["company", "country"], // UX-05: the profile asks them itself (companyName, location)
          fields: [
            /* the profile fields */
            {
              name: "companyName",
              core: true, // UX-04
              label: {
                en: "Company name",
                nl: "Bedrijfsnaam",
                ar: "اسم الشركة",
              },
            },
            {
              name: "logo",
              type: "file",
              label: {
                en: "Logo",
                nl: "Logo",
                ar: "الشعار",
              },
            },
            {
              name: "location",
              core: true, // UX-04
              required: true, // UX-05: stands in for the shared country question
              label: {
                en: "Country and city",
                nl: "Land en stad",
                ar: "الدولة والمدينة",
              },
            },
            {
              name: "sector",
              core: true, // UX-04
              label: {
                en: "Sector",
                nl: "Sector",
                ar: "القطاع",
              },
            },
            {
              name: "website",
              type: "url",
              label: {
                en: "Website",
                nl: "Website",
                ar: "الموقع الإلكتروني",
              },
            },
            {
              name: "languages",
              label: {
                en: "Languages of communication",
                nl: "Communicatietalen",
                ar: "لغات التواصل",
              },
            },
            {
              name: "representative",
              type: "textarea",
              wide: true,
              label: {
                en: "The details of the company representative that are cleared for publication",
                nl: "De gegevens van de bedrijfsvertegenwoordiger die gepubliceerd mogen worden",
                ar: "بيانات ممثل الشركة المسموح بنشرها",
              },
            },
            /* the profile headings */
            {
              name: "about",
              type: "textarea",
              wide: true,
              label: {
                en: "About us",
                nl: "Over ons",
                ar: "نبذة عنا",
              },
            },
            {
              name: "productsServices",
              type: "textarea",
              wide: true,
              label: {
                en: "Our products and services",
                nl: "Onze producten en diensten",
                ar: "منتجاتنا وخدماتنا",
              },
            },
            {
              name: "markets",
              type: "textarea",
              wide: true,
              label: {
                en: "Markets we serve",
                nl: "Markten die wij bedienen",
                ar: "الأسواق التي نخدمها",
              },
            },
            {
              name: "offer",
              type: "textarea",
              wide: true,
              label: {
                en: "What we offer",
                nl: "Wat wij bieden",
                ar: "ما نقدّمه",
              },
            },
            {
              name: "seeking",
              type: "textarea",
              wide: true,
              label: {
                en: "What we are looking for",
                nl: "Wat wij zoeken",
                ar: "ما نبحث عنه",
              },
            },
            {
              name: "catalogue",
              type: "file",
              wide: true,
              label: {
                en: "Photos and catalogue",
                nl: "Foto's en catalogus",
                ar: "الصور والكتالوج",
              },
            },
            {
              name: "contactInformation",
              type: "textarea",
              wide: true,
              label: {
                en: "Contact information",
                nl: "Contactgegevens",
                ar: "معلومات التواصل",
              },
            },
          ],
          common: "request",
          submit: {
            en: "Submit your company profile",
            nl: "Dien uw bedrijfsprofiel in",
            ar: "قدّم ملف شركتك",
          },
        },
      },
      /* kept extras (owner's choice), verbatim from 2336702: the closed character of the directory */
      {
        kind: "prose",
        label: {
          en: "What binds it",
          nl: "Wat het bindt",
          ar: "ما يجمعها",
        },
        heading: {
          en: "Admitted, not *collected.*",
          nl: "Toegelaten, niet *verzameld.*",
          ar: "أعضاءٌ يُقبَلون، لا *يُجمَعون.*",
        },
        body: [
          {
            en: "A network is only as useful as the trust between its people. Every member of DUKAAT is admitted on reputation — nominated by a member, invited by us or after applying — and verified before their name reaches anyone else: registration, activity, references.",
            nl: "Een netwerk is maar zo nuttig als het vertrouwen tussen de mensen erin. Elk lid van DUKAAT wordt toegelaten op reputatie — voorgedragen door een lid, door ons uitgenodigd of na aanmelding — en geverifieerd voordat zijn naam bij een ander terechtkomt: handelsregister, activiteit, referenties.",
            ar: "لا تنفع الشبكة إلا بقدر الثقة بين أفرادها. ويُقبل كل عضو في DUKAAT على أساس سمعته — بترشيحٍ من أحد الأعضاء، أو بدعوةٍ منا، أو بعد طلب انضمام — ويُتحقَّق من سجله التجاري ونشاطه ومراجعه قبل أن يصل اسمه إلى أي طرف آخر.",
          },
          {
            en: "We review every company before it joins, so that an introduction carries weight on both sides. And we serve every member in their own language: Arabic, Dutch or English.",
            nl: "Wij beoordelen elk bedrijf voordat het toetreedt, zodat een introductie aan beide kanten gewicht heeft. En wij bedienen elk lid in zijn eigen taal: Arabisch, Nederlands of Engels.",
            ar: "ونراجع كل شركة قبل انضمامها، حتى يكون للتعريف وزنه لدى الطرفين. ونخدم كل عضو بلغته: العربية أو الهولندية أو الإنجليزية.",
          },
        ],
      },
      {
        kind: "notice",
        label: {
          en: "Publication",
          nl: "Publicatie",
          ar: "النشر",
        },
        heading: {
          en: "Only what you *approve.*",
          nl: "Alleen wat u *goedkeurt.*",
          ar: "لا يُنشر إلا ما *توافق عليه.*",
        },
        body: [
          {
            en: "Your profile shows only what you have explicitly approved. You can withdraw that approval, or ask for correction or deletion, at any time. We process members’ data in accordance with the GDPR.",
            nl: "Uw profiel toont alleen wat u uitdrukkelijk hebt goedgekeurd. U kunt die goedkeuring op elk moment intrekken, of om correctie of verwijdering vragen. Wij verwerken ledengegevens conform de AVG.",
            ar: "لا يَعرض ملفك إلا ما وافقت عليه صراحةً. ويمكنك في أي وقت أن تسحب هذه الموافقة، أو أن تطلب التصحيح أو الحذف. ونعالج بيانات الأعضاء وفقاً للائحة العامة لحماية البيانات (GDPR).",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 15. Studies and reports */
  "services/intelligence": {
    masthead: { variant: "band", photo: "int-hero" },
    eyebrow: {
      en: "DUKAAT Intelligence",
      nl: "DUKAAT Intelligence",
      ar: "DUKAAT Intelligence",
    },
    headline: {
      en: "Understand the market before you step into it",
      nl: "Begrijp de markt voordat u erin stapt",
      ar: "افهم السوق قبل أن تخطو إليه",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Content that helps business owners understand sectors and markets and ask the right questions. We focus on the information that bears on the decision: who are the potential customers? How do you reach them? Which requirements need researching? And what information is missing before you begin?",
          nl: "Content die ondernemers helpt sectoren en markten te begrijpen en de juiste vragen te stellen. We richten ons op de informatie die met de beslissing samenhangt: wie zijn de potentiële klanten? Hoe bereikt u hen? Welke vereisten vragen om onderzoek? En welke informatie ontbreekt voordat u begint?",
          ar: "محتوى يساعد أصحاب الأعمال على فهم القطاعات والأسواق وطرح الأسئلة الصحيحة. نركّز على المعلومات المرتبطة بالقرار: من العملاء المحتملون؟ كيف تصل إليهم؟ ما المتطلبات التي تحتاج إلى بحث؟ وما المعلومات الناقصة قبل البدء؟",
        },
      },
      {
        kind: "register",
        heading: {
          en: "Types of content",
          nl: "Soorten content",
          ar: "أنواع المحتوى",
        },
        cols: 2,
        items: [
          {
            title: {
              en: "Market entry guides",
              nl: "Gidsen voor markttoetreding",
              ar: "أدلة دخول الأسواق",
            },
            body: {
              en: "a structured look at the steps of preparation and the topics that need follow-up.",
              nl: "een gestructureerde blik op de voorbereidingsstappen en de onderwerpen die opvolging vragen.",
              ar: "نظرة منظمة إلى خطوات الاستعداد والموضوعات التي تحتاج إلى متابعة.",
            },
          },
          {
            title: {
              en: "Sector reports",
              nl: "Sectorrapporten",
              ar: "تقارير قطاعية",
            },
            body: {
              en: "information on the nature of the sector, its customers, channels and challenges.",
              nl: "informatie over de aard van de sector, de klanten, de kanalen en de uitdagingen.",
              ar: "معلومات عن طبيعة القطاع والعملاء والقنوات والتحديات.",
            },
          },
          {
            title: {
              en: "Opportunity notes",
              nl: "Kansennotities",
              ar: "مذكرات فرص",
            },
            body: {
              en: "a concise overview of an opportunity, its context and the information still to be completed.",
              nl: "een beknopte weergave van een kans, de context ervan en de informatie die moet worden aangevuld.",
              ar: "عرض موجز لفرصة وسياقها والمعلومات التي يلزم استكمالها.",
            },
          },
          {
            title: {
              en: "Practical materials",
              nl: "Praktisch materiaal",
              ar: "مواد عملية",
            },
            body: {
              en: "lists of questions and templates that help you prepare for a meeting or a business request.",
              nl: "lijsten met vragen en sjablonen die helpen bij de voorbereiding op een bespreking of een zakelijke aanvraag.",
              ar: "قوائم أسئلة ونماذج تساعد على التحضير للاجتماع أو الطلب التجاري.",
            },
          },
          {
            title: {
              en: "Knowledge content",
              nl: "Kenniscontent",
              ar: "محتوى معرفي",
            },
            body: {
              en: "articles, summaries of meetings and lessons drawn from practical experience.",
              nl: "artikelen, samenvattingen van bijeenkomsten en lessen uit praktijkervaringen.",
              ar: "مقالات وملخصات لقاءات ودروس من الخبرات العملية.",
            },
          },
        ],
      },
      { kind: "band", photo: "int-band" },
      {
        kind: "listing",
        id: "publications",
        heading: {
          en: "Browse the content",
          nl: "Bekijk de content",
          ar: "استعرض المحتوى",
        },
        empty: {
          en: "[text missing in the source: text for when no content is published]",
          nl: "[tekst ontbreekt in de bron: tekst voor wanneer er geen content is gepubliceerd]",
          ar: "[نص غير موجود في المصدر: نص عند عدم نشر أي محتوى]",
        },
        links: [
          {
            href: "contact?subject=consultancy#contact-form",
            label: {
              en: "Request a tailored study",
              nl: "Vraag een studie op maat aan",
              ar: "اطلب دراسة مخصصة",
            },
          },
          {
            href: "membership/sector-networks#circle",
            label: {
              en: "Register your interest in a sector",
              nl: "Registreer uw interesse in een sector",
              ar: "سجّل اهتمامك بقطاع",
            },
          },
        ],
      },
      {
        kind: "notice",
        body: [
          {
            en: "The content reflects the information available as of the date it was prepared; details relevant to a decision are reviewed according to the case and the market.",
            nl: "De content weerspiegelt de informatie die beschikbaar was op de datum waarop deze is opgesteld; de details die met de beslissing samenhangen, worden gecontroleerd afhankelijk van de situatie en de markt.",
            ar: "يعكس المحتوى المعلومات المتاحة بتاريخ إعداده؛ تُراجع التفاصيل المرتبطة بالقرار بحسب الحالة والسوق.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 16. Sector communities */
  "membership/sector-networks": {
    masthead: { variant: "portrait", photo: "sec-hero" },
    eyebrow: {
      en: "DUKAAT Circles",
      nl: "DUKAAT Circles",
      ar: "DUKAAT Circles",
    },
    headline: {
      en: "Meet those who understand your sector",
      nl: "Ontmoet wie uw sector begrijpt",
      ar: "اجتمع بمن يفهم قطاعك",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Within the DUKAAT community, we develop specialised spaces that bring together people with related interests and expertise. These communities enable more work-relevant discussions, the exchange of information, and getting to know parties and topics that matter to the sector.",
          nl: "Binnen de DUKAAT-community ontwikkelen we gespecialiseerde ruimtes die mensen met verwante belangen en expertise samenbrengen. Deze community’s maken het mogelijk om discussies te voeren die relevanter zijn voor het werk, informatie uit te wisselen en kennis te maken met partijen en onderwerpen die voor de sector van belang zijn.",
          ar: "داخل مجتمع دوكات، نطوّر مساحات متخصصة تجمع أصحاب المصالح والخبرات المتقاربة. تتيح هذه المجتمعات نقاشات أكثر صلة بالعمل، وتبادل معلومات، والتعرف إلى أطراف وموضوعات تهم القطاع.",
        },
      },
      {
        kind: "terms",
        heading: {
          en: "Target sectors",
          nl: "Beoogde sectoren",
          ar: "القطاعات المستهدفة",
        },
        items: [
          { en: "Food and agriculture", nl: "Voeding en landbouw", ar: "الأغذية والزراعة" },
          { en: "Real estate", nl: "Vastgoed", ar: "العقارات" },
          { en: "Construction", nl: "Bouw", ar: "البناء" },
          { en: "Technology", nl: "Technologie", ar: "التكنولوجيا" },
          { en: "Printing and packaging", nl: "Drukwerk en verpakking", ar: "الطباعة والتغليف" },
          { en: "Logistics", nl: "Logistieke diensten", ar: "الخدمات اللوجستية" },
          { en: "Energy", nl: "Energie", ar: "الطاقة" },
          { en: "Professional services", nl: "Professionele diensten", ar: "الخدمات المهنية" },
        ],
      },
      { kind: "mosaic", photos: ["sec-dates", "sec-pack", "sec-energy", "sec-seeds"] },
      {
        kind: "prose",
        body: [
          {
            en: "The community's activities may include specialist meetings, discussion of shared challenges, the sharing of business needs, and workshops and reports linked to the interests of its members. Available activities and groups are announced in line with the club's programme.",
            nl: "Tot de activiteiten van de community kunnen behoren: gespecialiseerde bijeenkomsten, het bespreken van gedeelde uitdagingen, het delen van zakelijke behoeften, en workshops en rapporten die verband houden met de interesses van haar leden. De beschikbare activiteiten en groepen worden aangekondigd volgens het programma van de club.",
            ar: "يمكن أن تضم أنشطة المجتمع لقاءات تخصصية، ومناقشة تحديات مشتركة، ومشاركة احتياجات تجارية، وورشًا وتقارير مرتبطة باهتمامات أعضائه. تُعلن الأنشطة والمجموعات المتاحة بحسب برنامج النادي.",
          },
        ],
      },
      {
        kind: "actions",
        links: [
          {
            href: "#circle",
            label: {
              en: "Choose your sector",
              nl: "Kies uw sector",
              ar: "اختر قطاعك",
            },
          },
          {
            href: "#circle",
            label: {
              en: "Register your interest in a community",
              nl: "Registreer uw interesse in een community",
              ar: "سجّل اهتمامك بمجتمع",
            },
          },
          {
            href: "#circle",
            label: {
              en: "Propose a new community",
              nl: "Stel een nieuwe community voor",
              ar: "اقترح مجتمعًا جديدًا",
            },
          },
        ],
      },
      {
        kind: "form",
        form: {
          id: "circle",
          title: {
            en: "Choose your sector",
            nl: "Kies uw sector",
            ar: "اختر قطاعك",
          },
          fields: [
            {
              name: "sector",
              core: true, // UX-04
              type: "select",
              label: {
                en: "Sector",
                nl: "Sector",
                ar: "القطاع",
              },
              options: [
                { en: "Food and agriculture", nl: "Voeding en landbouw", ar: "الأغذية والزراعة" },
                { en: "Real estate", nl: "Vastgoed", ar: "العقارات" },
                { en: "Construction", nl: "Bouw", ar: "البناء" },
                { en: "Technology", nl: "Technologie", ar: "التكنولوجيا" },
                { en: "Printing and packaging", nl: "Drukwerk en verpakking", ar: "الطباعة والتغليف" },
                { en: "Logistics", nl: "Logistieke diensten", ar: "الخدمات اللوجستية" },
                { en: "Energy", nl: "Energie", ar: "الطاقة" },
                { en: "Professional services", nl: "Professionele diensten", ar: "الخدمات المهنية" },
              ],
            },
            {
              name: "specialisation",
              core: true, // UX-04
              label: {
                en: "Specialisation",
                nl: "Specialisatie",
                ar: "التخصص",
              },
            },
            {
              name: "share",
              type: "textarea",
              wide: true,
              label: {
                en: "What you can share",
                nl: "Wat u kunt delen",
                ar: "ما تستطيع مشاركته",
              },
            },
            {
              name: "learn",
              core: true, // UX-04
              type: "textarea",
              wide: true,
              label: {
                en: "What you would like to learn or gain access to",
                nl: "Wat u wilt leren of bereiken",
                ar: "ما ترغب في تعلمه أو الوصول إليه",
              },
            },
          ],
          common: "request",
          submit: {
            en: "Register your interest in a community",
            nl: "Registreer uw interesse in een community",
            ar: "سجّل اهتمامك بمجتمع",
          },
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ 17. Success stories */
  "membership/stories": {
    masthead: { variant: "plate", photo: "sto-hero-band" },
    eyebrow: {
      en: "DUKAAT Stories",
      nl: "DUKAAT Stories",
      ar: "DUKAAT Stories",
    },
    headline: {
      en: "Relationships that led to a step worth recounting",
      nl: "Relaties die een stap tot stand brachten die het vertellen waard is",
      ar: "علاقات صنعت خطوة تستحق أن تُروى",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We share real stories from the DUKAAT community: how the need arose, how the introduction or the learning came about, and what step was achieved afterwards. We publish with the consent of the people whose stories they are, and in a way that protects the commercial information they wish to keep private.",
          nl: "We delen echte verhalen uit de DUKAAT-community: hoe de behoefte ontstond, hoe de kennismaking of het leren plaatsvond en welke stap daarna werd gerealiseerd. We publiceren met toestemming van degenen van wie het verhaal is, en op een manier die de zakelijke informatie beschermt die zij voor zich willen houden.",
          ar: "نشارك قصصًا حقيقية من مجتمع دوكات: كيف بدأ الاحتياج، وكيف جرى التعارف أو التعلم، وما الخطوة التي تحققت بعد ذلك. ننشر بموافقة أصحاب القصة وبما يحفظ المعلومات التجارية التي يرغبون في إبقائها خاصة.",
        },
      },
      {
        kind: "register",
        items: [
          {
            title: {
              en: "A story of collaboration",
              nl: "Samenwerkingsverhaal",
              ar: "قصة تعاون",
            },
            body: {
              en: "The journey of a company or member from a specific need to a documented collaboration, making clear DUKAAT's role and what the parties achieved.",
              nl: "De reis die een bedrijf of lid maakt van een specifieke behoefte naar een gedocumenteerde samenwerking, met een toelichting op de rol van DUKAAT en op wat de partijen hebben bereikt.",
              ar: "رحلة شركة أو عضو من حاجة محددة إلى تعاون موثّق، مع توضيح دور دوكات وما أنجزته الأطراف.",
            },
          },
          {
            title: {
              en: "Member in the spotlight",
              nl: "Lid in de schijnwerpers",
              ar: "عضو تحت الضوء",
            },
            body: {
              en: "Get to know a member's expertise and activity, what they offer, what they are looking for, and what they can add to the community.",
              nl: "Maak kennis met de expertise en de activiteiten van een van de leden, met wat dit lid biedt, waar het naar zoekt en wat het aan de community kan toevoegen.",
              ar: "تعرّف إلى خبرة أحد الأعضاء ونشاطه، وما يقدّمه، وما يبحث عنه، وما يستطيع إضافته للمجتمع.",
            },
          },
          {
            title: {
              en: "From knowledge to practice",
              nl: "Van kennis naar toepassing",
              ar: "من المعرفة إلى التطبيق",
            },
            body: {
              en: "The experience of a participant who used what they learned in a programme or workshop to develop a skill or take a professional step.",
              nl: "De ervaring van een deelnemer die wat hij of zij in een programma of workshop had geleerd, gebruikte om een vaardigheid of een professionele stap te ontwikkelen.",
              ar: "تجربة مشارك استخدم ما تعلّمه في برنامج أو ورشة لتطوير مهارة أو خطوة مهنية.",
            },
          },
        ],
      },
      {
        kind: "listing",
        id: "stories",
        heading: {
          en: "Read the stories",
          nl: "Lees de verhalen",
          ar: "اقرأ القصص",
        },
        empty: {
          en: "This is where we will share experiences from the DUKAAT community once they have been documented and those involved have given their consent. If you have an experience worth sharing, we would be glad to hear it.",
          nl: "Hier zullen we de ervaringen van de DUKAAT-community delen, nadat ze zijn gedocumenteerd en we toestemming hebben gekregen van degenen van wie ze zijn. Heeft u een ervaring die het delen waard is, dan horen we die graag.",
          ar: "هنا سنشارك تجارب مجتمع دوكات بعد توثيقها والحصول على موافقة أصحابها. إذا كانت لديك تجربة تستحق المشاركة، يسعدنا سماعها.",
        },
        links: [
          {
            href: "contact?subject=other#contact-form",
            label: {
              en: "Share your experience with us",
              nl: "Deel uw ervaring met ons",
              ar: "شاركنا تجربتك",
            },
          },
        ],
      },
      /* kept extra (owner's choice), verbatim from 2336702: the named story formats */
      {
        kind: "register",
        cols: 1,
        numbered: true,
        label: {
          en: "The formats",
          nl: "De rubrieken",
          ar: "الصيغ",
        },
        heading: {
          en: "The forms a story *takes.*",
          nl: "De vormen die een verhaal *aanneemt.*",
          ar: "الأشكال التي تتخذها *القصة.*",
        },
        items: [
          {
            title: {
              en: "Deal of the Month",
              nl: "Deal of the Month",
              ar: "Deal of the Month",
            },
            body: {
              en: "Each month, one opportunity or cooperation that began through DUKAAT: what was needed, how the parties found each other, and what they agreed to share.",
              nl: "Elke maand één kans of samenwerking die via DUKAAT is begonnen: wat er nodig was, hoe de partijen elkaar vonden, en wat zij bereid zijn te delen.",
              ar: "قصةٌ شهرية لفرصةٍ أو تعاونٍ بدأ عبر DUKAAT: ما الذي كان مطلوباً، وكيف وجد الطرفان أحدهما الآخر، وما اتفقا على الإفصاح عنه.",
            },
          },
          {
            title: {
              en: "Member Spotlight",
              nl: "Member Spotlight",
              ar: "Member Spotlight",
            },
            body: {
              en: "A portrait of one member: the story behind the company, what it offers and what it is looking for. Being featured is open to Professional and Executive members.",
              nl: "Een portret van één lid: het verhaal achter het bedrijf, wat het aanbiedt en wat het zoekt. Open voor leden op de niveaus Professional en Executive.",
              ar: "التعريف بأحد أعضاء DUKAAT: قصته، وشركته، وما يقدّمه، وما يبحث عنه. والظهور فيه متاحٌ لأعضاء مستويَي Professional وExecutive.",
            },
          },
          {
            title: {
              en: "Success Stories",
              nl: "Succesverhalen",
              ar: "قصص النجاح",
            },
            body: {
              en: "Longer accounts of how a connection became business: the search, the introduction, the checks on both sides, and the first shipment or contract.",
              nl: "Langere verslagen van hoe een contact tot zaken leidde: de zoektocht, de introductie, de controles aan beide kanten, en de eerste zending of het eerste contract.",
              ar: "رواياتٌ أطول عن كيفية تحوّل صلةٍ إلى عمل تجاري: البحث، والتعريف، والتحقق لدى الطرفين، ثم الشحنة الأولى أو العقد الأول.",
            },
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 18. Partnerships and sponsorship */
  partnerships: {
    masthead: { variant: "portrait", photo: "par-hero", compact: true }, // UX-03
    headline: {
      en: "Let us build broader value together",
      nl: "Laten we samen bredere waarde opbouwen",
      ar: "لنبنِ قيمة أوسع معًا",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We seek to collaborate with companies, universities, training bodies, professional firms, economic institutions, exhibition organisers and service providers, to develop programmes and opportunities that serve the Dutch and Arab community.",
          nl: "We streven naar samenwerking met bedrijven, universiteiten, opleidingsinstanties, professionele kantoren, economische instellingen, beursorganisatoren en dienstverleners, om programma's en kansen te ontwikkelen die de Nederlandse en Arabische community dienen.",
          ar: "نسعى إلى التعاون مع الشركات والجامعات والجهات التدريبية والمكاتب المهنية والمؤسسات الاقتصادية ومنظمي المعارض ومقدمي الخدمات، لتطوير برامج وفرص تخدم المجتمع الهولندي والعربي.",
        },
      },
      {
        kind: "prose",
        heading: {
          en: "Partnerships",
          nl: "Partnerschappen",
          ar: "الشراكات",
        },
        body: [
          {
            en: "Collaboration can begin with specialist expertise, a training programme, a business meeting, a sector activity, or an initiative that serves students and professionals. We look for shared goals, clear roles and a beneficial experience for participants.",
            nl: "Een samenwerking kan beginnen met specialistische expertise, een opleidingsprogramma, een zakelijke bijeenkomst, een sectoractiviteit of een initiatief dat studenten en professionals dient. We zoeken naar gedeelde doelen, duidelijke rollen en een nuttige ervaring voor de deelnemers.",
            ar: "يمكن أن يبدأ التعاون بخبرة متخصصة، أو برنامج تدريبي، أو لقاء أعمال، أو نشاط قطاعي، أو مبادرة تخدم الطلاب والمهنيين. نبحث عن أهداف مشتركة وأدوار واضحة وتجربة مفيدة للمشاركين.",
          },
        ],
      },
      {
        kind: "prose",
        heading: {
          en: "Sponsorship",
          nl: "Sponsoring",
          ar: "الرعاية",
        },
        body: [
          {
            en: "Sponsoring programmes and events enables companies to support a specific activity and to introduce their brand to the relevant audience. The sponsorship proposal sets out the type of visibility, its duration, the channels and what delivery includes.",
            nl: "Sponsoring van programma's en evenementen stelt bedrijven in staat een specifieke activiteit te ondersteunen en hun merk bekend te maken bij het betreffende publiek. Het sponsorvoorstel geeft duidelijkheid over het soort zichtbaarheid, de duur ervan, de kanalen en wat de uitvoering omvat.",
            ar: "تتيح رعاية البرامج والفعاليات للشركات دعم نشاط محدد والتعريف بعلامتها أمام الجمهور المعني. يوضح عرض الرعاية نوع الظهور، ومدته، والقنوات، وما يشمله التنفيذ.",
          },
        ],
      },
      {
        kind: "terms",
        heading: {
          en: "Possible areas",
          nl: "Mogelijke terreinen",
          ar: "مجالات ممكنة",
        },
        items: [
          { en: "Courses and participation grants", nl: "Cursussen en deelnamebeurzen", ar: "دورات ومنح مشاركة" },
          { en: "Workshops", nl: "Workshops", ar: "ورش عمل" },
          { en: "Sector meetings", nl: "Sectorbijeenkomsten", ar: "لقاءات قطاعية" },
          { en: "Exhibitions and conferences", nl: "Beurzen en conferenties", ar: "معارض ومؤتمرات" },
          { en: "Reports", nl: "Rapporten", ar: "تقارير" },
          { en: "Trade delegations", nl: "Handelsdelegaties", ar: "وفود تجارية" },
        ],
      },
      {
        kind: "actions",
        links: [
          {
            href: "#partnership",
            label: {
              en: "Propose a partnership",
              nl: "Stel een partnerschap voor",
              ar: "اقترح شراكة",
            },
          },
          {
            href: "#partnership",
            label: {
              en: "Request a sponsorship proposal",
              nl: "Vraag een sponsorvoorstel aan",
              ar: "اطلب عرض رعاية",
            },
          },
        ],
      },
      {
        kind: "form",
        form: {
          id: "partnership",
          title: {
            en: "Have an idea for collaboration?",
            nl: "Heeft u een idee voor samenwerking?",
            ar: "لديك فكرة تعاون؟",
          },
          intro: {
            en: "Introduce us to your organisation, the audience you serve, what you can offer and the outcome you want to achieve. We will explore with you the possibility of developing a suitable collaboration.",
            nl: "Maak ons bekend met uw organisatie, het publiek dat u bedient, wat u kunt bieden en het resultaat dat u wilt bereiken. We onderzoeken samen met u de mogelijkheid om een passende samenwerking te ontwikkelen.",
            ar: "عرّفنا بمؤسستك، والجمهور الذي تخدمه، وما تستطيع تقديمه، والنتيجة التي تريد تحقيقها. سنبحث معك إمكان تطوير تعاون مناسب.",
          },
          fields: [
            {
              name: "organisation",
              required: true,
              label: {
                en: "Organisation",
                nl: "Organisatie",
                ar: "المؤسسة",
              },
            },
            {
              name: "country",
              label: {
                en: "Country",
                nl: "Land",
                ar: "الدولة",
              },
            },
            {
              name: "website",
              type: "url",
              label: {
                en: "Website",
                nl: "Website",
                ar: "الموقع الإلكتروني",
              },
            },
            {
              name: "contactPerson",
              required: true,
              label: {
                en: "Name of contact person",
                nl: "Naam van de verantwoordelijke",
                ar: "اسم المسؤول",
              },
            },
            {
              name: "email",
              type: "email",
              required: true,
              label: {
                en: "Email",
                nl: "E-mail",
                ar: "البريد",
              },
            },
            {
              name: "collaborationType",
              core: true, // UX-04
              label: {
                en: "Type of collaboration",
                nl: "Type samenwerking",
                ar: "نوع التعاون",
              },
            },
            {
              name: "idea",
              core: true, // UX-04
              type: "textarea",
              wide: true,
              label: {
                en: "Idea",
                nl: "Idee",
                ar: "الفكرة",
              },
            },
            {
              name: "audience",
              label: {
                en: "Target audience",
                nl: "Doelgroep",
                ar: "الجمهور المستهدف",
              },
            },
            {
              name: "period",
              label: {
                en: "Proposed period",
                nl: "Voorgestelde periode",
                ar: "الفترة المقترحة",
              },
            },
            {
              name: "attachments",
              type: "file",
              wide: true,
              label: {
                en: "Optional attachments",
                nl: "Optionele bijlagen",
                ar: "مرفقات اختيارية",
              },
            },
          ],
          common: "none",
          submit: {
            en: "Propose a partnership",
            nl: "Stel een partnerschap voor",
            ar: "اقترح شراكة",
          },
        },
      },
      /* kept extra (owner's choice), verbatim from 2336702: the Golden Ten, the ten principal sponsors */
      {
        kind: "register",
        cols: 2,
        numbered: true,
        label: {
          en: "Golden Ten",
          nl: "Golden Ten",
          ar: "Golden Ten",
        },
        heading: {
          en: "Ten places, *at the front.*",
          nl: "Tien plaatsen, *vooraan.*",
          ar: "عشرة مقاعد، *في الصدارة.*",
        },
        intro: {
          en: "The Golden Ten are the ten companies that support DUKAAT as its principal sponsors. There are never more than ten.",
          nl: "De Golden Ten zijn de tien bedrijven die DUKAAT steunen als hoofdsponsors. Het zijn er nooit meer dan tien.",
          ar: "Golden Ten هي الشركات العشر التي تدعم DUKAAT بوصفها رعاته الرئيسيين. ولا يزيد عددها على عشر أبداً.",
        },
        items: [
          {
            title: {
              en: "A place on this website",
              nl: "Een plaats op deze website",
              ar: "مكانٌ في هذا الموقع",
            },
            body: {
              en: "The company’s name and mark in a place of its own on the DUKAAT website, beside the programmes it supports.",
              nl: "Naam en beeldmerk van het bedrijf op een eigen plek op de website van DUKAAT, naast de programma’s die het steunt.",
              ar: "اسم الشركة وشعارها في موضعٍ خاص بها على موقع DUKAAT، إلى جانب البرامج التي تدعمها.",
            },
          },
          {
            title: {
              en: "Its story, told on the site",
              nl: "Het eigen verhaal, op de site",
              ar: "قصتها على الموقع",
            },
            body: {
              en: "A portrait of the company — what it makes, where it trades, what drives it — written with the company and published with its approval.",
              nl: "Een portret van het bedrijf — wat het maakt, waar het handelt, wat het drijft — samen met het bedrijf geschreven en met zijn goedkeuring gepubliceerd.",
              ar: "تعريفٌ بالشركة — ما تصنعه، وأين تتاجر، وما يحرّكها — يُكتب بالتعاون معها ويُنشر بموافقتها.",
            },
          },
          {
            title: {
              en: "Closer guidance",
              nl: "Nauwere begeleiding",
              ar: "مرافقةٌ أوثق",
            },
            body: {
              en: "More time from the DUKAAT team: a direct line, and support that reaches beyond what a membership level includes.",
              nl: "Meer tijd van het DUKAAT-team: een directe lijn, en ondersteuning die verder gaat dan wat een lidmaatschapsniveau omvat.",
              ar: "وقتٌ أكبر من فريق DUKAAT: خطٌّ مباشر، ودعمٌ يتجاوز ما يشمله مستوى العضوية.",
            },
          },
          {
            title: {
              en: "Presence at the programmes",
              nl: "Aanwezigheid bij de programma’s",
              ar: "حضورٌ في البرامج",
            },
            body: {
              en: "Visibility at the events, missions and reports the company chooses to support, agreed per programme.",
              nl: "Zichtbaarheid bij de evenementen, missies en rapporten die het bedrijf wil steunen, per programma afgesproken.",
              ar: "ظهورٌ في الفعاليات والبعثات والتقارير التي تختار الشركة دعمها، يُتّفق عليه لكل برنامج.",
            },
          },
        ],
      },
    ],
  },
};
