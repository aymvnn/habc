import type { PageSet } from "./types";

/**
 * Source section 5 (Workshops, events and exhibitions — DUKAAT Events), in the source's order.
 * ar = the Arabic master verbatim; nl / en = the translation files verbatim (owntext/vertalingen/).
 * Not published (editorial): the labels, the event card template and the event details template.
 * The three buttons: "View events" is the heading of the events listing (#events), whose empty text is the source's
 * text for when no events are announced; the other two buttons are the listing's links to the contact form.
 */
export const events: PageSet = {
  events: {
    masthead: { variant: "band", photo: "f-events" },
    eyebrow: {
      en: "DUKAAT Events",
      nl: "DUKAAT Events",
      ar: "DUKAAT Events",
    },
    headline: {
      en: "A meeting with a purpose, and a dialogue to build on",
      nl: "Een ontmoeting met een doel, en een gesprek om op voort te bouwen",
      ar: "لقاء له هدف، وحوار يمكن البناء عليه",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We bring together people with related interests in gatherings that help them get to know one another, learn and explore opportunities for collaboration. We start from a question: who needs to meet whom, and why? Then we build an experience suited to the event’s theme and its participants.",
          nl: "We brengen mensen met verwante interesses samen in bijeenkomsten die hen helpen met elkaar kennis te maken, te leren en samenwerkingskansen te verkennen. We beginnen met een vraag: wie moet wie ontmoeten, en waarom? Daarna stellen we een ervaring samen die past bij het onderwerp en de deelnemers van het evenement.",
          ar: "نجمع أصحاب الاهتمامات المتقاربة في لقاءات تساعدهم على التعارف والتعلم واستكشاف فرص التعاون. نبدأ من سؤال: من يحتاج إلى مقابلة من، ولماذا؟ ثم نبني تجربة تناسب موضوع الفعالية والمشاركين فيها.",
        },
      },
      {
        kind: "chapter",
        items: [
          {
            title: {
              en: "Group workshops",
              nl: "Groepsworkshops",
              ar: "ورش العمل الجماعية",
            },
            body: {
              en: "A space to work on a shared challenge: developing an idea, solving a problem or improving a commercial offer. Participants exchange perspectives, apply tools, present their results and receive feedback from the facilitator and the group.",
              nl: "Een ruimte om te werken aan een gedeelde uitdaging: een idee ontwikkelen, een probleem oplossen of een commercieel aanbod verbeteren. De deelnemers wisselen zienswijzen uit, passen hulpmiddelen toe, presenteren hun resultaten en krijgen feedback van de facilitator en de groep.",
              ar: "مساحة للعمل على تحدٍّ مشترك: تطوير فكرة، أو حل مشكلة، أو تحسين عرض تجاري. يتبادل المشاركون وجهات النظر، ويطبقون الأدوات، ويعرضون نتائجهم ويحصلون على ملاحظات من الميسّر والمجموعة.",
            },
          },
          {
            title: {
              en: "Business meetings and matchmaking",
              nl: "Zakelijke bijeenkomsten en matchmaking",
              ar: "لقاءات الأعمال والمطابقة",
            },
            body: {
              en: "Targeted meetings between companies, in which each participant explains what they offer and what they are looking for. They may include short one-to-one meetings, sector sessions, or a meeting with a buyer or supplier around a specific need.",
              nl: "Gerichte bijeenkomsten tussen bedrijven, waarin deelnemers toelichten wat zij aanbieden en wat zij zoeken. Daarbij kan het gaan om korte één-op-éénbesprekingen, sectorsessies of een ontmoeting met een koper of leverancier rond een specifieke behoefte.",
              ar: "لقاءات موجهة بين الشركات، يوضح فيها المشارك ما يقدمه وما يبحث عنه. يمكن أن تتضمن اجتماعات ثنائية قصيرة، أو جلسات قطاعية، أو لقاءً مع مشترٍ أو مورّد حول احتياج محدد.",
            },
          },
          {
            title: {
              en: "Expert meetings and executive round tables",
              nl: "Ontmoetingen met experts en executive rondetafels",
              ar: "لقاءات الخبراء والطاولات التنفيذية",
            },
            body: {
              en: "Specialised conversations about markets, sectors and management challenges. Sessions with limited places offer room for deeper discussion and the exchange of experience, under the participation conditions announced for each meeting.",
              nl: "Gespecialiseerde gesprekken over markten, sectoren en managementuitdagingen. De sessies met een beperkt aantal deelnemers bieden ruimte voor meer diepgang in de discussie en in het uitwisselen van ervaringen, volgens de deelnamevoorwaarden die voor elke bijeenkomst worden bekendgemaakt.",
              ar: "حوارات متخصصة حول أسواق وقطاعات وتحديات إدارية. وتتيح الجلسات المحدودة العدد مساحة أعمق للنقاش وتبادل التجارب، وفق شروط المشاركة المعلنة لكل لقاء.",
            },
          },
          {
            title: {
              en: "Exhibitions and conferences",
              nl: "Beurzen en conferenties",
              ar: "المعارض والمؤتمرات",
            },
            body: {
              en: "Opportunities to get to know products, services and companies, and to build a presence in target markets. Programmes may include group participation or a joint stand for companies, when announced, with a clear explanation of what the arrangements include and what participation requires.",
              nl: "Kansen om producten, diensten en bedrijven te leren kennen en aanwezigheid op te bouwen in de doelmarkten. De programma’s kunnen een collectieve deelname omvatten, of een gezamenlijke stand voor bedrijven wanneer die wordt aangekondigd, waarbij wordt toegelicht wat de organisatie omvat en wat deelname vereist.",
              ar: "فرص للتعرف إلى المنتجات والخدمات والشركات، وبناء حضور في الأسواق المستهدفة. وقد تشمل البرامج المشاركة الجماعية أو جناحًا مشتركًا للشركات عند الإعلان عنه، مع توضيح ما يشمله التنظيم وما يتطلبه الاشتراك.",
            },
          },
        ],
      },
      {
        kind: "prose",
        heading: {
          en: "How do you choose the right event?",
          nl: "Hoe kiest u het passende evenement?",
          ar: "كيف تختار الفعالية المناسبة؟",
        },
        body: [
          {
            en: "Review the topic, the participating groups, the programme, the language and the venue. Then define your goal in attending and what you would like to offer or discuss, so that the meeting is more useful for you and for others.",
            nl: "Neem het onderwerp, de deelnemende groepen, het programma, de taal en de locatie door. Bepaal daarna met welk doel u aanwezig bent en wat u wilt aanbieden of bespreken, zodat de ontmoeting nuttiger is voor u en voor anderen.",
            ar: "راجع الموضوع، والفئات المشاركة، والبرنامج، واللغة والمكان. ثم حدّد هدفك من الحضور وما ترغب في تقديمه أو مناقشته، ليكون اللقاء أكثر فائدة لك وللآخرين.",
          },
        ],
        photo: "x-events-table",
        size: "half",
        side: "start",
      },
      {
        kind: "listing",
        id: "events",
        heading: {
          en: "View events",
          nl: "Bekijk de evenementen",
          ar: "استعرض الفعاليات",
        },
        empty: {
          en: "We are preparing our upcoming meetings. Register your interests, and we will let you know about suitable events when they are announced.",
          nl: "We werken aan de voorbereiding van de komende bijeenkomsten. Registreer uw interesses, zodat wij u informeren over passende evenementen wanneer die worden aangekondigd.",
          ar: "نعمل على إعداد اللقاءات القادمة. سجّل اهتماماتك لنطلعك على الفعاليات المناسبة عند الإعلان عنها.",
        },
        links: [
          {
            href: "contact?subject=events#contact-form",
            label: {
              en: "Register your interest",
              nl: "Registreer uw interesse",
              ar: "سجّل اهتمامك",
            },
          },
          {
            href: "contact?subject=events#contact-form",
            label: {
              en: "Suggest a workshop or meeting",
              nl: "Stel een workshop of bijeenkomst voor",
              ar: "اقترح ورشة أو لقاء",
            },
          },
        ],
      },
      /* kept extras (owner's choice), verbatim from 2336702 "events/calendar": three named formats, the pavilion
         passage and the closed character of the invitations */
      {
        kind: "chapter",
        label: {
          en: "Formats",
          nl: "Vormen",
          ar: "الصيغ",
        },
        heading: {
          en: "Every meeting has *a reason.*",
          nl: "Elke ontmoeting heeft *een reden.*",
          ar: "لكل لقاءٍ *سببٌ.*",
        },
        items: [
          {
            title: {
              en: "Executive Dinners",
              nl: "Executive Dinners",
              ar: "Executive Dinners",
            },
            body: {
              en: "Small dinners, by invitation only, for business owners and investors. The table is composed with care; what counts is the quality of the conversation, not the number of chairs.",
              nl: "Kleine diners, uitsluitend op uitnodiging, voor ondernemers en investeerders. De tafel wordt met zorg samengesteld; wat telt is de kwaliteit van het gesprek, niet het aantal stoelen.",
              ar: "لقاءات عشاءٍ محدودة العدد، بالدعوة فقط، لأصحاب الأعمال والمستثمرين. يُختار مَن يجلس إلى المائدة بعناية؛ فالعبرة بجودة الحديث، لا بعدد المقاعد.",
            },
          },
          {
            title: {
              en: "Buyer in the Room",
              nl: "Buyer in the Room",
              ar: "Buyer in the Room",
            },
            body: {
              en: "An event built around buyers. The companies taking part know in advance that buyers with a genuine need in their sector are present, and what those buyers are looking for.",
              nl: "Een bijeenkomst rond kopers. De deelnemende bedrijven weten vooraf dat er kopers met een werkelijke behoefte in hun sector aanwezig zijn, en waar die kopers naar zoeken.",
              ar: "فعاليةٌ مبنيّة على المشترين: تعرف الشركات المشاركة مسبقاً أن في القاعة مشترين لديهم حاجةٌ حقيقية في قطاعها، وتعرف ما الذي يبحثون عنه.",
            },
          },
          {
            title: {
              en: "DUKAAT Pavilions",
              nl: "DUKAAT Pavilions",
              ar: "DUKAAT Pavilions",
            },
            body: {
              en: "A shared pavilion inside an international trade fair, where member companies exhibit together under the DUKAAT name rather than each on a stand of its own.",
              nl: "Een gedeeld paviljoen op een internationale vakbeurs, waar bedrijven van leden samen exposeren onder de naam DUKAAT in plaats van ieder op een eigen stand.",
              ar: "جناحٌ موحّد داخل معرضٍ دولي، تعرض فيه شركات الأعضاء معاً تحت اسم DUKAAT، بدلاً من أن تعرض كلٌّ منها في جناحٍ مستقل.",
            },
          },
        ],
      },
      {
        kind: "duo",
        photos: ["p-fair", "p-pavilion"],
        label: {
          en: "DUKAAT Pavilions",
          nl: "DUKAAT Pavilions",
          ar: "DUKAAT Pavilions",
        },
        heading: {
          en: "Together under *one roof.*",
          nl: "Samen onder *één dak.*",
          ar: "معاً *تحت سقفٍ واحد.*",
        },
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
        label: {
          en: "Invitations",
          nl: "Uitnodigingen",
          ar: "الدعوات",
        },
        heading: {
          en: "Invited, not *announced.*",
          nl: "Uitgenodigd, niet *aangekondigd.*",
          ar: "بالدعوة، *لا بالإعلان.*",
        },
        body: [
          {
            en: "Members receive the programme and their invitations directly, in their own language. Events are not announced publicly on this site: each invitation goes to the members for whom that meeting, that sector or that market is relevant.",
            nl: "Leden ontvangen het programma en hun uitnodigingen rechtstreeks, in hun eigen taal. Bijeenkomsten worden niet openbaar op deze site aangekondigd: elke uitnodiging gaat naar de leden voor wie die bijeenkomst, die sector of die markt van belang is.",
            ar: "يتلقّى الأعضاء البرنامج ودعواتهم مباشرةً، وبلغتهم. ولا تُعلَن الفعاليات للعموم على هذا الموقع؛ فكل دعوة تذهب إلى الأعضاء الذين يعنيهم ذلك اللقاء أو ذلك القطاع أو تلك السوق.",
          },
        ],
      },
    ],
  },
};
