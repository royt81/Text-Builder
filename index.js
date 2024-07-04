
const container = document.getElementById('container');



createTextBuilder();
function createTextBuilder(){

    const container = document.getElementById('container');
    const textBuilder = document.createElement('div');
    textBuilder.id = 'textBuilder';

    // trying to set open horizontal manu

    const quickManuOne = createSimpleExpendingSection('testOne', 'Headlines');
    const headlinsList = createSelect(headlines);
    const quickCopyPasteList = createSelect(headlinesEN)
    quickManuOne.appendChild(headlinsList);
    quickManuOne.appendChild(quickCopyPasteList);


    // quick headlines copy past list //
  
    const telNotes = createSimpleExpendingSection('tel-notes', 'Tel-Note');
    const quickNotes = createSelect(quickTelNotes);
    telNotes.appendChild(quickNotes);

    // phone or mail// 
  
    const phoneOrMail = createSimpleExpendingSection('phoneOrMail', 'Be nice');
    const niceList = createSelect(beNice);
    phoneOrMail.appendChild(niceList);
    // const phoneOrMail = textSection('phoneOrMail');
    // const phoneOrMailLabel = labelMaker('email/phone');
  
    // const phoneButton = buildTextButton('input', 'radio', 'phoneButton', 'textBuilderButton', 'isPhone', 'phoneOrMail');
    // const emailButton = buildTextButton('input', 'radio', 'emailButton', 'textBuilderButton', 'isEmail',  'phoneOrMail');
  
    // phoneOrMail.appendChild(emailButton);
    // phoneOrMail.appendChild(phoneOrMailLabel)
    // phoneOrMail.appendChild(phoneButton)
  
    // Am I late to respond? 
  
    const isLate = textSection('isLate');
    const lateLabel = labelMaker('late?');
  
    const lateButton = buildTextButton('input', 'checkbox', 'lateButton', 'textBuilderButton', 'islate', 'lateOrNo');
  
    isLate.appendChild(lateButton);
    isLate.appendChild(lateLabel);
  
    //need or got?
    const needOrGot = textSection('needOrGot');
  
    //const needOrGotLabel = labelMaker('need/got');
  
    const needButton = buildTextButton('input', 'radio','needButton','textBuilderButton','isneed', 'needOrGot')
    const gotButton = buildTextButton('input', 'radio','gotButton','textBuilderButton','isgot','needOrGot')
  
    needOrGot.appendChild(needButton);
    needOrGot.appendChild(gotButton)
  
    // what do I need?
  
    const subjuct = textSection('subjuct')
  
    const subjuctList = createSelect(needWantOptions, false);
    
    subjuct.appendChild(subjuctList); 
  
    // recommend me?
  
    const recommend = document.createElement('div'); 
    recommend.id = 'recommend'; 
    recommend.className = 'textBuilderSection';
  
    const recommendLabel = document.createElement('div');
    recommendLabel.className = 'textbuilderLabel';
    recommendLabel.innerText = 'Recommend?';
  
    const recommendButton = buildTextButton('input', 'checkbox')
  
    recommend.appendChild(recommendButton);
    recommend.appendChild(recommendLabel);
  
    // contact me?
  
    const contactMe = document.createElement('div'); 
    contactMe.id = 'contactMe'; 
    contactMe.className = 'textBuilderSection';
  
    const contactMeLabel = document.createElement('div');
    contactMeLabel.className = 'textbuilderLabel';
    contactMeLabel.innerText = 'contact me?';
  
    const contactMeButton = buildTextButton('input', 'checkbox','contactMeButton','textBuilderButton','iscontactMe', 'contactMeOrNo')
  
    contactMe.appendChild(contactMeButton);
    contactMe.appendChild(contactMeLabel);
    // closing button
  
    const runButton = document.createElement('div');
    runButton.className = 'pushButton';
    runButton.id = 'runButton';
    runButton.innerText = 'RUN';
  
    runButton.addEventListener('click', ()=>{
      makeTheText();
    })
  
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
    textBuilder.appendChild(phoneOrMail);
    //textBuilder.appendChild(isLate);
    //textBuilder.appendChild(needOrGot);
    //textBuilder.appendChild(subjuct);
    //textBuilder.appendChild(recommend);
    //textBuilder.appendChild(contactMe);
    textBuilder.appendChild(runButton);
    textBuilder.appendChild(deleteButton);
   // textBuilder.appendChild(firstList);
    
    container.appendChild(textBuilder)
    //contact.appendChild(textBuilder);
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
  }
  function labelMaker(text){
    const label = document.createElement('div');
    label.className = 'textbuilderLabel';
    label.innerText = text; 
  
    return label
  }
  function textSection(id){
    const section = document.createElement('div');
    section.className = 'textBuilderSection';
    section.id = id;
  
    return section;
  }
  //
  function createSelect(listID){
    const listAndNameSection = document.createElement('div');
    listAndNameSection.className = 'list-and-name-section'
    const name = listID[0];
    const infoLabel = document.createElement('div');

    infoLabel.innerText = name;

    const select = document.createElement('select');
    select.className = 'selectList';
    select.ariaPlaceholder = 'List';
    for(let i=1; i<listID.length; i++){
      const option = document.createElement('option');
      option.className = 'option';
      option.innerText = listID[i];
      select.appendChild(option);
    }
    select.addEventListener('change', async (event) => {
      const selectedText = event.target.options[event.target.selectedIndex].text;
      try {
          await navigator.clipboard.writeText(selectedText);
          console.log(`Copied to clipboard: ${selectedText}`);
      } catch (err) {
          console.error('Failed to copy text: ', err);
      }
  });
  
    listAndNameSection.appendChild(infoLabel)
    listAndNameSection.appendChild(select)
    return listAndNameSection
  }
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
  }
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
  













