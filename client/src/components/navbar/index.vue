<template lang='pug'>
  b-navbar(toggleable,toggle-breakpoint="sm",type='inverse',variant='custom',fixed='top')
    b-nav-toggle(target='nav_collapse')

    b-collapse#nav_collapse(is-nav)

      //- Left Side
      b-nav(is-nav-bar)
        b-nav-item(to='/') Dashboard

        b-nav-item-dropdown(text='Games')
          b-dropdown-item.dropdown-submenu
            span(tabindex='-1',href='#') 40K 8th
            ul.dropdown-menu
              li
                b-dropdown-item.interaction
                  b-dropdown-item(to='/games/fourtyk8th') Armies
                  b-dropdown-item(to='/games/fourtyk8th/create') Create

      //- Right Side
      b-nav.ml-auto(is-nav-bar)
        b-nav-item-dropdown(text='Settings',right-alignment=true,v-show='$root.user.type_id == 1')
          b-dropdown-item(to='/settings/users') Users

        b-nav-item-dropdown(:text='$root.username',right-alignment=true)
          b-dropdown-item(to='/profile') Profile
          b-dropdown-divider
          b-dropdown-item(to='/session/destroy') Logout

</template>

<scripts>
	

	export default {
	  name: 'navbar'
	}
</scripts>

<style>

    .custom-link {
        color: black;
        text-decoration: none;
    }.custom-link:hover {
        color: black;
        text-decoration: none;
    }

    /* https://github.com/twbs/bootstrap/issues/17408 */
	.navbar-default .navbar-nav > li > a {
	    color:white;
	}
	.bg-custom {
		background-color: black !important;
	}
	.nav {
		margin-left:10%;
		margin-right:20%;
	}
  .dropdown-submenu { position: relative }
  .dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .dropdown-submenu:hover>.dropdown-menu { display: block }
  .dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
  }
  .dropdown-submenu:hover>a:after { border-left-color: #ccc }
  .dropdown-submenu.pull-left { float: none }
  .dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
</style>