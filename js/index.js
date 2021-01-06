const menuSearchClick = () => {
    var txtSearch = document.getElementById("txtSearch");
    if (txtSearch.classList.contains('active')) {
      txtSearch.classList.remove('active');
    } else {
      txtSearch.classList.add('active');
    }
  }