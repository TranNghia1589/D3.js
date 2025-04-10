document.addEventListener('DOMContentLoaded', function() {
    const totalCharts = 12; 
    const navContainerId = 'global-navigation'; 

    const navContainer = document.getElementById(navContainerId);
    if (!navContainer) {
        console.error(`Không tìm thấy phần tử với ID "${navContainerId}" để chèn thanh điều hướng.`);
        return;
    }

    const currentPagePath = window.location.pathname;
    const currentPageFilename = currentPagePath.substring(currentPagePath.lastIndexOf('/') + 1);
    let currentPageNumber = 0;
    const match = currentPageFilename.match(/Q(\d+)\.html/i);
    if (match && match[1]) {
        currentPageNumber = parseInt(match[1], 10);
    } else {
        console.warn("Không thể xác định số trang hiện tại từ tên file:", currentPageFilename);
    }

    let navHTML = '';
    for (let i = 1; i <= totalCharts; i++) {
        const isActive = (i === currentPageNumber);
        const activeClass = isActive ? ' active' : ''; 
        const fileName = `Q${i}.html`;
        navHTML += `<a href="${fileName}" class="nav-button${activeClass}">${i}</a>`;
    }

    navContainer.innerHTML = navHTML;

});