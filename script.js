
function goToForm() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('view-intro').classList.remove('active');
    document.getElementById('view-form').classList.add('active');
}

function goBack() {
    document.getElementById('view-form').classList.remove('active');
    document.getElementById('view-intro').classList.add('active');
}


function generateCertificate(e) {
    e.preventDefault();


    const userName = document.getElementById('userName').value;
    const treeName = document.getElementById('treeName').value;
    const treeType = document.getElementById('treeType').value;
    const dedication = document.getElementById('dedication').value || "Por un futuro sostenible.";

 
    document.getElementById('displayUser').innerText = userName;
    document.getElementById('displayTreeName').innerText = `"${treeName}"`;
    document.getElementById('displayType').innerText = treeType;
    document.getElementById('displayDedication').innerText = dedication;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('view-form').classList.remove('active');
    document.getElementById('view-cert').classList.add('active');
}