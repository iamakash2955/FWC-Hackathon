document.addEventListener('DOMContentLoaded', () => {
    const dragArea = document.getElementById('dragArea');
    const fileInput = document.getElementById('fileInput');
    const designButton = document.getElementById('designButton');

    dragArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dragArea.classList.add('active');
    });

    dragArea.addEventListener('dragleave', () => {
        dragArea.classList.remove('active');
    });

    dragArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dragArea.classList.remove('active');
        handleFile(e.dataTransfer.files[0]);
    });

    dragArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        handleFile(e.target.files[0]);
    });

    designButton.addEventListener('click', () => {
        // Here you would typically send the image to your Flask backend
        // For now, we'll just show a placeholder message
        const outputArea = document.getElementById('outputArea');
        outputArea.innerHTML = '<p>Generating design... Please wait.</p>';
    });

    function handleFile(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                dragArea.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image file.');
        }
    }
});