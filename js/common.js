$('#drop').on('change', function () {
  if (this.checked) {
    $('#show-list').hide()
    $('#hide-list').show()
  } else {
    $('#show-list').show()
    $('#hide-list').hide()
  }
})

function adjustStyles () {
  screenWidth = window.innerWidth

  if (screenWidth >= 1024 && screenWidth < 1320) {
    $('#menu_about').html('About <i class="bi bi-chevron-down bi-bold"></i>')
    $('#menu_info').html('Info <i class="bi bi-chevron-down bi-bold"></i>')
  } else {
    $('#menu_about').html(
      'About Beaver Summer Camp <i class="bi bi-chevron-down bi-bold"></i>'
    )
    $('#menu_info').html(
      'Info for Families <i class="bi bi-chevron-down bi-bold"></i>'
    )
  }

  var e_str = [
    { name: 'h1', fontSize: 54, lineHeight: 60 },
    { name: 'h2', fontSize: 46, lineHeight: 48 },
    { name: 'h2.alt', fontSize: 46, lineHeight: 50 },
    { name: 'h3', fontSize: 30, lineHeight: 32 },
    { name: 'h3.alt', fontSize: 35, lineHeight: 35 },
    { name: 'h4', fontSize: 23, lineHeight: 24 },
    { name: 'h5', fontSize: 19, lineHeight: 21 },
    { name: 'a', fontSize: 20, lineHeight: 27 },
    { name: 'select', fontSize: 20, lineHeight: 20 },
    { name: 'label', fontSize: 20, lineHeight: 20 },
    { name: 'input', fontSize: 20, lineHeight: 20 },
    { name: 'a.nav-link', fontSize: 20, lineHeight: 25 },
    { name: 'a.utility-nav', fontSize: 15, lineHeight: 15 },
    { name: 'p.eyebrow', fontSize: 22, lineHeight: 22 },
    { name: 'button', fontSize: 20, lineHeight: 20 },
    { name: '.button', fontSize: 20, lineHeight: 20 },
    { name: 'p.XXL', fontSize: 50, lineHeight: 65 },
    { name: 'p.XL', fontSize: 26, lineHeight: 32 },
    { name: 'p.L', fontSize: 24, lineHeight: 35 },
    { name: 'p.M', fontSize: 20, lineHeight: 27 },
    { name: 'p.S', fontSize: 18, lineHeight: 27 },
    { name: 'p.XS', fontSize: 16, lineHeight: 19 },
    { name: 'p.call-out', fontSize: 39, lineHeight: 39 },
    { name: 'a.text-link', fontSize: 20, lineHeight: 27 },
    { name: 'body .footer label.copyright', fontSize: 14, lineHeight: 27 },
    {
      name: 'body .nav-tool-bar .nav-home .menu ul li a',
      fontSize: 17,
      lineHeight: 25
    },
    {
      name: 'body .footer .footer-right .link-btn a',
      fontSize: 15,
      lineHeight: 15
    },
    {
      name: 'body .footer .footer-right .link-group .link-list a',
      fontSize: 17,
      lineHeight: 27
    }
  ]

  if (screenWidth > 1024) {
    t = screenWidth / 1400

    let element
    for (var i = 0; i < e_str.length; i++) {
      element = $(e_str[i].name)
      for (var j = 0; j < element.length; j++) {
        element[j].style.fontSize = (t * e_str[i].fontSize) / 20 + 'rem'
        element[j].style.lineHeight = (t * e_str[i].lineHeight) / 20 + 'rem'
      }
    }
  } else {
    for (var i = 0; i < e_str.length; i++) {
      element = $(e_str[i].name)
      for (var j = 0; j < element.length; j++) {
        element[j].style.fontSize = ''
        element[j].style.lineHeight = ''
      }
    }
  }
}

adjustStyles()

window.addEventListener('resize', adjustStyles)
