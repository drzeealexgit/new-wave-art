import { Artwork, GallerySection } from '../utils/portfolioLogic';

export interface ExhibitionItem {
  id: string;
  year: string;
  locationEn: string;
  locationUa: string;
  venueEn: string;
  venueUa: string;
  titleEn: string;
  titleUa: string;
  descriptionEn?: string;
  descriptionUa?: string;
  type: 'solo' | 'group' | 'international' | 'residence';
}

export interface EducationItem {
  period: string;
  locationEn: string;
  locationUa: string;
  institutionEn: string;
  institutionUa: string;
  facultyEn: string;
  facultyUa: string;
}

export interface AwardItem {
  year: string;
  countryEn: string;
  countryUa: string;
  titleEn: string;
  titleUa: string;
  awardEn: string;
  awardUa: string;
}

export interface EmploymentItem {
  year: string;
  locationEn: string;
  locationUa: string;
  companyEn: string;
  companyUa: string;
  roleEn: string;
  roleUa: string;
  detailsEn: string;
  detailsUa: string;
}

export const initialSections: GallerySection[] = [
  {
    id: 'sec-2025',
    slug: 'kyiv-2025',
    titleEn: '2025',
    titleUa: '2025',
    subtitleEn: 'Recent Works · Kyiv',
    subtitleUa: 'Останні роботи · Київ',
    descriptionEn:
      'Open curatorial space and creative challenge — ready for the artist’s own concept, cycle manifesto, and titles.',
    descriptionUa:
      'Відкритий кураторський простір та авторський виклик — простір готовий для самостійного вибору концепції, маніфесту та назв робіт художницею.',
    isOpen: true,
    order: 1,
  },
  {
    id: 'sec-paint',
    slug: 'paints',
    titleEn: 'Paintings & War Period',
    titleUa: 'Живопис і період війни',
    subtitleEn: 'The Mixed Drawing Technique · War Chronicles',
    subtitleUa: 'Техніка змішаного живопису · Хроніки війни',
    descriptionEn:
      'The period started with the flavor and colors of war. In contemporary humanistic experience, there weren’t rational answers, tools, or ready-made solutions to counter barbarism. Appeal to the collective unconscious, historical memory, and the human genome changes personal identification and behavior patterns in all the diversity of the national community. A total change in the usual landscape and a brand new reality — your inner code-reactor reproduces new variations of information transmission.',
    descriptionUa:
      'Період почався зі смаку і кольорів війни. У сучасному гуманістичному досвіді не було ні раціональних відповідей, ні інструментів, ні готових рішень протистояти варварству. Звернення до колективного несвідомого, історичної пам’яті та геному людини — змінює особисту ідентифікацію та поведінкові патерни в усьому різноманітті національної спільноти. Тотальна зміна звичного «ландшафту» і нова реальність — твій внутрішній код-реактор відтворює нові варіації передачі інформації.',
    isOpen: true,
    order: 2,
  },
  {
    id: 'sec-exhibitions',
    slug: 'expositions',
    titleEn: 'Exhibitions & Spatial Concepts',
    titleUa: 'Виставки та просторові концепції',
    subtitleEn: '"Is this reality?" · Viinistu Art Museum, Estonia',
    subtitleUa: '«Це реальність?» · Художній музей Війністу, Естонія',
    descriptionEn:
      'Imprints of Ukrainian War — personal exhibition at Viinistu Art Museum as a support for Ukrainian Victory and a manifestation of Ukrainian creativity and culture. Collaboration of European colleagues where each has unique qualifications — a non-stop experiment with materials and techniques. Each work is an artifact of actual events in Ukraine, together forming a continuous tape of memory. The spatial concept embeds separate open rooms whose intersection reflects the severe contrasts of wartime society.',
    descriptionUa:
      'Відбитки української війни — персональна виставка в Художньому музеї Війністу як внесок у підтримку Перемоги України та маніфест української творчості й незламності. Співпраця європейських колег, де кожен має унікальну кваліфікацію — безперервний експеримент із матеріалами та техніками. Кожна робота є артефактом реальних подій в Україні, що утворюють спільну стрічку пам’яті. Просторова концепція містить відкриті зали, чий перетин відтворює контрасти воєнного часу.',
    isOpen: true,
    order: 3,
  },
  {
    id: 'sec-graphics',
    slug: 'graphics',
    titleEn: 'Graphic Cycles',
    titleUa: 'Графічні цикли',
    subtitleEn: 'The Anatomy of Graphic Worlds & Micro-Detailing',
    subtitleUa: 'Анатомія графічних світів та мікродеталізація',
    descriptionEn:
      'An insider period when my relationship as a graphic artist began. The number of worlds and creatures that fill them with extreme detail could be realized best through graphic techniques. This is an intricate process with countless nuances that must be contemplated, analyzed, and passed through oneself. Complete immersion in transmitting meaning through symbols becomes a continuous inner dialogue and an inseparable part of identity.',
    descriptionUa:
      'Інсайдерський період початку мого шляху як художниці-графіка. Безліч світів і створінь, що наповнюють їх із граничною деталізацією, найкраще втілювалися саме через графіку. Це складний процес із десятками деталей, які треба продумати, проаналізувати та пропустити крізь себе. Повне занурення в пошук найточнішої передачі інформації через символи стає постійним внутрішнім діалогом і невіддільною частиною особистості.',
    isOpen: true,
    order: 4,
  },
  {
    id: 'sec-illustration',
    slug: 'illustration',
    titleEn: 'Book Illustrations',
    titleUa: 'Книжкова ілюстрація',
    subtitleEn: 'Cyberpunk novel "Dealer of Reality" by Nicholas Dimitrov',
    subtitleUa: 'Кіберпанк-роман «Дилер реальності» Ніколаса Димитрова',
    descriptionEn:
      'Illustrations for the cyberpunk novel "Dealer of Reality". Near future. Humanity is mired in vices; religion has become fast food. Elites are hooked on a digital drug creating "Personal Realities". The new religion of Transreality negates all faiths of the past. The author granted complete artistic autonomy to interpret and render the visceral dystopian atmosphere.',
    descriptionUa:
      'Ілюстрації до кіберпанк-роману «Дилер реальності». Близьке майбутнє. Людство загрузло в надмірностях, релігія стала фастфудом, а еліти залежні від цифрового наркотику, що створює «Особисті Реальності». Нова релігія Трансреальності знецінює всі релігії минулого. Автор довірив повну художню свободу для втілення напруженої антиутопічної атмосфери роману.',
    isOpen: true,
    order: 5,
  },
  {
    id: 'sec-objects',
    slug: 'objects',
    titleEn: 'Objects & Sculptures',
    titleUa: 'Об’єкти та пластика',
    subtitleEn: '"My pain is beautiful" · Cast Imprints & Fear Anatomy',
    subtitleUa: '«Мій біль прекрасний» · Гіпсові зліпки та анатомія страху',
    descriptionEn:
      'The project imprints in a plaster mask with a plastic brain the realization that fear possesses a haunting aesthetic power. Imposing wet plaster onto a subject captures deep, multi-layered existential shock born of war. The resulting tactile object freezes that transient vulnerability into a permanent physical testament.',
    descriptionUa:
      'Проєкт закарбовує у гіпсовій масці з пластиковим мозком усвідомлення того, що емоція страху має виняткову естетичну силу. Накладання гіпсу на обличчя фіксує не побутову тривогу, а глибокий екзистенційний шок воєнного часу. Готовий об’єкт перетворює цей вразливий стан на постійний матеріальний свідок.',
    isOpen: true,
    order: 6,
  },
  {
    id: 'sec-collaborations',
    slug: 'collaborations',
    titleEn: 'Collaborations & Sound Art',
    titleUa: 'Колаборації та саунд-арт',
    subtitleEn: 'Lenovo Innovations & Audio Fields with Andriy Kovalevskiy',
    subtitleUa: 'Lenovo інновації та звукові поля з Андрієм Ковалевським',
    descriptionEn:
      'Multidisciplinary projects merging visual arts with acoustic textures and cutting-edge digital media. Includes the Lenovo technological chakra series and year-long sound-art collaborations where experimental electronic music and field recordings evolve alongside large-scale canvases.',
    descriptionUa:
      'Мультидисциплінарні проєкти на перетині живопису, акустичних текстур і цифрових медіа. Включає технологічний проєкт для компанії Lenovo (трансформація енергії стихій у цифрове медіа) та тривалу співпрацю з музикантом Андрієм Ковалевським, де звукові ландшафти та полотна створюються у безперервному діалозі.',
    isOpen: true,
    order: 7,
  },
  {
    id: 'sec-performance',
    slug: 'performance',
    titleEn: 'Performance Art: HEROES',
    titleUa: 'Перформанс «ГЕРОЇ»',
    subtitleEn: 'Manifesto with Daria Stiletskaya · Viinistu Archive, Estonia',
    subtitleUa: 'Маніфест з Дарією Стілецькою · Архів Війністу, Естонія',
    descriptionEn:
      'A 15-minute performance and video manifest by two Ukrainian artists addressed to European peers from the border territory. Performed to David Bowie’s "HEROES" inside a decaying Soviet archive at Viinistu Art Museum. In the finale, the artists shave each other’s heads and paint Ukrainian flag colors onto their skulls — an unyielding symbol of worldwide solidarity.',
    descriptionUa:
      '15-хвилинне дійство та відеоманіфест двох українських мисткинь до європейської спільноти. Створено під сингл Девіда Боуї «HEROES» у напівзруйнованому радянському архіві Художнього музею Війністу. У фіналі художниці голять одна одній голови та наносять кольори українського прапора — безкомпромісний жест опору та солідарності.',
    isOpen: true,
    order: 8,
  },
];

