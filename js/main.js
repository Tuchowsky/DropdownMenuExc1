$(document).ready(function(){
    let mainContainer = $('.main-container');
    let navMenu = $('.nav-menu');

    navMenu.click(function(){
        let $this = $(this);
        $this.toggleClass('open');
        if($this.hasClass('open')){
            mainContainer.append(`
                <div class="sub-menu-triangle"></div>
                <div class="sub-menu">
                    <div class="sub-menu-items">
                        <a class="dropdown">Home</a>
                    </div>
                    <div class="sub-menu-items">
                        <a class="dropdown">Messages</a>
                    </div>
                    <div class="sub-menu-items">
                        <a class="dropdown">Settings</a>
                    </div>
                </div>
            `);
        } else {
            $this.removeClass('open');
            $('div.sub-menu').remove();
        }
    });
});