var Height;
var Width;
var color;
//it will take the size " hieght , width" and send them to a makegrid function
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    Height = $('#inputHeight').val();
    Width = $('#inputWidth').val();
    makeGrid(Height, Width);
})
//in makeGrid function i took the hieght and the width as a parameter
// to know the hieght and the width .
function makeGrid(Height, Width) {
    $('tr').remove();
    for (var i = 0; i <= Height; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var k = 1; k <= Width; k++) {
            $('#table' + i).append('<td></td>');
        }
    }
//it will take the color  
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color)
        }
    })
}
