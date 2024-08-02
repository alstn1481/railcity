document.addEventListener("DOMContentLoaded", ()=>{

    const slide = document.getElementById("slide");

    const toLeft = () => {
        slide.style.left = "-100%";
        slide.style.transition = "left 1s";

        setTimeout(append, 1000);
    };
    const append = ()=> {
        slide.style.transition = "none";
        slide.append(slide.children[0]);
        slide.style.left = 0;
        
    };

    setInterval(toLeft, 2500);

    /*******************************************/
    const partner = document.querySelector("footer select")
    partner.addEventListener("change", (e)=> {
        const url = e.target.value;
        if (url != "") {
            window.open(url);
        }
    });

    /*******************************************/

    const notice_li = document.querySelectorAll("#notice li");
    const popup = document.getElementById("popup");
    const btn = document.querySelector("#popup button"); 



    let p = 0;
    const pop = () => {
        if( p == 0 ) {
            popup.classList.add("show");
            p = 1;
        } else {
            popup.classList.remove("show");
            p = 0;
        };
    };



    notice_li.forEach(i => {
        i.children[0].addEventListener("click", pop);
    });
    btn.addEventListener("click", pop);



});///////////////////////전체 끝