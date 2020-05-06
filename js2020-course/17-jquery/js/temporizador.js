(function($) {
    
    $.fn.timer = function (options) {
        const finalOptions = $.extend({
            message: 'Soon',
            timeLimit: '23:59:59'
        }, options)

        const hourDozen = $('<span class="digito">').html('0')
        const hourUnity = $('<span class="digito">').html('0')
        const minuteDozen = $('<span class="digito">').html('0')
        const minuteUnity = $('<span class="digito">').html('0')
        const secondDozen = $('<span class="digito">').html('0')
        const secondUnity = $('<span class="digito">').html('0')

        const hourSeparator = $('<span class="separador">').html(':')
        const minuteSeparator = $('<span class="separador">').html(':')

        const message = $('<div class="mensagem">').html(finalOptions.message)

        $(this).addClass('temporizador')
        $(this).append( hourDozen, hourUnity, hourSeparator, 
                        minuteDozen, minuteUnity, minuteSeparator, 
                        secondDozen,secondUnity, 
                        message)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const targetTime = regex.exec(finalOptions.timeLimit)

        let timer = setInterval(() => {
            const now = new Date()
            const target = new Date()

            target.setHours(targetTime[1])
            target.setMinutes(targetTime[2])
            target.setSeconds(targetTime[3])

            const milisecondsDiff = target.getTime() - now.getTime()

            if(milisecondsDiff >= 0){
                const delta = regex.exec(new Date(milisecondsDiff).toISOString())
                hourDozen.html(delta[1][0])
                hourUnity.html(delta[1][1])
                minuteDozen.html(delta[2][0])
                minuteUnity.html(delta[2][1])
                secondDozen.html(delta[3][0])
                secondUnity.html(delta[3][1])
            } else {
                clearInterval(timer)
            }             
        }, 1000)

        return this
    }

})(jQuery)