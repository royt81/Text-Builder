
const container = document.getElementById('container');

const welcomeScreen = document.createElement('div'); 
welcomeScreen.id = 'welcomeScreen';
container.appendChild(welcomeScreen);
welcomeScreen.innerText = 'Welcome!'; 
welcomeScreen.addEventListener('click', ()=>{
  createTextBuilder()
})

//createTextBuilder();
function createTextBuilder(){

    const container = document.getElementById('container');
    container.innerHTML = '';
    const textBuilder = document.createElement('div');
    textBuilder.id = 'textBuilder';

    // headlines manus

    const quickManuOne = createSimpleExpendingSection('testOne', 'Headlines');
    const thema = createNormalSelect(headlines, 'Thema DE');
    const subject = createNormalSelect(headlinesEN, 'Subject EN');
    const temlateList = createNormalSelect(template, 'template');
    quickManuOne.appendChild(thema);
    quickManuOne.appendChild(subject);
    quickManuOne.appendChild(temlateList);


    // quick headlines copy past list //
  
    const telNotes = createSimpleExpendingSection('tel-notes', 'Tel-Note');
    const quickNotes = createNormalSelect(quickTelNotes, 'Tel-Notes');
    telNotes.appendChild(quickNotes);

    // be nice//
  
    const beNiceSection = createSimpleExpendingSection('beNice', 'Be nice!');
    //const niceList = createNormalSelect(beNice, 'Be Nice!');
    //beNiceSection.appendChild(niceList); 

    // cancelation section

    const turmination = createSimpleExpendingSection('turmination', 'turmination');
    const turminationList = createNormalSelect(cancellation, 'Kündigung/Widrruf');
    turmination.appendChild(turminationList);
    
    // formulating a sentence

    const sentenceBuilder = createSimpleExpendingSection('sentenceBuilder', 'Build');

    // const fA = document.createElement('div');
    // fA.className = 'littleButton';
    // fA.innerText = 'Anfrage';
    // fA.addEventListener('click', ()=>{
    //   fA.className = (fA.className !== 'littleButtonPushed' ? (fA.innerText = 'FA', 'littleButtonPushed')  : (fA.innerText = 'Anfrage', 'littleButton'))
    // })

    // const mailPhone = document.createElement('div');
    // mailPhone.className = 'littleButton';
    // mailPhone.innerText = 'Mail';
    // mailPhone.addEventListener('click', ()=>{
    //   mailPhone.className = (mailPhone.className !== 'littleButtonPushed' ? (mailPhone.innerText = 'Phone', 'littleButtonPushed')  : (mailPhone.innerText = 'Mail', 'littleButton'))
    // })
    const callingReson = document.createElement('select');
    let secoundLine = '';


    const email = document.createElement('option');
    email.innerText = 'email';
    email.value = secoundLineEmail
    const phone = document.createElement('option');
    phone.innerText = 'phone';
    phone.value = secoundLinePhone
    const fA = document.createElement('option');
    fA.innerText = 'FA';
    fA.value = secoundLineFA;
    const wechsel = document.createElement('option');
    wechsel.innerText = 'WP';
    const anfrage = document.createElement('option');
    anfrage.innerText = 'Anfrage';

    secoundLine = secoundLineEmail;
    callingReson.addEventListener('change', ()=>{
      secoundLine = callingReson.value
    })

    const subjectList = document.createElement('select');
    for(let i=0; i<needWantOptions.length; i++){
      const option = document.createElement('option');
      option.innerText = needWantOptions[i];
      subjectList.appendChild(option);
    }



    const runButton = document.createElement('div');
    runButton.id = 'runButton';
    runButton.classList.add('pushButton');
    runButton.innerText = 'RUN!';

    runButton.addEventListener('click', ()=>{
      const closing = dayOfTheWeek();
      const sentence = 
`${firstLine}

${secoundLine}

${closing}`
      // console.log(firstLine);
      // console.log(secoundLine);
      // console.log(closing)
      // console.log(sentence)
      copyToClipboard(sentence)
    })


   

    callingReson.appendChild(email)
    callingReson.appendChild(phone)
    callingReson.appendChild(fA)
    //callingReson.appendChild(wechsel)
    //callingReson.appendChild(anfrage)

    // sentenceBuilder.appendChild(fA)
    // sentenceBuilder.appendChild(mailPhone)
    sentenceBuilder.appendChild(callingReson)
    sentenceBuilder.appendChild(subjectList)
    sentenceBuilder.appendChild(runButton)
  
    //delete button
  
    const deleteButton = document.createElement('div');
    deleteButton.className = 'pushButton';
    deleteButton.innerText = 'Erase';
  
    deleteButton.addEventListener('click', async()=>{
      try {
        await navigator.clipboard.writeText('');
        //console.log('Clipboard cleared');
      } catch (err) {
        console.error('Failed to clear clipboard: ', err);
      }
    })
  
    // appending
  
    textBuilder.appendChild(quickManuOne);
    textBuilder.appendChild(telNotes);
    //textBuilder.appendChild(beNice);
    textBuilder.appendChild(turmination);
    textBuilder.appendChild(sentenceBuilder);
    textBuilder.appendChild(deleteButton);

    container.appendChild(textBuilder);
}

function makeTheText(){
    console.log('next to do: get all the notes from work computer that you use during the day nd copy to -list')
}
  
