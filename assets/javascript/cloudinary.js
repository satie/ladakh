const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/satie/upload'
const CLOUDINARY_UPLOAD_PRESET = 'tcatiucw'

const bannerUploadElement = document.getElementById('banner_cloudinary_image')

if (bannerUploadElement !== null) {
  bannerUploadElement.addEventListener('change', event => {
    event.preventDefault()

    const file = event.target.files[0]

    let validated = false

    validated = validateFiles(file, bannerUploadElement.getAttribute('data-max-size')) // Extracted as a separate plugin

    if (validated !== true) return

    const formData = new FormData()
    const timeStamp = new Date().getTime()

    formData.append('file', file, `${bannerUploadElement.getAttribute('data-username')}-banner-${bannerUploadElement.getAttribute('data-filename')}-${timeStamp.toString()}`)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData
    }).then(res => res.json()).then(json => {
      const img = new Image(450, 610)
      img.src = json.secure_url

      // save public_id

      // document.getElementById('cover_banner').value = json.public_id
    }).catch(err => {
      console.log(err)
    })
  })
}
