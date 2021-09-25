window.addEventListener('DOMContentLoaded', function () {
    let main = document.querySelector(".main"),
        popupBtn = document.querySelector(".popup-btn"),
        custom = document.querySelector(".custom"),
        overlay = document.querySelector(".overlay"),
        customChild = custom.childNodes;


    let man_img = document.getElementById("male"),
        woman_img = document.getElementById("female"),

        personSkin = document.getElementById("person-skin"),
        personClothes = document.getElementById("person-clothes"),
        personHair = document.getElementById("person-hair");
     
    let prevHair = document.querySelector(".hair .prev"),
        // hairStyle = document.getElementsByTagName("hair-style")
        hairStyle = document.querySelectorAll(".hair-style")
        nextHair = document.querySelector(".hair .next")
        console.log(hairStyle)





    //CLEAR
    popupBtn.addEventListener("click", function (event) {

        let target = event.target;
        overlay.style.display = "none";
        main.style.display = "none"

        custom.style.display = "flex";
        for (let i = 1; i < customChild.length; i += 2) {
            customChild[i].style.display = "block";

        }


    })


    // MAN 

    man_img.addEventListener("click", function (event) {
        let target = event.target;
        personSkin.style.backgroundImage = "url('./img/skin/skin-1.png')";
        personClothes.style.backgroundImage = "url('./img/clothes/construct/clothes-1.png')";
        personHair.style.backgroundImage = "url('./img/hair/construct/hair-1.png')";
        console.log("MAN")
    })
    
    // WOMAN 

    woman_img.addEventListener("click", function (event) {
        let target = event.target;
        personSkin.style.backgroundImage = "url('./img/skin/skin-4.png')";
        personClothes.style.backgroundImage = "url('./img/clothes/construct/clothes-4.png')";
        personHair.style.backgroundImage = "url('./img/hair/construct/hair-4.png')";
        console.log("WOMAN")
    })

let count = 1;

    prevHair.addEventListener("click",function (event) {
        // count -=1;
        console.log("PREV")
        
   
        
    if (count >= 1 && count <=3 ) {
            
            console.log(count)
            console.log("IF WORKS")
            hairStyle[0].style.backgroundImage = `url('./img/hair/slide/hair-${count}.png')`
            count -=1;
    } else {
            console.log("ELSE")
            count = 3
            hairStyle[0].style.backgroundImage = `url('./img/hair/slide/hair-${count}.png')`
            count-=1
            console.log(count)
        // count += 1; 
        // console.log(count)
    }

    })
    
    nextHair.addEventListener("click",function (event) {
        count +=1;
        console.log("NEXT")
        console.log(count + " = " + count )
     
      
       
        if (count >= 1 && count <=3  ) {
            console.log("IF WORKS")
            hairStyle[0].style.backgroundImage = `url('./img/hair/slide/hair-${count}.png')`
        } else {
            count -= 1 ;
        }
        // hairStyle[0].style.backgroundImage = "url('./img/hair/slide/hair-2.png')"
        // hairStyle[1].style.backgroundImage = "url('./img/hair/slide/hair-3.png')"

        // document.getElementById("_1234").checked = true;
    })

})