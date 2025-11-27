const toastLiveExample = document.getElementById('myToast');
    const toastTrigger = document.getElementById('showToastBtn');
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
        toastBootstrap.show();
    });
}