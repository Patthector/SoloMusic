/*GLOBAL VARIABLES*/
const DIVbigDaddy = document.getElementsByClassName("playListsContainer")[0];
const BUTTONcreatePlayList = document.getElementById('createPlayList');
const BUTTONSaveChanges = document.getElementById('saveChanges');
const BUTTONfirstModalOK = document.getElementById('firstModalOKButton');

//*************************
//PLAYLIST OBJECT
//*************************
let playList = function(name){
    this.name = name, 
    this.BUTTONadd,
    this.BUTTONedit,
    this.BUTTONdelete
};
//********************
//SONG OBJECT
//********************
let song = function(name, duration,artist_album){
    this.name = name,
    this.duration = duration,
    this.artist_album = artist_album,
    this.BUTTONup,
    this.BUTTONdown,
    this.BUTTONplay,
    this.BUTTONstop,
    this.BUTTONdelete
};

//*************************
//METHOD: createPlayList
//*************************
playList.prototype.createPlayList = function(){
    //creating a DIV container of the playList
    //creating a header with this.name
    const DIVcontainer = CreatingElement('DIV',DIVbigDaddy);
    let heading = CreatingElement('H1',DIVcontainer);
    let DIVcontainerButtons = CreatingElement('DIV',DIVcontainer);
    this.BUTTONadd = CreatingElement('BUTTON',DIVcontainerButtons);
    this.BUTTONedit = CreatingElement('BUTTON',DIVcontainerButtons);
    this.BUTTONdelete = CreatingElement('BUTTON',DIVcontainerButtons);
    let spanAdd = CreatingElement('SPAN',this.BUTTONadd);
    let spanEdit= CreatingElement('SPAN',this.BUTTONedit);
    let spanDelete = CreatingElement('SPAN',this.BUTTONdelete); 
    DIVcontainer.setAttribute('class','row playList');
    heading.textContent = this.name;
    heading = SettingElement(heading,'class',this.name + ' col-xs-8');
    DIVcontainerButtons = SettingElement(DIVcontainerButtons,'class','col-xs-4 containerButtons');
    spanAdd.textContent = "audiotrack";
    spanAdd.setAttribute('class','material-icons');
    this.BUTTONadd.setAttribute('class','btn btn-outline-success');
    this.BUTTONedit.setAttribute('class','btn btn-outline-success');
    this.BUTTONedit.setAttribute('data-toggle','modal');
    this.BUTTONedit.setAttribute('data-target','#myModal');
    spanEdit.textContent = 'mode_edit';
    spanEdit.setAttribute('class','material-icons');
    this.BUTTONdelete.setAttribute('class','btn btn-outline-success');
    spanDelete.textContent = 'delete';
    spanDelete.setAttribute('class','material-icons');


    
};

//*************************
//METHOD: createSong
//*************************
function CreateSong(daddyElement,LIelement, songName,songTime, songAlbumArtist){
    SettingElement(LIelement,'class','row');
   /*PART#_1*/ 
    /*/BUTTON_UP*/   
    let DIVbuttonsContainer_UP = CreatingElement('DIV',LIelement);
    SettingElement(DIVbuttonsContainer_UP,'class','col-xs-1 DIVbuttonsContainer_UP');     
    let BUTTONup =CreateButton('BUTTON',DIVbuttonsContainer_UP,'class','btn btn-outline-success buttonUp','SPAN','arrow_upward','class','material-icons');
    /*/BUTTON_PLAY*/
    let DIVbuttonsContainer_1 = CreatingElement('DIV',LIelement);//creating the DIV container for the firsts buttons[play-stop-close]
    SettingElement(DIVbuttonsContainer_1,'class','col-xs-10 DIVbuttonsContainer_1');    
    let BUTTONplay = CreateButton('BUTTON',DIVbuttonsContainer_1,'class','btn btn-outline-success','SPAN','play_circle_outline','class','material-icons');    
    /*/BUTTON_PAUSESTOP*/
    let BUTTONstop = CreateButton('BUTTON',DIVbuttonsContainer_1,'class','btn btn-outline-secondary','SPAN','pause_circle_outline','class','material-icons');
    /*/BUTTON_CLOSE*/
    let BUTTONclose = CreateButton('BUTTON',DIVbuttonsContainer_1,'class','btn btn-outline-danger','SPAN','clear','class','material-icons');
    /*/BUTTON_DOWN*/    
    let DIVbuttonsContainer_DOWN = CreatingElement('DIV',LIelement);
    SettingElement(DIVbuttonsContainer_DOWN,'class','col-xs-1 DIVbuttonsContainer_DOWN');
    let BUTTONdown = CreateButton('BUTTON',DIVbuttonsContainer_DOWN,'class','btn btn-outline-success','SPAN','arrow_downward','class','material-icons');
    /*PART#_2*/
    let DIVinfoContainer = CreatingElement('DIV',LIelement);
    SettingElement(DIVinfoContainer,'class','DIVinfoContainer row');
    let DIVSongInfoContainer = CreatingElement('DIV',DIVinfoContainer);
    SettingElement(DIVSongInfoContainer,'class','row col -xs-10');
    let songTitle = CreatingElement('A',DIVSongInfoContainer);
    SettingElement(songTitle,'href','#');
    SettingElement(songTitle,'class','songTitle col-xs-5'); 
    let songArtAlb = CreatingElement('A',DIVSongInfoContainer);
    SettingElement(songArtAlb,'href','#');    
    songArtAlb.textContent = songAlbumArtist;
    SettingElement(songArtAlb,'class','songArtAlb col-xs-6'); 
    let DIVsongTimer = CreatingElement('DIV',DIVinfoContainer);
    SettingElement(DIVsongTimer,'class','DIVsongTimer col-xs-2');
    let songTimer = CreatingElement('SPAN',DIVsongTimer);
    songTimer.textContent = songTime;    
    SettingElement(songTimer,'class','songTimer');
    songTitle.textContent = songName;
       
    return LIelement;
};

