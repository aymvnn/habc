import type { PageSet } from "./types";

/**
 * Legal — the group overview and four of its pages: privacy, cookies, company details, transfers outside the EU.
 * (Terms, disclaimer and publication of member data are written separately.)
 *
 * Drafts under Dutch law and the GDPR (AVG), version September 2026. The Dutch text prevails.
 * To be reviewed by a Dutch lawyer before publication.
 * Technical statements were checked against the code (29 September 2026): no cookies, no analytics, no third-party
 * scripts; fonts self-hosted through next/font; one session-storage item "dukaat-intro" = "1", written by the home
 * page's opening animation; the intake sends route, language, company, name, e-mail, country and message through
 * Resend to the mailbox and stores nothing on the site; hosting on Vercel.
 * Bracketed values are pending founders' decisions. The seat is given as the Rotterdam region (owner, 29 Sep 2026);
 * the KvK extract names the exact municipality.
 */

const version = { en: "Version: September 2026", nl: "Versie: september 2026", ar: "الإصدار: سبتمبر 2026" };

const precedence = {
  privacy: {
    en: "This statement is published in English, Dutch and Arabic. In case of any difference between the language versions, the Dutch text prevails.",
    nl: "Deze verklaring verschijnt in het Nederlands, het Engels en het Arabisch. Bij verschil tussen de taalversies gaat de Nederlandse tekst voor.",
    ar: "يُنشر هذا البيان بالإنجليزية والهولندية والعربية. وعند أي اختلاف بين النسخ اللغوية يكون النص الهولندي هو المرجع.",
  },
  policy: {
    en: "It is published in English, Dutch and Arabic. In case of any difference between the language versions, the Dutch text prevails.",
    nl: "Het verschijnt in het Nederlands, het Engels en het Arabisch. Bij verschil tussen de taalversies gaat de Nederlandse tekst voor.",
    ar: "وتُنشر هذه السياسة بالإنجليزية والهولندية والعربية. وعند أي اختلاف بين النسخ اللغوية يكون النص الهولندي هو المرجع.",
  },
  page: {
    en: "This page is published in English, Dutch and Arabic. In case of any difference between the language versions, the Dutch text prevails.",
    nl: "Deze pagina verschijnt in het Nederlands, het Engels en het Arabisch. Bij verschil tussen de taalversies gaat de Nederlandse tekst voor.",
    ar: "تُنشر هذه الصفحة بالإنجليزية والهولندية والعربية. وعند أي اختلاف بين النسخ اللغوية يكون النص الهولندي هو المرجع.",
  },
};

const link = {
  contact: { href: "contact", label: { en: "Write to us", nl: "Schrijf ons", ar: "راسلنا" } },
  privacy: { href: "legal/privacy", label: { en: "Privacy statement", nl: "Privacyverklaring", ar: "بيان الخصوصية" } },
  cookies: { href: "legal/cookies", label: { en: "Cookie policy", nl: "Cookiebeleid", ar: "سياسة ملفات تعريف الارتباط" } },
  transfers: {
    href: "legal/data-transfers",
    label: { en: "Transfers outside the EU", nl: "Doorgifte buiten de EU", ar: "نقل البيانات خارج الاتحاد الأوروبي" },
  },
  memberData: {
    href: "legal/member-data",
    label: { en: "Publication of member data", nl: "Publicatie van ledengegevens", ar: "نشر بيانات الأعضاء" },
  },
  founders: { href: "about/founders", label: { en: "Behind DUKAAT", nl: "Achter DUKAAT", ar: "خلف DUKAAT" } },
};

