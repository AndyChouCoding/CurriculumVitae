document.getElementById('btnradio1').addEventListener('click', function() {
    showContent('content1');
});

document.getElementById('btnradio2').addEventListener('click', function() {
    showContent('content2');
});

document.getElementById('btnradio3').addEventListener('click', function() {
    showContent('content3');
});

function showContent(contentId) {

    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
    
    document.getElementById(contentId).style.display = 'block';
}
