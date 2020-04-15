function speakBeforeOf(seconds, text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, seconds * 1000)
    })
}

speakBeforeOf(3, "Very nice")
    .then(text => text.concat('!!'))
    .then(otherText => console.log(otherText))
