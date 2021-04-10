var items = document.getElementsByClassName('gif-card')

var currentItem

for (const item of items) {
    //console.log(item.childNodes.item(1));
    console.log(item.childNodes.item(3).childNodes.item(5).addEventListener('click', () => {
        Swal.fire({
            title: 'Do you want to add this gif to your pocket?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Add`,
            denyButtonText: `Don't add`,
        }).then((result) => {
            if (result.isConfirmed) {
                addToFavorite(item.childNodes.item(1).src);
            } else if (result.isDenied) {
                Swal.fire('I think i\'m losing my mind.', '?!?', 'question')
            }
        })
    }))
}

function addToFavorite(itemSrc) {
    $.ajax({
        type: "post",
        url: "http://localhost:8080/api/fav/add/",
        data: { url: itemSrc },
        success: function (response) {
            Swal.fire({
                title: 'Gif Added :)',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        },
        beforesend: () => {
            Swal.fire({
                title: 'Trying to Added!',
                icon: 'info',
                showConfirmButton: false,
                timer: 1500
            })
        },
        error: (err) => {
            Swal.fire({
                title: 'An error occured',
                icon: 'error',
                text: '',
                showConfirmButton: false,
                timer: 1500
            })
        }
    });
}