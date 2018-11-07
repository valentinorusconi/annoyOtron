window.addEventListener('offline', () => {
    window.alert("You lost your internet connection.");
});

window.addEventListener('online', () => {
    window.alert("You're back online!")
});