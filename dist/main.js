(()=>{"use strict";(function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("h1"),p=document.createElement("p"),a=document.createElement("h2"),d=document.createElement("div"),m=document.createElement("h2"),r=document.createElement("div");o.textContent="Welcome to this restaurant!",p.textContent="We are a restaurant that loves everything about food, and we try our best so you leave this place loving it as much as we do!",a.textContent="Schedule",m.textContent="Where to find us",d.innerHTML="<p>Mon 9am-10pm</p>\n    <p>Thu 9am-10pm</p>\n    <p>Wed 9am-10pm</p>\n    <p>Tur 9am-10pm</p>\n    <p>Fri 9am-10pm</p>\n    <p>Sat 9am-10pm</p>\n    <p>Sun 10am-3pm</p>",r.innerHTML="<p>624 Westminster Street\n    Rosedale, NY 11422</p>\n<p>60 Howard Street\n    Osseo, MN 55311</p>\n<p>789 North Division Drive\n    Detroit, MI 48205</p>",t.appendChild(o),n.appendChild(p),n.appendChild(a),n.appendChild(d),n.appendChild(m),n.appendChild(r),e.appendChild(t),e.appendChild(n),console.log("hello!")})(),(()=>{const e=document.querySelector(".home");document.querySelector(".menu"),document.querySelector(".about"),e.addEventListener("click",(()=>{alert("hola")}))})()})();