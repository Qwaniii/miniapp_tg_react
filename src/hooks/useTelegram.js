
const tg = window.Telegram.WebApp



export function useTelegram() {
    
    const onClose = () => {
        tg.close()
    }



    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        lang: tg.initDataUnsafe?.user?.language_code,
        back: tg.BackButton
    }
}