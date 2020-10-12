const app = {
  init() {
    this.bindEvent();


  },
  bindEvent() {
    this.userManager();
  },
  userManager() {
    const _this = this;
    $('#userTable').on('click', '.j-edit', function (e) {
      const id = $(this).parents('tr').data('id');
      var data = {
        title: '编辑用户',
        username: '555',
        password: '999'
      };

      _this.render('modal-editUser', 'modalContent', data);
      _this.openModal('userModal')
    });

    $('.j-addUser').on('click', function (e) {
      var data = {
        title: '添加用户',
      };

      _this.render('modal-addUser', 'modalContent', data);
      _this.openModal('userModal')
    });

    $(document).on('click', '.j-adduserSub', function () {

      let formD = new FormData($('#addUserForm').get(0));
      for (var pair of formD.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
    })

    

  },
  render(tplId, targetHtmlId, data) {
    var html = template(tplId, data);
    $(`#${targetHtmlId}`).html(html);
  },
  openModal(modalId) {
    $(`#${modalId}`).modal();
  }
}


$(function () {
  app.init();
})