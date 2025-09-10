function getFormvalue() {
    //Write your code here
	const form = document.getElementById('form1')
	let fname = form.elements['fname'].value
	fname = fname.trim()
	let lname = form.elements['lname'].value
	lname = lname.trim()
	alert(`${fname} ${lname}`)

}
