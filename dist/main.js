(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("h1"),l=document.createElement("p"),a=document.createElement("h2"),o=document.createElement("div"),r=document.createElement("h2"),d=document.createElement("div");i.textContent="Welcome to this restaurant!",l.textContent="We are a restaurant that loves everything about food, and we try our best so you leave this place loving it as much as we do!",a.textContent="Schedule",r.textContent="Where to find us",o.innerHTML="<p>Mon 9am-10pm</p>\n    <p>Thu 9am-10pm</p>\n    <p>Wed 9am-10pm</p>\n    <p>Tur 9am-10pm</p>\n    <p>Fri 9am-10pm</p>\n    <p>Sat 9am-10pm</p>\n    <p>Sun 10am-3pm</p>",d.innerHTML="<p>624 Westminster Street\n    Rosedale, NY 11422</p>\n<p>60 Howard Street\n    Osseo, MN 55311</p>\n<p>789 North Division Drive\n    Detroit, MI 48205</p>",t.appendChild(i),n.appendChild(l),n.appendChild(a),n.appendChild(o),n.appendChild(r),n.appendChild(d),e.appendChild(t),e.appendChild(n)},t=()=>{document.querySelector("#content").innerHTML=""},n=()=>{const e=document.querySelector(".home"),n=document.querySelector(".menu"),l=document.querySelector(".about");e.addEventListener("click",(()=>{t(),i.homePage()})),n.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("h2"),i=document.createElement("p"),l=document.createElement("h2"),a=document.createElement("p"),o=document.createElement("h2"),r=document.createElement("p");t.textContent="Menu",n.textContent="Beverages",i.innerHTML='\n<div class="section">\n  <h3>Hot Beverages</h3>\n  <ul>\n    <li>Coffee</li>\n    <ul>\n      <li>Espresso: $2.50</li>\n      <li>Cappuccino: $3.00</li>\n      <li>Latte: $3.50</li>\n      <li>Mocha: $4.00</li>\n    </ul>\n    <li>Tea</li>\n    <ul>\n      <li>English Breakfast: $2.00</li>\n      <li>Earl Grey: $2.00</li>\n      <li>Green Tea: $2.00</li>\n      <li>Chai Latte: $3.50</li>\n    </ul>\n    <li>Hot Chocolate</li>\n    <ul>\n      <li>Classic Hot Chocolate: $3.50</li>\n      <li>White Hot Chocolate: $4.00</li>\n      <li>Mexican Hot Chocolate: $4.50</li>\n    </ul>\n  </ul>\n</div>\n\n<div class="section">\n  <h3>Cold Beverages</h3>\n  <ul>\n    <li>Iced Coffees</li>\n    <ul>\n      <li>Iced Coffee: $3.00</li>\n      <li>Iced Latte: $3.50</li>\n      <li>Iced Mocha: $4.00</li>\n    </ul>\n    <li>Iced Teas</li>\n    <ul>\n      <li>Classic Iced Tea: $2.00</li>\n      <li>Green Iced Tea: $2.00</li>\n      <li>Fruit Infused Iced Tea: $3.00</li>\n    </ul>\n    <li>Smoothies</li>\n    <ul>\n      <li>Berry Blast: $4.00</li>\n      <li>Tropical Paradise: $4.50</li>\n      <li>Green Goddess: $4.50</li>\n      <li>Protein Power: $5.00</li>\n    </ul>\n  </ul>\n</div>',l.textContent="Dishes",a.innerHTML='\n    <div class="section">\n      <h3>Appetizers</h3>\n      <ul>\n        <li>Soup of the Day - $5.99</li>\n        <li>Garden Salad - Mixed greens, tomatoes, cucumbers, balsamic vinaigrette - $6.99</li>\n        <li>Garlic Bread - Toasted baguette with garlic butter - $4.99</li>\n      </ul>\n    </div>\n    <div class="section">\n      <h3>Main Courses</h3>\n      <ul>\n        <li>Grilled Chicken Breast - Served with steamed vegetables and choice of side - $10.99</li>\n        <li>Spaghetti Bolognese - Homemade meat sauce, served with garlic bread - $12.99</li>\n        <li>Vegetarian Stir-Fry - Assorted vegetables stir-fried in a savory sauce, served with rice - $11.99</li>\n      </ul>\n    </div>\n\n    ',o.textContent="Desserts",r.innerHTML='\n    <div class="section">\n    <h3>Ice Creams</h3>\n    <ul>\n      <li>Classic Vanilla - $3.99</li>\n      <li>Chocolate - $3.99</li>\n      <li>Strawberry - $3.99</li>\n      <li>Mint Chocolate Chip - $4.49</li>\n      <li>Cookies and Cream - $4.49</li>\n      <li>Rocky Road - $4.49</li>\n      <li>Pistachio - $4.49</li>\n      <li>Coffee - $4.49</li>\n      <li>Butter Pecan - $4.49</li>\n      <li>Neapolitan (per serving with all three flavors) - $4.49</li>\n    </ul>\n    \n    <h3>Other Desserts</h3>\n    <ul>\n      <li>Chocolate Fudge Cake - $5.99 per slice</li>\n      <li>Strawberry Cheesecake - $4.99 per slice</li>\n      <li>Tiramisu - $6.99 per serving</li>\n      <li>Apple Pie - $3.49 per slice</li>\n      <li>Banoffee Pie - $5.49 per slice</li>\n      <li>Red Velvet Cupcake - $2.49 each</li>\n      <li>Chocolate Chip Cookies - $1.99 for 3 cookies</li>\n      <li>Fruit Salad - $4.99 per serving</li>\n      <li>Brownie Sundae - $7.99</li>\n      <li>Key Lime Pie - $4.49 per slice</li>\n      <li>Peach Cobbler - $5.99 per serving</li>\n      <li>Creme Brulee - $6.49 per serving</li>\n      <li>Chocolate Mousse - $4.99 per serving</li>\n      <li>Raspberry Sorbet - $3.99 per scoop</li>\n    </ul>\n  </div>',e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(l),e.appendChild(a),e.appendChild(o),e.appendChild(r)})()})),l.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("h2"),i=document.createElement("h2"),l=document.createElement("h2"),a=document.createElement("h2"),o=document.createElement("p"),r=document.createElement("p"),d=document.createElement("p"),c=document.createElement("p"),s=document.createElement("p"),p=document.createElement("form"),u=document.createElement("label"),m=document.createElement("input"),h=document.createElement("label"),C=document.createElement("input"),v=document.createElement("label"),$=document.createElement("input"),E=document.createElement("textarea"),b=document.createElement("button"),f=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div");t.textContent="Contact Us",o.textContent="Thank you for your interest in this restaurant!. We're thrilled to hear from you!",n.textContent="Phone:",r.textContent="(555) 123-4567",i.textContent="Email:",d.textContent="info@thisrestaurant.com",l.textContent="Reservation:",c.textContent="For reservations, please call us during business hours or use our online reservation system.",a.textContent="General Inquiries:",s.textContent="For general inquiries, feedback, or special requests, please fill out the form below, and we'll get back to you as soon as possible.",u.textContent="Name:",u.setAttribute("for","name"),m.setAttribute("id","name"),h.textContent="Email:",h.setAttribute("for","email"),C.setAttribute("id","email"),v.textContent="Phone:",v.setAttribute("for","phone"),$.setAttribute("id","phone"),E.setAttribute("placeholder","Place here anything you wanna tell us!"),b.textContent="Submit!",p.addEventListener("submit",(e=>{e.preventDefault(),m.value="",C.value="",$.value="",E.value="",alert("Thanks for sending us this message, we appreciate your interest and will take it into account")})),e.appendChild(t),e.appendChild(o),e.appendChild(n),e.appendChild(r),e.appendChild(i),e.appendChild(d),e.appendChild(l),e.appendChild(c),e.appendChild(a),e.appendChild(s),f.appendChild(u),f.appendChild(m),g.appendChild(h),g.appendChild(C),y.appendChild(v),y.appendChild($),p.appendChild(f),p.appendChild(g),p.appendChild(y),p.appendChild(E),p.appendChild(b),e.appendChild(p)})()}))},i={initialPage:function(){e(),n()},homePage:function(){e()}};i.initialPage()})();