// // function isEqual_myVersion(a, b) {
// // 	return a.isUsed===b.isUsed
// // }



// // function hasValidUnitOfMeasure(product = {}) {
// // 	const { unitOfMeasure, comment } = product
// // 	return (comment!=undefined || unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
// // }


// // let str = `({ one:anotherOne, two } = { one : 1, two : 2}).toString()`



// function hasKey(obj, key) {
// 	return Object.keys(obj).includes(key)
// }



// function hasKey(obj, key) {
// 	return obj.hasOwnProperty(key)
// }


// function profit(info) {
// 	return Math.round((info.sellPrice-info.costPrice)*info.inventory)
// }

// function isEmpty(obj) {
// 	return Object.keys(obj).length==0
// }

// function sortDrinkByPrice(drinks) {
// 	return drinks.sort((a, b) => (a.price > b.price) ? 1 : -1)
// }

// function isFirstSuperior(arr1, arr2) {
// 	for(let i=0;i<arr1.length;i++){	
// 		if(arr1[i]!==arr2[i]&&arr1[i]>arr2[i])
// 		{
// 			return true
// 		}
	
// 	}
// return false
// }



// function signYourName(obj) {
// 	// write your code here
// 	  // don't use a return statement
	  
	  
// 	// DON'T CHANGE OR REMOVE THE LINES BELOW
// 	obj.yourSignature = "Whatever";
  
  
// 	return obj
//   }



//   function maximumScore(tileHand) {
// 	return tileHand.reduce((a,b)=>a+b.score,0)
// }

// function inkLevels(inks) {
// 	return Math.min(...Object.values(inks))
// }


// function addName(obj, name, value) {
//     obj[name]=value
//        return obj
//    }



// function generation(x, y) {
// 	let obj={
// 		"-3":{
// 		m:"great grandfather",
// 		f:"great grandmother",
// 	},
//     "-2":{
// 		m:"grandfather",
// 		f:"grandmother",
// 	},

//     "-1":{
// 		m:"father",
// 		f:"mother",
// 	},
//     "0":{
// 		m:"me!",
// 		f:"me!",
// 	},
//     "1":{
// 		m:"son",
// 		f:"daughter",
// 	},
//     "2":{
// 		m:"grandson",
// 		f:"granddaughter",
// 	},
//     "3":{
// 		m:"great grandson",
// 		f:"great granddaughter",
// 	}
// 	}
// return obj[x][y]
// }


// function toArray(obj) {
// 	return Object.entries(obj)
// }


// function keysAndValues(obj) {
// 	let arr2=[]
//  arr2.push(Object.keys(obj),Object.values(obj))
// 	return arr2
// }


// function objectToArray(obj) {
// 	return Object.entries(obj)
// }


// function isObject(value) {
// 	return typeof value==="object"&&value!=null
// }


// function getBudgets(arr) {
// 	return arr.reduce((a,b)=>a+b.budget,0)
// }


// function calculateLosses(obj) {
// 	return Object.values(obj).length==0?"Lucky you!":Object.values(obj).reduce((a,b)=>a+b)
// }


// function freeShipping(order) {
// 	return Object.values(order).reduce((a,b)=>a+b)>50
// }



// function mapping(letters) {
// 	let a=letters.reduce((a,b)=>{
// 			a[b]=b.toUpperCase()
// 			return a
// 		},{})
// 	return a
// 	}




