const init = (itemc, value) => {
    // container
    const items = Array.from(document.querySelectorAll(`.${itemc}`))
    
    const chidden = Array.from(document.querySelectorAll('.c_hidden'))
    
    var a = new Date();
    var r = a.getDate();
    var m = a.getMonth();
    console.log(m)
    
    if (r > 1 && m == 10) {   
        chidden[0].classList.remove('c_hidden');        
        
    }
    
    // item 
    items.forEach((itemc) => {
        //
        const box = Array.from(itemc.querySelectorAll('.accordion-itemc'))

        box.forEach((elem, index) => {            
            var d = index + 1
            
            if (d <= r  && m == 10) {    
                elem.classList.remove('disabled-itemc');            
                elem.childNodes[1].innerHTML = `<img src="assets/cigars_img/DAY_${d}.png" />`

                //console.log(`The index for ${elem.getElementsByTagName("h3")[0].textContent} is ${d}, day is ${r}`);
                //console.log(elem.classList)
            } else {
                elem.classList.remove('accordion-itemc'); 
            }
            
            if (d == r ) {   
                elem.classList.toggle('active');
                elem.querySelector(".accordion-content").scrollIntoView({block: "center"});             
                
            }
            
        });

        box.forEach(header => {
            header.addEventListener('click', (e) => {
                if (value) {
                    box.forEach(itemc => itemc.classList.remove('active'))
                }
                header.classList.toggle('active')
            })
        })
    })
}


document.addEventListener('DOMContentLoaded', (e) => {
    init('accordion', true)
});