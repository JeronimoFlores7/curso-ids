document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("myDialog");
    const openDialogBtn = document.getElementById("openDialog");
    const closeDialogBtn = document.getElementById("closeDialog");

    openDialogBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    closeDialogBtn.addEventListener("click", () => {
        dialog.close();
    });
});
