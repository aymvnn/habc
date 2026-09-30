import type { PageSet } from "./types";

/**
 * Services — the group overview and three of its pages.
 * Sources: owntext/DUKAAT_محتوى كتابة الموقع حديد _AR.md (ar, verbatim) and owntext/vertalingen/DUKAAT_Website_Copy_{NL,EN}_uit_AR.md
 * (nl, en, verbatim): section 3 (services/connect), 12 (services/matchmaking), 6 (services/advisory).
 * Editorial labels (Titel, Introductie, Toelichting bij de dienst, Knoppen, Kaart) and the implementation note of 12 are not published;
 * as that note asks, matchmaking is set as the working method of DUKAAT Connect (same eyebrow), not as a separate service.
 */
export const services: PageSet = {
  /* ------------------------------------------------------------------ overview */
  services: {
    masthead: { variant: "band", photo: "services-hero" },
    blocks: [{ kind: "index" }],
  },

  /* ------------------------------------------------------------------ 3 */
  "services/connect": {
    masthead: { variant: "portrait", photo: "trade-supplier" },
    eyebrow: { en: "DUKAAT Connect", nl: "DUKAAT Connect", ar: "DUKAAT Connect" },
    headline: {
      en: "Finding the right party starts with understanding your needs",
      nl: "De juiste partij begint bij het begrijpen van uw behoefte",
      ar: "الطرف المناسب يبدأ بفهم احتياجك",
    },
    lede: {
      en: "We help companies and entrepreneurs reach potential suppliers, buyers, distributors and partners, based on the nature of their activity, the market and the commercial objective.",
      nl: "Wij helpen bedrijven en ondernemers om potentiële leveranciers, kopers, distributeurs en partners te bereiken, op basis van de aard van de activiteiten, de markt en het commerciële doel.",
      ar: "نساعد الشركات وروّاد الأعمال على الوصول إلى مورّدين ومشترين وموزّعين وشركاء محتملين، بناءً على طبيعة النشاط والسوق والهدف التجاري.",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Start with two questions: What do I offer? And what am I looking for? Whether you are offering a product or a service, or looking for supply, distribution or collaboration, a clear answer helps direct the search and introductions towards the parties closest to your needs.",
          nl: "Begin met twee vragen: wat bied ik aan? En wat zoek ik? Of u nu een product of dienst aanbiedt, of op zoek bent naar toelevering, distributie of samenwerking: de duidelijkheid van dit antwoord helpt om de zoektocht en de kennismaking te richten op de partijen die het dichtst bij uw behoefte liggen.",
          ar: "ابدأ بسؤالين: ماذا أقدّم؟ وماذا أبحث عنه؟ سواء كنت تعرض منتجًا أو خدمة، أو تبحث عن توريد أو توزيع أو تعاون، يساعد وضوح هذه الإجابة على توجيه البحث والتعارف إلى الأطراف الأقرب لاحتياجك.",
        },
      },
      {
        kind: "register",
        heading: { en: "Who is this service for?", nl: "Voor wie is deze dienst?", ar: "لمن هذه الخدمة؟" },
        photo: "trade-distributor",
        items: [
          {
            title: {
              en: "A Dutch company looking for a distributor or importer in an Arab country.",
              nl: "Een Nederlands bedrijf dat een distributeur of importeur zoekt in een Arabisch land.",
              ar: "شركة هولندية تبحث عن موزّع أو مستورد في دولة عربية.",
            },
          },
          {
            title: {
              en: "An Arab company preparing to reach buyers in the Netherlands and Europe.",
              nl: "Een Arabisch bedrijf dat zich voorbereidt om kopers in Nederland en Europa te bereiken.",
              ar: "شركة عربية تستعد للوصول إلى مشترين في هولندا وأوروبا.",
            },
          },
          {
            title: {
              en: "An importer who needs a manufacturer or supplier meeting specific specifications.",
              nl: "Een importeur die een fabrikant of leverancier met vastgestelde specificaties nodig heeft.",
              ar: "مستورد يحتاج إلى مصنع أو مورّد بمواصفات محددة.",
            },
          },
          {
            title: {
              en: "A business owner looking for a commercial, technical or operational partner.",
              nl: "Een initiatiefnemer van een project die een commerciële, technische of operationele partner zoekt.",
              ar: "صاحب مشروع يبحث عن شريك تجاري أو تقني أو تشغيلي.",
            },
          },
          {
            title: {
              en: "A company looking for manufacturing under its own brand, or a new sales channel.",
              nl: "Een bedrijf dat productie onder eigen merk of een nieuw verkoopkanaal zoekt.",
              ar: "شركة تبحث عن تصنيع بعلامتها الخاصة أو قناة بيع جديدة.",
            },
          },
        ],
      },
      {
        kind: "steps",
        heading: { en: "How do we work?", nl: "Hoe werken wij?", ar: "كيف نعمل؟" },
        items: [
          {
            title: { en: "We understand the request", nl: "We begrijpen de aanvraag", ar: "نفهم الطلب" },
            body: {
              en: "the product or service, the sector, the country and the required specifications.",
              nl: "het product of de dienst, de sector, het land en de vereiste specificaties.",
              ar: "المنتج أو الخدمة، القطاع، الدولة، والمواصفات المطلوبة.",
            },
          },
          {
            title: { en: "We define the scope of assistance", nl: "We bepalen de omvang van de hulp", ar: "نحدد نطاق المساعدة" },
            body: {
              en: "what does the request need, and which service suits it?",
              nl: "wat is er voor de aanvraag nodig, en welke dienst past daarbij?",
              ar: "ما الذي يحتاجه الطلب، وما الخدمة المناسبة له؟",
            },
          },
          {
            title: { en: "We look for the fit", nl: "We zoeken naar aansluiting", ar: "نبحث عن الملاءمة" },
            body: {
              en: "we review the available parties and information against the agreed criteria.",
              nl: "we bekijken de beschikbare partijen en informatie aan de hand van de afgesproken criteria.",
              ar: "نراجع الأطراف والمعلومات المتاحة وفق المعايير المتفق عليها.",
            },
          },
          {
            title: { en: "We prepare the introduction", nl: "We bereiden de kennismaking voor", ar: "نهيئ التعارف" },
            body: {
              en: "where there is mutual interest, we help initiate contact with the consent of both parties.",
              nl: "bij wederzijdse interesse helpen we het contact op gang te brengen, met toestemming van beide partijen.",
              ar: "عند وجود اهتمام متبادل، نساعد على بدء التواصل بموافقة الطرفين.",
            },
          },
          {
            title: { en: "We arrange the next step", nl: "We regelen de volgende stap", ar: "نرتّب الخطوة التالية" },
            body: {
              en: "an introductory meeting, an exchange of information or a request for a quotation, depending on the case.",
              nl: "een kennismakingsgesprek, een informatie-uitwisseling of een offerteaanvraag, afhankelijk van de situatie.",
              ar: "اجتماع تعارفي، تبادل معلومات، أو طلب عرض، بحسب الحالة.",
            },
          },
        ],
      },
      {
        kind: "prose",
        heading: { en: "What makes a request stronger?", nl: "Wat maakt de aanvraag sterker?", ar: "ما الذي يجعل الطلب أقوى؟" },
        body: [
          {
            en: "Provide a clear description of what you need, the quantity or volume of work, the target country, the expected timing and what sets your offer apart. The more precise the information, the easier it becomes to assess the fit.",
            nl: "Geef een duidelijke beschrijving van wat u nodig heeft, de hoeveelheid of de omvang van het werk, het doelland, de verwachte datum en wat uw aanbod onderscheidt. Hoe nauwkeuriger de informatie, hoe eenvoudiger het wordt om de aansluiting te beoordelen.",
            ar: "قدّم وصفًا واضحًا لما تحتاجه، والكمية أو حجم العمل، والدولة المستهدفة، والموعد المتوقع، وما يميز عرضك. كلما كانت المعلومات أدق، أصبح تقييم الملاءمة أسهل.",
          },
        ],
        photo: "trade-samples",
        size: "tall",
      },
      {
        kind: "notice",
        body: [
          {
            en: "An introduction is a step towards exploring collaboration; concluding an agreement depends on both parties and their assessment of the terms and of the capacity to deliver. The scope of the search and follow-up is determined before the service begins.",
            nl: "Een kennismaking is een stap om samenwerking te verkennen; het sluiten van een overeenkomst hangt af van beide partijen en hun beoordeling van de voorwaarden en van het vermogen tot uitvoering. De omvang van de zoektocht en de opvolging wordt bepaald voordat de dienst start.",
            ar: "التعارف خطوة لبحث التعاون؛ إتمام الاتفاق يعتمد على الطرفين وتقييمهما للشروط والقدرة على التنفيذ. يتحدد نطاق البحث والمتابعة قبل بدء الخدمة.",
          },
        ],
      },
      {
        kind: "actions",
        links: [
          {
            href: "looking-for",
            label: { en: "Submit a business connection request", nl: "Vraag een zakelijke verbinding aan", ar: "قدّم طلب ربط أعمال" },
          },
          {
            href: "contact?subject=introductions#contact-form",
            label: { en: "Add what your company offers", nl: "Voeg toe wat uw bedrijf aanbiedt", ar: "أضف ما تقدّمه شركتك" },
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 12 */
  "services/matchmaking": {
    masthead: { variant: "plate", photo: "how-tea" },
    eyebrow: { en: "DUKAAT Connect", nl: "DUKAAT Connect", ar: "DUKAAT Connect" },
    headline: {
      en: "What do you offer? And what do you need?",
      nl: "Wat biedt u aan? En wat heeft u nodig?",
      ar: "ماذا تقدّم؟ وماذا تحتاج؟",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Business matchmaking starts by comparing your offer with the other party's needs, according to sector, product, market and type of collaboration. We review the available information to explore relevant introduction opportunities, then coordinate contact when there is consent and mutual interest.",
          nl: "Zakelijke matchmaking begint met het vergelijken van uw aanbod met de behoefte van de andere partij, op basis van sector, product, markt en type samenwerking. Wij bekijken de beschikbare informatie om relevante mogelijkheden tot kennismaking te onderzoeken, en coördineren vervolgens het contact wanneer er toestemming en wederzijdse interesse is.",
          ar: "تبدأ المطابقة التجارية من مقارنة عرضك باحتياج الطرف الآخر، وفق القطاع والمنتج والسوق ونوع التعاون. نراجع المعلومات المتاحة لبحث فرص تعارف ذات صلة، ثم ننسّق التواصل عند وجود موافقة واهتمام متبادل.",
        },
      },
      {
        kind: "register",
        cols: 2,
        items: [
          {
            title: { en: "I offer", nl: "Ik bied aan", ar: "أقدّم" },
            body: {
              en: "Introduce your products or services, the markets you can serve and what sets your collaboration apart.",
              nl: "Introduceer uw producten of diensten, de markten die u kunt bedienen en wat uw samenwerking onderscheidt.",
              ar: "عرّف بمنتجاتك أو خدماتك، والأسواق التي تستطيع خدمتها، وما يميز تعاونك.",
            },
          },
          {
            title: { en: "I need", nl: "Ik heb nodig", ar: "أحتاج" },
            body: {
              en: "Specify the type of party you are looking for, the country, the specifications and the outcome you want to achieve.",
              nl: "Vermeld het type partij dat u zoekt, het land, de specificaties en het resultaat dat u wilt bereiken.",
              ar: "حدّد نوع الطرف الذي تبحث عنه، والدولة، والمواصفات، والنتيجة التي تريد الوصول إليها.",
            },
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "Illustrative example", nl: "Voorbeeld ter illustratie", ar: "مثال توضيحي" },
        body: [
          {
            en: "A food manufacturer looking for a distributor in an Arab market, and a distribution company looking for products that suit its customers; whether an introduction is a good fit depends on the products, the market, the capacity and the terms.",
            nl: "Een voedingsmiddelenfabrikant die een distributeur zoekt in een Arabische markt, en een distributiebedrijf dat producten zoekt die bij zijn klanten passen; de geschiktheid van een kennismaking wordt bepaald aan de hand van de producten, de markt, de capaciteit en de voorwaarden.",
            ar: "مصنع أغذية يبحث عن موزّع في سوق عربي، وشركة توزيع تبحث عن منتجات تناسب عملاءها؛ تتحدد ملاءمة التعارف بحسب المنتجات والسوق والقدرة والشروط.",
          },
        ],
      },
      {
        kind: "actions",
        links: [
          {
            href: "looking-for#buyer",
            label: { en: "Add what you offer", nl: "Voeg toe wat u aanbiedt", ar: "أضف ما تقدّمه" },
          },
          {
            href: "looking-for#supplier",
            label: { en: "Add what you need", nl: "Voeg toe wat u nodig heeft", ar: "أضف ما تحتاجه" },
          },
          {
            href: "contact?subject=introductions#contact-form",
            label: { en: "Request help with matching", nl: "Vraag hulp bij de matchmaking", ar: "اطلب مساعدة في المطابقة" },
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 6 */
  "services/advisory": {
    masthead: { variant: "band", photo: "adv-hero" },
    eyebrow: { en: "DUKAAT Advisory", nl: "DUKAAT Advisory", ar: "DUKAAT Advisory" },
    headline: {
      en: "Greater clarity for the next step in your business",
      nl: "Meer duidelijkheid voor de volgende stap in uw onderneming",
      ar: "وضوح أكبر للخطوة التالية في أعمالك",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "You may need to understand a market, organise a commercial request, look for a partner or reach a specialist. We help you define your need and direct it to the right service, clarifying the scope and deliverables before work begins.",
          nl: "Mogelijk moet u een markt begrijpen, een commerciële aanvraag ordenen, een partner zoeken of een specialist bereiken. Wij helpen u uw behoefte te bepalen en die naar de passende dienst te leiden, waarbij wij de reikwijdte en de op te leveren resultaten vóór aanvang verduidelijken.",
          ar: "قد تحتاج إلى فهم سوق، أو تنظيم طلب تجاري، أو البحث عن شريك، أو الوصول إلى اختصاصي. نساعدك على تحديد احتياجك وتوجيهه إلى الخدمة المناسبة، مع توضيح النطاق والمخرجات قبل البدء.",
        },
      },
      {
        kind: "register",
        photo: "adv-specialist",
        items: [
          {
            title: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" },
            body: {
              en: "Identifying the market and potential customers, understanding sales channels, and preparing the questions and information needed to get started. An initial plan of action can be prepared, or a broader study coordinated, depending on the size of the project.",
              nl: "De markt en de potentiële klanten bepalen, de verkoopkanalen begrijpen en de vragen en informatie voorbereiden die nodig zijn om te beginnen. Er kan een eerste stappenplan worden opgesteld of een breder onderzoek worden gecoördineerd, afhankelijk van de omvang van het project.",
              ar: "تحديد السوق والعملاء المحتملين، وفهم قنوات البيع، وتجهيز الأسئلة والمعلومات اللازمة للبداية. ويمكن إعداد مسار عمل أولي، أو تنسيق دراسة أوسع وفق حجم المشروع.",
            },
          },
          {
            title: { en: "Finding suppliers and manufacturers", nl: "Zoeken naar leveranciers en fabrikanten", ar: "البحث عن المورّدين والمصنّعين" },
            body: {
              en: "Drafting specifications and selection criteria, and carrying out an initial search for sources of supply or manufacturing, including private-label manufacturing, raw materials and equipment.",
              nl: "Specificaties en selectiecriteria formuleren en een eerste zoektocht doen naar bronnen voor levering of productie, waaronder private-labelproductie, grondstoffen en apparatuur.",
              ar: "صياغة المواصفات ومعايير الاختيار، والبحث الأولي عن مصادر توريد أو تصنيع، بما في ذلك التصنيع بعلامة خاصة والمواد الأولية والمعدات.",
            },
          },
          {
            title: { en: "Finding distributors and partners", nl: "Zoeken naar distributeurs en partners", ar: "البحث عن الموزّعين والشركاء" },
            body: {
              en: "Defining the type of party sought, the country and the sector, and preparing the cooperation proposal; then researching potential parties and paving the way for contact when both fit and interest are present.",
              nl: "Het gewenste type partij, het land en de sector bepalen, het samenwerkingsvoorstel opstellen en vervolgens potentiële partijen onderzoeken en het contact voorbereiden wanneer er sprake is van aansluiting en interesse.",
              ar: "تحديد نوع الطرف المطلوب والدولة والقطاع، وتجهيز عرض التعاون، ثم بحث الأطراف المحتملة وتهيئة التواصل عند توفر الملاءمة والاهتمام.",
            },
          },
          {
            title: {
              en: "Developing the commercial presentation and marketing",
              nl: "Ontwikkeling van de commerciële presentatie en marketing",
              ar: "تطوير العرض التجاري والتسويق",
            },
            body: {
              en: "Improving the company introduction, the product presentation and sales messages, preparing for meetings and exhibitions, and thinking through how to reach customers in the target market.",
              nl: "De bedrijfsintroductie, de productpresentatie en de verkoopboodschappen verbeteren, zich voorbereiden op ontmoetingen en beurzen, en nadenken over de manier om klanten in de doelmarkt te bereiken.",
              ar: "تحسين التعريف بالشركة، وعرض المنتج، ورسائل المبيعات، والاستعداد للقاءات والمعارض، والتفكير في طريقة الوصول إلى العملاء في السوق المستهدف.",
            },
          },
          {
            title: { en: "Specialised consultancy", nl: "Gespecialiseerd advies", ar: "الاستشارات المتخصصة" },
            body: {
              en: "When a legal, tax, financial or technical opinion is needed, we work to coordinate access to a suitable specialist, depending on the country, the subject and the availability of the service. The proposal states the name of the service provider, the scope of their work and their fees.",
              nl: "Wanneer juridisch, fiscaal, financieel of technisch advies nodig is, werken wij eraan de toegang tot een passende specialist te coördineren, afhankelijk van het land, het onderwerp en de beschikbaarheid van de dienst. Het voorstel vermeldt de naam van de dienstverlener, de reikwijdte van diens werkzaamheden en het honorarium.",
              ar: "عند الحاجة إلى رأي قانوني أو ضريبي أو مالي أو فني، نعمل على تنسيق الوصول إلى مختص مناسب وفق الدولة والموضوع وتوفر الخدمة. يحدد العرض اسم مقدم الخدمة ونطاق عمله وأتعابه.",
            },
          },
          {
            title: { en: "Coordinating business requests", nl: "Coördinatie van zakelijke aanvragen", ar: "تنسيق طلبات الأعمال" },
            body: {
              en: "Tell us what you want to achieve, and we will help you structure the request and determine the priorities and the right path. This may include preparing for the meeting, organising information, and coordinating introductions and follow-up within an agreed scope.",
              nl: "Vertel ons wat u wilt bereiken, en wij helpen u de aanvraag op orde te brengen en de prioriteiten en de passende route te bepalen. Daarbij kan het gaan om de voorbereiding op een bespreking, het ordenen van informatie en het coördineren van kennismaking en opvolging, binnen een overeengekomen reikwijdte.",
              ar: "أخبرنا بما تريد تحقيقه، وسنساعدك على ترتيب الطلب وتحديد الأولويات والمسار المناسب. يمكن أن يشمل ذلك التحضير للاجتماع، وتنظيم المعلومات، وتنسيق التعارف والمتابعة ضمن نطاق متفق عليه.",
            },
          },
        ],
      },
      {
        kind: "actions",
        heading: { en: "How do you start?", nl: "Hoe begint u?", ar: "كيف تبدأ؟" },
        body: {
          en: "Send a brief description of your project, the target country, and the question or outcome you need. We review the request, then clarify the proposed service and its details.",
          nl: "Stuur een korte beschrijving van uw project, het doelland en de vraag of het resultaat dat u nodig hebt. Wij beoordelen de aanvraag en lichten daarna de voorgestelde dienst en de details ervan toe.",
          ar: "أرسل وصفًا مختصرًا لمشروعك، والدولة المستهدفة، والسؤال أو النتيجة التي تحتاجها. نراجع الطلب ثم نوضح الخدمة المقترحة وتفاصيلها.",
        },
        links: [
          {
            href: "contact?subject=consultancy#contact-form",
            label: { en: "Request a business service", nl: "Vraag een zakelijke dienst aan", ar: "اطلب خدمة أعمال" },
          },
          {
            href: "contact?subject=consultancy#contact-form",
            label: { en: "Request contact with a specialist", nl: "Vraag contact met een specialist aan", ar: "اطلب التواصل مع مختص" },
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ extra: representation (commit 2336702, services.ts) */
  "services/representation": {
    masthead: { variant: "plate", photo: "rep-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Before you open an office on the other side, you need someone there who answers in your name, attends the meetings, follows up, and tells you plainly what the market says.",
          nl: "Voordat u aan de andere kant een kantoor opent, hebt u daar iemand nodig die namens u antwoordt, de gesprekken voert, erachteraan gaat, en u zonder omwegen vertelt wat de markt zegt.",
          ar: "قبل أن تفتح مكتباً على الضفة الأخرى، تحتاج هناك إلى من يجيب باسمك، ويحضر اللقاءات، ويتابع، ويخبرك بصراحةٍ بما تقوله السوق.",
        },
      },
      {
        kind: "register",
        cols: 1,
        numbered: true,
        label: { en: "What it covers", nl: "Wat het omvat", ar: "ما يشمله" },
        heading: { en: "Present on the other side, *in your name.*", nl: "Aanwezig aan de andere kant, *namens u.*", ar: "حضورٌ على الضفة الأخرى، *باسمك.*" },
        intro: {
          en: "Representation bridges the period between a first order and your own office — or takes the place of an office where a market does not justify one. What it covers differs by region; depending on the market, it can include the following.",
          nl: "Vertegenwoordiging overbrugt de periode tussen een eerste order en een eigen kantoor — of neemt de plaats van dat kantoor in waar een markt er geen rechtvaardigt. Wat zij omvat, verschilt per regio; afhankelijk van de markt kan zij het volgende omvatten.",
          ar: "يسدّ التمثيل المرحلة الفاصلة بين الطلبية الأولى ومكتبك الخاص — أو يقوم مقام المكتب حين لا تبرّر السوق فتحه. ويختلف ما يشمله من منطقة إلى أخرى؛ وبحسب السوق، يمكن أن يشمل ما يلي.",
        },
        items: [
          {
            title: { en: "A local point of contact", nl: "Een lokaal aanspreekpunt", ar: "جهة اتصال محلية" },
            body: {
              en: "A point of contact in the market who receives enquiries for you, in the local language, and passes them on with the context you need.",
              nl: "Een aanspreekpunt in de markt dat vragen voor u ontvangt, in de lokale taal, en ze doorgeeft met de context die u nodig hebt.",
              ar: "جهةُ اتصالٍ في السوق تتلقى الاستفسارات نيابةً عنك، باللغة المحلية، وتنقلها إليك مع السياق الذي تحتاج إليه.",
            },
          },
          {
            title: { en: "Meetings on your behalf", nl: "Gesprekken namens u", ar: "لقاءات نيابةً عنك" },
            body: {
              en: "With prospective distributors, buyers and partners, within a mandate you set, followed by a written account of each meeting.",
              nl: "Met mogelijke distributeurs, kopers en partners, binnen een mandaat dat u bepaalt, gevolgd door een schriftelijk verslag van elk gesprek.",
              ar: "مع موزّعين ومشترين وشركاء محتملين، ضمن تفويضٍ تحدّده أنت، يعقبها تقريرٌ مكتوب عن كل لقاء.",
            },
          },
          {
            title: { en: "Follow-up on open points", nl: "Nalopen van open punten", ar: "متابعة المسائل المعلّقة" },
            body: {
              en: "Samples, quotations, documents and open questions pursued until there is an answer, so that a promising first contact does not go quiet.",
              nl: "Monsters, offertes, documenten en open vragen nagelopen tot er een antwoord is, zodat een veelbelovend eerste contact niet stilvalt.",
              ar: "العيّنات وعروض الأسعار والمستندات والأسئلة المعلّقة، نتابعها حتى يأتي الجواب، كي لا يخفت تواصلٌ أول واعد.",
            },
          },
          {
            title: { en: "Market feedback", nl: "Terugkoppeling uit de markt", ar: "ما تقوله السوق" },
            body: {
              en: "What buyers and distributors actually say about your product, price and terms — reported plainly, including what you may not want to hear.",
              nl: "Wat kopers en distributeurs werkelijk zeggen over uw product, prijs en voorwaarden — helder gerapporteerd, ook wat u liever niet hoort.",
              ar: "ما يقوله المشترون والموزّعون فعلاً عن منتجك وسعرك وشروطك — ننقله إليك بصراحة، بما في ذلك ما قد لا تودّ سماعه.",
            },
          },
          {
            title: { en: "Presence at trade fairs", nl: "Aanwezigheid op beurzen", ar: "الحضور في المعارض" },
            body: {
              en: "Attending fairs in that market on your behalf, or placing your products on a shared DUKAAT Pavilions stand beside other members.",
              nl: "Beurzen in die markt namens u bezoeken, of uw producten tonen op een gedeelde stand van DUKAAT Pavilions, naast andere leden.",
              ar: "حضور المعارض في تلك السوق نيابةً عنك، أو عرض منتجاتك في جناحٍ موحّد ضمن DUKAAT Pavilions، إلى جانب أعضاء آخرين.",
            },
          },
          {
            title: { en: "Coordination with local partners", nl: "Afstemming met lokale partners", ar: "التنسيق مع الشركاء المحليين" },
            body: {
              en: "Forwarders, customs brokers, lawyers and accountants on the ground, kept aligned so that your file moves as one.",
              nl: "Expediteurs, douane-expediteurs, advocaten en accountants ter plaatse, op elkaar afgestemd zodat uw dossier als één geheel beweegt.",
              ar: "وكلاء الشحن والمخلّصون الجمركيون والمحامون والمحاسبون على الأرض، ننسّق بينهم حتى يتقدّم ملفك كتلةً واحدة.",
            },
          },
        ],
      },
      {
        kind: "prose",
        photo: "rep-window",
        size: "tall",
        side: "start",
        label: { en: "Per region", nl: "Per regio", ar: "بحسب المنطقة" },
        heading: { en: "Shaped by *the region.*", nl: "Afgestemd op *de regio.*", ar: "يتشكّل *بحسب المنطقة.*" },
        body: [
          {
            en: "Representation differs from region to region: what a market asks for, who is on the ground and how business is done there. Each engagement is therefore shaped for the market concerned, drawing on DUKAAT’s ambassadors, members and partners where they are present.",
            nl: "Vertegenwoordiging verschilt per regio: wat een markt vraagt, wie er ter plaatse is en hoe daar zaken worden gedaan. Elke opdracht wordt daarom afgestemd op de markt in kwestie, met de ambassadeurs, leden en partners van DUKAAT waar zij aanwezig zijn.",
            ar: "يختلف التمثيل من منطقة إلى أخرى: بحسب ما تتطلبه السوق، ومَن يوجد على الأرض، وكيف تُدار الأعمال هناك. لذلك تُصمَّم كل مهمة للسوق المعنية، مستعينةً بسفراء DUKAAT وأعضائه وشركائه حيثما وُجدوا.",
          },
          {
            en: "Representation draws on that network. The person who speaks for you in a market knows it from the inside: its buyers, its habits and its language.",
            nl: "Vertegenwoordiging steunt op dat netwerk. Wie in een markt namens u spreekt, kent die markt van binnenuit: de kopers, de gewoonten en de taal.",
            ar: "ويستند التمثيل إلى هذه الشبكة. فمن يتحدث باسمك في سوقٍ ما يعرفها من الداخل: مشتريها، وأعرافها، ولغتها.",
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "The mandate", nl: "Het mandaat", ar: "التفويض" },
        body: [
          {
            en: "The scope and authority of each representation are agreed in writing per engagement: which market, which tasks, what may be said in your name, and for how long. Nothing is agreed or signed on your behalf outside that written mandate.",
            nl: "Reikwijdte en bevoegdheid van elke vertegenwoordiging worden per opdracht schriftelijk vastgelegd: welke markt, welke taken, wat er namens u mag worden gezegd, en voor hoe lang. Buiten dat schriftelijke mandaat wordt niets namens u toegezegd of getekend.",
            ar: "يُتَّفق كتابةً، في كل مهمة، على نطاق التمثيل وصلاحياته: أيّ سوق، وأيّ مهام، وما يجوز قوله باسمك، ولأيّ مدة. ولا يُتعهَّد بشيءٍ ولا يُوقَّع على شيءٍ نيابةً عنك خارج هذا التفويض المكتوب.",
          },
          {
            en: "Representation is a project service, quoted per engagement in writing. No hidden commissions.",
            nl: "Vertegenwoordiging is een projectdienst en wordt per opdracht schriftelijk geoffreerd. Geen verborgen commissies.",
            ar: "التمثيل خدمةٌ من خدمات المشاريع، تُعرض كلفتها كتابةً لكل مهمة على حدة. لا عمولات خفية.",
          },
        ],
      },
      {
        kind: "actions",
        heading: { en: "A presence *before an office.*", nl: "Aanwezig *vóór een kantoor.*", ar: "حضورٌ *قبل المكتب.*" },
        links: [
          { href: "membership/ambassadors", label: { en: "Ambassadors", nl: "Ambassadeurs", ar: "السفراء" } },
          { href: "services/advisory", label: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" } },
          { href: "contact?subject=introductions#contact-form", label: { en: "I want to enter a new market", nl: "Ik wil een nieuwe markt betreden", ar: "أريد دخول سوق جديدة" } },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ extra: documents, customs & logistics (commit 2336702, services.ts) */
  "services/documents": {
    masthead: { variant: "portrait", photo: "docs-desk" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Between a signed order and goods on a quay lies a file of certificates, freight bookings, customs declarations and payment terms. We coordinate that file with the right specialists, so a first deal does not stall on paper.",
          nl: "Tussen een getekende order en goederen op de kade ligt een dossier van certificaten, vrachtboekingen, douaneaangiften en betalingscondities. Wij coördineren dat dossier met de juiste specialisten, zodat een eerste deal niet strandt op papier.",
          ar: "بين طلبيةٍ موقّعة وبضائع على الرصيف ملفٌّ كامل من الشهادات وحجوزات الشحن والبيانات الجمركية وشروط الدفع. ننسّق هذا الملف مع المختصين المناسبين، حتى لا تتعثّر الصفقة الأولى بسبب الأوراق.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "The file", nl: "Het dossier", ar: "الملف" },
        heading: { en: "What we arrange *with you.*", nl: "Wat wij *met u regelen.*", ar: "ما نرتّبه *معك.*" },
        intro: {
          en: "DUKAAT is not a forwarder, a customs broker or a bank. We know which specialist each step needs, bring them in, and keep the file moving until it is complete.",
          nl: "DUKAAT is geen expediteur, douane-expediteur of bank. Wij weten welke specialist elke stap vraagt, halen die erbij en houden het dossier in beweging tot het compleet is.",
          ar: "DUKAAT ليس وكيل شحن ولا مخلّصاً جمركياً ولا مصرفاً. نعرف أيّ مختص تحتاج إليه كل خطوة، فنستعين به، ونحرص على ألا يتوقف الملف حتى يكتمل.",
        },
        items: [
          {
            title: { en: "Certificates of origin", nl: "Certificaten van oorsprong", ar: "شهادات المنشأ" },
            body: {
              en: "The document that establishes where goods were made, and with it the duties and trade preferences that apply on arrival.",
              nl: "Het document dat vastlegt waar goederen zijn gemaakt, en daarmee welke invoerrechten en handelspreferenties bij aankomst gelden.",
              ar: "الوثيقة التي تُثبت مكان صنع البضائع، وبها تتحدد الرسوم الجمركية والأفضليات التجارية التي تسري عند الوصول.",
            },
          },
          {
            title: { en: "Health and halal certificates", nl: "Gezondheids- en halalcertificaten", ar: "الشهادات الصحية وشهادات الحلال" },
            body: {
              en: "Health and veterinary certificates for food and agricultural goods, and halal certification from a recognised body wherever the market requires it.",
              nl: "Gezondheids- en veterinaire certificaten voor voedings- en landbouwproducten, en halalcertificering door een erkende instantie waar de markt dat vereist.",
              ar: "الشهادات الصحية والبيطرية للأغذية والمنتجات الزراعية، وشهادة الحلال من جهةٍ معتمدة حيثما تشترطها السوق.",
            },
          },
          {
            title: { en: "Product conformity", nl: "Productconformiteit", ar: "مطابقة المنتج" },
            body: {
              en: "Conformity certificates, test reports and markings such as CE, prepared before shipment rather than requested at the border.",
              nl: "Conformiteitscertificaten, testrapporten en markeringen zoals CE, voorbereid vóór verzending in plaats van opgevraagd aan de grens.",
              ar: "شهادات المطابقة، وتقارير الاختبار، والعلامات مثل علامة CE، تُعَدّ قبل الشحن بدلاً من أن تُطلب عند الحدود.",
            },
          },
          {
            title: { en: "Commercial documents", nl: "Handelsdocumenten", ar: "المستندات التجارية" },
            body: {
              en: "Invoice, packing list and bill of lading, consistent with one another and, where there is one, with the letter of credit.",
              nl: "Factuur, paklijst en cognossement, onderling consistent en, als er een is, in lijn met het documentair krediet.",
              ar: "الفاتورة وقائمة التعبئة وبوليصة الشحن، متّسقةً فيما بينها، ومع الاعتماد المستندي إن وُجد.",
            },
          },
          {
            title: { en: "Freight and forwarding", nl: "Vracht en expeditie", ar: "الشحن ووكلاء الشحن" },
            body: {
              en: "Sea, air and road freight booked through established forwarders, with Rotterdam as the natural gateway into Europe.",
              nl: "Zee-, lucht- en wegvracht, geboekt via gevestigde expediteurs, met Rotterdam als natuurlijke toegangspoort tot Europa.",
              ar: "شحنٌ بحري وجوي وبري يُحجز عبر وكلاء شحن راسخين، وروتردام بوابته الطبيعية إلى أوروبا.",
            },
          },
          {
            title: { en: "Customs clearance", nl: "Douaneafhandeling", ar: "التخليص الجمركي" },
            body: {
              en: "Declarations, tariff classification and duties on both sides, handled by licensed customs brokers.",
              nl: "Aangiften, tariefindeling en rechten aan beide kanten, afgehandeld door erkende douane-expediteurs.",
              ar: "البيانات الجمركية، والتصنيف الجمركي، والرسوم على الجانبين، يتولاها مخلّصون جمركيون مرخّصون.",
            },
          },
          {
            title: { en: "Delivery terms (Incoterms)", nl: "Leveringsvoorwaarden (Incoterms)", ar: "شروط التسليم (Incoterms)" },
            body: {
              en: "Who pays for what, and where the risk passes from seller to buyer: agreed explicitly in the contract rather than assumed.",
              nl: "Wie wat betaalt, en waar het risico van verkoper op koper overgaat: uitdrukkelijk in het contract vastgelegd, niet verondersteld.",
              ar: "مَن يتحمّل أيّ تكلفة، وأين تنتقل المخاطر من البائع إلى المشتري: يُنصّ على ذلك صراحةً في العقد، ولا يُترك للافتراض.",
            },
          },
          {
            title: { en: "Payment terms", nl: "Betalingscondities", ar: "شروط الدفع" },
            body: {
              en: "Letter of credit, documentary collection, notary or licensed escrow: the method that fits the deal, agreed in writing before goods move.",
              nl: "Documentair krediet, documentaire incasso, notaris of een escrowdienst met vergunning: de methode die bij de deal past, schriftelijk vastgelegd voordat de goederen worden verzonden.",
              ar: "الاعتماد المستندي، أو التحصيل المستندي، أو كاتب العدل، أو حساب ضمانٍ (Escrow) لدى جهة مرخّصة: الطريقة التي تناسب الصفقة، يُتَّفق عليها كتابةً قبل أن تتحرك البضائع.",
            },
          },
        ],
      },
      {
        kind: "band",
        photo: "docs-dock",
        caption: {
          en: "We sit next to Rotterdam, Europe’s largest port. Here the paperwork and the quay are never far apart.",
          nl: "Wij zitten naast Rotterdam, de grootste haven van Europa. Hier liggen het papierwerk en de kade nooit ver uit elkaar.",
          ar: "نجلس بجوار روتردام، أكبر موانئ أوروبا. وهنا لا تبعد الأوراق عن الرصيف كثيراً.",
        },
      },
      {
        kind: "notice",
        label: { en: "Payments", nl: "Betalingen", ar: "المدفوعات" },
        body: [
          {
            en: "Payments never run through DUKAAT. The money moves directly between buyer and seller, or through the bank, notary or licensed escrow provider the parties choose.",
            nl: "Betalingen lopen nooit via DUKAAT. Het geld gaat rechtstreeks van koper naar verkoper, of via de bank, de notaris of de escrowdienst met vergunning die de partijen zelf kiezen.",
            ar: "لا تمرّ المدفوعات عبر DUKAAT أبداً. ينتقل المال مباشرةً بين المشتري والبائع، أو عبر المصرف أو كاتب العدل أو مزوّد خدمات حساب الضمان المرخّص الذي يختاره الطرفان.",
          },
          {
            en: "We do not take custody of members’ funds, we do not act as a bank or payment provider, and we do not guarantee any transaction between members.",
            nl: "Wij nemen geen gelden van leden in bewaring, wij treden niet op als bank of betaaldienstverlener, en wij garanderen geen enkele transactie tussen leden.",
            ar: "نحن لا نحتفظ بأموال الأعضاء، ولا نعمل كمصرف أو مزوّد خدمات دفع، ولا نضمن أي معاملة بين الأعضاء.",
          },
        ],
      },
      {
        kind: "statement",
        text: {
          en: "Our part ends with the first landed shipment or the first signed contract. The trade that follows is yours.",
          nl: "Ons deel eindigt bij de eerste gelande zending of het eerste getekende contract. De handel die volgt, is van u.",
          ar: "ينتهي دورنا عند وصول الشحنة الأولى أو توقيع العقد الأول. وما يليها من تجارة فهو لك.",
        },
      },
      {
        kind: "actions",
        heading: { en: "The limits of *our role.*", nl: "De grenzen van *onze rol.*", ar: "حدود *دورنا.*" },
        links: [
          { href: "services/boundaries", label: { en: "What we do not do", nl: "Wat wij niet doen", ar: "ما لا نفعله" } },
          { href: "services/advisory", label: { en: "Specialist advice", nl: "Specialistisch advies", ar: "الاستشارات المتخصصة" } },
          { href: "services/connect", label: { en: "Sourcing & distribution", nl: "Inkoop & distributie", ar: "التوريد والتوزيع" } },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ extra: what we do not do (commit 2336702, how.ts "how-we-work/boundaries") */
  "services/boundaries": {
    masthead: { variant: "plate", photo: "bnd-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We do not take custody of members’ funds, we do not act as a bank or payment provider, and we do not guarantee any transaction between members.",
          nl: "Wij nemen geen gelden van leden in bewaring, wij treden niet op als bank of betaaldienstverlener, en wij garanderen geen enkele transactie tussen leden.",
          ar: "نحن لا نحتفظ بأموال الأعضاء، ولا نعمل كمصرف أو مزوّد خدمات دفع، ولا نضمن أي معاملة بين الأعضاء.",
        },
      },
      {
        kind: "register",
        numbered: true,
        cols: 2,
        label: { en: "Boundaries", nl: "Grenzen", ar: "الحدود" },
        heading: { en: "Lines we do *not cross.*", nl: "Grenzen die wij *niet overschrijden.*", ar: "حدودٌ *لا نتجاوزها.*" },
        intro: {
          en: "Each of them protects the same thing: that an introduction from DUKAAT means exactly what it says, and nothing more.",
          nl: "Elk van deze grenzen beschermt hetzelfde: dat een introductie van DUKAAT precies betekent wat zij zegt, en niets meer.",
          ar: "كلٌّ منها يحمي الأمر نفسه: أن يعني التعريفُ الصادر عن DUKAAT ما يقوله بالضبط، ولا شيء أكثر.",
        },
        items: [
          {
            title: { en: "No custody of members’ money", nl: "Geen gelden van leden in bewaring", ar: "لا نحتفظ بأموال الأعضاء" },
            body: {
              en: "Payments between members never pass through DUKAAT. We hold no client accounts, no deposits and no funds in escrow on anyone’s behalf.",
              nl: "Betalingen tussen leden lopen nooit via DUKAAT. Wij houden geen klantrekeningen aan, nemen geen deposito’s aan en beheren voor niemand derdengelden.",
              ar: "لا تمرّ المدفوعات بين الأعضاء عبر DUKAAT أبداً. فليست لدينا حسابات لأموال العملاء، ولا نتلقى ودائع، ولا نحتفظ بأموال في حساب ضمان لصالح أحد.",
            },
          },
          {
            title: { en: "Not a bank or payment provider", nl: "Geen bank of betaaldienstverlener", ar: "لسنا مصرفاً ولا مزوّد خدمات دفع" },
            body: {
              en: "We do not transfer, collect or exchange money for anyone, we do not lend, and we issue no payment instruments.",
              nl: "Wij maken voor niemand geld over, innen of wisselen geen geld voor derden, verstrekken geen leningen en geven geen betaalinstrumenten uit.",
              ar: "لا نحوّل الأموال ولا نحصّلها ولا نصرف العملات لحساب أحد، ولا نمنح قروضاً، ولا نُصدر أدوات دفع.",
            },
          },
          {
            title: { en: "No guarantee on transactions between members", nl: "Geen garantie op transacties tussen leden", ar: "لا ضمان للمعاملات بين الأعضاء" },
            body: {
              en: "We verify and introduce; we do not stand surety for delivery, quality or payment. The decision to transact, and its risk, stay with the parties.",
              nl: "Wij verifiëren en introduceren; wij staan niet in voor levering, kwaliteit of betaling. De beslissing om zaken te doen, en het risico daarvan, blijven bij de partijen.",
              ar: "نتحقق ونعرّف؛ لكننا لا نكفل التسليم ولا الجودة ولا السداد. ويبقى قرار التعامل، ومخاطره، على عاتق الطرفين.",
            },
          },
          {
            title: { en: "No investment advice, arranging or brokering", nl: "Geen beleggingsadvies of bemiddeling", ar: "لا استشارة استثمارية، ولا ترتيب ولا وساطة" },
            body: {
              en: "DUKAAT does not provide investment advice, does not arrange or broker investments, and does not offer securities. Opportunities are presented for information only. Independent legal, financial and technical due diligence remains essential before any investment decision.",
              nl: "DUKAAT geeft geen beleggingsadvies, bemiddelt niet bij investeringen en biedt geen effecten aan. Kansen worden uitsluitend ter informatie gepresenteerd. Onafhankelijk juridisch, financieel en technisch onderzoek blijft essentieel vóór elke investeringsbeslissing.",
              ar: "لا يقدّم DUKAAT استشارات استثمارية، ولا يرتّب الاستثمارات أو يتوسط فيها، ولا يعرض أوراقاً مالية. تُعرض الفرص للاطلاع فقط. ويبقى الفحص النافي للجهالة القانوني والمالي والفني المستقل ضرورياً قبل أي قرار استثماري.",
            },
          },
          {
            title: { en: "Not an official chamber of commerce", nl: "Geen officiële kamer van koophandel", ar: "لسنا غرفة تجارة رسمية" },
            body: {
              en: "DUKAAT is a private club, and the foundation behind it has no public-law status. We represent no government and issue no official documents — we help you obtain them from the bodies that do.",
              nl: "DUKAAT is een besloten club, en de stichting erachter heeft geen publiekrechtelijke status. Wij vertegenwoordigen geen overheid en geven geen officiële documenten af — wij helpen u ze te verkrijgen bij de instanties die dat wel doen.",
              ar: "DUKAAT نادٍ خاص، والمؤسسة التي يتبع لها ليست جهةً من جهات القانون العام. لا نمثّل أي حكومة ولا نُصدر وثائق رسمية — بل نساعدك على استخراجها من الجهات المختصة بإصدارها.",
            },
          },
          {
            title: { en: "We do not send lists", nl: "Wij sturen geen lijsten", ar: "لا نرسل قوائم" },
            body: {
              en: "No database extracts and no lists of names. A person reviews every match, and what you receive is an introduction, not a spreadsheet.",
              nl: "Geen uittreksels uit een database en geen namenlijsten. Een mens beoordeelt elke match, en wat u ontvangt is een introductie, geen bestand.",
              ar: "لا مستخرجات من قواعد البيانات ولا قوائم أسماء. يراجع إنسانٌ كل مطابقة، وما يصلك هو تعريف، لا جدول بيانات.",
            },
          },
          {
            title: { en: "Nothing published without consent", nl: "Niets gepubliceerd zonder toestemming", ar: "لا ننشر شيئاً دون موافقة" },
            body: {
              en: "We publish nothing about a member — profile, request, deal or story — without that member’s explicit consent, and consent can be withdrawn at any time.",
              nl: "Wij publiceren niets over een lid — profiel, verzoek, deal of verhaal — zonder uitdrukkelijke toestemming van dat lid, en die toestemming kan op elk moment worden ingetrokken.",
              ar: "لا ننشر شيئاً عن أي عضو — ملفاً أو طلباً أو صفقةً أو قصة — دون موافقته الصريحة، ويجوز له سحب هذه الموافقة في أي وقت.",
            },
          },
          {
            title: { en: "No hidden commissions", nl: "Geen verborgen commissies", ar: "لا عمولات خفية" },
            body: {
              en: "Neither side of a deal between members pays us anything it does not know about. Every fee has a written basis, agreed in advance.",
              nl: "Geen van beide kanten van een deal tussen leden betaalt ons iets waarvan zij niet weet. Elke vergoeding heeft een schriftelijke grondslag die vooraf is afgesproken.",
              ar: "لا يدفع لنا أيٌّ من طرفي صفقةٍ بين الأعضاء شيئاً لا يعلم به. ولكل ما نتقاضاه أساسٌ مكتوب يُتّفق عليه مسبقاً.",
            },
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "Payments", nl: "Betalingen", ar: "المدفوعات" },
        heading: { en: "How the money *moves instead.*", nl: "Hoe het geld *dan wel loopt.*", ar: "كيف تنتقل الأموال *دون أن تمرّ بنا.*" },
        body: [
          {
            en: "Money between members moves directly between the parties, through instruments built for the purpose. For goods, that is usually a letter of credit issued by the buyer’s bank, or a documentary collection in which the banks release the shipping documents against payment or acceptance.",
            nl: "Geld tussen leden loopt rechtstreeks tussen de partijen, via instrumenten die daarvoor zijn gemaakt. Bij goederen is dat meestal een documentair krediet (letter of credit) van de bank van de koper, of een documentair incasso waarbij de banken de verschepingsdocumenten vrijgeven tegen betaling of acceptatie.",
            ar: "تنتقل أموال الأعضاء مباشرةً بين طرفي الصفقة، عبر أدواتٍ صُمّمت لهذا الغرض. ففي تجارة البضائع يكون ذلك عادةً اعتماداً مستندياً يُصدره مصرف المشتري، أو تحصيلاً مستندياً تُسلِّم فيه المصارف مستندات الشحن مقابل الدفع أو القبول.",
          },
          {
            en: "For property or company transactions, a civil-law notary or a licensed escrow provider holds the funds until the agreed conditions are met. We help members choose the instrument that fits the deal and go through the documents with them. The money itself never touches DUKAAT.",
            nl: "Bij vastgoed- of bedrijfstransacties houdt een notaris of een escrowdienst met vergunning de gelden aan tot aan de afgesproken voorwaarden is voldaan. Wij helpen leden het instrument te kiezen dat bij de deal past en lopen de stukken met hen door. Het geld zelf komt nooit bij DUKAAT.",
            ar: "أما في صفقات العقارات أو الشركات، فيحتفظ كاتب العدل أو مزوّدٌ مرخّص لحسابات الضمان (escrow) بالأموال إلى أن تتحقق الشروط المتفق عليها. ونساعد الأعضاء على اختيار الأداة التي تناسب الصفقة، ونراجع المستندات معهم. والمال نفسه لا يمرّ بـDUKAAT أبداً.",
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "Before any introduction", nl: "Vóór elke introductie", ar: "قبل أي تعريف" },
        body: [
          {
            en: "Before any introduction, we establish the identity of the parties we introduce and check them against international sanctions lists. Where a check raises a question we cannot resolve, there is no introduction.",
            nl: "Vóór elke introductie stellen wij de identiteit vast van de partijen die wij introduceren en toetsen wij hen aan internationale sanctielijsten. Roept een controle een vraag op die wij niet kunnen beantwoorden, dan volgt er geen introductie.",
            ar: "قبل أي تعريف، نتثبّت من هوية الأطراف التي نعرّف بعضها ببعض، ونطابقها بقوائم العقوبات الدولية. وإذا أثار الفحص مسألةً لا نستطيع حسمها، فلا تعريف.",
          },
          {
            en: "For this purpose we may ask who owns and controls a company. What we collect is kept confidential and processed in accordance with the GDPR.",
            nl: "Daartoe kunnen wij vragen wie een bedrijf bezit en er zeggenschap over heeft. Wat wij verzamelen, blijft vertrouwelijk en wordt verwerkt conform de AVG.",
            ar: "ولهذا الغرض قد نسأل عمّن يملك الشركة ويسيطر عليها. ونحفظ ما نجمعه بسرية، ونعالجه وفقاً للائحة العامة لحماية البيانات (GDPR).",
          },
          {
            en: "We comply with the sanctions and anti-money-laundering rules that apply to our work, in the Netherlands and internationally.",
            nl: "Wij houden ons aan de sanctie- en antiwitwasregels die op ons werk van toepassing zijn, in Nederland en internationaal.",
            ar: "ونلتزم بقواعد العقوبات ومكافحة غسل الأموال التي تسري على عملنا، في هولندا وعلى الصعيد الدولي.",
          },
        ],
      },
      {
        kind: "actions",
        heading: { en: "The rest, *answered plainly.*", nl: "De rest, *helder beantwoord.*", ar: "وسائر الأسئلة، *بإجاباتٍ واضحة.*" },
        links: [
          { href: "faq", label: { en: "Frequently asked questions", nl: "Veelgestelde vragen", ar: "الأسئلة الشائعة" } },
          { href: "services/documents", label: { en: "Documents, customs & logistics", nl: "Documenten, douane & logistiek", ar: "المستندات والجمارك واللوجستيات" } },
          { href: "membership/admission", label: { en: "Verification & admission", nl: "Verificatie & toelating", ar: "التحقق والقبول" } },
        ],
      },
    ],
  },
};
