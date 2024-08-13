
const tg = window.Telegram.WebApp



export function useTelegram() {
    
    const onClose = () => {
        tg.close()
    }

    let langTg = tg.initDataUnsafe?.user?.language_code

    const changeLanguage = () => {
        langTg = !langTg
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