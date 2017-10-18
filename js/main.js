$(document).ready(function(){
    let mainContainer = $('.main-container');
    let navMenu = $('.nav-menu');


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
        } else {
            $this.removeClass('open');
            subMenu.remove();
            subMenuTriangle.remove();
        }
    });
});