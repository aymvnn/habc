import type { PageSet } from "./types";

/**
 * DUKAAT Market: the market (source 7), purchase requests (13), clearances and used equipment (14).
 * Arabic verbatim from owntext/DUKAAT_محتوى كتابة الموقع حديد _AR.md; Dutch and English verbatim from
 * owntext/vertalingen/DUKAAT_Website_Copy_{NL,EN}_uit_AR.md.
 * Not published (templates): the offer buttons on each item (7), "send an offer for this request" (13),
 * "request details" (14).
 */
export const market: PageSet = {
  "services/market": {
    masthead: { variant: "band", photo: "f-market" },
    eyebrow: { en: "DUKAAT Market", nl: "DUKAAT Market", ar: "DUKAAT Market" },
    headline: {
      en: "Present what you offer, and discover what your market needs",
      nl: "Laat zien wat u aanbiedt en ontdek wat uw markt nodig heeft",
      ar: "اعرض ما تقدّمه، واكتشف ما يحتاجه سوقك",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "A business space for presenting products, services and commercial needs between the Netherlands and the Arab world. It helps companies make their offerings known and reach parties interested in buying, supplying or distributing.",
          nl: "Een zakelijke ruimte voor het presenteren van producten, diensten en commerciële behoeften tussen Nederland en de Arabische wereld. Ze helpt bedrijven hun aanbod bekend te maken en partijen te bereiken die geïnteresseerd zijn in inkoop, levering of distributie.",
          ar: "مساحة أعمال لعرض المنتجات والخدمات والاحتياجات التجارية بين هولندا والعالم العربي. تساعد الشركات على التعريف بعروضها، والوصول إلى أطراف مهتمة بالشراء أو التوريد أو التوزيع.",
        },
      },
      {
        kind: "prose",
        body: [
          {
            en: "A company might present a Dutch product looking for an Arab importer, an Arab product aimed at the European market, or a service that supports companies’ activities across borders. A good offering provides clear information that makes the business conversation more useful from the outset.",
            nl: "Een bedrijf kan een Nederlands product presenteren dat op zoek is naar een Arabische importeur, een Arabisch product dat zich op de Europese markt richt, of een dienst die de grensoverschrijdende activiteiten van bedrijven ondersteunt. Een goed aanbod geeft duidelijke informatie die het commerciële gesprek vanaf het begin nuttiger maakt.",
            ar: "يمكن أن تعرض الشركة منتجًا هولنديًا يبحث عن مستورد عربي، أو منتجًا عربيًا يستهدف السوق الأوروبية، أو خدمة تدعم نشاط الشركات عبر الحدود. يقدّم العرض الجيد معلومات واضحة تجعل المحادثة التجارية أكثر فائدة منذ البداية.",
          },
        ],
        photo: "x-market-taste",
        size: "tall",
        side: "end",
      },
      {
        kind: "register",
        heading: { en: "What will you find here?", nl: "Wat vindt u hier?", ar: "ماذا ستجد هنا؟" },
        cols: 2,
        photo: "p-showroom",
        items: [
          {
            title: {
              en: "Products and services for businesses.",
              nl: "Producten en diensten voor bedrijven.",
              ar: "منتجات وخدمات للشركات.",
            },
          },
          {
            title: {
              en: "Supply and private-label manufacturing opportunities.",
              nl: "Kansen voor levering en private-labelproductie.",
              ar: "فرص توريد وتصنيع بعلامة خاصة.",
            },
          },
          {
            title: {
              en: "Distribution and commercial cooperation offers.",
              nl: "Aanbiedingen voor distributie en commerciële samenwerking.",
              ar: "عروض توزيع وتعاون تجاري.",
            },
          },
          {
            title: {
              en: "Specific purchase requests.",
              nl: "Specifieke inkoopaanvragen.",
              ar: "طلبات شراء محددة.",
            },
          },
          {
            title: {
              en: "Surplus stock, clearances and used equipment, through the specialised section.",
              nl: "Overtollige voorraad, restpartijen en gebruikte apparatuur via het gespecialiseerde onderdeel.",
              ar: "فائض مخزون وتصفيات ومعدات مستعملة عبر القسم المتخصص.",
            },
          },
        ],
      },
      {
        kind: "listing",
        id: "offers",
        heading: { en: "Explore the offers", nl: "Verken het aanbod", ar: "استكشف العروض" },
        empty: {
          en: "There are currently no offers published in this section. Tell us what you are looking for, or submit your offer for review.",
          nl: "Er is momenteel geen aanbod gepubliceerd in dit onderdeel. Vertel ons wat u zoekt of dien uw aanbod ter beoordeling in.",
          ar: "لا توجد عروض منشورة في هذا القسم حاليًا. أخبرنا بما تبحث عنه أو قدّم عرضك للمراجعة.",
        },
        links: [
          {
            href: "#product",
            label: { en: "Submit your product or service", nl: "Dien uw product of dienst in", ar: "قدّم منتجك أو خدمتك" },
          },
          {
            href: "services/purchase-requests#purchase-request",
            label: { en: "Post a purchase request", nl: "Publiceer een inkoopaanvraag", ar: "انشر طلب شراء" },
          },
        ],
      },
      {
        kind: "notice",
        body: [
          {
            en: "Prices, availability, delivery and terms of business are determined with the offering party. Sending an enquiry or a sample request does not constitute confirmation of an order.",
            nl: "Prijzen, beschikbaarheid, levering en handelsvoorwaarden worden met de aanbiedende partij bepaald. Het versturen van een vraag of een monsteraanvraag geldt niet als bevestiging van de bestelling.",
            ar: "تُحدد الأسعار والتوفر والتسليم وشروط التعامل مع الجهة العارضة. إرسال الاستفسار أو طلب العيّنة لا يُعد تأكيدًا للطلب.",
          },
        ],
      },
      {
        kind: "form",
        form: {
          id: "product",
          title: { en: "Submit your product or service", nl: "Dien uw product of dienst in", ar: "قدّم منتجك أو خدمتك" },
          fields: [
            { name: "offerName", core: true /* UX-04 */, label: { en: "Name", nl: "Naam", ar: "الاسم" } },
            { name: "sector", label: { en: "Sector", nl: "Sector", ar: "القطاع" } },
            {
              name: "description",
              core: true, // UX-04
              label: { en: "Description of the offering", nl: "Omschrijving van het aanbod", ar: "وصف العرض" },
              type: "textarea",
            },
            {
              name: "photos",
              label: { en: "Photos and video if available", nl: "Foto's en video indien beschikbaar", ar: "الصور والفيديو إن توفر" },
              type: "file",
              wide: true,
            },
            { name: "specs", label: { en: "Specifications", nl: "Specificaties", ar: "المواصفات" }, type: "textarea" },
            { name: "origin", label: { en: "Country of origin", nl: "Land van oorsprong", ar: "بلد المنشأ" } },
            { name: "location", label: { en: "Location of the goods", nl: "Locatie van de goederen", ar: "موقع البضاعة" } },
            { name: "quantity", core: true /* UX-04 */, label: { en: "Available quantity", nl: "Beschikbare hoeveelheid", ar: "الكمية المتاحة" } },
            { name: "minOrder", label: { en: "Minimum order", nl: "Minimumbestelling", ar: "الحد الأدنى للطلب" } },
            { name: "packaging", label: { en: "Packaging", nl: "Verpakking", ar: "التعبئة" } },
            { name: "capacity", label: { en: "Production capacity", nl: "Productiecapaciteit", ar: "القدرة الإنتاجية" } },
            { name: "privateLabel", label: { en: "Private-label options", nl: "Private-labelopties", ar: "خيارات العلامة الخاصة" } },
            { name: "documents", label: { en: "Available documents", nl: "Beschikbare documenten", ar: "المستندات المتاحة" } },
            {
              name: "requestDetails",
              label: { en: "How to request details", nl: "De wijze waarop details kunnen worden aangevraagd", ar: "طريقة طلب التفاصيل" },
            },
          ],
          common: "request",
          submit: { en: "Submit your product or service", nl: "Dien uw product of dienst in", ar: "قدّم منتجك أو خدمتك" },
        },
      },
      /* extras (commit 2336702, market.ts "market"): the closed character, DUKAAT Deal Alert, human review */
      {
        kind: "register",
        label: { en: "The mechanism", nl: "De werkwijze", ar: "الآلية" },
        heading: {
          en: "How a listing *works.*",
          nl: "Zo komt iets *op de markt.*",
          ar: "هكذا يعمل *الإدراج.*",
        },
        cols: 2,
        items: [
          {
            title: {
              en: "Seen by admitted members only",
              nl: "Alleen zichtbaar voor toegelaten leden",
              ar: "للأعضاء المقبولين وحدهم",
            },
            body: {
              en: "Listings circulate inside the club, among members who have been verified and admitted. They are not published on this site or on the open web.",
              nl: "Vermeldingen circuleren binnen de club, onder leden die zijn geverifieerd en toegelaten. Zij verschijnen niet op deze site en niet op het openbare internet.",
              ar: "تُتداول الإدراجات داخل النادي، بين أعضاءٍ جرى التحقق منهم وقبولهم، ولا تُنشر على هذا الموقع ولا على الإنترنت المفتوح.",
            },
          },
          {
            title: {
              en: "Contact runs through DUKAAT",
              nl: "Contact loopt via DUKAAT",
              ar: "التواصل يمرّ عبر DUKAAT",
            },
            body: {
              en: "Members reach each other through DUKAAT, with a specific request — for information, a quotation, a sample or the details of a lot. Both sides know who they are dealing with from the first message.",
              nl: "Leden benaderen elkaar via DUKAAT, met een concreet verzoek — om informatie, een offerte, een monster of de details van een partij. Beide kanten weten vanaf het eerste bericht met wie zij te maken hebben.",
              ar: "يتواصل الأعضاء فيما بينهم عبر DUKAAT بطلبٍ محدّد: طلبِ معلومات، أو عرضِ سعر، أو عيّنة، أو تفاصيلِ دفعةٍ من المخزون. ويعرف كلٌّ من الطرفين منذ الرسالة الأولى مع مَن يتعامل.",
            },
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "DUKAAT Deal Alert", nl: "DUKAAT Deal Alert", ar: "DUKAAT Deal Alert" },
        heading: {
          en: "The right opportunity *comes to you.*",
          nl: "De juiste kans *komt naar u toe.*",
          ar: "الفرصة المناسبة *تأتي إليك.*",
        },
        body: [
          {
            en: "Not every member can watch the market every day. DUKAAT Deal Alert sends relevant opportunities directly to members, selected by the sectors and markets each member trades in: a new product, a buyer request in their field, a lot that has just become available, a machine about to leave a factory floor.",
            nl: "Niet elk lid kan de markt elke dag volgen. DUKAAT Deal Alert stuurt relevante kansen rechtstreeks naar leden, geselecteerd op de sectoren en markten waarin zij handelen: een nieuw product, een inkoopaanvraag in het eigen vak, een partij die net is vrijgekomen, een machine die op het punt staat een fabriekshal te verlaten.",
            ar: "لا يتّسع وقت كل عضو لمتابعة السوق كل يوم. ومن خلال DUKAAT Deal Alert تصل الفرص ذات الصلة مباشرةً إلى الأعضاء، مختارةً بحسب القطاعات والأسواق التي يتاجر فيها كلٌّ منهم: منتجٌ جديد، أو طلبُ شراءٍ في مجاله، أو دفعةُ مخزونٍ أُتيحت للتو، أو آلةٌ توشك أن تغادر صالة المصنع.",
          },
          {
            en: "An alert is short and precise: what it is, how much, where, and from when. The details are one request away. As with every match, a person reviews it before it goes out.",
            nl: "Een melding is kort en precies: wat het is, hoeveel, waar en vanaf wanneer. Met één stap vraagt u de details op. Zoals bij elke match beoordeelt een mens de melding voordat die uitgaat.",
            ar: "التنبيه قصيرٌ ودقيق: ما الفرصة، وما كميتها، وأين توجد، ومتى تُتاح. وتكفي خطوةٌ واحدة لطلب التفاصيل. وكما في كل مطابقة، يراجعه إنسانٌ قبل أن يُرسَل.",
          },
        ],
      },
    ],
  },

  "services/purchase-requests": {
    masthead: { variant: "portrait", photo: "p-purchase-requests" },
    headline: {
      en: "Let the market know what you need",
      nl: "Laat de markt weten wat u nodig hebt",
      ar: "دع السوق يعرف ما تحتاجه",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "If you cannot find the right offer, submit a clear purchase request. Specifications, quantities, place of delivery and the required date help in understanding your need and assessing relevant offers.",
          nl: "Vindt u het passende aanbod niet, dien dan een duidelijke inkoopaanvraag in. De specificaties, de hoeveelheden, de plaats van levering en de gewenste datum helpen om uw behoefte te begrijpen en relevante aanbiedingen te beoordelen.",
          ar: "إذا لم تجد العرض المناسب، قدّم طلب شراء واضحًا. تساعد المواصفات والكميات ومكان التسليم والموعد المطلوب على فهم احتياجك وتقييم العروض ذات الصلة.",
        },
      },
      {
        kind: "prose",
        body: [
          {
            en: "Your request may be for raw materials, finished products, private-label manufacturing, or equipment and a production line.",
            nl: "Uw aanvraag kan betrekking hebben op grondstoffen, eindproducten, private-labelproductie, of apparatuur en een productielijn.",
            ar: "يمكن أن يكون طلبك مواد أولية، أو منتجات جاهزة، أو تصنيعًا بعلامة خاصة، أو معدات وخط إنتاج.",
          },
        ],
      },
      {
        kind: "form",
        form: {
          id: "purchase-request",
          title: { en: "Submit a purchase request", nl: "Dien een inkoopaanvraag in", ar: "قدّم طلب شراء" },
          fields: [
            { name: "title", core: true /* UX-04 */, label: { en: "Request title", nl: "Titel van de aanvraag", ar: "عنوان الطلب" } },
            { name: "sector", label: { en: "Sector", nl: "Sector", ar: "القطاع" } },
            { name: "product", core: true /* UX-04 */, label: { en: "Product description", nl: "Productomschrijving", ar: "وصف المنتج" }, type: "textarea" },
            { name: "specs", label: { en: "Specifications", nl: "Specificaties", ar: "المواصفات" }, type: "textarea" },
            { name: "quantity", label: { en: "Quantity", nl: "Hoeveelheid", ar: "الكمية" } },
            { name: "deliveryCountry", core: true /* UX-04 */, label: { en: "Country of delivery", nl: "Land van levering", ar: "بلد التسليم" } },
            { name: "date", label: { en: "Date", nl: "Datum", ar: "الموعد" }, type: "date" },
            {
              name: "deliveryTerms",
              label: { en: "Required delivery terms if known", nl: "Gewenste leveringsvoorwaarden indien bekend", ar: "شروط التسليم المطلوبة إن عُرفت" },
            },
            { name: "documents", label: { en: "Documents", nl: "Documenten", ar: "المستندات" } },
            { name: "budget", label: { en: "Budget (optional)", nl: "Budget (optioneel)", ar: "الميزانية اختياريًا" } },
            { name: "contactMethod", label: { en: "Contact method", nl: "Contactwijze", ar: "طريقة التواصل" } },
          ],
          common: "request",
          submit: { en: "Submit a purchase request", nl: "Dien een inkoopaanvraag in", ar: "قدّم طلب شراء" },
          option: {
            en: "I agree to the publication, after review, of the request details designated for publication; contact details remain subject to the privacy options described.",
            nl: "Ik ga ermee akkoord dat de voor publicatie aangeduide details van de aanvraag na beoordeling worden gepubliceerd; voor de contactgegevens blijven de toegelichte privacyopties gelden.",
            ar: "أوافق على نشر تفاصيل الطلب المحددة للنشر بعد مراجعتها؛ تبقى بيانات التواصل وفق خيارات الخصوصية الموضحة.",
          },
          success: {
            en: "Your purchase request has been received for review. We may contact you to complete the information before publishing it or sharing it with the appropriate parties.",
            nl: "De inkoopaanvraag is ter beoordeling ontvangen. Mogelijk nemen wij contact met u op om de informatie aan te vullen voordat de aanvraag wordt gepubliceerd of met de passende partijen wordt gedeeld.",
            ar: "وصل طلب الشراء للمراجعة. قد نتواصل معك لاستكمال المعلومات قبل نشره أو مشاركته مع الأطراف المناسبة.",
          },
        },
      },
      {
        kind: "listing",
        id: "requests",
        heading: { en: "Browse the requests", nl: "Bekijk de aanvragen", ar: "استعرض الطلبات" },
        empty: {
          en: "There are currently no published requests within your selection. You can submit a new request or adjust your search options.",
          nl: "Er zijn momenteel geen gepubliceerde aanvragen binnen uw selectie. U kunt een nieuwe aanvraag indienen of de zoekopties aanpassen.",
          ar: "لا توجد طلبات منشورة حاليًا ضمن اختيارك. يمكنك تقديم طلب جديد أو تعديل خيارات البحث.",
        },
      },
      /* extra (commit 2336702, market.ts "market/buyer-requests", the route's fourth step): human review */
      {
        kind: "register",
        items: [
          {
            title: { en: "A person reviews every match", nl: "Een mens beoordeelt elke match", ar: "إنسانٌ يراجع كل مطابقة" },
            body: {
              en: "Someone at DUKAAT checks each supplier against the request before anything reaches the buyer. We do not send lists.",
              nl: "Iemand van DUKAAT legt elke leverancier naast de aanvraag voordat er iets bij de koper komt. Wij sturen geen lijsten.",
              ar: "يراجع أحدُ أفراد فريق DUKAAT كل مورّدٍ في ضوء الطلب قبل أن يصل أي شيء إلى المشتري. نحن لا نرسل قوائم.",
            },
          },
        ],
      },
    ],
  },

  "services/stocklots-machinery": {
    masthead: { variant: "band", photo: "p-stocklots" },
    headline: {
      en: "Trade opportunities that call for clear information and considered speed",
      nl: "Commerciële kansen die om duidelijke informatie en weloverwogen snelheid vragen",
      ar: "فرص تجارية تحتاج إلى معلومات واضحة وسرعة مدروسة",
    },
    blocks: [
      {
        kind: "prose",
        heading: {
          en: "Clearances and surplus stock — DUKAAT Deals",
          nl: "Restpartijen en overtollige voorraad — DUKAAT Deals",
          ar: "التصفيات وفائض المخزون — DUKAAT Deals",
        },
        body: [
          {
            en: "A section for offers of surplus production and stock, warehouse and factory clearances, cancelled orders, discontinued products, and goods with damaged packaging or of second-grade quality, when their condition is stated precisely.",
            nl: "Een onderdeel voor aanbiedingen van productie- en voorraadoverschotten, opruimingen van magazijnen en fabrieken, geannuleerde orders, uit het assortiment genomen producten, en goederen met beschadigde verpakking of van tweede keus wanneer de staat ervan nauwkeurig wordt toegelicht.",
            ar: "قسم لعروض فائض الإنتاج والمخزون، وتصفيات المستودعات والمصانع، والطلبيات الملغاة، والمنتجات المتوقفة، والبضائع ذات التغليف المتضرر أو الدرجة الثانية عندما توضح حالتها بدقة.",
          },
          {
            en: "Sectors may include paper, printing and packaging, industrial materials, construction, furniture, textiles and others, depending on the offers available.",
            nl: "De sectoren kunnen papier, drukwerk en verpakking, industriële materialen, bouw, meubilair, textiel en andere sectoren omvatten, afhankelijk van het beschikbare aanbod.",
            ar: "يمكن أن تشمل القطاعات الورق والطباعة والتغليف، والمواد الصناعية، والبناء، والأثاث، والمنسوجات وغيرها، بحسب العروض المتاحة.",
          },
        ],
        photo: "p-stk-lots",
        size: "half",
        side: "end",
      },
      {
        kind: "prose",
        heading: {
          en: "Used machinery and equipment — DUKAAT Machinery",
          nl: "Gebruikte machines en apparatuur — DUKAAT Machinery",
          ar: "الماكينات والمعدات المستعملة — DUKAAT Machinery",
        },
        body: [
          {
            en: "A space to learn about printing, packaging and food-processing machinery, production and warehouse equipment, complete lines, and refurbished or ex-demonstration equipment, depending on what the offering parties provide.",
            nl: "Een ruimte om kennis te maken met druk-, verpakkings- en voedselproductiemachines, productie- en magazijnapparatuur, complete lijnen, en gereviseerde of voor demonstratie gebruikte apparatuur, afhankelijk van wat de aanbieders presenteren.",
            ar: "مساحة للتعرف إلى ماكينات الطباعة والتغليف وتصنيع الأغذية، ومعدات الإنتاج والمستودعات، والخطوط الكاملة، والمعدات المجددة أو المستخدمة للعرض، بحسب ما يقدمه العارضون.",
          },
        ],
        photo: "p-mach",
        size: "tall",
        side: "start",
      },
      {
        kind: "listing",
        id: "deals",
        heading: { en: "Browse clearances", nl: "Bekijk de restpartijen", ar: "استعرض التصفيات" },
        // not in the source: written 22 Oct 2026 in the voice of the "offers" listing; not shown while the listing is hidden
        empty: {
          en: "There are currently no clearances published in this section. Tell us what you are looking for, or submit your offer for review.",
          nl: "Er zijn momenteel geen restpartijen gepubliceerd in dit onderdeel. Vertel ons wat u zoekt of dien uw aanbod ter beoordeling in.",
          ar: "لا توجد تصفيات منشورة في هذا القسم حاليًا. أخبرنا بما تبحث عنه أو قدّم عرضك للمراجعة.",
        },
      },
      {
        kind: "listing",
        id: "machinery",
        heading: { en: "Browse equipment", nl: "Bekijk de apparatuur", ar: "استعرض المعدات" },
        // not in the source: written 22 Oct 2026 in the voice of the "offers" listing; not shown while the listing is hidden
        empty: {
          en: "There is currently no equipment published in this section. Tell us what you are looking for, or submit your offer for review.",
          nl: "Er is momenteel geen apparatuur gepubliceerd in dit onderdeel. Vertel ons wat u zoekt of dien uw aanbod ter beoordeling in.",
          ar: "لا توجد معدات منشورة في هذا القسم حاليًا. أخبرنا بما تبحث عنه أو قدّم عرضك للمراجعة.",
        },
      },
      {
        kind: "notice",
        body: [
          {
            en: "Check the condition, documents, transport cost and the possibility of inspection before reaching an agreement. Each offer states the capacity in which the offering party acts and the role of DUKAAT.",
            nl: "Controleer de staat, de documenten, de transportkosten en de mogelijkheid tot bezichtiging voordat u tot een akkoord komt. Bij elk aanbod worden de hoedanigheid van de aanbieder en de rol van DUKAAT toegelicht.",
            ar: "تحقق من الحالة والمستندات وتكلفة النقل وإمكان المعاينة قبل الاتفاق. تُوضح صفة العارض ودور دوكات في كل عرض.",
          },
        ],
      },
      {
        kind: "formset",
        id: "offer",
        heading: { en: "Submit an offer", nl: "Dien een aanbod in", ar: "قدّم عرضًا" },
        forms: [
          {
            id: "deals-offer",
            choice: {
              en: "Clearances and surplus stock — DUKAAT Deals",
              nl: "Restpartijen en overtollige voorraad — DUKAAT Deals",
              ar: "التصفيات وفائض المخزون — DUKAAT Deals",
            },
            title: {
              en: "Clearances and surplus stock — DUKAAT Deals",
              nl: "Restpartijen en overtollige voorraad — DUKAAT Deals",
              ar: "التصفيات وفائض المخزون — DUKAAT Deals",
            },
            fields: [
              {
                name: "goods",
                core: true, // UX-04
                label: { en: "Description of the goods", nl: "Omschrijving van de goederen", ar: "وصف البضاعة" },
                type: "textarea",
              },
              { name: "quantity", core: true /* UX-04 */, label: { en: "Quantity", nl: "Hoeveelheid", ar: "الكمية" } },
              { name: "location", core: true /* UX-04 */, label: { en: "Location", nl: "Locatie", ar: "الموقع" } },
              { name: "condition", label: { en: "Condition", nl: "Staat", ar: "الحالة" } },
              {
                name: "reason",
                label: { en: "Reason for the classification", nl: "Reden voor de classificatie", ar: "سبب التصنيف" },
              },
              { name: "photos", label: { en: "Photos", nl: "Foto's", ar: "الصور" }, type: "file", wide: true },
              { name: "packaging", label: { en: "Packaging details", nl: "Verpakkingsdetails", ar: "تفاصيل العبوات" } },
              {
                name: "dates",
                label: {
                  en: "Production and expiry dates where applicable",
                  nl: "Productie- en houdbaarheidsdatums indien van toepassing",
                  ar: "تواريخ الإنتاج والصلاحية عند انطباقها",
                },
              },
              { name: "minPurchase", label: { en: "Minimum purchase", nl: "Minimale afname", ar: "الحد الأدنى للشراء" } },
              { name: "documents", label: { en: "Documents", nl: "Documenten", ar: "المستندات" } },
              {
                name: "collection",
                label: { en: "Collection terms", nl: "Voorwaarden voor ontvangst", ar: "شروط الاستلام" },
                type: "textarea",
              },
            ],
            common: "request",
            submit: { en: "Submit an offer", nl: "Dien een aanbod in", ar: "قدّم عرضًا" },
          },
          {
            id: "machine-offer",
            choice: {
              en: "Used machinery and equipment — DUKAAT Machinery",
              nl: "Gebruikte machines en apparatuur — DUKAAT Machinery",
              ar: "الماكينات والمعدات المستعملة — DUKAAT Machinery",
            },
            title: {
              en: "Used machinery and equipment — DUKAAT Machinery",
              nl: "Gebruikte machines en apparatuur — DUKAAT Machinery",
              ar: "الماكينات والمعدات المستعملة — DUKAAT Machinery",
            },
            fields: [
              { name: "manufacturer", core: true /* UX-04 */, label: { en: "Manufacturer", nl: "Fabrikant", ar: "الشركة المصنّعة" } },
              { name: "model", core: true /* UX-04 */, label: { en: "Model", nl: "Model", ar: "الموديل" } },
              { name: "year", label: { en: "Year of manufacture", nl: "Bouwjaar", ar: "سنة الصنع" }, type: "number" },
              { name: "location", core: true /* UX-04 */, label: { en: "Location", nl: "Locatie", ar: "الموقع" } },
              { name: "condition", label: { en: "Operating condition", nl: "Operationele staat", ar: "حالة التشغيل" } },
              {
                name: "hours",
                label: { en: "Hours of use if available", nl: "Draaiuren indien beschikbaar", ar: "ساعات الاستخدام إن توفرت" },
              },
              { name: "specs", label: { en: "Specifications", nl: "Specificaties", ar: "المواصفات" }, type: "textarea" },
              { name: "accessories", label: { en: "Accessories", nl: "Toebehoren", ar: "الملحقات" } },
              {
                name: "maintenance",
                label: { en: "Available maintenance history", nl: "Beschikbare onderhoudshistorie", ar: "سجل الصيانة المتاح" },
                type: "textarea",
              },
              { name: "photos", label: { en: "Photos and video", nl: "Foto's en video", ar: "الصور والفيديو" }, type: "file", wide: true },
              {
                name: "inspection",
                label: { en: "The possibility of inspection", nl: "De mogelijkheid tot bezichtiging", ar: "إمكان المعاينة" },
              },
              {
                name: "dismantling",
                label: {
                  en: "The terms for dismantling and transport",
                  nl: "De voorwaarden voor demontage en transport",
                  ar: "شروط الفك والنقل",
                },
                type: "textarea",
              },
            ],
            common: "request",
            submit: { en: "Submit an offer", nl: "Dien een aanbod in", ar: "قدّم عرضًا" },
          },
        ],
      },
      {
        kind: "form",
        form: {
          id: "alerts",
          title: {
            en: "What kind of opportunities interest you?",
            nl: "Welk type kansen interesseert u?",
            ar: "ما نوع الفرص التي تهمك؟",
          },
          intro: {
            en: "Specify the sector, the country and the type of goods or equipment you are looking for, so that we understand your interests when relevant opportunities become available.",
            nl: "Geef de sector, het land en het type goederen of apparatuur aan dat u zoekt, zodat wij uw interesses begrijpen wanneer er relevante kansen beschikbaar komen.",
            ar: "حدّد القطاع والدولة ونوع البضاعة أو المعدات التي تبحث عنها، لنفهم اهتماماتك عند توفر فرص ذات صلة.",
          },
          fields: [
            { name: "sector", core: true /* UX-04 */, label: { en: "The sector", nl: "De sector", ar: "القطاع" } },
            { name: "targetCountry", core: true /* UX-04 */, label: { en: "The country", nl: "Het land", ar: "الدولة" } },
            {
              name: "goods",
              core: true, // UX-04
              label: {
                en: "The type of goods or equipment",
                nl: "Het type goederen of apparatuur",
                ar: "نوع البضاعة أو المعدات",
              },
            },
          ],
          common: "request",
          submit: {
            en: "Register your interest in opportunities",
            nl: "Registreer uw interesse in kansen",
            ar: "سجّل اهتمامك بالفرص",
          },
        },
      },
      /* extra (commit 2336702, market.ts "market/stocklots"): DUKAAT Deal Alert, contact through DUKAAT, human review */
      {
        kind: "prose",
        size: "half",
        side: "end",
        label: { en: "DUKAAT Deal Alert", nl: "DUKAAT Deal Alert", ar: "DUKAAT Deal Alert" },
        heading: {
          en: "A good lot *does not wait.*",
          nl: "Een goede partij *wacht niet.*",
          ar: "الدفعة الجيدة *لا تنتظر.*",
        },
        body: [
          {
            en: "Surplus is priced to sell, and it usually goes to whoever answers first with a serious offer. That is why stocklots are supported by DUKAAT Deal Alert: when a lot fits the sectors and markets a member trades in, the member hears of it directly.",
            nl: "Een overschot is geprijsd om te verkopen, en gaat meestal naar wie als eerste met een serieus bod komt. Daarom lopen partijen via DUKAAT Deal Alert: past een partij bij de sectoren en markten waarin een lid handelt, dan hoort het lid er rechtstreeks van.",
            ar: "يُسعَّر الفائض ليُباع، ويذهب في الغالب إلى أول من يتقدّم بعرضٍ جادّ. لذلك تصل دفعات المخزون عبر DUKAAT Deal Alert: فإذا ناسبت دفعةٌ القطاعاتِ والأسواقَ التي يتاجر فيها العضو، علم بها مباشرةً.",
          },
          {
            en: "The seller stays in control: nothing about the lot circulates until the seller has approved the text, and every enquiry reaches the seller through DUKAAT, from a verified member. A person reviews each lot before the alert goes out.",
            nl: "De verkoper houdt de regie: niets over de partij circuleert voordat de verkoper de tekst heeft goedgekeurd, en elke vraag bereikt de verkoper via DUKAAT, van een geverifieerd lid. Een mens beoordeelt elke partij voordat de melding uitgaat.",
            ar: "ويبقى زمام الأمر بيد البائع: فلا يُتداول شيءٌ عن الدفعة قبل أن يعتمد نصّها، ويصله كل استفسارٍ عبر DUKAAT، من عضوٍ جرى التحقق منه. ويراجع إنسانٌ كل دفعةٍ قبل أن يُرسَل التنبيه.",
          },
        ],
      },
    ],
  },
};
