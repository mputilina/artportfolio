export class Control {

    isResizableImg : Boolean;
    isResizableTxt : Boolean;

    newSquare : number;
    currentSlide : number;

    constructor() {
        this.createImage('1square');
        this.createTxt('1square');
        this.pickColor('1square');
        this.manageSlides();

        this.isResizableImg = false;
        this.isResizableTxt = false;
        this.newSquare = 2;
        this.currentSlide = 1;
    }

    manageSlides(){
        const buttons = document.querySelectorAll('div.arrow > button');
        this._handleClick = this._handleClick.bind(this);
        for (const button of buttons)
            button.addEventListener('click', this._handleClick);
    }

    
    doAction(value : string){
        switch(value)
        {
            case "arrowup":
                this.upSlide();
                break;
            case "minus":
                this.deleteSlide();
                break;
            case "plus":
                this.createNewSlide();
                break;
            case "arrowdown":
                this.downSlide();
                break;
        }
    }

    upSlide(){
        const delSlide = document.getElementById(this.currentSlide.toString() + 'square');
        console.log(delSlide);
        const allSlides = document.querySelectorAll('div.Slides > div');
        let prev : number = 0;
        let next : number = 0;
        for (const oneSlide of allSlides)
        {
            console.log("aaa ",oneSlide);
            if(!(oneSlide instanceof HTMLElement))
                return;
            if (oneSlide.hidden === true)
            {
                prev = next;
                next = parseInt(oneSlide.id, 10);
                console.log("id ",oneSlide.id);
                if (next > this.currentSlide)
                    break;
            }   
        }
        console.log('prev', prev);
        console.log('nxet', next);

        if(prev === 0 && next === 0) 
            return;
        else if(next>this.currentSlide)
        {
            const curEl = document.getElementById(prev.toString() + 'square');
            if(!(curEl instanceof HTMLElement))
                return;
            if(!(delSlide instanceof HTMLElement))
                return;
            this.currentSlide = prev;
            curEl.hidden = false; 
            delSlide.hidden = true;
        }  
        else {
            const curEl = document.getElementById(next.toString() + 'square');
            if(!(curEl instanceof HTMLElement))
                return;
            if(!(delSlide instanceof HTMLElement))
                return;
            this.currentSlide = next;
            curEl.hidden = false; 
            delSlide.hidden = true;
        }
    }

    downSlide(){
        const delSlide = document.getElementById(this.currentSlide.toString() + 'square');
        console.log(delSlide);
        const allSlides = document.querySelectorAll('div.Slides > div');
        let next : number = 0;
        for (const oneSlide of allSlides)
        {
            if(!(oneSlide instanceof HTMLElement))
                return;
            if (oneSlide.hidden === true)
            {
                next = parseInt(oneSlide.id, 10);
                if (next > this.currentSlide)
                    break;
            }   
        }
        
        if ((next === 0) || (this.currentSlide > next))
            return;  
        else
        {
            const curEl = document.getElementById(next.toString() + 'square');
            if(!(curEl instanceof HTMLElement))
                return;
            if(!(delSlide instanceof HTMLElement))
                return;
            this.currentSlide = next;
            curEl.hidden = false;  
            delSlide.hidden = true;
        } 
    }

    deleteSlide(){
        const delSlide = document.getElementById(this.currentSlide.toString() + 'square');
        const allSlides = document.querySelectorAll('div.Slides > div');
        let prev : number = 0;
        let next : number = 0;
        for (const oneSlide of allSlides)
        {
            if(!(oneSlide instanceof HTMLElement))
                return;
            if (oneSlide.hidden === true)
            {
                prev = next;
                next = parseInt(oneSlide.id, 10);
                if (next > this.currentSlide)
                    break;
            }   
        }
        if(prev === 0 && next === 0)
            return;
        else if (next === 0)
        {
            const curEl = document.getElementById(prev.toString() + 'square');
            if(!(curEl instanceof HTMLElement))
                return;
            this.currentSlide = prev;
            curEl.hidden = false;    
        } else
        {
            const curEl = document.getElementById(next.toString() + 'square');
            if(!(curEl instanceof HTMLElement))
                return;
            this.currentSlide = next;
            curEl.hidden = false;  
        }
        console.log('here');
        if (!(delSlide instanceof HTMLElement))
            return;
            console.log('here1');
       
        delSlide.remove();    
    }
    
    _handleClick(event : Event){
        const target = event.target;
		if (!(target instanceof HTMLButtonElement))
			return;
		const value = target.dataset.value;
        if(!value)  
            return;
		this.doAction(value);
    }

    createNewSlide(){
        const allSlides = document.querySelectorAll('div.Slides > div');
        for (const oneSlide of allSlides)
        {
            if(!(oneSlide instanceof HTMLElement))
                return;
            oneSlide.hidden = true;
        }
        const location = document.getElementById('Slides');
        const newSlide = document.createElement('div');
        if(!(location instanceof HTMLElement))
            return;
        newSlide.setAttribute('id', this.newSquare.toString() + 'square');
        newSlide.classList.add('square');
        location.append(newSlide);
        this.createImage(this.newSquare.toString() + 'square');
        this.createTxt(this.newSquare.toString() + 'square');
        this.pickColor(this.newSquare.toString() + 'square');
        this.currentSlide = this.newSquare;
        this.newSquare++;  
    }

    createImage(slideID : string) {
        const loadBut = document.getElementById("pict");
        const butBut = document.getElementById("pictBut");
        const output = document.getElementById(slideID);

        if(!(loadBut instanceof HTMLInputElement)) 
            return;
        if(!(butBut instanceof HTMLButtonElement)) 
            return;    
        if(!(output instanceof HTMLElement)) 
            return;       


        butBut.addEventListener("click", function () {
            const oneSlide = document.getElementById(slideID);
            if(!(oneSlide instanceof HTMLElement))
                 return;   
            if(oneSlide.hidden === true)
                return;
            loadBut.click();
        });

        const self = this;

        loadBut.addEventListener("change", function(event){
            const oneSlide = document.getElementById(slideID);
            if(!(oneSlide instanceof HTMLElement))
                 return;   
            if(oneSlide.hidden === true)
                return;
            const newImg = document.createElement('img');
            const newDiv = document.createElement('div');

            newDiv.classList.add("pic_container");
            const newNw = document.createElement('div');
            const newNe = document.createElement('div');
            const newSw = document.createElement('div');
            const newSe = document.createElement('div');

            newNw.classList.add("resizer", "nw");
            newNe.classList.add("resizer", "ne");
            newSw.classList.add("resizer", "sw");
            newSe.classList.add("resizer", "se");

            newDiv.append(newNw);
            newDiv.append(newNe);
            newDiv.append(newSw);
            newDiv.append(newSe);

            const curFile  = event.target;
            if(!(curFile instanceof HTMLInputElement))
                return;
            
            const puk = curFile.files;

            if(!(puk))
                return;

            newImg.src = URL.createObjectURL(puk[0]);
            newImg.classList.add("imgProperty");
            newImg.setAttribute('draggable', 'false');

            newDiv.append(newImg);
            output.append(newDiv);

            newDiv.addEventListener('mousedown', function mousedown(event) {
                let prevX = event.clientX;
                let prevY = event.clientY;

                if (self.isResizableImg)
                    return;

                output.addEventListener('mousemove', function mousemove(event) {

                    let newX = prevX - event.clientX;
                    let newY = prevY - event.clientY;

                    const rect = newDiv.getBoundingClientRect();

                    newDiv.style.left = rect.left - newX + "px";
                    newDiv.style.top = rect.top - newY + "px";

                    prevX = event.clientX;
                    prevY = event.clientY;

                    this.addEventListener('mouseup', function mouseup(_event) {
                        this.removeEventListener('mousemove', mousemove);
                        this.removeEventListener('mouseup', mouseup);
                    });
                });
            });


            newNw.addEventListener('mousedown', function mousedown(event) {
                self.isResizableImg = true;
                let prevX = event.clientX;
                let prevY = event.clientY;
                output.addEventListener('mousemove', function mousemove(event) {
                    const rect = newDiv.getBoundingClientRect();
                    newDiv.style.width = rect.width + (prevX - event.clientX) + "px";
                    newDiv.style.height = rect.height + (prevY - event.clientY) + "px";
                    newDiv.style.top = rect.top - (prevY - event.clientY) + "px";
                    newDiv.style.left = rect.left - (prevX - event.clientX) + "px";
                    prevX = event.clientX;
                    prevY = event.clientY;

                    this.addEventListener('mouseup', function mouseup(_event) {
                        this.removeEventListener('mousemove', mousemove);
                        this.removeEventListener('mouseup', mouseup);
                        self.isResizableImg = false;
                    });
                });
            });

            newSe.addEventListener('mousedown', function mousedown(event) {
                self.isResizableImg = true;
                let prevX = event.clientX;
                let prevY = event.clientY;
                output.addEventListener('mousemove', function mousemove(event) {
                    const rect = newDiv.getBoundingClientRect();
                    newDiv.style.width = rect.width - (prevX - event.clientX) + "px";
                    newDiv.style.height = rect.height - (prevY - event.clientY) + "px";
                    prevX = event.clientX;
                    prevY = event.clientY;

                    this.addEventListener('mouseup', function mouseup(_event) {
                        this.removeEventListener('mousemove', mousemove);
                        this.removeEventListener('mouseup', mouseup);
                        self.isResizableImg = false;
                    });
                });
            });

            newNe.addEventListener('mousedown', function mousedown(event) {
                self.isResizableImg = true;
                let prevX = event.clientX;
                let prevY = event.clientY;
                output.addEventListener('mousemove', function mousemove(event) {
                    const rect = newDiv.getBoundingClientRect();
                    newDiv.style.width = rect.width - (prevX - event.clientX) + "px";
                    newDiv.style.height = rect.height + (prevY - event.clientY) + "px";
                    newDiv.style.top = rect.top - (prevY - event.clientY) + "px";
                    prevX = event.clientX;
                    prevY = event.clientY;

                    this.addEventListener('mouseup', function mouseup(_event) {
                        this.removeEventListener('mousemove', mousemove);
                        this.removeEventListener('mouseup', mouseup);
                        self.isResizableImg = false;
                    });
                });
            });

            newSw.addEventListener('mousedown', function mousedown(event) {
                self.isResizableImg = true;
                let prevX = event.clientX;
                let prevY = event.clientY;
                output.addEventListener('mousemove', function mousemove(event) {
                    const rect = newDiv.getBoundingClientRect();
                    newDiv.style.width = rect.width + (prevX - event.clientX) + "px";
                    newDiv.style.height = rect.height - (prevY - event.clientY) + "px";
                    newDiv.style.left = rect.left - (prevX - event.clientX) + "px";
                    prevX = event.clientX;
                    prevY = event.clientY;

                    this.addEventListener('mouseup', function mouseup(_event) {
                        this.removeEventListener('mousemove', mousemove);
                        this.removeEventListener('mouseup', mouseup);
                        self.isResizableImg = false;
                    });
                });
            });
        });
    }

    createTxt(slideID : string) {
        const butButTect = document.getElementById("tectBut");
        const output = document.getElementById(slideID);
        const self = this;

        if(!(butButTect instanceof HTMLButtonElement))
            return;
        if(!(output instanceof HTMLElement))
            return;    


        butButTect.addEventListener("click", function () {
            const oneSlide = document.getElementById(slideID);
            if(!(oneSlide instanceof HTMLElement))
                 return;   
            if(oneSlide.hidden === true)
                return;

            const newDiv = document.createElement('div');
            const newText = document.createElement('textarea');
            newText.setAttribute('draggable', 'false');

            newDiv.classList.add("editable");
            newDiv.append(newText);
            output.append(newDiv);

            newDiv.style.width = newText.clientWidth.toString();
            newDiv.style.height = newText.clientHeight.toString();

            newText.addEventListener('mousedown', function mousedown(_event){
                self.isResizableTxt = true;
                this.addEventListener('mousemove', function mousemove(){
                    self.isResizableTxt = true;
                    newDiv.style.height = newText.clientHeight + 50 + 'px';
                    this.addEventListener('mouseup', function mouseup(_event) { // здесь необходимо мнять эквент листенер с маусмув, который обьявлен в др. месте и типа не существует 
                        this.removeEventListener('mousemove', mousemove);
                        this.removeEventListener('mouseup', mouseup);
                        self.isResizableTxt = false;
                    });
                });
            });

            output.addEventListener('click', function click(){
                const oneSlide = document.getElementById(slideID);
                if(!(oneSlide instanceof HTMLElement))
                     return;   
                if(oneSlide.hidden === true)
                    return;


                self.isResizableTxt = false;
            });

            newDiv.addEventListener('mousedown', function mousedown(event) {
                const oneSlide = document.getElementById(slideID);
                if(!(oneSlide instanceof HTMLElement))
                     return;   
                if(oneSlide.hidden === true)
                    return;


                if(self.isResizableTxt)
                    return;
                let prevX = event.clientX;
                let prevY = event.clientY;

                output.addEventListener('mousemove', function mousemove(event) {
                    if(self.isResizableTxt)
                    return;
                    let newX = prevX - event.clientX;
                    let newY = prevY - event.clientY;

                    const rect = newDiv.getBoundingClientRect();

                    newDiv.style.left = rect.left - newX + "px";
                    newDiv.style.top = rect.top - newY + "px";

                    prevX = event.clientX;
                    prevY = event.clientY;

                    this.addEventListener('mouseup', function mouseup(_event) { // здесь необходимо мнять эквент листенер с маусмув, который обьявлен в др. месте и типа не существует 
                        this.removeEventListener('mousemove', mousemove);
                        this.removeEventListener('mouseup', mouseup);
                    });
                });
            });
        });
    }

    pickColor(slideID : string) {
        const colBut = document.getElementById("colour");
        const output = document.getElementById(slideID);

        if(!(colBut instanceof HTMLInputElement))
            return;
        if(!(output instanceof HTMLElement))    
            return;

        colBut.addEventListener("change", function (event) {
            const oneSlide = document.getElementById(slideID);
            if(!(oneSlide instanceof HTMLElement))
                 return;   
            if(oneSlide.hidden === true)
                return;
            const curHTMLElement = event.target as HTMLInputElement;
            output.style.backgroundColor = curHTMLElement.value;
        });
    }

}


