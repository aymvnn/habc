import type { PageSet } from "./types";

/**
 * Contact (source 19), "What are you looking for?" (source 10) and the frequently asked questions (source 20).
 * AR verbatim from the Arabic master; NL and EN verbatim from owntext/vertalingen/. Editorial labels of the source
 * ("Titel", "Knop", "Specifieke velden", "Tekst in het berichtveld", "Succesbericht", "Contactgegevens die vóór publicatie
 * worden aangevuld" …) are not published. The shared fields, note, acknowledgement, opt-in and confirmation of source 10
 * are added by the site (lib/forms.ts, content/{en,nl,ar}.ts).
 */
export const contact: PageSet = {
  contact: {
    masthead: { variant: "plate", photo: "contact-hero" },
    headline: {
      en: "What do you want to achieve?",
      nl: "Wat wilt u bereiken?",
      ar: "ماذا تريد أن تحقق؟",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Do you have a product, a project, an idea for collaboration or a market you want to reach? Tell us about your goal and we will help you identify the right starting point within DUKAAT.",
          nl: "Heeft u een product, een project, een samenwerkingsidee of een markt die u wilt bereiken? Vertel ons over uw doel, dan helpen wij u het passende startpunt binnen DUKAAT te bepalen.",
          ar: "لديك منتج، أو مشروع، أو فكرة تعاون، أو سوق تريد الوصول إليه؟ أخبرنا عن هدفك وسنساعدك على تحديد نقطة البداية المناسبة داخل دوكات.",
        },
      },
      {
        kind: "form",
        form: {
          id: "contact-form",
          common: "none",
          fields: [
            {
              name: "name",
              label: { en: "Full name", nl: "Volledige naam", ar: "الاسم الكامل" },
              type: "text",
              required: true,
            },
            {
              name: "company",
              label: {
                en: "Company or organisation (if any)",
                nl: "Bedrijf of organisatie (indien van toepassing)",
                ar: "الشركة أو المؤسسة إن وجدت",
              },
              type: "text",
            },
            {
              name: "country",
              label: { en: "Country", nl: "Land", ar: "الدولة" },
              type: "text",
            },
            {
              name: "email",
              label: { en: "Email address", nl: "E-mailadres", ar: "البريد الإلكتروني" },
              type: "email",
              required: true,
            },
            {
              name: "phone",
              label: { en: "Phone (optional)", nl: "Telefoon (optioneel)", ar: "الهاتف اختياريًا" },
              type: "tel",
            },
            {
              name: "subject",
              label: { en: "Subject", nl: "Onderwerp", ar: "الموضوع" },
              type: "select",
              required: true,
              options: [
                { en: "Membership", nl: "Lidmaatschap", ar: "العضوية" },
                { en: "Connecting businesses", nl: "Zakelijke verbinding", ar: "ربط الأعمال" },
                { en: "Training", nl: "Training", ar: "التدريب" },
                { en: "Workshops and events", nl: "Workshops en evenementen", ar: "ورش العمل والفعاليات" },
                { en: "Consultancy", nl: "Advies", ar: "الاستشارات" },
                { en: "Market and purchase requests", nl: "Markt en inkoopaanvragen", ar: "السوق وطلبات الشراء" },
                { en: "Investment", nl: "Investering", ar: "الاستثمار" },
                { en: "Trade delegations", nl: "Handelsdelegaties", ar: "الوفود التجارية" },
                { en: "Partnerships", nl: "Partnerschappen", ar: "الشراكات" },
                { en: "Sponsorship", nl: "Sponsoring", ar: "الرعاية" },
                { en: "Media", nl: "Media", ar: "الإعلام" },
                { en: "Other topic", nl: "Ander onderwerp", ar: "موضوع آخر" },
                { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" },
              ],
              values: ["membership", "introductions", "training", "events", "consultancy", "market", "investment", "missions", "partnerships", "sponsoring", "media", "other", "nominated"],
            },
            {
              name: "message",
              label: { en: "Message", nl: "Bericht", ar: "الرسالة" },
              type: "textarea",
              required: true,
              placeholder: {
                en: "Briefly explain what you offer, what you need, and the country or sector you are interested in.",
                nl: "Leg kort uit wat u aanbiedt, wat u nodig heeft en welk land of welke sector u interesseert.",
                ar: "اشرح باختصار ما تقدّمه، وما تحتاجه، والدولة أو القطاع الذي يهمك.",
              },
            },
            {
              name: "attachment",
              label: { en: "Optional attachment", nl: "Optionele bijlage", ar: "المرفق الاختياري" },
              type: "file",
              wide: true,
            },
            {
              name: "language",
              label: {
                en: "Preferred language of communication",
                nl: "Voorkeurstaal voor communicatie",
                ar: "لغة التواصل المفضلة",
              },
              type: "select",
              options: [
                { en: "العربية", nl: "العربية", ar: "العربية" },
                { en: "English", nl: "English", ar: "English" },
                { en: "Nederlands", nl: "Nederlands", ar: "Nederlands" },
              ],
            },
          ],
          submit: { en: "Send your message", nl: "Verstuur uw bericht", ar: "أرسل رسالتك" },
          success: {
            en: "Thank you for contacting DUKAAT. Your message has reached us and we will review it in order to direct it to the right path.",
            nl: "Dank u wel dat u contact met DUKAAT heeft opgenomen. Uw bericht is ontvangen; wij bekijken het om het naar het passende traject door te leiden.",
            ar: "شكرًا لتواصلك مع دوكات. وصلت رسالتك وسنراجعها لتوجيهها إلى المسار المناسب.",
          },
        },
      },
      {
        kind: "register",
        cols: 2,
        items: [
          {
            title: { en: "Email", nl: "E-mail", ar: "البريد الإلكتروني" },
            body: { en: "[Approved official email address]", nl: "[officieel goedgekeurd e-mailadres]", ar: "[البريد الرسمي المعتمد]" },
          },
          {
            title: { en: "Phone or business WhatsApp", nl: "Telefoon of WhatsApp Business", ar: "الهاتف أو واتساب الأعمال" },
            body: { en: "[Approved number]", nl: "[goedgekeurd nummer]", ar: "[الرقم المعتمد]" },
          },
          {
            title: { en: "Address", nl: "Adres", ar: "العنوان" },
            body: { en: "[Address approved for publication]", nl: "[adres dat gepubliceerd mag worden]", ar: "[العنوان المصرح بنشره]" },
          },
          {
            title: { en: "Contact hours", nl: "Contacttijden", ar: "أوقات التواصل" },
            body: { en: "[Days, hours and time zone]", nl: "[dagen, uren en tijdzone]", ar: "[الأيام والساعات والمنطقة الزمنية]" },
          },
          {
            title: { en: "Official accounts", nl: "Officiële accounts", ar: "الحسابات الرسمية" },
            body: { en: "[Approved links]", nl: "[goedgekeurde links]", ar: "[الروابط المعتمدة]" },
          },
        ],
      },
      {
        kind: "prose",
        body: [
          {
            en: "Rotterdam area, meetings by appointment.",
            nl: "Regio Rotterdam, uitsluitend op afspraak.",
            ar: "منطقة روتردام، اللقاءات بموعد مسبق.",
          },
        ],
      },
    ],
  },

  "looking-for": {
    masthead: { variant: "portrait", photo: "docs-desk" },
    headline: {
      en: "What are you looking for?",
      nl: "Wat zoekt u?",
      ar: "ماذا تبحث عنه؟",
    },
    blocks: [
      {
        kind: "formset",
        id: "looking-for",
        intro: {
          en: "Every worthwhile relationship begins with a clear request. Share with us what you need and the market you are targeting, so that we can review your request and suggest the right path.",
          nl: "Elke nuttige relatie begint met een duidelijke vraag. Deel met ons wat u nodig heeft en op welke markt u zich richt, zodat wij uw aanvraag kunnen bekijken en het passende traject voorstellen.",
          ar: "كل علاقة مفيدة تبدأ بطلب واضح. شاركنا ما تحتاجه والسوق الذي تستهدفه، لنراجع طلبك ونقترح المسار المناسب.",
        },
        forms: [
          {
            id: "supplier",
            choice: { en: "I am looking for a supplier", nl: "Ik zoek een leverancier", ar: "أبحث عن مورّد" },
            title: {
              en: "Tell us what you want to buy or have manufactured",
              nl: "Vertel ons wat u wilt inkopen of laten produceren",
              ar: "أخبرنا بما تريد شراءه أو تصنيعه",
            },
            intro: {
              en: "Do you need a product, raw materials, equipment, or manufacturing under your own brand? State the specifications, quantity, place of delivery and any essential requirements.",
              nl: "Heeft u een product, grondstoffen, apparatuur of productie onder uw eigen merk nodig? Vermeld de specificaties, de hoeveelheid, de plaats van aflevering en eventuele essentiële vereisten.",
              ar: "هل تحتاج إلى منتج، أو مواد أولية، أو معدات، أو تصنيع بعلامتك الخاصة؟ اذكر المواصفات والكمية ومكان التسليم وأي متطلبات أساسية.",
            },
            fields: [
              {
                name: "product",
                label: { en: "Requested product or service", nl: "Gevraagd product of gevraagde dienst", ar: "المنتج أو الخدمة المطلوبة" },
                type: "text",
              },
              {
                name: "specs",
                label: { en: "Specifications", nl: "Specificaties", ar: "المواصفات" },
                type: "textarea",
              },
              {
                name: "quantity",
                label: { en: "Quantity", nl: "Hoeveelheid", ar: "الكمية" },
                type: "text",
              },
              {
                name: "sourcing-country",
                label: {
                  en: "Preferred sourcing country (if any)",
                  nl: "Voorkeursland van toelevering (indien van toepassing)",
                  ar: "بلد التوريد المفضل إن وجد",
                },
                type: "text",
              },
              {
                name: "delivery-country",
                label: { en: "Country of delivery", nl: "Land van aflevering", ar: "بلد التسليم" },
                type: "text",
              },
              {
                name: "date",
                label: { en: "Required date", nl: "Gewenste datum", ar: "الموعد المطلوب" },
                type: "date",
              },
              {
                name: "certificates",
                label: {
                  en: "Required certificates or documents",
                  nl: "Vereiste certificaten of documenten",
                  ar: "الشهادات أو المستندات المطلوبة",
                },
                type: "text",
              },
              {
                name: "files",
                label: { en: "Optional attachments", nl: "Optionele bijlagen", ar: "المرفقات الاختيارية" },
                type: "file",
                wide: true,
              },
            ],
            common: "request",
            submit: {
              en: "Send supplier search request",
              nl: "Verstuur de zoekaanvraag voor een leverancier",
              ar: "أرسل طلب البحث عن مورّد",
            },
          },
          {
            id: "buyer",
            choice: { en: "I am looking for a buyer", nl: "Ik zoek een koper", ar: "أبحث عن مشترٍ" },
            title: {
              en: "Introduce us to your offer and the market you want to reach",
              nl: "Maak ons bekend met uw aanbod en de markt die u wilt bereiken",
              ar: "عرّفنا بعرضك والسوق الذي تريد الوصول إليه",
            },
            intro: {
              en: "Present your product or service clearly, and specify the type of customers and the target country, so that we can understand where a commercial fit may exist.",
              nl: "Presenteer uw product of dienst duidelijk en geef het type klanten en het doelland aan, zodat wij begrijpen waar een commerciële aansluiting zou kunnen liggen.",
              ar: "اعرض منتجك أو خدمتك بوضوح، وحدد نوع العملاء والدولة المستهدفة، لنفهم أين قد توجد ملاءمة تجارية.",
            },
            fields: [
              {
                name: "product",
                label: { en: "Product or service", nl: "Product of dienst", ar: "المنتج أو الخدمة" },
                type: "text",
              },
              {
                name: "origin",
                label: { en: "Country of origin", nl: "Land van herkomst", ar: "بلد المنشأ" },
                type: "text",
              },
              {
                name: "capacity",
                label: {
                  en: "Production capacity or quantity",
                  nl: "Productiecapaciteit of hoeveelheid",
                  ar: "القدرة الإنتاجية أو الكمية",
                },
                type: "text",
              },
              {
                name: "moq",
                label: { en: "Minimum order quantity", nl: "Minimale bestelhoeveelheid", ar: "الحد الأدنى للطلب" },
                type: "text",
              },
              {
                name: "target-market",
                label: { en: "Target market", nl: "Doelmarkt", ar: "السوق المستهدف" },
                type: "text",
              },
              {
                name: "buyer-type",
                label: { en: "Type of buyers", nl: "Type kopers", ar: "نوع المشترين" },
                type: "text",
              },
              {
                name: "catalogue",
                label: { en: "Catalogue or photos", nl: "Catalogus of foto’s", ar: "الكتالوج أو الصور" },
                type: "file",
                wide: true,
              },
              {
                name: "export",
                label: { en: "Export experience (if any)", nl: "Exportervaring (indien aanwezig)", ar: "خبرة التصدير إن وجدت" },
                type: "textarea",
              },
            ],
            common: "request",
            submit: {
              en: "Send buyer search request",
              nl: "Verstuur de zoekaanvraag voor een koper",
              ar: "أرسل طلب البحث عن مشترٍ",
            },
          },
          {
            id: "distributor",
            choice: { en: "I am looking for a distributor", nl: "Ik zoek een distributeur", ar: "أبحث عن موزّع" },
            title: {
              en: "Look for a suitable presence for your brand in a new market",
              nl: "Zoek een passende aanwezigheid voor uw merk in een nieuwe markt",
              ar: "ابحث عن حضور مناسب لعلامتك في سوق جديد",
            },
            intro: {
              en: "Share with us the product information, the desired market and the nature of the distribution, and what support and information you can offer the partner.",
              nl: "Deel met ons de productinformatie, de gewenste markt en de aard van de distributie, en welke ondersteuning en informatie u de partner kunt bieden.",
              ar: "شاركنا معلومات المنتج والسوق المطلوب وطبيعة التوزيع، وما تستطيع تقديمه للشريك من دعم ومعلومات.",
            },
            fields: [
              {
                name: "brand",
                label: { en: "Brand and product", nl: "Merk en product", ar: "العلامة والمنتج" },
                type: "text",
              },
              {
                name: "region",
                label: { en: "Country or region", nl: "Land of regio", ar: "الدولة أو المنطقة" },
                type: "text",
              },
              {
                name: "channels",
                label: { en: "Desired sales channels", nl: "Gewenste verkoopkanalen", ar: "قنوات البيع المطلوبة" },
                type: "text",
              },
              {
                name: "requirements",
                label: { en: "Distributor requirements", nl: "Distributeursvoorwaarden", ar: "شروط الموزّع" },
                type: "textarea",
              },
              {
                name: "scope",
                label: { en: "Distribution scope", nl: "Omvang van de distributie", ar: "نطاق التوزيع" },
                type: "text",
              },
              {
                name: "exclusivity",
                label: {
                  en: "Exclusivity (if under consideration)",
                  nl: "Exclusiviteit (indien aan de orde)",
                  ar: "الحصرية إن كانت مطروحة",
                },
                type: "text",
              },
              {
                name: "support",
                label: { en: "Available support", nl: "Beschikbare ondersteuning", ar: "الدعم المتاح" },
                type: "textarea",
              },
              {
                name: "files",
                label: { en: "Attachments", nl: "Bijlagen", ar: "المرفقات" },
                type: "file",
                wide: true,
              },
            ],
            common: "request",
            submit: {
              en: "Send distributor search request",
              nl: "Verstuur de zoekaanvraag voor een distributeur",
              ar: "أرسل طلب البحث عن موزّع",
            },
          },
          {
            id: "partner",
            choice: { en: "I am looking for a partner", nl: "Ik zoek een partner", ar: "أبحث عن شريك" },
            title: {
              en: "A partnership that begins with clear complementarity",
              nl: "Een partnerschap dat begint met duidelijke complementariteit",
              ar: "شراكة تبدأ بتكامل واضح",
            },
            intro: {
              en: "What do you offer, and what do you need from the other party? Specify whether you are looking for commercial, operational or technical collaboration, or a joint venture.",
              nl: "Wat biedt u aan, en wat heeft u van de andere partij nodig? Geef aan of u commerciële, operationele of technische samenwerking zoekt, of een joint venture.",
              ar: "ما الذي تقدّمه، وما الذي تحتاجه من الطرف الآخر؟ حدّد إن كنت تبحث عن تعاون تجاري أو تشغيلي أو تقني أو مشروع مشترك.",
            },
            fields: [
              {
                name: "idea",
                label: { en: "Collaboration idea", nl: "Samenwerkingsidee", ar: "فكرة التعاون" },
                type: "textarea",
              },
              {
                name: "partner-type",
                label: { en: "Type of partner", nl: "Type partner", ar: "نوع الشريك" },
                type: "text",
              },
              {
                name: "sector-country",
                label: { en: "Sector and country", nl: "Sector en land", ar: "القطاع والدولة" },
                type: "text",
              },
              {
                name: "stage",
                label: { en: "Stage of activity", nl: "Fase van de activiteiten", ar: "مرحلة النشاط" },
                type: "text",
              },
              {
                name: "contribution",
                label: { en: "Your contribution", nl: "Uw bijdrage", ar: "مساهمتك" },
                type: "textarea",
              },
              {
                name: "contribution-required",
                label: { en: "The contribution required", nl: "Gevraagde bijdrage", ar: "المساهمة المطلوبة" },
                type: "textarea",
              },
              {
                name: "first-step",
                label: {
                  en: "The step you would like to start with",
                  nl: "De stap waarmee u wilt beginnen",
                  ar: "الخطوة التي ترغب في بدئها",
                },
                type: "textarea",
              },
            ],
            common: "request",
            submit: {
              en: "Send partner search request",
              nl: "Verstuur de zoekaanvraag voor een partner",
              ar: "أرسل طلب البحث عن شريك",
            },
          },
          {
            id: "invest",
            choice: { en: "I want to invest", nl: "Ik wil investeren", ar: "أريد الاستثمار" },
            title: {
              en: "Define your interests so that we understand what you are looking for",
              nl: "Geef uw interesses aan, zodat wij begrijpen wat u zoekt",
              ar: "حدّد اهتماماتك لنفهم ما تبحث عنه",
            },
            intro: {
              en: "Choose the sectors, markets and type of participation that interest you. This information helps us understand your request before we explore the possibility of introductions with project owners.",
              nl: "Kies de sectoren, de markten en het type deelname die u interesseren. Deze informatie helpt ons uw aanvraag te begrijpen voordat wij onderzoeken of een kennismaking met initiatiefnemers van projecten mogelijk is.",
              ar: "اختر القطاعات والأسواق ونوع المشاركة التي تهمك. تساعدنا هذه المعلومات على فهم طلبك قبل بحث إمكان التعارف مع أصحاب مشاريع.",
            },
            fields: [
              {
                name: "sector",
                label: { en: "Sector", nl: "Sector", ar: "القطاع" },
                type: "text",
              },
              {
                name: "invest-country",
                label: { en: "Country", nl: "Land", ar: "الدولة" },
                type: "text",
              },
              {
                name: "participation",
                label: { en: "Type of participation", nl: "Type deelname", ar: "نوع المشاركة" },
                type: "text",
              },
              {
                name: "stage",
                label: { en: "Preferred project stage", nl: "Projectfase van voorkeur", ar: "مرحلة المشروع المفضلة" },
                type: "text",
              },
              {
                name: "range",
                label: {
                  en: "Investment range (optional)",
                  nl: "Investeringsbandbreedte (optioneel)",
                  ar: "النطاق الاستثماري اختياريًا",
                },
                type: "text",
              },
              {
                name: "value",
                label: {
                  en: "The expertise or value you add",
                  nl: "Ervaring of waarde die u toevoegt",
                  ar: "الخبرة أو القيمة التي تضيفها",
                },
                type: "textarea",
              },
              {
                name: "notes",
                label: { en: "Your notes", nl: "Uw opmerkingen", ar: "ملاحظاتك" },
                type: "textarea",
              },
            ],
            common: "request",
            submit: {
              en: "Send your investment interest",
              nl: "Verstuur uw investeringsinteresse",
              ar: "أرسل اهتمامك الاستثماري",
            },
          },
          {
            id: "market-entry",
            choice: { en: "I want to enter a market", nl: "Ik wil een markt betreden", ar: "أريد دخول سوق" },
            title: {
              en: "Let us organise your first steps in the new market",
              nl: "Laten we uw eerste stappen in de nieuwe markt op een rij zetten",
              ar: "لنرتّب خطواتك الأولى في السوق الجديد",
            },
            intro: {
              en: "Tell us about your business and the target market, and whether you need knowledge, a distributor, partners or support in preparing for entry.",
              nl: "Vertel ons over uw activiteiten en de doelmarkt, en of u kennis, een distributeur, partners of ondersteuning bij de voorbereiding op de toetreding nodig heeft.",
              ar: "أخبرنا عن نشاطك والسوق المستهدف، وما إذا كنت تحتاج إلى معرفة، أو موزّع، أو شركاء، أو دعم في الاستعداد للدخول.",
            },
            fields: [
              {
                name: "activity",
                label: { en: "Company activity", nl: "Bedrijfsactiviteiten", ar: "نشاط الشركة" },
                type: "text",
              },
              {
                name: "products",
                label: { en: "Products or services", nl: "Producten of diensten", ar: "المنتجات أو الخدمات" },
                type: "text",
              },
              {
                name: "target-country",
                label: { en: "Target country", nl: "Doelland", ar: "الدولة المستهدفة" },
                type: "text",
              },
              {
                name: "stage",
                label: { en: "Current stage", nl: "Huidige fase", ar: "المرحلة الحالية" },
                type: "text",
              },
              {
                name: "customers",
                label: { en: "Desired customers", nl: "Gewenste klanten", ar: "العملاء المطلوبون" },
                type: "text",
              },
              {
                name: "support",
                label: { en: "Type of support", nl: "Type ondersteuning", ar: "نوع الدعم" },
                type: "text",
              },
              {
                name: "timeline",
                label: { en: "Expected timeline", nl: "Verwachte planning", ar: "الجدول المتوقع" },
                type: "text",
              },
            ],
            common: "request",
            submit: {
              en: "Send market entry request",
              nl: "Verstuur de aanvraag voor markttoetreding",
              ar: "أرسل طلب دخول سوق",
            },
          },
        ],
      },
    ],
  },

  faq: {
    masthead: { variant: "plate", photo: "faq-hero" },
    blocks: [
      {
        kind: "faq",
        items: [
          {
            q: {
              en: "Is DUKAAT only for companies?",
              nl: "Is DUKAAT alleen bedoeld voor bedrijven?",
              ar: "هل دوكات مخصصة للشركات فقط؟",
            },
            a: {
              en: "DUKAAT speaks to companies, entrepreneurs, professionals and investors, and offers knowledge programmes suited to students, graduates and those about to start work. Conditions for participation vary by programme and service.",
              nl: "DUKAAT richt zich tot bedrijven, ondernemers, professionals en investeerders, en biedt kennisprogramma’s aan die geschikt zijn voor studenten, afgestudeerden en mensen die op het punt staan aan het werk te gaan. De voorwaarden voor deelname verschillen per programma en per dienst.",
              ar: "تخاطب دوكات الشركات وروّاد الأعمال والمهنيين والمستثمرين، وتتيح برامج معرفية تناسب الطلاب والخريجين والمقبلين على العمل. تختلف شروط المشاركة بحسب البرنامج والخدمة.",
            },
          },
          {
            q: {
              en: "Can I take part without membership?",
              nl: "Kan ik deelnemen zonder lidmaatschap?",
              ar: "هل يمكنني المشاركة دون عضوية؟",
            },
            a: {
              en: "The page for each event or programme states whether participation is open to everyone or reserved for members. You can also send an enquiry or a service request to find out which options suit you.",
              nl: "Op de pagina van elk evenement of programma staat aangegeven of deelname openstaat voor iedereen of voorbehouden is aan leden. U kunt ook een vraag of een aanvraag voor een dienst sturen om te weten te komen welke mogelijkheden passend zijn.",
              ar: "توضح صفحة كل فعالية أو برنامج إن كانت المشاركة متاحة للجميع أو مخصصة للأعضاء. ويمكنك إرسال استفسار أو طلب خدمة لمعرفة الخيارات المناسبة.",
            },
          },
          {
            q: {
              en: "Does membership include all courses and services?",
              nl: "Omvat het lidmaatschap alle cursussen en diensten?",
              ar: "هل تشمل العضوية جميع الدورات والخدمات؟",
            },
            a: {
              en: "The benefits included are set out in the membership offer. Some courses, consultancy services, delegations and extended research assignments may be separate services.",
              nl: "De inbegrepen voordelen worden vastgelegd in het lidmaatschapsaanbod. Sommige cursussen, adviesdiensten, delegaties en uitgebreide zoekopdrachten kunnen afzonderlijke diensten zijn.",
              ar: "تتحدد المزايا المشمولة في عرض العضوية. قد تكون بعض الدورات والاستشارات والوفود ومهام البحث الموسعة خدمات منفصلة.",
            },
          },
          {
            q: {
              en: "How does DUKAAT help me find a partner or supplier?",
              nl: "Hoe helpt DUKAAT mij bij het vinden van een partner of leverancier?",
              ar: "كيف تساعدني دوكات في العثور على شريك أو مورّد؟",
            },
            a: {
              en: "We start by understanding the request and defining the search criteria and the scope of the service, then we look for potential parties and arrange an introduction where there is a fit and mutual interest.",
              nl: "Wij beginnen met het begrijpen van de aanvraag en het bepalen van de zoekcriteria en de reikwijdte van de dienst, en daarna zoeken wij naar potentiële partijen en bereiden wij de kennismaking voor wanneer er sprake is van aansluiting en wederzijdse interesse.",
              ar: "نبدأ بفهم الطلب وتحديد معايير البحث ونطاق الخدمة، ثم نبحث عن الأطراف المحتملة ونهيئ التعارف عند وجود ملاءمة واهتمام متبادل.",
            },
          },
          {
            q: {
              en: "Does DUKAAT guarantee that deals are completed?",
              nl: "Garandeert DUKAAT dat deals worden gesloten?",
              ar: "هل تضمن دوكات إتمام الصفقات؟",
            },
            a: {
              en: "We help with the search, introductions and preparing for cooperation. Evaluation, negotiation, agreement and execution remain the responsibility of the parties, in accordance with the terms of their dealings.",
              nl: "Wij helpen bij het zoeken, de kennismaking en de voorbereiding op samenwerking. Beoordeling, onderhandeling, overeenkomst en uitvoering blijven de verantwoordelijkheid van de partijen, volgens de voorwaarden waaronder zij met elkaar zakendoen.",
              ar: "نساعد على البحث والتعارف والاستعداد للتعاون. يبقى التقييم والتفاوض والاتفاق والتنفيذ مسؤولية الأطراف وفق شروط تعاملهم.",
            },
          },
          {
            q: {
              en: "Are all courses free?",
              nl: "Zijn alle cursussen gratis?",
              ar: "هل جميع الدورات مجانية؟",
            },
            a: {
              en: "Free or subsidised lectures or initiatives may be available alongside paid programmes. Fees and conditions of participation are stated on each programme's page.",
              nl: "Er kunnen gratis of gesubsidieerde lezingen of initiatieven beschikbaar zijn naast betaalde programma’s. De kosten en de voorwaarden voor deelname worden vermeld op de pagina van elk programma.",
              ar: "قد تتوفر محاضرات أو مبادرات مجانية أو مدعومة إلى جانب برامج مدفوعة. تُذكر الرسوم وشروط المشاركة في صفحة كل برنامج.",
            },
          },
          {
            q: {
              en: "Does a participant receive a certificate?",
              nl: "Ontvangt een deelnemer een certificaat?",
              ar: "هل يحصل المشارك على شهادة؟",
            },
            a: {
              en: "The programme page states whether a certificate of attendance or participation is available, the issuing body and the conditions for obtaining it. This does not imply academic or professional accreditation unless a specific accreditation is stated.",
              nl: "Op de programmapagina staat of er een aanwezigheids- of deelnamecertificaat beschikbaar is, welke instantie het uitgeeft en wat de voorwaarden zijn om het te verkrijgen. Dit houdt geen academische of professionele accreditatie in, tenzij een specifieke accreditatie wordt vermeld.",
              ar: "توضح صفحة البرنامج ما إذا كانت تتوفر شهادة حضور أو مشاركة، والجهة المصدرة وشروط الحصول عليها. لا يعني ذلك اعتمادًا أكاديميًا أو مهنيًا ما لم يُذكر اعتماد محدد.",
            },
          },
          {
            q: {
              en: "How do I list a product or a purchase request?",
              nl: "Hoe plaats ik een product of een inkoopaanvraag?",
              ar: "كيف أعرض منتجًا أو طلب شراء؟",
            },
            a: {
              en: "Use the form for submitting an offer or a purchase request, and add the necessary details and attachments. The information is reviewed before it is published or shared, in line with the service available.",
              nl: "Gebruik het formulier voor het indienen van een aanbod of een inkoopaanvraag en voeg de benodigde gegevens en bijlagen toe. De informatie wordt gecontroleerd voordat deze wordt gepubliceerd of gedeeld, afhankelijk van de beschikbare dienst.",
              ar: "استخدم نموذج تقديم العرض أو طلب الشراء، وأضف البيانات والمرفقات اللازمة. تراجع المعلومات قبل النشر أو المشاركة وفق الخدمة المتاحة.",
            },
          },
          {
            q: {
              en: "What languages are the website and programmes in?",
              nl: "In welke talen zijn de website en de programma’s beschikbaar?",
              ar: "ما لغات الموقع والبرامج؟",
            },
            a: {
              en: "The website offers Arabic, English and Dutch. The language of each programme or service is specified in its details; you can state your preferred language of communication in your request.",
              nl: "De website biedt de keuze uit Arabisch, Engels en Nederlands. De taal van elk programma of elke dienst wordt vastgelegd in de details ervan; u kunt in uw aanvraag aangeven in welke taal u bij voorkeur communiceert.",
              ar: "يعرض الموقع خيارات العربية والإنجليزية والهولندية. وتُحدد لغة كل برنامج أو خدمة في تفاصيلها؛ يمكنك ذكر لغة التواصل المفضلة في طلبك.",
            },
          },
          {
            q: {
              en: "Is DUKAAT an official chamber of commerce?",
              nl: "Is DUKAAT een officiële kamer van koophandel?",
              ar: "هل DUKAAT غرفة تجارة رسمية؟",
            },
            a: {
              en: "No. DUKAAT is a private business club and platform. We do not represent any government and we do not issue official documents — though we cooperate with chambers and official bodies where it benefits our members.",
              nl: "Nee. DUKAAT is een besloten businessclub en platform. Wij vertegenwoordigen geen overheid en geven geen officiële documenten af — al werken wij samen met kamers en officiële instanties waar dat onze leden ten goede komt.",
              ar: "لا. DUKAAT نادٍ خاص ومنصة أعمال. لا نمثّل أي حكومة ولا نصدر وثائق رسمية — وإن كنا نتعاون مع الغرف والجهات الرسمية حيثما يفيد ذلك أعضاءنا.",
            },
          },
          {
            q: {
              en: "Do you guarantee the companies listed?",
              nl: "Staat u garant voor de vermelde bedrijven?",
              ar: "هل تضمنون الشركات المدرجة؟",
            },
            a: {
              en: "No. We verify basic information and publish it clearly, but the decision to transact — and the responsibility to do due diligence — remains with the member. Anyone who promises you a full guarantee in international trade either does not understand it or is not being honest with you.",
              nl: "Nee. Wij verifiëren basisgegevens en publiceren die helder, maar de beslissing om zaken te doen — en de verantwoordelijkheid voor due diligence — blijft bij het lid. Wie u een volledige garantie belooft in de internationale handel, begrijpt die handel niet of is niet eerlijk tegen u.",
              ar: "لا. نتحقق من المعلومات الأساسية وننشرها بوضوح، لكن قرار التعامل — ومسؤولية الفحص النافي للجهالة — يبقيان على العضو. من يعدك بضمان كامل في التجارة الدولية إما لا يفهمها أو ليس صادقاً معك.",
            },
          },
          {
            q: {
              en: "How are you different from a platform like Alibaba?",
              nl: "Wat is het verschil met een platform als Alibaba?",
              ar: "بمَ تختلفون عن منصة مثل Alibaba؟",
            },
            a: {
              en: "Those are open platforms with millions of suppliers; their strength is scale. We are a closed community; our strength is that someone has actually met the other side. We do not compete on volume — we compete on trust.",
              nl: "Dat zijn open platforms met miljoenen leveranciers; hun kracht is schaal. Wij zijn een besloten gemeenschap; onze kracht is dat iemand de andere kant werkelijk heeft ontmoet. Wij concurreren niet op volume — wij concurreren op vertrouwen.",
              ar: "تلك منصات مفتوحة فيها ملايين المورّدين؛ قوتها في الحجم. نحن مجتمع مغلق؛ قوتنا أن أحدنا التقى الطرف الآخر فعلاً. نحن لا نتنافس على الحجم — نتنافس على الثقة.",
            },
          },
          {
            q: {
              en: "I am a small company. Is DUKAAT for me?",
              nl: "Ik heb een klein bedrijf. Is DUKAAT iets voor mij?",
              ar: "شركتي صغيرة. هل DUKAAT مناسب لي؟",
            },
            a: {
              en: "Yes, if you genuinely trade. We do not set a size requirement — we set an activity requirement. Many of the best opportunities start with small companies that can decide quickly.",
              nl: "Ja, als u werkelijk handelt. Wij stellen geen omvangseis — wij stellen een activiteitseis. Veel van de beste kansen beginnen bij kleine bedrijven die snel kunnen beslissen.",
              ar: "نعم، إن كنت تتاجر فعلاً. لا نضع شرطاً للحجم — نضع شرطاً للنشاط. كثير من أفضل الفرص يبدأ بشركات صغيرة تقرّر بسرعة.",
            },
          },
          {
            q: {
              en: "What happens after the intake, or after I have been nominated?",
              nl: "Wat gebeurt er na de intake, of nadat ik ben voorgedragen?",
              ar: "ماذا يحدث بعد الاستمارة، أو بعد ترشيحي؟",
            },
            a: {
              en: "We review your profile and may request documents or a short call. You receive an acceptance or a decline within 10 working days. Not everyone is admitted.",
              nl: "Wij beoordelen uw profiel en kunnen om documenten of een kort gesprek vragen. U ontvangt binnen 10 werkdagen een toelating of een afwijzing. Niet iedereen wordt toegelaten.",
              ar: "نراجع ملفك وقد نطلب مستندات أو مكالمة قصيرة. تتلقى قبولاً أو اعتذاراً خلال 10 أيام عمل. لا يُقبل الجميع.",
            },
          },
          {
            q: {
              en: "Do you take a commission on deals?",
              nl: "Rekent u commissie op deals?",
              ar: "هل تأخذون عمولة على الصفقات؟",
            },
            a: {
              en: "No hidden commissions. Membership is an annual subscription and project services are quoted per engagement in writing; any other fee is communicated clearly and agreed in advance, in writing, with every party concerned.",
              nl: "Geen verborgen commissies. Het lidmaatschap is een jaarabonnement en projectdiensten worden per opdracht schriftelijk geoffreerd; elke andere vergoeding wordt helder gecommuniceerd en vooraf schriftelijk afgesproken met iedere betrokken partij.",
              ar: "لا عمولات خفية. العضوية اشتراك سنوي، وتُعرض أسعار خدمات المشاريع كتابةً لكل مهمة على حدة؛ وأي مقابل آخر يُبلَّغ بوضوح ويُتّفق عليه مسبقاً وكتابةً مع كل طرف معنيّ.",
            },
          },
          {
            q: {
              en: "Is my company’s data protected?",
              nl: "Zijn de gegevens van mijn bedrijf beschermd?",
              ar: "هل بيانات شركتي محمية؟",
            },
            a: {
              en: "Yes. We process data in accordance with the GDPR. Only what you explicitly approve is published in your profile, and you can request correction or deletion at any time.",
              nl: "Ja. Wij verwerken gegevens conform de AVG. Alleen wat u uitdrukkelijk goedkeurt wordt in uw profiel gepubliceerd, en u kunt op elk moment correctie of verwijdering vragen.",
              ar: "نعم. نعالج البيانات وفقاً للائحة العامة لحماية البيانات (GDPR). لا يُنشر في ملفك إلا ما توافق عليه صراحةً، ويمكنك طلب التصحيح أو الحذف في أي وقت.",
            },
          },
          {
            q: {
              en: "Which markets do you cover?",
              nl: "Welke markten bestrijkt u?",
              ar: "ما الأسواق التي تعملون فيها؟",
            },
            a: {
              en: "The Netherlands and Europe on one side; the Gulf and the wider Arab world on the other. Trade runs both ways: European companies entering Arab markets, and Arab companies entering the Netherlands and Europe. We sit next to Rotterdam, Europe’s largest port.",
              nl: "Nederland en Europa aan de ene kant; de Golf en de bredere Arabische wereld aan de andere. De handel loopt in beide richtingen: Europese bedrijven die Arabische markten betreden, en Arabische bedrijven die Nederland en Europa betreden. Wij zitten naast Rotterdam, de grootste haven van Europa.",
              ar: "هولندا وأوروبا على إحدى الضفتين، والخليج والعالم العربي الأوسع على الضفة الأخرى. والتجارة تسير في الاتجاهين: شركات أوروبية تدخل الأسواق العربية، وشركات عربية تدخل هولندا وأوروبا. ومقرّنا بجوار روتردام، أكبر موانئ أوروبا.",
            },
          },
          {
            q: {
              en: "How does admission work?",
              nl: "Hoe werkt de toelating?",
              ar: "كيف يتم القبول؟",
            },
            a: {
              en: "Membership is by nomination or invitation, and companies may also apply. A member puts a company’s name forward, we invite a company whose trade we know — for instance after an intake in which it set out a real commercial need — or a company applies itself. Every company is verified and reviewed before admission; an application does not guarantee membership.",
              nl: "Lidmaatschap is op voordracht of uitnodiging, en bedrijven kunnen zich ook aanmelden. Een lid draagt een bedrijf voor, wij nodigen een bedrijf uit waarvan wij de handel kennen — bijvoorbeeld na een intake waarin het een werkelijke commerciële behoefte beschreef — of een bedrijf meldt zich zelf aan. Elk bedrijf wordt vóór toelating geverifieerd en beoordeeld; een aanmelding garandeert geen lidmaatschap.",
              ar: "العضوية بالترشيح أو الدعوة، ويمكن للشركات أيضاً أن تتقدّم بطلب انضمام. يرشّح أحدُ الأعضاء شركةً، أو ندعو نحن شركةً نعرف نشاطها التجاري — مثلاً بعد استمارة تعارف عرضت فيها حاجةً تجارية حقيقية — أو تتقدّم الشركة بطلبٍ بنفسها. وتخضع كل شركة للتحقق والمراجعة قبل قبولها؛ ولا يضمن طلب الانضمام العضوية.",
            },
          },
          {
            q: {
              en: "What does a nomination involve?",
              nl: "Wat houdt een voordracht in?",
              ar: "ماذا يتضمّن الترشيح؟",
            },
            a: {
              en: "A member tells us which company they are putting forward and how they know its trade. We then contact the company, or the company contacts us through the route ‘I have been nominated’ and tells us who nominated it. A nomination opens the conversation; it does not replace verification, and it does not guarantee admission.",
              nl: "Een lid laat ons weten welk bedrijf het voordraagt en hoe het de handel van dat bedrijf kent. Daarna nemen wij contact op met het bedrijf, of neemt het bedrijf zelf contact met ons op via de route ‘Ik ben voorgedragen’ en vertelt het ons wie het heeft voorgedragen. Een voordracht opent het gesprek; zij vervangt de verificatie niet en garandeert geen toelating.",
              ar: "يخبرنا العضو بالشركة التي يرشّحها، وكيف عرف نشاطها التجاري. ثم نتواصل نحن مع الشركة، أو تتواصل هي معنا عبر مسار «تمّت تزكيتي» وتخبرنا باسم مَن رشّحها. الترشيح يفتح باب الحديث؛ لكنه لا يغني عن التحقق، ولا يضمن القبول.",
            },
          },
          {
            q: {
              en: "Can a member nominate someone?",
              nl: "Kan een lid iemand voordragen?",
              ar: "هل يمكن للعضو أن يرشّح غيره؟",
            },
            a: {
              en: "Yes. Every member may put forward a company they know in trade — a supplier, a customer, a partner — and we verify that company like any other.",
              nl: "Ja. Elk lid kan een bedrijf voordragen dat het uit de handel kent — een leverancier, een klant, een partner — en wij verifiëren dat bedrijf zoals elk ander.",
              ar: "نعم. يمكن لكل عضو أن يرشّح شركةً يعرفها من تعاملاته التجارية — مورّداً أو عميلاً أو شريكاً — ونتحقق من تلك الشركة كما نتحقق من أي شركة أخرى.",
            },
          },
          {
            q: {
              en: "Can you represent my company on the other side?",
              nl: "Kunt u mijn bedrijf aan de andere kant vertegenwoordigen?",
              ar: "هل يمكنكم تمثيل شركتي على الضفة الأخرى؟",
            },
            a: {
              en: "Yes, as a project service. Representation gives your company a presence in the other market before you have an office there. What it covers differs from region to region; what may be done in your name, and for how long, is agreed in writing and quoted per engagement.",
              nl: "Ja, als projectdienst. Vertegenwoordiging geeft uw bedrijf een aanwezigheid in de andere markt voordat u daar een kantoor hebt. Wat zij omvat, verschilt per regio; wat er in uw naam mag worden gedaan, en voor hoe lang, wordt schriftelijk vastgelegd en per opdracht geoffreerd.",
              ar: "نعم، ضمن خدمات المشاريع. يمنح التمثيلُ شركتك حضوراً في السوق الأخرى قبل أن يكون لك مكتب هناك. ويختلف ما يشمله من منطقة إلى أخرى؛ ويُحدَّد كتابةً ما يجوز القيام به باسمك ولأي مدة، مع عرض سعر لكل مهمة على حدة.",
            },
          },
          {
            q: {
              en: "Do you organise trade missions and events?",
              nl: "Organiseert u handelsmissies en evenementen?",
              ar: "هل تنظّمون بعثات تجارية وفعاليات؟",
            },
            a: {
              en: "Yes. DUKAAT organises trade missions — Discover Netherlands, Discover Dubai, Discover Saudi Arabia, and Reverse Buyer Missions that bring buyers from the Arab world to the Netherlands — with the meetings arranged in advance. Events range from business breakfasts and Executive Dinners to Buyer in the Room and DUKAAT Pavilions at trade fairs. Members are invited according to their level.",
              nl: "Ja. DUKAAT organiseert handelsmissies — Discover Netherlands, Discover Dubai, Discover Saudi Arabia, en Reverse Buyer Missions die kopers uit de Arabische wereld naar Nederland brengen — met de gesprekken vooraf geregeld. De evenementen lopen van zakenontbijten en Executive Dinners tot Buyer in the Room en DUKAAT Pavilions op beurzen. Leden worden uitgenodigd afhankelijk van hun niveau.",
              ar: "نعم. ينظّم DUKAAT بعثات تجارية — Discover Netherlands وDiscover Dubai وDiscover Saudi Arabia، وReverse Buyer Missions التي تستقدم مشترين من العالم العربي إلى هولندا — مع ترتيب اللقاءات مسبقاً. وتمتد الفعاليات من لقاءات فطور الأعمال وExecutive Dinners إلى Buyer in the Room وأجنحة DUKAAT Pavilions في المعارض. ويُدعى الأعضاء إليها بحسب مستوى عضويتهم.",
            },
          },
          {
            q: {
              en: "What does DUKAAT charge?",
              nl: "Wat brengt DUKAAT in rekening?",
              ar: "ما الذي يتقاضاه DUKAAT؟",
            },
            a: {
              en: "Membership is an annual subscription. Project services (market entry, supplier search, representation) are quoted per engagement in writing. No hidden commissions. The rate for each level is set out in the membership agreement; we publish no price list, because the right level follows from what you need.",
              nl: "Het lidmaatschap is een jaarabonnement. Projectdiensten (markttoetreding, leverancierszoektocht, vertegenwoordiging) worden per opdracht schriftelijk geoffreerd. Geen verborgen commissies. Het tarief per niveau staat in de lidmaatschapsovereenkomst; een prijslijst publiceren wij niet, omdat het juiste niveau volgt uit wat u nodig hebt.",
              ar: "العضوية اشتراك سنوي. خدمات المشاريع (دخول الأسواق، البحث عن مورّدين، التمثيل) تُعرض أسعارها كتابةً لكل مهمة على حدة. لا عمولات خفية. وتنصّ اتفاقية العضوية على سعر كل مستوى؛ ولا ننشر قائمة أسعار، لأن المستوى المناسب يتحدد بحسب حاجتك.",
            },
          },
          {
            q: {
              en: "Do you handle payments?",
              nl: "Lopen betalingen via DUKAAT?",
              ar: "هل تتولّون المدفوعات؟",
            },
            a: {
              en: "No. We do not take custody of members’ funds, we do not act as a bank or payment provider, and we do not guarantee any transaction between members. Payments run directly between the parties — by letter of credit, documentary collection, a notary or a licensed escrow provider — and we help you choose the instrument that fits.",
              nl: "Nee. Wij nemen geen gelden van leden in bewaring, wij treden niet op als bank of betaaldienstverlener, en wij garanderen geen enkele transactie tussen leden. Betalingen lopen rechtstreeks tussen de partijen — via een documentair krediet, een documentair incasso, een notaris of een escrowdienst met vergunning — en wij helpen u het instrument te kiezen dat past.",
              ar: "لا. نحن لا نحتفظ بأموال الأعضاء، ولا نعمل كمصرف أو مزوّد خدمات دفع، ولا نضمن أي معاملة بين الأعضاء. وتجري المدفوعات مباشرةً بين الطرفين — عبر اعتماد مستندي، أو تحصيل مستندي، أو عن طريق كاتب العدل، أو مزوّد مرخّص لحسابات الضمان (escrow) — ونساعدك على اختيار الأداة المناسبة.",
            },
          },
          {
            q: {
              en: "Is my request published?",
              nl: "Wordt mijn verzoek gepubliceerd?",
              ar: "هل يُنشر طلبي؟",
            },
            a: {
              en: "No. What you tell us in an intake is read by a person at DUKAAT and used to find the right counterparty. It is not published on this site and not sent out as a list. Members’ requests circulate inside the network, and nothing about you is published without your explicit consent.",
              nl: "Nee. Wat u ons in een intake vertelt, wordt gelezen door iemand van DUKAAT en gebruikt om de juiste tegenpartij te vinden. Het wordt niet op deze site gepubliceerd en niet als lijst verstuurd. De verzoeken van leden circuleren binnen het netwerk, en niets over u wordt gepubliceerd zonder uw uitdrukkelijke toestemming.",
              ar: "لا. ما تخبرنا به في الاستمارة يقرؤه أحدٌ من فريق DUKAAT، ونستخدمه للعثور على الطرف المقابل المناسب. فلا يُنشر على هذا الموقع، ولا يُرسَل ضمن قائمة. وتُتداول طلبات الأعضاء داخل الشبكة، ولا يُنشر عنك شيء دون موافقتك الصريحة.",
            },
          },
        ],
      },
    ],
  },
};
