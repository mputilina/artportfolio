export class PageSetUp{

    constructor(createButton : HTMLButtonElement, closeButton : HTMLButtonElement){
        createButton.addEventListener('click', this._switchPages);
        closeButton.addEventListener('click', this._switchPages);
        this.addPicture();
    }

    _switchPages(event : Event){
        const mains = document.querySelectorAll('main');
        const header = document.querySelector('header');
        const stl = document.querySelector('link');

        if(!(stl instanceof HTMLLinkElement))
            return;

        if(!(header instanceof HTMLElement))
            return;   
            
            const checkButton = event.target as  HTMLButtonElement;
            if(checkButton.id == "create")
            {
                stl.setAttribute('href','css/style3.css');
                header.hidden = true;
            } else{
                stl.setAttribute('href','css/style1.css');
                header.hidden = false;
            };

        for (const m of mains)
        {
            if(m.hidden === true)
                m.hidden = false;
            else m.hidden = true;    
        }
    }

    addPicture(){
        const loadBut = document.getElementById("pict1");
        const butBut = document.getElementById("pictBut1");
        const output = document.getElementById("Squarel");

        if(!(loadBut instanceof HTMLInputElement)) 
            return;
        if(!(butBut instanceof HTMLButtonElement)) 
            return;    
        if(!(output instanceof HTMLElement)) 
            return;

        butBut.addEventListener("click", function (event) {
            event.preventDefault();
            loadBut.click();
            
            console.log("aaaaa");

        });

        loadBut.addEventListener("change", function(event){
            console.log("llll");
            const newImg = document.createElement('img');
            newImg.classList.add('preview');
            const curFile  = event.target;
            if(!(curFile instanceof HTMLInputElement))
                return;
            
            const puk = curFile.files;

            if(!(puk))
                return;
            newImg.src = URL.createObjectURL(puk[0]);
            output.append(newImg);
        });
    }
}