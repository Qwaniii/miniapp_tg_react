
const tg = window.Telegram.WebApp



export function useTelegram() {
    
    const onClose = () => {
        tg.close()
    }

    let langTg = tg.initDataUnsafe?.user?.language_code

    const changeLanguage = () => {
        // if (langTg === "ru") {
        //     langTg = "en"
        // }
        // else langTg = "ru"
        console.log(langTg)
    }



    return {
        onClose,
        tg,
        langTg,
        changeLanguage,
        user: tg.initDataUnsafe?.user,
        back: tg.BackButton
    }
}