//*************************
//AUXILIAR METHODS
//*************************
function CreatingElement(type,father){//create a new element>>>[ type = 'div', 'ul' , 'li'] <<<<
    let aux = document.createElement(type);
    father.appendChild(aux);
    return aux;
};
function SettingElement(element, type, property){//creating classes or other properties. type = 'class' property = 'value'...
    element.setAttribute(type, property);
    return element;
};
function CreateButton(typeElement = 'BUTTON',daddy,typeElementProperty,typeElementPropertyValue,childTypeElement = 'SPAN', childTextContent, childProperty,childPropertyValue){
    let button = CreatingElement(typeElement,daddy);
    let span = CreatingElement(childTypeElement,button);
    span.textContent = childTextContent;
    SettingElement(span,childProperty,childPropertyValue);
    SettingElement(button,typeElementProperty,typeElementPropertyValue);
    return button;
}

//*************************s
//EVENT LISTENERS
//*************************
BUTTONcreatePlayList.addEventListener('click',function(){
    $('#firstModal').modal('show');
       
});
BUTTONfirstModalOK.addEventListener('click',function(){
    $('#firstModal').modal('hide');
    let input = document.getElementsByTagName('INPUT')[0];
    
    let createpl;
    input.value===''?(createpl = new playList('My Favorities')):(createpl = new playList(input.value));
    input.value = '';
    createpl.createPlayList(); 
});
DIVbigDaddy.addEventListener('click',function(e){
    if(e.target.textContent === 'delete'){
        if(e.target.tagName === 'SPAN'){
            e.target.parentNode.parentNode.parentNode.remove();//SPAN<<--DIVBUTTONS<<--DIVPLAYLIST
        }
        else if(e.target.tagName === 'BUTTON'){
            e.target.parentNode.parentNode.remove();   
        }
    }  
    if(e.target.textContent === 'audiotrack'){
        //SONGS
        let JessieJ = new song("Sweet Talker","4:10","Jessie J_Nobody is Perfect");        
        let KattyPerryChainedTheRhythm = new song("ChainedTheRhythm","3:57","KattyPerry");
        let ImagineDragonsBeliever = new song("Believer","3:27","Believer/ImagineDragons");
        let ImagineDragonsThunder = new song("Thunder","3:07","Believer/ImagineDragons");
        let ImagineDragonsWhateverItTakes = new song("WhateverItTakes","3:21","Believer/ImagineDragons");
        let ImagineDragonsDemons = new song("Demons","2:55","NightVision/ImagineDragons");
        let ImagineDragonsWarriors = new song("Warriors","2:50","Smoke + Mirrors/ImagineDragons");
        //END SONGS
        let LIsong = document.createElement('LI');
        let elementClicked = e.target;// the SPAN or the BUTTON
        console.log(elementClicked);
        if(elementClicked.tagName === 'SPAN')
        {   //this means the playlist is empty
            if(elementClicked.parentNode.parentNode.parentNode.childElementCount === 2){
                //create a UL element and append it in the parent node
                const ULlist = CreatingElement('UL',elementClicked.parentNode.parentNode.parentNode);
                ULlist.appendChild(CreateSong(ULlist,LIsong,JessieJ.name,JessieJ.duration,JessieJ.artist_album));
            }
            else if(elementClicked.parentNode.parentNode.parentNode.childElementCount === 3){
                const ULcontainer = elementClicked.parentNode.parentNode.nextSibling;                ULcontainer.appendChild(CreateSong(ULcontainer,document.createElement('LI'),ImagineDragonsBeliever.name,ImagineDragonsBeliever.duration,ImagineDragonsBeliever.artist_album));
                ULcontainer.appendChild(CreateSong(ULcontainer,document.createElement('LI'),ImagineDragonsThunder.name,ImagineDragonsThunder.duration,ImagineDragonsThunder.artist_album));
                ULcontainer.appendChild(CreateSong(ULcontainer,document.createElement('LI'),ImagineDragonsWhateverItTakes.name,ImagineDragonsWhateverItTakes.duration,ImagineDragonsWhateverItTakes.artist_album));
                ULcontainer.appendChild(CreateSong(ULcontainer,document.createElement('LI'),ImagineDragonsDemons.name,ImagineDragonsDemons.duration,ImagineDragonsDemons.artist_album));
                ULcontainer.appendChild(CreateSong(ULcontainer,document.createElement('LI'),ImagineDragonsWarriors.name,ImagineDragonsWarriors.duration,ImagineDragonsWarriors.artist_album));
                ULcontainer.appendChild(CreateSong(ULcontainer,document.createElement('LI'),KattyPerryChainedTheRhythm.name,KattyPerryChainedTheRhythm.duration,KattyPerryChainedTheRhythm.artist_album));
            }
        }
        else if(elementClicked.tagName === 'BUTTON'){
            if(elementClicked.parentNode.parentNode.childElementCount === 2){
                const ULlist = CreatingElement('UL',e.target.parentNode.parentNode);
                ULlist.appendChild(CreateSong(ULlist,LIsong,JessieJ.name,JessieJ.duration,JessieJ.artist_album));
            }
            else if(elementClicked.parentNode.parentNode.childElementCount === 3){
                const ULcontainer = elementClicked.parentNode.nextSibling;
                ULcontainer.appendChild(CreateSong(ULcontainer,LIsong,JessieJ.name,JessieJ.duration,JessieJ.artist_album));
            }
        }
    }    
    if(e.target.textContent === 'mode_edit'){
        let auxiliar;
        if(e.target.tagName === 'SPAN'){
            auxiliar = e.target.parentNode.parentNode.previousElementSibling;
        }
        else if(e.target.tagName === 'BUTTON'){
            auxiliar = e.target.parentNode.previousElementSibling;
        }
        $('#myModal').modal('show');
        
        BUTTONSaveChanges.onclick=function(){
            let input = document.getElementsByTagName('INPUT')[1];
            if(input.value === ''){
                input.value = 'MY FAVORITIES';
            }
            auxiliar.textContent = input.value;
            input.value = '';
            $('#myModal').modal('hide');
        };
        
    }    
    if(e.target.textContent === 'clear'){
        if(e.target.tagName === 'SPAN'){
            e.target.parentNode.parentNode.parentNode.remove();//SPAN<<--DIVBUTTONS<<--DIVPLAYLIST
        }
        else if(e.target.tagName === 'BUTTON'){
            e.target.parentNode.parentNode.remove();   
        }
        
    }
    if(e.target.textContent === 'arrow_upward'){
        if(e.target.tagName === 'SPAN'){
            //find the daddy
            let daddy = e.target.parentNode.parentNode.parentNode.parentNode;
            let firstChild = daddy.firstChild;
            if(firstChild !== e.target.parentNode.parentNode.parentNode){
                daddy.insertBefore(e.target.parentNode.parentNode.parentNode,e.target.parentNode.parentNode.parentNode.previousElementSibling);
            }
            else{//nada
            }
        }
        else if(e.target.tagName === 'BUTTON'){
            let daddy = e.target.parentNode.parentNode.parentNode;
            let firstChild = daddy.firstChild;
            if(firstChild !== e.target.parentNode.parentNode){
                daddy.insertBefore(e.target.parentNode.parentNode,e.target.parentNode.parentNode.previousElementSibling);
            }
            else{//nada
            }
        }
    }    
    if(e.target.textContent === 'arrow_downward'){
        if(e.target.tagName === 'SPAN'){
            let daddy = e.target.parentNode.parentNode.parentNode.parentNode;
            let lastChild = daddy.lastChild;
            if(lastChild !== e.target.parentNode.parentNode.parentNode){                daddy.insertBefore(e.target.parentNode.parentNode.parentNode.nextElementSibling,e.target.parentNode.parentNode.parentNode);
            }
            else{//nada
            }
        }
        else if(e.target.tagName === 'BUTTON'){
            let daddy = e.target.parentNode.parentNode.parentNode;
            let lastChild = daddy.lastChild;
            if(lastChild !== e.target.parentNode.parentNode){
                daddy.insertBefore(e.target.parentNode.parentNode.nextElementSibling,e.target.parentNode.parentNode);
            }
            else{//nada
            }
        }
    }
});



















