var rectangle = {
	width: 10,
	heigth: 20
}

function rectangleArea(width, heigth) {
	return width * heigth; 
}

QUnit.test( "hello test", function( assert ) {
	assert.ok( 1 == "1", "Green is green!" );
	assert.equal( 200, rectangleArea(rectangle.width, rectangle.heigth), "Awesome sum!" );
});
