




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

const open = [

]

const needWantOptions = [
  ['<want/got>'],
  ['JV'],
  ['ZS'],
  ['ÜP'],
  ['ZF'],
  ['ZF & ÜP'],
  ['IBAN'],
  ['Kontoauszug']
]

const whatsTheProblem = [
  

]

const headlines = [
  'Betreff DE',
  'Betreff DE',
  'Unser Gespräch',
  'Dein Wechsel zu Rabot-Charge',
  'Deine Anfrage',
  'Anfrage',
  'Dein Wideruf',
  'Deine Kündigung',
  'Rechnungskorrektur'
]
const headlinesEN = [
  'Subject EN',
  'Our discotion',
  'Our discotion',
  'Your transfer to Rabot-Charge',
  'Your inquery',
  'Inquery',
  'Your cancelation',
  'Your termanation'
]

const quickTelNotes = [
    'Quick notes',
    'Das Thema wurde bereits mit eiem Kollegen besprochen',
    'Das Thema wurde bereits mit eiem Kollegen besprochen',
    'KD rief an, um den Status seiner WP yu erfahren',
]
const telTicket = [

]



const beNice = [
  'be nice!',
  `Gerne kannst du uns bei weiteren Fragen telefonisch kontaktieren.
  Wir sind von Mo - Fr zwischen 09:00 und 17:00 Uhr unter 040-593622030 erreichbar`,
  `Als kleine Dankeschön werden wir deine Servicegebühr in Höhe von 4,99 € für den Monat XXX erlassen`,
]
