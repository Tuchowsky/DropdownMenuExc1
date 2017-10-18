$(document).ready(function(){
    let mainContainer = $('.main-container');
    let navMenu = $('.nav-menu');
    let arrowDown = $('.i_arrow');

    navMenu.click(function(){
        let $this = $(this);
        let subMenu = $('.sub-menu');
        let subMenuTriangle = $('.sub-menu-triangle');

        $this.toggleClass('open');
        if($this.hasClass('open')){
            mainContainer.append(`
                <div class="sub-menu-triangle"></div>
                <div class="sub-menu">
                    <div class="sub-menu-items">
                        <i class="i_home"></i>
                        <a class="dropdown">Home</a>
                    </div>
                    <div class="sub-menu-items">
                        <i class="i_mail"></i>
                        <a class="dropdown">Messages</a>
                    </div>
                    <div class="sub-menu-items">
                        <i class="i_cog"></i>
                        <a class="dropdown">Settings</a>
                    </div>
                </div>
            `);
            navMenu.css('background-color', '#3ea6fd');
            $('.nav-menu > a').css('color', 'rgba(255, 255, 255, 0.9)');
            $('.nav-menu > i').css('color', 'rgba(255, 255, 255, 0.9)');
            arrowDown.css('transform', 'rotate(-180deg)');
        } else {
            $this.removeClass('open');
            navMenu.css('background-color', 'rgba(255, 255, 255, 0.9)');
            $('.nav-menu > a').css('color', '#7d7988');
            $('.nav-menu > i').css('color', '#7d7988');
            arrowDown.css('transform', 'rotate(0deg)');
            subMenu.remove();
            subMenuTriangle.remove();
        }
    });
});