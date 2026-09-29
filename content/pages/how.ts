import type { PageSet } from "./types";

/**
 * How we work — the group overview, its three pages and the FAQ.
 * Fixed lines used verbatim: the charging model (membership.charge), the legal line (footer.legal),
 * the investment notice (contact.investNotice), the verification disclaimer, "Technology narrows the search; people verify."
 * Reply times (owner, 29 Sep 2026): Member 5, Professional 3, Executive 1 working day(s); admission decision within 10.
 * Admission is by nomination or invitation; companies may also apply, and an application guarantees nothing.
 */
export const how: PageSet = {
  "how-we-work": {
    masthead: { variant: "band", photo: "how-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Technology narrows the search; people verify. Software helps us find candidates inside and beyond the network, but nothing reaches you until a person at DUKAAT has checked it. Every request follows the same five steps, in the same order.",
          nl: "Technologie verkleint het zoekveld; mensen verifiëren. Software helpt ons kandidaten te vinden, binnen en buiten het netwerk, maar niets bereikt u voordat iemand van DUKAAT het heeft gecontroleerd. Elk verzoek doorloopt dezelfde vijf stappen, in dezelfde volgorde.",
          ar: "التقنية تضيّق البحث؛ والبشر يتحققون. تساعدنا البرمجيات على تحديد الأطراف المحتملة داخل الشبكة وخارجها، لكن لا يصلك شيءٌ قبل أن يراجعه أحدٌ من فريق DUKAAT. ويمرّ كل طلب بالخطوات الخمس نفسها، وبالترتيب نفسه.",
        },
      },
      {
        kind: "steps",
        label: { en: "The process", nl: "Het proces", ar: "آلية العمل" },
        heading: { en: "The same five steps, *every time.*", nl: "Dezelfde vijf stappen, *elke keer.*", ar: "الخطوات الخمس نفسها، *في كل مرة.*" },
        intro: {
          en: "No step is skipped, and none is left to software alone.",
          nl: "Geen stap wordt overgeslagen, en geen enkele wordt aan software alleen overgelaten.",
          ar: "لا نتخطّى أيّ خطوة، ولا نترك أيّاً منها للبرمجيات وحدها.",
        },
        items: [
          {
            title: { en: "Tell us what you need", nl: "Vertel ons wat u nodig hebt", ar: "أخبرنا بما تحتاج إليه" },
            body: {
              en: "You complete a short profile: what you offer, what you are looking for, and in which market. We do not ask for your CV; we ask for your commercial need, precisely — the product, the volume, the specification, the market.",
              nl: "U vult een kort profiel in: wat u aanbiedt, wat u zoekt, en in welke markt. Wij vragen niet om uw cv; wij vragen nauwkeurig naar uw commerciële behoefte — het product, het volume, de specificatie, de markt.",
              ar: "تملأ ملفاً قصيراً: ما تقدّمه، وما تبحث عنه، وفي أي سوق. لا نطلب سيرتك الذاتية؛ نطلب حاجتك التجارية بدقة — المنتج، والكمية، والمواصفات، والسوق.",
            },
          },
          {
            title: { en: "We verify and admit", nl: "Wij verifiëren en laten toe", ar: "نتحقق ونقبل" },
            body: {
              en: "We review your company registration, trading activity and references, and may ask for documents or a short call. Admission is selective, and deliberately so. Your card and membership number are issued on admission.",
              nl: "Wij beoordelen uw inschrijving in het handelsregister, uw handelsactiviteit en uw referenties, en kunnen om documenten of een kort gesprek vragen. Toelating is selectief, en dat is bewust zo. Kaart en lidnummer worden bij toelating uitgegeven.",
              ar: "نراجع قيدك في السجل التجاري، ونشاطك التجاري، ومراجعك، وقد نطلب مستندات أو مكالمة قصيرة. والقبول انتقائيٌّ عن قصد. وتُصدَر بطاقتك ورقم عضويتك عند القبول.",
            },
          },
          {
            title: { en: "We search and match", nl: "Wij zoeken en koppelen", ar: "نبحث ونطابق" },
            body: {
              en: "We search inside and beyond the network for the right counterparty. Technology narrows the search, but a person reviews every match before it reaches you — whether the party fits, can deliver and means business. We do not send lists.",
              nl: "Wij zoeken binnen en buiten het netwerk naar de juiste tegenpartij. Technologie verkleint het zoekveld, maar een mens beoordeelt elke match voordat die u bereikt — of de partij past, kan leveren en het meent. Wij sturen geen lijsten.",
              ar: "نبحث داخل الشبكة وخارجها عن الطرف المقابل المناسب. التقنية تضيّق البحث، لكن إنساناً يراجع كل مطابقة قبل أن تصلك — هل يناسبك هذا الطرف، وهل هو قادر على التنفيذ، وهل هو جادّ. نحن لا نرسل قوائم.",
            },
          },
          {
            title: { en: "We introduce you properly", nl: "Wij introduceren u zorgvuldig", ar: "نقدّمك كما ينبغي" },
            body: {
              en: "We do not hand you a phone number and step away. Both sides receive a written brief, we join the first call where needed, and we translate the cultural gap before it becomes a misunderstanding.",
              nl: "Wij geven u geen telefoonnummer om daarna te verdwijnen. Beide kanten krijgen een schriftelijke briefing, waar nodig zitten wij bij het eerste gesprek, en wij overbruggen het culturele verschil voordat het een misverstand wordt.",
              ar: "لا نسلّمك رقم هاتف ثم ننسحب. يتلقى الطرفان ملخّصاً مكتوباً، ونحضر المكالمة الأولى عند الحاجة، ونترجم الفجوة الثقافية قبل أن تتحول إلى سوء فهم.",
            },
          },
          {
            title: { en: "We stay until the first deal", nl: "Wij blijven tot de eerste deal", ar: "نبقى معك حتى الصفقة الأولى" },
            body: {
              en: "Documents, certificates, freight, customs, payment terms: we stay with you until the first shipment lands or the first contract is signed. After that, the relationship is yours.",
              nl: "Documenten, certificaten, vracht, douane, betalingscondities: wij blijven bij u tot de eerste zending is geland of het eerste contract is getekend. Daarna is de relatie van u.",
              ar: "المستندات، والشهادات، والشحن، والجمارك، وشروط الدفع: نبقى معك حتى تصل الشحنة الأولى أو يُوقَّع العقد الأول. بعد ذلك، العلاقة لك.",
            },
          },
        ],
      },
      {
        kind: "facts",
        photo: "how-tea",
        label: { en: "Working with us", nl: "Werken met ons", ar: "العمل معنا" },
        heading: { en: "The practical side, *in plain terms.*", nl: "De praktische kant, *in gewone woorden.*", ar: "الجانب العملي، *بعباراتٍ واضحة.*" },
        items: [
          {
            term: { en: "Languages", nl: "Talen", ar: "اللغات" },
            value: {
              en: "Arabic, Dutch and English — every member is served in their own language",
              nl: "Arabisch, Nederlands en Engels — elk lid wordt in de eigen taal bediend",
              ar: "العربية والهولندية والإنجليزية — ونخدم كل عضو بلغته",
            },
          },
          {
            term: { en: "Response times", nl: "Reactietijden", ar: "مهلة الرد" },
            value: {
              en: "5 working days for Member, 3 for Professional, 1 for Executive",
              nl: "5 werkdagen voor Member, 3 voor Professional, 1 voor Executive",
              ar: "5 أيام عمل لمستوى Member، و3 لمستوى Professional، ويوم واحد لمستوى Executive",
            },
          },
          {
            term: { en: "Office hours", nl: "Kantooruren", ar: "ساعات العمل" },
            value: {
              en: "[Mon–Fri, 09:00–17:00 CET]",
              nl: "[ma–vr, 09.00–17.00 uur CET]",
              ar: "[من الاثنين إلى الجمعة، 09:00–17:00 بتوقيت وسط أوروبا]",
            },
          },
          {
            term: { en: "Where we are", nl: "Waar wij zitten", ar: "مقرّنا" },
            value: {
              en: "Rotterdam area, meetings by appointment",
              nl: "Regio Rotterdam, uitsluitend op afspraak",
              ar: "منطقة روتردام، اللقاءات بموعد مسبق",
            },
          },
          {
            term: { en: "How we charge", nl: "Hoe wij factureren", ar: "كيف نحتسب أتعابنا" },
            value: {
              en: "Membership is an annual subscription. Project services (market entry, supplier search, representation) are quoted per engagement in writing. No hidden commissions.",
              nl: "Het lidmaatschap is een jaarabonnement. Projectdiensten (markttoetreding, leverancierszoektocht, vertegenwoordiging) worden per opdracht schriftelijk geoffreerd. Geen verborgen commissies.",
              ar: "العضوية اشتراك سنوي. خدمات المشاريع (دخول الأسواق، البحث عن مورّدين، التمثيل) تُعرض أسعارها كتابةً لكل مهمة على حدة. لا عمولات خفية.",
            },
          },
          {
            term: { en: "What we do not do", nl: "Wat wij niet doen", ar: "ما لا نفعله" },
            value: {
              en: "We do not take custody of members’ funds, we do not act as a bank or payment provider, and we do not guarantee any transaction between members.",
              nl: "Wij nemen geen gelden van leden in bewaring, wij treden niet op als bank of betaaldienstverlener, en wij garanderen geen enkele transactie tussen leden.",
              ar: "نحن لا نحتفظ بأموال الأعضاء، ولا نعمل كمصرف أو مزوّد خدمات دفع، ولا نضمن أي معاملة بين الأعضاء.",
            },
          },
        ],
        note: {
          en: "Correspondence: [enquiries@ — domain pending]. Every route on this site opens the same short intake.",
          nl: "Correspondentie: [e-mailadres — domein in afwachting]. Elke route op deze site opent dezelfde korte intake.",
          ar: "المراسلات: [البريد الإلكتروني — بانتظار قرار النطاق]. وكل مسار في هذا الموقع يفتح الاستمارة القصيرة نفسها.",
        },
      },
      {
        kind: "index",
        label: { en: "In detail", nl: "Nader uitgewerkt", ar: "بالتفصيل" },
        heading: { en: "The detail behind *each step.*", nl: "De achtergrond van *elke stap.*", ar: "تفاصيل *كل خطوة.*" },
      },
      {
        kind: "next",
        heading: { en: "What we commit to, *level by level.*", nl: "Wat wij toezeggen, *niveau voor niveau.*", ar: "ما نلتزم به، *لكل مستوى على حدة.*" },
        body: {
          en: "Membership is by nomination or invitation. Each of the three levels sets out in writing how quickly we reply and what we do for you in introductions and searches.",
          nl: "Lidmaatschap is op voordracht of uitnodiging. Elk van de drie niveaus legt schriftelijk vast hoe snel wij antwoorden en wat wij voor u doen aan introducties en zoekopdrachten.",
          ar: "العضوية بالترشيح أو الدعوة. ويحدّد كل مستوى من المستويات الثلاثة كتابةً كم نستغرق للرد، وما نقدّمه لك من تعريفات وعمليات بحث.",
        },
        links: [
          { href: "membership", label: { en: "Membership", nl: "Lidmaatschap", ar: "العضوية" } },
          { href: "membership/levels", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
          { href: "contact?intent=nominated#intake", label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" } },
        ],
      },
    ],
  },

  "how-we-work/verification": {
    masthead: { variant: "portrait", photo: "ver-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "No member meets a counterparty that nobody at DUKAAT has checked: the registration looked up, the documents read. Verification is not a formality at the door; it is a large part of what membership is worth.",
          nl: "Geen lid ontmoet een tegenpartij die niemand van DUKAAT heeft gecontroleerd: de inschrijving opgezocht, de stukken gelezen. Verificatie is geen formaliteit bij de deur; het is een groot deel van wat het lidmaatschap waard is.",
          ar: "لا يلتقي أي عضو بطرفٍ مقابل لم يتحقق منه أحدٌ من فريق DUKAAT: السجلُّ مراجَع، والمستنداتُ مقروءة. فالتحقق ليس إجراءً شكلياً عند الباب، بل هو جزءٌ كبير من قيمة العضوية.",
        },
      },
      {
        kind: "register",
        numbered: true,
        cols: 2,
        label: { en: "What we check", nl: "Wat wij controleren", ar: "ما نتحقق منه" },
        heading: { en: "Checked before *anyone meets.*", nl: "Gecontroleerd vóór *de eerste ontmoeting.*", ar: "نتحقق *قبل أي لقاء.*" },
        intro: {
          en: "We make these checks when a company is admitted and, as far as they apply, for any counterparty from outside the network before we introduce it to a member.",
          nl: "Deze controles voeren wij uit bij de toelating van een bedrijf en, voor zover van toepassing, bij elke tegenpartij van buiten het netwerk voordat wij haar aan een lid voorstellen.",
          ar: "نُجري هذه الفحوص عند قبول أي شركة، ونطبّق ما يلزم منها على كل طرف مقابل من خارج الشبكة قبل أن نعرّفه بأحد الأعضاء.",
        },
        items: [
          {
            title: { en: "Company registration", nl: "Inschrijving in het handelsregister", ar: "السجل التجاري" },
            body: {
              en: "The entry in the trade register of the company’s home country: legal name, registration number, legal form, and who is authorised to sign.",
              nl: "De inschrijving in het handelsregister van het land van vestiging: statutaire naam, registratienummer, rechtsvorm, en wie bevoegd is te tekenen.",
              ar: "القيد في السجل التجاري للبلد الذي تأسست فيه الشركة: الاسم القانوني، ورقم التسجيل، والشكل القانوني، ومَن يملك صلاحية التوقيع عنها.",
            },
          },
          {
            title: { en: "VAT information", nl: "Btw-gegevens", ar: "بيانات ضريبة القيمة المضافة" },
            body: {
              en: "The VAT or tax registration number and its status, checked against the public register wherever one is available.",
              nl: "Het btw- of belastingnummer en de status ervan, gecontroleerd in het openbare register waar dat beschikbaar is.",
              ar: "رقم التسجيل في ضريبة القيمة المضافة أو الرقم الضريبي، وحالته، مع التحقق منه في السجل العام حيثما يتوفر.",
            },
          },
          {
            title: { en: "Website and trading activity", nl: "Website en handelsactiviteit", ar: "الموقع الإلكتروني والنشاط التجاري" },
            body: {
              en: "Whether the company actually trades: a working website, products or services that match its registration, and signs of current commercial activity.",
              nl: "Of het bedrijf werkelijk handelt: een werkende website, producten of diensten die passen bij de inschrijving, en tekenen van actuele commerciële activiteit.",
              ar: "هل تتاجر الشركة فعلاً: موقع إلكتروني يعمل، ومنتجات أو خدمات تتفق مع قيدها في السجل، وشواهد على نشاط تجاري قائم.",
            },
          },
          {
            title: { en: "Contact verification", nl: "Verificatie van de contactpersoon", ar: "التحقق من جهة الاتصال" },
            body: {
              en: "That the person we deal with is who they say they are and holds the role they claim — confirmed through the company’s own channels.",
              nl: "Dat onze contactpersoon is wie hij of zij zegt te zijn en de opgegeven functie bekleedt — bevestigd via de eigen kanalen van het bedrijf.",
              ar: "أن هوية الشخص الذي نتعامل معه ومنصبه يطابقان ما يذكره — ونتأكد من ذلك عبر قنوات الشركة نفسها.",
            },
          },
          {
            title: { en: "Company address", nl: "Bedrijfsadres", ar: "عنوان الشركة" },
            body: {
              en: "A real business address that matches the registration: a place where the company works, not only a mailbox.",
              nl: "Een werkelijk bedrijfsadres dat overeenkomt met de inschrijving: een plek waar het bedrijf werkt, niet alleen een postadres.",
              ar: "عنوان عمل حقيقي يطابق القيد في السجل: مكانٌ تعمل فيه الشركة فعلاً، لا مجرد صندوق بريد.",
            },
          },
          {
            title: { en: "Export experience", nl: "Exportervaring", ar: "الخبرة في التصدير" },
            body: {
              en: "What the company has shipped before, and where: markets, product groups, and the documents it is used to handling.",
              nl: "Wat het bedrijf eerder heeft verscheept, en waarheen: markten, productgroepen, en de documenten waarmee het vertrouwd is.",
              ar: "ما صدّرته الشركة من قبل وإلى أين: الأسواق، وفئات المنتجات، والمستندات التي اعتادت التعامل معها.",
            },
          },
          {
            title: { en: "Certifications", nl: "Certificeringen", ar: "الشهادات" },
            body: {
              en: "The certificates a product or process relies on — quality, food safety, origin, halal where relevant — checked for scope and validity.",
              nl: "De certificaten waarop een product of proces steunt — kwaliteit, voedselveiligheid, herkomst, halal waar van toepassing — gecontroleerd op reikwijdte en geldigheid.",
              ar: "الشهادات التي يستند إليها المنتج أو عملية الإنتاج — في الجودة، وسلامة الغذاء، والمنشأ، والحلال حيث يلزم — مع التحقق من نطاقها وسريانها.",
            },
          },
          {
            title: { en: "References we can call", nl: "Referenties die wij kunnen bellen", ar: "مراجع نستطيع الاتصال بها" },
            body: {
              en: "Trading partners prepared to speak to us about the company — a customer, a supplier, a forwarder. We call them ourselves.",
              nl: "Handelspartners die ons over het bedrijf te woord willen staan — een klant, een leverancier, een expediteur. Wij bellen hen zelf.",
              ar: "شركاء تجاريون مستعدون للحديث معنا عن الشركة — عميل، أو مورّد، أو وكيل شحن. ونتصل بهم بأنفسنا.",
            },
          },
          {
            title: { en: "International sanctions lists", nl: "Internationale sanctielijsten", ar: "قوائم العقوبات الدولية" },
            body: {
              en: "The company, its directors and its ultimate owners, checked against international sanctions lists, including those of the European Union, the United Nations and the Netherlands.",
              nl: "Het bedrijf, zijn bestuurders en zijn uiteindelijke eigenaren, getoetst aan internationale sanctielijsten, waaronder die van de Europese Unie, de Verenigde Naties en Nederland.",
              ar: "مطابقة الشركة ومديريها ومالكيها الفعليين بقوائم العقوبات الدولية، ومنها قوائم الاتحاد الأوروبي والأمم المتحدة وهولندا.",
            },
          },
        ],
      },
      {
        kind: "steps",
        label: { en: "Admission", nl: "Toelating", ar: "القبول" },
        heading: { en: "From a name to a *membership number.*", nl: "Van een naam naar een *lidnummer.*", ar: "من اسمٍ إلى *رقم عضوية.*" },
        intro: {
          en: "Whether a company is nominated, invited or applies, admission follows one path, in four steps.",
          nl: "Of een bedrijf nu wordt voorgedragen, uitgenodigd of zich aanmeldt: toelating volgt één weg, in vier stappen.",
          ar: "سواء رُشّحت الشركة أو دُعيت أو تقدّمت بطلب انضمام، فللقبول طريقٌ واحد، في أربع خطوات.",
        },
        items: [
          {
            title: { en: "A nomination, an invitation or an application", nl: "Een voordracht, uitnodiging of aanmelding", ar: "ترشيحٌ أو دعوةٌ أو طلب انضمام" },
            body: {
              en: "A member puts your name forward, we invite you ourselves — sometimes after an intake has shown us what your company trades and needs — or you apply. An application is welcome, and it guarantees nothing.",
              nl: "Een lid draagt u voor, wij nodigen u zelf uit — soms nadat een intake ons heeft laten zien wat uw bedrijf verhandelt en zoekt — of u meldt zich aan. Een aanmelding is welkom, en garandeert niets.",
              ar: "يرشّحك أحد الأعضاء، أو ندعوك نحن — أحياناً بعد أن تكشف لنا استمارة التعارف عمّا تتاجر فيه شركتك وما تحتاج إليه — أو تتقدّم بطلب انضمام. والطلب مرحَّب به، لكنه لا يضمن شيئاً.",
            },
          },
          {
            title: { en: "Documents and a short call", nl: "Documenten en een kort gesprek", ar: "مستندات ومكالمة قصيرة" },
            body: {
              en: "We ask for the documents behind the checks above, and speak with you briefly about what you trade, where, and what you are looking for.",
              nl: "Wij vragen om de stukken die voor de controles hierboven nodig zijn, en spreken u kort over wat u verhandelt, waar, en wat u zoekt.",
              ar: "نطلب المستندات اللازمة للفحوص المذكورة أعلاه، ونتحدث معك باختصار عمّا تتاجر فيه، وأين، وعمّا تبحث عنه.",
            },
          },
          {
            title: { en: "A decision within 10 working days", nl: "Een besluit binnen 10 werkdagen", ar: "قرارٌ خلال 10 أيام عمل" },
            body: {
              en: "An acceptance or a decline, within that term. The decision rests on one question: whether your company fits the club.",
              nl: "Een toelating of een afwijzing, binnen die termijn. Het besluit draait om één vraag: of uw bedrijf bij de club past.",
              ar: "قبولٌ أو اعتذار، خلال تلك المهلة. ويقوم القرار على سؤالٍ واحد: هل تناسب شركتك النادي؟",
            },
          },
          {
            title: { en: "Card and membership number", nl: "Kaart en lidnummer", ar: "البطاقة ورقم العضوية" },
            body: {
              en: "On admission you receive your card and membership number. Your directory profile follows within 10 working days, showing only what you approve.",
              nl: "Bij toelating ontvangt u uw kaart en lidnummer. Uw profiel in het Ledenregister volgt binnen 10 werkdagen, met alleen wat u goedkeurt.",
              ar: "عند القبول تتسلّم بطاقتك ورقم عضويتك. ويُنشر ملفك في دليل الأعضاء خلال 10 أيام عمل، ولا يتضمن إلا ما توافق عليه.",
            },
          },
        ],
      },
      {
        kind: "specimen",
        label: { en: "The record", nl: "Het dossier", ar: "السجلّ" },
        heading: { en: "Trust begins with *clear information.*", nl: "Vertrouwen begint bij *heldere informatie.*", ar: "الثقة تبدأ *بالمعلومات الواضحة.*" },
        intro: {
          en: "What we verify is recorded, field by field, in the company’s file at DUKAAT. The file stays with us; what a member receives is an introduction, prepared on the strength of it.",
          nl: "Wat wij verifiëren, wordt veld voor veld vastgelegd in het dossier van het bedrijf bij DUKAAT. Het dossier blijft bij ons; wat een lid ontvangt, is een introductie die erop steunt.",
          ar: "يُدوَّن ما نتحقق منه، بنداً بنداً، في ملف الشركة لدى DUKAAT. ويبقى الملف لدينا؛ أما ما يتلقاه العضو فتعريفٌ يُعَدّ استناداً إليه.",
        },
        title: { en: "Verification record", nl: "Verificatiedossier", ar: "سجلّ التحقق" },
        fields: [
          {
            label: { en: "Company registration checked", nl: "Inschrijving gecontroleerd", ar: "التحقق من السجل التجاري" },
            hint: { en: "Register, number, date of the check", nl: "Register, nummer, datum van controle", ar: "السجل، والرقم، وتاريخ التحقق" },
          },
          {
            label: { en: "VAT information", nl: "Btw-gegevens", ar: "بيانات ضريبة القيمة المضافة" },
            hint: { en: "Number and status", nl: "Nummer en status", ar: "الرقم والحالة" },
          },
          {
            label: { en: "Website", nl: "Website", ar: "الموقع الإلكتروني" },
            hint: { en: "Address, and whether it matches the registration", nl: "Adres, en of het overeenkomt met de inschrijving", ar: "الرابط، ومدى مطابقته للقيد في السجل" },
          },
          {
            label: { en: "Contact verification", nl: "Verificatie contactpersoon", ar: "التحقق من جهة الاتصال" },
            hint: { en: "Name, role, how it was confirmed", nl: "Naam, functie, hoe bevestigd", ar: "الاسم، والمنصب، وطريقة التأكيد" },
          },
          {
            label: { en: "Company address", nl: "Bedrijfsadres", ar: "عنوان الشركة" },
            hint: { en: "Registered and trading address", nl: "Vestigingsadres en bezoekadres", ar: "العنوان المسجّل وعنوان العمل" },
          },
          {
            label: { en: "Export experience", nl: "Exportervaring", ar: "الخبرة في التصدير" },
            hint: { en: "Markets and product groups", nl: "Markten en productgroepen", ar: "الأسواق وفئات المنتجات" },
          },
          {
            label: { en: "Certifications", nl: "Certificeringen", ar: "الشهادات" },
            hint: { en: "Certificate, issuer, valid until", nl: "Certificaat, uitgevende instantie, geldig tot", ar: "الشهادة، والجهة المانحة، وتاريخ انتهاء الصلاحية" },
          },
        ],
        note: {
          en: "This information does not constitute a guarantee, endorsement or warranty by DUKAAT regarding any company, product or transaction. It is provided to support more informed business decisions. Members remain fully responsible for their own due diligence.",
          nl: "Deze informatie vormt geen garantie, aanbeveling of waarborg van DUKAAT ten aanzien van enig bedrijf, product of enige transactie. Zij wordt verstrekt om beter geïnformeerde zakelijke beslissingen te ondersteunen. Leden blijven volledig verantwoordelijk voor hun eigen due diligence.",
          ar: "لا تُشكّل هذه المعلومات ضماناً أو تأييداً أو كفالةً من DUKAAT بشأن أي شركة أو منتج أو معاملة، وإنما تُقدَّم لدعم اتخاذ قراراتٍ تجارية أكثر وعياً. ويبقى الأعضاء مسؤولين مسؤوليةً كاملة عن إجراء الفحص النافي للجهالة بأنفسهم.",
        },
      },
      {
        kind: "statement",
        text: {
          en: "Not everyone is admitted. That is precisely what makes membership worth having.",
          nl: "Niet iedereen wordt toegelaten. Dat is precies wat het lidmaatschap waard maakt.",
          ar: "لا يُقبل الجميع، وهذا تحديداً ما يمنح العضوية قيمتها.",
        },
      },
      {
        kind: "next",
        heading: { en: "Who membership *is for.*", nl: "Voor wie het lidmaatschap *bedoeld is.*", ar: "لمن *العضوية.*" },
        body: {
          en: "An activity requirement, not a size requirement. If a member has put your name forward, tell us who.",
          nl: "Een activiteitseis, geen omvangseis. Heeft een lid u voorgedragen, laat ons dan weten wie.",
          ar: "شرطُ النشاط، لا شرطُ الحجم. وإن رشّحك أحد الأعضاء، فأخبرنا مَن.",
        },
        links: [
          { href: "membership/who-for", label: { en: "Who it is for — and who not", nl: "Voor wie — en voor wie niet", ar: "لمن العضوية — ولمن لا" } },
          { href: "how-we-work/fees", label: { en: "How we charge", nl: "Hoe wij factureren", ar: "كيف نحتسب أتعابنا" } },
          { href: "contact?intent=nominated#intake", label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" } },
        ],
      },
    ],
  },

  "how-we-work/fees": {
    masthead: { variant: "plate", photo: "fees-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Membership is an annual subscription. Project services (market entry, supplier search, representation) are quoted per engagement in writing. No hidden commissions.",
          nl: "Het lidmaatschap is een jaarabonnement. Projectdiensten (markttoetreding, leverancierszoektocht, vertegenwoordiging) worden per opdracht schriftelijk geoffreerd. Geen verborgen commissies.",
          ar: "العضوية اشتراك سنوي. خدمات المشاريع (دخول الأسواق، البحث عن مورّدين، التمثيل) تُعرض أسعارها كتابةً لكل مهمة على حدة. لا عمولات خفية.",
        },
      },
      {
        kind: "contrast",
        label: { en: "Two kinds of work", nl: "Twee soorten werk", ar: "نوعان من العمل" },
        heading: { en: "Covered, or *quoted in writing.*", nl: "Inbegrepen, of *schriftelijk geoffreerd.*", ar: "مشمولٌ بالعضوية، أو *بعرضٍ مكتوب.*" },
        intro: {
          en: "The subscription covers what your level commits to. Anything beyond it is a separate engagement, with its own written quote.",
          nl: "Het abonnement dekt wat uw niveau toezegt. Alles daarbuiten is een aparte opdracht, met een eigen schriftelijke offerte.",
          ar: "يشمل الاشتراك ما نلتزم به لمستوى عضويتك. وكل ما يتجاوزه مهمةٌ مستقلة، لها عرض سعر مكتوب خاص بها.",
        },
        a: {
          title: { en: "Included in the membership", nl: "Inbegrepen in het lidmaatschap", ar: "مشمولٌ بالعضوية" },
          items: [
            { en: "Company profile and directory listing", nl: "Bedrijfsprofiel en vermelding in het Ledenregister", ar: "ملف الشركة وإدراجها في دليل الأعضاء" },
            { en: "Replies within your level’s response time", nl: "Antwoord binnen de reactietijd van uw niveau", ar: "الرد خلال المهلة المحددة لمستواك" },
            { en: "Introductions and searches up to your level’s commitments", nl: "Introducties en zoekopdrachten tot de toezeggingen van uw niveau", ar: "التعريفات وعمليات البحث في حدود التزامات مستواك" },
            { en: "Opportunity newsletters and alerts", nl: "Nieuwsbrieven en kansenmeldingen", ar: "نشرات الفرص وتنبيهاتها" },
            { en: "DUKAAT Market, as your level allows", nl: "DUKAAT Market, zoals uw niveau toestaat", ar: "سوق DUKAAT، بحسب ما يتيحه مستواك" },
            { en: "Member events, and discounts on courses and missions", nl: "Ledenbijeenkomsten, en korting op cursussen en missies", ar: "فعاليات الأعضاء، وخصومات على الدورات والبعثات" },
            { en: "Advisory hours, where your level includes them", nl: "Adviesuren, waar uw niveau die omvat", ar: "ساعات استشارية، إن كان مستواك يشملها" },
          ],
        },
        b: {
          title: { en: "Quoted per engagement, in writing", nl: "Per opdracht schriftelijk geoffreerd", ar: "بعرض سعر مكتوب لكل مهمة" },
          items: [
            { en: "Market entry: structure, partner, first order", nl: "Markttoetreding: structuur, partner, eerste order", ar: "دخول الأسواق: الهيكل، والشريك، والطلبية الأولى" },
            {
              en: "Supplier and distributor searches beyond your level’s commitments",
              nl: "Zoektochten naar leveranciers en distributeurs buiten de toezeggingen van uw niveau",
              ar: "البحث عن مورّدين وموزّعين بما يتجاوز التزامات مستواك",
            },
            { en: "Representation on the other side", nl: "Vertegenwoordiging aan de andere kant", ar: "التمثيل على الضفة الأخرى" },
            {
              en: "Specialist advice beyond your level’s allowance",
              nl: "Specialistisch advies buiten het tegoed van uw niveau",
              ar: "الاستشارات المتخصصة بما يتجاوز رصيد مستواك",
            },
          ],
        },
        note: {
          en: "What each level includes is set out on the page about the three levels. What an engagement costs is set out in its quote, before any work begins.",
          nl: "Wat elk niveau omvat, staat op de pagina over de drie niveaus. Wat een opdracht kost, staat in de offerte, voordat er werk begint.",
          ar: "ما يشمله كل مستوى مبيَّن في صفحة المستويات الثلاثة. وما تكلّفه أي مهمة مبيَّن في عرض سعرها، قبل أن يبدأ العمل.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "Principles", nl: "Uitgangspunten", ar: "المبادئ" },
        heading: { en: "Four rules we *keep.*", nl: "Vier regels die wij *naleven.*", ar: "أربع قواعد *نلتزم بها.*" },
        items: [
          {
            title: { en: "An annual subscription", nl: "Een jaarabonnement", ar: "اشتراك سنوي" },
            body: {
              en: "Membership runs per year and is charged as one subscription. Your level determines what it includes; the membership agreement sets out the rate.",
              nl: "Het lidmaatschap loopt per jaar en wordt als één abonnement gefactureerd. Uw niveau bepaalt wat het omvat; de lidmaatschapsovereenkomst legt het tarief vast.",
              ar: "تسري العضوية سنةً بسنة، وتُحتسب اشتراكاً واحداً. ويحدّد مستواك ما تشمله، وتنصّ اتفاقية العضوية على السعر.",
            },
          },
          {
            title: { en: "Project work, quoted in advance", nl: "Projectwerk, vooraf geoffreerd", ar: "أعمال المشاريع، بعرضٍ مسبق" },
            body: {
              en: "Market entry, searches beyond your level and representation are quoted per engagement, in writing, before any work begins. Nothing is invoiced that was not quoted.",
              nl: "Markttoetreding, zoekopdrachten buiten uw niveau en vertegenwoordiging worden per opdracht schriftelijk geoffreerd, voordat er werk begint. Er wordt niets gefactureerd dat niet is geoffreerd.",
              ar: "تُعرض أسعار دخول الأسواق، وعمليات البحث التي تتجاوز مستواك، والتمثيل، كتابةً لكل مهمة على حدة، قبل بدء أي عمل. ولا نُصدر فاتورةً بشيء لم يَرِد في العرض.",
            },
          },
          {
            title: { en: "No hidden commissions", nl: "Geen verborgen commissies", ar: "لا عمولات خفية" },
            body: {
              en: "We take no undisclosed share of any deal between members, from either side. Whatever we charge is agreed in advance and in writing.",
              nl: "Wij nemen geen verzwegen aandeel in een deal tussen leden, van geen van beide kanten. Wat wij in rekening brengen, wordt vooraf en schriftelijk afgesproken.",
              ar: "لا نتقاضى أي حصة غير معلنة من أي صفقة بين الأعضاء، لا من هذا الطرف ولا من ذاك. وكل ما نتقاضاه يُتفق عليه مسبقاً وكتابةً.",
            },
          },
          {
            title: { en: "The founding rate, held", nl: "Het oprichterstarief blijft", ar: "سعر التأسيس، محفوظ" },
            body: {
              en: "A Founding 100 member keeps the founding rate for as long as they remain a member, whatever the rates for other members.",
              nl: "Een Founding 100-lid behoudt het oprichterstarief zolang het lidmaatschap voortduurt, ongeacht de tarieven voor andere leden.",
              ar: "يحتفظ عضو Founding 100 بسعر التأسيس ما دامت عضويته قائمة، أياً كانت الأسعار المطبّقة على غيره من الأعضاء.",
            },
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "Prices", nl: "Prijzen", ar: "الأسعار" },
        heading: { en: "Why there are no prices *on this site.*", nl: "Waarom er geen prijzen *op deze site staan.*", ar: "سبب غياب الأسعار *عن هذا الموقع.*" },
        body: [
          {
            en: "The right level follows from what a company needs, not from a price list. A manufacturer looking for one distributor in the Gulf needs something different from a trading house sourcing in several markets at once, and each deserves a straight answer about which level fits.",
            nl: "Het juiste niveau volgt uit wat een bedrijf nodig heeft, niet uit een prijslijst. Een fabrikant die één distributeur in de Golf zoekt, heeft iets anders nodig dan een handelshuis dat in meerdere markten tegelijk inkoopt, en beide verdienen een eerlijk antwoord op de vraag welk niveau past.",
            ar: "المستوى المناسب يتحدد بحاجة الشركة، لا بقائمة أسعار. فالمصنع الذي يبحث عن موزّعٍ واحد في الخليج يحتاج إلى غير ما تحتاجه شركة تجارية تشتري من عدة أسواق في آنٍ واحد، وكلاهما يستحق جواباً صريحاً عن المستوى الذي يناسبه.",
          },
          {
            en: "Rates are therefore discussed with you directly, once we know what you trade and where, and set out in the membership agreement before anything is due. Project work is quoted separately, in writing. Nothing is charged that has not first been agreed on paper.",
            nl: "Tarieven bespreken wij daarom rechtstreeks met u, zodra wij weten wat u verhandelt en waar, en zij worden vastgelegd in de lidmaatschapsovereenkomst voordat er iets verschuldigd is. Projectwerk wordt apart en schriftelijk geoffreerd. Er wordt niets in rekening gebracht dat niet eerst op papier is afgesproken.",
            ar: "لذلك نناقش الأسعار معك مباشرةً، بعد أن نعرف ما تتاجر فيه وأين، ثم تُثبَّت في اتفاقية العضوية قبل أن يستحقّ أي مبلغ. وتُعرض أسعار أعمال المشاريع كتابةً وعلى حدة. ولا نتقاضى شيئاً لم يُتفق عليه كتابةً أولاً.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "The levels behind *the subscription.*", nl: "De niveaus achter *het abonnement.*", ar: "المستويات التي *يغطيها الاشتراك.*" },
        links: [
          { href: "membership/levels", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
          { href: "membership/guarantees", label: { en: "Our commitments", nl: "Onze toezeggingen", ar: "التزاماتنا" } },
          { href: "how-we-work/boundaries", label: { en: "What we do not do", nl: "Wat wij niet doen", ar: "ما لا نفعله" } },
        ],
      },
    ],
  },

  "how-we-work/boundaries": {
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
        kind: "next",
        heading: { en: "The rest, *answered plainly.*", nl: "De rest, *helder beantwoord.*", ar: "وسائر الأسئلة، *بإجاباتٍ واضحة.*" },
        links: [
          { href: "faq", label: { en: "Frequently asked questions", nl: "Veelgestelde vragen", ar: "الأسئلة الشائعة" } },
          { href: "services/documents", label: { en: "Documents, customs & logistics", nl: "Documenten, douane & logistiek", ar: "المستندات والجمارك واللوجستيات" } },
          { href: "how-we-work/verification", label: { en: "Verification & admission", nl: "Verificatie & toelating", ar: "التحقق والقبول" } },
        ],
      },
    ],
  },

  faq: {
    masthead: { variant: "plate", photo: "faq-hero" },
    blocks: [
      {
        kind: "faq",
        groups: [
          {
            title: { en: "About DUKAAT", nl: "Over DUKAAT", ar: "عن DUKAAT" },
            items: [
              {
                q: {
                  en: "Is DUKAAT an official chamber of commerce?",
                  nl: "Is DUKAAT een officiële kamer van koophandel?",
                  ar: "هل DUKAAT غرفة تجارة رسمية؟",
                },
                a: {
                  en: "No. DUKAAT is a private business club and platform. We do not represent any government and we do not issue official documents — though we cooperate with chambers and official bodies where it benefits our members. The foundation behind DUKAAT, Stichting Nederlands–Arabische Handelskamer, is a private foundation under Dutch law and has no public-law status.",
                  nl: "Nee. DUKAAT is een besloten businessclub en platform. Wij vertegenwoordigen geen overheid en geven geen officiële documenten af — al werken wij samen met kamers en officiële instanties waar dat onze leden ten goede komt. De stichting achter DUKAAT, Stichting Nederlands–Arabische Handelskamer, is een privaatrechtelijke stichting en heeft geen publiekrechtelijke status.",
                  ar: "لا. DUKAAT نادٍ خاص ومنصة أعمال. لا نمثّل أي حكومة ولا نصدر وثائق رسمية — وإن كنا نتعاون مع الغرف والجهات الرسمية حيثما يفيد ذلك أعضاءنا. أما المؤسسة التي يتبع لها DUKAAT، وهي Stichting Nederlands–Arabische Handelskamer، فمؤسسةٌ خاصة خاضعة للقانون الهولندي، وليست جهةً من جهات القانون العام.",
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
            ],
          },
          {
            title: { en: "Membership", nl: "Lidmaatschap", ar: "العضوية" },
            items: [
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
                  en: "What happens after the intake, or after I have been nominated?",
                  nl: "Wat gebeurt er na de intake, of nadat ik ben voorgedragen?",
                  ar: "ماذا يحدث بعد الاستمارة، أو بعد ترشيحي؟",
                },
                a: {
                  en: "We review your profile and may request documents or a short call. You receive an acceptance or a decline within 10 working days. Not everyone is admitted.",
                  nl: "Wij beoordelen uw profiel en kunnen om documenten of een kort gesprek vragen. U ontvangt binnen 10 werkdagen een toelating of een afwijzing. Niet iedereen wordt toegelaten.",
                  ar: "نراجع ملفك وقد نطلب مستندات أو مكالمة قصيرة. تتلقى قبولاً أو اعتذاراً خلال 10 أيام عمل. ولا يُقبل الجميع.",
                },
              },
              {
                q: {
                  en: "What is Founding 100?",
                  nl: "Wat is Founding 100?",
                  ar: "ما هي Founding 100؟",
                },
                a: {
                  en: "A status held next to the three levels, not a fourth level. DUKAAT gives it, by invitation, to one hundred of its most influential member companies. Each holds a permanent number from 001 to 100 that is never reissued, the founding rate for as long as it remains a member, a standing invitation to the annual Founding 100 Forum, and a voice when DUKAAT shapes new programmes, sector clubs and markets.",
                  nl: "Een status naast de drie niveaus, geen vierde niveau. DUKAAT geeft haar, op uitnodiging, aan honderd van zijn meest invloedrijke leden. Elk van hen heeft een vast nummer van 001 tot 100 dat nooit opnieuw wordt uitgegeven, het oprichterstarief zolang het lidmaatschap voortduurt, een vaste uitnodiging voor het jaarlijkse Founding 100 Forum, en een stem wanneer DUKAAT nieuwe programma’s, sectorclubs en markten vormgeeft.",
                  ar: "صفةٌ تُمنح إلى جانب المستويات الثلاثة، لا مستوى رابع. يمنحها DUKAAT، بالدعوة، لمئةٍ من أكثر الشركات الأعضاء تأثيراً. ولكلٍّ منها رقم دائم من 001 إلى 100 لا يُعاد إصداره أبداً، وسعر التأسيس ما دامت عضويتها قائمة، ودعوة دائمة إلى منتدى Founding 100 السنوي، وصوتٌ مسموع حين يرسم DUKAAT برامجه وأنديته القطاعية وأسواقه الجديدة.",
                },
              },
            ],
          },
          {
            title: { en: "Working with us", nl: "Werken met ons", ar: "العمل معنا" },
            items: [
              {
                q: {
                  en: "Which language can I use?",
                  nl: "In welke taal kan ik terecht?",
                  ar: "بأي لغة يمكنني التعامل معكم؟",
                },
                a: {
                  en: "Arabic, Dutch or English — whichever you prefer. Every member is served in their own language.",
                  nl: "Arabisch, Nederlands of Engels — wat u verkiest. Elk lid wordt in de eigen taal bediend.",
                  ar: "العربية أو الهولندية أو الإنجليزية — أيّها تفضّل. ونخدم كل عضو بلغته.",
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
            ],
          },
          {
            title: { en: "Money and liability", nl: "Geld en aansprakelijkheid", ar: "المال والمسؤولية" },
            items: [
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
                  en: "Do you take a commission on deals?",
                  nl: "Rekent u commissie op deals?",
                  ar: "هل تأخذون عمولة على الصفقات؟",
                },
                a: {
                  en: "No hidden commissions. DUKAAT earns from the annual subscription and from project work quoted in writing. Any other fee or commission is communicated clearly and agreed in advance, in writing, with every party concerned.",
                  nl: "Geen verborgen commissies. DUKAAT verdient aan het jaarabonnement en aan projectwerk dat schriftelijk is geoffreerd. Elke andere vergoeding of commissie wordt helder gecommuniceerd en vooraf schriftelijk afgesproken met iedere betrokken partij.",
                  ar: "لا عمولات خفية. يأتي دخل DUKAAT من الاشتراك السنوي ومن أعمال المشاريع التي تُعرض أسعارها كتابةً. وأي مقابل أو عمولة أخرى تُبلَّغ بوضوح ويُتّفق عليها مسبقاً وكتابةً مع كل طرف معنيّ.",
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
            ],
          },
          {
            title: { en: "Data and privacy", nl: "Gegevens en privacy", ar: "البيانات والخصوصية" },
            items: [
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
      {
        kind: "next",
        heading: { en: "For anything else, *write to us.*", nl: "Voor al het andere, *schrijf ons.*", ar: "ولأي أمرٍ آخر، *راسلنا.*" },
        body: {
          en: "We reply within 5 working days, in Arabic, Dutch or English.",
          nl: "Wij antwoorden binnen 5 werkdagen, in het Arabisch, Nederlands of Engels.",
          ar: "نرد خلال 5 أيام عمل، بالعربية أو الهولندية أو الإنجليزية.",
        },
        links: [
          { href: "contact", label: { en: "Contact", nl: "Contact", ar: "تواصل" } },
          { href: "contact?intent=nominated#intake", label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" } },
          { href: "how-we-work", label: { en: "How we work", nl: "Zo werken wij", ar: "كيف نعمل" } },
        ],
      },
    ],
  },
};
