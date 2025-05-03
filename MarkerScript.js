
var myIcon = L.icon({
	iconUrl: 'images/schoolLocation.png',
	iconSize: [35.35]
}) 


function markerData() {
    

const marker1 = L.marker([13.064499526371511, 77.43768674252692], {icon: myIcon}).addTo(map)
		.bindPopup("<h2>Bengaluru Urban</h2><p>Morarji Desai Residential Science PU College, Adakamaranahalli, Bengaluru North</p><img src='./SchoolImages/AdakamaranahalliShow.png'/> <a href='javascript:adakamaranahalli()'>Inaugurate</a> ")
		
const marker2 = L.marker([12.686850070291646, 77.68576958363136], {icon: myIcon}).addTo(map)
		.bindPopup("<h2>Bengaluru Urban</h2><p>Kitturu Rani Chennamma Residential Science PU College, Telagarahalli, Anekal Taluk, Bengaluru Urban</p><img src='./SchoolImages/Telagarahalli.png'/>")
		

}
function adakamaranahalli() {
	
	alert("Congratulations!! Inaugurated ICT infrastructure project supported under HAL CSR in this school by Minister for Minor Irrigation and S&T!! on 30th November 2023");
	
	//marker1.setPopupContent("<h2>Bengaluru Urban</h2><p>Morarji Desai Residential Science PU College, Adakamaranahalli, Bengaluru North</p><img src='./SchoolImages/Telagarahalli.png'/> ")
}