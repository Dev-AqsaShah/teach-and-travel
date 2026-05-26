export interface LanguageTip {
  id: number
  language: 'Russian' | 'Romanian'
  title: string
  body: string
  emoji: string
}

export const languageTips: LanguageTip[] = [
  {
    id: 1,
    language: 'Russian',
    emoji: '🇷🇺',
    title: 'Learn Cyrillic First — It Only Takes 2 Hours',
    body: `Most students are afraid of the Russian alphabet, but the Cyrillic script has only 33 letters and can be learned in a single afternoon. Once you can read Cyrillic, you will immediately recognise hundreds of words borrowed from English — театр (teatr = theatre), кофе (kofe = coffee), университет (universitet = university). The alphabet is your key to everything else.`,
  },
  {
    id: 2,
    language: 'Russian',
    emoji: '🇷🇺',
    title: 'Always Learn Verbs in Pairs',
    body: `Russian verbs come in two forms: imperfective (ongoing action) and perfective (completed action). For example: читать / прочитать (to read / to finish reading). Learning them separately causes confusion later. From day one, always learn both forms together as one unit — your future self will thank you.`,
  },
  {
    id: 3,
    language: 'Russian',
    emoji: '🇷🇺',
    title: 'Russian Cases: Start With Just Two',
    body: `Russian has 6 grammatical cases, which can feel overwhelming. But in everyday speech, the Nominative (subject) and Accusative (direct object) cover the majority of sentences. Master these two first before adding Genitive and Dative. Think of cases as answering questions: Nominative = Who? What? | Accusative = Whom? What (do you see)?`,
  },
  {
    id: 4,
    language: 'Russian',
    emoji: '🇷🇺',
    title: 'Stress Changes Meaning — Learn It With Every Word',
    body: `In Russian, stress is not written and not predictable — it must be memorised for each word. More importantly, stress can change meaning entirely: за́мок means "castle" but замо́к means "lock". When you learn a new word, always note which syllable is stressed. Using a dictionary that marks stress (like Wiktionary) will save you from embarrassing mistakes.`,
  },
  {
    id: 5,
    language: 'Russian',
    emoji: '🇷🇺',
    title: 'The Secret of Russian Word Order',
    body: `Unlike English, Russian has relatively free word order because cases show the grammatical role of each word. However, word order is not random — it carries emotion and emphasis. The most important information usually comes at the end of the sentence. "Я люблю тебя" (I love you) vs "Тебя я люблю" (It is YOU I love) — same words, different emotional weight.`,
  },
  {
    id: 6,
    language: 'Romanian',
    emoji: '🇷🇴',
    title: 'Romanian Is a Romance Language — Use That to Your Advantage',
    body: `Romanian shares its roots with French, Spanish, Italian, and Portuguese. If you know any of these languages, you already recognise thousands of Romanian words. For example: frumos (beautiful) ← Latin formosus, a iubi (to love) ← Latin amare, timp (time) ← Latin tempus. Even English speakers can spot cognates once they know to look.`,
  },
  {
    id: 7,
    language: 'Romanian',
    emoji: '🇷🇴',
    title: 'The Definite Article Goes at the End of the Word',
    body: `This is one of Romanian's most distinctive features and surprises every new learner. Instead of saying "the man" (article before noun), Romanian says "omul" — the article is attached to the END: om (man) → omul (the man), casă (house) → casa (the house). Romanian is the only Romance language that kept this Latin feature. Once you get used to it, it actually feels elegant.`,
  },
  {
    id: 8,
    language: 'Romanian',
    emoji: '🇷🇴',
    title: 'Master the Romanian "ă" Sound Early',
    body: `Romanian has two sounds that don't exist in English: "ă" (a neutral schwa sound, like the "a" in "sofa") and "â"/"î" (a deep back-of-the-throat sound). These appear constantly. The word for "yes" is "da", but the word for "year" is "an" and "years" is "ani". Practising these sounds in your first week will make everything easier — don't skip phonetics!`,
  },
  {
    id: 9,
    language: 'Romanian',
    emoji: '🇷🇴',
    title: 'Romanian Has Three Genders — But Neuter Is Easy',
    body: `Romanian nouns are masculine, feminine, or neuter. The good news: neuter nouns behave like masculine in the singular and feminine in the plural — which actually makes them easier to predict. A simple trick: words ending in -ul in singular are usually masculine (bărbatul = the man), words ending in -a are usually feminine (femeia = the woman), and words ending in -ul/-ele that switch are likely neuter.`,
  },
  {
    id: 10,
    language: 'Romanian',
    emoji: '🇷🇴',
    title: 'Romanian Absorbed Slavic Words — History Is Your Teacher',
    body: `Over centuries of living alongside Slavic peoples, Romanian absorbed hundreds of Slavic loanwords. Words like a iubi (to love) ← Slavic ljubiti, prieten (friend) ← Slavic prijatel', and drag (dear) ← Slavic drag are everywhere in everyday speech. Understanding the historical contact between Romania and its Slavic neighbours doesn't just give you vocabulary — it gives you a window into Romanian identity and culture.`,
  },
]
