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

// Function to collapse and expand the Essentials div
$(document).ready(function(){
    var value = 0
    $(".CollapseButton").on('click', function(){
        $('.Collapsable').toggle()
        $(".CollapseButton").text( $('.Collapsable').is(':visible')?'Collapse':'Expand' );
        // Adjust the Inventory <th> to prevent the event of overlapping sticky elements when scrolled to the bottom
        var maxHeight = $('.Essentials').css("height")
        $('.InventoryTable th').css("top", maxHeight)
    })
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

// Functions for Inventory
$(document).ready(function(){
    var n = 0;
    var addRow = '<tr>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div contenteditable="plaintext-only"></div></td>'
            +'<td><div><button class="Remove">-</button></div></td>'
            +'</tr>'

    $('.InventoryTable').on('click', '#AddRow', function(){
        n++;
        for(var i=0;i<1;i++){
            $(".InventoryTable tbody").append(addRow);
        }
        $("#NumRows").text(n)
    });

    // Function to pre-paste some rows
    $(document).ready(function(){
        for(var i=0;i<10;i++){
            n++
            $(".InventoryTable tbody").append(addRow);
        }
        $("#NumRows").text(n)
    });

    // Function to Remove rows
    $(document).on('click', '.Remove', function(){
        $(this).parents("tr").remove();
        n--;
        $("#NumRows").text(n)
    });

    // Function to Adjust <th> top limit
    $(document).ready(function(){
        var maxHeight = $('.Essentials').css("height")
        $('.InventoryTable th').css("top", maxHeight)
    })

});

// Functions for Equipments
$(document).ready(function(){
    var addEquipment ='<br><div class="Equipment">'
        +'<div>'
            +'<div class="Equipment-Info-1">'
                +'<label tag="Item:">'
                    +'<input type="text" class="ItemNameInput">'
                +'</label>'
            +'</div>'
            +'<div class="Equipment-Info-2">'
                +'<label tag="Cost:">'
                    +'<input type="text" class="ItemCostInput">'
                +'</label>'
                +'<label tag="Durability:">'
                    +'<input type="text" class="ItemDurabilityInput">'
                +'</label>'
            +'</div>'
        +'</div>'
        +'<div class="Equip-Desc-Area">'
            +'<div class="Desc1">'
                +'<label tag="Description:">'
                    +'<textarea type="text" class="ItemDescription"></textarea>'
                +'</label>'
            +'</div>'
            +'<div class="Remove-Equipment">'
                +'<button class="Remove-Equipment-Btn">Remove</button>'
            +'</div>'
        +'</div>'
    +'</div>'
    var ArmorCount = 1
    var WeaponCount = 1
    var AccessoryCount = 1

    $('#AddArmor').click(function(){
        ArmorCount++;
        if (ArmorCount <= 2){
            $(".ArmorContainer").append(addEquipment);
        }
        else{alert("You have reached the maximum amount of armor you can equip [2]")}
    });
    $('#AddWeapon').click(function(){
        WeaponCount++;
        if (WeaponCount <= 4){
            $(".WeaponsContainer").append(addEquipment);
        }
        else{alert("You have reached the maximum amount of weapons you can equip [4]")}
    });
    $('#AddAccessory').click(function(){
        AccessoryCount++;
        if (AccessoryCount <= 10){
            $(".AccessoriesContainer").append(addEquipment);
        }
        else{alert("You have reached the maximum amount of accessories you can equip [10]")}
    });
});