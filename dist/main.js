(()=>{"use strict";const e=()=>{document.querySelector("#content").innerHTML=""},t=()=>{const t=document.querySelector(".home"),l=document.querySelector(".menu"),i=document.querySelector(".about");t.addEventListener("click",(()=>{e(),n()})),l.addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("h2"),l=document.createElement("p");t.textContent="Menu",n.textContent="Beverages",l.innerHTML='\n<div class="section">\n  <h3>Hot Beverages:</h3>\n  <ul>\n    <li>Coffee</li>\n    <ul>\n      <li>Espresso: $2.50</li>\n      <li>Cappuccino: $3.00</li>\n      <li>Latte: $3.50</li>\n      <li>Mocha: $4.00</li>\n    </ul>\n    <li>Tea</li>\n    <ul>\n      <li>English Breakfast: $2.00</li>\n      <li>Earl Grey: $2.00</li>\n      <li>Green Tea: $2.00</li>\n      <li>Chai Latte: $3.50</li>\n    </ul>\n    <li>Hot Chocolate</li>\n    <ul>\n      <li>Classic Hot Chocolate: $3.50</li>\n      <li>White Hot Chocolate: $4.00</li>\n      <li>Mexican Hot Chocolate: $4.50</li>\n    </ul>\n  </ul>\n</div>\n\n<div class="section">\n  <h3>Cold Beverages:</h3>\n  <ul>\n    <li>Iced Coffees</li>\n    <ul>\n      <li>Iced Coffee: $3.00</li>\n      <li>Iced Latte: $3.50</li>\n      <li>Iced Mocha: $4.00</li>\n    </ul>\n    <li>Iced Teas</li>\n    <ul>\n      <li>Classic Iced Tea: $2.00</li>\n      <li>Green Iced Tea: $2.00</li>\n      <li>Fruit Infused Iced Tea: $3.00</li>\n    </ul>\n    <li>Smoothies</li>\n    <ul>\n      <li>Berry Blast: $4.00</li>\n      <li>Tropical Paradise: $4.50</li>\n      <li>Green Goddess: $4.50</li>\n      <li>Protein Power: $5.00</li>\n    </ul>\n  </ul>\n</div>',e.appendChild(t),e.appendChild(n),e.appendChild(l)})()})),i.addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("h2"),l=document.createElement("h2"),i=document.createElement("h2"),o=document.createElement("h2"),a=document.createElement("p"),d=document.createElement("p"),r=document.createElement("p"),c=document.createElement("p"),u=document.createElement("p"),p=document.createElement("form"),m=document.createElement("label"),s=document.createElement("input"),h=document.createElement("label"),C=document.createElement("input"),E=document.createElement("label"),v=document.createElement("input"),f=document.createElement("textarea"),x=document.createElement("button");t.textContent="Contact Us",a.textContent="Thank you for your interest in this restaurant!. We're thrilled to hear from you!",n.textContent="Phone:",d.textContent="(555) 123-4567",l.textContent="Email:",r.textContent="info@thisrestaurant.com",i.textContent="Reservation:",c.textContent="For reservations, please call us during business hours or use our online reservation system.",o.textContent="General Inquiries:",u.textContent="For general inquiries, feedback, or special requests, please fill out the form below, and we'll get back to you as soon as possible.",m.textContent="Name:",m.setAttribute("for","name"),s.setAttribute("id","name"),h.textContent="Email:",h.setAttribute("for","email"),C.setAttribute("id","email"),E.textContent="Phone:",E.setAttribute("for","phone"),v.setAttribute("id","phone"),f.setAttribute("placeholder","Place here anything you wanna tell us!"),x.textContent="Submit!",e.appendChild(t),e.appendChild(a),e.appendChild(n),e.appendChild(d),e.appendChild(l),e.appendChild(r),e.appendChild(i),e.appendChild(c),e.appendChild(o),e.appendChild(u),p.appendChild(m),p.appendChild(s),p.appendChild(h),p.appendChild(C),p.appendChild(E),p.appendChild(v),p.appendChild(f),p.appendChild(x),e.appendChild(p)})()}))},n=function(){(function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),l=document.createElement("h1"),i=document.createElement("p"),o=document.createElement("h2"),a=document.createElement("div"),d=document.createElement("h2"),r=document.createElement("div");l.textContent="Welcome to this restaurant!",i.textContent="We are a restaurant that loves everything about food, and we try our best so you leave this place loving it as much as we do!",o.textContent="Schedule",d.textContent="Where to find us",a.innerHTML="<p>Mon 9am-10pm</p>\n    <p>Thu 9am-10pm</p>\n    <p>Wed 9am-10pm</p>\n    <p>Tur 9am-10pm</p>\n    <p>Fri 9am-10pm</p>\n    <p>Sat 9am-10pm</p>\n    <p>Sun 10am-3pm</p>",r.innerHTML="<p>624 Westminster Street\n    Rosedale, NY 11422</p>\n<p>60 Howard Street\n    Osseo, MN 55311</p>\n<p>789 North Division Drive\n    Detroit, MI 48205</p>",t.appendChild(l),n.appendChild(i),n.appendChild(o),n.appendChild(a),n.appendChild(d),n.appendChild(r),e.appendChild(t),e.appendChild(n),console.log("hello!")})(),t()};n()})();