function makeCopyPasteList(sourceList){
  
    const list = document.createElement('select');
    list.className = 'copyPastList';
  
  
    for(let i=0; i<sourceList.length; i++){
      const button = document.createElement('option');
      button.className = 'CopyPasteButton';
      const text = sourceList[i].innerText
    }
    console.log(list)
  
}//to be erased
function buildTextButton(element, type, id, className, value, name){
    const button = document.createElement(element);
    button.type = type;
    button.id = id;
    button.className = className;
    button.value = value;
    button.name = name;
  
    return button            
}//to be removed
function labelMaker(text){
    const label = document.createElement('div');
    label.className = 'textbuilderLabel';
    label.innerText = text; 
  
    return label
}//to be removed
function textSection(id){
    const section = document.createElement('div');
    section.className = 'textBuilderSection';
    section.id = id;
  
    return section;
}//to be removed
function createSelect(listID){
    const listAndNameSection = document.createElement('div');
    listAndNameSection.className = 'list-and-name-section'
    const name = listID[0];
    const infoLabel = document.createElement('div');

    infoLabel.innerText = name;

    const select = document.createElement('select');
    select.className = 'selectList';
    select.ariaPlaceholder = 'List';
    for(let i=0; i<listID.length; i++){
      const option = document.createElement('option');
      option.className = 'option';
      option.innerText = listID[i];
      select.appendChild(option);
    }
    select.addEventListener('change', async (event) => {
      const selectedText = event.target.options[event.target.selectedIndex].text;
      try {
          await navigator.clipboard.writeText(selectedText);
          //console.log(`Copied to clipboard: ${selectedText}`);
      } catch (err) {
          console.error('Failed to copy text: ', err);
      }
  });
  
    listAndNameSection.appendChild(infoLabel)
    listAndNameSection.appendChild(select)
    return listAndNameSection
}//to be removed
function createStickySelect(listID){
    const select = document.createElement('select');
    select.className = 'selectList';
    for(let i=0; i<listID.length; i++){
      const option = document.createElement('option');
      option.innerText = listID[i];
      select.appendChild(option);
      select.addEventListener('change', async() => {
      const selectedOption = select.options[select.selectedIndex].innerText;
      try {
        const currentClipboardText = await navigator.clipboard.readText();
        const newClipboardText = currentClipboardText + selectedOption;
        await navigator.clipboard.writeText(newClipboardText);
        console.log(`Appended to clipboard: ${selectedOption}`);
      } catch (err) {
        console.error('Failed to read or write to clipboard: ', err);
      }
      });
    }
    return select
}
function createNormalSelect(array, placeHolder) {
  const select = document.createElement('select');
  select.className = 'selectList';

  const placeholderOption = document.createElement('option');
  placeholderOption.textContent = placeHolder;
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  select.appendChild(placeholderOption);

  array.forEach(item => {
    const option = document.createElement('option');
    option.classList.add('option');
    option.textContent = item[0];
    option.value = item[1]; 
    select.appendChild(option);
  });

  // Add a change event listener to the select element
  select.addEventListener('change', (event) => {
    const selectedText = event.target.value;
    copyToClipboard(selectedText);
  });

  async function copyToClipboard(text) {
    // Creating a temporary textarea to copy the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      await navigator.clipboard.writeText(textarea.value);
      //console.log(`Copied to clipboard: ${text}`);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    } finally {
      document.body.removeChild(textarea);
    }
  }

  return select;
}
function createExpendingSection(id1, id2, labelName){

    const section = textSection(id1); 
    const label = labelMaker(`${labelName}`);
    section.appendChild(label);

    section.addEventListener('mouseover', ()=>{
      const textBuilder = document.getElementById('textBuilder');
      const expendeSection = document.createElement('div');
      expendeSection.className = 'manuExpend'; 
      expendeSection.id = id2;

      //const firstList = createSelect(headlines);
      expendeSection.addEventListener('mouseout', (event)=>{
        if (!expendeSection.contains(event.relatedTarget)){
          textBuilder.replaceChild(section, expendeSection);
        }
      })
      //expendeSection.appendChild(firstList)
      textBuilder.replaceChild(expendeSection, section);
    })
    return section;
}//to be removed
function createSimpleExpendingSection(id, label){
    const section = document.createElement('div');
    section.className = 'expend-manu-test';
    section.id = id; 
    const myLabel = document.createElement('div');
    myLabel.className = 'label-test';
    myLabel.innerText = label
    section.appendChild(myLabel);
    section.addEventListener('mouseover', ()=>{
      section.style.width = 'var(--expend-section-wide)';
    })
    section.addEventListener('mouseout', ()=>{
      section.style.width = 'var(--section-wide)'
    })
    return section
} 
function createSelectFromObjectList(list){
  const select = document.createElement('select');
  for(let i=0; i<list.length; i++){
    const option = document.createElement('option');
    option.innerText = list[i][0];
    option.value = list[i][1];

    option.addEventListener('change', ()=>{
      copyToClipboard(option.value)
    })
  }
}

function dayOfTheWeek(){
  let dailyClose = '';
  const today = new Date();
  const todayNumber = today.getDate();
  todayNumber == 5 ? dailyClose = closingWEDE : todayNumber == 0 ? dailyClose = closingMondayDE : dailyClose = closingNormalDayDE;
  //console.log(dailyClose);

  return dailyClose
}

async function copyToClipboard(text) {
  // Creating a temporary textarea to copy the text
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    await navigator.clipboard.writeText(textarea.value);
    //console.log(`Copied to clipboard: ${text}`);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  } finally {
    document.body.removeChild(textarea);
  }
}
  
  













