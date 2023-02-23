const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closeBtn=document.querySelector("#close-btn");
const themeToggler= document.querySelector(".theme-toggler")

menuBtn.addEventListener("click",()=>{
    sideMenu.style.display="block";
});

closeBtn.addEventListener("click",()=>{
    sideMenu.style.display="none";
});

//Change theme

themeToggler.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active")
});

// Table

Orders.forEach((order,index)=>{
    const tr=document.createElement("tr");
    const trContent=`
                    <td>${order.ProductName}</td>
                    <td>${order.ProductNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td ${order.shipping==="Declined"?"danger":order.shipping==="pending"?"warning":"primary"}>${order.shipping}</td>
                    <td class="primary">Details</td>
                    `

    tr.innerHTML=trContent;
    document.querySelector("table tbody").appendChild(tr);              
})