export const initialArtworks: Artwork[] = [
  // 0. 2025 / Recent Works · Kyiv (Self-curated gallery / challenge for the artist)
  {
    id: 'art-2025-portrait-yellow',
    titleEn: 'Untitled (Portrait in Yellow)',
    titleUa: 'Без назви (Портрет у жовтих тонах)',
    year: '2025',
    dimensions: '120×80',
    techniqueEn: 'mixed media, oil, acrylic on wood',
    techniqueUa: 'змішана техніка, олія, акрил на дереві',
    category: 'kyiv-2025',
    seriesEn: 'Kyiv 2025 Cycle',
    seriesUa: 'Київський цикл 2025',
    descriptionEn:
      'Expressive portrait in warm golden and ochre hues, exploring the psychological threshold of the contemporary moment without theatrical caricature.',
    descriptionUa:
      'Експресивний портрет у теплих золотаво-вохристих тонах. Дослідження психологічної межі сучасності без зайвої театральності.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_04286df6bf3c4291a79e4196d56b657a~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-2025-work-2',
    titleEn: 'Untitled II',
    titleUa: 'Без назви II',
    year: '2025',
    dimensions: '140×100',
    techniqueEn: 'acrylic, oil, raw pigments on canvas',
    techniqueUa: 'акрил, олія, пігменти на полотні',
    category: 'kyiv-2025',
    seriesEn: 'Kyiv 2025 Cycle',
    seriesUa: 'Київський цикл 2025',
    descriptionEn:
      'New spatial piece from the Kyiv studio session — title and statement reserved for artist self-curation in Studio CMS.',
    descriptionUa:
      'Нова робота з київської майстерні — назва та опис відкриті для авторського редагування мисткинею в Studio CMS.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_5450dcc0d50a4d25ac7694d65e35a653~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: false,
  },
  {
    id: 'art-2025-work-3',
    titleEn: 'Untitled III',
    titleUa: 'Без назви III',
    year: '2025',
    dimensions: '110×85',
    techniqueEn: 'mixed technique, charcoal, varnish on canvas',
    techniqueUa: 'змішана техніка, вугілля, лак на полотні',
    category: 'kyiv-2025',
    seriesEn: 'Kyiv 2025 Cycle',
    seriesUa: 'Київський цикл 2025',
    descriptionEn:
      'Recent studio composition from the 2025 archive — open canvas for artist personalization.',
    descriptionUa:
      'Свіжа робота з архіву 2025 — відкрите полотно для персоналізації художницею.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_ded10100ce3e4e2da36f8da7268aa566~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: false,
  },

  // 1. Paints / War period
  {
    id: 'art-bucha',
    titleEn: "\"it's not just Bucha\"",
    titleUa: '«Це не просто Буча»',
    year: '2022',
    dimensions: '57×110',
    techniqueEn: 'acrylic, marker, canvas',
    techniqueUa: 'акрил, маркер, полотно',
    category: 'paints',
    seriesEn: 'Beginning of the Great War',
    seriesUa: 'Початок великої війни',
    descriptionEn:
      'The canvas shows the world of a happy and bright childhood together with killed and raped children by russian soldiers who will never again see a spring sky.',
    descriptionUa:
      'Полотно показує світ щасливого і яскравого дитинства разом із тим, коли вбиті та закатовані російськими солдатами діти більше ніколи не побачать весняного неба.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_3650ffe733f3431d9d881fbfc29aecf9~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-blur-contours',
    titleEn: '"figures digging up blur contours"',
    titleUa: '«Постаті, що розкопують розмиті контури»',
    year: '2022',
    dimensions: '150×90',
    techniqueEn: 'acrylic, oils, whitewashing, sunflower oil, canvas',
    techniqueUa: 'акрил, олія, побілка, соняшникова олія, полотно',
    category: 'paints',
    seriesEn: 'Beginning of the Great War',
    seriesUa: 'Початок великої війни',
    descriptionEn:
      'The canvas depicts a multi-colored composition, in the center of which three figures can be distinguished, digging the soil with shovels in search of people in mass brother graves. The living is already digging out the contours of the dead, innocent people who were killed while trying to find water or food, cross the road on a bicycle, or hide from a tank. These silhouettes are etched into memory forever.',
    descriptionUa:
      'На полотні зображено різнокольорову композицію, в центрі якої три постаті лопатами копають землю в пошуках людей у братських могилах. Живі вже викопують розмиті контури мертвих — безневинних людей, убитих під час спроби знайти їжу, перейти дорогу чи проїхати на велосипеді. Силуети, назавжди вкарбувані в нашу пам’ять.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_f41aab1d9cfe4ee3bf83b1b6995b1ca6~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-mountains-sky',
    titleEn: '"Our mountains, sky and fields absorb the feelings of millions of ears"',
    titleUa: '«Наші гори, небо і поля вбирають почуття мільйонів колосків»',
    year: '2022',
    dimensions: '140×100',
    techniqueEn: 'acrylic, canvas',
    techniqueUa: 'акрил, полотно',
    category: 'paints',
    seriesEn: 'Beginning of the Great War',
    seriesUa: 'Початок великої війни',
    descriptionEn:
      'Four main figures: two human silhouettes and two evacuation cars marked with "Children". People morph into the entire landscape of Ukraine in flames and smoke. Above are native mountains and skies; below is the Black Sea storm defending itself in spring 2022.',
    descriptionUa:
      'Чотири головні постаті: два людські силуети та дві евакуаційні машини з написом «Діти». Люди переходять у ландшафт України, охопленої димом і пожежами. Вгорі — рідні гори й поля, внизу — чорноморський шторм весни 2022 року, що люто чинить опір окупантам.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_447faa74d54140b9ac3c11cabfb90982~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-war-study-1',
    titleEn: 'War Chronicle: Displacement Fragment I',
    titleUa: 'Хроніка війни: Фрагмент переміщення I',
    year: '2022',
    dimensions: '80×60',
    techniqueEn: 'mixed media, acrylic, oil on canvas',
    techniqueUa: 'змішана техніка, акрил, олія на полотні',
    category: 'paints',
    seriesEn: 'Beginning of the Great War',
    seriesUa: 'Початок великої війни',
    descriptionEn:
      'Energetic expressive strokes capturing tension, displacement, and survival in temporary shelters during the first months of full-scale invasion.',
    descriptionUa:
      'Експресивні фактурні мазки, що передають напругу, вимушений рух та переживання перших місяців повномасштабного вторгнення.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_2eaf49cc2dab472aafdfad500ff4936f~mv2.jpg',
    imageStatus: 'use',
  },
  {
    id: 'art-war-study-2',
    titleEn: 'War Chronicle: Red Resonance',
    titleUa: 'Хроніка війни: Червоний резонанс',
    year: '2022',
    dimensions: '90×70',
    techniqueEn: 'acrylic, industrial pigments, canvas',
    techniqueUa: 'акрил, індустріальні пігменти, полотно',
    category: 'paints',
    seriesEn: 'Beginning of the Great War',
    seriesUa: 'Початок великої війни',
    descriptionEn:
      'Raw emotional palette contrasting burnt earth with blazing crimson, reflecting siren alerts and night shellings.',
    descriptionUa:
      'Контраст випаленої землі та багряного полум’я, що відображає сигнал тривог і нічні обстріли міст.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_f28b7a2f65204fd0bd58cc3c8e86907a~mv2.jpg',
    imageStatus: 'use',
  },

  // 2. Expositions / Viinistu Museum
  {
    id: 'art-expo-spatial-1',
    titleEn: '"Is this reality?" — Room of Questions',
    titleUa: '«Це реальність?» — Зала запитань',
    year: '2022',
    dimensions: 'Variable spatial dimensions',
    techniqueEn: 'site-specific exhibition pavilion, mixed media',
    techniqueUa: 'site-specific експозиційний павільйон, змішані матеріали',
    category: 'expositions',
    seriesEn: 'Viinistu Art Museum Exhibition',
    seriesUa: 'Виставка в Художньому музеї Війністу',
    descriptionEn:
      'Installation room at Viinistu Art Museum questioning European security and the surreal contrast between peaceful everyday life and ongoing carnage next door.',
    descriptionUa:
      'Просторова інсталяція в Музеї Війністу, яка ставить перед європейським глядачем пряме запитання про реальність війни за кількасот кілометрів.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_aed7de340a8e4a388eed7f9abb043ba4~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-expo-spatial-2',
    titleEn: '"Is this reality?" — Artifacts of War Tape',
    titleUa: '«Це реальність?» — Стрічка артефактів війни',
    year: '2022',
    dimensions: 'Installation installation strip',
    techniqueEn: 'collected artifacts, canvas fragments, documentation',
    techniqueUa: 'зібрані артефакти, фрагменти полотна, документація',
    category: 'expositions',
    seriesEn: 'Viinistu Art Museum Exhibition',
    seriesUa: 'Виставка в Художньому музеї Війністу',
    descriptionEn:
      'Series created in Estonia during forced relocation. Each work is an artifact connecting personal psychological trauma with the collective Ukrainian narrative.',
    descriptionUa:
      'Серія робіт, створених в Естонії в період вимушеної евакуації. Кожна робота є артефактом, що поєднує особистий біль із загальнонаціональною трагедією.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_944c8f2b3e0c44eba873f43bfbc9ffaa~mv2.jpg',
    imageStatus: 'use',
  },
  {
    id: 'art-expo-spatial-3',
    titleEn: 'Viinistu Pavilion: Convergence of Contrasts',
    titleUa: 'Павільйон Війністу: Збіжність контрастів',
    year: '2022',
    dimensions: 'Spatial installation',
    techniqueEn: 'wood, plaster, paint, spatial lighting',
    techniqueUa: 'дерево, гіпс, фарба, просторове світло',
    category: 'expositions',
    seriesEn: 'Viinistu Art Museum Exhibition',
    seriesUa: 'Виставка в Художньому музеї Війністу',
    descriptionEn:
      'The open layout allowed visitors to wander between rooms and feel the sharp transitions between isolation, shock, and stubborn collective strength.',
    descriptionUa:
      'Відкрите планування павільйону дозволяло глядачеві переміщатися між кімнатами, відчуваючи гострі переходи від самотності й шоку до непохитної стійкості.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_97ac23119b93442eb1550e039cca7200~mv2.jpg',
    imageStatus: 'use',
  },

  // 3. Graphics
  {
    id: 'art-graph-1',
    titleEn: 'Metamorphosis of Inner Code',
    titleUa: 'Метаморфоза внутрішнього коду',
    year: '2020',
    dimensions: '60×42',
    techniqueEn: 'ink, liner, archival paper',
    techniqueUa: 'туш, лінер, архівний папір',
    category: 'graphics',
    seriesEn: 'Graphic Worlds & Creatures',
    seriesUa: 'Графічні світи та створіння',
    descriptionEn:
      'Dense labyrinth of symbolic entities exploring subconscious biological code and mythic transformation. Highly detailed micro-linework.',
    descriptionUa:
      'Щільний лабіринт символічних сутностей, що досліджує підсвідомий біологічний код і міфічну трансформацію. Ювелірна мікрографіка.',
    imageUrl: 'https://static.wixstatic.com/media/751718_72145e6aa8944df2b4af36fc29269dc1~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-graph-2',
    titleEn: 'Symbiosis of Entities',
    titleUa: 'Симбіоз сутностей',
    year: '2020',
    dimensions: '50×40',
    techniqueEn: 'graphic pen, ink on cardboard',
    techniqueUa: 'графічне перо, туш на картоні',
    category: 'graphics',
    seriesEn: 'Graphic Worlds & Creatures',
    seriesUa: 'Графічні світи та створіння',
    descriptionEn:
      'Exploration of anatomy, non-human biological structures, and continuous internal monologues encoded into fine black-and-white rhythms.',
    descriptionUa:
      'Дослідження анатомії, позалюдських біологічних структур та безперервного внутрішнього монологу через чорно-білий ритм.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_e5eae0624cb1409d9bba1a6fd5f05f0a~mv2.jpg',
    imageStatus: 'use',
  },
  {
    id: 'art-graph-3',
    titleEn: 'Architectonics of Subconscious',
    titleUa: 'Архітектоніка підсвідомого',
    year: '2021',
    dimensions: '70×50',
    techniqueEn: 'ink, graphite, mixed graphic medium',
    techniqueUa: 'туш, графіт, змішана техніка графіки',
    category: 'graphics',
    seriesEn: 'Graphic Worlds & Creatures',
    seriesUa: 'Графічні світи та створіння',
    descriptionEn:
      'Detailed layered composition mapping thought streams into intricate mechanical and organic intersections.',
    descriptionUa:
      'Багатошарова деталізована композиція, що проектує потік думок у перетин механічних і органічних форм.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_89cc8d5661694db5ac1ab1d5b4fc09a6~mv2.png',
    imageStatus: 'use',
  },

  // 4. Illustration (Dealer of Reality)
  {
    id: 'art-ill-1',
    titleEn: 'Dealer of Reality: Transreality Cult',
    titleUa: 'Дилер реальності: Культ Трансреальності',
    year: '2019',
    dimensions: '42×30',
    techniqueEn: 'digital graphic illustration, mixed media',
    techniqueUa: 'цифрова графіка, змішані медіа',
    category: 'illustration',
    seriesEn: 'Dealer of Reality by Nicholas Dimitrov',
    seriesUa: '«Дилер реальності» Ніколаса Димитрова',
    descriptionEn:
      'Visualizing the consumerist cult of artificial paradises in a futuristic metropolis where human souls trade authentic sensations for synthetic nirvana.',
    descriptionUa:
      'Візуалізація споживацького культу штучних райів у футуристичному мегаполісі, де людські душі обмінюють справжні почуття на синтетичну нірвану.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_e3494c710f1a46edabe26b597781a845~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-ill-2',
    titleEn: 'Dealer of Reality: Synthetic Temple',
    titleUa: 'Дилер реальності: Синтетичний храм',
    year: '2019',
    dimensions: '42×30',
    techniqueEn: 'ink, digital overpaint',
    techniqueUa: 'туш, цифровий оверпейнт',
    category: 'illustration',
    seriesEn: 'Dealer of Reality by Nicholas Dimitrov',
    seriesUa: '«Дилер реальності» Ніколаса Димитрова',
    descriptionEn:
      'Depicting digital deities and the decadent elite surrendered to corporate hypnotic control.',
    descriptionUa:
      'Зображення цифрових божеств та декадентської еліти, підкореної корпоративним гіпнозом.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_19e8046c70d7487993cffc6022ba4fca~mv2.jpg',
    imageStatus: 'use',
  },
  {
    id: 'art-ill-3',
    titleEn: 'Dealer of Reality: The Neon Gateway',
    titleUa: 'Дилер реальності: Неонова брама',
    year: '2019',
    dimensions: '42×30',
    techniqueEn: 'graphic illustration, cyberpunk aesthetics',
    techniqueUa: 'графічна ілюстрація, кіберпанк естетика',
    category: 'illustration',
    seriesEn: 'Dealer of Reality by Nicholas Dimitrov',
    seriesUa: '«Дилер реальності» Ніколаса Димитрова',
    descriptionEn:
      'Urban dystopian canyon framed by towering corporate monolithic spires and digital surveillance.',
    descriptionUa:
      'Урбаністичний каньйон антиутопії, обрамлений корпоративними монолітами та цифровим наглядом.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_39dfc9c3e4d04496a0cf4861fd15fdcb~mv2.jpg',
    imageStatus: 'use',
  },

  // 5. Objects & Sculptures
  {
    id: 'art-obj-mask',
    titleEn: '"My pain is beautiful"',
    titleUa: '«Мій біль прекрасний»',
    year: '2022',
    dimensions: '40×30×25',
    techniqueEn: 'sculptural plaster cast, acrylic, synthetic polymer brain',
    techniqueUa: 'гіпсовий зліпок обличчя, акрил, синтетичний полімерний мозок',
    category: 'objects',
    seriesEn: 'War Imprints Residency',
    seriesUa: 'Воєнні відбитки, Естонія',
    descriptionEn:
      'The mask freezes the exact instant when plaster covered collaborator Daria Stiletska’s face. The physical weight induced an involuntary surge of deep existential fear — the suffocating dread of war frozen into an elegant tactile artifact.',
    descriptionUa:
      'Маска фіксує точну мить застигання гіпсу на обличчі Дарії Стілецької. Фізичний тиск викликав глибинний спалах екзистенційного страху війни — задушливий жах, трансформований у витончений пластичний артефакт.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_39769e00a4cb4d7fb5a5fa3f4fa7cd29~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-obj-process',
    titleEn: '"My pain is beautiful" — The Casting Ritual',
    titleUa: '«Мій біль прекрасний» — Ритуал зліпка',
    year: '2022',
    dimensions: '35×25×20',
    techniqueEn: 'plaster bandages, tactile documentation',
    techniqueUa: 'гіпсові бинти, тактильна документація',
    category: 'objects',
    seriesEn: 'War Imprints Residency',
    seriesUa: 'Воєнні відбитки, Естонія',
    descriptionEn:
      'Documenting the intimate vulnerability of having one’s senses temporarily sealed off by medicinal plaster while the outside world fractures.',
    descriptionUa:
      'Документація ритуалу тимчасового позбавлення відчуттів під гіпсовою масою у час, коли зовнішній світ розпадається на частини.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_c75ded8c479a45db932e03b9c7139409~mv2.jpg',
    imageStatus: 'use',
  },
  {
    id: 'art-obj-detail',
    titleEn: 'Synthetic Cranium & Tactile Texture',
    titleUa: 'Синтетичний краніум і тактильна фактура',
    year: '2022',
    dimensions: '30×22×18',
    techniqueEn: 'polymer resin, acrylic washes, plaster',
    techniqueUa: 'полімерна смола, акрилові лесування, гіпс',
    category: 'objects',
    seriesEn: 'War Imprints Residency',
    seriesUa: 'Воєнні відбитки, Естонія',
    descriptionEn:
      'Close-up study of the artificial transparent brain structure resting inside the hardened white facial contours.',
    descriptionUa:
      'Фрагмент прозорої полімерної структури мозку всередині застиглого білого контуру обличчя.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_2edb0fdc361848d1b009b81691cda66a~mv2.jpg',
    imageStatus: 'use',
  },

  // 6. Collaborations
  {
    id: 'art-collab-lenovo',
    titleEn: 'Lenovo: Digital Chakras of Innovation',
    titleUa: 'Lenovo: Цифрові чакри інновацій',
    year: '2018',
    dimensions: 'Media suite & 7 canvas panels',
    techniqueEn: 'digital painting, stylus, media installation',
    techniqueUa: 'цифровий живопис, стилус, медіа-інсталяція',
    category: 'collaborations',
    seriesEn: 'Lenovo Commercial Innovation Campaign',
    seriesUa: 'Проєкт з компанією Lenovo',
    descriptionEn:
      'Live digital painting performance and campaign for Lenovo tech launch. Translating ancient elemental chakras into fluid futuristic energy lines.',
    descriptionUa:
      'Живий цифровий перформанс та серія медіа-робіт для презентації флагманського продукту Lenovo журналістам. Поєднання сакральних символів і технологій.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_3abe937905b74918a989045af447a08c~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-collab-sound',
    titleEn: '"the cup missed the hit"',
    titleUa: '«Чашка пропустила удар»',
    year: '2022',
    dimensions: '150×100',
    techniqueEn: 'acrylic, oils, whitewashing, watercolor on canvas',
    techniqueUa: 'акрил, олія, побілка, акварель на полотні',
    category: 'collaborations',
    seriesEn: 'Sound-Art Collaboration with Andriy Kovalevskiy',
    seriesUa: 'Звукова колаборація з Андрієм Ковалевським',
    descriptionEn:
      'Monumental mixed-media painting created in tandem with three simultaneous acoustic compositions by electronic composer Andriy Kovalevskiy. Combines experimental soundscapes with turbulent visual chromatic waves.',
    descriptionUa:
      'Монументальне полотно, створене у синергії з трьома паралельними аудіокомпозиціями електронного композитора Андрія Ковалевського. Синтез експериментального звуку й живописної хроматики.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_c66d3ffbcd3248ec9d92733860962824~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-collab-sound-study',
    titleEn: 'Acoustic Vibrations on Canvas',
    titleUa: 'Акустичні вібрації на полотні',
    year: '2022',
    dimensions: '120×80',
    techniqueEn: 'oil, pigment dispersion, canvas',
    techniqueUa: 'олія, пігментна дисперсія, полотно',
    category: 'collaborations',
    seriesEn: 'Sound-Art Collaboration with Andriy Kovalevskiy',
    seriesUa: 'Звукова колаборація з Андрієм Ковалевським',
    descriptionEn:
      'Translating field recordings and rhythmic glitch patterns into tactile painterly marks and layered impasto.',
    descriptionUa:
      'Переклад польових аудіозаписів та глітч-патернів у тактильну мальовничу фактуру й густе імпасто.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_466ffd01856943e5b4af5f84295b5297~mv2.jpg',
    imageStatus: 'use',
  },

  // 7. Performance Art (HEROES)
  {
    id: 'art-perf-heroes-1',
    titleEn: 'Performance "HEROES" — The Mannequin Border',
    titleUa: 'Перформанс «ГЕРОЇ» — Кордон із манекенів',
    year: '2022',
    dimensions: '15-minute video performance & spatial relics',
    techniqueEn: 'live performance, video art, painted mannequins, archival space',
    techniqueUa: 'живий перформанс, відеоарт, розписані манекени, простір архіву',
    category: 'performance',
    seriesEn: 'Performance "HEROES" at Viinistu Museum',
    seriesUa: 'Перформанс «ГЕРОЇ» у Музеї Війністу',
    descriptionEn:
      'A powerful confrontation inside the ruined Soviet archive of Viinistu Art Museum. Artists transformed faceless mannequins into shaved heads adorned with flags, confronting the spectator with the geopolitical frontline.',
    descriptionUa:
      'Драматична дія в покинутому радянському архіві Музею Війністу. Безликі манекени-болванки перетворені на голови з державними кольорами, ставлячи глядача перед фактом передової.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_757988ccb8d8448da5d722c486975fb1~mv2.png',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-perf-heroes-2',
    titleEn: 'Performance "HEROES" — The Shaving Act & Sacred Flag',
    titleUa: 'Перформанс «ГЕРОЇ» — Ритуал гоління та стяг',
    year: '2022',
    dimensions: 'Video documentation & photography by Kylie Sheller',
    techniqueEn: 'bodily ritual, hair clipping, pigment body painting',
    techniqueUa: 'тілесний ритуал, стрижка, розпис пігментом по тілу',
    category: 'performance',
    seriesEn: 'Performance "HEROES" at Viinistu Museum',
    seriesUa: 'Перформанс «ГЕРОЇ» у Музеї Війністу',
    descriptionEn:
      'In the climactic scene to David Bowie’s "HEROES", the artists shaved each other’s heads and painted blue and yellow across their skulls — an unforgettable physical pledge of solidarity and resistance.',
    descriptionUa:
      'Кульмінація під сингл Девіда Боуї «HEROES»: художниці голять одна одній голови та наносять синій і жовтий кольори на черепи — безкомпромісна клятва солідарності та незламності.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_a054f8d2bf564913b898e67e07241c24~mv2.jpg',
    imageStatus: 'use',
    isCuratorPick: true,
  },
  {
    id: 'art-perf-heroes-3',
    titleEn: 'Archive Relics & Soviet Decay',
    titleUa: 'Реліквії архіву та радянський занепад',
    year: '2022',
    dimensions: 'Spatial installation with performance artifacts',
    techniqueEn: 'archival rubble, video projection, painted heads',
    techniqueUa: 'архівні уламки, відеопроекція, розписані голови',
    category: 'performance',
    seriesEn: 'Performance "HEROES" at Viinistu Museum',
    seriesUa: 'Перформанс «ГЕРОЇ» у Музеї Війністу',
    descriptionEn:
      'The juxtaposition of Soviet colonial architectural decay with contemporary Ukrainian defiance created an electric historical resonance recognized by international critics.',
    descriptionUa:
      'Зіткнення радянського колоніального розпаду з сучасною українською гідністю та опором, високо оцінене європейською арт-спільнотою.',
    imageUrl: 'https://static.wixstatic.com/media/830da7_cf8ff17e9a2c4b35842a5e7e571687fa~mv2.jpg',
    imageStatus: 'use',
  },
];