export const legal: PageSet = {
  /* ------------------------------------------------------------------ overview */
  legal: {
    masthead: { variant: "plate", photo: "legal-hero" },
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
        kind: "index",
        label: { en: "The texts", nl: "De teksten", ar: "النصوص" },
        heading: { en: "What we put *in writing.*", nl: "Wat wij *op papier zetten.*", ar: "ما نلتزم به *كتابةً.*" },
      },
      {
        kind: "notice",
        label: { en: "Language versions", nl: "Taalversies", ar: "النسخ اللغوية" },
        heading: { en: "Three languages, *one text.*", nl: "Drie talen, *één tekst.*", ar: "ثلاث لغات، *ونصٌّ واحد.*" },
        body: [
          {
            en: "The legal texts on this site are published in English, Dutch and Arabic, and the three versions are written to mean the same. They are drawn up under Dutch law; in case of any difference between the language versions, the Dutch text prevails.",
            nl: "De juridische teksten op deze site verschijnen in het Engels, het Nederlands en het Arabisch, en de drie versies hebben dezelfde strekking. Zij zijn opgesteld naar Nederlands recht; bij verschil tussen de taalversies gaat de Nederlandse tekst voor.",
            ar: "تُنشر النصوص القانونية في هذا الموقع بالإنجليزية والهولندية والعربية، وقد صيغت نسخها الثلاث لتؤدي المعنى نفسه. وهي محرَّرة وفق القانون الهولندي؛ وعند أي اختلاف بين النسخ اللغوية يكون النص الهولندي هو المرجع.",
          },
          {
            en: "Questions about any of these texts, or about the personal data we hold, go to [enquiries@ — domain pending]. Requests to exercise your rights under the GDPR are answered within one month.",
            nl: "Vragen over deze teksten, of over de persoonsgegevens die wij van u verwerken, kunt u sturen aan [e-mailadres — domein in afwachting]. Verzoeken om uw rechten onder de AVG uit te oefenen beantwoorden wij binnen een maand.",
            ar: "تُوجَّه الأسئلة المتعلقة بأيٍّ من هذه النصوص، أو بالبيانات الشخصية التي نحتفظ بها عنك، إلى [البريد الإلكتروني — بانتظار قرار النطاق]. ونرد على طلبات ممارسة حقوقك بموجب اللائحة العامة لحماية البيانات خلال شهر واحد.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Ask us *directly.*", nl: "Vraag het ons *rechtstreeks.*", ar: "اسألنا *مباشرةً.*" },
        body: {
          en: "Where these texts leave a question open, write to us — in Arabic, Dutch or English.",
          nl: "Laat een tekst een vraag open, schrijf ons dan — in het Arabisch, het Nederlands of het Engels.",
          ar: "إن بقي سؤالٌ لم تُجب عنه هذه النصوص، فراسلنا — بالعربية أو الهولندية أو الإنجليزية.",
        },
        links: [link.contact, link.privacy],
      },
    ],
  },

  /* ------------------------------------------------------------------ privacy statement */
  "legal/privacy": {
    masthead: { variant: "plate", photo: "leg-privacy" },
    blocks: [
      {
        kind: "legal",
        updated: version,
        intro: [
          {
            en: "This statement explains how Stichting Nederlands–Arabische Handelskamer, trading as DUKAAT, handles personal data: of visitors to this site, of people who write to us or use the intake, of members and of those nominated for or applying for membership, and of the contact persons of the companies we deal with.",
            nl: "Deze verklaring beschrijft hoe Stichting Nederlands–Arabische Handelskamer, handelend onder de naam DUKAAT, omgaat met persoonsgegevens: van bezoekers van deze site, van wie ons schrijft of de intake gebruikt, van leden en van wie voor het lidmaatschap is voorgedragen of zich heeft aangemeld, en van de contactpersonen van de bedrijven waarmee wij zakendoen.",
            ar: "يوضّح هذا البيان كيف تتعامل Stichting Nederlands–Arabische Handelskamer، التي تمارس نشاطها تحت الاسم التجاري DUKAAT، مع البيانات الشخصية: بيانات زوّار هذا الموقع، ومَن يراسلنا أو يستخدم استمارة التعارف، والأعضاء ومَن رُشّحوا للعضوية أو تقدّموا بطلبها، ومسؤولي الاتصال في الشركات التي نتعامل معها.",
          },
          {
            en: "Much of what passes through DUKAAT is company information. The General Data Protection Regulation (GDPR) applies wherever that information concerns an identifiable person — a contact person, a director, a sole trader — and this statement covers exactly that part.",
            nl: "Veel van wat via DUKAAT loopt, is bedrijfsinformatie. De Algemene verordening gegevensbescherming (AVG) is van toepassing zodra die informatie over een identificeerbaar persoon gaat — een contactpersoon, een bestuurder, een eenmanszaak — en op precies dat deel ziet deze verklaring.",
            ar: "جانبٌ كبير مما يمرّ عبر DUKAAT معلوماتٌ عن الشركات. وتسري اللائحة العامة لحماية البيانات (GDPR) متى تعلّقت هذه المعلومات بشخص يمكن تحديد هويته — مسؤول اتصال، أو مدير، أو صاحب منشأة فردية — وهذا الجزء تحديداً هو ما يتناوله هذا البيان.",
          },
          precedence.privacy,
        ],
        articles: [
          {
            title: { en: "Who we are", nl: "Wie wij zijn", ar: "من نحن" },
            body: [
              {
                en: "The controller for the processing described here is Stichting Nederlands–Arabische Handelskamer, a foundation under Dutch law trading as DUKAAT — Dutch–Arab Business Club, based in the Rotterdam region, the Netherlands. Visiting address: [Address]. Chamber of Commerce (KvK) number: [number].",
                nl: "Verwerkingsverantwoordelijke voor de verwerkingen in deze verklaring is Stichting Nederlands–Arabische Handelskamer, een stichting naar Nederlands recht die handelt onder de naam DUKAAT — Dutch–Arab Business Club, gevestigd in de regio Rotterdam. Bezoekadres: [adres]. KvK-nummer: [nummer].",
                ar: "المتحكّم في البيانات فيما يخص عمليات المعالجة الموصوفة في هذا البيان هو Stichting Nederlands–Arabische Handelskamer، وهي مؤسسة (Stichting) خاضعة للقانون الهولندي، تمارس نشاطها تحت الاسم التجاري DUKAAT — نادي الأعمال الهولندي العربي، ومقرّها في منطقة روتردام بهولندا. عنوان الزيارة: [العنوان]. رقم السجل لدى غرفة التجارة الهولندية (KvK): [الرقم].",
              },
              {
                en: "For any question about this statement or about your data, write to [enquiries@ — domain pending].",
                nl: "Voor elke vraag over deze verklaring of over uw gegevens kunt u schrijven aan [e-mailadres — domein in afwachting].",
                ar: "لأي سؤال عن هذا البيان أو عن بياناتك، راسلنا على [البريد الإلكتروني — بانتظار قرار النطاق].",
              },
            ],
          },
          {
            title: { en: "The data we process", nl: "Welke gegevens wij verwerken", ar: "البيانات التي نعالجها" },
            body: [
              {
                en: "Intake and correspondence. When you use the intake form, we receive the route you chose, your company, your name, your e-mail address, your country, your message and the language version of the site you used. When you write to us or speak with us, we keep the correspondence and our notes of the conversation.",
                nl: "Intake en correspondentie. Wanneer u het intakeformulier gebruikt, ontvangen wij de gekozen route, uw bedrijf, uw naam, uw e-mailadres, uw land, uw bericht en de taalversie van de site die u gebruikte. Wanneer u ons schrijft of spreekt, bewaren wij de correspondentie en onze aantekeningen van het gesprek.",
                ar: "الاستمارة والمراسلات. عند استخدامك استمارة التعارف، نتلقى المسار الذي اخترته، واسم شركتك، واسمك، وبريدك الإلكتروني، وبلدك، ورسالتك، والنسخة اللغوية من الموقع التي استخدمتها. وعندما تراسلنا أو تتحدث إلينا، نحتفظ بالمراسلات وبملاحظاتنا عن الحديث.",
              },
              {
                en: "Nominations. When a member nominates you, that member gives us your name, your company and your contact details, together with what they tell us about you.",
                nl: "Voordrachten. Wanneer een lid u voordraagt, ontvangen wij van dat lid uw naam, uw bedrijf en uw contactgegevens, samen met wat het lid ons over u vertelt.",
                ar: "الترشيحات. عندما يرشّحك أحد الأعضاء، يزوّدنا ذلك العضو باسمك واسم شركتك وبيانات الاتصال بك، إلى جانب ما يخبرنا به عنك.",
              },
              {
                en: "Members. For admission and membership we process your member profile — company details, contact persons, what you offer and what you look for, your markets and sectors, and any images you provide — and your membership number. For verification we process your company registration, VAT number, website, address, export experience, certifications, the references you name, the documents you provide, and information on the persons who own or control the company. Where we ask for an identity document, we ask only for what verification requires: you may mask the photograph and national identification numbers, and we never ask for a Dutch citizen service number (BSN).",
                nl: "Leden. Voor toelating en lidmaatschap verwerken wij uw ledenprofiel — bedrijfsgegevens, contactpersonen, wat u aanbiedt en wat u zoekt, uw markten en sectoren, en de beelden die u aanlevert — en uw lidnummer. Voor de verificatie verwerken wij uw inschrijving in het handelsregister, btw-nummer, website, adres, exportervaring, certificaten, de referenties die u opgeeft, de documenten die u aanlevert, en gegevens over de personen die het bedrijf bezitten of er zeggenschap over hebben. Vragen wij om een identiteitsbewijs, dan vragen wij alleen wat de verificatie vereist: u mag de pasfoto en nationale identificatienummers afschermen, en wij vragen nooit om een burgerservicenummer (BSN).",
                ar: "الأعضاء. لأغراض القبول والعضوية نعالج ملفك التعريفي بوصفك عضواً — بيانات الشركة، ومسؤولي الاتصال، وما تعرضه وما تبحث عنه، وأسواقك وقطاعاتك، وأي صور تقدّمها — ورقم عضويتك. ولأغراض التحقق نعالج قيد شركتك في السجل التجاري، ورقم ضريبة القيمة المضافة، والموقع الإلكتروني، والعنوان، والخبرة في التصدير، والشهادات، والمراجع التي تذكرها، والمستندات التي تقدّمها، والمعلومات المتعلقة بالأشخاص الذين يملكون الشركة أو يسيطرون عليها. وحين نطلب وثيقة هوية، لا نطلب إلا ما يقتضيه التحقق: فلك أن تحجب الصورة الشخصية وأرقام الهوية الوطنية، ولا نطلب أبداً رقم الخدمة المدنية الهولندي (BSN).",
              },
              {
                en: "Participation and invoicing. When you take part in an event, a trade mission or an introduction, we record your participation and the practical details it requires. For invoicing we process billing details and payment records.",
                nl: "Deelname en facturatie. Wanneer u deelneemt aan een evenement, een handelsmissie of een introductie, leggen wij uw deelname vast, met de praktische gegevens die daarvoor nodig zijn. Voor de facturatie verwerken wij factuurgegevens en betalingsgegevens.",
                ar: "المشاركة والفوترة. عند مشاركتك في فعالية أو بعثة تجارية أو تعريف، نسجّل مشاركتك والتفاصيل العملية التي تستلزمها. ولأغراض الفوترة نعالج بيانات الفواتير وسجلات الدفع.",
              },
              {
                en: "Technical data. When your browser requests a page, our hosting provider records technical data in server logs: IP address, date and time, the page requested and the browser used. These logs serve only to operate and secure the site. The site uses no analytics or tracking cookies (see the Cookie policy).",
                nl: "Technische gegevens. Wanneer uw browser een pagina opvraagt, legt onze hostingprovider technische gegevens vast in serverlogs: IP-adres, datum en tijd, de opgevraagde pagina en de gebruikte browser. Die logs dienen uitsluitend voor de werking en beveiliging van de site. De site gebruikt geen analytische of trackingcookies (zie het Cookiebeleid).",
                ar: "البيانات التقنية. عندما يطلب متصفحك صفحةً ما، يسجّل مزوّد الاستضافة الذي نتعامل معه بيانات تقنية في سجلات الخادم: عنوان IP، والتاريخ والوقت، والصفحة المطلوبة، والمتصفح المستخدم. ولا تُستخدم هذه السجلات إلا لتشغيل الموقع وتأمينه. ولا يستخدم الموقع ملفات تعريف ارتباط للتحليل أو التتبّع (انظر سياسة ملفات تعريف الارتباط).",
              },
              {
                en: "We do not ask for special categories of personal data, such as data concerning health, religion or political opinions; please do not send them. You are not obliged to give us any data, but without the details the intake asks for we cannot answer you, and without verification data we cannot admit you.",
                nl: "Wij vragen niet om bijzondere persoonsgegevens, zoals gegevens over gezondheid, godsdienst of politieke opvattingen; stuurt u die ons alstublieft niet. U bent niet verplicht ons gegevens te verstrekken, maar zonder de gegevens die de intake vraagt kunnen wij u niet antwoorden, en zonder verificatiegegevens kunnen wij u niet toelaten.",
                ar: "لا نطلب فئات خاصة من البيانات الشخصية، كالبيانات المتعلقة بالصحة أو الدين أو الآراء السياسية؛ فنرجو ألا ترسلها إلينا. ولست ملزماً بتزويدنا بأي بيانات، غير أننا لا نستطيع الرد عليك دون البيانات التي تطلبها الاستمارة، ولا قبول عضويتك دون بيانات التحقق.",
              },
            ],
          },
          {
            title: { en: "Where the data comes from", nl: "Waar de gegevens vandaan komen", ar: "مصادر البيانات" },
            body: [
              {
                en: "Most of the data we hold, you give us yourself. We also receive data from a member who nominates you; from public sources, such as trade registers, company websites and the sanctions lists of the European Union, the United Nations and the Netherlands; from the references you name; and, in the course of an introduction, from the counterparty you are introduced to. If we receive your data from someone other than you, we tell you so when we first contact you, and at the latest within one month.",
                nl: "De meeste gegevens ontvangen wij van u zelf. Daarnaast ontvangen wij gegevens van een lid dat u voordraagt; uit openbare bronnen, zoals handelsregisters, bedrijfswebsites en de sanctielijsten van de Europese Unie, de Verenigde Naties en Nederland; van de referenties die u opgeeft; en, in de loop van een introductie, van de tegenpartij aan wie u wordt voorgesteld. Ontvangen wij uw gegevens van een ander dan uzelf, dan laten wij u dat weten bij ons eerste contact, en uiterlijk binnen een maand.",
                ar: "معظم البيانات التي نحتفظ بها تقدّمها لنا أنت بنفسك. ونتلقى بيانات أيضاً من العضو الذي يرشّحك؛ ومن مصادر متاحة للعموم، كالسجلات التجارية ومواقع الشركات وقوائم العقوبات الصادرة عن الاتحاد الأوروبي والأمم المتحدة وهولندا؛ ومن المراجع التي تذكرها؛ ومن الطرف المقابل الذي نعرّفك به، في سياق التعريف. وإذا تلقّينا بياناتك من غيرك، أعلمناك بذلك عند أول تواصل لنا معك، وفي غضون شهر واحد على الأكثر.",
              },
              {
                en: "If you give us the details of another person — a colleague, a reference — please let them know, and point them to this statement.",
                nl: "Geeft u ons de gegevens van een ander — een collega, een referentie — laat die persoon dat dan weten en wijs hem of haar op deze verklaring.",
                ar: "وإذا زوّدتنا ببيانات شخص آخر — زميل أو مرجع — فنرجو أن تُعلمه بذلك وأن تحيله إلى هذا البيان.",
              },
            ],
          },
          {
            title: { en: "Purposes and legal bases", nl: "Doeleinden en grondslagen", ar: "أغراض المعالجة وأسسها القانونية" },
            body: [
              {
                en: "To answer an intake, to assess admission, and to perform the membership and any project work you commission: replying, verifying, matching, introducing, organising events and trade missions, sending members the newsletters and alerts that belong to their level, and invoicing. Basis: steps taken at your request before an agreement, and the agreement itself (GDPR art. 6(1)(b)).",
                nl: "Om een intake te beantwoorden, een toelating te beoordelen en het lidmaatschap en eventueel projectwerk uit te voeren: antwoorden, verifiëren, koppelen, introduceren, evenementen en handelsmissies organiseren, leden de nieuwsbrieven en kansenmeldingen sturen die bij hun niveau horen, en factureren. Grondslag: de stappen die op uw verzoek vóór een overeenkomst worden gezet, en de overeenkomst zelf (artikel 6 lid 1 sub b AVG).",
                ar: "للرد على ما يرد عبر استمارة التعارف، والنظر في القبول، والوفاء بالتزامات العضوية وأي أعمال مشاريع تكلّفنا بها: الرد، والتحقق، والمطابقة، والتعريف، وتنظيم الفعاليات والبعثات التجارية، وإرسال النشرات والتنبيهات التي يشملها مستوى عضوية كل عضو، والفوترة. الأساس القانوني: اتخاذ خطوات بناءً على طلبك قبل إبرام العقد، وتنفيذ العقد ذاته (المادة 6(1)(ب) من اللائحة العامة لحماية البيانات).",
              },
              {
                en: "To comply with legal obligations, such as the statutory duty to keep financial records and, where the law requires it, the identification of the parties we work with and checks against sanctions lists. Basis: legal obligation (art. 6(1)(c)).",
                nl: "Om te voldoen aan wettelijke verplichtingen, zoals de bewaarplicht voor de administratie en, waar de wet dat vereist, de identificatie van de partijen met wie wij werken en de controle aan de hand van sanctielijsten. Grondslag: wettelijke verplichting (artikel 6 lid 1 sub c AVG).",
                ar: "للوفاء بالتزاماتنا القانونية، كواجب الاحتفاظ بالسجلات المالية الذي يفرضه القانون، وكالتحقق من هوية الأطراف التي نعمل معها ومطابقة أسمائها بقوائم العقوبات، حيثما يقتضي القانون ذلك. الأساس القانوني: الالتزام القانوني (المادة 6(1)(ج)).",
              },
              {
                en: "To verify counterparties before anyone is introduced, to assess a nomination or an application, to keep a record of the introductions we make, to secure this site and our systems against misuse, and to establish or defend legal claims. Basis: our legitimate interests, and those of our members, in doing business with parties who are who they say they are (art. 6(1)(f)). We weigh those interests against yours, and you may object (see article 10).",
                nl: "Om tegenpartijen te verifiëren voordat iemand wordt geïntroduceerd, een voordracht of aanmelding te beoordelen, vast te leggen welke introducties wij maken, deze site en onze systemen te beveiligen tegen misbruik, en om rechtsvorderingen in te stellen of ons ertegen te verweren. Grondslag: ons gerechtvaardigd belang, en dat van onze leden, om zaken te doen met partijen die zijn wie zij zeggen te zijn (artikel 6 lid 1 sub f AVG). Wij wegen die belangen af tegen de uwe, en u kunt bezwaar maken (zie artikel 10).",
                ar: "للتحقق من الأطراف المقابلة قبل تعريف أي طرف بآخر، والنظر في الترشيحات وطلبات الانضمام، وتوثيق التعريفات التي نجريها، وحماية هذا الموقع وأنظمتنا من إساءة الاستخدام، وإقامة المطالبات القانونية أو الدفاع في مواجهتها. الأساس القانوني: مصلحتنا المشروعة، ومصلحة أعضائنا، في التعامل مع أطراف هم حقاً مَن يقولون إنهم هم (المادة 6(1)(و)). ونوازن بين هذه المصالح ومصالحك، ولك أن تعترض (انظر المادة 10 من هذا البيان).",
              },
              {
                en: "To publish information about you or your company in the member directory, in DUKAAT Market and in Stories. Basis: your consent (art. 6(1)(a)). You may withdraw it at any time; withdrawal does not affect the lawfulness of publication before it, and we then remove the item without undue delay. The page ‘Publication of member data’ sets out what is published and how.",
                nl: "Om gegevens over u of uw bedrijf te publiceren in het Ledenregister, in DUKAAT Market en in Verhalen. Grondslag: uw toestemming (artikel 6 lid 1 sub a AVG). U kunt die op elk moment intrekken; dat laat de rechtmatigheid van publicatie daarvóór onverlet, en wij verwijderen het betreffende onderdeel dan zonder onnodige vertraging. De pagina ‘Publicatie van ledengegevens’ beschrijft wat wordt gepubliceerd en hoe.",
                ar: "لنشر معلومات عنك أو عن شركتك في دليل الأعضاء وفي سوق DUKAAT وفي قسم القصص. الأساس القانوني: موافقتك (المادة 6(1)(أ)). ويمكنك سحبها في أي وقت؛ ولا يمسّ سحبُها مشروعيةَ ما نُشر قبله، وعندئذٍ نزيل المحتوى المعني دون تأخير لا مبرر له. وتبيّن صفحة «نشر بيانات الأعضاء» ما يُنشر وكيف يُنشر.",
              },
            ],
          },
          {
            title: { en: "Who receives data", nl: "Wie gegevens ontvangt", ar: "مَن يتلقى البيانات" },
            body: [
              {
                en: "Our service providers process data on our instructions and under a processing agreement: Vercel, which hosts this site; Resend, which delivers the messages sent through the intake form to our mailbox; and the providers of our e-mail, office and accounting software.",
                nl: "Onze dienstverleners verwerken gegevens in onze opdracht en op basis van een verwerkersovereenkomst: Vercel, dat deze site host; Resend, dat de berichten uit het intakeformulier in onze mailbox aflevert; en de leveranciers van onze e-mail-, kantoor- en boekhoudsoftware.",
                ar: "يعالج مزوّدو الخدمات لدينا البيانات وفق تعليماتنا وبموجب اتفاقية معالجة بيانات: Vercel التي تستضيف هذا الموقع، وResend التي توصل الرسائل المرسلة عبر استمارة التعارف إلى صندوق بريدنا، ومزوّدو برامج البريد الإلكتروني والبرمجيات المكتبية وبرامج المحاسبة التي نستخدمها.",
              },
              {
                en: "Other parties receive data only where our work requires it: a counterparty, a specialist or an ambassador, as part of an introduction you asked for or with your consent; other members and visitors to this site, for what you have agreed to publish; the accountants and legal advisers we engage, who are bound to confidentiality; and public authorities, where the law obliges us.",
                nl: "Andere partijen ontvangen gegevens alleen waar ons werk dat vereist: een tegenpartij, een specialist of een ambassadeur, als onderdeel van een introductie waarom u hebt gevraagd of met uw toestemming; andere leden en bezoekers van deze site, voor zover u publicatie hebt goedgekeurd; accountants en juridisch adviseurs die wij inschakelen en die tot geheimhouding verplicht zijn; en overheidsinstanties, waar de wet ons daartoe verplicht.",
                ar: "ولا تتلقى أطراف أخرى البيانات إلا حيث يقتضي عملنا ذلك: الطرف المقابل أو المختص أو السفير، في إطار تعريف طلبته أو بموافقتك؛ والأعضاء الآخرون وزوّار هذا الموقع، في حدود ما وافقت على نشره؛ والمحاسبون والمستشارون القانونيون الذين نستعين بهم، وهم ملزمون بالسرية؛ والسلطات العامة، حين يُلزمنا القانون بذلك.",
              },
            ],
          },
          {
            title: {
              en: "Transfers outside the European Economic Area",
              nl: "Doorgifte buiten de Europese Economische Ruimte",
              ar: "نقل البيانات خارج المنطقة الاقتصادية الأوروبية",
            },
            body: [
              {
                en: "Introductions between Europe and the Arab world can mean that data travels to countries outside the European Economic Area, and the service providers that host this site and deliver its intake messages are based in the United States. Such transfers take place only with the safeguards the GDPR requires, such as the Standard Contractual Clauses of the European Commission. The page ‘Transfers outside the EU’ explains when data travels, what travels and how to obtain a copy of the safeguards.",
                nl: "Introducties tussen Europa en de Arabische wereld kunnen betekenen dat gegevens naar landen buiten de Europese Economische Ruimte gaan, en de dienstverleners die deze site hosten en de berichten uit de intake afleveren, zijn gevestigd in de Verenigde Staten. Zulke doorgifte vindt alleen plaats met de waarborgen die de AVG vereist, zoals de standaardcontractbepalingen van de Europese Commissie. De pagina ‘Doorgifte buiten de EU’ legt uit wanneer gegevens reizen, welke gegevens dat zijn en hoe u een kopie van de waarborgen verkrijgt.",
                ar: "قد تقتضي التعريفات بين أوروبا والعالم العربي نقلَ بيانات إلى دول خارج المنطقة الاقتصادية الأوروبية، كما أن مزوّدَي الخدمات اللذين يستضيفان هذا الموقع ويوصلان رسائل استمارة التعارف مقرّهما في الولايات المتحدة. ولا يجري هذا النقل إلا مع توافر الضمانات التي تشترطها اللائحة العامة لحماية البيانات، كالبنود التعاقدية القياسية الصادرة عن المفوضية الأوروبية. وتوضّح صفحة «نقل البيانات خارج الاتحاد الأوروبي» متى تنتقل البيانات، وأي البيانات تنتقل، وكيف تحصل على نسخة من الضمانات.",
              },
            ],
          },
          {
            title: { en: "How long we keep data", nl: "Hoe lang wij gegevens bewaren", ar: "مدة الاحتفاظ بالبيانات" },
            body: [
              {
                en: "We keep personal data no longer than its purpose requires.",
                nl: "Wij bewaren persoonsgegevens niet langer dan het doel vereist.",
                ar: "لا نحتفظ بالبيانات الشخصية مدةً أطول مما يقتضيه الغرض منها.",
              },
              {
                en: "Intakes, nominations and applications that lead to neither a membership nor a project engagement: [12] months after our last contact.",
                nl: "Intakes, voordrachten en aanmeldingen die niet tot een lidmaatschap of een projectopdracht leiden: [12] maanden na ons laatste contact.",
                ar: "رسائل الاستمارة والترشيحات وطلبات الانضمام التي لا تُفضي إلى عضوية ولا إلى تكليف بمشروع: [12] شهراً بعد آخر تواصل بيننا.",
              },
              {
                en: "Membership and project data — profile, verification data, correspondence and project files: for the duration of the membership or the engagement, and then no longer than [24] months, unless a statutory period requires longer. A published profile is taken down without undue delay when the membership ends or you withdraw your consent.",
                nl: "Leden- en projectgegevens — profiel, verificatiegegevens, correspondentie en projectdossiers: zolang het lidmaatschap of de opdracht duurt, en daarna niet langer dan [24] maanden, tenzij een wettelijke termijn langer bewaren vereist. Een gepubliceerd profiel wordt zonder onnodige vertraging van de site verwijderd wanneer het lidmaatschap eindigt of u uw toestemming intrekt.",
                ar: "بيانات العضوية والمشاريع — الملف التعريفي وبيانات التحقق والمراسلات وملفات المشاريع: طوال مدة العضوية أو التكليف، ثم مدةً لا تتجاوز [24] شهراً، ما لم تقتضِ مدةٌ قانونية الاحتفاظَ بها أطول من ذلك. ويُزال الملف المنشور دون تأخير لا مبرر له عند انتهاء العضوية أو سحب موافقتك.",
              },
              {
                en: "Invoices, payment records and other financial records: seven years, as Dutch tax and civil law require.",
                nl: "Facturen, betalingsgegevens en de overige financiële administratie: zeven jaar, zoals de Nederlandse fiscale en civielrechtelijke bewaarplicht voorschrijft.",
                ar: "الفواتير وسجلات الدفع وسائر السجلات المالية: سبع سنوات، وفق ما يقتضيه القانونان الضريبي والمدني الهولنديان.",
              },
              {
                en: "Server logs: for the limited period set by our hosting provider, after which they are deleted automatically. Where data is needed to establish or defend a legal claim, we keep it until that matter is closed.",
                nl: "Serverlogs: gedurende de beperkte termijn die onze hostingprovider hanteert, waarna zij automatisch worden verwijderd. Zijn gegevens nodig om een rechtsvordering in te stellen of ons ertegen te verweren, dan bewaren wij ze tot die zaak is afgerond.",
                ar: "سجلات الخادم: للمدة المحدودة التي يحددها مزوّد الاستضافة، ثم تُحذف تلقائياً. وإذا لزمت بياناتٌ لإقامة مطالبة قانونية أو الدفاع في مواجهتها، احتفظنا بها حتى تُحسم تلك المسألة.",
              },
            ],
          },
          {
            title: { en: "Security", nl: "Beveiliging", ar: "أمن البيانات" },
            body: [
              {
                en: "We take appropriate technical and organisational measures against loss, misuse and unauthorised access. This site is served only over an encrypted connection; access to members’ files is limited to the people who need it for their work, each bound to confidentiality; and our service providers are bound by processing agreements.",
                nl: "Wij nemen passende technische en organisatorische maatregelen tegen verlies, misbruik en onbevoegde toegang. Deze site is alleen via een versleutelde verbinding bereikbaar; toegang tot ledendossiers is beperkt tot wie die voor het werk nodig heeft, steeds met een geheimhoudingsplicht; en onze dienstverleners zijn gebonden aan verwerkersovereenkomsten.",
                ar: "نتخذ تدابير تقنية وتنظيمية مناسبة للحماية من الفقدان وإساءة الاستخدام والوصول غير المصرّح به. فهذا الموقع لا يُتاح إلا عبر اتصال مشفّر؛ والوصول إلى ملفات الأعضاء مقصور على مَن يحتاجون إليها في عملهم، وكلٌّ منهم ملزم بالسرية؛ ومزوّدو الخدمات لدينا ملتزمون باتفاقيات معالجة البيانات.",
              },
              {
                en: "Should a personal data breach occur that poses a risk to you, we report it to the Autoriteit Persoonsgegevens within 72 hours and, where the risk is high, inform you without undue delay.",
                nl: "Doet zich een datalek voor dat een risico voor u meebrengt, dan melden wij dat binnen 72 uur bij de Autoriteit Persoonsgegevens en informeren wij u, bij een hoog risico, zonder onnodige vertraging.",
                ar: "وإذا وقع خرقٌ للبيانات الشخصية يشكّل خطراً عليك، أبلغنا به هيئة حماية البيانات الهولندية (Autoriteit Persoonsgegevens) خلال 72 ساعة، وأعلمناك به دون تأخير لا مبرر له إذا كان الخطر مرتفعاً.",
              },
            ],
          },
          {
            title: { en: "Decisions are made by people", nl: "Mensen nemen de beslissingen", ar: "القرار للإنسان" },
            body: [
              {
                en: "Technology narrows the search; people verify. Admission decisions are taken by people, and a person reviews every match before it reaches you — we do not send lists. We do not take decisions based solely on automated processing, including profiling, that have legal effects for you or affect you in a similarly significant way.",
                nl: "Technologie verkleint het zoekveld; mensen verifiëren. Over toelating beslissen mensen, en een mens beoordeelt elke match voordat die u bereikt — wij sturen geen lijsten. Wij nemen geen besluiten die uitsluitend op geautomatiseerde verwerking berusten, profilering daaronder begrepen, en die rechtsgevolgen voor u hebben of u anderszins in aanmerkelijke mate treffen.",
                ar: "التقنية تضيّق البحث؛ والبشر يتحققون. وقرارات القبول يتخذها بشر، ويراجع إنسانٌ كل مطابقة قبل أن تصلك — نحن لا نرسل قوائم. ولا نتخذ أي قرار يستند حصراً إلى المعالجة الآلية، بما في ذلك التنميط، ويُرتّب آثاراً قانونية بالنسبة إليك أو يؤثر فيك تأثيراً جوهرياً مماثلاً.",
              },
            ],
          },
          {
            title: { en: "Your rights", nl: "Uw rechten", ar: "حقوقك" },
            body: [
              {
                en: "You have the right to access the personal data we hold about you; to have it corrected or erased; to have its processing restricted; to receive the data you gave us in a structured, commonly used format and have it passed to another party; and to object to processing based on legitimate interests. Where processing rests on your consent, you may withdraw that consent at any time.",
                nl: "U hebt het recht op inzage in de persoonsgegevens die wij van u verwerken; op rectificatie of wissing daarvan; op beperking van de verwerking; op ontvangst van de gegevens die u ons hebt verstrekt in een gestructureerde, gangbare vorm en op overdracht daarvan aan een ander; en op bezwaar tegen verwerking die op een gerechtvaardigd belang berust. Berust een verwerking op uw toestemming, dan kunt u die toestemming op elk moment intrekken.",
                ar: "لك الحق في الاطلاع على البيانات الشخصية التي نحتفظ بها عنك؛ وفي تصحيحها أو محوها؛ وفي تقييد معالجتها؛ وفي الحصول على البيانات التي قدّمتها إلينا بصيغة منظّمة وشائعة الاستخدام، ونقلها إلى جهة أخرى؛ وفي الاعتراض على المعالجة القائمة على المصالح المشروعة. وإذا كانت المعالجة تستند إلى موافقتك، فلك أن تسحب هذه الموافقة في أي وقت.",
              },
              {
                en: "Send your request to [enquiries@ — domain pending]. We may ask you to confirm your identity. We answer within one month; for complex requests this may be extended by up to two further months, in which case we tell you why within the first month. Exercising your rights is free of charge, unless a request is manifestly unfounded or excessive.",
                nl: "Stuur uw verzoek aan [e-mailadres — domein in afwachting]. Wij kunnen u vragen uw identiteit te bevestigen. Wij antwoorden binnen een maand; bij complexe verzoeken kan die termijn met ten hoogste twee maanden worden verlengd, en dan laten wij u binnen de eerste maand weten waarom. Het uitoefenen van uw rechten is kosteloos, tenzij een verzoek kennelijk ongegrond of buitensporig is.",
                ar: "أرسل طلبك إلى [البريد الإلكتروني — بانتظار قرار النطاق]. وقد نطلب منك تأكيد هويتك. ونرد خلال شهر واحد؛ ويجوز في الطلبات المعقّدة تمديد هذه المدة بما لا يزيد على شهرين إضافيين، وعندئذٍ نُعلمك بسبب التمديد خلال الشهر الأول. وممارستك لحقوقك مجانية، ما لم يكن الطلب بلا أساس على نحو واضح، أو مفرطاً.",
              },
            ],
          },
          {
            title: { en: "Contact and complaints", nl: "Contact en klachten", ar: "التواصل والشكاوى" },
            body: [
              {
                en: "Questions about this statement go to [enquiries@ — domain pending], or by post to Stichting Nederlands–Arabische Handelskamer, [Address].",
                nl: "Vragen over deze verklaring kunt u sturen aan [e-mailadres — domein in afwachting], of per post aan Stichting Nederlands–Arabische Handelskamer, [adres].",
                ar: "تُوجَّه الأسئلة المتعلقة بهذا البيان إلى [البريد الإلكتروني — بانتظار قرار النطاق]، أو بالبريد العادي إلى Stichting Nederlands–Arabische Handelskamer، [العنوان].",
              },
              {
                en: "If you believe we handle your data incorrectly, please tell us first, so that we can put it right. You also have the right to lodge a complaint with the Dutch Data Protection Authority, the Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl), or with the supervisory authority of the EU country where you live or work.",
                nl: "Vindt u dat wij niet goed met uw gegevens omgaan, laat het ons dan eerst weten, zodat wij het kunnen herstellen. U hebt daarnaast het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl), of bij de toezichthouder in het EU-land waar u woont of werkt.",
                ar: "إن كنت ترى أننا لا نتعامل مع بياناتك على النحو الصحيح، فنرجو أن تُخبرنا أولاً حتى نتمكن من تصحيح الأمر. ولك أيضاً الحق في تقديم شكوى إلى هيئة حماية البيانات الهولندية، Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl)، أو إلى السلطة الرقابية في دولة الاتحاد الأوروبي التي تقيم أو تعمل فيها.",
              },
            ],
          },
          {
            title: { en: "Changes to this statement", nl: "Wijzigingen", ar: "التعديلات على هذا البيان" },
            body: [
              {
                en: "We amend this statement when our services or the law change. The version date at the top shows which text applies. Members are informed of material changes by e-mail before they take effect.",
                nl: "Wij passen deze verklaring aan wanneer onze diensten of de wet veranderen. De versiedatum bovenaan toont welke tekst geldt. Leden worden over wezenlijke wijzigingen per e-mail geïnformeerd voordat die ingaan.",
                ar: "نعدّل هذا البيان كلما تغيّرت خدماتنا أو تغيّر القانون. ويدلّ تاريخ الإصدار المثبت في أعلى الصفحة على النص الساري. ونُعلم الأعضاء بالتعديلات الجوهرية بالبريد الإلكتروني قبل سريانها.",
              },
            ],
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Texts that *belong with this one.*", nl: "Teksten die *hierbij horen.*", ar: "نصوص *مكمّلة لهذا البيان.*" },
        links: [link.transfers, link.memberData, link.cookies],
      },
    ],
  },

  /* ------------------------------------------------------------------ cookie policy */
  "legal/cookies": {
    masthead: { variant: "plate", photo: "leg-cookies" },
    blocks: [
      {
        kind: "legal",
        updated: version,
        intro: [
          {
            en: "This policy explains what this website stores in your browser, and what it does not. It applies to every language version of the site.",
            nl: "Dit beleid beschrijft wat deze website in uw browser opslaat, en wat niet. Het geldt voor elke taalversie van de site.",
            ar: "توضّح هذه السياسة ما يخزّنه هذا الموقع في متصفحك، وما لا يخزّنه. وتسري على جميع النسخ اللغوية للموقع.",
          },
          precedence.policy,
        ],
        articles: [
          {
            title: { en: "What this policy covers", nl: "Waarop dit beleid ziet", ar: "نطاق هذه السياسة" },
            body: [
              {
                en: "Cookies are small files a website places in your browser. Similar techniques, such as local storage and session storage, keep information in your browser in much the same way. Dutch law (article 11.7a of the Telecommunications Act) treats them alike: storing information on your device, or reading it from there, requires your consent, unless it serves only to transmit a communication or is strictly necessary to provide the service you asked for.",
                nl: "Cookies zijn kleine bestanden die een website in uw browser plaatst. Vergelijkbare technieken, zoals lokale opslag en sessieopslag, bewaren op vrijwel dezelfde manier informatie in uw browser. De Nederlandse wet (artikel 11.7a Telecommunicatiewet) behandelt ze gelijk: informatie op uw apparaat opslaan of daar uitlezen vereist uw toestemming, tenzij dat alleen dient om communicatie over te brengen of strikt noodzakelijk is voor de dienst waar u om vraagt.",
                ar: "ملفات تعريف الارتباط (cookies) ملفات صغيرة يضعها موقع إلكتروني في متصفحك. وتحفظ تقنيات مماثلة، كالتخزين المحلي (local storage) وتخزين الجلسة (session storage)، المعلومات في متصفحك بالطريقة نفسها تقريباً. ويعاملها القانون الهولندي (المادة 11.7a من قانون الاتصالات) معاملةً واحدة: فتخزين المعلومات على جهازك أو قراءتها منه يتطلب موافقتك، ما لم يكن الغرض الوحيد منه نقلَ اتصالٍ ما، أو كان لا غنى عنه لتقديم الخدمة التي طلبتها.",
              },
            ],
          },
          {
            title: { en: "No tracking", nl: "Geen tracking", ar: "لا تتبّع" },
            body: [
              {
                en: "This site places no analytics, advertising or tracking cookies, and it loads nothing from third parties: no trackers, social media buttons, embedded videos or maps. Its typefaces are served from the site’s own domain, so opening a page does not contact a font provider. We build no profile of your visit.",
                nl: "Deze site plaatst geen analytische, advertentie- of trackingcookies, en laadt niets van derden: geen trackers, knoppen van sociale media, ingesloten video’s of kaarten. De lettertypen komen van het eigen domein van de site, zodat het openen van een pagina geen contact legt met een letterleverancier. Wij maken geen profiel van uw bezoek.",
                ar: "لا يضع هذا الموقع ملفات تعريف ارتباط للتحليل أو الإعلان أو التتبّع، ولا يحمّل أي شيء من أطراف ثالثة: لا أدوات تتبّع، ولا أزرار وسائل التواصل الاجتماعي، ولا مقاطع فيديو أو خرائط مضمّنة. وتُحمَّل خطوطه من نطاق الموقع نفسه، فلا يؤدي فتح أي صفحة إلى الاتصال بمزوّد خطوط. ولا نُنشئ أي ملف تعريفي عن زيارتك.",
              },
              {
                en: "When your browser requests a page, our hosting provider does record technical data in server logs. That places nothing on your device; the Privacy statement explains what those logs contain and how long they are kept.",
                nl: "Wanneer uw browser een pagina opvraagt, legt onze hostingprovider wel technische gegevens vast in serverlogs. Daarbij wordt niets op uw apparaat geplaatst; de Privacyverklaring beschrijft wat die logs bevatten en hoe lang zij worden bewaard.",
                ar: "أما عندما يطلب متصفحك صفحةً ما، فإن مزوّد الاستضافة الذي نتعامل معه يسجّل بيانات تقنية في سجلات الخادم. ولا يضع ذلك شيئاً على جهازك؛ ويوضّح بيان الخصوصية ما تتضمنه هذه السجلات ومدة الاحتفاظ بها.",
              },
            ],
          },
          {
            title: { en: "The one item this site stores", nl: "Het enige gegeven dat deze site opslaat", ar: "العنصر الوحيد الذي يخزّنه الموقع" },
            body: [
              {
                en: "The site stores one technical item in your browser’s session storage, named “dukaat-intro”, with the value “1”. It records only that the opening animation on the home page has been shown during this visit, so that the animation does not play again each time you return to the home page.",
                nl: "De site slaat één technisch gegeven op in de sessieopslag van uw browser, met de naam “dukaat-intro” en de waarde “1”. Het legt alleen vast dat de openingsanimatie op de homepage tijdens dit bezoek is getoond, zodat die niet opnieuw wordt afgespeeld telkens wanneer u naar de homepage terugkeert.",
                ar: "يخزّن الموقع عنصراً تقنياً واحداً في مساحة تخزين الجلسة بمتصفحك، اسمه «dukaat-intro» وقيمته «1». ولا يسجّل هذا العنصر سوى أن الحركة الافتتاحية في الصفحة الرئيسية قد عُرضت خلال هذه الزيارة، حتى لا تُعرض مجدداً في كل مرة تعود فيها إلى الصفحة الرئيسية.",
              },
              {
                en: "The item contains no personal data, cannot be read by other websites and is not sent to us or to anyone else. It is deleted automatically when you close the tab. Because it serves only the working of the page during your visit and has no other use, it needs no consent.",
                nl: "Het gegeven bevat geen persoonsgegevens, is niet leesbaar voor andere websites en wordt niet naar ons of naar iemand anders verstuurd. Het wordt automatisch verwijderd wanneer u het tabblad sluit. Omdat het uitsluitend de werking van de pagina tijdens uw bezoek dient en geen ander gebruik kent, is er geen toestemming voor nodig.",
                ar: "لا يتضمن هذا العنصر أي بيانات شخصية، ولا تستطيع مواقع أخرى قراءته، ولا يُرسل إلينا ولا إلى أي جهة أخرى. ويُحذف تلقائياً عند إغلاق علامة التبويب. ولأنه لا يخدم سوى عمل الصفحة أثناء زيارتك، ولا استخدام له غير ذلك، فلا يحتاج إلى موافقة.",
              },
            ],
          },
          {
            title: { en: "The intake form", nl: "Het intakeformulier", ar: "استمارة التعارف" },
            body: [
              {
                en: "The intake form uses no cookies. What you type stays in your browser until you press send; only then are the fields sent, through our e-mail delivery provider, to our mailbox. Nothing is kept on this website itself. The Privacy statement explains how we handle your message.",
                nl: "Het intakeformulier gebruikt geen cookies. Wat u typt, blijft in uw browser totdat u op versturen drukt; pas dan worden de velden via onze e-mailbezorgdienst naar onze mailbox verstuurd. Op de website zelf wordt niets bewaard. De Privacyverklaring beschrijft hoe wij met uw bericht omgaan.",
                ar: "لا تستخدم استمارة التعارف أي ملفات تعريف ارتباط. ويبقى ما تكتبه في متصفحك إلى أن تضغط زر الإرسال؛ وعندها فقط تُرسل الحقول، عبر مزوّد خدمة إرسال البريد الإلكتروني الذي نتعامل معه، إلى صندوق بريدنا. ولا يُحفظ شيء على الموقع نفسه. ويوضّح بيان الخصوصية كيف نتعامل مع رسالتك.",
              },
            ],
          },
          {
            title: { en: "Your browser settings", nl: "Uw browserinstellingen", ar: "إعدادات متصفحك" },
            body: [
              {
                en: "Your browser’s settings show what a website has stored and let you delete it, usually under privacy or site data. If you block or delete the item described in article 3, the site works exactly as before; the opening animation simply plays again.",
                nl: "In de instellingen van uw browser ziet u wat een website heeft opgeslagen en kunt u het verwijderen, meestal onder privacy of sitegegevens. Blokkeert of verwijdert u het gegeven uit artikel 3, dan werkt de site precies als voorheen; alleen wordt de openingsanimatie dan opnieuw afgespeeld.",
                ar: "تُظهر إعدادات متصفحك ما خزّنه أي موقع، وتتيح لك حذفه، وتجد ذلك عادةً ضمن إعدادات الخصوصية أو بيانات المواقع. وإذا حظرت العنصر المذكور في المادة 3 أو حذفته، ظلّ الموقع يعمل كما كان تماماً؛ كل ما في الأمر أن الحركة الافتتاحية تُعرض من جديد.",
              },
            ],
          },
          {
            title: { en: "Consent comes first", nl: "Eerst toestemming", ar: "الموافقة أولاً" },
            body: [
              {
                en: "Consent comes before any cookie that requires it. Such a cookie, or a similar technique, is placed only after you have agreed; refusing is as easy as accepting; the site remains fully usable if you refuse; and this policy names every such item, with its purpose, its duration and the party that places it.",
                nl: "Voor elke cookie die toestemming vereist, komt die toestemming eerst. Zo’n cookie, of een vergelijkbare techniek, wordt pas geplaatst nadat u hebt ingestemd; weigeren is even eenvoudig als accepteren; de site blijft volledig bruikbaar als u weigert; en dit beleid noemt elk zo’n gegeven, met doel, bewaarduur en de partij die het plaatst.",
                ar: "تسبق الموافقةُ أيَّ ملف تعريف ارتباط يتطلبها. فلا يُوضع مثل هذا الملف، أو ما يماثله من تقنيات، إلا بعد موافقتك؛ ويكون الرفض بالسهولة نفسها التي يكون بها القبول؛ ويبقى الموقع قابلاً للاستخدام بالكامل إن رفضت؛ وتذكر هذه السياسة كل عنصر من هذا النوع، مع غرضه ومدة بقائه والجهة التي تضعه.",
              },
            ],
          },
          {
            title: { en: "Contact", nl: "Contact", ar: "التواصل" },
            body: [
              {
                en: "Questions about this policy go to [enquiries@ — domain pending]. We update it whenever the site changes what it stores; the version date at the top shows which text applies.",
                nl: "Vragen over dit beleid kunt u sturen aan [e-mailadres — domein in afwachting]. Wij werken het bij zodra de site iets anders opslaat; de versiedatum bovenaan toont welke tekst geldt.",
                ar: "تُوجَّه الأسئلة المتعلقة بهذه السياسة إلى [البريد الإلكتروني — بانتظار قرار النطاق]. ونحدّثها كلما تغيّر ما يخزّنه الموقع؛ ويدلّ تاريخ الإصدار المثبت في أعلى الصفحة على النص الساري.",
              },
            ],
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "What happens to *what you send.*", nl: "Wat er gebeurt met *wat u verstuurt.*", ar: "ما يحدث *لما ترسله.*" },
        links: [link.privacy, link.contact],
      },
    ],
  },

  /* ------------------------------------------------------------------ company details */
  "legal/company": {
    masthead: { variant: "plate", photo: "leg-company" },
    blocks: [
      {
        kind: "facts",
        label: { en: "The entity", nl: "De rechtspersoon", ar: "الكيان القانوني" },
        heading: { en: "The foundation *behind the club.*", nl: "De stichting *achter de club.*", ar: "المؤسسة *خلف النادي.*" },
        intro: {
          en: "The legal entity that operates DUKAAT, and how to reach it.",
          nl: "De rechtspersoon die DUKAAT voert, en hoe u haar bereikt.",
          ar: "الكيان القانوني الذي يدير DUKAAT، وسبل التواصل معه.",
        },
        items: [
          {
            term: { en: "Legal name", nl: "Statutaire naam", ar: "الاسم القانوني" },
            value: {
              en: "Stichting Nederlands–Arabische Handelskamer",
              nl: "Stichting Nederlands–Arabische Handelskamer",
              ar: "Stichting Nederlands–Arabische Handelskamer",
            },
          },
          {
            term: { en: "Legal form", nl: "Rechtsvorm", ar: "الشكل القانوني" },
            value: { en: "Foundation (stichting) under Dutch law", nl: "Stichting naar Nederlands recht", ar: "مؤسسة (Stichting) خاضعة للقانون الهولندي" },
          },
          {
            term: { en: "Trading as", nl: "Handelend onder de naam", ar: "الاسم التجاري" },
            value: { en: "DUKAAT — Dutch–Arab Business Club", nl: "DUKAAT — Dutch–Arab Business Club", ar: "DUKAAT — نادي الأعمال الهولندي العربي" },
          },
          {
            term: { en: "Founded", nl: "Opgericht", ar: "سنة التأسيس" },
            value: { en: "2018", nl: "2018", ar: "2018" },
          },
          {
            term: { en: "Based in", nl: "Gevestigd in", ar: "المقرّ" },
            value: { en: "Rotterdam region, the Netherlands", nl: "Regio Rotterdam", ar: "منطقة روتردام، هولندا" },
          },
          {
            term: { en: "Visiting address", nl: "Bezoekadres", ar: "عنوان الزيارة" },
            value: {
              en: "[Address] — meetings by appointment",
              nl: "[Adres] — uitsluitend op afspraak",
              ar: "[العنوان] — اللقاءات بموعد مسبق",
            },
          },
          {
            term: { en: "Chamber of Commerce (KvK)", nl: "KvK-nummer", ar: "رقم السجل لدى غرفة التجارة الهولندية (KvK)" },
            value: { en: "[number]", nl: "[nummer]", ar: "[الرقم]" },
          },
          {
            term: { en: "VAT number", nl: "Btw-nummer", ar: "رقم ضريبة القيمة المضافة" },
            value: { en: "[number]", nl: "[nummer]", ar: "[الرقم]" },
          },
          {
            term: { en: "E-mail", nl: "E-mail", ar: "البريد الإلكتروني" },
            value: {
              en: "[enquiries@ — domain pending]",
              nl: "[e-mailadres — domein in afwachting]",
              ar: "[البريد الإلكتروني — بانتظار قرار النطاق]",
            },
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "About the name", nl: "Over de naam", ar: "عن الاسم" },
        body: [
          {
            en: "The foundation’s Dutch name — in English, the Dutch–Arab Business Club — reflects its founding purpose in 2018. DUKAAT is a private business club: it holds no public-law status and does not issue official documents.",
            nl: "De naam van de stichting weerspiegelt het doel waarmee zij in 2018 is opgericht. DUKAAT is een besloten businessclub zonder publiekrechtelijke status, en geeft geen officiële documenten af.",
            ar: "اسم المؤسسة بالهولندية، ويقابله بالعربية «نادي الأعمال الهولندي العربي»، يعكس الغرض الذي أُسّست من أجله عام 2018. أما DUKAAT فنادٍ خاص للأعمال، لا يتمتع بأي صفة رسمية بموجب القانون العام، ولا يُصدر وثائق رسمية.",
          },
          {
            en: "DUKAAT does not represent any government, though it cooperates with chambers of commerce and official bodies where that benefits its members.",
            nl: "DUKAAT vertegenwoordigt geen overheid, al werkt de club samen met kamers van koophandel en officiële instanties waar dat de leden ten goede komt.",
            ar: "ولا يمثّل DUKAAT أي حكومة، وإن كان يتعاون مع غرف التجارة والجهات الرسمية حيثما يفيد ذلك أعضاءه.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "The people *behind the entity.*", nl: "De mensen *achter de rechtspersoon.*", ar: "الأشخاص *خلف الكيان.*" },
        links: [link.contact, link.founders],
      },
    ],
  },

  /* ------------------------------------------------------------------ transfers outside the EU */
  "legal/data-transfers": {
    masthead: { variant: "plate", photo: "leg-transfers" },
    blocks: [
      {
        kind: "legal",
        updated: version,
        intro: [
          {
            en: "DUKAAT works between the European Union and the Arab world, so some of the personal data we process travels beyond the European Economic Area (EEA). This page explains when that happens, what travels and which safeguards apply. It supplements our Privacy statement.",
            nl: "DUKAAT werkt tussen de Europese Unie en de Arabische wereld; daardoor gaat een deel van de persoonsgegevens die wij verwerken naar landen buiten de Europese Economische Ruimte (EER). Deze pagina legt uit wanneer dat gebeurt, welke gegevens het betreft en welke waarborgen gelden. Zij vult onze Privacyverklaring aan.",
            ar: "يعمل DUKAAT بين الاتحاد الأوروبي والعالم العربي، ولذلك ينتقل جزء من البيانات الشخصية التي نعالجها إلى دول خارج المنطقة الاقتصادية الأوروبية. وتوضّح هذه الصفحة متى يحدث ذلك، وأي البيانات تنتقل، وما الضمانات التي تسري عليها. وهي مكمّلة لبيان الخصوصية.",
          },
          precedence.page,
        ],
        articles: [
          {
            title: { en: "Why data travels", nl: "Waarom gegevens reizen", ar: "لماذا تنتقل البيانات" },
            body: [
              {
                en: "Our work is introducing companies across borders. When you ask us to introduce you to a supplier, buyer, distributor or partner in the Gulf or the wider Arab world, or when a company there is introduced to you, some personal data has to reach the other side: the counterparty, a specialist from our network, or an ambassador who prepares a meeting. In addition, the service providers that host this site and deliver its intake messages are based in the United States.",
                nl: "Ons werk is bedrijven over grenzen heen aan elkaar voorstellen. Wanneer u ons vraagt u te introduceren bij een leverancier, koper, distributeur of partner in de Golf of de bredere Arabische wereld, of wanneer een bedrijf daar aan u wordt voorgesteld, moeten sommige persoonsgegevens de andere kant bereiken: de tegenpartij, een specialist uit ons netwerk, of een ambassadeur die een ontmoeting voorbereidt. Daarnaast zijn de dienstverleners die deze site hosten en de berichten uit de intake afleveren, gevestigd in de Verenigde Staten.",
                ar: "عملنا هو تعريف الشركات بعضها ببعض عبر الحدود. فحين تطلب منا أن نعرّفك بمورّد أو مشترٍ أو موزّع أو شريك في الخليج أو في العالم العربي الأوسع، أو حين نعرّفك بشركة من هناك، لا بد أن تصل بعض البيانات الشخصية إلى الجانب الآخر: إلى الطرف المقابل، أو إلى مختص من شبكتنا، أو إلى سفير يُعدّ للقاء. يُضاف إلى ذلك أن مزوّدَي الخدمات اللذين يستضيفان هذا الموقع ويوصلان رسائل استمارة التعارف مقرّهما في الولايات المتحدة.",
              },
            ],
          },
          {
            title: { en: "Only what an introduction needs", nl: "Alleen wat een introductie nodig heeft", ar: "ما يقتضيه التعريف فحسب" },
            body: [
              {
                en: "We send only what the introduction you asked for requires: as a rule your name, your role, your company, your business contact details and the commercial need you have agreed we may share. Verification documents, references and the notes in your file stay with us, unless you agree otherwise for a specific introduction. We make clear to every recipient that your details are shared for that business contact alone.",
                nl: "Wij sturen alleen wat de gevraagde introductie vereist: in de regel uw naam, uw functie, uw bedrijf, uw zakelijke contactgegevens en de commerciële behoefte die wij van u mogen delen. Verificatiedocumenten, referenties en de aantekeningen in uw dossier blijven bij ons, tenzij u voor een bepaalde introductie iets anders met ons afspreekt. Wij maken elke ontvanger duidelijk dat uw gegevens uitsluitend voor dat zakelijke contact worden gedeeld.",
                ar: "لا نرسل إلا ما يقتضيه التعريف الذي طلبته: وهو في العادة اسمك، ومنصبك، وشركتك، وبيانات الاتصال المهنية الخاصة بك، والحاجة التجارية التي وافقت على أن نشاركها. أما مستندات التحقق والمراجع والملاحظات الواردة في ملفك فتبقى لدينا، ما لم تتفق معنا على خلاف ذلك في تعريف بعينه. ونوضّح لكل جهة متلقية أن بياناتك لا تُقدَّم إليها إلا لغرض ذلك التواصل التجاري وحده.",
              },
            ],
          },
          {
            title: { en: "The safeguards we use", nl: "De waarborgen die wij gebruiken", ar: "الضمانات التي نعتمدها" },
            body: [
              {
                en: "Where the European Commission has not decided that a country outside the EEA offers an adequate level of protection, we use the Standard Contractual Clauses adopted by the Commission, with additional measures where needed, such as limiting what is shared and how it is sent.",
                nl: "Heeft de Europese Commissie niet besloten dat een land buiten de EER een passend beschermingsniveau biedt, dan gebruiken wij de standaardcontractbepalingen van de Commissie, zo nodig met aanvullende maatregelen, zoals beperken wat wordt gedeeld en hoe het wordt verzonden.",
                ar: "وحين لا تكون المفوضية الأوروبية قد قرّرت أن دولةً خارج المنطقة الاقتصادية الأوروبية توفّر مستوى ملائماً من الحماية، نستخدم البنود التعاقدية القياسية التي اعتمدتها المفوضية، مع تدابير إضافية عند الحاجة، كتقييد نطاق ما نشاركه وطريقة إرساله.",
              },
              {
                en: "The providers that host this site and deliver its intake messages are based in the United States. They process data as our processors, under a processing agreement and with the safeguards the GDPR requires.",
                nl: "De dienstverleners die deze site hosten en de berichten uit de intake afleveren, zijn gevestigd in de Verenigde Staten. Zij verwerken gegevens als onze verwerkers, op basis van een verwerkersovereenkomst en met de waarborgen die de AVG vereist.",
                ar: "ومزوّدا الخدمات اللذان يستضيفان هذا الموقع ويوصلان رسائل استمارة التعارف مقرّهما في الولايات المتحدة، ويعالجان البيانات بصفتهما معالِجَين لحسابنا، بموجب اتفاقية معالجة بيانات ومع الضمانات التي تشترطها اللائحة العامة لحماية البيانات.",
              },
            ],
          },
          {
            title: {
              en: "Your rights and a copy of the safeguards",
              nl: "Uw rechten en een kopie van de waarborgen",
              ar: "حقوقك ونسخة من الضمانات",
            },
            body: [
              {
                en: "You may ask us at any time which safeguard applies to a transfer of your data, and obtain a copy of it. Commercially confidential passages may be redacted; the protections that concern you will not be. All other rights in the Privacy statement apply in full, including the right to object and to lodge a complaint with the Autoriteit Persoonsgegevens.",
                nl: "U kunt ons op elk moment vragen welke waarborg geldt voor een doorgifte van uw gegevens, en daarvan een kopie krijgen. Bedrijfsvertrouwelijke passages kunnen worden weggelakt; de bescherming die u aangaat niet. Alle andere rechten uit de Privacyverklaring gelden onverkort, waaronder het recht van bezwaar en het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.",
                ar: "يمكنك في أي وقت أن تسألنا عن الضمانة التي تسري على نقل بياناتك، وأن تحصل على نسخة منها. وقد تُحجب المقاطع ذات السرية التجارية، أما أحكام الحماية التي تعنيك فلا تُحجب. وتسري سائر الحقوق الواردة في بيان الخصوصية كاملةً، بما فيها حق الاعتراض وحق تقديم شكوى إلى هيئة حماية البيانات الهولندية (Autoriteit Persoonsgegevens).",
              },
            ],
          },
          {
            title: { en: "Contact", nl: "Contact", ar: "التواصل" },
            body: [
              {
                en: "Requests and questions go to [enquiries@ — domain pending], or by post to Stichting Nederlands–Arabische Handelskamer, [Address]. We answer within one month.",
                nl: "Verzoeken en vragen kunt u sturen aan [e-mailadres — domein in afwachting], of per post aan Stichting Nederlands–Arabische Handelskamer, [adres]. Wij antwoorden binnen een maand.",
                ar: "تُوجَّه الطلبات والأسئلة إلى [البريد الإلكتروني — بانتظار قرار النطاق]، أو بالبريد العادي إلى Stichting Nederlands–Arabische Handelskamer، [العنوان]. ونرد خلال شهر واحد.",
              },
            ],
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Everything else about *your data.*", nl: "Al het andere over *uw gegevens.*", ar: "سائر ما يخصّ *بياناتك.*" },
        links: [link.privacy, link.contact],
      },
    ],
  },
};
