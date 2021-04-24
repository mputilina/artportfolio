       class Control{

        constructor(){
            this.run();
            this.run1();
            this.run2();
        }

        run(){
            const loadBut = document.getElementById("pict");
            const butBut = document.getElementById("pictBut");
            const output = document.getElementById('square');

            butBut.addEventListener("click", function(){
                loadBut.click();
            });  

            loadBut.addEventListener("change", loadFile => {
                const newDiv = document.createElement('img');
                newDiv.src = URL.createObjectURL(event.target.files[0]);
                newDiv.classList.add("imgProperty");
                newDiv.setAttribute('draggable','false');
                output.append(newDiv);
                newDiv.addEventListener('mousedown', function mousedown(event){
                    let prevX = event.clientX;
                    let prevY = event.clientY;
            
                    output.addEventListener('mousemove', function mousemove(event){
                        let newX = prevX - event.clientX;
                        let newY = prevY - event.clientY;

                        const rect = event.target.getBoundingClientRect();

                        event.target.style.left = rect.left - newX + "px";
                        event.target.style.top = rect.top - newY + "px";

                        prevX = event.clientX;
                        prevY = event.clientY;

                        this.addEventListener('mouseup', function mouseup(_event){ // здесь необходимо мнять эквент листенер с маусмув, который обьявлен в др. месте и типа не существует 
                            this.removeEventListener('mousemove', mousemove);
                            this.removeEventListener('mouseup', mouseup);
                        });
                    });
                });
            }); 
        }

        run1(){
        const butButTect = document.getElementById("tectBut");
        const output = document.getElementById('square');
        butButTect.addEventListener("click", function(){
            const newDiv = document.createElement('textarea');
            newDiv.setAttribute('placeholder', "Введите текст");
            output.append(newDiv);
            newDiv.addEventListener('mousedown', function mousedown(event){
                let prevX = event.clientX;
                let prevY = event.clientY;
        
                output.addEventListener('mousemove', function mousemove(event){
                    let newX = prevX - event.clientX;
                    let newY = prevY - event.clientY;

                    const rect = event.target.getBoundingClientRect();

                    event.target.style.left = rect.left - newX + "px";
                    event.target.style.top = rect.top - newY + "px";

                    prevX = event.clientX;
                    prevY = event.clientY;

                    this.addEventListener('mouseup', function mouseup(_event){ // здесь необходимо мнять эквент листенер с маусмув, который обьявлен в др. месте и типа не существует 
                        this.removeEventListener('mousemove', mousemove);
                        this.removeEventListener('mouseup', mouseup);
                    });
                });
            });
        });
        
        
        
       }

       run2(){
        const colBut = document.getElementById("colour");
        const output = document.getElementById('square');

        colBut.addEventListener("change", function (){
            output.style.backgroundColor = event.target.value;
        });
       }

       }
       new Control();
       
 /*       
        dragElement(document.getElementById("mydiv"));

        function dragElement(elmnt){
            var pos1=0, pos2=0, pos3=0, pos4=0;
            if(document.getElementById(elmnt.id+"header")){
                document.getElementById(elmnt.id+"header").onmousedown = dragMouseDown;
            }
            else{
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e){
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e){
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;

                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement(){
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }


        function addFields(){
            // Container <div> where dynamic content will be placed
            let container = document.getElementById("container");
            
                // Append a node with a random text
                container.appendChild(document.createTextNode("Member"));
                // Create an <input> element, set its type and name attributes
                let input = document.createElement("input");
                input.type = "text";
                input.name = "member";
                container.appendChild(input);
                // Append a line break 
                container.appendChild(document.createElement("br"));
        }


        function createTxt(){
            let parent = document.getElementById(square);
            let child = document.createElement("input");
            child.innerHTML = "Введите текст";
            parent.append(child);
        }

        function createTxt(){
            let parent = document.getElementById(square);
            let child = document.createElement("input");
            child.innerHTML = "Введите текст";
            parent.append(child);
        }
*/