export const artistExpositions: ExhibitionItem[] = [
  {
    id: 'exp-2023-ljubljana',
    year: '2023',
    locationEn: 'Ljubljana, Slovenia',
    locationUa: 'Любляна, Словенія',
    venueEn: 'International Art Sale-Exposition',
    venueUa: 'Міжнародна виставка-продаж',
    titleEn: 'Ukrainian Contemporary Voices',
    titleUa: 'Голоси українського сьогодення',
    descriptionEn: 'Charity art sale supporting humanitarian aid for Ukraine.',
    descriptionUa: 'Благодійна арт-виставка на підтримку гуманітарних фондів України.',
    type: 'international',
  },
  {
    id: 'exp-2023-uzhhorod',
    year: '2023',
    locationEn: 'Uzhhorod, Ukraine',
    locationUa: 'Ужгород, Україна',
    venueEn: 'Transcarpathian Art Center',
    venueUa: 'Закарпатський арт-центр',
    titleEn: '"During the war"',
    titleUa: '«Під час війни»',
    descriptionEn: 'National group exhibition reflecting on life and creation amid active hostilities.',
    descriptionUa: 'Всеукраїнська виставка-рефлексія життя та творчості в умовах бойових дій.',
    type: 'group',
  },
  {
    id: 'exp-2022-bruges',
    year: '2022',
    locationEn: 'Bruges, Belgium',
    locationUa: 'Брюгге, Бельгія',
    venueEn: 'Bruges Cultural Center',
    venueUa: 'Культурний центр Брюгге',
    titleEn: '"Ukrainian Art Week"',
    titleUa: '«Український тиждень мистецтва»',
    descriptionEn: 'Showcase of Ukrainian painters in Europe highlighting cultural resilience.',
    descriptionUa: 'Презентація українського мистецтва у Європі, маніфест культурної незламності.',
    type: 'international',
  },
  {
    id: 'exp-2022-viinistu',
    year: '2022',
    locationEn: 'Viinistu, Estonia',
    locationUa: 'Війністу, Естонія',
    venueEn: 'Viinistu Art Museum',
    venueUa: 'Художній музей Війністу',
    titleEn: '"Is this reality?" (Personal Solo Exhibition)',
    titleUa: '«Це реальність?» (Персональна виставка)',
    descriptionEn: 'Monumental solo pavilion and performance residency created in forced migration.',
    descriptionUa: 'Масштабний персональний павільйон та перформанс, створені під час евакуації.',
    type: 'solo',
  },
  {
    id: 'exp-2020-odesa',
    year: '2020',
    locationEn: 'Odesa, Ukraine',
    locationUa: 'Одеса, Україна',
    venueEn: 'Center of Culture "Syniy Crab"',
    venueUa: 'Центр культури «Синій Краб»',
    titleEn: 'Exposition of Graph',
    titleUa: 'Експозиція графічних циклів',
    descriptionEn: 'Solo graphic exhibition demonstrating intricate microscopic line work and creatures.',
    descriptionUa: 'Персональна виставка графіки: мікродеталізація та уявні світи.',
    type: 'solo',
  },
];

