const products = [
{"file":"https://images.pexels.com/photos/20777170/pexels-photo-20777170.jpeg?auto=compress&cs=tinysrgb&w=900","name":"Elegant Navy Blue Shalwar Kameez","price":"PKR 4,500","category":"dress","desc":"A beautiful traditional Pakistani shalwar kameez with dupatta."},
{"file":"https://images.pexels.com/photos/31874448/pexels-photo-31874448.jpeg?auto=compress&cs=tinysrgb&w=900","name":"Elegant Pakistani Shalwar Kameez","price":"PKR 5,200","category":"dress","desc":"A graceful Pakistani shalwar kameez for a stylish traditional look."},
{"file":"https://images.pexels.com/photos/28821783/pexels-photo-28821783.jpeg?auto=compress&cs=tinysrgb&w=900","name":"Classic Heels","price":"PKR 3,200","category":"shoes","desc":"Classic black heels."},
{"file":"https://images.pexels.com/photos/37305532/pexels-photo-37305532.jpeg?auto=compress&cs=tinysrgb&w=900","name":"Ladies Sandals","price":"PKR 2,400","category":"shoes","desc":"Comfortable ladies sandals."},
{"file":"https://images.pexels.com/photos/22434770/pexels-photo-22434770.jpeg?auto=compress&cs=tinysrgb&w=900","name":"Luxury Handbag","price":"PKR 3,800","category":"bag","desc":"A stylish luxury handbag."},
{"file":"https://images.pexels.com/photos/21837372/pexels-photo-21837372.jpeg?auto=compress&cs=tinysrgb&w=900","name":"Mini Shoulder Bag","price":"PKR 2,900","category":"bag","desc":"A cute mini shoulder bag."},
{"file":"https://images.pexels.com/photos/922567/pexels-photo-922567.jpeg?auto=compress&cs=tinysrgb&w=900","name":"Pearl Necklace","price":"PKR 1,800","category":"jewelry","desc":"Elegant pearl necklace."},
{"file":"https://images.pexels.com/photos/12144978/pexels-photo-12144978.jpeg?auto=compress&cs=tinysrgb&w=900","name":"Gold Earrings","price":"PKR 1,200","category":"jewelry","desc":"Beautiful gold earrings."}
];
function renderProducts(list=products){
  document.getElementById('productGrid').innerHTML=list.map(p=>`
    <div class="card">
      <img src="${p.file}" alt="${p.name}" loading="lazy">
      <div class="card-body"><h3>${p.name}</h3><p>${p.desc}</p><div class="price">${p.price}</div></div>
    </div>`).join('');
}
function filterProducts(category){ renderProducts(category==='all'?products:products.filter(p=>p.category===category)); }
renderProducts();

function botReply(text){
  const q=text.toLowerCase();
  if(q.includes('elegant pink')) return 'The Elegant Navy Blue Shalwar Kameez is PKR 4,500. 👗';
  if(q.includes('black party')) return 'The Elegant Pakistani Shalwar Kameez is PKR 5,200. 🖤';
  if(q.includes('classic heels')) return 'The Classic Heels are PKR 3,200. 👠';
  if(q.includes('sandals')) return 'The Ladies Sandals are PKR 2,400. 👡';
  if(q.includes('luxury handbag')) return 'The Luxury Handbag is PKR 3,800. 👜';
  if(q.includes('mini shoulder')) return 'The Mini Shoulder Bag is PKR 2,900. 👜';
  if(q.includes('pearl necklace')) return 'The Pearl Necklace is PKR 1,800. 📿';
  if(q.includes('gold earrings')) return 'The Gold Earrings are PKR 1,200. ✨';
  if(q.includes('dress')) return 'We have Elegant Navy Blue Shalwar Kameez (PKR 4,500) and Elegant Pakistani Shalwar Kameez (PKR 5,200).';
  if(q.includes('shoe') || q.includes('sandals')) return 'We have Classic Heels (PKR 3,200) and Ladies Sandals (PKR 2,400).';
  if(q.includes('bag')) return 'We have Luxury Handbag (PKR 3,800) and Mini Shoulder Bag (PKR 2,900).';
  if(q.includes('jewellery') || q.includes('jewelry')) return 'We have Pearl Necklace (PKR 1,800) and Gold Earrings (PKR 1,200).';
  if(q.includes('price') || q.includes('how much')) return 'Please tell me the product name, for example: “How much is the Luxury Handbag?”';
  if(q.includes('hello') || q.includes('hi')) return 'Hello! 💕 Welcome to Hania\'s Closet. How can I help you?';
  return 'I can help with dresses, shoes, bags, jewellery and prices. Try asking “How much is the Classic Heels?”';
}
function ask(text){
  addMessage(text,'user');
  setTimeout(()=>addMessage(botReply(text),'bot'),250);
}
function sendMessage(){
  const input=document.getElementById('chatInput'); const text=input.value.trim();
  if(!text) return; input.value=''; ask(text);
}
function addMessage(text,type){
  const box=document.getElementById('messages');
  const div=document.createElement('div'); div.className=type+' msg'; div.textContent=text;
  box.appendChild(div); box.scrollTop=box.scrollHeight;
}