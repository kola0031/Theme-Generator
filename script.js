// retrieve the html elements

const $body = document.body
const $title = document.getElementById('title')
const $form = document.getElementById('form')
const $bgcolor = document.getElementById('bgcolor')
const $invert = document.getElementById('invert')
const $font = document.getElementById('font')
const $placeholder = document.getElementById('placeholder')


// Form event listener 
// prevent page refresh 


function setBackground() {

    // to check if a checkbox is checked
    // .checked = true or fales

    if ($invert.checked) {
        $body.style.color = $bgcolor.value
        $body.style.backgroundColor = 'rgb(33, 37, 41)'
    } else {
        $body.style.backgroundColor = $bgcolor.value
        $body.style.color = 'rgb(33, 37, 41)'
    }

    //set the background of body 


}
$bgcolor.addEventListener('change', setBackground)

$invert.addEventListener('change', setBackground)








function setFontFamily() {
    $body.style.fontFamily = $font.value
}

//listen for change to font 

$font.addEventListener('change', setFontFamily)

//listen to change to placeholder
function setTitle() {
    if ($placeholder.value) {
        $title.textContent = $placeholder.value
    } else {
        $title.textContent = 'Theme Generator'
    }
}

$placeholder.addEventListener('input', setTitle)




$form.addEventListener('submit',
    function(e) {
        e.preventDefault()

        const settings = {
            $bgcolor: $bgcolor.value,
            invert: $invert.checked,
            font: $font.value,
            placeholder: $placeholder.value
        }


        // store settings vlaue to local storage

        localStorage.setItem('settings', JSON.stringify(settings))
    })

// get settings from local storage 

const ls = localStorage.getItem('settings')

//if there is no data in local storage
//it will return undefined
// wii be true if a string is returned

if (ls) {
    const settings = JSON.parse(ls)
    $bgcolor.value = settings.$bgcolor
    $invert.checked = settings.invert
    $font.value = settings.font
    $placeholder.value = settings.placeholder

    setBackground()
    setFontFamily()
    setTitle()
}