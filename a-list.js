
//

const testArray = [
  ['test array',],
  'test array',
  'test array',
  'Hallo! \nwelcome to my place',
  `Hallo! \nwelcome to my place`,
] 

const openning = `
Hallo {%customer.firstName,fallback=%},
Vielen Dank für deine Anfrage.
Bitte entschuldige die verspätete Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.`

const closingMondayDE = `
Ich wünsche dir eine schöne Woche
`
const closingWEDE = `
Ich wünsche dir ein schönes Wochenende
`
const closingNormalDayDE = `
Ich wünsche dir einen schönen Tag
`
const telefonNoteDE = `
Hallo {%customer.firstName,fallback=%},

Vielen Dank für das nette Gespräch
`

// English // 



const closingMondayEnglish = `
I wish you a great week
`

const closingWEEnglish = `
I wish you a great weekend
`

const closingNormalDayEnglish = `
I wish you a great day
`

const telefonNoteEnglish = `
  Hello {%customer.firstName,fallback=%},

  thank you for the nice chat.
  `

const openningEnglish = `
Hello {%customer.firstName,fallback=%},
thank you for your message.
Please forgive our late response, we are dealing with a heavy email loud at the moment`


// Textbuilder / new

// const open = [

// ]

const firstLine = 'Hallo {%customer.firstName,fallback=%},';

const secoundLineEmail = 'Vielen Dank für deine Anfrage.'; 
const secoundLinePhone = 'Vielen Dank für das nette Gespräch.';
const secoundLineFA = 'ich habe eine Rückantwort aus der Fachabteilung erhalten.';


const needWantOptions = [
  ['JV'],
  ['ZS'],
  ['ÜP'],
  ['ZF'],
  ['ZF & ÜP'],
  ['IBAN'],
  ['Kontoauszug']
]

// const whatsTheProblem = [
  

// ]

const headlines = [
  ['Unser Gespräch', 'Unser Gespräch'],
  ['Dein Wechsel', 'Dein Wechsel zu Rabot-Charge'],
  ['Deine Anfrage', 'Deine Anfrage'],
  ['Anfrage', 'Anfrage'],
  ['Dein Wideruf', 'Dein Wideruf V/K'],
  ['Deine Kündigung', 'Deine Kündigung V/K'],
  ['Rechnungskorrektur', 'Rechnungskorrektur'],
]
const headlinesEN = [
  ['Our discotion', 'Our discotion'],
  ['Your transfer', 'Your transfer to Rabot-Charge'],
  ['Your inquery','Your inquery'],
  ['Inquery', 'Inquery'],
  ['Your cancelation', 'Your cancelation'],
  ['Your termanation','Your termanation']
]

const template = [
['nette Gespräch', `Hallo {%customer.firstName,fallback=%},

vielen Dank für das nette Gespräch.

Solltest du weitere Fragen haben, komme gerne auf mich zu. Deine Email landet direkt bei mir und ich würde mich dann sofort bei dir melden.
​
​Ich wünsche dir einen tollen Tag.`],

['deine Anfrage', `Hallo {%customer.firstName,fallback=%},

vielen Dank für deine Anfrage.
Bitte entschuldige unsere späte Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.​
​
Solltest du weitere Fragen haben, komme gerne auf mich zu. Deine E-Mail landet direkt bei mir und ich würde mich dann sofort bei dir melden.

Ich wünsche dir einen tollen Tag.`],
['Fachabteilung', `Hallo {%customer.firstName,fallback=%},

ich habe eine Rückantwort aus der Fachabteilung erhalten.
  
  
Ich wünsche dir einen schönen Tag`
  ]
]

const quickTelNotes = [
    ['Kollegen besprochen', 'G: Das Thema wurde bereits mit eiem Kollegen besprochen'],
    ['WP Status', 'G: KD rief an, um den Status seiner WP zu erfahren'],
    ['Früher anfangen', `G: KD wollte früher bei uns anfangen.
V: KD verlangt nach SoKü von AV, Vertrag bei uns widerrufen und ein neuer Vertrag schlissen.`],
  
]
// const telTicket = [

// ]
const cancellation = [
['Kündigung', `Hallo {%customer.firstName,fallback=%},

vielen Dank für deine Anfrage.
​
Hiermit bestätigen wir dir den Eingang deiner Kündigung.

Deine Kundennummer lautet: XXXXX
Deine Vertragsnummer lautet: XXXXXX

Du erhältst innerhalb von 6 Werktagen eine Kündigungsbestätigung.

​Ich wünsche dir einen tollen Tag.`],

['Widerrufs', `Hallo {%customer.firstName,fallback=%},

vielen Dank für deine Anfrage.
​
Hiermit bestätigen wir dir den Eingang deines Widerrufs.

Deine Kundennummer lautet: XXXXX
Deine Vertragsnummer lautet: XXXXXX

Du erhältst innerhalb von 6 Werktagen eine Widerrufsbestätigung.

​Ich wünsche dir einen tollen Tag.`]
]


const beNice = [
    `Gerne kannst du uns bei weiteren Fragen telefonisch kontaktieren.
    Wir sind von Mo - Fr zwischen 9:00 und 17:00 Uhr unter 040 593622030 erreichbar.`,
    `Als kleines Dankeschön werden wir deine Seriengebühr für den Monat XXX in Höhe von 4,99 € erlassen.`,
    `Wir würden uns sehr freuen, wenn du uns eine Bewertung hinterlassen würdest. Hier ist der Link dazu https://de.trustpilot.com/review/rabot-charge.de.
    Dein Feedback ist uns wichtig!`,

]

const secoundSentence = [
    `ich habe eine Rückantwort aus der Fachabteilung erhalten.`
]

// 

