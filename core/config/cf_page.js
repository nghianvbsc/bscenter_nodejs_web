exports.auth_admin = 1;
exports.auth_guest = 2;

exports.allPage = {

    /**
     * 404 page
     */
    "/404.html": {
        view: "guest/master.html",
        auth: this.auth_guest,
        title: "Page Not Found!",
        inc: "include/404.html",
    },

    /**
     * trang about
     */
    "/about-us.html": {
        view: "guest/master.html",
        auth: this.auth_guest,
        title: "About us",
        inc: "include/about-us.html",
        item: "about"
    },


    /**
     * trang contact
     */
    "/contact-us.html": {
        view: "guest/master.html",
        auth: this.auth_guest,
        title: "Contact us",
        inc: "include/contact-us.html",
        item: "contact"
    },

    /**
     * trang home
     */
    "/index.html": {
        view: "guest/master.html",
        auth: this.auth_guest,
        title: "BSCenter!",
        inc: "include/index.html",
        item: "home"
    },

    "/": {
        view: "guest/master.html",
        auth: this.auth_guest,
        title: "BSCenter!",
        inc: "include/index.html",
        item: "home"
    },

    /**
     * trang services
     */
    "/services.html": {
        view: "guest/master.html",
        auth: this.auth_guest,
        title: "sServices",
        inc: "include/pricing.html",
        item: "services"
    },

    /**
     * trang đăng ký tài khoản
     * cho tất cả nguwoif dùng các dịch vụ của bscenter
     */
    "/sign-up.html": {
        view: "guest/page/sign-up.html",
        auth: this.auth_guest,
        title: "Sign up a account"
    },

    /**
     * [---------FOR ADMIN---------]
     */


    /**
     * trang dăng nhập quản lý bscenter
     */
    "/login.html": {
        view: "admin/page/sign-in.html",
        auth: this.auth_guest,
        title: "Sign in to admin!"
    },

    "/basic_table.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "Basic Table",
        inc: "include/basic_table.html"
    },

    "/blank.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "Blank page",
        inc: "include/blank.html"
    },

    "/buttons.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "Button",
        inc: "include/buttons.html"
    },

    "/calendar.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "calendar",
        inc: "include/calendar.html"
    },

    "/chartjs.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "chartjs",
        inc: "include/chartjs.html"
    },

    "/form_component.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "form_component",
        inc: "include/form_component.html"
    },

    "/general.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "general",
        inc: "include/general.html"
    },

    "/admin_index.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "admin_index",
        inc: "include/index.html"
    },

    "/morris.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "morris",
        inc: "include/morris.html"
    },

    "/panels.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "panels",
        inc: "include/panels.html"
    },

    "/responsive_table.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "responsive_table",
        inc: "include/responsive_table.html"
    },

    "/todo_list.html": {
        view: "admin/master.html",
        auth: this.auth_guest,
        title: "todo_list",
        inc: "include/todo_list.html"
    }
};