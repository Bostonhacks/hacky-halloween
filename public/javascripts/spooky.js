window.setTimeout(createPotion, 10000)

var cauldron = 'empty'
var potion = ['???', '???']

function createPotion() {
  // Harry Potter needed some luck.
  // You do too. 

  for (var i = 0 ; i < potion.length; i++) {
    cauldron += potion[i].toLowerCase()
  }

  if (getCode(cauldron) == 1751180706) {
    console.log('Its going to be a good halloween.')
    window.location.replace(window.location + '?potion=' + cauldron)
  } else {
    console.log('Gosh darn it Severus!')
  }
}

function getCode(magic) {
	var hash = 0;
	if (magic.length == 0) return hash;
	for (i = 0; i < magic.length; i++) {
		char = magic.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash;
	}
	return hash;
}