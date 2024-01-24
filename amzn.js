const dropdownbtn = document.querySelectorAll(".dropdownbtn")
const dropdownbox = document.querySelectorAll(".dropdownbox")



dropdownbtn.forEach((dropb,index)=>{
    dropb.addEventListener("mouseover",()=>{

        dropdownbox[index].classList.remove("active")
    })
    dropb.addEventListener("mouseout",()=>{

        dropdownbox[index].classList.add("active")
    })
})