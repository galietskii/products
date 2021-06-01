document.querySelector('#elastic').oninput = function() {
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.grid-item');
	if(val != '') {
		elasticItems.forEach(function(elem){
			if(elem.innerText.search(val) == -1) {
				elem.classList.add('hide');
			}
			else {
			elem.classList.remove('hide');
		}
		} );
	}
	else {
		elasticItems.forEach(function(elem){
			elem.classList.remove('hide');
		});
	}
}
// СОРТИРОВКА ТОВАРОВ 
document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;


function mySort() {
	let nav = document.querySelector('#nav');
	for(let i = 0; i < nav.children.length; i++) {
		for(let j = i; j < nav.children.length; j++) {
			if(+nav.children[i].getAttribute('data-sort') > +nav.children[j].getAttribute('data-sort')) {
				replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replacedNode, nav.children[i]);
			}
		}
	}
}
function mySortDesc() {
	let nav = document.querySelector('#nav');
	for(let i = 0; i < nav.children.length; i++) {
		for(let j = i; j < nav.children.length; j++) {
			if(+nav.children[i].getAttribute('data-sort') < +nav.children[j].getAttribute('data-sort')) {
				replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replacedNode, nav.children[i]);
			}
		}
	}
}

function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}