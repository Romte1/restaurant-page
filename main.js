(()=>{"use strict";const e=()=>{document.querySelector("#content").innerHTML=""},t=()=>{const t=document.querySelector(".home"),o=document.querySelector(".menu"),a=document.querySelector(".about");t.addEventListener("click",(()=>{e(),n()})),o.addEventListener("click",(()=>{e()})),a.addEventListener("click",(()=>{e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("h2"),o=document.createElement("h2"),a=document.createElement("h2"),d=document.createElement("h2"),r=document.createElement("p"),l=document.createElement("p"),p=document.createElement("p"),c=document.createElement("p"),i=document.createElement("p"),m=document.createElement("label"),u=document.createElement("input"),s=document.createElement("label"),h=document.createElement("input");t.textContent="Contact Us",r.textContent="Thank you for your interest in this restaurant!. We're thrilled to hear from you!",n.textContent="Phone:",l.textContent="(555) 123-4567",o.textContent="Email:",p.textContent="info@thisrestaurant.com",a.textContent="Reservation:",c.textContent="For reservations, please call us during business hours or use our online reservation system.",d.textContent="General Inquiries:",i.textContent="For general inquiries, feedback, or special requests, please fill out the form below, and we'll get back to you as soon as possible.",m.textContent="Name:",m.setAttribute("for","name"),u.setAttribute("id","name"),s.textContent="Email:",s.setAttribute("for","email"),h.setAttribute("id","email"),e.appendChild(t),e.appendChild(r),e.appendChild(n),e.appendChild(l),e.appendChild(o),e.appendChild(p),e.appendChild(a),e.appendChild(c),e.appendChild(d),e.appendChild(i),e.appendChild(m),e.appendChild(u),e.appendChild(s),e.appendChild(h)})()}))},n=function(){(function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("h1"),a=document.createElement("p"),d=document.createElement("h2"),r=document.createElement("div"),l=document.createElement("h2"),p=document.createElement("div");o.textContent="Welcome to this restaurant!",a.textContent="We are a restaurant that loves everything about food, and we try our best so you leave this place loving it as much as we do!",d.textContent="Schedule",l.textContent="Where to find us",r.innerHTML="<p>Mon 9am-10pm</p>\n    <p>Thu 9am-10pm</p>\n    <p>Wed 9am-10pm</p>\n    <p>Tur 9am-10pm</p>\n    <p>Fri 9am-10pm</p>\n    <p>Sat 9am-10pm</p>\n    <p>Sun 10am-3pm</p>",p.innerHTML="<p>624 Westminster Street\n    Rosedale, NY 11422</p>\n<p>60 Howard Street\n    Osseo, MN 55311</p>\n<p>789 North Division Drive\n    Detroit, MI 48205</p>",t.appendChild(o),n.appendChild(a),n.appendChild(d),n.appendChild(r),n.appendChild(l),n.appendChild(p),e.appendChild(t),e.appendChild(n),console.log("hello!")})(),t()};n()})();