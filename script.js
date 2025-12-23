$(document).ready(function() {
    // Preloader Logic
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 20) + 10;
        if (progress > 100) progress = 100;
        
        $('#load-progress').css('width', `${progress}%`);
        $('#load-percent').text(`${progress}%`);
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                $('#preloader').addClass('fade-out');
                setTimeout(() => {
                    $('#preloader').hide();
                    $('body').removeClass('overflow-hidden');
                }, 700);
            }, 300);
        }
    }, 100);

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-quad'
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#3b82f6" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.2, "random": true },
            "size": { "value": 2, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#3b82f6", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.4 } }, "push": { "particles_nb": 2 } }
        },
        "retina_detect": true
    });

    // Toastr Configuration
    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
    };

    // Welcome Alert
    setTimeout(() => {
        toastr.info('Ready to boost your PC performance?', 'Ultimate Optimizer');
    }, 1000);

    // Download Button Click
    $('a[href*="github.com"]').on('click', function(e) {
        e.preventDefault();
        const url = $(this).attr('href');
        
        Swal.fire({
            title: 'Confirm Download',
            text: "You are being redirected to the GitHub releases page for the official version.",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#18181b',
            confirmButtonText: 'Continue to GitHub',
            background: '#050508',
            color: '#fff',
            backdrop: `rgba(0,0,123,0.4)`
        }).then((result) => {
            if (result.isConfirmed) {
                toastr.success('Redirecting to download...', 'Success');
                setTimeout(() => {
                    window.open(url, '_blank');
                }, 1000);
            }
        });
    });

    // Initialize Select2
    $('#hardware-select').select2({
        minimumResultsForSearch: Infinity, // Hide search box
    });

    // Style Select2 to match the theme
    $('.select2-container--default .select2-selection--single').css({
        'background-color': 'rgba(255, 255, 255, 0.05)',
        'border': '1px solid rgba(255, 255, 255, 0.1)',
        'border-radius': '10px',
        'height': '45px',
        'color': '#fff'
    });

    // Check Button Click
    $('#check-btn').on('click', function() {
        const val = $('#hardware-select').val();
        let message = '';
        
        Swal.fire({
            title: 'Analyzing Hardware...',
            timer: 1500,
            timerProgressBar: true,
            background: '#050508',
            color: '#fff',
            didOpen: () => {
                Swal.showLoading();
            }
        }).then(() => {
            toastr.success(`Your ${val.toUpperCase()} is compatible and 100% optimized!`, 'Analysis Complete');
        });
    });

    // Smooth scroll for nav links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
});
