function shareX(data){
    const tweet = encodeURIComponent('¡Mira la tarjeta que he creado con MOD^L CARDS!');
    const xShareUrl = `https://twitter.com/intent/tweet?text=${tweet}&url=${data.cardURL}`;
    xShare.href = xShareUrl;
}
