document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.getElementById("formElement");
    const logoContainer1 = document.getElementById("logoContainer1");
    const logoContainer2 = document.getElementById("logoContainer2");

    function updateLogoContainersWidth() {
        const viewportWidth = window.innerWidth;
        const formRect = formElement.getBoundingClientRect();
        const formRightEdge = formRect.right;
        const distanceFromRight = viewportWidth - formRightEdge;

        logoContainer1.style.width = `${formRect.left}px`;
        logoContainer2.style.width = `${distanceFromRight}px`;

        // Show the logo containers
        logoContainer1.style.display = 'block';
        logoContainer2.style.display = 'block';
    }

    updateLogoContainersWidth();
    window.addEventListener("resize", updateLogoContainersWidth);
});
