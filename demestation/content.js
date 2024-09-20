const btnPaw = document.querySelector("#btn_paw")
const fetchBtn = document.querySelector("#btn-fetch")

fetchBtn.addEventListener('click', ()=>{
  btnPaw.style.display = 'none';
})
btnPaw.display = 'none'
const button = document.querySelector("#youtube > div.col-md-6.col-sm-12.p-0.d-flex.align-items-center.flex-column.justify-content-center.text-center > div.container > div > div > span:nth-child(4)")
const btn = document.createElement('button')
btn.innerText = 'Pick A Winner'
button.appendChild(btn)
btn.setAttribute('id', 'btn_paw')
btn.setAttribute('className', 'btn btn-primary btn-go animated bounceIn faster')
const a = document.querySelector("#youtube > div.col-md-6.col-sm-12.p-0.d-flex.align-items-center.flex-column.justify-content-center.text-center > div.container > div > div > div.hidden.status-text.loader.animated.shown > div > span.status.animated")
const modalFetch = document.querySelector("#modal-fetch")
btn.style.display = 'none'






modalFetch.addEventListener('click', ()=>{
  setTimeout(()=>{
    btn.style.display ='flex'
    btn.style.textAlign = 'center'
    btn.style.margin = 'auto'
    btn.style.boxShadow = '0 1px 4px rgba(0, 0, 0, .4);'
    btn.style.background = '#2196f3 linear-gradient(180deg, #42a6f5, #2196F3)'
    btn.style.marginTop = '15px'
    btn.style.padding = '.8rem 1rem'
    btn.style.borderRadius = '.25rem'
    btn.style.transition = 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out'
    btn.style.color = 'white'
  },5000)
})
// content.js (for your browser extension)

// Wait for the DOM content to be fully loaded


btn.addEventListener('click', ()=>{
  // Create the modal-content div
const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modalContent.style.position = 'absolute'
modalContent.style.top = '45%'



// Create the modal-header div
const modalHeader = document.createElement('div');
modalHeader.className = 'modal-header';
modalContent.style.maxWidth = '500px'
modalContent.style.left = '50%'
modalContent.style.transform = 'translateX(-50%)'
// Create the modal-title div
const modalTitle = document.createElement('div');
modalTitle.className = 'modal-title w-100 text-center';
modalTitle.textContent = 'And The Winner Is... ';

// Create the close button
const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.className = 'close';
closeButton.setAttribute('data-dismiss', 'modal');
closeButton.setAttribute('aria-label', 'Close');

// Create the span inside the close button
const closeSpan = document.createElement('span');
closeSpan.setAttribute('aria-hidden', 'true');
closeSpan.textContent = '×';
closeSpan.addEventListener('click', ()=>{
  modalContent.style.display = 'none'
})
// Append the span to the button
closeButton.appendChild(closeSpan);

// Append title and button to modalHeader
modalHeader.appendChild(modalTitle);
modalHeader.appendChild(closeButton);

// Create the modal-body div
const modalBody = document.createElement('div');
modalBody.className = 'modal-body p-0';

// Create the winner-container div
const winnerContainer = document.createElement('div');
winnerContainer.className = 'col-md-12 order-1 order-md-2 winner-container p-0';

// Create the card div
const card = document.createElement('div');
card.className = 'card text-center animated';
card.id = 'winner-box';

// Create the card-body div
const cardBody = document.createElement('div');
cardBody.className = 'card-body';

// Create the avatar image
const avatarImg = document.createElement('img');
avatarImg.id = 'avatar';
avatarImg.src = 'https://yt3.googleusercontent.com/nAYHTNxJxd0SSj19_cAJFsCzqxH1quQyqTlTTLDnmv1dm0mjq_3FjWeLW7jSPvfP4UGpZM4_JQ=s160-c-k-c0x00ffffff-no-rj';
avatarImg.alt = 'avatar';
avatarImg.className = 'mb-2 rounded-circle';
avatarImg.style.width = '48px';

// Create the winner name heading
const winnerName = document.createElement('h4');
winnerName.className = 'card-title mb-0';
winnerName.id = 'winner-name';
winnerName.textContent = '@Kuldona';

// Create the comment likes div
const commentLikesDiv = document.createElement('div');
commentLikesDiv.className = 'mb-1';
commentLikesDiv.innerHTML = '<i class="text-danger fas fa-heart"></i> <span id="comment-likes">0</span>';

// Create the winner comment paragraph
const winnerComment = document.createElement('p');
winnerComment.className = 'card-text';
winnerComment.id = 'winner-comment';
winnerComment.textContent = 'წარმატებებს გისურვებთ. ❤️❤️❤️❤️';

// Create the cheers image
const cheersImg = document.createElement('img');
cheersImg.className = 'cheers ls-is-cached lazyloaded';
cheersImg.setAttribute('data-src', '/img/cheers.svg?1.4.8');
cheersImg.alt = 'cheers icon';
cheersImg.src = '/img/cheers.svg?1.4.8';

// Append all elements to cardBody
cardBody.appendChild(avatarImg);
cardBody.appendChild(winnerName);
cardBody.appendChild(commentLikesDiv);
cardBody.appendChild(winnerComment);
cardBody.appendChild(cheersImg);

// Append cardBody to card
card.appendChild(cardBody);

// Append card to winnerContainer
winnerContainer.appendChild(card);

// Append winnerContainer to modalBody
modalBody.appendChild(winnerContainer);

// Append modalHeader and modalBody to modalContent
modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);

// Append modalContent to the document body or another container
document.body.appendChild(modalContent);

})


