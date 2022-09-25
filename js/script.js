const init = (itemc, value) => {
    // container
    const items = Array.from(document.querySelectorAll(`.${itemc}`))
    
    let newContent =`
                <div class="grid-unit col-xs-12 cigar-item clearfix disabled">
                    <div class="cigar-wrapper clearfix accordion-header">
                        <img
                            src="assets/cigars_img/hide_cigar.jpg"
                            alt="disabled" />
                        
                        <div class="cigar-ratings-bar clearfix">
                            <div class="cigar-rating clearfix"><strong>...</strong>
                                <em>...</em>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-content">
                        
                        <h4>....</h4>
                        <p>&nbsp;</p>
                        <h4 style="text-align: center;">
                            ....
                        </h4>
                        <p>&nbsp;</p>													
                        
                    </div>
                </div>`;
    // item 
    items.forEach((itemc) => {
        //
        const box = Array.from(itemc.querySelectorAll('.accordion-itemc'))

        box.forEach((elem, index) => {
            var a = new Date();
            var r = a.getDate();
            var d = index + 1
            if (d > r ) {    
                elem.classList.remove('accordion-itemc');            
                elem.innerHTML = newContent;
                //console.log(`The index for ${elem.getElementsByTagName("h3")[0].textContent} is ${d}, day is ${r}`);
                //console.log(elem.classList)
            }
            if (d == r ) {
                elem.scrollIntoView({block: "center"});    
                elem.classList.toggle('active');            
                
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
