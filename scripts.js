// Function for Exp to Level Equation
$(document).ready(function(){
    $("#ExpTextField").on("input", function(){
        // Print entered exp value into Level div after calculations
        var conversion = $("#ConversionTextField").val()
        $("#LevelTextField").text(Math.floor($(this).val()/conversion))
    });
    $("#ConversionTextField").on("input", function(){
        // Print entered exp value into Level div after calculations
        var conversion = $("#ConversionTextField").val()
        $("#LevelTextField").text(Math.floor($("#ExpTextField").val()/conversion))
    });
})



// Function to Upload Images to Canvas
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
});

// Function to Add/Remove Rows to Inventory
$(document).ready(function(){
    var n = 0;
    $('.InventoryTable').on('click', '#AddRow', function(){
        n++;
        for(var i=0;i<1;i++){
            var addRow = '<tr>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div><button class="Remove">-</button></div></td>'
            +'</tr>'

            $("tbody").append(addRow);
        }
        $("#NumRows").text(n)
    });

    // Function to pre-paste some rows
    $(document).ready(function(){
        for(var i=0;i<10;i++){
            n++
            var addRow = '<tr>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div><button class="Remove">-</button></div></td>'
            +'</tr>'
        
            $("tbody").append(addRow);
        }
        $("#NumRows").text(n)
    });


    $(document).on('click', '.Remove', function(){
        $(this).parents("tr").remove();
        n--;
        $("#NumRows").text(n)
    });
});