export const artistEducation: EducationItem[] = [
  {
    period: 'Summer 2022',
    locationEn: 'Estonia',
    locationUa: 'Естонія',
    institutionEn: 'Art Residence "Loovlinnak"',
    institutionUa: 'Арт-резиденція «Loovlinnak»',
    facultyEn: 'Experimental Sculpture & Performance Art',
    facultyUa: 'Експериментальна скульптура та перформанс',
  },
  {
    period: '2019 – 2022',
    locationEn: 'Odesa, Ukraine',
    locationUa: 'Одеса, Україна',
    institutionEn: 'Odesa Art College (Grekov)',
    institutionUa: 'Одеський художній фаховий коледж ім. М. Грекова',
    facultyEn: 'Faculty of Sculpture',
    facultyUa: 'Відділення скульптури',
  },
  {
    period: '2014 – 2018',
    locationEn: 'Kyiv, Ukraine',
    locationUa: 'Київ, Україна',
    institutionEn: 'Kyiv Children Academy of Art',
    institutionUa: 'Київська дитяча академія мистецтв',
    facultyEn: 'Faculty of Fine Art',
    facultyUa: 'Факультет образотворчого мистецтва',
  },
];

export const artistAwards: AwardItem[] = [
  {
    year: '2017',
    countryEn: 'Japan',
    countryUa: 'Японія',
    titleEn: 'International Fine Art Competition "Lonchikari"',
    titleUa: 'Міжнародний конкурс образотворчого мистецтва «Лончікарі»',
    awardEn: 'Bronze Medal',
    awardUa: 'Бронзова медаль',
  },
  {
    year: '2017',
    countryEn: 'Ukraine / Global',
    countryUa: 'Україна / Світ',
    titleEn: 'World Anti-AIDS Fund (AHF) Special Art Project',
    titleUa: 'Спеціальний художній проєкт Всесвітнього фонду боротьби зі СНІДом (AHF)',
    awardEn: 'Honorary Commission & Laureate',
    awardUa: 'Почесна комісія та лауреат',
  },
  {
    year: '2017',
    countryEn: 'Ukraine',
    countryUa: 'Україна',
    titleEn: 'International Competition "Sribnyi Dzvin"',
    titleUa: 'Міжнародний конкурс «Срібний дзвін»',
    awardEn: '1st Place (Grand Prix / I Place)',
    awardUa: 'I місце',
  },
  {
    year: '2017',
    countryEn: 'Ukraine',
    countryUa: 'Україна',
    titleEn: 'All-Ukrainian Competition "Ukraine — The Land of Talents"',
    titleUa: 'Всеукраїнський конкурс «Україна — країна талантів»',
    awardEn: '1st Place (I Place)',
    awardUa: 'I місце',
  },
  {
    year: '2016',
    countryEn: 'Ukraine / Turkey',
    countryUa: 'Україна / Туреччина',
    titleEn: 'International Art Biennale "Ukraine-Turkey"',
    titleUa: 'Міжнародне бієнале «Україна-Туреччина»',
    awardEn: '1st Place (I Place)',
    awardUa: 'I місце',
  },
  {
    year: '2016',
    countryEn: 'Ukraine',
    countryUa: 'Україна',
    titleEn: 'National Fine Art Competition "Faith, Hope, Love"',
    titleUa: 'Національний конкурс образотворчого мистецтва «Віра, Надія, Любов»',
    awardEn: '1st Place (I Place)',
    awardUa: 'I місце',
  },
];

