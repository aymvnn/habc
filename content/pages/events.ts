import type { PageSet } from "./types";

/**
 * Events & insight — the group overview and its four pages: events, trade missions, the academy, market reports.
 * Described neutrally, in the present tense, as what DUKAAT offers and how it works: no counts, no dates, no places
 * beyond the programme names, nothing "planned" or "coming". No Syria. No prices.
 * Sources: content master p.14 (Academy), p.15 (Events), p.15–16 (Missions), p.21 (Intelligence), tiers p.11–13;
 * the compagnon's Arabic draft for the format descriptions and his Arabic wording where it exists.
 */
export const events: PageSet = {
  events: {
    masthead: { variant: "band", photo: "events-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We do not simply bring people together. We bring together the people who should meet. Our events, trade missions, academy and market reports all start from that idea.",
          nl: "Wij brengen niet zomaar mensen samen. Wij brengen de mensen samen die elkaar moeten ontmoeten. Onze evenementen, handelsmissies, academy en marktrapporten gaan allemaal uit van dat idee.",
          ar: "نحن لا نجمع الأشخاص فقط، بل نجمع الأشخاص الذين يجب أن يتقابلوا. ومن هذه الفكرة تنطلق فعالياتنا وبعثاتنا التجارية وأكاديميتنا وتقاريرنا عن الأسواق جميعاً.",
        },
      },
      {
        kind: "index",
        label: { en: "Contents", nl: "Inhoud", ar: "المحتويات" },
        heading: { en: "Meet, see, learn, *read.*", nl: "Ontmoeten, zien, leren, *lezen.*", ar: "نلتقي، ونعاين، ونتعلّم، *ونقرأ.*" },
      },
      {
        kind: "prose",
        label: { en: "How it fits", nl: "Samenhang", ar: "الخيط الجامع" },
        heading: { en: "Four parts, *one method.*", nl: "Vier onderdelen, *één methode.*", ar: "أربعة أقسام، *ومنهجٌ واحد.*" },
        body: [
          {
            en: "A dinner, a mission, a masterclass and a sector report look like different things. At DUKAAT they follow the same method as every introduction: we start from what a member offers and what they look for, and prepare the meeting, the programme or the text around it.",
            nl: "Een diner, een missie, een masterclass en een sectorrapport lijken weinig met elkaar gemeen te hebben. Bij DUKAAT volgen zij dezelfde methode als elke introductie: wij beginnen bij wat een lid aanbiedt en wat het zoekt, en stemmen het gesprek, het programma of de tekst daarop af.",
            ar: "قد يبدو العشاء والبعثة والجلسة المتقدّمة مع خبير والتقرير القطاعي أموراً متباعدة، لكنها في DUKAAT تتبع المنهج نفسه الذي يتبعه كل تعريف: ننطلق ممّا يقدّمه العضو وما يبحث عنه، ونُعِدّ اللقاء أو البرنامج أو النص على هذا الأساس.",
          },
          {
            en: "Places are limited by design. A meeting works when the right people are in the room, not when the room is full — and who is invited to what follows the level of membership.",
            nl: "Het aantal plaatsen is bewust beperkt. Een bijeenkomst werkt wanneer de juiste mensen in de zaal zitten, niet wanneer de zaal vol is — en wie waarvoor wordt uitgenodigd, hangt af van het niveau van het lidmaatschap.",
            ar: "عدد المقاعد محدود عمداً؛ فاللقاء ينجح حين يكون الأشخاص المناسبون في القاعة، لا حين تمتلئ القاعة. أما مَن يُدعى، وإلى أيّ لقاء، فيتبع مستوى العضوية.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "What each level *opens.*", nl: "Wat elk niveau *opent.*", ar: "ما يفتحه *كل مستوى.*" },
        body: {
          en: "Access to events, priority for places at them, and priority on trade missions differ per level. Membership itself is by nomination or invitation.",
          nl: "Toegang tot evenementen, voorrang bij plaatsen daarop en voorrang bij handelsmissies verschillen per niveau. Het lidmaatschap zelf is op voordracht of uitnodiging.",
          ar: "يختلف من مستوى إلى آخر الوصولُ إلى الفعاليات، والأولويةُ في مقاعدها، والأولويةُ في البعثات التجارية. أما العضوية نفسها فبالترشيح أو الدعوة.",
        },
        links: [
          { href: "membership/levels", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
          { href: "how-we-work", label: { en: "How we work", nl: "Zo werken wij", ar: "كيف نعمل" } },
          { href: "contact", label: { en: "Write to us", nl: "Schrijf ons", ar: "راسلنا" } },
        ],
      },
    ],
  },

  "events/calendar": {
    masthead: { variant: "portrait", photo: "cal-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Many business events end with a pocket full of business cards and nothing after them. A DUKAAT event is prepared the other way round: before anyone arrives, we have worked out who should meet whom, and why.",
          nl: "Veel zakelijke bijeenkomsten eindigen met een stapel visitekaartjes en verder niets. Een DUKAAT-bijeenkomst wordt andersom voorbereid: voordat iemand binnenkomt, hebben wij uitgezocht wie wie moet ontmoeten, en waarom.",
          ar: "كثيرٌ من فعاليات الأعمال ينتهي بمجموعةٍ من بطاقات العمل لا يحدث بعدها شيء. أما فعاليات DUKAAT فتُعَدّ على نحوٍ معاكس: قبل أن يصل أحد، نكون قد حدّدنا مَن ينبغي أن يلتقي بمَن، ولماذا.",
        },
      },
      {
        kind: "chapter",
        label: { en: "Formats", nl: "Vormen", ar: "الصيغ" },
        heading: { en: "Every meeting has *a reason.*", nl: "Elke ontmoeting heeft *een reden.*", ar: "لكل لقاءٍ *سببٌ.*" },
        intro: {
          en: "Each format serves a different moment in trade: a first introduction, a closed conversation, a buyer with a question, a stand at a fair.",
          nl: "Elke vorm dient een ander moment in de handel: een eerste kennismaking, een besloten gesprek, een koper met een vraag, een stand op een beurs.",
          ar: "لكلّ صيغةٍ لحظتها في التجارة: تعارفٌ أول، وحديثٌ في دائرة مغلقة، ومشترٍ لديه سؤال، وجناحٌ في معرض.",
        },
        items: [
          {
            title: { en: "B2B Matchmaking Events", nl: "B2B-matchmaking", ar: "فعاليات المطابقة بين الشركات" },
            body: {
              en: "Before the event, every participant states what they offer and what they look for. We match the companies in advance, so that the right two sit at the same table rather than meeting by chance.",
              nl: "Vóór de bijeenkomst geeft elke deelnemer aan wat hij aanbiedt en wat hij zoekt. Wij koppelen de bedrijven vooraf, zodat de juiste partijen aan dezelfde tafel zitten in plaats van elkaar bij toeval te treffen.",
              ar: "قبل الفعالية، يحدّد كل مشارك ما يقدّمه وما يبحث عنه، ونطابق نحن الشركات مسبقاً، ليجلس الطرفان المناسبان إلى الطاولة نفسها بدلاً من أن يلتقيا مصادفةً.",
            },
          },
          {
            title: { en: "Business Breakfasts", nl: "Zakenontbijten", ar: "لقاءات فطور الأعمال" },
            body: {
              en: "A short, structured morning meeting that suits the Dutch working day: one subject, one specialist, a limited number of members, and networking with a purpose.",
              nl: "Een korte, gestructureerde ochtendbijeenkomst die past bij de Nederlandse werkdag: één onderwerp, één specialist, een beperkt aantal leden en gericht netwerken.",
              ar: "لقاءٌ صباحي قصير ومنظّم يناسب إيقاع يوم العمل الهولندي: موضوعٌ واحد، وخبيرٌ واحد، وعددٌ محدود من الأعضاء، وتواصلٌ موجَّه.",
            },
          },
          {
            title: { en: "Executive Dinners", nl: "Executive Dinners", ar: "Executive Dinners" },
            body: {
              en: "Small dinners, by invitation only, for business owners and investors. The table is composed with care; what counts is the quality of the conversation, not the number of chairs.",
              nl: "Kleine diners, uitsluitend op uitnodiging, voor ondernemers en investeerders. De tafel wordt met zorg samengesteld; wat telt is de kwaliteit van het gesprek, niet het aantal stoelen.",
              ar: "لقاءات عشاءٍ محدودة العدد، بالدعوة فقط، لأصحاب الأعمال والمستثمرين. يُختار مَن يجلس إلى المائدة بعناية؛ فالعبرة بجودة الحديث، لا بعدد المقاعد.",
            },
          },
          {
            title: { en: "DUKAAT Circle", nl: "DUKAAT Circle", ar: "DUKAAT Circle" },
            body: {
              en: "A closed group of business owners and leaders who meet around one theme: a sector such as food, real estate or printing and packaging, or a shared interest such as investment.",
              nl: "Een besloten kring van ondernemers en bestuurders die samenkomt rond één thema: een sector zoals voeding, vastgoed of drukwerk en verpakking, of een gedeelde belangstelling zoals investeren.",
              ar: "حلقةٌ مغلقة من أصحاب الشركات وقادة الأعمال، تلتقي حول موضوعٍ واحد: قطاعٍ كالغذاء أو العقار أو الطباعة والتغليف، أو اهتمامٍ مشترك كالاستثمار.",
            },
          },
          {
            title: { en: "Speed Business Matching", nl: "Zakelijk speeddaten", ar: "لقاءات المطابقة السريعة" },
            body: {
              en: "Instead of open networking, each participant receives a schedule of short meetings with companies selected for their interests. Many conversations in one session, none of them by chance.",
              nl: "In plaats van vrij netwerken krijgt elke deelnemer een schema van korte gesprekken met bedrijven die op basis van zijn belangstelling zijn geselecteerd. Veel gesprekken in één sessie, geen daarvan toevallig.",
              ar: "بدلاً من التعارف العشوائي، يحصل كل مشارك على جدولٍ من اللقاءات القصيرة مع شركاتٍ اختيرت وفق اهتماماته. محادثاتٌ كثيرة في جلسةٍ واحدة، ولا واحدةَ منها بالمصادفة.",
            },
          },
          {
            title: { en: "Buyer in the Room", nl: "Buyer in the Room", ar: "Buyer in the Room" },
            body: {
              en: "An event built around buyers. The companies taking part know in advance that buyers with a genuine need in their sector are present, and what those buyers are looking for.",
              nl: "Een bijeenkomst rond kopers. De deelnemende bedrijven weten vooraf dat er kopers met een werkelijke behoefte in hun sector aanwezig zijn, en waar die kopers naar zoeken.",
              ar: "فعاليةٌ مبنيّة على المشترين: تعرف الشركات المشاركة مسبقاً أن في القاعة مشترين لديهم حاجةٌ حقيقية في قطاعها، وتعرف ما الذي يبحثون عنه.",
            },
          },
          {
            title: { en: "Exhibitions", nl: "Beurzen", ar: "المعارض" },
            body: {
              en: "DUKAAT organises or takes part in trade exhibitions on both sides: European and Arab products, food, construction and real estate, technology, machinery, printing and packaging, services and investment.",
              nl: "DUKAAT organiseert vakbeurzen aan beide kanten of neemt eraan deel: Europese en Arabische producten, voeding, bouw en vastgoed, technologie, machines, drukwerk en verpakking, diensten en investeringen.",
              ar: "ينظّم DUKAAT معارضَ تجارية على الضفتين أو يشارك فيها، في مجالات المنتجات الأوروبية والعربية، والغذاء، والبناء والعقار، والتكنولوجيا، والآلات، والطباعة والتغليف، والخدمات، والاستثمار.",
            },
          },
          {
            title: { en: "DUKAAT Pavilions", nl: "DUKAAT Pavilions", ar: "DUKAAT Pavilions" },
            body: {
              en: "A shared pavilion inside an international trade fair, where member companies exhibit together under the DUKAAT name rather than each on a stand of its own.",
              nl: "Een gedeeld paviljoen op een internationale vakbeurs, waar bedrijven van leden samen exposeren onder de naam DUKAAT in plaats van ieder op een eigen stand.",
              ar: "جناحٌ موحّد داخل معرضٍ دولي، تعرض فيه شركات الأعضاء معاً تحت اسم DUKAAT، بدلاً من أن تعرض كلٌّ منها في جناحٍ مستقل.",
            },
          },
          {
            title: { en: "Conferences", nl: "Conferenties", ar: "المؤتمرات" },
            body: {
              en: "Specialised conferences by market or by sector, where business owners and specialists from both sides examine one market, one trade or one question in depth.",
              nl: "Gespecialiseerde conferenties per markt of per sector, waar ondernemers en specialisten van beide kanten één markt, één vak of één vraag grondig behandelen.",
              ar: "مؤتمراتٌ متخصصة حسب السوق أو القطاع، يتناول فيها أصحاب الأعمال والخبراء من الضفتين سوقاً واحدة أو مجالاً واحداً أو مسألةً واحدة بعمق.",
            },
          },
          {
            title: { en: "Sector Events", nl: "Sectorbijeenkomsten", ar: "الفعاليات القطاعية" },
            body: {
              en: "Meetings for one trade at a time — food and agriculture, construction, logistics, energy and the club’s other sectors — where members meet buyers, suppliers and specialists from their own field.",
              nl: "Bijeenkomsten voor één vak tegelijk — voeding en landbouw, bouw, logistiek, energie en de andere sectoren van de club — waar leden kopers, leveranciers en specialisten uit hun eigen vakgebied ontmoeten.",
              ar: "لقاءاتٌ تخصّ قطاعاً واحداً في كل مرة — الغذاء والزراعة، والبناء، واللوجستيات، والطاقة، وسائر قطاعات النادي — يلتقي فيها الأعضاء بمشترين ومورّدين وخبراء من مجالهم نفسه.",
            },
          },
        ],
      },
      {
        kind: "duo",
        photos: ["cal-fair", "cal-pavilion"],
        label: { en: "DUKAAT Pavilions", nl: "DUKAAT Pavilions", ar: "DUKAAT Pavilions" },
        heading: { en: "Together under *one roof.*", nl: "Samen onder *één dak.*", ar: "معاً *تحت سقفٍ واحد.*" },
        body: [
          {
            en: "At an international trade fair, a single company on a stand of its own competes with a whole hall for attention. In a DUKAAT Pavilion, member companies exhibit together under one roof and one name — each with its own space and its own products, sharing the preparation and the visitors the pavilion draws.",
            nl: "Op een internationale vakbeurs concurreert één bedrijf op een eigen stand met een hele hal om aandacht. In een DUKAAT Pavilion exposeren bedrijven van leden samen, onder één dak en één naam — elk met een eigen plek en eigen producten; zij delen de voorbereiding en de bezoekers die het paviljoen trekt.",
            ar: "في المعرض الدولي، تنافس الشركةُ الواحدة في جناحها الخاص قاعةً كاملة على جذب الانتباه. أما في DUKAAT Pavilion، فتعرض شركات الأعضاء معاً تحت سقفٍ واحد واسمٍ واحد — لكلٍّ منها مساحتها ومنتجاتها، فيما تتقاسم التحضير والزوّار الذين يجذبهم الجناح.",
          },
          {
            en: "Meetings with buyers are prepared before the fair opens, as at every DUKAAT event, so that the days on the floor are spent in conversation rather than waiting at the stand.",
            nl: "Gesprekken met kopers worden voorbereid voordat de beurs opengaat, zoals bij elke DUKAAT-bijeenkomst, zodat de beursdagen opgaan aan gesprekken en niet aan wachten op de stand.",
            ar: "وتُحضَّر اللقاءات مع المشترين قبل افتتاح المعرض، كما في كل فعالية من فعاليات DUKAAT، فتُقضى أيام المعرض في المحادثات، لا في الانتظار عند الجناح.",
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "Invitations", nl: "Uitnodigingen", ar: "الدعوات" },
        heading: { en: "Invited, not *announced.*", nl: "Uitgenodigd, niet *aangekondigd.*", ar: "بالدعوة، *لا بالإعلان.*" },
        body: [
          {
            en: "Members receive the programme and their invitations directly, in their own language. Events are not announced publicly on this site: each invitation goes to the members for whom that meeting, that sector or that market is relevant.",
            nl: "Leden ontvangen het programma en hun uitnodigingen rechtstreeks, in hun eigen taal. Bijeenkomsten worden niet openbaar op deze site aangekondigd: elke uitnodiging gaat naar de leden voor wie die bijeenkomst, die sector of die markt van belang is.",
            ar: "يتلقّى الأعضاء البرنامج ودعواتهم مباشرةً، وبلغتهم. ولا تُعلَن الفعاليات للعموم على هذا الموقع؛ فكل دعوة تذهب إلى الأعضاء الذين يعنيهم ذلك اللقاء أو ذلك القطاع أو تلك السوق.",
          },
          {
            en: "What a member attends follows the level of membership. Member includes access to selected open events; Professional adds priority for places at events; Executive adds VIP access, invitations to the Executive Dinners and access to DUKAAT Circle.",
            nl: "Waaraan een lid deelneemt, hangt af van het niveau van het lidmaatschap. Member geeft toegang tot geselecteerde open bijeenkomsten; Professional geeft daarnaast voorrang bij plaatsen op evenementen; Executive voegt daar VIP-toegang, uitnodigingen voor de Executive Dinners en toegang tot DUKAAT Circle aan toe.",
            ar: "ويتبع ما يحضره العضو مستوى عضويته: يشمل مستوى Member حضور فعالياتٍ مفتوحة مختارة؛ ويضيف Professional الأولوية في مقاعد الفعاليات؛ ويضيف Executive الدخولَ بصفة VIP، والدعواتِ إلى Executive Dinners، والوصولَ إلى DUKAAT Circle.",
          },
          {
            en: "Some formats are also open to invited guests — a buyer, a counterparty or a specialist whose presence makes the meeting worthwhile. An invitation to an event is not a membership; membership is by nomination or invitation, after review.",
            nl: "Sommige vormen staan ook open voor genodigden — een koper, een tegenpartij of een specialist wiens aanwezigheid de bijeenkomst de moeite waard maakt. Een uitnodiging voor een bijeenkomst is geen lidmaatschap; lidmaatschap is op voordracht of uitnodiging, na beoordeling.",
            ar: "وبعض الصيغ مفتوحة أيضاً لضيوفٍ مدعوّين — مشترٍ أو طرفٍ مقابل أو خبيرٍ يجعل حضورُه اللقاءَ مجدياً. والدعوة إلى فعاليةٍ لا تعني العضوية؛ فالعضوية بالترشيح أو الدعوة، بعد المراجعة.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Where the goods *are made.*", nl: "Waar de goederen *worden gemaakt.*", ar: "حيث *تُصنع البضائع.*" },
        body: {
          en: "Some conversations are better held on the factory floor. Trade missions take members to the market itself, with the meetings arranged in advance.",
          nl: "Sommige gesprekken voert u beter op de fabrieksvloer. Handelsmissies brengen leden naar de markt zelf, met de gesprekken vooraf geregeld.",
          ar: "بعض المحادثات يحسن أن تُجرى في أرض المصنع. والبعثات التجارية تأخذ الأعضاء إلى السوق نفسها، وقد رُتّبت اللقاءات مسبقاً.",
        },
        links: [
          { href: "events/missions", label: { en: "Trade missions", nl: "Handelsmissies", ar: "البعثات التجارية" } },
          { href: "membership/levels", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
          { href: "network/sector-clubs", label: { en: "Sector clubs", nl: "Sectorclubs", ar: "الأندية القطاعية" } },
        ],
      },
    ],
  },

  "events/missions": {
    masthead: { variant: "band", photo: "mis-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "A market cannot always be understood through reports. Sometimes you need to see it yourself: the factory floor, the warehouse, the buyer across the table, the way business is done there.",
          nl: "Een markt laat zich niet altijd uit rapporten begrijpen. Soms moet u haar zelf zien: de fabrieksvloer, het magazijn, de koper aan de andere kant van de tafel, de manier waarop daar zaken worden gedaan.",
          ar: "السوق لا تُفهم دائماً من التقارير؛ أحياناً يجب أن تراها بنفسك: أرضَ المصنع، والمستودعَ، والمشتريَ الجالس قبالتك إلى الطاولة، والطريقةَ التي تُدار بها الأعمال هناك.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "The programme", nl: "Het programma", ar: "البرنامج" },
        heading: { en: "A programme, not *a tour.*", nl: "Een programma, geen *rondreis.*", ar: "برنامج عمل، *لا جولة.*" },
        intro: {
          en: "Each mission is composed around the members taking part: their products, their sector and the counterparties they need. A programme combines some or all of the following.",
          nl: "Elke missie wordt samengesteld rond de deelnemende leden: hun producten, hun sector en de tegenpartijen die zij nodig hebben. Een programma combineert enkele of alle van de volgende onderdelen.",
          ar: "تُصمَّم كل بعثة حول الأعضاء المشاركين فيها: منتجاتهم، وقطاعهم، والأطراف المقابلة التي يحتاجون إليها. ويجمع البرنامج بعض ما يلي أو كلّه.",
        },
        items: [
          {
            title: { en: "Company visits", nl: "Bedrijfsbezoeken", ar: "زيارات الشركات" },
            body: {
              en: "Visits to companies in the market — importers, wholesalers, retailers, service providers — to see how they work and what they expect from a partner.",
              nl: "Bezoeken aan bedrijven in de markt — importeurs, groothandels, detaillisten, dienstverleners — om te zien hoe zij werken en wat zij van een partner verwachten.",
              ar: "زياراتٌ لشركاتٍ في السوق — مستوردين، وتجار جملة وتجزئة، ومقدّمي خدمات — للاطلاع على طريقة عملهم وما يتوقعونه من الشريك.",
            },
          },
          {
            title: { en: "Factory visits", nl: "Fabrieksbezoeken", ar: "زيارات المصانع" },
            body: {
              en: "The production floor rather than the brochure: capacity, quality control, packing and certificates, seen at the source by the people who intend to buy from it.",
              nl: "De productievloer in plaats van de brochure: capaciteit, kwaliteitscontrole, verpakking en certificaten, gezien bij de bron door wie er wil inkopen.",
              ar: "أرض الإنتاج، لا الكتيّب التعريفي: الطاقة الإنتاجية، وضبط الجودة، والتعبئة، والشهادات، يعاينها عند المصدر مَن ينوي الشراء منه.",
            },
          },
          {
            title: { en: "Buyer meetings", nl: "Gesprekken met kopers", ar: "لقاءات المشترين" },
            body: {
              en: "Meetings with importers and buyers who have a stated need in the members’ sector, arranged in advance on the basis of what each side offers and looks for.",
              nl: "Gesprekken met importeurs en inkopers die een concrete behoefte hebben in de sector van de leden, vooraf geregeld op basis van wat beide kanten aanbieden en zoeken.",
              ar: "لقاءاتٌ مع مستوردين ومشترين لديهم حاجةٌ معلنة في قطاع الأعضاء، تُرتَّب مسبقاً بناءً على ما يقدّمه كل طرف وما يبحث عنه.",
            },
          },
          {
            title: { en: "Distributor meetings", nl: "Gesprekken met distributeurs", ar: "لقاءات الموزّعين" },
            body: {
              en: "Conversations with distributors and agents who could carry a member’s product in that market, prepared with the information both sides need to judge the fit.",
              nl: "Gesprekken met distributeurs en agenten die het product van een lid in die markt kunnen voeren, voorbereid met de informatie die beide kanten nodig hebben om te beoordelen of het past.",
              ar: "محادثاتٌ مع موزّعين ووكلاء يمكنهم تسويق منتج العضو وتوزيعه في تلك السوق، تُحضَّر بالمعلومات التي يحتاج إليها الطرفان للحكم على مدى التوافق.",
            },
          },
          {
            title: { en: "Investor meetings", nl: "Gesprekken met investeerders", ar: "لقاءات المستثمرين" },
            body: {
              en: "Meetings with investors, developers and project owners, for members who bring a project or capital. DUKAAT does not provide investment advice, does not arrange or broker investments, and does not offer securities. Opportunities are presented for information only. Independent legal, financial and technical due diligence remains essential before any investment decision.",
              nl: "Gesprekken met investeerders, ontwikkelaars en projecteigenaren, voor leden die een project of kapitaal meebrengen. DUKAAT geeft geen beleggingsadvies, bemiddelt niet bij investeringen en biedt geen effecten aan. Kansen worden uitsluitend ter informatie gepresenteerd. Onafhankelijk juridisch, financieel en technisch onderzoek blijft essentieel vóór elke investeringsbeslissing.",
              ar: "لقاءاتٌ مع مستثمرين ومطوّرين وأصحاب مشاريع، للأعضاء الذين لديهم مشروعٌ أو رأسُ مال. لا يقدّم DUKAAT استشارات استثمارية، ولا يرتّب الاستثمارات أو يتوسط فيها، ولا يعرض أوراقاً مالية. تُعرض الفرص للاطلاع فقط. ويبقى الفحص النافي للجهالة القانوني والمالي والفني المستقل ضرورياً قبل أي قرار استثماري.",
            },
          },
          {
            title: { en: "B2B meetings", nl: "B2B-gesprekken", ar: "لقاءات B2B" },
            body: {
              en: "Scheduled one-to-one meetings between visiting members and local companies, each with a stated reason and the right people at the table.",
              nl: "Geplande gesprekken tussen telkens één bezoekend lid en één lokaal bedrijf, elk met een benoemde reden en de juiste mensen aan tafel.",
              ar: "لقاءاتٌ ثنائية مجدولة بين الأعضاء الزائرين والشركات المحلية، لكلٍّ منها سببٌ معلن، ويجلس إلى طاولتها الأشخاص المناسبون.",
            },
          },
          {
            title: { en: "Market briefings", nl: "Marktbriefings", ar: "إحاطات السوق" },
            body: {
              en: "A briefing from people who work in the market: regulation, customs, payment habits and business culture — the things that are best heard first-hand.",
              nl: "Een toelichting door mensen die in de markt werken: regelgeving, douane, betaalgewoonten en zakencultuur — zaken die u het best uit de eerste hand hoort.",
              ar: "إحاطةٌ يقدّمها أشخاصٌ يعملون في السوق عن الأنظمة، والجمارك، وعادات الدفع، وثقافة الأعمال — وهي أمورٌ يُستحسن أن تُسمع من أهلها مباشرةً.",
            },
          },
          {
            title: { en: "Trade exhibitions", nl: "Vakbeurzen", ar: "المعارض التجارية" },
            body: {
              en: "Where a relevant trade fair takes place, the programme includes it — with meetings arranged on the stands rather than a walk along them.",
              nl: "Waar een relevante vakbeurs plaatsvindt, hoort die bij het programma — met afspraken op de stands in plaats van een wandeling erlangs.",
              ar: "حين يُقام معرضٌ تجاري ذو صلة، يُدرج في البرنامج — مع لقاءاتٍ مرتّبة في الأجنحة، بدلاً من مجرد التجوّل بينها.",
            },
          },
          {
            title: { en: "Local experts", nl: "Lokale deskundigen", ar: "الخبراء المحليون" },
            body: {
              en: "Lawyers, tax specialists, customs agents and logistics providers based in the market, who answer the questions a member would otherwise run into only after the first order.",
              nl: "Juristen, belastingspecialisten, douane-expediteurs en logistieke dienstverleners ter plaatse, die de vragen beantwoorden waar een lid anders pas na de eerste order tegenaan loopt.",
              ar: "محامون، ومختصّون في الضرائب، ومخلّصون جمركيون، ومزوّدو خدماتٍ لوجستية في السوق نفسها، يجيبون مسبقاً عن أسئلةٍ لا يصطدم بها العضو عادةً إلا بعد الطلبية الأولى.",
            },
          },
        ],
      },
      {
        kind: "chapter",
        label: { en: "Programmes", nl: "Programma’s", ar: "البرامج" },
        heading: { en: "Missions in *both directions.*", nl: "Missies in *beide richtingen.*", ar: "بعثاتٌ *في الاتجاهين.*" },
        intro: {
          en: "Discover Netherlands and the Reverse Buyer Missions bring business people and buyers from the Arab world to the Netherlands. Discover Dubai and Discover Saudi Arabia take members to the Gulf.",
          nl: "Discover Netherlands en de Reverse Buyer Missions brengen ondernemers en kopers uit de Arabische wereld naar Nederland. Discover Dubai en Discover Saudi Arabia brengen leden naar de Golf.",
          ar: "يأتي برنامجا Discover Netherlands وReverse Buyer Missions بأصحاب الأعمال والمشترين من العالم العربي إلى هولندا، فيما يأخذ برنامجا Discover Dubai وDiscover Saudi Arabia الأعضاءَ إلى الخليج.",
        },
        items: [
          {
            title: { en: "Discover Netherlands", nl: "Discover Netherlands", ar: "Discover Netherlands" },
            body: {
              en: "For business people from the Arab world: Dutch companies and factories, the port of Rotterdam and its logistics, innovation, investment, company formation and the Dutch way of doing business.",
              nl: "Voor ondernemers uit de Arabische wereld: Nederlandse bedrijven en fabrieken, de haven van Rotterdam en haar logistiek, innovatie, investeren, bedrijfsoprichting en de Nederlandse manier van zakendoen.",
              ar: "برنامجٌ لأصحاب الأعمال القادمين من العالم العربي، للتعرّف إلى الشركات والمصانع الهولندية، وميناء روتردام ومنظومته اللوجستية، والابتكار، والاستثمار، وتأسيس الشركات، وثقافة الأعمال في هولندا.",
            },
            photo: "mis-nl",
          },
          {
            title: { en: "Discover Dubai", nl: "Discover Dubai", ar: "Discover Dubai" },
            body: {
              en: "Setting up a company, investment, real estate and B2B meetings with local firms in one programme — with time to experience the city and how it does business.",
              nl: "Een bedrijf opzetten, investeren, vastgoed en B2B-gesprekken met lokale bedrijven in één programma — met tijd om de stad te ervaren en te zien hoe er zaken worden gedaan.",
              ar: "برنامجٌ واحد يجمع تأسيس الشركات، والاستثمار، والعقار، ولقاءات B2B مع الشركات المحلية — مع متّسعٍ من الوقت لاكتشاف المدينة ومعرفة كيف تُدار فيها الأعمال.",
            },
            photo: "mis-dubai",
          },
          {
            title: { en: "Discover Saudi Arabia", nl: "Discover Saudi Arabia", ar: "Discover Saudi Arabia" },
            body: {
              en: "A programme on the Saudi market: investors, suppliers, agents and distributors, the major projects, and the trade fairs where the market meets.",
              nl: "Een programma over de Saoedische markt: investeerders, leveranciers, agenten en distributeurs, de grote projecten, en de vakbeurzen waar de markt samenkomt.",
              ar: "برنامجٌ يركّز على السوق السعودية: المستثمرون، والمورّدون، والوكلاء والموزّعون، والمشاريع الكبرى، والمعارض التي يلتقي فيها أطراف السوق.",
            },
            photo: "mis-saudi",
          },
          {
            title: { en: "Reverse Buyer Missions", nl: "Reverse Buyer Missions", ar: "Reverse Buyer Missions" },
            body: {
              en: "Sometimes we bring the buyers to Europe. Buyers from the Gulf and the wider Arab world come to the Netherlands to meet European manufacturers and suppliers, in their own factories.",
              nl: "Soms brengen wij de kopers naar Europa. Kopers uit de Golf en de bredere Arabische wereld komen naar Nederland om Europese fabrikanten en leveranciers te ontmoeten, in hun eigen fabrieken.",
              ar: "أحياناً نأتي بالمشترين إلى أوروبا: مشترون من الخليج وسائر العالم العربي يَقدَمون إلى هولندا للقاء مصنّعين ومورّدين أوروبيين في مصانعهم.",
            },
            photo: "mis-reverse",
          },
        ],
      },
      {
        kind: "statement",
        text: {
          en: "The meetings are arranged before anyone travels. A mission is spent in conversation, not in search of one.",
          nl: "De afspraken staan vast voordat iemand vertrekt. Een missie gaat op aan gesprekken, niet aan het zoeken ernaar.",
          ar: "تُرتَّب اللقاءات قبل أن يسافر أحد؛ فوقت البعثة للمحادثات، لا للبحث عنها.",
        },
        note: {
          en: "A programme is confirmed only after the legal, insurance and travel conditions at the destination have been assessed.",
          nl: "Een programma wordt pas bevestigd nadat de juridische omstandigheden, de verzekering en de reisadviezen voor de bestemming zijn beoordeeld.",
          ar: "لا يُعتمد أي برنامج إلا بعد تقييم الظروف القانونية والتأمين ونصائح السفر الخاصة بالوجهة.",
        },
      },
      {
        kind: "next",
        heading: { en: "Start with *the market.*", nl: "Begin bij *de markt.*", ar: "ابدأ *بالسوق.*" },
        body: {
          en: "Tell us which market you want to enter and what you bring. Places on missions are limited; Executive members have priority, with a guaranteed place on [one trade mission] per year.",
          nl: "Laat ons weten welke markt u wilt betreden en wat u meebrengt. Het aantal plaatsen op een missie is beperkt; Executive-leden hebben voorrang, met een gegarandeerde plaats op [één handelsmissie] per jaar.",
          ar: "أخبرنا بالسوق التي تريد دخولها، وبما تحمله إليها. عدد المقاعد في البعثات محدود، والأولوية فيها لأعضاء Executive، مع مقعدٍ مضمون في [بعثة تجارية واحدة] كل سنة.",
        },
        links: [
          {
            href: "contact?intent=market-entry#intake",
            label: { en: "I want to enter a new market", nl: "Ik wil een nieuwe markt betreden", ar: "أريد دخول سوق جديدة" },
          },
          { href: "services/market-entry", label: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" } },
          { href: "membership/guarantees", label: { en: "Our commitments", nl: "Onze toezeggingen", ar: "التزاماتنا" } },
        ],
      },
    ],
  },

  "events/academy": {
    masthead: { variant: "plate", photo: "aca-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "The right knowledge before the right decision. Entering a new market takes more than capital and a good product: it takes an understanding of the law, the taxes, the culture and the way people negotiate there.",
          nl: "De juiste kennis vóór de juiste beslissing. Een nieuwe markt betreden vraagt meer dan kapitaal en een goed product: het vraagt kennis van het recht, de belastingen, de cultuur en de manier waarop daar wordt onderhandeld.",
          ar: "المعرفة الصحيحة قبل القرار الصحيح. فالدخول إلى سوقٍ جديدة لا يحتاج إلى رأس المال والمنتج الجيد فحسب، بل يحتاج إلى فهم القانون والضرائب والثقافة وطريقة التفاوض فيها.",
        },
      },
      {
        kind: "terms",
        label: { en: "Subjects", nl: "Onderwerpen", ar: "الموضوعات" },
        heading: { en: "Practice, not *theory.*", nl: "Praktijk, geen *theorie.*", ar: "تطبيقٌ، *لا تنظير.*" },
        intro: {
          en: "No long theoretical courses: knowledge a member can use in the business directly. Programmes for Arab companies focus on the Netherlands and Europe; programmes for European companies on the Gulf and the wider Arab world.",
          nl: "Geen lange theoretische cursussen, maar kennis die een lid direct in het eigen bedrijf kan toepassen. Programma’s voor Arabische bedrijven richten zich op Nederland en Europa; programma’s voor Europese bedrijven op de Golf en de bredere Arabische wereld.",
          ar: "لا نقدّم دوراتٍ نظرية طويلة، بل معرفةً يستطيع العضو أن يستخدمها في عمله مباشرةً. تركّز البرامج الموجّهة إلى الشركات العربية على هولندا وأوروبا، والبرامج الموجّهة إلى الشركات الأوروبية على الخليج وسائر العالم العربي.",
        },
        items: [
          { en: "Entering the Dutch market", nl: "De Nederlandse markt betreden", ar: "دخول السوق الهولندية" },
          { en: "Entering Arab markets", nl: "Arabische markten betreden", ar: "دخول الأسواق العربية" },
          { en: "Company formation", nl: "Bedrijfsoprichting", ar: "تأسيس الشركات" },
          { en: "Taxation", nl: "Belastingen", ar: "الضرائب" },
          { en: "VAT", nl: "Btw", ar: "ضريبة القيمة المضافة" },
          { en: "Import and export", nl: "Import en export", ar: "الاستيراد والتصدير" },
          { en: "Incoterms", nl: "Incoterms", ar: "قواعد Incoterms" },
          { en: "Customs", nl: "Douane", ar: "الجمارك" },
          { en: "Commercial contracts", nl: "Handelscontracten", ar: "العقود التجارية" },
          { en: "Logistics", nl: "Logistiek", ar: "اللوجستيات" },
          { en: "B2B sales", nl: "B2B-verkoop", ar: "مبيعات B2B" },
          { en: "Marketing", nl: "Marketing", ar: "التسويق" },
          { en: "LinkedIn", nl: "LinkedIn", ar: "LinkedIn" },
          { en: "AI for business", nl: "AI in de bedrijfsvoering", ar: "الذكاء الاصطناعي في الأعمال" },
          { en: "Investment", nl: "Investeren", ar: "الاستثمار" },
          { en: "Financial analysis", nl: "Financiële analyse", ar: "التحليل المالي" },
          { en: "Negotiation", nl: "Onderhandelen", ar: "التفاوض" },
          { en: "Business culture", nl: "Zakencultuur", ar: "ثقافة الأعمال" },
        ],
      },
      {
        kind: "register",
        photo: "aca-notes",
        label: { en: "Formats", nl: "Vormen", ar: "الصيغ" },
        heading: { en: "From one morning to *a full programme.*", nl: "Van één ochtend tot *een volledig programma.*", ar: "من صباحٍ واحد *إلى برنامجٍ كامل.*" },
        intro: {
          en: "The format follows the audience: a room of members, a closed table of owners, or one company’s own team.",
          nl: "De vorm volgt het publiek: een zaal vol leden, een besloten tafel van eigenaren, of het eigen team van één bedrijf.",
          ar: "تتبع الصيغةُ جمهورَها: قاعةٌ من الأعضاء، أو طاولةٌ مغلقة لأصحاب الشركات، أو فريقُ شركةٍ واحدة.",
        },
        items: [
          {
            title: { en: "Seminars", nl: "Seminars", ar: "الندوات" },
            body: {
              en: "Short, direct sessions on one subject, with room for the questions members bring from their own business.",
              nl: "Korte, directe sessies over één onderwerp, met ruimte voor de vragen die leden uit hun eigen bedrijf meebrengen.",
              ar: "ندواتٌ قصيرة ومباشرة حول موضوعٍ واحد، مع متّسعٍ للأسئلة التي يحملها الأعضاء من أعمالهم.",
            },
          },
          {
            title: { en: "Workshops", nl: "Workshops", ar: "ورش العمل" },
            body: {
              en: "Hands-on sessions in which participants work on their own case: a contract, a customs file, a plan for a new market.",
              nl: "Praktische sessies waarin deelnemers aan hun eigen casus werken: een contract, een douanedossier, een plan voor een nieuwe markt.",
              ar: "ورش عملٍ تطبيقية يعمل فيها المشاركون على حالاتٍ من أعمالهم: عقدٍ، أو ملفٍّ جمركي، أو خطةٍ لدخول سوقٍ جديدة.",
            },
          },
          {
            title: { en: "Masterclasses", nl: "Masterclasses", ar: "الجلسات المتقدّمة" },
            body: {
              en: "Advanced sessions with a specialist, for members who already trade and need depth on a single question.",
              nl: "Verdiepende sessies met een specialist, voor leden die al handelen en diepgang zoeken in één vraagstuk.",
              ar: "جلساتٌ متقدّمة مع خبير، لأعضاءٍ يتاجرون أصلاً ويحتاجون إلى التعمّق في مسألةٍ واحدة.",
            },
          },
          {
            title: { en: "Webinars", nl: "Webinars", ar: "الندوات عبر الإنترنت" },
            body: {
              en: "Online sessions, so that members in the Netherlands and in the Arab world can follow the same programme without travelling.",
              nl: "Online sessies, zodat leden in Nederland en in de Arabische wereld hetzelfde programma kunnen volgen zonder te reizen.",
              ar: "جلساتٌ عبر الإنترنت، ليتابع الأعضاء في هولندا وفي العالم العربي البرنامجَ نفسه دون أن يسافروا.",
            },
          },
          {
            title: { en: "Executive Sessions", nl: "Directiesessies", ar: "جلسات الإدارة العليا" },
            body: {
              en: "Closed sessions for owners and senior management, on the decisions that belong at that level: structure, partners, investment.",
              nl: "Besloten sessies voor eigenaren en directie, over de beslissingen die op dat niveau thuishoren: structuur, partners, investeringen.",
              ar: "جلساتٌ مغلقة لأصحاب الشركات والإدارة العليا، حول القرارات التي تُتَّخذ على ذلك المستوى: الهيكل، والشركاء، والاستثمار.",
            },
          },
          {
            title: { en: "Corporate Training", nl: "Opleiding op maat", ar: "التدريب المؤسسي" },
            body: {
              en: "A programme designed for one company and its team, built around the market it is entering or the trade it is building.",
              nl: "Een programma ontworpen voor één bedrijf en zijn team, rond de markt die het betreedt of de handel die het opbouwt.",
              ar: "برنامجٌ مصمَّم لشركةٍ بعينها وفريقها، حول السوق التي تدخلها أو النشاط التجاري الذي تبنيه.",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "When a question needs *a specialist.*", nl: "Wanneer een vraag *een specialist vergt.*", ar: "حين يحتاج السؤال *إلى مختصّ.*" },
        body: {
          en: "Some questions go beyond a session: a specific contract, a tax position, a structure. For those, we introduce an independent specialist from the network.",
          nl: "Sommige vragen gaan verder dan een sessie: een concreet contract, een fiscale positie, een structuur. Daarvoor introduceren wij een onafhankelijke specialist uit het netwerk.",
          ar: "بعض الأسئلة تتجاوز حدود الجلسة: عقدٌ بعينه، أو وضعٌ ضريبي، أو هيكلٌ قانوني. وفي هذه الحالات نعرّفك بمختصٍّ مستقلّ من الشبكة.",
        },
        links: [
          { href: "services/advisory", label: { en: "Specialist advice", nl: "Specialistisch advies", ar: "الاستشارات المتخصصة" } },
          { href: "events/intelligence", label: { en: "Market reports", nl: "Marktrapporten", ar: "تقارير الأسواق" } },
          { href: "services/market-entry", label: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" } },
        ],
      },
    ],
  },

  "events/intelligence": {
    masthead: { variant: "portrait", photo: "int-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "General news tells you what happened; the right information helps you decide what to do. Instead of only publishing general news, DUKAAT provides actionable business intelligence relevant to each member’s industry.",
          nl: "Algemeen nieuws vertelt u wat er is gebeurd; de juiste informatie helpt u te beslissen wat u doet. In plaats van alleen algemeen nieuws te publiceren, levert DUKAAT bruikbare marktinformatie die aansluit bij de branche van elk lid.",
          ar: "المعلومات العامة تخبرك ماذا حدث، أما المعلومات الصحيحة فتساعدك على معرفة ماذا تفعل. وبدلاً من الاكتفاء بنشر الأخبار العامة، يقدّم DUKAAT معلوماتٍ تجارية قابلة للتطبيق، ترتبط بقطاع كل عضو.",
        },
      },
      {
        kind: "register",
        label: { en: "What members receive", nl: "Wat leden ontvangen", ar: "ما يتلقّاه الأعضاء" },
        heading: { en: "From a market report to *a single alert.*", nl: "Van marktrapport tot *één enkele melding.*", ar: "من تقرير السوق *إلى تنبيهٍ واحد.*" },
        intro: {
          en: "The level of membership sets what arrives: selected reports and general opportunity alerts from Member onwards, personalised alerts from Professional onwards.",
          nl: "Het niveau van het lidmaatschap bepaalt wat er binnenkomt: geselecteerde rapporten en algemene kansenmeldingen vanaf Member, persoonlijke kansenmeldingen vanaf Professional.",
          ar: "ويحدّد مستوى العضوية ما يصل إلى العضو: تقاريرُ مختارة وتنبيهاتٌ عامة بالفرص ابتداءً من مستوى Member، وتنبيهاتٌ مخصّصة بالفرص ابتداءً من مستوى Professional.",
        },
        items: [
          {
            title: { en: "Market Reports", nl: "Marktrapporten", ar: "تقارير الأسواق" },
            body: {
              en: "How a market works for a given trade: demand, import rules, distribution channels, price levels and the counterparties that matter.",
              nl: "Hoe een markt werkt voor een bepaald vak: vraag, importregels, distributiekanalen, prijsniveaus en de partijen die ertoe doen.",
              ar: "كيف تعمل سوقٌ ما في تجارةٍ بعينها: الطلب، وقواعد الاستيراد، وقنوات التوزيع، ومستويات الأسعار، والأطراف المؤثّرة فيها.",
            },
          },
          {
            title: { en: "Opportunity Briefs", nl: "Kansenoverzichten", ar: "موجزات الفرص" },
            body: {
              en: "Alongside the general newsletter, a short brief with the opportunities that fit a member’s own trade: stocklots, machinery, buyer requests, a factory for sale.",
              nl: "Naast de algemene nieuwsbrief een kort overzicht met de kansen die passen bij het vak van een lid: partijen, machines, inkoopaanvragen, een fabriek die te koop staat.",
              ar: "إلى جانب النشرة العامة، موجزٌ قصير بالفرص التي تناسب نشاط العضو نفسه: دفعات مخزون، وآلات، وطلبات شراء، ومصنعٌ معروض للبيع.",
            },
          },
          {
            title: { en: "Sector Reports", nl: "Sectorrapporten", ar: "التقارير القطاعية" },
            body: {
              en: "One sector followed on both sides — food and agriculture, construction, logistics, energy and the others — with the developments that change what can be bought and sold.",
              nl: "Eén sector gevolgd aan beide kanten — voeding en landbouw, bouw, logistiek, energie en de andere — met de ontwikkelingen die veranderen wat er te kopen en te verkopen valt.",
              ar: "قطاعٌ واحد يُتابَع على الضفتين — الغذاء والزراعة، والبناء، واللوجستيات، والطاقة، وغيرها — مع التطورات التي تغيّر ما يمكن شراؤه وبيعه.",
            },
          },
          {
            title: { en: "Country Guides", nl: "Landengidsen", ar: "أدلة الدول" },
            body: {
              en: "The practical ground rules of one country: company forms, tax, customs, contracts, payment habits and business culture, in the order a newcomer needs them.",
              nl: "De praktische spelregels van één land: rechtsvormen, belastingen, douane, contracten, betaalgewoonten en zakencultuur, in de volgorde waarin een nieuwkomer ze nodig heeft.",
              ar: "القواعد العملية لبلدٍ واحد: الأشكال القانونية للشركات، والضرائب، والجمارك، والعقود، وعادات الدفع، وثقافة الأعمال، بالترتيب الذي يحتاج إليه الوافد الجديد.",
            },
          },
          {
            title: { en: "Market Entry Guides", nl: "Toetredingsgidsen", ar: "أدلة دخول الأسواق" },
            body: {
              en: "The route into a market step by step — structure, partner, distribution, first order — for a company that has decided to go.",
              nl: "De route naar een nieuwe markt, stap voor stap — structuur, partner, distributie, eerste order — voor een bedrijf dat heeft besloten de stap te zetten.",
              ar: "طريق الدخول إلى سوقٍ ما خطوةً خطوة — الهيكل، والشريك، والتوزيع، والطلبية الأولى — لشركةٍ حسمت قرارها بالدخول.",
            },
          },
          {
            title: { en: "Buyer Alerts", nl: "Kopersmeldingen", ar: "تنبيهات المشترين" },
            body: {
              en: "A notice when a buyer in the network states a need that matches what a member supplies — reviewed by a person before it reaches the member.",
              nl: "Een melding wanneer een koper in het netwerk een behoefte uitspreekt die past bij wat een lid levert — door een mens beoordeeld voordat die het lid bereikt.",
              ar: "إشعارٌ حين يعلن مشترٍ في الشبكة عن حاجةٍ تطابق ما يورّده العضو — يراجعه إنسانٌ قبل أن يصل إليه.",
            },
          },
          {
            title: { en: "Supplier Opportunities", nl: "Leverancierskansen", ar: "فرص المورّدين" },
            body: {
              en: "The other direction: manufacturers, available production capacity and private-label options that match what a member buys or wants to source.",
              nl: "De andere richting: fabrikanten, beschikbare productiecapaciteit en mogelijkheden voor huismerkproductie die passen bij wat een lid inkoopt of wil inkopen.",
              ar: "الاتجاه المعاكس: مصنّعون، وطاقاتٌ إنتاجية متاحة، وإمكانات التصنيع بعلامة خاصة (Private Label)، تناسب ما يشتريه العضو أو ما يبحث عن مصدرٍ له.",
            },
          },
        ],
      },
      {
        kind: "band",
        photo: "int-band",
        caption: {
          en: "The market, read from both sides.",
          nl: "De markt, gelezen van beide kanten.",
          ar: "السوق، مقروءةً من الضفتين.",
        },
      },
      {
        kind: "prose",
        label: { en: "For traders", nl: "Voor handelaren", ar: "للتجار" },
        heading: { en: "A decision, not *a newsfeed.*", nl: "Een beslissing, geen *nieuwsstroom.*", ar: "قرارٌ، *لا سيلُ أخبار.*" },
        body: [
          {
            en: "Our reports are written for people who trade, not for people who study trade. They start from the questions a buyer, a supplier or an investor asks before committing: who buys this, on what terms, through which channel, under which rules.",
            nl: "Onze rapporten zijn geschreven voor mensen die handelen, niet voor mensen die de handel bestuderen. Ze beginnen bij de vragen die een koper, een leverancier of een investeerder stelt voordat hij zich bindt: wie koopt dit, onder welke voorwaarden, via welk kanaal, volgens welke regels.",
            ar: "تُكتب تقاريرنا لمن يمارسون التجارة، لا لمن يدرسونها. وتنطلق من الأسئلة التي يطرحها المشتري أو المورّد أو المستثمر قبل أن يلتزم: مَن يشتري هذا، وبأي شروط، وعبر أي قناة، ووفق أي قواعد.",
          },
          {
            en: "They are organised per sector and per market. A member in food and agriculture is not sent reports on construction; a company preparing for the Gulf is not sent reports on Europe. Each piece serves a decision — to enter, to buy, to sell, or to wait.",
            nl: "Ze zijn ingedeeld per sector en per markt. Een lid in voeding en landbouw krijgt geen rapporten over de bouw; een bedrijf dat zich op de Golf voorbereidt, krijgt geen rapporten over Europa. Elk stuk dient een beslissing: een markt betreden, kopen, verkopen of afwachten.",
            ar: "وهي مصنّفة حسب القطاع وحسب السوق: فالعضو في قطاع الغذاء والزراعة لا تصله تقارير عن البناء، والشركة التي تستعدّ لدخول الخليج لا تصلها تقارير عن أوروبا. وكل نصٍّ يخدم قراراً — دخول السوق، أو الشراء، أو البيع، أو التريّث.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "From the page to *the table.*", nl: "Van papier naar *de tafel.*", ar: "من الورق *إلى الطاولة.*" },
        body: {
          en: "Where a report raises a question it cannot answer, the next step is a conversation — with us, or with a specialist from the network.",
          nl: "Roept een rapport een vraag op die het zelf niet beantwoordt, dan is de volgende stap een gesprek — met ons, of met een specialist uit het netwerk.",
          ar: "حين يثير التقرير سؤالاً لا يجيب عنه، تكون الخطوة التالية حديثاً — معنا، أو مع مختصٍّ من الشبكة.",
        },
        links: [
          { href: "services/advisory", label: { en: "Specialist advice", nl: "Specialistisch advies", ar: "الاستشارات المتخصصة" } },
          { href: "market/buyer-requests", label: { en: "Buyer requests", nl: "Inkoopaanvragen", ar: "طلبات الشراء" } },
          {
            href: "contact?intent=market-entry#intake",
            label: { en: "I want to enter a new market", nl: "Ik wil een nieuwe markt betreden", ar: "أريد دخول سوق جديدة" },
          },
        ],
      },
    ],
  },
};