export const artistEmployment: EmploymentItem[] = [
  {
    year: '2019',
    locationEn: 'Ukraine',
    locationUa: 'Україна',
    companyEn: 'Literary Publishing / Cyberpunk monograph',
    companyUa: 'Книжкове видавництво / Кіберпанк-монографія',
    roleEn: 'Graphic Illustrator & Visual Concept Artist',
    roleUa: 'Художниця-ілюстраторка та концепт-артистка',
    detailsEn: 'Full illustration suite for the novel "Dealer of Reality" by Nicholas Dimitrov.',
    detailsUa: 'Повна серія графічних ілюстрацій для роману «Дилер реальності» Ніколаса Димитрова.',
  },
  {
    year: '2018',
    locationEn: 'Kyiv, Ukraine',
    locationUa: 'Київ, Україна',
    companyEn: 'Lenovo International',
    companyUa: 'Компанія Lenovo',
    roleEn: 'Digital Painter & Brand Presenter',
    roleUa: 'Цифрова художниця та презентаторка продукту',
    detailsEn: 'Live creation and presentation of innovative digital chakras to international journalists.',
    detailsUa: 'Створення та публічна презентація серії картин у цифровому форматі для міжнародних журналістів.',
  },
];

export const artistBiography = {
  nameEn: 'Zvolinska',
  nameUa: 'Зволінська',
  age: 21,
  birthplaceEn: 'Kyiv, Ukraine',
  birthplaceUa: 'Київ, Україна',
  disciplinesEn: 'Painter, Graphic Artist, Sculptor & Performance Artist',
  disciplinesUa: 'Живописець, графік, скульптор та перформерка',
  currentFocusEn: 'Mastering experimental 2D/3D animation and curating two spatial object-art projects.',
  currentFocusUa: 'Опановує експериментальну анімацію та керує двома проєктами просторового об’єктного мистецтва.',
  manifestoEn:
    '"Sometimes may be good, sometimes maybe war", but creativity cannot leave us even in such times, working biologically like life’s genuine self-expression — our ultimate way of understanding the world’s senses and self-awareness.\n\nWhen art is a code of broadcast, your inner CODE-reactor instantly produces an authentic physical reaction through every movement of your stylistic currents, confronting the endless variations of our reality.',
  manifestoUa:
    '«Sometimes may be good, sometimes maybe war», але творчість не може покинути людину навіть у такі часи, діючи біологічно — як невідворотне самовираження самого життя, як спосіб пізнання сенсів світу та власного буття.\n\nКоли мистецтво стає кодом трансляції — твій внутрішній КОД-реактор миттєво генерує відгук у кожному русі стилістичних течій, відповідаючи на нескінченні виклики та прояви нашого світу.',
  email: 'mary.zvolinskaya@gmail.com',
  instagram: 'https://www.instagram.com/ttilda_._obako/',
  instagramHandle: '@ttilda_._obako',
  locationEn: 'Kyiv / Odesa (Ukraine) · Tallinn / Viinistu (Estonia)',
  locationUa: 'Київ / Одеса (Україна) · Таллінн / Війністу (Естонія)',
};
